import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import Blog_Section from '../../components/sections/inner-pages/blog/Blog_Section';

const Blog = () => {
  return (
    <>
      <main className='main-wrapper relative overflow-hidden'>
        {/*...::: Breadcrumb Section Start :::... */}
        <Breadcrumb title='Blog' link='Media' />
        {/*...::: Breadcrumb Section End :::... */}
        {/*...::: Blog Section Start :::... */}

        <h2 className='text-center text-4xl font-bold text-black mb-40'>
          Brevemente...
        </h2>

        {/*<Blog_Section />
        ...::: Blog Section End :::... */}
      </main>
    </>
  );
};

export default Blog;
