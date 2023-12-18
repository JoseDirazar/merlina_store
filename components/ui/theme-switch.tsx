"use client";

import { useTheme } from "@/providers/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-5 right-5 flex h-[3rem] w-[3rem] items-center justify-center rounded-full border-[2px] border-[#8871B7] border-opacity-40 bg-[#8871B7] text-[#E8D7FF]"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <BsMoon className="rounded-full text-xl font-bold text-white" />
      ) : (
        <BsSun className="text-xl dark:text-[#E8D7FF]" />
      )}
    </button>
  );
}
