import * as echarts from "echarts";

export const LatencyAreaChartOptionSample = () => {
  let base = +new Date(1968, 9, 3);
  const oneDay = 24 * 3600 * 1000;
  const date = [];

  const data = [Math.random() * 300];

  for (let i = 1; i < 20000; i++) {
    const now = new Date((base += oneDay));
    date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/"));
    data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
  }

  const option = {
    tooltip: {
      trigger: "axis",
      position: function (pt: number[]) {
        return [pt[0], "10%"];
      },
    },
    title: {
      left: "center",
      text: "Latency",
    },
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: "none",
        },
        restore: {},
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: date,
    },
    yAxis: {
      type: "value",
      boundaryGap: [0, "100%"],
    },
    dataZoom: [
      {
        type: "inside",
        start: 0,
        end: 10,
      },
      {
        start: 0,
        end: 10,
      },
    ],
    series: [
      {
        name: "Fake Data",
        type: "line",
        symbol: "none",
        sampling: "lttb",
        itemStyle: {
          color: "#5CDD8C",
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#365B49",
            },
            {
              offset: 1,
              color: "#5CDD8C",
            },
          ]),
        },
        data: data,
      },
    ],
  };

  return option;
};

export const RequestRateAreaChartOptionSample = () => {
  let base = +new Date(1968, 9, 3);
  const oneDay = 24 * 3600 * 1000;
  const date = [];

  const data = [Math.random() * 300];

  for (let i = 1; i < 20000; i++) {
    const now = new Date((base += oneDay));
    date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/"));
    data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
  }

  const option = {
    tooltip: {
      trigger: "axis",
      position: function (pt: number[]) {
        return [pt[0], "10%"];
      },
    },
    title: {
      left: "center",
      text: "Total Request",
    },
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: "none",
        },
        restore: {},
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: date,
    },
    yAxis: {
      type: "value",
      boundaryGap: [0, "100%"],
    },
    dataZoom: [
      {
        type: "inside",
        start: 0,
        end: 10,
      },
      {
        start: 0,
        end: 10,
      },
    ],
    series: [
      {
        name: "Fake Data",
        type: "line",
        symbol: "none",
        sampling: "lttb",
        itemStyle: {
          color: "#5CDD8C",
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#365B49",
            },
            {
              offset: 1,
              color: "#5CDD8C",
            },
          ]),
        },
        data: data,
      },
    ],
  };

  return option;
};

export const ModelUsageBarChartOptionSample = {
  title: {
    text: "Model Usage",
    subtext: "Monthly Tokens (in thousands)",
    left: "center",
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  toolbox: {
    feature: {
      saveAsImage: {
        show: true,
        title: "Save as Image",
        type: "png",
        name: "my-chart",
        pixelRatio: 2,
        backgroundColor: "#fff",
        excludeComponents: ["toolbox"],
      },
    },
  },
  xAxis: {
    type: "category",
    data: [
      "Grok",
      "ChatGPT",
      "Claude",
      "Llama",
      "Mistral",
      "Qwen",
      "Deepseek",
      "Gemini",
    ],
    axisTick: {
      alignWithLabel: true,
    },
  },
  yAxis: {
    type: "value",
    name: "Tokens (K)",
    axisLabel: {
      formatter: "{value}K",
    },
  },
  series: [
    {
      name: "Tokens",
      type: "bar",
      barWidth: "30%",
      data: [
        { value: 120, itemStyle: { color: "#5470C6" } },
        { value: 200, itemStyle: { color: "#91CC75" } },
        { value: 150, itemStyle: { color: "#FAC858" } },
        { value: 80, itemStyle: { color: "#EE6666" } },
        { value: 100, itemStyle: { color: "#73C0DE" } },
        { value: 150, itemStyle: { color: "#FAC858" } },
        { value: 80, itemStyle: { color: "#EE6666" } },
        { value: 100, itemStyle: { color: "#73C0DE" } },
      ],
      itemStyle: {
        color: "#5470C6",
      },
      label: {
        show: true,
        position: "top",
      },
    },
  ],
};

export const TotalCostAreaChartOptionSample = () => {
  let base = +new Date(1968, 9, 3);
  const oneDay = 24 * 3600 * 1000;
  const date = [];

  const data = [Math.random() * 300];

  for (let i = 1; i < 20000; i++) {
    const now = new Date((base += oneDay));
    date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/"));
    data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
  }

  const option = {
    tooltip: {
      trigger: "axis",
      position: function (pt: number[]) {
        return [pt[0], "10%"];
      },
    },
    title: {
      left: "center",
      text: "Total Cost",
    },
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: "none",
        },
        restore: {},
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: date,
    },
    yAxis: {
      type: "value",
      boundaryGap: [0, "100%"],
    },
    dataZoom: [
      {
        type: "inside",
        start: 0,
        end: 10,
      },
      {
        start: 0,
        end: 10,
      },
    ],
    series: [
      {
        name: "Fake Data",
        type: "line",
        symbol: "none",
        sampling: "lttb",
        itemStyle: {
          color: "#5CDD8C",
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#365B49",
            },
            {
              offset: 1,
              color: "#5CDD8C",
            },
          ]),
        },
        data: data,
      },
    ],
  };

  return option;
};
