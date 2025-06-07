"use client";
import { Label } from "@/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { Input } from "@/components/ui/input";

export default function ParameterPlane() {
  const defaultTemperature = 0.3;
  const defaultMaximumLength = 2000;
  const defaultTopK = 0.5;
  const defaultTopP = 0.4;
  const [temperature, setTemperature] = useState<number>(defaultTemperature);
  const [maxLength, setMaxLength] = useState<number>(defaultMaximumLength);
  const [topk, setTopK] = useState<number>(defaultTopK);
  const [topp, settopP] = useState<number>(defaultTopP);

  return (
    <div className="flex flex-col gap-6 mt-4 w-[90%] h-[90%]">
      <div className="flex flex-col">
        <Label className="font-bold text-base">Model</Label>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full">
              Select a model
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[16rem]" align="center">
            <DropdownMenuGroup>
              <DropdownMenuItem>Gemini</DropdownMenuItem>
              <DropdownMenuItem>Grok</DropdownMenuItem>
              <DropdownMenuItem>Claude</DropdownMenuItem>
              <DropdownMenuItem>GPT-4</DropdownMenuItem>
              <DropdownMenuItem>Qwen3</DropdownMenuItem>
              <DropdownMenuItem>Deepseek</DropdownMenuItem>
              <DropdownMenuItem>Mistral</DropdownMenuItem>
              <DropdownMenuItem>Llama4</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Label className="font-bold text-base">Maximum of GPUs</Label>
      <Input type="number" min="0" max="16" />
      <div className="flex flex-row justify-between">
        <Label className="font-bold text-base">Temperature</Label>
        <Label className="font-bold text-base">{temperature}</Label>
      </div>
      <Slider
        defaultValue={[defaultTemperature]}
        max={1}
        step={0.01}
        onValueChange={(newValue: number[]) => {
          setTemperature(newValue[0]);
        }}
      />
      <div className="flex flex-row justify-between">
        <Label className="font-bold text-base">Maximum Length</Label>
        <Label className="font-bold text-base">{maxLength}</Label>
      </div>
      <Slider
        defaultValue={[defaultMaximumLength]}
        max={10000}
        step={100}
        onValueChange={(newValue: number[]) => {
          setMaxLength(newValue[0]);
        }}
      />
      <div className="flex flex-row justify-between">
        <Label className="font-bold text-base">Top K</Label>
        <Label className="font-bold text-base">{topk}</Label>
      </div>
      <Slider
        defaultValue={[defaultTopK]}
        max={1}
        step={0.01}
        onValueChange={(newValue: number[]) => {
          setTopK(newValue[0]);
        }}
      />
      <div className="flex flex-row justify-between">
        <Label className="font-bold text-base">Top P</Label>
        <Label className="font-bold text-base">{topp}</Label>
      </div>
      <Slider
        defaultValue={[defaultTopP]}
        max={1}
        step={0.01}
        onValueChange={(newValue: number[]) => {
          settopP(newValue[0]);
        }}
      />
    </div>
  );
}
