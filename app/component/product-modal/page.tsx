import { HeartIcon, ShoppingCart } from "lucide-react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="flex bg-slate-300 w-full h-screen justify-center items-center">
      <div className="flex flex-col md:flex-row p-12 m-2 bg-white text-black shadow-xl rounded-xl">
        <Image alt="mac book" src="/mac.jpeg" width={300} height={300} />
        <div className="flex flex-col text-center md:text-left">
          <p className="mx-auto md:mx-0 w-fit rounded-full bg-black text-white px-2 py-0.5 text-xs">
            Free Shipping
          </p>
          <h1 className="text-2xl tracking-tighter ">
            MacBook Pro M2 13.3 inch
          </h1>
          <div className="mt-6 mb-2">
            <h2 className="font-bold text-xs line-through">Rp 21.999.000</h2>
            <h2 className="font-bold tracking-tight text-2xl ">
              Rp 20.999.000
            </h2>
          </div>
          <p className="font-light text-xs">
            The offer is valid until August 10 or as long as stock lastst
          </p>
          <button className="p-3 my-3 bg-blue-500 rounded-lg text-white hover:bg-blue-600 duration-200 shadow-blue-800 border-b-4 border-blue-800">
            Add to cart
          </button>
          <p className="text-sm mb-4">
            <span className="w-3 h-3 rounded-full bg-green-500 inline-block mr-2 tracking-tighter" />
            50+ pcs. in stock
          </p>
          <div className="flex flex-col md:flex-row space-y-5 md:space-x-5 space-x-0 md:space-y-0">
            <button className="border rounded-lg p-2 text-sm w-full hover:bg-slate-100">
              <ShoppingCart size={16} className="inline mr-2 " />
              Add to Card
            </button>
            <button className="border rounded-lg p-2 text-sm  w-full hover:bg-slate-100">
              <HeartIcon size={16} className="mr-2 inline" />
              Add to wistlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
