import React, { useRef, useEffect } from 'react';
import logo from '../../assets/img/logo.png';
import { NavLink } from 'react-router-dom';
import { RiHome2Line, RiBriefcaseLine, RiPhoneFill } from 'react-icons/ri';
import { BiMenu } from 'react-icons/bi';
const navLinks = [
  {
    path: '/',
    display: 'Home',
    icon: <RiHome2Line />
  },
  {
    path: '/projects',
    display: 'Projects',
    icon: <RiBriefcaseLine />
  },
  {
    path: '/contact',
    display: 'Contact',
    icon: <RiPhoneFill />
  },
];

const Header = () => {
  const headerRef = useRef(null)
  const menuRef =  useRef(null)
  const handleStickyHeader = () => {
    window.addEventListener ('scroll', () => {
      if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        headerRef.current.classList.add('sticky__header')
      } else {
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }
  useEffect (() => {
    handleStickyHeader()
    return () => window.removeEventListener('scroll', handleStickyHeader)
  })
  const toggleMenu = () => menuRef.current.classList.toggle('show__menu')
  return (
    <header className='header flex items-center' ref={headerRef}>
    <div className="container">
      <div className='flex items-center justify-between'>
            {/* LOGO */}
        <div>
          <NavLink to='/'><img src={logo} alt="logo" /></NavLink>
        </div>
            {/* MENU */}
            <div className='navigation' ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {
                navLinks.map((link,index) => <li key = {index} className='block'>
                  <NavLink to = {link.path} className={navClass => navClass.isActive 
                    ? 'text-primaryColor text-[16px] leading-7 font-semibold '
                    :'text-whiteColor text-[16px] leading-7 font-semibold hover:text-primaryColor '}
                    >
                      <div className="flex items-center gap-2">
                        <span>{link.icon}</span>
                        <span>{link.display}</span>
                      </div>
                  </NavLink>
                </li>)
              }
            </ul>
          </div>
              {/* NAV */}
            <div className='flex items-center gap-4'> 
              <span className='md:hidden' onClick={toggleMenu}>
                <BiMenu className = 'w-6 h-6 cursor-pointer' />
              </span>
            </div>     
        </div>
    </div>
  </header>
  )
}

export default Header