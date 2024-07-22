"use client";

import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { useAuth } from "@/app/AuthContext";

export default function SetToken() {
  const authContext = useAuth();

  useEffect(() => {
    const setToken = async () => {
      if (authContext && !Cookies.get("app_key")) {
        await authContext.login("email@example.com", "password");
      }
    };

    setToken();
  }, [JSON.stringify(authContext)]);

  return <div>Set token page {authContext?.user?.name}</div>;
}
