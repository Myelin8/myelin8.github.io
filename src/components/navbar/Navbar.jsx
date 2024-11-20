import { useState } from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Navbar = ({ mobileMenu, setMobileMenu, color }) => {
  const [mobileSubMenu, setMobileSubMenu] = useState('');
  const [mobileSubMenuSub, setMobileSubMenuSub] = useState('');
  const [menuTitle, setMenuTitle] = useState('');

  const handleMenu = () => {
    setMobileMenu(false);
    setMobileSubMenu('');
    setMobileSubMenuSub('');
  };

  const handleSubMenu = (e, id) => {
    e.preventDefault();
    setMobileSubMenu(id);

    if (e.target.tagName === 'A') {
      const content = e.target.firstChild.textContent;
      setMenuTitle(content);
    } else {
      const content = e.target.parentElement.textContent;
      setMenuTitle(content);
    }
  };

  const handleSubMenuSub = (e, id) => {
    e.preventDefault();
    setMobileSubMenuSub(id);
    if (e.target.tagName === 'A') {
      const content = e.target.firstChild.textContent;
      setMenuTitle(content);
    } else {
      const content = e.target.parentElement.textContent;
      setMenuTitle(content);
    }
  };

  const handleGoBack = () => {
    if (mobileSubMenuSub) {
      setMobileSubMenuSub('');
      return;
    }
    if (mobileSubMenu) {
      setMobileSubMenu('');
      return;
    }
  };

  return (
    <div className='menu-block-wrapper'>
      <div
        onClick={handleMenu}
        className={`menu-overlay ${mobileMenu && 'active'}`}
      />
      <nav
        className={`menu-block ${mobileMenu && 'active'}`}
        id='append-menu-header'
      >
        <div className={`mobile-menu-head ${mobileSubMenu && 'active'}`}>
          <div onClick={handleGoBack} className='go-back'>
            <img
              className='dropdown-icon'
              src='assets/img/icon-black-long-arrow-right.svg'
              alt='cheveron-right'
              width={16}
              height={16}
            />
          </div>
          <div className='current-menu-title'>{menuTitle}</div>
          <div onClick={handleMenu} className='mobile-menu-close'>
            ×
          </div>
        </div>
        <ul className={`site-menu-main ${color}`}>
          {/* Global navbar */}
          <li className='nav-item'>
            <Link to='/solutions' className='nav-link-item'>
              Solutions
            </Link>
          </li>
          <li
            onClick={(e) => handleSubMenu(e, 1)}
            className='nav-item nav-item-has-children'
          >
            <Link to='#' className='nav-link-item drop-trigger'>
              About Us
              <img
                className='dropdown-icon'
                src='assets/img/icon-black-cheveron-right.svg'
                alt='cheveron-right'
                width={16}
                height={16}
              />
            </Link>
            <ul
              className={`sub-menu ${mobileSubMenu === 1 && 'active'}`}
              id='submenu-1'
            >
              <li className='sub-menu--item'>
                <Link to='/about'>About Myelin8</Link>
              </li>
              <li className='sub-menu--item'>
                <Link to='/why'>Why Myelin8</Link>
              </li>
              <li className='sub-menu--item'>
                <Link to='/team'>Meet our Team</Link>
              </li>
              <li className='sub-menu--item'>
                <Link to='/faq-1'>FAQ</Link>
              </li>
            </ul>
          </li>
          <li
            onClick={(e) => handleSubMenu(e, 2)}
            className='nav-item nav-item-has-children'
          >
            <Link to='#' className='nav-link-item drop-trigger'>
              Resources
              <img
                className='dropdown-icon'
                src='assets/img/icon-black-cheveron-right.svg'
                alt='cheveron-right'
                width={16}
                height={16}
              />
            </Link>
            <ul
              className={`sub-menu ${mobileSubMenu === 2 && 'active'}`}
              id='submenu-2'
            >
              <li className='sub-menu--item'>
                <Link to='/services'>Services</Link>
              </li>
              <li className='sub-menu--item'>
                <Link to='/service-details'>Service Details</Link>
              </li>
            </ul>
          </li>
          
          <li className='nav-item'>
            <Link to='/contact' className='nav-link-item'>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
