import Image from "next/image";
import { FaFileAlt } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import skills from "@/data/skills";

export default function Home() {
  return (
    <>
      <div id="home" className="h-screen py-10">
        <div className="flex flex-col items-center">
          <div className="relative w-[300px] rounded-full overflow-hidden aspect-square">
            <Image
              src={"/Header-Profile.jpg"}
              fill
              style={{ objectFit: "cover" }}
              quality={99}
              priority={true}
              alt="Profile"
            />
          </div>
          <div className="flex flex-col items-center w-80 py-7">
            <h1 className="text-5xl font-medium">Ace Ladines</h1>
            <p className="text-lg">Aspiring Software Engineer</p>
            <p className="text-justify mt-5 text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              magni laborum corrupti earum voluptatem corporis modi
              reprehenderit, distinctio dolorum eum libero dignissimos iste
              expedita dolores, ullam ipsam maiores, necessitatibus atque.
              Tempora dolorum sed at ut alias temporibus deleniti provident
              soluta nesciunt quidem quisquam, optio cum quis vitae nihil,
              necessitatibus mollitia?
            </p>
          </div>
        </div>

        <div className="flex flex-row justify-around pt-10 w-96 mx-auto">
          <button
            type="button"
            className="flex items-center gap-2 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full 
            px-10 py-3 text-center text-lg me-2 mb-2"
          >
            <FaFileAlt />
            <span>Resume</span>
          </button>
          <button
            type="button"
            className="flex items-center gap-2 py-3 px-10 me-2 mb-2 text-lg font-medium text-black bg-gray-100 focus:outline-none rounded-full border border-gray-200 
            hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 "
          >
            <AiOutlineMessage size={25} />
            <span>Contact</span>
          </button>
        </div>
      </div>
      <div id="skills" className=" h-fit px-10">
        <h1 className="text-4xl font-bold">Skills.</h1>
        <div className="flex flex-row flex-wrap gap-6 py-7">
          {skills.map((_, index) => (
            <div
              key={index}
              className="bg-gray-200 rounded-lg flex flex-col items-center w-24 aspect-square justify-center"
            >
              <_.techImage size={30} />
              <p className="pt-2">{_.techName}</p>
            </div>
          ))}
        </div>
      </div>
      <div id="contact" className=" h-screen">
        Contactz
      </div>
    </>
  );
}
