import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Type from '../components/Type'
import Techstack from '../components/Techstack';
import home from '../assets//img/home.png'

const Home = () => {
  return (
    <>
    <HelmetProvider>
      <Helmet>
        <title>Ngo Minh Khue</title>
      </Helmet>
    </HelmetProvider>
    <section>
        <div className="container">
            <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row ">
                    {/* HOME IMG */}
              <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-2 ">
                <img src={home} alt="home" />   
              </div>
                    {/* HOME CONTENT */}
              <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-1">
                <h2 className='heading'>
                    Hi, {""}
                    <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
                </h2>
                <div className='mt-[30px] p-[50] text-left'>
                  <Type />
                </div>
                <div className="mr-[5%]">
                <p className='text__para'>
                    I'm <strong className='text__para--bold'>Ngo Minh Khue</strong>
                </p>
                <p className='text__para mt-[30px]'>
                  I am an information technology enthusiast, especially in the field of web programming. Since high school, I have self-taught and learned about HTML, CSS, JavaScript, and some frameworks such as ReactJS, Nodejs, Expressjs... I love the creativity and flexibility in designing FE, as well as BE that works behind every website.                
                </p>
                <p className='text__para mt-[30px]'>
                  I participated and completed some small website-building projects during my time studying at the University. On the path of passion, I understand that each project helps me improve my skills and problem-solving ability, no matter how big or small.                
                </p>
                <p className='text__para mt-[30px]'>
                  My career goal in IT, specifically web programming, is to become a Full-Stack Developer. Not only do I want to sharpen my front-end skills but also master the back-end so I can confidently build a project from A to Z.                
                </p>
                <p className='text__para mt-[30px]'>
                  Meanwhile, I am also fond of security issues on the web, an area that I think is very important but sometimes underestimated. I hope to contribute to the IT community with products that ensure user information security.                
                </p>
                </div>
                <a 
                  href='https://drive.usercontent.google.com/download?id=17pg9hmANmFM5YUhohMHisCgiYSWD8aNt&export=download&authuser=0'
                  download='CV.pdf'
                  type='application/pdf'
                  rel='noopener noreferrer' >
                  <button className='btn'><span><i className='bx bxs-download' ></i></span> Download My CV</button>
                </a>
              </div>
            </div>
        </div>
    </section>
        <div className="divider"></div>
    <section>
      <div className='container'>
        <div className='heading text-center'>SKILLS</div>
        <div className="">
        <Techstack />
        </div>
      </div>
    </section>
    </>
  )
}

export default Home