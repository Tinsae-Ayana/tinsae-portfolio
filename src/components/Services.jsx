import { motion } from "framer-motion";
import { fadeIn } from "../varients";

const services = [
   {
      name: "Flutter",
      description: "The description goes here",
      link: "Learn more",
   },
   {
      name: "React",
      description: "The description goes here",
      link: "Learn more",
   },
];

const Services = () => {
   return (
      <section id='services' className='section'>
         <div className='container mx-auto'>
            <div className='flex  flex-col lg:flex-row '>
               <motion.div
                  variants={fadeIn("right", 0.3)}
                  initial='hidden'
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className='flex-1 lg:bg-services  bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'
               >
                  <h2 className='h2 text-accent mb-6'>What I Do.</h2>
                  <h3 className='h3 max-w-[455px] mb-16'>I am a junior frontend developer</h3>
                  <button className='btn btn-sm'>See my work</button>
               </motion.div>
               {/* services  */}
               <motion.div
                  variants={fadeIn("left", 0.5)}
                  initial='hidden'
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className='flex-1 '
               >
                  {/* services list  */}
                  <div>
                     {services.map((service, index) => {
                        const { name, description, link } = service;
                        return (
                           <div
                              key={index}
                              className='border-b border=white/20 h-[140px] mb-[38px] flex'
                           >
                              <div className='max-w-[476px]'>
                                 <h4 className='text-[24px] tracking-wider font-primary font-semibold'>
                                    {name}
                                 </h4>
                                 <p className='font-secondary leadiing-tight'>{description}</p>
                              </div>
                           </div>
                        );
                     })}
                  </div>
               </motion.div>
            </div>
         </div>
      </section>
   );
};

export default Services;
