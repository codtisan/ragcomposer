"use client";
import { Card } from "@/components/ui/card";
import { MoveUp } from "lucide-react";

export default function RequestRateCard() {
  return (
    <Card className="size-full flex items-center justify-center text-3xl font-bold">
      <div>Request Rate</div>
      <div>100k/s</div>
      <div className="w-[60%] h-[20%] flex items-center justify-center bg-green-300 rounded-3xl gap-3">
        <div>
          <MoveUp />
        </div>
        <div>12%</div>
      </div>
    </Card>
  );
}
