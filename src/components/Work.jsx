import { motion } from "framer-motion";
import { fadeIn } from "../varients";
const Work = () => {
   return (
      <section id='work' className=''>
         <div className='container mx-auto'>
            <div className='flex flex-col lg:flex-row gap-x-10'>
               {/* left side */}
               <motion.div
                  variants={fadeIn("right", 0.3)}
                  initial='hidden'
                  whileInView={"show"}
                  className='flex-1 flex flex-col  gap-y-12 mb-10 lg:mb-0'
               >
                  {/* text */}
                  <div className='flex-1'>
                     <h2 className='h2 leading-tight text-accent '>
                        My latest <br /> work.
                     </h2>
                     <p className='max-w-sm mb-16'>
                        These are the latest works of mine. Click the pictures to see the websites
                        live.
                     </p>
                     <a href='https://github.com/Tinsae-Ayana?tab=repositories' target='_blank'>
                        <button className='btn btn-sm '> View all projects in github </button>
                     </a>
                  </div>
                  {/* image */}
                  <a href='https://tinsae-ayana.github.io/ip-address-tracker/' target='_blank'>
                     <div className='group relative overflow-hidden border-2  border-white/50 rounded-xl'>
                        <div className='group-hover:bg-black/70 w-full h-full relative z-40  transiton-all  duration-300'>
                           <img
                              className='group-hover:scale-125 transition-all duration-500'
                              src='/tinsae-portfolio/assets/iptracker.PNG'
                           />
                        </div>
                     </div>
                  </a>
               </motion.div>
               {/* right side */}
               <motion.div
                  variants={fadeIn("left", 0.2)}
                  initial='hidden'
                  whileInView={"show"}
                  className='flex-1 flex flex-col gap-y-14'
               >
                  {/* image */}
                  <a href='https://tinsae-ayana.github.io/space-toursim/' target='_blank'>
                     <div className='group relative overflow-hidden border-2  border-white/50 rounded-xl'>
                        <div className='group-hover:bg-black/70 w-full h-full relative z-40  transiton-all  duration-300'>
                           <img
                              className='group-hover:scale-125 transition-all duration-500'
                              src='/tinsae-portfolio/assets/spacetoursim.PNG'
                              alt=''
                           />
                        </div>
                     </div>
                  </a>
                  {/* image */}
                  <a href='https://tinsae-ayana.github.io/LOBE-CLONE/' target='_blank'>
                     <div className='group relative overflow-hidden border-2  border-white/50 rounded-xl'>
                        <div className='group-hover:bg-black/70 w-full h-full relative z-40  transiton-all  duration-300'>
                           <img
                              className='group-hover:scale-125 transition-all duration-500'
                              src='/tinsae-portfolio/assets/lobe.PNG'
                              alt=''
                           />
                        </div>
                     </div>
                  </a>
               </motion.div>
            </div>
         </div>
      </section>
   );
};

export default Work;
