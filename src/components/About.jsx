import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../varients";
import { Link } from "react-scroll";

const About = () => {
   const [ref, inView] = useInView({
      threshold: 0.5,
   });
   return (
      <section id='about' className='section' ref={ref}>
         <div className='container mx-auto'>
            <div className='flex  flex-col gap-y-10 lg:flex-row lg:items-center  lg:gap-x-20 lg:gap-y-0'>
               <motion.div
                  variants={fadeIn("right", 0.3)}
                  initial='hidden'
                  whileInView={"show"}
                  viewport={{
                     once: false,
                     amount: 0.3,
                  }}
                  className='flex-1 flex justify-center items-center h-[640px] mix-blend-lighten bg-top rounded-full overflow-hidden'
               >
                  <img
                     src='/tinsae-portfolio/assets/mypic.jpg'
                     className='w-1/2 h-1/2 rounded-full object-cover'
                  />
               </motion.div>
               <motion.div
                  variants={fadeIn("left", 0.5)}
                  initial='hidden'
                  whileInView={"show"}
                  viewport={{
                     once: false,
                     amount: 0.3,
                  }}
                  className='flex-1'
               >
                  <h1 className='h2 text-accent '>About me and What I do!</h1>
                  <h2 className='h3 mb-4 '>I am a freelance frontend developer</h2>
                  <p className='mb-6 text-justify '>
                     I am a frontend developer with flutter and react technologies. I have extensive
                     knowladge and skill of widgets, animation, bloc and provider state managements
                     as well as hive, sqlite and firebase, Rest API intergration in flutter. For
                     react I worked with redux state management, react router and react query. I
                     also use tailwindcss as CSS framework.
                  </p>
                  <div className='flex justify-between lg:gap-x-10 mb-12'>
                     <div>
                        <div className='text-[40px] font-tertiary text-gradient mb-2'>
                           {inView ? <CountUp start={0} end={1} duration={3}></CountUp> : null}
                        </div>
                        <div className='font-primary  text-sm tracking-[2px]'>
                           Years of <br /> Experience
                        </div>
                     </div>
                     <div>
                        <div className='text-[40px] font-tertiary text-gradient mb-2'>
                           {inView ? <CountUp start={0} end={5} duration={3}></CountUp> : null}
                        </div>
                        <div className='font-primary  text-sm tracking-[2px]'>
                           Projects <br /> Completed
                        </div>
                     </div>
                     <div>
                        <div className='text-[40px] font-tertiary text-gradient mb-2'>
                           {inView ? <CountUp start={0} end={0} duration={3}></CountUp> : null}
                        </div>
                        <div className='font-primary  text-sm tracking-[2px]'>
                           Statsfied <br /> Client
                        </div>
                     </div>
                  </div>
                  <div className='flex items-center'>
                     <Link to='contact' smooth={true}>
                        <button className='btn btn-lg'>Contact me</button>
                     </Link>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>
   );
};

export default About;
