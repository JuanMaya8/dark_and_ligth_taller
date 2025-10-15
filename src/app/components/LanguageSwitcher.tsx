"use client";
import Link from "next/link";

export default function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  const langs = ["es", "en"];
  return (
    <nav className="fixed top-6 right-6 z-50 flex gap-2">
      {langs.map((l) => (
        <Link
          key={l}
          href={`/${l}`}
          className={
            "px-3 py-1 rounded-md text-sm " + (l === currentLang ? "bg-white text-black" : "bg-foreground text-white")
          }
        >
          {l.toUpperCase()}
        </Link>
      ))}
    </nav>
  );
}
