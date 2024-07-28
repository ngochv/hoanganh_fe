"use client";

import { Button } from "antd";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

import { deleteToken } from "@/utils/auth";
import { deleteAuthState } from "@/lib/store/authSlice";
import { RootState, useAppDispatch } from "@/lib/store/store";

export default function Home() {
  const userState = useSelector((state: RootState) => state.auth.user);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const logout = () => {
    deleteToken();
    dispatch(deleteAuthState());
    router.push("/login");
  };

  return (
    <section>
      page home client
      {/* <Button onClick={() => logout()}>Logout</Button> */}
    </section>
  );
}
