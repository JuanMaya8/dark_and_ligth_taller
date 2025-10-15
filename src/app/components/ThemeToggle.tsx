"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark"|"light">("dark");
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const t = stored === "light" ? "light" : (stored === "dark" ? "dark" : (prefersDark ? "dark":"light"));
    setTheme(t);
    document.documentElement.classList.toggle("light", t === "light");
  }, []);

  function toggle(){
    const t = theme === "dark" ? "light" : "dark";
    setTheme(t);
    localStorage.setItem("theme", t);
    document.documentElement.classList.toggle("light", t === "light");
  }

  return (
    <button onClick={toggle} className="fixed top-6 left-6 z-50 p-2 rounded-md bg-foreground text-white">
      {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
