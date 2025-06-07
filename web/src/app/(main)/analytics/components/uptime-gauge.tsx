"use client";
import { Card } from "@/components/ui/card";
import { UptimeAnalyticsOptionSample } from "@/samples/analytics";
import ReactECharts from "echarts-for-react";

export default function UptimeGauge() {
  return (
    <Card className="size-full">
      <ReactECharts option={UptimeAnalyticsOptionSample} />
    </Card>
  );
}
