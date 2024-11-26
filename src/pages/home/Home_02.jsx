import Blog from '../../components/sections/home_02/Blog';
import Hero from '../../components/sections/home_01/Hero';
import Feature from '../../components/sections/home_02/Feature';
import Content_01 from '../../components/sections/home_02/Content_01';
import Content_02 from '../../components/sections/home_02/Content_02';
import Content_03 from '../../components/sections/home_02/Content_03';
import Integrates from '../../components/sections/home_02/Integrates';
import Testimonial from '../../components/sections/home_02/Testimonial';
import Faq from '../../components/sections/home_02/Faq';

function Home_02() {
  return (
    <>
      <div className='page-wrapper relative z-[1] bg-white'>
        <main className='main-wrapper relative overflow-hidden'>
          {/*...::: Hero Section Start :::... */}
          <Hero />
          {/*...::: Hero Section End :::... */}
          {/*...::: Feature Section Start :::... */}
          <Feature />
          {/*...::: Feature Section End :::... */}
          {/* Separator */}
          <div className='global-container'>
            <div className='h-[1px] w-full bg-[#EAEDF0]' />
          </div>
          {/* Separator */}
          {/*...::: Content Section Start :::... */}
          <Content_01 />
          {/*...::: Content Section End :::... */}
          {/*...::: Content Section Start :::... */}
          <Content_02 />
          {/*...::: Content Section End :::... */}
          {/*...::: Content Section Start :::... */}
          <Content_03 />
          {/*...::: Content Section End :::... */}
          {/*...::: Content Section Start :::... */}
          <Integrates />
          {/*...::: Content Section End :::... */}
          {/*...::: Testimonial Section Start :::... */}
          <Testimonial />
          {/*...::: Testimonial Section Start :::... */}
          {/* Separator */}
          <div className='global-container'>
            <div className='h-[1px] w-full bg-[#EAEDF0]' />
          </div>
          {/* Separator */}
          {/*...::: Blog Section Start :::... */}
          <Blog />
          {/*...::: Blog Section Start :::... */}
          {/*...::: FAQ Section Start :::... */}
          <Faq />
          {/*...::: FAQ Section End :::... */}
        </main>
      </div>
    </>
  );
}

export default Home_02;
