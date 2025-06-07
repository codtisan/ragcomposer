"use client";
import { Card } from "@/components/ui/card";

export default function RequestRateCard() {
  return (
    <Card className="size-full flex items-center justify-center text-3xl font-bold">
      <div>Request Rate</div>
      <div>100k/s</div>
    </Card>
  );
}
