import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../varients";

const Banner = () => {
   return (
      <section id='home' className='min-h-[85vh] lg:min-h-[78vh] flex items-center'>
         <div className='container mx-auto'>
            <div className='flex flex-col lg:flex-row lg:items-center justify-center gap-x-12 gap-y-6'>
               <div className='text-center font-secondary lg:text-left'>
                  <motion.h1
                     variants={fadeIn("down", 0.3)}
                     initial='hidden'
                     whileInView={"show"}
                     viewport={{ once: false, amount: 0.7 }}
                     className='text-[30px] font-bold leading-[0.8]  lg:text-[80px] mb-6 text-center'
                  >
                     TINSAE AYANA
                  </motion.h1>
                  <div className='mb-6'>
                     <span className='lg:text-[55px] text-[25px] font-bold text-white mr-4'>
                        I am a
                     </span>
                     <TypeAnimation
                        sequence={["Frontend developer", 2000]}
                        speed={10}
                        className='lg:text-[55px] text-[25px] font-bold text-accent'
                        wrapper='span'
                        repeat={Infinity}
                     />
                  </div>

                  <motion.div
                     variants={fadeIn("up", 0.7)}
                     initial='hidden'
                     whileInView={"show"}
                     viewport={{ once: false, amount: 0.7 }}
                     className='flex justify-center gap-x-10'
                  >
                     <a href='https://github.com/Tinsae-Ayana' target='_black'>
                        <FaGithub className='h-14 w-14'></FaGithub>
                     </a>
                     <a href='https://www.linkedin.com/in/tinsae-ayana-888884227/' target='_blank'>
                        <FaLinkedin className='h-14 w-14'></FaLinkedin>
                     </a>
                     <a href='mailto:tinsaeaeroastro@gmail.com'>
                        <AiOutlineMail className='h-14 w-14'></AiOutlineMail>
                     </a>
                  </motion.div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Banner;
