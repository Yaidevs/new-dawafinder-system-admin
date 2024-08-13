import React from 'react';
import {
    Card,
    CardBody,
    CardHeader,
    Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";

const chartConfig = {
    type: "bar",
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
        colors: ["#4CAF50"],
        plotOptions: {
            bar: {
                columnWidth: "40%",
                borderRadius: 5,
            },
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
        fill: {
            opacity: 0.85,
        },
        tooltip: {
            theme: "dark",
        },
    },
};

const ChartOne = () => {
    return (
        <Card className="bg-white shadow-xl">
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="rounded-none flex flex-col md:flex-row md:items-center justify-center"
            >
                <Typography className="text-gray-900 font-bold text-center">
                    Monthly Sales Overview
                </Typography>
                <Typography variant="small" color="gray" className="text-center text-gray-600">
                    This bar chart represents the monthly sales data for the year, showing a significant increase during the summer months.
                </Typography>
            </CardHeader>
            <CardBody className="px-4 pb-4">
                <Chart {...chartConfig} />
            </CardBody>
        </Card>
    );
}

export default ChartOne;
