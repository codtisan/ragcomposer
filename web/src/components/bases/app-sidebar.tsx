import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { Button } from "../ui/button";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/home",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "/inbox",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "/ca",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "/search",
    icon: Search,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

export const AppSidebar = () => {
  return (
    <div className="w-[3rem] h-[95vh] flex flex-col items-center border-r shadow-sm gap-2">
      {items.map((item) => {
        return (
          <Tooltip key={item.title}>
            <TooltipTrigger asChild>
              <Button className="hover:bg-sky-100" variant="link">
                <Link href={item.url}>
                  <item.icon />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>{item.title}</p>
            </TooltipContent>
          </Tooltip>
        );
      })}
    </div>
  );
};

export default AppSidebar;
