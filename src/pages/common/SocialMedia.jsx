import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import SocialMedia_Section from '../../components/sections/inner-pages/blog/SocialMedia_Section';

const SocialMedial = () => {
  return (
    <>
      <main className='main-wrapper relative overflow-hidden'>
        {/*...::: Breadcrumb Section Start :::... */}
        <Breadcrumb title='Redes Sociais' link='Media' />
        {/*...::: Breadcrumb Section End :::... */}
        {/*...::: Blog Section Start :::... */}
        <SocialMedia_Section />
        {/*...::: Blog Section End :::... */}
      </main>
    </>
  );
};

export default SocialMedial;
