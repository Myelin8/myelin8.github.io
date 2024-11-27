import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer_02 from '../footer/Footer_02';
import Header from '../header/Header';

const Layout = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 990;
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);


  return (
    <div className='page-wrapper relative z-[1] bg-white'>
      {/*...::: Header Start :::... */}
      <Header
        dashboardCSS='button hidden rounded-[50px] border-black bg-black text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white lg:inline-block'
        light={isMobile}
      />
      {/*...::: Header End :::... */}

      {/*...::: Main Start :::... */}
      <Outlet />
      {/*...::: Main End :::... */}

      {/*...::: Footer Start :::... */}
      <Footer_02 />
      {/*...::: Footer End :::... */}
    </div>
  );
};

export default Layout;
