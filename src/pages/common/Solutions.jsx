import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import Service from '../../components/sections/home_01/service/Service';
import { FaBoltLightning } from "react-icons/fa6";
import { GrCycle } from "react-icons/gr";
import { FaPaperclip } from "react-icons/fa6";

const Solutions = () => {
  return (
    <>
      <main className='main-wrapper relative overflow-hidden'>
        {/*...::: Breadcrumb Section Start :::... */}
        <Breadcrumb title='Soluções' link='Soluções' />
        {/*...::: Breadcrumb Section End :::... */}
        <Service />

        <section>
          {/* Section Spacer */}
          <div className='jos mx-5 mb-40 rounded-[50px] bg-black px-[20px] py-20 sm:px-[50px] md:mx-[50px] lg:px-[100px]'>
            {/* Section Container */}
            <div className='global-container'>
              {/* Section Content Block */}
              <div className='mb-10 text-center lg:mb-12 xl:mb-20'>
                <div className='mx-auto '>
                  <h2 className='text-white text-4xl md:text-6xl'>O que estamos a desenvolver:</h2>
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
                    <h4 className='flex-1 text-white'>Dashboard</h4>
                  </div>
                  <p className='text-lg text-white lg:text-[21px]'>
                  Pensado para todas as necessidades de visualização e exploração de
                    insights de forma intuitiva e eficaz, onde também será possível
                    monotorizar performance, tendências e tomar decisões mais rápidas e
                    eficazes.
                  </p>
                </li>
                {/* Core Value Item */}
                {/* Core Value Item */}
                <li className='relative after:absolute after:-top-[3px] after:left-0 after:h-[5px] after:w-full after:scale-x-0 after:rounded-[5px] after:bg-colorOrangyRed after:transition-all after:duration-300 hover:after:scale-x-0 sm:pt-6 lg:pt-10 xxl:hover:after:scale-x-100'>
                  <div className='mb-3 flex items-center gap-x-3 md:mb-6'>
                    <GrCycle className="text-lg sm:text-2xl text-colorOrangyRed mr-2" />
                    <h4 className='flex-1 text-white'>Análise Preditiva</h4>
                  </div>
                  <p className='text-lg text-white lg:text-[21px]'>
                  Com a nossa Análise de Sentimento, conseguimos identificar e
                    interpretar as emoções e perceções dos consumidores sobre destinos,
                    produtos e serviços turísticos.
                  </p>
                </li>
                {/* Core Value Item */}
                {/* Core Value Item */}
                <li className='relative after:absolute after:-top-[3px] after:left-0 after:h-[5px] after:w-full after:scale-x-0 after:rounded-[5px] after:bg-colorOrangyRed after:transition-all after:duration-300 hover:after:scale-x-0 sm:pt-6 lg:pt-10 xxl:hover:after:scale-x-100'>
                  <div className='mb-3 flex items-center gap-x-3 md:mb-6'>
                    <FaPaperclip className="text-lg sm:text-2xl text-colorOrangyRed mr-2" />
                    <h4 className='flex-1 text-white'>Análise de Sentimento</h4>
                  </div>
                  <p className='text-lg text-white lg:text-[21px]'>
                    Utilizando inteligência artificial, Machine Learning e análise de
                    dados históricos, a nossa ferramenta de Previsão de Tendências
                    antecipa as mudanças e flutuações do mercado, decisões proativas e
                    muito mais.
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

      </main>
    </>
  );
};

export default Solutions;
