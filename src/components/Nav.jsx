import { Link } from "react-scroll";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsBriefcase, BsChatSquare } from "react-icons/bs";

const Nav = () => {
   return (
      <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
         <div className='container mx-auto'>
            <div className='w-full bg-black/20 h-[65px] backdrop-blur-2xl rounded-full  max-w-[350px] mx-auto px-5 flex justify-between items-center text-2xl  text-white/50'>
               <Link
                  activeClass='active'
                  smooth={true}
                  spy={true}
                  to='home'
                  className='cursor-pointer h-[60px] w-[60px] flex items-center justify-center'
               >
                  <BiHomeAlt></BiHomeAlt>
               </Link>
               <Link
                  activeClass='active'
                  spy={true}
                  smooth={true}
                  to='about'
                  className='cursor-pointer h-[60px] w-[60px] flex items-center justify-center'
               >
                  <BiUser></BiUser>
               </Link>
               <Link
                  activeClass='active'
                  smooth={true}
                  spy={true}
                  to='work'
                  className='cursor-pointer h-[60px] w-[60px] flex items-center justify-center'
               >
                  <BsBriefcase></BsBriefcase>
               </Link>
               <Link
                  activeClass='active'
                  smooth={true}
                  spy={true}
                  to='contact'
                  className='cursor-pointer h-[60px] w-[60px] flex items-center justify-center'
               >
                  <BsChatSquare></BsChatSquare>
               </Link>
            </div>
         </div>
      </nav>
   );
};

export default Nav;
