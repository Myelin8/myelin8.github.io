const Content_02 = () => {
  return (
    <>
      {/*...::: Content Section Start_2 :::... */}
      <section id='content-section-2'>
        {/* Section Spacer */}
        <div className='pb-20 xl:pb-[150px]'>
          {/* Section Container */}
          <div className='global-container'>
            <div className='grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20 xl:grid-cols-[minmax(0,_1.2fr)_1fr] xl:gap-28 xxl:gap-32'>
              {/* Content Left Block */}
              <div
                className='jos order-2 overflow-hidden rounded-md'
                data-jos_animation='fade-left'
              >
                <img
                  src='assets/img/th-1/arrow.svg'
                  alt='content-image-2'
                  width='400'
                />
              </div>
              {/* Content Left Block */}
              {/* Content Right Block */}
              <div className='jos order-1' data-jos_animation='fade-right'>
                {/* Section Content Block */}
                <div className='mb-6'>
                  <h2>Porquê Myelin8?</h2>
                </div>
                {/* Section Content Block */}
                <div className='text-lg leading-[1.4] lg:text-[21px]'>
                  <p className='mb-7 last:mb-0'>
                    Na Myelin8, acreditamos que a verdadeira transformação no turismo começa com a personalização profunda da experiência do cliente, impulsionada por dados.
                  </p>
                  <p className='mb-7 last:mb-0'>
                    O nosso propósito é capacitar empresas, marcas e destinos a tomar decisões mais inteligentes, com base em dados precisos e atualizados, permitindo-lhes antecipar as necessidades dos turistas e oferecer ofertas mais relevantes - Transformamos desafios em oportunidades
                  </p>
                  <ul className="flex flex-col gap-y-5 leading-tight font-semibold tracking-tighter text-black lg:mt-12">
                    {[
                      "Mais do que Dados, Decisões Estratégicas",
                      "Dados e Insights que Geram Ação",
                      "Personalização de Soluções",
                      "Integração de Tecnologia e Expertise no Turismo",
                      "Setor Turístico no DNA"
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
      {/*...::: Content Section End :::... */}
    </>
  );
};

export default Content_02;
