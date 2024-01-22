import React from "react";
import {
    Card,
    CardBody,
    CardHeader,
    Typography,
  } from "@material-tailwind/react";
  import Chart from "react-apexcharts";
 
   
  // If you're using Next.js please use the dynamic import for react-apexcharts and remove the import from the top for the react-apexcharts
  // import dynamic from "next/dynamic";
  // const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
   
  const chartConfig = {
    type: "pie",
    width: 280,
    height: 280,
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      title: {
        show: "",
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#020617", "#ff8f00", "#00897b", "#1e88e5", "#d81b60"],
      legend: {
        show: false,
      },
    },
  };

const ChartTwo = () => {
  return (
    <Card className="bg-gray-900">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
      >

        <div>
          <Typography className='text-white font-bold flex justify-center'>
            
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="max-w-sm font-normal text-white"
          >

          </Typography>
        </div>
      </CardHeader>
      <CardBody className="px-2 place-items-center flex justify-center pb-0">
        <Chart {...chartConfig} />
      </CardBody>
    </Card>
  );
};

export default ChartTwo;
