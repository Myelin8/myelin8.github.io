import { Link } from 'react-router-dom';
import Team_Social from './Member_Social';

// eslint-disable-next-line react/prop-types
const Member = ({
  img,
  name,
  info,
  mail,
  linkedin,
  calendly,
}) => {
  return (
    <li
      className='jos group rounded-[20px] bg-colorOrangyRed text-white p-[20px]'
      data-jos_animation='flip'
      data-jos_delay='0.1'
    >
      <div className='xl:h[300px] w-full overflow-hidden rounded-[20px] xxl:h-[400px]'>
        <img
          src={img}
          alt='team-member'
          width={376}
          height={400}
          className='h-full w-full object-cover bg-white scale-100 transition-all duration-300 group-hover:scale-105'
        />
      </div>
      <div className='mt-5'>
        <h3 className='text-[26px] leading-[1.33] xxl:text-[30px]'>{name}</h3>
        <div className='mt-3 flex flex-col justify-between gap-3 xxl:flex-row xxl:flex-wrap xxl:items-center'>
          <span className='text-[21px]'>{info}</span>
          {
            <Team_Social
              mail={mail}
              linkedin={linkedin}
              calendly={calendly}
            />
          }
        </div>
      </div>
    </li>
  );
};

export default Member;
