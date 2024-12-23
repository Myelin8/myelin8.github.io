import { useState, Suspense } from "react";
import { Icon } from "@iconify/react";

const Hero = () => {

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <>
      {/*...::: Hero Section Start :::... */}
      <section id='section-hero' className="relative h-screen mb-20">

        {!isVideoLoaded && (
          <div className="h-screen w-full bg-colorOrangyRed text-white flex justify-center items-center z-20">
            <Icon icon="line-md:loading-loop" className="w-20 h-20" />
          </div>
        )}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-screen object-cover absolute top-0 left-0 z-20"
          onCanPlayThrough={() => setIsVideoLoaded(true)}
        >
          <source src="/assets/videos/background.mp4" type="video/mp4" />
        </video>

        <div className="relative z-20 flex items-center justify-center h-full text-center text-white">
          <div
            className="jos overflow-hidden max-w-[900px] mt-10"
            data-jos_animation="zoom"
          >
            <img
              src="assets/img/logo.png"
              alt="hero-logo"
              className="no-select-media w-full px-4 md:px-20"
            />

            <h2 className="hero-description text-sm md:text-xl font-thin tracking-normal opacity-90 mt-6 mb-4 px-4">
              Ajudamos a transformar Dados e Insights numa oportunidade de aumentar a Competitividade, Conversão e Sucesso.
            </h2>
          </div>
          {/* Hero Title 
              <div
                className='jos flex flex-wrap justify-center gap-6 mb-[480px]'
                data-jos_animation='fade'
              >
                <Link
                  to='/contact'
                  className='button rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white'
                >
                  Get started for free
                </Link>
                <Link
                  to='/about'
                  className='button rounded-[50px] border-2 border-black bg-transparent py-4 text-black after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white'
                >
                  Learn more
                </Link>
              </div>
            </div>

            <div className='my-10 h-[1px] w-full bg-[#DBD6CF] lg:my-16 xl:my-20'></div>
            <div className='jos mx-auto mb-12 max-w-[715px] text-center lg:mb-16'>
              <p className='text-lg'>
                Companies of all sizes trust us to find AI SaaS critical to
                their growth and innovation
              </p>
            </div>
            <div className='jos brand-slider' data-jos_animation='fade'>
              <Swiper
                slidesPerView={2}
                spaceBetween={105}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                breakpoints={{
                  768: {
                    slidesPerView: 3,
                  },
                  992: {
                    slidesPerView: 4,
                  },
                  1200: {
                    slidesPerView: 5,
                  },
                }}
              >
                <SwiperSlide>
                  <img
                    src='assets/img/th-1/brand-1.png'
                    alt='brand-1'
                    width='180'
                    height='38'
                    className='max-w-full'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src='assets/img/th-1/brand-2.png'
                    alt='brand-2'
                    width='183'
                    height='35'
                    className='max-w-full'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src='assets/img/th-1/brand-3.png'
                    alt='brand-3'
                    width='172'
                    height='35'
                    className='max-w-full'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src='assets/img/th-1/brand-4.png'
                    alt='brand-4'
                    width='175'
                    height='30'
                    className='max-w-full'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src='assets/img/th-1/brand-5.png'
                    alt='brand-5'
                    width='168'
                    height='36'
                    className='max-w-full'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src='assets/img/th-1/brand-1.png'
                    alt='brand-1'
                    width='180'
                    height='38'
                    className='max-w-full'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src='assets/img/th-1/brand-2.png'
                    alt='brand-2'
                    width='183'
                    height='35'
                    className='max-w-full'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src='assets/img/th-1/brand-3.png'
                    alt='brand-3'
                    width='172'
                    height='35'
                    className='max-w-full'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src='assets/img/th-1/brand-4.png'
                    alt='brand-4'
                    width='175'
                    height='30'
                    className='max-w-full'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src='assets/img/th-1/brand-5.png'
                    alt='brand-5'
                    width='168'
                    height='36'
                    className='max-w-full'
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          */}
        </div>
      </section>
      {/*...::: Hero Section End :::... */}
    </>
  );
};

export default Hero;
