import { Route, Routes } from 'react-router-dom';
import useJOSAnimation from './hooks/useJOSAnimation';
import React, { Suspense } from "react";
import { Icon } from "@iconify/react";

const Layout = React.lazy(() => import("./components/layout/Layout"));
const Home = React.lazy(() => import("./pages/home/Home_01"));
const About = React.lazy(() => import("./pages/common/About"));
const Blog = React.lazy(() => import("./pages/common/Blog"));
const SocialMedia = React.lazy(() => import("./pages/common/SocialMedia"));
const Contact = React.lazy(() => import("./pages/common/Contact"));
const Error_404 = React.lazy(() => import("./pages/common/Error_404"));
const Solutions = React.lazy(() => import("./pages/common/Solutions"));
const Team = React.lazy(() => import("./pages/common/team/Team"));


function App() {
  // Init JOS Animation
  useJOSAnimation();

  const Loading = (section) => {
    return (
      <Suspense fallback={
        <div className="h-screen w-full bg-colorOrangyRed text-white flex justify-center items-center z-20">
          <Icon icon="line-md:loading-loop" className="w-20 h-20" />
        </div>
      }>
        {section}
      </Suspense>
    );
  }

  return (
    <Routes>
      <Route path='/' element={Loading(<Layout />)}>
        <Route index element={Loading(<Home />)} />
        <Route path='about' element={Loading(<About />)} />
        <Route path='contact' element={Loading(<Contact />)} />
        <Route path='social-media' element={Loading(<SocialMedia />)} />
        <Route path='blog' element={Loading(<Blog />)} />
        <Route path='team' element={Loading(<Team />)} />
        <Route path='solutions' element={Loading(<Solutions />)} />
        <Route path='error-404' element={Loading(<Error_404 />)} />
        <Route path='*' element={Loading(<Error_404 />)} />
      </Route>
    </Routes>
  );
}

export default App;
