import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const ProductId = () => {
  const { id } = useParams();
  const [data, setD] = useState<any | null>(null);
  const getProductId = async (id: any) => {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setD(res.data);
  };
  useEffect(() => {
    getProductId(id);
  }, []);
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center">
      <h1 className="text-gray-400">Product Detail</h1>
      {data && (
        <div className="flex flex-col justify-center items-center border border-gray-300 rounded-xl py-3 gap-4">
          <div className="overflow-hidden h-[300px] w-[300px] bg-black p-4 rounded-xl">
            <img src={data.image} className="object-cover rounded-xl" />
          </div>
          <div>
            <h1 className="text-xl underline">{data.title}</h1>
            <p className="text-gray-500">{data.description}</p>
            <p>
              <span className="text-red-300">Price:</span> {data.price}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductId;
