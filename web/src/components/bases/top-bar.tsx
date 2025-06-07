"use client";
import Image from "next/image";
import Logo from "@/assets/RAGComposer.png";
import { ColourfulText } from "@/components/ui/colourful-text";
import { ThemeSwitch } from "@/components/bases/theme-switch";
import { useRouter } from "next/navigation";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const TopBar = () => {
  const router = useRouter();

  const handleClickLogo = async () => {
    router.push("/");
  };

  return (
    <div className="h-[5vh] flex justify-between items-center border-b shadow-sm bg-[#F3F4F9] dark:bg-[#1F2A44]">
      <div
        className="flex flex-row items-center gap-2 ml-2"
        onClick={handleClickLogo}
      >
        <Image
          src={Logo}
          alt="System Logo"
          width={30}
          height={30}
          priority={true}
        />
        <h1 className="text-2xl font-bold">
          <ColourfulText text="RAGComposer" />
        </h1>
      </div>
      <div className="mr-2 flex flex-row items-center gap-3">
        <ThemeSwitch />
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        </Avatar>
      </div>
    </div>
  );
};

export default TopBar;
