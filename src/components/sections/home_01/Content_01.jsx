import { useEffect, useRef } from "react";

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
        <div className='pb-20 xl:pb-[150px]'>
          {/* Section Container */}
          <div className='global-container'>
            <div className='grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20 xl:gap-28 xxl:gap-32'>
              {/* Content Left Block */}
              <div
                className='jos order-2 overflow-hidden rounded-md md:order-1'
                data-jos_animation='fade-left'
              >
                <video autoPlay loop muted playsInline className="w-full no-select-media" ref={videoRef}>
                  <source src='/assets/videos/blocks.mp4' type='video/mp4'/>
                </video>
              </div>
              {/* Content Left Block */}
              {/* Content Right Block */}
              <div
                className='jos order-1 md:order-2'
                data-jos_animation='fade-right'
              >
                {/* Section Content Block */}
                <div className='mb-6'>
                  <h2>O nosso Propósito:</h2>
                </div>
                {/* Section Content Block */}
                <div className='text-lg leading-[1.4] lg:text-[21px]'>
                  <p className='mb-7 last:mb-0'>
                    Na Myelin8, acreditamos que a verdadeira transformação no turismo começa com a personalização profunda da experiência do cliente, impulsionada por dados.
                  </p>
                  <p className='mb-7 last:mb-0'>
                    O nosso propósito é capacitar empresas, marcas e destinos a tomar decisões mais inteligentes, com base em dados precisos e atualizados, permitindo-lhes antecipar as necessidades dos turistas e oferecer ofertas mais relevantes.
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
      {/*...::: Content Section End_1 :::... */}
    </>
  );
};

export default Content_01;
