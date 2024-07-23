"use client";

import React, { useState } from "react";
import type { FormProps } from "antd";
import { Button, Form, Input, message } from "antd";
import utilStyle from "./utilStyle.module.scss";
import Loading from "@/components/Loading";
import { apiLogin } from "@/lib/api";
import { isResponseSuccess } from "@/lib/helpers";
import { useAppDispatch } from "@/lib/store/store";
import { setAuthState } from "@/lib/store/authSlice";
import { useAuth } from "../AuthContext";
import { useRouter } from "next/navigation";
import { setToken } from "@/utils/auth";

type FieldType = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const dispatch = useAppDispatch();
  const authContext = useAuth();
  const router = useRouter();

  const [isLoadingSubmit, setLoadingSubmit] = useState(false);

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    setLoadingSubmit(true);
    try {
      const responseLogin = await apiLogin({
        email: values.email,
        password: values.password,
      });
      if (isResponseSuccess(responseLogin)) {
        const { data, status }: any = responseLogin;
        setToken(data.token);
        dispatch(setAuthState({ user: data.user, roles: data.roles }));
        if (authContext) {
          authContext.setUserAuth({ ...data.user });
        }
        router.push('/');
      } else {
        message.error("Email hoặc mật khẩu không đúng.");
      }
    } catch (error) {
    } finally {
      setLoadingSubmit(false);
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <section className={utilStyle.pageLogin}>
      <div className="flex items-center justify-center min-h-screen">
        <div className="sign-in-boxmt-10 sm:mx-auto sm:w-full sm:max-w-md">
          <div className={utilStyle.boxLogin}>
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Đăng nhập
              </h2>
            </div>
            <Form
              name="formLogin"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              style={{ maxWidth: 600 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              className={utilStyle.formLogin}
            >
              <Form.Item<FieldType>
                label="Email đăng nhập"
                name="email"
                className={utilStyle.inputLabel}
                rules={[{ required: true, message: "Vui lòng nhập email!" }]}
              >
                <Input />
              </Form.Item>

              <Form.Item<FieldType>
                label="Nhập mật khẩu"
                name="password"
                className={utilStyle.inputLabel}
                rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
              >
                <Input.Password autoComplete="new-password" />
              </Form.Item>

              <Form.Item wrapperCol={{ span: 24 }} className="mt-10">
                <Button
                  type="primary"
                  htmlType="submit"
                  className={utilStyle.btnSubmit}
                  disabled={isLoadingSubmit}
                >
                  Đăng nhập {isLoadingSubmit && <Loading />}
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
