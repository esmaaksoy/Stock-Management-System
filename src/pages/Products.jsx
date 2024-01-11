import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { Square3Stack3DIcon } from "@heroicons/react/24/outline";

const Products = () => {
  const chartConfig1 = {
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
      title: {
        show: "",
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#ABFB60"],
      stroke: {
        lineCap: "round",
        curve: "smooth",
      },
      markers: {
        size: 0,
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
        categories: [
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      yaxis: {
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
      },
      grid: {
        show: true,
        borderColor: "#dddddd",
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: 5,
          right: 20,
        },
      },
      fill: {
        opacity: 0.8,
      },
      tooltip: {
        theme: "dark",
      },
    },
  };

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
      title: {
        show: "",
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#ABFB60"],
      plotOptions: {
        bar: {
          columnWidth: "40%",
          borderRadius: 2,
        },
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
        categories: [
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      yaxis: {
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
      },
      grid: {
        show: true,
        borderColor: "#dddddd",
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: 5,
          right: 20,
        },
      },
      fill: {
        opacity: 0.8,
      },
      tooltip: {
        theme: "dark",
      },
    },
  };
const section =[
  {header:"Total Sales", title:"$16900", d: "M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" },
  {header:"New Members", title:"1256", d: "M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" },
  {header:"Purchases", title:"$17440", d: "M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" },
  {header:"Total CheckLists", title:"1256", d: "M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" },
 
]
  return (
    <div className="p-4">
      <section className="bg-white ">
        <div className="px-4 py-12 sm:px-6 md:py-16 lg:px-8 ">
    
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-4 ">
            {section.map(({header,title, d}) => (
                <div className="flex justify-between items-center gap-4 rounded-lg shadow-md px-4 py-8">
                <div className="flex flex-col  text-center">
                  <dt className="order-last text-lg font-medium text-gray-500">
                    {header}
                  </dt>
                  <dd className="text-4xl font-extrabold text-[#ABFB60] md:text-5xl">
                  {title}
                  </dd>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10 text-[#ABFB60] rounded-full"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={d}
                    />
                  </svg>
                </div>
              </div>
                ))}
              {/* <div className="flex justify-between items-center gap-4 rounded-lg shadow-md px-4 py-8">
                <div className="flex flex-col  text-center">
                  <dt className="order-last text-lg font-medium text-gray-500">
                    Total Sales
                  </dt>
                  <dd className="text-4xl font-extrabold text-[#ABFB60] md:text-5xl">
                    $4.8m
                  </dd>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10 text-[#ABFB60] bg-gray-700 rounded-full"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>
              </div>

              <div className="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">
                  Official Addons
                </dt>
                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                  24
                </dd>
              </div>


              <div className="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">
                  Total Addons
                </dt>
                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                  86
                </dd>
              </div> */}


            </dl>
       
        </div>
      </section>
      <div className="flex flex-wrap justify-center  gap-3">
        <Card className="flex shadow-lg ">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
          >
            <div className="w-max rounded-lg bg-gray-900 p-5 text-white">
              <Square3Stack3DIcon className="h-6 w-6" />
            </div>
            <div>
              <Typography variant="h6" color="blue-gray">
                Line Chart
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className="max-w-sm font-normal"
              >
                Visualize your data in a simple way using the
                @material-tailwind/react chart plugin.
              </Typography>
            </div>
          </CardHeader>
          <CardBody className="px-2 pb-0">
            <Chart {...chartConfig1} />
          </CardBody>
        </Card>
        <Card className="shadow-lg  ">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
          >
            <div className="w-max rounded-lg bg-gray-900 p-5 text-white">
              <Square3Stack3DIcon className="h-6 w-6" />
            </div>
            <div>
              <Typography variant="h6" color="blue-gray">
                Bar Chart
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className="max-w-sm font-normal"
              >
                Visualize your data in a simple way using the
                @material-tailwind/react chart plugin.
              </Typography>
            </div>
          </CardHeader>
          <CardBody className="px-2 pb-0 ">
            <Chart {...chartConfig} />
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Products;
