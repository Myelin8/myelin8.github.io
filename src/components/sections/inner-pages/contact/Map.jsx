const Map = () => {
  return (
    <section className='map-section'>
      {/* Section Spacer */}
      <div className='bg-black pb-40 pt-20 xl:pb-[200px] xl:pt-[130px]'>
        {/* Section Container */}
        <div className='global-container'>
          {/* Section Content Block */}
          <div className='mb-10 text-center lg:mb-16 xl:mb-20'>
            <div className='mx-auto md:max-w-xs lg:max-w-xl xl:max-w-[950px]'>
              <h2 className='text-white'>
                We always welcome our clients to our office
              </h2>
            </div>
          </div>
          {/* Section Content Block */}
          {/* Map Block */}
          <div className='relative'>
            <img
              src='assets/img/th-1/mapbase.svg'
              alt='mapbase'
              className='h-auto w-full'
            />
            {/* Location 1 */}
            <div className='group absolute flex gap-2 top-[-10%] left-[32%] sm:top-[10%] sm:left-[35%] md:top-[16%] md:left-[36%] lg:top-[19%] lg:left-[36%]'>
              <div className='relative w-[50px] h-[50px]'>
                <button className='group flex justify-center items-center w-[50px] h-[50px] relative transition-all duration-300'>
                  <img
                    src='assets/img/th-1/icon-gray-location-marker.svg'
                    alt='icon-gray-location-marker'
                    width={35}
                    height={35}
                    className='opacity-100 group-hover:opacity-0 transition-all duration-300'
                  />
                  <img
                    src='assets/img/th-1/icon-purple-location-marker.svg'
                    alt='icon-purple-location-marker'
                    width={50}
                    height={50}
                    className='absolute opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300'
                  />
                </button>
                <div className='absolute bg-white rounded-[8px] p-4 text-sm w-[170px] bottom-0 right-0 xl:right-[50px] xxl:right-auto xxl:left-[50px] opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 xl:translate-y-12 group-hover:translate-y-0'>
                  <div className='flex gap-1 font-bold pb-3'>
                    <img
                      src='assets/img/th-1/icon-black-location-marker.svg'
                      alt='icon-black-location-marker'
                      width={17}
                      height={17}
                    />
                    Lisbon, Portugal
                  </div>
                  <address className='not-italic font-semibold'>
                    Av. Jacques Delors 421 411, 2740-122 Porto Salvo
                  </address>
                </div>
              </div>
            </div>
            {/* Location 1 */}
          </div>
          {/* Map Block */}
        </div>
        {/* Section Container */}
      </div>
      {/* Section Spacer */}
    </section>
  );
};

export default Map;
