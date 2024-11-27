import { Link } from 'react-router-dom';
import logoDark from '../../../public/assets/img/icon.png';
import logoLight from '../../../public/assets/img/icon-white.png';

const Logo = ({ light }) => {
  return (
    <Link to='/'>
      <img
        src={light ? logoLight : logoDark}
        alt='logo'
        width='38'
        className='transform transition duration-300 hover:scale-110'
      />
    </Link>
  );
};

export default Logo;
