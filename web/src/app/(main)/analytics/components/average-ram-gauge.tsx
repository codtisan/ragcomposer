"use client";
import { Card } from "@/components/ui/card";
import { RAMUsageAnalyticsOptionSample } from "@/samples/analytics";
import ReactECharts from "echarts-for-react";

export default function RAMUsageGauge() {
  return (
    <Card className="size-full">
      <ReactECharts option={RAMUsageAnalyticsOptionSample} />
    </Card>
  );
}
