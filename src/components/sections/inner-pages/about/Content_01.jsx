import { useEffect, useRef } from "react";
import Lottie from 'react-lottie-player';
import animationData from '../../../../../public/assets/videos/mission.json'

const Content_01 = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <>
      {/*...::: Content Section Start_1 :::... */}
      <section id='content-section-1'>
        {/* Section Spacer */}
        <div className="py-20">
          {/* Section Container */}
          <div className='global-container'>
            <div className='grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20 xl:gap-28 xxl:gap-32'>
              {/* Content Left Block */}
              <div
                className='jos order-2 mx-auto overflow-hidden md:order-1'
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
              <div
                className='jos order-1 md:order-2'
                data-jos_animation='fade-right'
              >
                {/* Section Content Block */}
                <div className='mb-6'>
                  <h2>A nossa Missão</h2>
                </div>
                {/* Section Content Block */}
                <div className='text-lg leading-[1.4] lg:text-[21px]'>
                  <p className='mb-7 last:mb-0'>
                    A nossa missão é capacitar o setor turístico com dados estratégicos que permitam às empresas, marcas e destinos oferecer experiências mais personalizadas e antecipar tendências.
                  </p>
                  <p className='mb-7 last:mb-0'>
                    Acreditamos que, com os dados certos, é possível transformar cada interação com o cliente numa oportunidade única de conexão e sucesso ao tomar decisões informadas, assertivas e a criar ofertas verdadeiramente relevantes, que atendam às necessidades de um consumidor em constante evolução.                  </p>
                </div>
              </div>
              {/* Content Right Block */}
            </div>
          </div>
          {/* Section Container */}
        </div>
        {/* Section Spacer */}
      </section>
      {/*...::: Content Section End_1 :::... */}
    </>
  );
};

export default Content_01;
