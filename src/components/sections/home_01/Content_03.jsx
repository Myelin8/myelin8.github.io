const Content_01 = () => {
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
                <img
                  src='assets/img/th-1/cyan.svg'
                  alt='content-image-1'
                  width='400'
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
                  <h2>A nossa Metedologia</h2>
                </div>
                {/* Section Content Block */}
                <div className='text-lg leading-[1.4] lg:text-[21px]'>
                  <p className='mb-7 last:mb-0'>
                    Começamos pela identificação e recolha de informações essenciais do mercado turístico, desde redes sociais e reservas online até tendências de pesquisa.
                  </p>
                  <p className='mb-7 last:mb-0'>
                    Estes dados são organizados numa base de dados escalável e inteligente, proporcionando acesso imediato a insights claros e atualizados, que permitem decisões rápidas e fundamentadas.
                  </p>
                  <p className='mb-7 last:mb-0'>
                    No entanto, sabemos que dados só fazem diferença quando bem interpretados - e é aí que a nossa equipa de especialistas entra em ação. Combinando expertise em marketing digital, comportamento do consumidor e turismo, ajudamos a tua marca a transformar informação em resultados, acompanhando cada etapa da tua jornada com rumo ao sucesso
                  </p>
                  <ul className="flex flex-col gap-y-5 leading-tight font-semibold tracking-tighter text-black lg:mt-12">
                    {[
                      "Identificação, Recolha e Centralização de Dados contextualizados",
                      "Base de Dados Escalável, Organizada e Atualizada",
                      "Equipa Especializada",
                    ].map((text, index) => (
                      <li key={index} className="flex items-center gap-x-3">
                        {/* Icon Container */}
                        <div className="mt-[2.5px] flex-shrink-0">
                          <img
                            src="assets/img/th-1/check-circle.svg"
                            alt="check-circle"
                            className="h-[30px] w-[30px] object-contain"
                          />
                        </div>
                        {/* Text */}
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>

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
