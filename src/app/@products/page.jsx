import BSeries from "/public/images/bseries.png";
import GSeries from "/public/images/gseries.png";
import SSeries from "/public/images/sseries.png";
import Image from "next/image";

export default function Page() {
  return (
    <div className="py-[4rem] px-4 mx-auto bg-white max-w-[1450px]">
      <h1 className="text-3xl font-bold mb-10">Our Products</h1>
      <div className="bg-[#cffff0] my-8 grid lg:grid-cols-2 gap-8 h-fit rounded-xl">
        <Image
          src={BSeries}
          className="flex justify-start h-[400px] mx-2"
          alt="Company Overview Image"
        />
        <div>
          <h2 className="flex justify-start ml-6 mt-1 lg:mt-28 text-2xl font-bold">
            Blitz B Series
          </h2>
          <p className="flex justify-start ml-6 mr-20 mt-5 mb-7">
            Build around the emphasis of professional and corporate uses, Blitz
            B Series use state of the art parts which robust and outstand hours
            of operation.
          </p>
          <button className="ml-6 rounded-lg border-[2px] border-slate-700 px-4 py-2 pointer-click mb-10  hover:bg-slate-700 hover:text-white">
            To Store
          </button>
        </div>
      </div>
      <div className=" bg-[#cfecff] grid lg:grid-cols-2 gap-8 h-fit rounded-xl">
        <img
          src={GSeries}
          className="flex justify-start h-[400px] mx-2 lg"
          alt="Company Overview Image"
        />{" "}
        <div className="lg:order-first">
          <h2 className="flex justify-start ml-6 lg:ml-20 mt-1 lg:mt-28 text-2xl font-bold">
            Blitz G Series
          </h2>
          <p className="flex justify-start ml-6 lg:ml-20 mr-20 mt-5 mb-7">
            The heart and core of a gamer, Blitz G Series is a machine built
            using parts that fulfill every gamer needs, be it competitive gaming
            or AAA experience, gain your best performance and experience.
          </p>
          <button className="ml-6 rounded-lg border-[2px] border-slate-700 px-4 py-2 pointer-click lg:ml-20 mb-10 hover:bg-slate-700 hover:text-white">
            To Store
          </button>
        </div>
      </div>
      <div className="bg-[#f0cfff] my-8 grid lg:grid-cols-2 gap-8 h-fit rounded-xl">
        <img
          src={SSeries}
          className=" mt-3 flex justify-start h-[370px] mx-4"
          alt="Company Overview Image"
        />
        <div>
          <h2 className="flex justify-start ml-6 mt-1 lg:mt-28 text-2xl font-bold">
            Blitz S Series
          </h2>
          <p className="flex justify-start ml-6 mr-20 mt-5 mb-7">
            Uncover your potential in the digital world. Blitz S Series is
            designed to stream, create contents, and multitask in mind. Do
            everything simultaneously, be the king of flex.
          </p>
          <button className="ml-6 rounded-lg border-[2px] border-slate-700 px-4 py-2 pointer-click mb-10 hover:bg-slate-700 hover:text-white">
            To Store
          </button>
        </div>
      </div>
    </div>
  );
}
