"use client";

import { Button } from "antd";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

import { removeToken } from "@/utils/auth";
import { deleteAuthState } from "@/lib/store/authSlice";
import { RootState, useAppDispatch } from "@/lib/store/store";

export default function Home() {
  const userState = useSelector((state: RootState) => state.auth.user);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const logout = () => {
    removeToken();
    dispatch(deleteAuthState());
    router.push("/login");
  };

  return (
    <main>
      <div>Page home {userState?.name}</div>
      <Button onClick={() => logout()}>Logout</Button>
    </main>
  );
}
