import React from 'react';
// import './about.css';
import webDesign from '../../../../assets/images/icon-design.svg';
import avatar1 from '../../../../assets/images/avatar-1.png';
import clients1 from '../../../../assets/images/logo-1-color.png';
import clients2 from '../../../../assets/images/logo-2-color.png';
import clients3 from '../../../../assets/images/logo-3-color.png';
import clients4 from '../../../../assets/images/logo-4-color.png';
import clients5 from '../../../../assets/images/logo-5-color.png';
import clients6 from '../../../../assets/images/logo-6-color.png';

import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import AntDesign from '../../../../assets/tech/Ant-Design.svg';
import Bootstrap from '../../../../assets/tech/Bootstrap.svg';
import css from '../../../../assets/tech/CSS3.svg';
import Express from '../../../../assets/tech/Express.svg';
import Git from '../../../../assets/tech/Git.svg';
import GitHub from '../../../../assets/tech/GitHub.svg';
import GitLab from '../../../../assets/tech/GitLab.svg';
import Heroku from '../../../../assets/tech/Heroku.svg';
import html from '../../../../assets/tech/HTML5.svg';
import JavaScript from '../../../../assets/tech/JavaScript.svg';
import MaterialUI from '../../../../assets/tech/Material-UI.svg';
import MongoDB from '../../../../assets/tech/MongoDB.svg';
import Mongoose from '../../../../assets/tech/Mongoose.js.svg';
import Node from '../../../../assets/tech/Node.js.svg';
import Nodemon from '../../../../assets/tech/Nodemon.svg';
import npm from '../../../../assets/tech/NPM.svg';
import Postman from '../../../../assets/tech/Postman.svg';
import ReactBootstrap from '../../../../assets/tech/React-Bootstrap.svg';
import Reactjs from '../../../../assets/tech/React.svg';
import Redux from '../../../../assets/tech/Redux.svg';
import Sass from '../../../../assets/tech/Sass.svg';
import Socket from '../../../../assets/tech/Socket.io.svg';
import ssh from '../../../../assets/tech/SSH.svg';
import StackOverflow from '../../../../assets/tech/Stack-Overflow.svg';
import Storybook from '../../../../assets/tech/Storybook.svg';
import TailwindCSS from '../../../../assets/tech/Tailwind-CSS.svg';
import Vercel from '../../../../assets/tech/Vercel.svg';
import Visual from '../../../../assets/tech/Visual-Studio-Code-(VS-Code).svg';
import Vite from '../../../../assets/tech/Vite.js.svg';

// const techImage = [AntDesign, Bootstrap, css, Express, Git, GitHub, GitLab, Heroku, html, JavaScript, MaterialUI, MongoDB, Mongoose, Node, Nodemon, npm, Postman, ReactBootstrap, Reactjs, Redux, Sass, Socket, ssh, StackOverflow, Storybook, TailwindCSS, Vercel, Visual, Vite];

// let check = ''
// for (let i of techName) {
    //     check += `import ${i} from '../../../../assets/tech/${i}.svg';`
// }
// console.log(check);

// export const importAllImages = (r) => {
//     const images = {};
//     r.keys().map((item) => {
    //       images[item.replace('./', '')] = r(item);
    //       return true;
    //     });
    //     return images;
    //   };
    
    function About() {
    const techName = ['Ant-Design', 'Bootstrap', 'CSS3', 'Express', 'Git', 'GitHub', 'GitLab', 'Heroku', 'HTML5', 'JavaScript', 'Material-UI', 'MongoDB', 'Mongoose.js', 'Node.js', 'Nodemon', 'NPM', 'Postman', 'React-Bootstrap', 'React', 'Redux', 'Sass', 'Socket.io', 'SSH', 'Stack-Overflow', 'Storybook', 'Tailwind-CSS', 'Vercel', 'Visual-Studio-Code-(VS-Code)', 'Vite.js'];
    const clientImage = [clients1, clients2, clients3, clients4, clients5, clients6];
    // const techName = ['AntDesign', 'Bootstrap', 'CSS3', 'Express', 'Git', 'GitHub', 'GitLab', 'Heroku', 'HTML5', 'JavaScript', 'Material-UI', 'MongoDB', 'Mongoose.js', 'Node.js', 'Nodemon', 'NPM', 'Postman', 'React-Bootstrap', 'React', 'Redux', 'Sass', 'Socket.io', 'SSH', 'Stack-Overflow', 'Storybook', 'Tailwind-CSS', 'Vercel', 'Visual-Studio-Code-(VS-Code)', 'Vite.js'];
    // const images = importAllImages(
    //     require.context(
    //       '../../../src/icons/inspection-icons',
    //       false,
    //       /\.(png|jpe?g|svg)$/
    //     )
    //   );
    // const options = {
    //     loop: true,
    //     items: 11,
    //     margin: 15,
    //     center: true,
    //     autoplay: true,
    //     dots: false,
    //     responsive: {
    //         0: {
    //             items: 1,
    //         },
    //         450: {
    //             items: 3
    //         },
    //         580: {
    //             items: 3
    //         },
    //         768: {
    //             items: 5
    //         },
    //         1024: {
    //             items: 7
    //         },
    //         1250: {
    //             items: 6,
    //         }
    //     }
    //   };
  return (
    <article className="about active">
        <header>
            <h2 className="h2 article-title">About me</h2>
        </header>
        <section className="about-text">
          <p>
            I'm a proficient Front End Web Engineer with a solid background in React JS who focuses on building dynamic, user-friendly interfaces that enhance the user experience as a whole. I have a solid understanding of the foundations of web development, and I'm excited to use them in a professional setting to produce outstanding online experiences.
          </p>

          <p>
            I'm constantly studying and keeping up with the most recent trends and technology in web development. I am able to approach problems creatively and come up with original solutions because to my quick adaptation and capacity for learning new abilities. My aim is to produce websites that go above and beyond what users and clients anticipate. I appreciate sharing my views and working with knowledgeable others. I appreciate you looking at my portfolio. I'm eager to collaborate with you and realise your vision.
          </p>
        </section>
        <section className='service'>
            <h3 className='h3 service-title'>What i'm doing</h3>
            <ul className="service-list">
                {Array.from(Array(4), (_, i) => (
                    <li className="service-item" key={i}>
                        <div className="service-icon-box">
                            <img src={webDesign} alt="" width="40" />
                        </div>
                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">Web design</h4>
                            <p className="service-item-text">
                                The most modern and high-quality design made at a professional level.
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
        <section className="testimonials">
            <h3 className="h3 testimonials-title">Testimonials</h3>
            <ul className="testimonials-list has-scrollbar">
                {Array.from(({ length : 4 }),(_, i) => (
                    <li className="testimonials-item" key={i}>
                        <div className="content-card">
                            <figure className="testimonials-avatar-box">
                                <img src={avatar1} alt="" width="60"/>
                            </figure>
                            <h4 className="h4 testimonials-item-title">Daniel lewis</h4>
                            <div className="testimonials-text">
                                <p>
                                    Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                                    lot of experience
                                    and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                                    consectetur adipiscing
                                    elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                                </p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
        <section className="clients">
            <h3 className="h3 clients-title">Clients</h3>
            <ul className='clients-list has-scrollbar'>
                {clientImage?.map((item, index) => (
                    <li className='clients-item' key={index}>
                        <img src={item} alt=""/>
                    </li>
                ))}
            </ul>
        </section>
        <section className="tech">
            <h3 className="h3 tech-title">Tech Stack</h3>
            <ul className='tech-list has-scrollbar'>
                <Swiper modules={[Autoplay]} breakpoints={{ 320: {slidesPerView: 2, spaceBetween: 0}, 425: {slidesPerView: 3, spaceBetween: 0}, 768: {slidesPerView: 4.5, spaceBetween: 0}, 1024: {slidesPerView: 6, spaceBetween: 0} }} centeredSlides={false} spaceBetween={0} slidesPerView={1} className='mySwiper' autoplay={{ delay: 2500, disableOnInteraction: false }}>
                    {techName?.map((item, index) => (
                        <SwiperSlide>
                            <li className='tech-item' key={index}>
                                <div className="content-card" style={{ padding: '15px', width: '120px', height: "120px", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    {/* <img src={import(`../../../../assets/tech/${item}.svg`)} className='tech-image' alt=""/> */}
                                    <img src={`${window.location.origin}/tech/${item}.svg`} className='tech-image' alt=""/>
                                    {/* <h6 className='h6 tech-text'>{item.split('-').join(' ').split("(", 1)}</h6> */}
                                </div>
                            </li>
                        </SwiperSlide>
                        ))}
                </Swiper>
            </ul>
        </section>
    </article>
  )
}

export default About;
