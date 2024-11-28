import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import CustomMap from '../../components/sections/inner-pages/about/CustomMap';
import Contact_Section from '../../components/sections/inner-pages/contact/contact_section/Contact_Section';
import Map from '../../components/sections/inner-pages/contact/Map';

const Contact = () => {
  return (
    <>
      <main className='main-wrapper relative overflow-hidden'>
        {/*...::: Breadcrumb Section Start :::... */}
        <Breadcrumb title='Contactos' />
        {/*...::: Breadcrumb Section End :::... */}
        {/*...::: Contact Section Start :::... */}
        <Contact_Section />
        {/*...::: Contact Section End :::... */}
        {/*...::: Map Section Start :::... */}
        <CustomMap />
        {/*<Map />
        ...::: Map Section Start :::... */}
      </main>
    </>
  );
};

export default Contact;
