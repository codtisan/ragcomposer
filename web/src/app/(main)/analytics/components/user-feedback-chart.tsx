"use client";
import { Card } from "@/components/ui/card";
import { UserFeedbackPieChartOptionSample } from "@/samples/analytics";
import ReactECharts from "echarts-for-react";

export default function UserFeedbackPieChart() {
  return (
    <Card className="size-full">
      <ReactECharts option={UserFeedbackPieChartOptionSample} />
    </Card>
  );
}
