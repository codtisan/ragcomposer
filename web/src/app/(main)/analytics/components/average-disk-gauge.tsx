"use client";
import { Card } from "@/components/ui/card";
import { DiskUsageAnalyticsOptionSample } from "@/samples/analytics";
import ReactECharts from "echarts-for-react";

export default function DiskUsageGauge() {
  return (
    <Card className="size-full">
      <ReactECharts option={DiskUsageAnalyticsOptionSample} />
    </Card>
  );
}
