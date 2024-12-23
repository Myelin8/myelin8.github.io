import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Logo from '../logo/Logo';

// eslint-disable-next-line react/prop-types
const Header = ({ dashboardCSS, navColor, light }) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header
      className='site-header site-header--absolute is--white py-3'
      id='sticky-menu'
    >
      <div className='global-container lg:w-fit lg:bg-white lg:shadow-md lg:rounded-full lg:px-5 lg:mt-4'>
        <div className='flex items-center justify-between gap-x-8 p-2'>
          {/* Header Logo */}
          <Logo light={light} />
          {/* Header Logo */}
          {/* Header Navigation */}
          <Navbar
            mobileMenu={mobileMenu}
            setMobileMenu={setMobileMenu}
            color={navColor}
          />
          {/* Header Navigation */}
          {/* Header User Event */}
          <div className='flex items-center gap-6'>
            <Link to='/contact' className={dashboardCSS}>
              Contacta-nos
            </Link>
            {/* Responsive Off-canvas Menu Button */}
            <div className='block lg:hidden'>
              <button
                onClick={() => setMobileMenu(true)}
                className={`mobile-menu-trigger ${
                  light ? 'is-white' : 'is-black'
                }`}
              >
                <span />
              </button>
            </div>
          </div>
          {/* Header User Event */}
        </div>
      </div>
    </header>
  );
};

export default Header;
