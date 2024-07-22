"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

import { COOKIE_AUTH } from "@/constants/cache";
import { useAppDispatch } from "@/lib/store/store";
import { deleteAuthState, setAuthState } from "@/lib/store/authSlice";

interface IAuthContextType {
  user: IUserAuth | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

interface IAuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<IAuthContextType | null>(null);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [user, setUser] = useState<IUserAuth | null>(null);
  const router = useRouter();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (Cookies.get(COOKIE_AUTH)) {
      setUser({
        id: 1,
        name: "ngoc.hoang@gmail.com",
        email: "ngoc.hoang@gmail.com",
      });
    }
  }, []);

  const login = async (email: string, password: string) => {
    Cookies.set(COOKIE_AUTH, "value", { expires: 7 });
    dispatch(
      setAuthState({
        user: {
          id: 1,
          name: "ngoc.hoang@gmail.com",
          email: "ngoc.hoang@gmail.com",
        },
      })
    );
    setUser({
      id: 1,
      name: "ngoc.hoang@gmail.com",
      email: "ngoc.hoang@gmail.com",
    });
  };

  const logout = async () => {
    Cookies.remove(COOKIE_AUTH);
    setUser(null);
    dispatch(deleteAuthState())
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
