import { Link } from 'react-router-dom';
import Breadcrumb from '../../../components/breadcrumb/Breadcrumb';
import data from './data.json';
import Member from '../../../components/widget/team/Member';

const Team = () => {
  return (
    <>
      <main className='main-wrapper relative overflow-hidden'>
        {/*...::: Breadcrumb Section Start :::... */}
        <Breadcrumb title='Equipa' link='Sobre Nós' />
        {/*...::: Breadcrumb Section End :::... */}
        {/*...::: Team Section Start :::... */}
        <section id='team-section'>
          {/* Section Spacer */}
          <div className='pb-40 xl:pb-[220px]'>
            {/* Section Container */}
            <div className='global-container'>
              {/* Section Content Block */}
              <div className='jos mb-10 text-center lg:mb-16 xl:mb-20'>
                <div className='mx-auto'>
                  <h2>Conhece os Founders</h2>
                </div>
              </div>
              {/* Section Content Block */}
              {/* Team Member List */}
              <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                {/* Team Member Item */}
                {data.map((member, index) => (
                  <Member key={index} {...member} />
                ))}
                {/* Team Member Item */}

                {/* Inviting */}
                <li
                  className='jos min-h-[400px] rounded-[20px] bg-colorOrangyRed p-[20px] text-white'
                  data-jos_animation='flip'
                  data-jos_delay='0.9'
                >
                  <div className='flex h-full flex-col items-center justify-center text-center'>
                    <div className='text-3xl font-semibold leading-[1.2] tracking-[-1px] xl:text-[40px] mb-6'>
                      Queres fazer parte da equipa?
                    </div>
                    <Link
                      to='/contact'
                      className='button block w-full rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-white hover:text-black'
                    >
                      Junta-te a nós
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
        {/*...::: Team Section End :::... */}
      </main>
    </>
  );
};

export default Team;
