import React from 'react'
import {Link} from 'react-router-dom'
import {RiLinkedinFill} from 'react-icons/ri'
import {AiFillFacebook, AiFillYoutube, AiFillGithub, AiOutlineInstagram} from 'react-icons/ai'

const socialLinks = [
  {
    path: 'https://www.facebook.com/1485219421',
    icon: <AiFillFacebook className='group-hover:text-white w-4 h-5' />,
  },
  {
    path: 'https://www.youtube.com/@raikichannel',
    icon: <AiFillYoutube className='group-hover:text-white w-4 h-5' />,
  },
  {
    path: 'https://www.youtube.com/@raikichannel',
    icon: <AiFillGithub className='group-hover:text-white w-4 h-5' />,
  },
  {
    path: 'https://www.youtube.com/@raikichannel',
    icon: <AiOutlineInstagram className='group-hover:text-white w-4 h-5' />,
  },
  {
    path: 'https://www.youtube.com/@raikichannel',
    icon: <RiLinkedinFill className='group-hover:text-white w-4 h-5' />,
  },
]
const Footer = () => {
    const year = new Date().getFullYear() 
    return (
        <footer className='pb-16 pt-10 flex items-center justify-center'>
            <div className="container mx-auto md:flex md:justify-center">
                <div className="flex justify-center flex-col md:flex-row flex-wrap gap-[30px] items-center">
                    <div>
                        <div className="flex flex-col items-center mt-4">
                                <div className='flex items-center gap-3 mt-4 justify-center'>
                                        {socialLinks.map((link, index) => <Link to={link.path} key={index} className='w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                                        {link.icon}
                                </Link>)}
                                </div>
                        </div>
                        
                    <p className='text-[16px] leading-7 font-[400] text-white mt-4 text-center'>
                                        Copyright © {year} developed by NMK all right reserved.
                    </p>
                    </div> 
                </div>
            </div>
        </footer>
    )
}

export default Footer