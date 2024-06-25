import { CheckCircle2Icon, MinusCircleIcon } from "lucide-react";

const page = () => {
  return (
    <div className="flex w-full h-full min-h-screen justify-center items-center bg-slate-800 ">
      <div className="flex flex-col md:grid md:grid-cols-3 md:space-x-3 md:space-y-0 space-y-5 space-x-0">
        <div className="p-5 border-4 border-slate-500 rounded-xl text-white text-center hover:border-dotted duration-200">
          <div className="m-5">BASIC</div>
          <div className="mt-5 mb-2 text-4xl font-semibold">100GB</div>
          <div className="">Rp.50.000/month</div>
          <button className="mx-5 my-10 px-6 py-2 rounded-md bg-orange-500 hover:bg-orange-700">
            Purchase
          </button>
          <div className="  border" />
          <div className="my-5 space-y-2 font-light text-justify">
            <p>
              <CheckCircle2Icon className="inline mr-3" size={20} />
              100GB Storage Capacity
            </p>
            <p className="text-slate-400">
              <MinusCircleIcon className="inline mr-3" size={20} />
              Option to add members
            </p>
            <p className="text-slate-400">
              <MinusCircleIcon className="inline mr-3" size={20} />
              Extra member benefits
            </p>
          </div>
        </div>
        <div className="p-5 border-double border-4 border-slate-500 rounded-xl text-white text-center hover:border-dotted duration-200">
          <div className="m-5 font-bold">STANDARD</div>
          <div className="mt-5 mb-2 text-4xl font-semibold">500GB</div>
          <div className="">Rp.220.000/month</div>
          <button className="mx-5 my-10 px-6 py-2 rounded-md bg-orange-500 hover:bg-orange-700">
            Purchase
          </button>
          <div className="  border" />
          <div className="my-5 space-y-2 font-light text-justify">
            <p>
              <CheckCircle2Icon className="inline mr-3" size={20} />
              500GB Storage Capacity
            </p>
            <p>
              <CheckCircle2Icon className="inline mr-3" size={20} />
              Option to add members
            </p>
            <p className="text-slate-400">
              <MinusCircleIcon className="inline mr-3" size={20} />
              Extra member benefits
            </p>
          </div>
        </div>
        <div className="p-5 border-4 border-slate-500 rounded-xl text-white text-center hover:border-dotted duration-200">
          <div className="m-5">PREMIUM</div>
          <div className="mt-5 mb-2 text-4xl font-semibold">1000GB</div>
          <div className="">Rp.400.000/month</div>
          <button className="mx-5 my-10 px-6 py-2 rounded-md bg-orange-500 hover:bg-orange-700">
            Purchase
          </button>
          <div className="  border" />
          <div className="my-5 space-y-2 font-light text-justify">
            <p>
              <CheckCircle2Icon className="inline mr-3" size={20} />
              1000GB Storage Capacity
            </p>
            <p>
              <CheckCircle2Icon className="inline mr-3" size={20} />
              Option to add members
            </p>
            <p>
              <CheckCircle2Icon className="inline mr-3" size={20} />
              Extra member benefits
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
