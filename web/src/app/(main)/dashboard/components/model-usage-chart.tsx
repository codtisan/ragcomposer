"use client";
import { Card } from "@/components/ui/card";
import { ModelUsageBarChartOptionSample } from "@/samples/dashboard";
import ReactECharts from "echarts-for-react";

export default function ModelUsageAreaChart() {
  return (
    <Card className="size-full">
      <ReactECharts option={ModelUsageBarChartOptionSample} />
    </Card>
  );
}
