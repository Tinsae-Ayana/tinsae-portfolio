import Nav from "./components/Nav";
import About from "./components/About";
import Contact from "./components/Contact";
import Work from "./components/Work";
import Banner from "./components/Banner";
import Header from "./components/Header";

export default function App() {
   return (
      <div>
         <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
            <Header></Header>
            <Nav></Nav>
            <Banner></Banner>
            <About></About>
            <Work></Work>
            <Contact></Contact>
         </div>
      </div>
   );
}
