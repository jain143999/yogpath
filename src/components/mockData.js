export const getChartData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {
        categories: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        series: [
          {
            name: "Sales",
            data: [150, 200, 180, 220, 170, 190, 210],
            color: "#FF0000", // Red color for Sales
          },
          {
            name: "Expenses",
            data: [100, 120, 140, 130, 150, 160, 170],
            color: "#0000FF", // Blue color for Expenses
          },
        ],
      };
      resolve(data);
    }, 1000); // Simulate an API call delay
  });
};
