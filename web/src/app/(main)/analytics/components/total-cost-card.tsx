"use client";
import { Card } from "@/components/ui/card";

export default function TotalCostCard() {
  return (
    <Card className="size-full flex items-center justify-center text-3xl font-bold">
      <div>Total Cost</div>
      <div>$10000</div>
    </Card>
  );
}
