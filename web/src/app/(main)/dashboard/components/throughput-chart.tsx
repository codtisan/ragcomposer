"use client";
import { Card } from "@/components/ui/card";
import { RequestRateAreaChartOptionSample } from "@/samples/dashboard";
import ReactECharts from "echarts-for-react";

export default function ThroughputAreaChart() {
  return (
    <Card className="size-full">
      <ReactECharts option={RequestRateAreaChartOptionSample()} />
    </Card>
  );
}
