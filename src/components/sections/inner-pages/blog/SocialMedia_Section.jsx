import { Link } from 'react-router-dom';
import Blog_Sidebar from '../../../sidebar/blog_sidebar/Blog_Sidebar';
import data from './data.json';
import Blog_View from '../../../widget/Blog_View';

const SocialMedia_Section = () => {
  return (
    <section className='blog-section'>
      {/* Section Spacer */}
      <div className='pb-40 xl:pb-[220px]'>
        {/* Section Container */}
        <div className='global-container'>
          <div className='grid grid-cols-1 gap-x-6 gap-y-10'>
            <div className='flex flex-col gap-y-10 lg:gap-y-14 xl:gap-y-20'>
              {/* Blog Post List */}
              <ul className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {/* Blog Post Single Item */}
                {data.map((item, index) => (
                  <Blog_View key={index} {...item} />
                ))}
              </ul>
              {/* Blog Post List */}
            </div>
            {/* Blog Aside */}
            {/* Blog Aside */}
          </div>
        </div>
        {/* Section Container */}
      </div>
      {/* Section Spacer */}
    </section>
  );
};

export default SocialMedia_Section;
