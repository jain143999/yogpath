import React, { useEffect } from "react";
import Highcharts from "highcharts";
import { getChartData } from "./mockData";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ReceiptIcon from "@mui/icons-material/Receipt";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import Card from "../components/card/Card";

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
  }, []);

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

      <div style={{ display: "flex", gap: "20px" }}>
        <span id="container" className="chart"></span>
        <div className="referral-container">
          <p>
            <strong>Referral Tracking</strong>
          </p>
          <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
            <div className="referalClip">
              <span style={{ fontSize: "16px" }}>Invited</span>
              <span style={{ fontSize: "14px" }}>110</span>
            </div>
            <div className="referalClip">
              <span style={{ fontSize: "16px" }}>Bonous</span>
              <span style={{ fontSize: "14px" }}>1110</span>
            </div>
            <div className="referalClip">
              <span style={{ fontSize: "16px" }}>Successfull</span>
              <span style={{ fontSize: "14px" }}>50</span>
            </div>
            <div className="referalClip">
              <span style={{ fontSize: "16px" }}>Pending</span>
              <span style={{ fontSize: "14px" }}>60</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
