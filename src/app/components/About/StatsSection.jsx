"use client";
import Image from "next/image";
import CountUp from "react-countup";

const StatsSection = () => {
  const stats = [
    { id: 1, value: 50, label: "Products", icon: "https://wemeestore.com/wp-content/uploads/elementor/thumbs/product-management-qx1it5jrky0f5kq19pojgi8y8zxtwd53zdtabm8y0s.png" },
    { id: 2, value: 10, label: "Type of Printing", icon: "https://wemeestore.com/wp-content/uploads/elementor/thumbs/3d-printing-qyotjddkoq5yvxhsz54wk4eed0zzr06ewn6nslnxvg.png" },
    { id: 3, value: 10000, label: "Happy Clients", icon: "https://wemeestore.com/wp-content/uploads/elementor/thumbs/costumer-qyotjtctwwrudauldu1k8id8gkt8duxumu9wyb08xo.png" },
    { id: 4, value: 50000, label: "Product Sold", icon: "https://wemeestore.com/wp-content/uploads/elementor/thumbs/sales-qyotkc5lplhkti3ac263mdmgca8knt0hdfbmju8dh8.png" },
  ];

  return (
    <div className="container mx-auto text-center py-10">
      <h2 className="text-3xl font-semibold text-blue-900">
        Ekam&apos;s <br /> <span className="text-black">Remarkable Journey!</span>
      </h2>
      <div className="h-0.5 w-1/3 bg-teal-400 mx-auto my-2"></div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6 px-4">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center bg-gradient-to-b from-white to-blue-50"
          >
            <Image src={stat.icon} alt={stat.label} width={70} height={48} />
            <h3 className="text-6xl font-bold text-black mt-5">
              <CountUp start={1} end={stat.value} duration={2.5} separator="," />
              {stat.id === 1 || stat.id === 2 ? "+" : ""}
            </h3>
            <p className="text-gray-800 mt-2 text-2xl">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
