import Image from "next/image";
import { FaFileAlt } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import skills from "@/data/skills";
import contact from "@/data/contact";

export default function Home() {
  return (
    <div className="px-10">
      <section id="home" className="h-screen py-4">
        <div className="flex flex-col items-center mb-10">
          <div className="relative w-[300px] rounded-full overflow-hidden aspect-square mb-3">
            <Image
              src={"/Header-Profile.jpg"}
              fill
              style={{ objectFit: "cover" }}
              quality={99}
              priority={true}
              alt="Profile"
            />
          </div>
          <div className="flex flex-col items-center w-80 ">
            <h1 className="text-5xl font-medium">Ace Ladines</h1>
            <p className="text-lg mb-9">Aspiring Software Engineer</p>
            <p className="text-center text-sm leading-relaxed">
              <span className="font-bold text-blue-700">Hello World!</span> This
              caffeine-fueled CS student is a full-stack developer in training!
              Backends are my jam for now, but I'm always learning and expanding
              my skillset. Let's build something awesome together!
            </p>
          </div>
        </div>

        <ul className="flex justify-center items-center gap-6 mb-10">
          <li className="flex flex-col items-center gap-2">
            <span className="bg-[#0001] px-4 py-1 rounded-2xl font-bold text-gray-500">
              2.5+
            </span>
            <span className="text-xs text-center text-gray-700">
              Years <br />
              of experience
            </span>
          </li>
          <span className="border-r border-dashed border-gray-400 h-8"></span>
          <li className="flex flex-col items-center gap-2">
            <span className="bg-[#0001] px-4 py-1 rounded-2xl font-bold text-gray-500">
              2k+
            </span>
            <span className="text-xs text-center text-gray-700">
              Coffee <br /> consumed
            </span>
          </li>
        </ul>

        <div className="flex flex-row justify-around w-80 mx-auto gap-1">
          <button
            type="button"
            className="flex items-center gap-2 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full 
            px-8 py-3 text-center text-lg me-2 mb-2"
          >
            <FaFileAlt />
            <span>Resume</span>
          </button>
          <button
            type="button"
            className="flex items-center gap-2 py-3 px-8 me-2 mb-2 text-lg font-medium text-black bg-gray-100 focus:outline-none rounded-full border border-gray-200 
            hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 "
          >
            <AiOutlineMessage size={25} />
            <span>Contact</span>
          </button>
        </div>
      </section>

      <section id="skills" className=" h-fit py-4 mb-7">
        <h1 className="text-4xl font-bold">
          Skills<span className="text-blue-700">.</span>
        </h1>
        <p className="font-light my-7">Technologies and tools</p>
        <div className="flex flex-row flex-wrap gap-5">
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
      </section>

      <section id="education" className="h-fit mb-14">
        <h1 className="text-4xl font-bold mb-10">
          Education<span className="text-blue-700">.</span>
        </h1>
        <div className="grid gap-10">
          <article className="flex gap-4 items-center">
            <div className="relative w-36 aspect-square overflow-hidden">
              <Image
                src={"/plm-logo.png"}
                fill
                style={{ objectFit: "contain" }}
                sizes="(min-width: 768px) 300px, 100vw"
                alt="plm-logo"
              />
            </div>
            <div className="flex flex-col w-full">
              <h1 className="font-bold text-md">BS. Computer Science</h1>
              <p className="text-sm font-medium text-gray-500">
                2020 - Present
              </p>
              <p className="text-sm font-medium text-gray-700 mt-4">
                Pamantsan Ng Lungosd Ng Maynila
              </p>
            </div>
          </article>
          <article className="flex gap-4 items-center">
            <div className="relative w-36 aspect-square overflow-hidden ">
              <Image
                src={"/lccm-logo.png"}
                fill
                style={{ objectFit: "contain" }}
                sizes="(min-width: 768px) 300px, 100vw"
                alt="plm-logo"
              />
            </div>
            <div className="flex flex-col w-full">
              <h1 className="font-bold text-md">
                Information Communication Technology
              </h1>
              <p className="text-sm font-medium text-gray-500">2018 - 2020</p>
              <p className="text-sm font-medium text-gray-700 mt-4">
                La Consolacion College Manila
              </p>
            </div>
          </article>
        </div>
      </section>

      <section id="contact" className="mb-10">
        <h1 className="text-4xl font-bold mb-10">
          Contact<span className="text-blue-700">.</span>
        </h1>
        <ul className="flex flex-col gap-6">
          {contact.map((_, index) => (
            <li key={index} className="flex gap-4">
              <span className="bg-black w-20 h-20 rounded-full"></span>
              <article className="flex flex-col">
                <h1 className="font-light text-gray-600 text-sm">
                  {_.contactType}
                </h1>
                <p className="font-bold text-gray-700 text-mg">
                  <a href={_.contactLink}>{_.contact}</a>
                </p>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
