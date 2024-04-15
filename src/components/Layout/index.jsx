import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import Header from '../header';

function Layout({}) {
  const testMenuItems = [
    {
        href: '/',
        title: 'Introduction',
    },
    {
        href: 'about',
        title: 'About',
    },
    {
        href: 'contact',
        title: 'Contact',
    }
];
  <li><NavLink to="/">Home</NavLink></li>
  return (
          <div className=''>
             <Header />
              <main className='mx-auto  px-4 sm:px-6 lg:px-8  max-w-screen-xl' >
                  <Outlet />
              </main>
          </div>
  );
}

export default Layout