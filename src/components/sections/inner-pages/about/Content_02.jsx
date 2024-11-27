import Lottie from 'react-lottie-player';
import animationData from '../../../../../public/assets/videos/eye.json'

const Content_02 = () => {
  return (
    <section id='content-section-2'>
      {/* Section Spacer */}
      <div className='py-20'>
        {/* Section Container */}
        <div className='global-container'>
          <div className='grid grid-cols-1 items-center gap-12 md:grid-cols-2 xl:grid-cols-[minmax(0,_1.3fr)_1fr]'>
            {/* Content Left Block */}
            <div
              className='jos order-2 mx-auto overflow-hidden'
              data-jos_animation='fade-left'
            >
              <Lottie
                loop
                animationData={animationData}
                play
                style={{ width: 350 }}
              />
            </div>
            {/* Content Left Block */}
            {/* Content Right Block */}
            <div className='jos order-1' data-jos_animation='fade-right'>
              {/* Section Content Block */}
              <div className='mb-6'>
                <h2>A nossa Visão</h2>
              </div>
              {/* Section Content Block */}
              <div className='text-lg leading-[1.4] lg:text-[21px]'>
                <p className='mb-7 last:mb-0'>
                  Na Myelin8, aspiramos a liderar o caminho em inteligência de mercado no setor turístico. O nosso objetivo é capacitar empresas, marcas e destinos para prosperarem num ambiente dinâmico e competitivo, utilizando o poder dos dados e da tecnologia. Queremos ser reconhecidos como a referência em análise de comportamento do consumidor e consultoria estratégica personalizada, ajudando empresas, marcas e destinos a adaptarem-se às mudanças rápidas, anteciparem tendências e destacarem-se como protagonistas num mercado em constante evolução.
                </p>
              </div>
            </div>
            {/* Content Right Block */}
          </div>
        </div>
        {/* Section Container */}
      </div>
      {/* Section Spacer */}
    </section>
  );
};

export default Content_02;
