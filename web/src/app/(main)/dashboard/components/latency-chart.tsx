"use client";
import { Card } from "@/components/ui/card";
import { LatencyAreaChartOptionSample } from "@/samples/dashboard";
import ReactECharts from "echarts-for-react";

export default function LatencyAreaChart() {
  return (
    <Card className="size-full">
      <ReactECharts option={LatencyAreaChartOptionSample()} />
    </Card>
  );
}
