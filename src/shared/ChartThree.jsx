import React from "react";
import {
    Card,
    CardBody,
    CardHeader,
    Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";

const chartConfig = {
    type: "line",
    height: 240,
    series: [
        {
            name: "Sales",
            data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
        },
    ],
    options: {
        chart: {
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        colors: ["#1E88E5"],
        stroke: {
            lineCap: "round",
            curve: "smooth",
        },
        xaxis: {
            categories: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            labels: {
                style: {
                    colors: "#616161",
                    fontSize: "14px",
                },
            },
        },
        yaxis: {
            labels: {
                style: {
                    colors: "#616161",
                    fontSize: "14px",
                },
            },
        },
        grid: {
            borderColor: "#E0E0E0",
            strokeDashArray: 4,
        },
        markers: {
            size: 5,
            colors: ["#1E88E5"],
            strokeColor: "#fff",
            strokeWidth: 2,
        },
        tooltip: {
            theme: "dark",
        },
    },
};

const ChartThree = () => {
    return (
        <Card className="bg-white shadow-xl">
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="rounded-none flex flex-col md:flex-row md:items-center justify-center"
            >
                <Typography className="text-gray-900 font-bold text-center">
                    Sales Trend Over Time
                </Typography>
                <Typography variant="small" color="gray" className="text-center text-gray-600">
                    This line chart illustrates the sales trend over the past few months, showing fluctuations and overall growth.
                </Typography>
            </CardHeader>
            <CardBody className="px-4 pb-4">
                <Chart {...chartConfig} />
            </CardBody>
        </Card>
    );
};

export default ChartThree;
