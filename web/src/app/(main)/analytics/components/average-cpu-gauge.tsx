"use client";
import { Card } from "@/components/ui/card";
import { CPUUsageAnalyticsOptionSample } from "@/samples/analytics";
import ReactECharts from "echarts-for-react";

export default function CPUUsageGauge() {
  return (
    <Card className="size-full">
      <ReactECharts option={CPUUsageAnalyticsOptionSample} />
    </Card>
  );
}
