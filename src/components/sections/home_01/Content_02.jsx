const Content_02 = () => {
  return (
    <>
      {/*...::: Content Section Start_2 :::... */}
      <section id='distincao'>
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
                  src='assets/img/th-1/Fluffy_Loop.svg'
                  alt='content-image-2'
                  width='400'
                />
              </div>
              {/* Content Left Block */}
              {/* Content Right Block */}
              <div className='jos order-1' data-jos_animation='fade-right'>
                {/* Section Content Block */}
                <div className='mb-6'>
                  <h2>O que nos distingue de outras soluções?</h2>
                </div>
                {/* Section Content Block */}
                <div className='text-lg leading-[1.4] lg:text-[21px]'>
                  <p className='mb-7 last:mb-0'>
                    A Myelin8 alia tecnologia de ponta a uma compreensão profunda do setor turístico. Combinamos Competitive Intelligence e Decision Science para transformar dados em insights poderosos que impulsionam resultados.
                  </p>
                  <p className='mb-7 last:mb-0'>
                    Na Myelin8, não entregamos apenas números - traduzimos dados em decisões inteligentes, ajudando as empresas a reagir rapidamente às mudanças do mercado e a criar estratégias que realmente fazem a diferença. Porque no turismo, cada decisão conta, e nós estamos aqui para garantir que cada uma delas leve ao sucesso.
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
      {/*...::: Content Section End :::... */}
    </>
  );
};

export default Content_02;
