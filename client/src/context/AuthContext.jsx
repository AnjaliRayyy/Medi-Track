import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // only stores non-sensitive info
  const [loading, setLoading] = useState(true);

  // Check if user is already logged in (via backend cookie)
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/auth/me", {
          method: "GET",
          credentials: "include", // 👈 sends the cookie automatically
        });

        if (res.ok) {
          const data = await res.json();
          setUser(data); // { name, email } only
        } else {
          setUser(null);
        }
      } catch (err) {
        console.error("Auth check failed:", err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  // Login function
  const login = async (credentials) => {
    const res = await fetch("http://localhost:8000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
      credentials: "include", // 👈 cookie set by backend
    });

    if (res.ok) {
      const data = await res.json();
      setUser(data.user); // again, only safe fields like name/email
    } else {
      throw new Error("Login failed");
    }
  };

  // Logout function
  const logout = async () => {
    await fetch("http://localhost:8000/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
