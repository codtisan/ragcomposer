"use client";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      size="icon"
      className="rounded-4xl"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? <Sun /> : <Moon />}
    </Button>
  );
};
