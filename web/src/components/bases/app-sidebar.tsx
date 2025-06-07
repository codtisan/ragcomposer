"use client";
import {
  BookOpenText,
  Bot,
  BotMessageSquare,
  Bug,
  ChartSpline,
  Cpu,
  DatabaseBackup,
  File,
  Key,
  LayoutDashboard,
  LucideProps,
  MessageCircleCode,
  MessageSquare,
  MoveLeft,
  MoveRight,
  Network,
  Package,
  Pickaxe,
  SearchIcon,
  Settings,
  Sheet,
  User,
  Workflow,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  Dispatch,
  ForwardRefExoticComponent,
  RefAttributes,
  SetStateAction,
  useState,
} from "react";
import { cn } from "@/lib/utils";

export type PageItem = {
  title: string;
  url: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
};

const firstPageItemList: PageItem[] = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Analytics",
    url: "/analytics",
    icon: ChartSpline,
  },
  {
    title: "Chatbot",
    url: "/chatbot",
    icon: Bot,
  },
  {
    title: "Agent",
    url: "/agent",
    icon: BotMessageSquare,
  },
  {
    title: "Prompt",
    url: "/prompt",
    icon: MessageCircleCode,
  },
  {
    title: "Workflow",
    url: "/workflow",
    icon: Workflow,
  },
  {
    title: "Model",
    url: "/model",
    icon: Package,
  },
  {
    title: "Knowledge Base",
    url: "/knowledgebase",
    icon: BookOpenText,
  },
  {
    title: "Document",
    url: "/document",
    icon: File,
  },
  {
    title: "Knowledge Graph",
    url: "/graph",
    icon: Network,
  },
  {
    title: "Chat History",
    url: "/chathistory",
    icon: MessageSquare,
  },
];

const secondPageItemList: PageItem[] = [
  {
    title: "Log",
    url: "/log",
    icon: SearchIcon,
  },
  {
    title: "Metrics",
    url: "/metrics",
    icon: Cpu,
  },
  {
    title: "Crawler",
    url: "/crawler",
    icon: Bug,
  },
  {
    title: "Dataset",
    url: "/dataset",
    icon: Sheet,
  },
  {
    title: "Simulator",
    url: "/simulator",
    icon: Pickaxe,
  },
  {
    title: "IAM",
    url: "/iam",
    icon: User,
  },
  {
    title: "Key",
    url: "/key",
    icon: Key,
  },
  {
    title: "Backup and Restore",
    url: "/backup",
    icon: DatabaseBackup,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

const MenuItemList = (
  item: PageItem,
  selectedItem: string,
  setSelectedItem: Dispatch<SetStateAction<string>>,
) => {
  return (
    <Tooltip key={item.title}>
      <TooltipTrigger asChild>
        <Button
          className={cn(
            "hover:bg-gray-300 hover:dark:bg-black",
            selectedItem === item.title ? "bg-gray-300 dark:bg-black" : "",
          )}
          variant="link"
          onClick={() => setSelectedItem(item.title)}
        >
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
};

export const AppSidebar = () => {
  const [page, setPage] = useState<"first" | "second">("first");
  const [selectedItem, setSelectedItem] = useState<string>("");

  return (
    <div className="w-[3rem] flex flex-col items-center border-r shadow-sm justify-between bg-[#F3F4F9] dark:bg-[#1F2A44]">
      <div className="flex flex-col items-center gap-2 mt-4">
        {page === "first"
          ? firstPageItemList.map((item: PageItem) => {
              return MenuItemList(item, selectedItem, setSelectedItem);
            })
          : secondPageItemList.map((item: PageItem) => {
              return MenuItemList(item, selectedItem, setSelectedItem);
            })}
      </div>
      <Tooltip key="Next">
        <TooltipTrigger asChild>
          <Button
            className="hover:bg-gray-200 mb-4"
            variant="link"
            onClick={() => setPage(page === "first" ? "second" : "first")}
          >
            {page === "first" ? <MoveRight /> : <MoveLeft />}
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>Next</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
};

export default AppSidebar;
