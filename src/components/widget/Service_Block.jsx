import { Link } from 'react-router-dom';
import { FaDatabase } from "react-icons/fa";
import { IoExtensionPuzzle } from "react-icons/io5";
import { IoConstruct } from "react-icons/io5";
import { AiFillProduct } from "react-icons/ai";

// eslint-disable-next-line react/prop-types
const Service_Block = ({ icon, title, text }) => {
  let ic;
  switch (icon) {
    case 'FaDatabase':
      ic = <FaDatabase size={70} />;
      break;
    case 'IoExtensionPuzzle':
      ic = <IoExtensionPuzzle size={70} />;
      break;
    case 'IoConstruct':
      ic = <IoConstruct size={70} />;
      break;
    case 'AiFillProduct':
      ic = <AiFillProduct size={70} />;
      break;
  };

  return (
    <Link to='/service-details' className='group bg-white p-[30px] transition-all duration-300 ease-in-out hover:bg-black'>
      <li className='group-hover:text-colorLinenRuffle'>
        <div className='relative mb-9 h-[70px] w-[70px]'>
          {ic}
        </div>
        <h3 className='mb-4 block text-xl font-bold leading-tight -tracking-[0.5px] xl:text-2xl xxl:text-[28px]'>
          {title}
        </h3>
        <p className='duration-300 group-hover:text-white'>{text}</p>
      </li>
    </Link>
  );
};

export default Service_Block;
