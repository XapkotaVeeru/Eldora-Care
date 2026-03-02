// src/context/AuthContext.js
// ─────────────────────────────────────────────
// CREATE NEW FOLDER: src/context/
// CREATE THIS FILE:  src/context/AuthContext.js
// ─────────────────────────────────────────────

import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser]       = useState(null);
  const [role, setRole]       = useState(null); // 'family' | 'elder'
  const [loading, setLoading] = useState(true);

  // On app load, restore session from localStorage
  useEffect(() => {
    const storedUser  = localStorage.getItem("eldora_user");
    const storedRole  = localStorage.getItem("eldora_role");
    const storedToken = localStorage.getItem("eldora_token");
    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setRole(storedRole);
    }
    setLoading(false);
  }, []);

  // Call this after successful Google OAuth or email login
  const login = (userData, userRole, token) => {
    localStorage.setItem("eldora_user",  JSON.stringify(userData));
    localStorage.setItem("eldora_role",  userRole);
    localStorage.setItem("eldora_token", token);
    setUser(userData);
    setRole(userRole);
  };

  const logout = () => {
    localStorage.removeItem("eldora_user");
    localStorage.removeItem("eldora_role");
    localStorage.removeItem("eldora_token");
    setUser(null);
    setRole(null);
  };

  const getToken = () => localStorage.getItem("eldora_token");

  return (
    <AuthContext.Provider value={{ user, role, loading, login, logout, getToken }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook — use this in any component: const { user, login, logout } = useAuth();
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
}