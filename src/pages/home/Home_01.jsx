import Hero from '../../components/sections/home_01/Hero';
import Content_01 from '../../components/sections/home_01/Content_01';
import Content_02 from '../../components/sections/home_01/Content_02';
import Content_03 from '../../components/sections/home_01/Content_03';
import Content_04 from '../../components/sections/home_01/Content_04';
import { Link } from 'react-router-dom';
import ScrollBar from '../../components/sections/home_01/ScrollBar';

const Home_01 = () => {
  return (
    <main className='main-wrapper relative overflow-hidden'>
      <Hero />

      <div className='pb-20'>
        {/* Section Container */}
        <div className='global-container'>
          <div className='items-center text-center'>
            <h2 className='mb-12 md:text-6xl'>Conhece quem são os teus clientes, o que os motiva e como tomam as suas decisões</h2>

            <Link to='/contact' className='button rounded-[50px] border-black bg-black text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white'>
              Contacta-nos
            </Link>
          </div>
        </div>
      </div>

      <ScrollBar />

      <Content_01 />
      <Content_02 />
      <Content_03 />
      <Content_04 />

      {/* Body Background Shape 1 */}
      <div className='absolute -left-[15px] top-[61%] -z-[1] h-[400px] w-[400px] -rotate-[-9.022deg] rounded-[400px]'></div>

      {/* Body Background Shape 2 */}
      <div className='absolute -left-[100px] top-[64%] -z-[1] h-[360px] w-[360px] -rotate-[-9.022deg] rounded-[360px]'></div>
    </main>
  );
};

export default Home_01;
