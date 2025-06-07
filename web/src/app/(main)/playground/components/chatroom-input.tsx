"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Mic, Paperclip, Send } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ChatroomInput() {
  const handleFileUpload = () => {};
  return (
    <>
      <Tooltip key="File">
        <TooltipTrigger asChild>
          <Label className="flex justify-center items-center rounded-4xl w-[3rem] h-[3rem] hover:bg-gray-50">
            <Paperclip />
            <Input type="file" hidden onChange={handleFileUpload} />
          </Label>
        </TooltipTrigger>
        <TooltipContent side="top">
          <p>Upload File</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip key="Mic">
        <TooltipTrigger asChild>
          <Button className="rounded-4xl w-[3rem] h-[3rem]" variant="ghost">
            <Mic style={{ width: 26, height: 26 }} />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="top">
          <p>Microphone</p>
        </TooltipContent>
      </Tooltip>
      <Textarea placeholder="Type your message here." />
      <div>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button className="rounded-4xl w-[4rem] h-[4rem]">
              <Send style={{ width: 26, height: 26 }} />
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
