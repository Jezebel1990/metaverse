import  Navbar  from '../components/Navbar';
import Explore  from '../sections/Explore';
import Hero from '../sections/Hero';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
 <Navbar />
 <Hero />
 <Explore />
  </div>
);

export default Page; 