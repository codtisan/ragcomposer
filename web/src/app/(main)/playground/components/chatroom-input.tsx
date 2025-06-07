import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function ChatroomInput() {
  return (
    <>
      <Textarea placeholder="Type your message here." />
      <div>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button className="rounded-4xl w-[4rem] h-[4rem]">
              <Send />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>Send</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </>
  );
}
