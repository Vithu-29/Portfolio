"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { GraduationCap } from "lucide-react";

// ----------------- TIMELINE COMPONENT -----------------
const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      // Reduce the line height a little (80% of full scrollHeight)
      setHeight(ref.current.scrollHeight);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 90%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);

  return (
    <div className="w-full font-sans md:px-10" ref={containerRef}>
      <div ref={ref} className="relative max-w-6xl mx-auto py-16">
        {data.map((item, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              key={item.id}
              className="relative flex flex-col md:flex-row items-center md:items-start md:gap-10 mb-16"
            >
              {/* Timeline Dot */}
              <div
                className="
                  absolute 
                  left-5 md:left-1/2 
                  -translate-x-0 md:-translate-x-1/2 
                  z-20
                "
              >
                <div className="h-10 w-10 rounded-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 flex items-center justify-center shadow">
                  <GraduationCap className="h-5 w-5 text-blue-500" />
                </div>
              </div>

              {/* Timeline Content */}
              <div
                className={`w-full md:w-1/2 mt-12 md:mt-0 pl-16 md:pl-0 ${isLeft ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left ml-auto"}`}
              >
                <div className="bg-gray-100 dark:bg-background rounded-2xl shadow-lg p-6 transition-transform hover:scale-105">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">{item.description}</p>

                  {item.school && (
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <strong>School:</strong> {item.school}
                    </p>
                  )}
                  {item.university && (
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <strong>University:</strong> {item.university}
                    </p>
                  )}
                  {item.year && (
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <strong>Year:</strong> {item.year}
                    </p>
                  )}
                  {item.percentage && (
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <strong>Percentage:</strong> {item.percentage}
                    </p>
                  )}
                  {item.cgpa && (
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <strong>CGPA:</strong> {item.cgpa}
                    </p>
                  )}
                  {item.results && (
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <strong>Results:</strong> {item.results}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        {/* Vertical Line */}
        <div
          className="
            absolute 
            left-5 md:left-1/2 
            -translate-x-0 md:-translate-x-1/2 
            top-0 
            w-[2px] 
            bg-gray-300 dark:bg-gray-700 
            h-full
          "
        >
          <motion.div
            style={{ height: heightTransform }}
            className="absolute left-0 top-0 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

// ----------------- EDUCATION DATA -----------------
const educationData = [
  {
    id: 1,
    title: "G.C.E Advanced Level",
    school: "Jaffna Hindu College",
    year: "Jan 2011 - Aug 2019",
    results: "Combined maths- A | Chemistry- A | Physics- B",
    description: "Physical Science Stream",
  },
  {
    id: 2,
    title: "Bachelor of Science Honours in IT",
    university: "University of Moratuwa",
    year: "May 2023 - Present",
    cgpa: "3.50 / 4.0",
  },
];

// ----------------- Education SECTION -----------------
export default function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="container lg:px-28">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white text-center mb-12">
          Education
        </h2>
        <Timeline data={educationData} />
      </div>
    </section>
  );
}
