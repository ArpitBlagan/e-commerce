import home from "@/img/Home.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="mb-20">
      <div className="flex md:flex-row flex-col gap-5 items-center min-h-[80vh]">
        <div className="flex flex-col gap-5">
          <h1 className="text-[50px] font-mono bg-gradient-to-r from-blue-600 via-red-300 to-indigo-400 inline-block text-transparent bg-clip-text">
            Next-Gen E-Commerce Platform 🚀.
          </h1>
          <Link
            to="/product"
            className="py-2 px-4 border border-gray-300 rounded-xl text-red-400"
          >
            Products
          </Link>
        </div>
        <img src={home} width={500} height={400} />
      </div>
      <div className="flex flex-col gap-4 ">
        <p className="text-3xl text-gray-600">About</p>
        <hr />
        <p className="text-xl text-gray-500">
          This project is an e-commerce website built using React, TypeScript,
          the Fake Store API, and Shadcn-UI. The application provides a platform
          for users to browse, search, and purchase products, showcasing a
          seamless and intuitive shopping experience.
        </p>
      </div>
    </div>
  );
};

export default Home;
