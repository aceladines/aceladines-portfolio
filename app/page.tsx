"use server";
import Image from "next/image";

import skills from "@/data/skills";
import contact from "@/data/contact";
import projects from "@/data/projects";

import MainButtons from "@/components/MainButtons";

type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};

export default async function Home({ searchParams }: SearchParamProps) {
  return (
    <div className="w-[calc(100vw-3rem)] mx-auto sm:w-[93vw] md:w-[90vw] lg:w-[900px]">
      <section
        id="home"
        className="h-[calc(100dvh-4rem)] sm:min-h-[750px] mb-32"
      >
        <div className="flex flex-col justify-center h-full">
          <div className="flex flex-col items-center mb-10 lg:flex-row lg: gap-x-12">
            <div className="relative w-[300px] rounded-full overflow-hidden aspect-square mb-3 md:w-[400px] lg:w-[550px] lg:mb-7">
              <Image
                src={"/Header-Profile.jpg"}
                fill
                style={{ objectFit: "cover" }}
                quality={99}
                priority={true}
                sizes="(min-width: 768px) 300px, 100vw"
                alt="Profile"
              />
            </div>
            <div className="flex flex-col items-center w-80 lg:w-2/3">
              <h1 className="text-5xl font-medium lg:text-7xl">Ace Ladines</h1>
              <p className="text-lg mb-9 lg:text-2xl font-light">
                Aspiring Software Engineer
              </p>
              <p className="text-center text-sm leading-relaxed lg:text-xl">
                <span className="font-bold text-blue-700">Hello World!</span>{" "}
                This caffeine-fueled CS student is a full-stack developer in
                training! Backends are my jam for now, but I'm always learning
                and expanding my skillset. Let's build something awesome
                together!
              </p>
            </div>
          </div>

          <ul className="flex justify-center items-center gap-6 mb-10 md:mb-14">
            <li className="flex flex-col items-center gap-2">
              <span className="bg-[#0001] px-4 py-1 rounded-2xl font-bold text-gray-500 lg:text-xl">
                2.5+
              </span>
              <span className="text-xs text-center text-gray-700 lg:text-md">
                Years <br />
                of experience
              </span>
            </li>
            <span className="border-r border-dashed border-gray-400 h-8"></span>
            <li className="flex flex-col items-center gap-2">
              <span className="bg-[#0001] px-4 py-1 rounded-2xl font-bold text-gray-500 lg:text-xl">
                2k+
              </span>
              <span className="text-xs text-center text-gray-700 lg:text-md">
                Coffee <br /> consumed
              </span>
            </li>
          </ul>
          <MainButtons />
        </div>
      </section>

      <section id="skills" className=" h-fit mb-32">
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

      <section id="projects" className="h-fit mb-32">
        <h1 className="text-4xl font-bold mb-7">
          Projects<span className="text-blue-700">.</span>
        </h1>
        <div className="grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2 md:gap-x-12 md:gap-y-12 sm:gap-x-6 sm:gap-y-12">
          {projects.map((_, index) => (
            <div key={index} className="flex flex-col w-full">
              <div className="bg-blue-500 aspect-square h-56 px-5 py-8 rounded-2xl mb-2 overflow-hidden">
                <div className="relative h-full hover:scale-110 transition duration-500 cursor-pointer rounded-lg overflow-hidden">
                  <Image
                    src={_.image}
                    fill
                    style={{ objectFit: "cover" }}
                    quality={99}
                    priority={true}
                    sizes="(min-width: 768px) 300px, 100vw"
                    alt="Project"
                  />
                </div>
              </div>
              <h1 className="font-bold text-lg truncate ...">
                {_.projectTitle}
              </h1>
              <p className="font-light text-sm truncate ...">
                {_.projectDetail}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="education" className="h-fit mb-32">
        <h1 className="text-4xl font-bold mb-10">
          Education<span className="text-blue-700">.</span>
        </h1>
        <div className="grid gap-10 md:grid-cols-2">
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
              <h1 className="font-semibold text-md">BS. Computer Science</h1>
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
              <h1 className="font-semibold text-md">
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

      <section id="contact" className="mb-32">
        <h1 className="text-4xl font-bold mb-10">
          Contact<span className="text-blue-700">.</span>
        </h1>
        <ul className="grid gap-12 md:grid-cols-2">
          {contact.map((_, index) => (
            <li key={index} className="flex gap-4">
              <div className="relative w-12 aspect-square overflow-hidden">
                <Image
                  src={_.contactImage}
                  fill
                  style={{ objectFit: "contain" }}
                  sizes="(min-width: 768px) 300px, 100vw"
                  alt="plm-logo"
                />
              </div>
              <article className="flex flex-col">
                <h1 className="font-light text-gray-600 text-sm">
                  {_.contactType}
                </h1>
                <p className="font-bold text-gray-700 text-mg">
                  <a href={_.contactLink} className="hover:underline">
                    {_.contact}
                  </a>
                </p>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
