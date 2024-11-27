import { FaBoltLightning } from "react-icons/fa6";
import { GrCycle } from "react-icons/gr";
import { MdLightbulb } from "react-icons/md";
import { FaPaperclip } from "react-icons/fa6";

const CoreValue = () => {
  return (
    <section id='core-value'>
      {/* Section Spacer */}
      <div className='jos mx-5 mb-20 rounded-[50px] bg-black px-[20px] py-20 sm:px-[50px] md:mx-[50px] lg:px-[100px]'>
        {/* Section Container */}
        <div className='global-container'>
          {/* Section Content Block */}
          <div className='mb-10 text-center lg:mb-12 xl:mb-20'>
            <div className='mx-auto'>
              <h2 className='text-white text-4xl md:text-6xl'>Os Valores que Orientam o Nosso Trabalho</h2>
            </div>
          </div>
          {/* Section Content Block */}
          {/* Horizontal Separator */}
          <div className='mb-6 h-[4px] w-full rounded bg-colorCodGray sm:mb-0' />
          {/* Core Value list */}
          <ul className='grid grid-cols-1 justify-between gap-6 md:grid-cols-2 xxl:flex xxl:flex-nowrap'>
            {/* Core Value Item */}
            <li className='relative after:absolute after:-top-[3px] after:left-0 after:h-[5px] after:w-full after:scale-x-0 after:rounded-[5px] after:bg-colorOrangyRed after:transition-all after:duration-300 hover:after:scale-x-0 sm:pt-6 lg:pt-10 xxl:hover:after:scale-x-100'>
              <div className='mb-3 flex items-center gap-x-3 md:mb-6'>
                <FaBoltLightning className="text-lg sm:text-2xl text-colorOrangyRed mr-2" />
                <h4 className='flex-1 text-white'>Inovação</h4>
              </div>
              <p className='text-lg text-white lg:text-[21px]'>
                Estamos comprometido a
                Inovar com as nossas soluções.
              </p>
            </li>
            {/* Core Value Item */}
            {/* Core Value Item */}
            <li className='relative after:absolute after:-top-[3px] after:left-0 after:h-[5px] after:w-full after:scale-x-0 after:rounded-[5px] after:bg-colorOrangyRed after:transition-all after:duration-300 hover:after:scale-x-0 sm:pt-6 lg:pt-10 xxl:hover:after:scale-x-100'>
              <div className='mb-3 flex items-center gap-x-3 md:mb-6'>
                <GrCycle className="text-lg sm:text-2xl text-colorOrangyRed mr-2" />
                <h4 className='flex-1 text-white'>Personalização</h4>
              </div>
              <p className='text-lg text-white lg:text-[21px]'>
                Cada cliente é único, tal como
                as nossas estratégias.
              </p>
            </li>
            {/* Core Value Item */}
            {/* Core Value Item */}
            <li className='relative after:absolute after:-top-[3px] after:left-0 after:h-[5px] after:w-full after:scale-x-0 after:rounded-[5px] after:bg-colorOrangyRed after:transition-all after:duration-300 hover:after:scale-x-0 sm:pt-6 lg:pt-10 xxl:hover:after:scale-x-100'>
              <div className='mb-3 flex items-center gap-x-3 md:mb-6'>
                <MdLightbulb className="text-lg sm:text-2xl text-colorOrangyRed mr-2" />
                <h4 className='flex-1 text-white'>Colaboração</h4>
              </div>
              <p className='text-lg text-white lg:text-[21px]'>
                Acreditamos no poder da colaboração, trabalhando próximos.
              </p>
            </li>
            {/* Core Value Item */}
            {/* Core Value Item */}
            <li className='relative after:absolute after:-top-[3px] after:left-0 after:h-[5px] after:w-full after:scale-x-0 after:rounded-[5px] after:bg-colorOrangyRed after:transition-all after:duration-300 hover:after:scale-x-0 sm:pt-6 lg:pt-10 xxl:hover:after:scale-x-100'>
              <div className='mb-3 flex items-center gap-x-3 md:mb-6'>
                <FaPaperclip className="text-lg sm:text-2xl text-colorOrangyRed mr-2" />
                <h4 className='flex-1 text-white'>Integridade</h4>
              </div>
              <p className='text-lg text-white lg:text-[21px]'>
                Defendemos a mais elevada honestidade ética em todas as nossas interações.
              </p>
            </li>
            {/* Core Value Item */}
          </ul>
          {/* Core Value list */}
        </div>
        {/* Section Container */}
      </div>
      {/* Section Spacer */}
    </section>
  );
};

export default CoreValue;
