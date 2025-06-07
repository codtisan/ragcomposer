"use client";
import { Card } from "@/components/ui/card";
import { UserSentimentPieChartOptionSample } from "@/samples/analytics";
import ReactECharts from "echarts-for-react";

export default function UserSentimentPieChart() {
  return (
    <Card className="size-full">
      <ReactECharts option={UserSentimentPieChartOptionSample} />
    </Card>
  );
}
