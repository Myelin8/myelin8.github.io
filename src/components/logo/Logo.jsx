import { Link } from 'react-router-dom';
import logoDark from '../../../public/assets/img/icon.jpg';
import logoLight from '../../../public/assets/img/icon.jpg';

// eslint-disable-next-line react/prop-types
const LogoDark = ({ light }) => {
  return (
    <Link to='/'>
      <img
        src={light ? logoLight : logoDark}
        alt='AIMass'
        width='60'
        height='24'
        className='rounded-full'
      />
    </Link>
  );
};

export default LogoDark;
