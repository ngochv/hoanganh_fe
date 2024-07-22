"use client";

import { useAuth } from "./AuthContext";

export default function Home() {
  const authContext = useAuth();

  return (
    <main>
      <div>Page home {authContext?.user?.name}</div>
      <div onClick={() => authContext?.logout()}>Logout</div>
    </main>
  );
}
