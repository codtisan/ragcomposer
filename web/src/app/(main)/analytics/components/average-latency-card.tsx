"use client";
import { Card } from "@/components/ui/card";

export default function AverageLatencyCard() {
  return (
    <Card className="size-full flex items-center justify-center text-3xl font-bold">
      <div>Average Latency</div>
      <div>800ms</div>
    </Card>
  );
}
