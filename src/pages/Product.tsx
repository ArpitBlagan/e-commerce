import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const Product = () => {
  const [data, setD] = useState([]);
  const [type, setType] = useState(null);
  const [search, setS] = useState("");
  const getProducts = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setD(res.data);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <h1 className="text-3xl text-gray-400 my-5">Products Listing</h1>

      <input
        className="py-2 px-4 rounded-xl flex-1 mb-3 w-1/2 border border-gray-300 "
        value={search}
        placeholder="search by title ex: jacket "
        onChange={(e) => {
          setS(e.target.value);
        }}
      />
      <div className="flex-flex-col justify-center">
        <div className="grid md:grid-cols-3 gap-4 border-gray-300 border px-2 py-2 rounded-xl mb-5">
          {data.map((ele: any, index) => {
            console.log(index);
            let tt = ele.title.toLowerCase();
            let ff = search.toLowerCase();
            let ok = true;
            console.log(tt, ff);
            if (ff != "" && !tt.includes(ff)) {
              ok = false;
            }
            if (ok) {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center order-gray-300 border px-2 py-2 rounded-xl gap-4"
                >
                  <div className="h-[200px] w-[200px] overflow-hidden">
                    <img src={ele.image} className="object-cover" />
                  </div>
                  <div className="flex flex-col gap-4">
                    <h1 className="text-xl">{ele.title}</h1>
                    <p className="text-gray-400">
                      {ele.description.slice(0, 45)}...
                    </p>
                    <p>Price: {ele.price}</p>
                    <Link
                      to={`/product/${ele.id}`}
                      className="bg-red-300 border border-gray-500 rounded-xl py-2 px-4"
                    >
                      See More...
                    </Link>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <p>That's it...</p>
      </div>
    </div>
  );
};

export default Product;
