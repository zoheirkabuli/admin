import React from "react";
import { Card, CardHeader, CardContent, Paper } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { defaults } from "chart.js";

defaults.font.family = "iranyekan";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
      ticks: {
        stepSize: 200,
      },
    },
  },
};

const labels = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];

const data = {
  labels,
  datasets: [
    {
      label: "بازدید",
      data: labels.map(() => Math.floor(Math.random() * 1000)),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      tension: 0.2,
    },
  ],
};

const DailyViewChart = () => {
  return (
    <Card component={Paper} elevation={4}>
      <CardHeader
        sx={{
          "& > .MuiCardHeader-content": {
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          },
        }}
        title="تعداد بازدیدکنندگان"
        titleTypographyProps={{ fontWeight: "bold", fontSize: "2rem" }}
        subheader="براساس روز (۳۰ روز آخر)"
        subheaderTypographyProps={{ fontSize: "1.4rem" }}
      />

      <CardContent>
        <Line options={options} data={data} height={250} />
      </CardContent>
    </Card>
  );
};

export default DailyViewChart;
