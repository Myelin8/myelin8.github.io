import { Link } from 'react-router-dom';
import { IoIosMail } from "react-icons/io";

const Footer_02 = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <footer id='footer-2' className='relative z-20'>
      <div className="absolute -top-[77px] left-1/2 z-10 h-[77px] w-full -translate-x-1/2 bg-[url('/assets/img/th-2/arc-bottom-shape-1.svg')] bg-cover bg-center bg-no-repeat"></div>
      <div className='relative z-[1] overflow-hidden bg-black text-white'>
        {/* Section Container */}
        <div className='pb-10 pt-1 lg:pt-7 xl:pt-[68px]'>
          {/* Footer Top */}
          <div>
            {/* Section Container */}
            <div className='global-container'>
              {/* Section Content Block */}
              <div className='mx-auto mb-10 text-center md:mb-16 md:max-w-lg lg:mb-20 lg:max-w-xl xl:max-w-3xl'>
                <h2 className='text-2xl sm:text-4xl font-medium leading-[1.06] text-white'>
                  Vem descobrir como realmente são os teus consumidores!
                </h2>
              </div>
              {/* Section Content Block */}
              {/* Footer Subscriber Form */}
              {/* 
              <form onSubmit={handleSubmit}>
                <div className='relative mx-auto h-[60px] max-w-[500px]'>
                  <input
                    type='email'
                    name='newsletter-email'
                    id='newsletter-email'
                    placeholder='Escreve o teu email'
                    className='p-y-[18px] h-full w-full rounded-[50px] border-[1px] border-white bg-transparent px-[24px] pr-20 outline-none sm:pr-48'
                    required=''
                  />
                  <button
                    type='submit'
                    className='absolute right-[5px] top-[50%] inline-flex h-[50px] -translate-y-[50%] items-center gap-x-[10px] rounded-[50px] bg-colorViolet px-6 transition-all duration-300 hover:bg-colorOrangyRed'
                  >
                    <span className='hidden sm:inline-block'>Subscrever</span>
                    <img
                      src='assets/img/th-1/arrow-right-large.svg'
                      alt='newsletter'
                    />
                  </button>
                </div>
              </form>
              */}
              {/* Footer Subscriber Form */}
            </div>
            {/* Section Container */}
          </div>
          {/* Footer Top */}
          {/* Footer Center */}
          <div className='mt-16 xl:mt-20 xxl:mt-[100px]'>
            {/* Section Container */}
            <div className='global-container text-center md:text-left'>
              {/* Footer Widgets Block */}
              <div className='grid gap-x-10 gap-y-[60px] md:flex md:justify-between md:gap-x-20'>
              <Link to='/' className='md:absolute md:left-1/2 md:-translate-x-1/2'>
                  <img
                    src={'assets/img/icon-white.png'}
                    alt='Logo'
                    width='160'
                    className='mx-auto transform transition duration-300 hover:scale-110'
                  />
                </Link>
                {/* Footer Widget */}
                <div className='flex flex-col gap-y-6'>
                  {/* Footer Title */}
                  <h4 className='text-[21px] font-semibold capitalize text-white'>
                    Páginas Principais
                  </h4>
                  {/* Footer Title */}
                  {/* Footer Navbar */}
                  <ul className='flex flex-col gap-y-[10px] capitalize'>
                    <li>
                      <Link
                        to='/'
                        className='transition-all duration-300 ease-linear hover:text-colorLinenRuffle'
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/solutions'
                        className='transition-all duration-300 ease-linear hover:text-colorLinenRuffle'
                      >
                        Soluções
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/social-media'
                        className='transition-all duration-300 ease-linear hover:text-colorLinenRuffle'
                      >
                        Redes Sociais
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/about'
                        className='transition-all duration-300 ease-linear hover:text-colorLinenRuffle'
                      >
                        Sobre nós
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/contact'
                        className='transition-all duration-300 ease-linear hover:text-colorLinenRuffle'
                      >
                        Contactos
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* Footer Widget Item */}
                {/* Footer Widget Item */}
                <div className='flex flex-col gap-y-6'>
                  {/* Footer Title */}
                  <h4 className='text-[21px] font-semibold capitalize text-white'>
                    Redes Sociais
                  </h4>
                  {/* Footer Title */}
                  {/* Footer Navbar */}
                  <ul className='flex flex-col gap-y-[15px] text-start mx-auto'>
                    <li>
                      <Link
                        rel='noopener noreferrer'
                        target='_blank'
                        to='https://www.linkedin.com/company/myelin-8'
                        className='group flex items-center gap-x-3'
                      >
                        <div className='flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-white bg-opacity-10 transition-all duration-300 group-hover:bg-colorViolet'>
                          <img
                            src='assets/img/th-1/linkedin-icon-white.svg'
                            alt='linkedin-icon-white'
                            width={14}
                            height={14}
                          />
                        </div>
                        <span className='inline-block flex-1'>Myelin8</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        rel='noopener noreferrer'
                        target='_blank'
                        to='mailto:geral@myelin8.com'
                        className='group flex items-center gap-x-3'
                      >
                        <div className='flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-white bg-opacity-10 transition-all duration-300 group-hover:bg-colorViolet'>
                          <IoIosMail />
                        </div>
                        <span className='inline-block flex-1'>geral@myelin8.com</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* Footer Widget Item */}
              </div>
              {/* Footer Widgets Block */}
            </div>
            {/* Section Container */}
          </div>
          {/* Footer Center */}
          {/* Footer Separator */}
          <div className='global-container'>
            <div className='mb-10 mt-[60px] h-[1px] w-full bg-white' />
          </div>
          {/* Footer Separator */}
          {/* Footer Bottom */}
          <div>
            <div className='global-container'>
              <div className='text-center'>
                <p>
                  Myelin8 {new Date().getFullYear()} © All Rights Reserved
                </p>
              </div>
            </div>
          </div>
          {/* Footer Bottom */}
        </div>
        {/* Section Container */}
        {/* Background Gradient */}
        <div className='absolute left-1/2 top-[80%] -z-[1] h-[1280px] w-[1280px] -translate-x-1/2 rounded-full bg-gradient-to-t from-[#ca96f9] to-[#540c94] blur-[250px]'></div>
      </div>
    </footer>
  );
};

export default Footer_02;
