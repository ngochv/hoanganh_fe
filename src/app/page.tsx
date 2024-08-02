"use client";

import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

import { deleteToken } from "@/utils/auth";
import { deleteAuthState } from "@/lib/store/authSlice";
import { RootState, useAppDispatch } from "@/lib/store/store";
import OrderCreate from "./orders/create";

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
      <OrderCreate />
    </section>
  );
}
