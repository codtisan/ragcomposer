"use client";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      size="sm"
      className="rounded-3xl"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? <Sun /> : <Moon />}
    </Button>
  );
};
