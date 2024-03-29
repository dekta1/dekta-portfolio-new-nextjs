import React from "react";
import html from "../components/assets/portfolio/html.png";
import css from "../components/assets/portfolio/css.png";
import php from "../components/assets/portfolio/php.png";
import javascript from "../components/assets/portfolio/javascript.png";
import java from "../components/assets/portfolio/java.png";
import Image from "next/image";


 export default function Experience () {

    const experience = [
        {
            id: 1,
            src: html,
            title: "Html",
            style: "shadow-orange-500",
        },
        {
            id: 2,
            src: css,
            title: "Css",
            style: "shadow-blue-500",
        },
        {
            id: 3,
            src: php,
            title: "Php",
            style: "shadow-gray-500",
        },
        {
            id: 4,
            src: javascript ,
            title: "javasrcipt",
            style: "shadow-yellow-500",
        },
        {
            id: 5,
            src: java,
            title: "Java",
            style: "shadow-sky-50",
        },
    ]



    

  return <div id ="Experience" className="p-8">
    <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center">
        <div>
            <p className="text-4xl font-bold border-b-4
            border-gray-500 p-2 inline">Experience</p>

            <p className="py-6 text-2xl">These are the technology I&apos;ve worked with</p>
        </div>

        <div className="w-full flex gap-8 text-center py-8 px-12 sm:px-0 sm:flex-col xs:gap-0 xs:flex-col md:flex-row">          
            {
                experience.map(({id, src, title, style}) => (
                    <div key={id} 
                    className={`shadow hover:shadow-2xl hover:scale-105 w-full duration-500 py-2 rounded-lg  ${style}`}>
                        <Image src={src} alt=""  className="w-20 mx-auto object-cover"/>
                        <p className="mt-4 text-lg">{title}</p>
            </div>
                ))
            }

        </div>
    </div>
  </div>;
};