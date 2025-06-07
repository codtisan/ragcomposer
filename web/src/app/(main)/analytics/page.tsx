import { DatePickerWithRange } from "@/components/bases/datepicker";
import CPUUsageGauge from "./components/average-cpu-gauge";
import DiskUsageGauge from "./components/average-disk-gauge";
import RAMUsageGauge from "./components/average-ram-gauge";
import ErrorRateCard from "./components/error-rate-card";
import RequestRateCard from "./components/request-rate-card";
import UptimeGauge from "./components/uptime-gauge";
import UserFeedbackPieChart from "./components/user-feedback-chart";
import UserSentimentPieChart from "./components/user-sentiment-chart";
import { ChartDataDownloadMenu } from "../dashboard/components/chart-download-menu";
import AverageLatencyCard from "./components/average-latency-card";
import TotalCostCard from "./components/total-cost-card";

export default function Home() {
  return (
    <div className="size-full flex items-center justify-center">
      <div className="w-[98%] h-[96%] gap-4 flex flex-col">
        <div className="flex flex-col gap-4 size-full">
          <div className="flex flex-row gap-4">
            <DatePickerWithRange />
            <ChartDataDownloadMenu />
          </div>
          <div className="flex flex-row gap-4 h-[45%]">
            <CPUUsageGauge />
            <RAMUsageGauge />
            <DiskUsageGauge />
            <UptimeGauge />
            <RequestRateCard />
            <ErrorRateCard />
          </div>
          <div className="flex flex-row gap-4 h-[45%] w-full">
            <div className="flex flex-row gap-4 w-[66.6%]">
              <UserFeedbackPieChart />
              <UserSentimentPieChart />
            </div>
            <div className="w-[16%]">
              <AverageLatencyCard />
            </div>
            <div className="w-[16%]">
              <TotalCostCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
