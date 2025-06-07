"use client";
import { Card } from "@/components/ui/card";
import { TotalCostAreaChartOptionSample } from "@/samples/dashboard";
import ReactECharts from "echarts-for-react";

export default function TotalCostAreaChart() {
  return (
    <Card className="size-full">
      <ReactECharts option={TotalCostAreaChartOptionSample()} />
    </Card>
  );
}
