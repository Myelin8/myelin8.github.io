import { Link } from 'react-router-dom';

const Contact_Info = () => {
  return (
    <div className='order-2 flex flex-col md:order-1'>
      {/* Section Content Block */}
      <div className='mb-8 text-left lg:mb-16 xl:mb-6'>
        <div className='mx-auto md:mx-0 md:max-w-none'>
          <h2>Get in touch with us directly</h2>
        </div>
      </div>
      {/* Section Content Block */}
      <div className='text-lg leading-[1.4] lg:text-[21px]'>
        <p className='mb-7 last:mb-0'>
          We are here to help you! Tell us how we can help &amp; we'll be in
          touch with an expert within the next 24 hours.
        </p>
        <ul className='mt-12 flex flex-col gap-y-8 lg:gap-y-12'>
          <li className='flex flex-col gap-y-4 text-2xl font-bold'>
            Send us an email:
            <a
              href='mailto:geral@myelin8.com'
              className='text-2xl font-normal leading-loose hover:text-colorOrangyRed lg:text-3xl'
            >
              geral@myelin8.com
            </a>
          </li>
          <li className='flex flex-col gap-y-4 text-2xl font-bold'>
            Follow us:
            <ul className='mt-auto flex gap-x-[15px]'>
              <li>
                <Link
                  rel='noopener noreferrer'
                  target='_blank'
                  to='http://www.linkedin.com'
                  className='group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-colorOrangyRed'
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
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact_Info;
