import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logoDark from '../../../public/assets/img/icon.png';
import logoLight from '../../../public/assets/img/icon-white.png';

const Logo = ({ light }) => {
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

  const logoToShow = isMobile ? (light ? logoLight : logoDark) : logoDark;

  return (
    <Link to='/'>
      <img
        src={logoToShow}
        alt='logo'
        width='38'
        className='transform transition duration-300 hover:scale-110'
      />
    </Link>
  );
};

export default Logo;
