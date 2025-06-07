"use client";
import LatencyAreaChart from "./components/latency-chart";
import ThroughputAreaChart from "./components/total-request-chart";
import ModelUsageAreaChart from "./components/model-usage-chart";
import TotalCostAreaChart from "./components/total-cost-chart";
import { DatePickerWithRange } from "@/components/bases/datepicker";
import { ChartDataDownloadMenu } from "./components/chart-download-menu";

export default function Dashboard() {
  return (
    <div className="size-full flex items-center justify-center">
      <div className="w-[98%] h-[96%] gap-4 flex flex-col">
        <div className="flex flex-col gap-4 size-full">
          <div className="flex flex-row gap-4">
            <DatePickerWithRange />
            <ChartDataDownloadMenu />
          </div>
          <div className="flex flex-row gap-4 h-[45%]">
            <LatencyAreaChart />
            <ThroughputAreaChart />
          </div>
          <div className="flex flex-row gap-4 h-[45%]">
            <ModelUsageAreaChart />
            <TotalCostAreaChart />
          </div>
        </div>
      </div>
    </div>
  );
}
