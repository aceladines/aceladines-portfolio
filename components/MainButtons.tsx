"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

import { FaFileAlt } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";

export default function MainButtons() {
  const router = useRouter();
  return (
    <div className="flex flex-row justify-center gap-x-2 md:gap-x-4">
      <Link href={"/Resume.pdf"} rel="noopener noreferrer" target="_blank">
        <div
          className="flex items-center gap-2 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full 
            px-8 py-3 text-center text-lg me-2 mb-2"
        >
          <FaFileAlt />
          <span>Resume</span>
        </div>
      </Link>
      <button
        type="button"
        onClick={() => router.push("#contact")}
        className="flex items-center gap-2 py-3 px-8 me-2 mb-2 text-lg font-medium text-black bg-gray-100 focus:outline-none rounded-full border border-gray-200 
            hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 "
      >
        <AiOutlineMessage size={25} />
        <span>Contact</span>
      </button>
    </div>
  );
}
