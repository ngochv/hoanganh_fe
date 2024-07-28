"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { RootState, useAppDispatch } from "@/lib/store/store";
import { deleteAuthState } from "@/lib/store/authSlice";
import { useSelector } from "react-redux";
import { isAuthentication, deleteToken } from "@/utils/auth";

interface IAuthContextType {
  user: IUserAuth | null;
  setUserAuth: (user: IUserAuth) => void;
  logout: () => Promise<void>;
}

interface IAuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<IAuthContextType | null>(null);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [user, setUser] = useState<IUserAuth | null>(null);
  const router = useRouter();
  const userState = useSelector((state: RootState) => state.auth.user);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (JSON.stringify(userState) && isAuthentication()) {
      setUser(userState);
    }
  }, []);

  const setUserAuth = (user: IUserAuth) => {
    setUser(user);
  };

  const logout = async () => {
    deleteToken();
    setUser(null);
    dispatch(deleteAuthState());
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user, setUserAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
