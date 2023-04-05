import { Link } from "react-scroll";

const Header = () => {
   return (
      <header className='py-8'>
         <div className='container mx-auto'>
            <div className='flex justify-between items-center'>
               <a href='#'>
                  <h1>TiNASAE AYANA</h1>
               </a>
               <Link smooth={true} to='contact'>
                  <button className='btn btn-sm'>Work with me</button>
               </Link>
            </div>
         </div>
      </header>
   );
};

export default Header;
