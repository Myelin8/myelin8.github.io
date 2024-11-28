import { Link } from 'react-router-dom';

const Contact_Info = () => {
  return (
    <div className='order-2 flex flex-col md:order-1'>
      {/* Section Content Block */}
      <div className='mb-8 text-left lg:mb-16 xl:mb-6'>
        <div className='mx-auto md:mx-0 md:max-w-none'>
          <h2>Vamos falar?</h2>
        </div>
      </div>
      {/* Section Content Block */}
      <div className='text-lg leading-[1.4] lg:text-[21px]'>
        <p className='mb-7 last:mb-0'>
          Estamos aqui para ajudar! Diz-nos como podemos ajudar, entraremos em contacto contigo nas próximas 24 horas.
        </p>
        <ul className='mt-12 flex flex-col gap-y-8 lg:gap-y-12'>
          <li className='flex flex-col gap-y-4 text-2xl font-bold'>
            Envia-nos um email:
            <a
              href='mailto:geral@myelin8.com'
              className='text-2xl font-normal leading-loose hover:text-colorOrangyRed lg:text-3xl'
            >
              geral@myelin8.com
            </a>
          </li>
          <li className='flex flex-col gap-y-4 text-2xl font-bold'>
            Segue-nos em:
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
