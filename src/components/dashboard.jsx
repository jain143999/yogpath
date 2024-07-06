import React, { useEffect } from "react";
import Highcharts from "highcharts";
import { getChartData } from "./mockData";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ReceiptIcon from "@mui/icons-material/Receipt";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import Card from "../components/card/Card"; // Adjust the import path according to your project structure

const Dashboard = () => {
  useEffect(() => {
    getChartData()
      .then((data) => {
        Highcharts.chart("container", {
          chart: {
            type: "line",
            backgroundColor: "rgb(11, 8, 47)",
            plotBackgroundColor: "rgb(11, 8, 47)",
          },
          title: {
            text: "Monthly Sales and Expenses",
            style: {
              color: "white",
            },
          },
          xAxis: {
            categories: data.categories,
            labels: {
              style: {
                color: "white",
              },
            },
          },
          yAxis: {
            title: {
              text: "Amount",
              style: {
                color: "white",
              },
            },
            labels: {
              style: {
                color: "white",
              },
            },
          },
          legend: {
            itemStyle: {
              color: "white",
            },
          },
          series: data.series,
        });
      })
      .catch((error) => {
        console.error("Error fetching chart data:", error);
      });
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div className="dashboarMain">
      <p>
        <strong>Welcome Back User, Hope You Are Well</strong>
      </p>
      <div className="dashboardCard">
        <Card
          title="Today Income"
          amount="$450000"
          icon={AccountBalanceWalletIcon}
        />
        <Card title="Today Users" amount="1000" icon={AccountBoxIcon} />
        <Card title="Today Sale" amount="$450000" icon={ReceiptIcon} />
        <Card title="New Clients" amount="70" icon={PersonAddAltIcon} />
      </div>

      <div id="container" className="chart"></div>
    </div>
  );
};

export default Dashboard;
