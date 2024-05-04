"use client";
import Link from "next/link";
import { Button } from "./ui/button";

import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    image: "/work/3.png",
    category: "react.js",
    name: "MAUZN",
    description: "This is amazing website that is making using react",
    link: "/",
    github: "",
  },
  {
    image: "/work/4.png",
    category: "Next.js",
    name: "Rent Home",
    description: "This is amazing website that is making using react",
    link: "https://github.com/Mohammed-Arif-Uddin/CSE-327-Project",
    github: "https://github.com/Mohammed-Arif-Uddin/CSE-327-Project",
  },
  {
    image: "/work/2.png",
    category: "react.js",
    name: "Ema John",
    description: "This is amazing website that is making using react",
    link: "https://github.com/Mohammed-Arif-Uddin/EmaJohn-Project",
    github: "https://github.com/Mohammed-Arif-Uddin/EmaJohn-Project",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Those are my all Project.
          </p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper className="h-[480px]" slidesPerView={1} breakpoints={{
            640:{
                slidesPerView:2,
            },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{clickable:true}}
          >
            {/* show only the first 3 project in this case */}
            {projectData.slice(0,3).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard key={index} project={project}></ProjectCard>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
