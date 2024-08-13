import React from "react";
import {
    Card,
    CardBody,
    CardHeader,
    Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";

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
        dataLabels: {
            enabled: false,
        },
        colors: ["#020617", "#ff8f00", "#00897b", "#1e88e5", "#d81b60"],
        legend: {
            show: true,
            position: "bottom",
            labels: {
                colors: "#616161",
            },
        },
        tooltip: {
            theme: "dark",
        },
    },
};

const ChartTwo = () => {
    return (
        <Card className="bg-white shadow-xl">
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="rounded-none flex flex-col md:flex-row md:items-center justify-center"
            >
                <Typography className="text-gray-900 font-bold text-center">
                    Market Share Distribution
                </Typography>
                <Typography variant="small" color="gray" className="text-center text-gray-600">
                    This pie chart provides a breakdown of market share across different sectors, highlighting the most dominant areas.
                </Typography>
            </CardHeader>
            <CardBody className="px-4 pb-4 flex justify-center">
                <Chart {...chartConfig} />
            </CardBody>
        </Card>
    );
};

export default ChartTwo;
