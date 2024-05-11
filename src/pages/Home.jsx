import Header from "../components/Header";
import LineChartComponent from "../components/LineCharat"; // Typo corrected
import MainArt from "../components/MainArt";
import Navigation from "../components/Navigation";
import Table from "../components/Table";

function Home() {
  const data = [
    { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Page D", uv: 2000, pv: 0, amt: 2290 },
    { name: "Page E", uv: 2000, pv: 3200, amt: 2290 },
    { name: "Page F", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Page L", uv: 2000, pv: 5000, amt: 2290 },
    { name: "Page Y", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Page S", uv: 2000, pv: 0, amt: 2290 },
  ];

  return (
    <>
      <Header />
      <MainArt />
      <Navigation />
      <LineChartComponent data={data} />
      <Table />
    </>
  );
}

export default Home;
