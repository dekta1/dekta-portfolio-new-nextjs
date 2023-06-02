import HeroImage from "../components/assets/img/dekta.jpg";
import {MdKeyboardArrowRight} from "react-icons/md";
import {Link} from "react-scroll/modules";
import Image from 'next/image'


 export default function Home ()  {

  return (
    <div id ="Home" className="mx-auto mb-30 ">
       <div className="bg-gradient-to-b from-green-950 to-gray-900 h-[105vh] w-full
       flex items-center justify-center px-4 md:flex-row py-7">
            <div className="flex flex-col p-10 justify-center"> 
                <h2 className="text-4xl sm:text-6xl font-bold
                text-sky-50">HI I'm Juli</h2>
                <p className="text-white py-5 max-w-md text-xl">
                    I'm a junior Development. now I'm 
                    continuing my studies at Taksu Tech.
                    to increase my knowledge about Sofrware 
                    development.
                </p>
                <div>
                    <Link to="Contact" smooth duration={500} >
                        <button id="Contact" className="group text-white text-xl font-semibold w-fit px-6 py-3 my-2 flex
                        items-center  rounded-md bg-gradient-to-r from-cyan-500 to
                     to-blue-500 cursor-pointer
                        ">
                            Contact
                            <span className="group-hover:rotate-90 duration ml-2">
                            <MdKeyboardArrowRight size={25} /> 
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
            <div className=''>
                <Image width={400} height={400} src={HeroImage} alt="my profile"
                className="rounded-2xl mx-auto w-2/3 mt-10" />
            </div>
       </div>
    </div>
  )
}
