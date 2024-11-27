import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import Content_01 from '../../components/sections/inner-pages/about/Content_01';
import Content_02 from '../../components/sections/inner-pages/about/Content_02';
import CoreValue from '../../components/sections/inner-pages/about/CoreValue';
import CustomMap from '../../components/sections/inner-pages/about/CustomMap';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <main className='main-wrapper relative overflow-hidden'>
        {/*...::: Breadcrumb Section Start :::... */}
        <Breadcrumb title='Sobre Nós' link='Myelin8' />
        {/*...::: Breadcrumb Section End :::... */}
        {/*...::: Core Value Section Start :::... */}
        <CoreValue />
        {/*...::: Core Value Section End :::... */}
        {/*...::: Content Section Start :::... */}
        <Content_01 />
        <Content_02 />
        {/*...::: Content Section End :::... */}

        <div className="jos p-6 mb-20 sm:p-10 lg:p-20">
          {/* Section Container */}
          <div className="global-container bg-black text-center rounded-3xl p-6 sm:p-10 lg:p-20">
            {/* Section Content Block */}
            <div className="jos">
              <div className="mx-auto max-w-[300px] sm:max-w-[400px] md:max-w-[600px] xl:max-w-[680px]">
                <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl">
                  Identificas-te com a nossa visão?
                </h2>
              </div>
            </div>
            {/* Separator */}
            <div className="global-container">
              <div className="my-6 sm:my-8 lg:my-10 h-[1px] w-full bg-white opacity-60" />
            </div>
            <Link to='/contact' className='button rounded-[50px] border-black bg-white text-black after:bg-colorOrangyRed hover:border-colorOrangyRed'>
              Let's Partner!
            </Link>
          </div>
          {/* Section Container */}
        </div>

        {/*<APIProvider apiKey='{process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
          <CustomMap />
        </APIProvider>*/}

        <CustomMap />

      </main>
    </>
  );
};

export default About;
