import { Link } from 'react-router-dom';
import { IoIosMail } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const Member_Social = ({ mail, linkedin, calendly }) => {
  return (
    <ul className='mt-auto flex gap-x-[15px]'>
      <li>
        <Link
          rel='noopener noreferrer'
          target='_blank'
          to={calendly}
          className='group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black transition-all duration-300 hover:bg-colorViolet'
        >
          <div className='text-white'>
            <FaCalendarAlt size={14} />
          </div>
        </Link>
      </li>
      <li>
        <Link
          rel='noopener noreferrer'
          target='_blank'
          to={`mailto:${mail}`}
          className='group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black transition-all duration-300 hover:bg-colorViolet'
        >
          <div className='text-white'>
            <IoIosMail />
          </div>
        </Link>
      </li>
      <li>
        <Link
          rel='noopener noreferrer'
          to={linkedin}
          className='group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black transition-all duration-300 hover:bg-colorViolet'
        >
          <img
            src='assets/img/th-1/linkedin-icon-white.svg'
            alt='linkedin'
            width={14}
            height={14}
          />
        </Link>
      </li>
    </ul>
  );
};

export default Member_Social;
