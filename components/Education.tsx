import React from "react";
import sd from "../components/assets/education/SD.jpg"
import smp from "../components/assets/education/SMP.jpg"
import smk from "../components/assets/education/Harapan.jpg"
import Image from "next/image"


 export default function Education() {
    
    const education = [
        {
            id: 1,
            src: sd,
            title: "3 Canggu Elementary School",
            alamat:"Jl.Raya Babakan No. 28 , Canggu, Kec. Kuta Utara, Kab. Badung Prov. Bali",
        },
        {
            id: 2,
            src: smp,
            title: "2 Kuta Utara Junior High School",
            alamat:"Jl. Made Bulet, Br. Tegeh, Desa Dalung, Kecamatan Kuta Utara",
        },
        {
            id: 3,
            src: smk,
            title: "Wira Harapan vocational schools",
            alamat:"Jl.Raya Padang Luwih, Br Tegal Jaya, Dalung, Kuta Utara Badung, Bali",
        },
    ]

  return (
    <div id="Education" className="tablet:my-10 p-10 "> 
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center"> 
            <div>
                <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Education</p>
            </div>
            <div className="w-full flex gap-5 py-8 px-12 sm:px-0 sm:flex-col xs:gap-0 xs:flex-col md:flex-row">
                {
                    education.map(({id, src, title, alamat}) => (
                        <div key={id} className={`hover:scale-105 duration-500 rounded-lg text-sm`}>
                            <Image width={400} height={400} src={src} alt=""  className="h-[10rem] rounded-lg object-cover"/>
                            <p className="mt-4 text-lg sm:text-xl lg:text-2xl">{title}</p>
                            <p className="mt-4">{alamat}</p>
                        </div>
                    ))



                }
            </div>       
        </div>
    </div>
  )
}

