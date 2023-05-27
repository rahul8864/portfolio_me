import React from 'react';
// import './about.css';

import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import resumePDF from './resume.pdf'

// Import Swiper styles
import 'swiper/css';

// const techImage = [AntDesign, Bootstrap, css, Express, Git, GitHub, GitLab, Heroku, html, JavaScript, MaterialUI, MongoDB, Mongoose, Node, Nodemon, npm, Postman, ReactBootstrap, Reactjs, Redux, Sass, Socket, ssh, StackOverflow, Storybook, TailwindCSS, Vercel, Visual, Vite];

// let check = ''
// for (let i of techName) {
    //     check += `import ${i} from '../../../../assets/tech/${i}.svg';`
// }

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
    // const clientImage = [clients1, clients2, clients3, clients4, clients5, clients6];
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
        {/* <section className='service'>
            <h3 className='h3 service-title'>What i'm doing</h3>
            <ul className="service-list">
                {['app', 'design', 'dev', 'photo'].map((item, i) => (
                    <li className="service-item" key={i}>
                        <div className="service-icon-box">
                            <img src={`${window.location.origin}/assets/images/icon-${item}.svg`} alt="" width="40" />
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
        </section> */}
        {/* <section className="testimonials">
            <h3 className="h3 testimonials-title">Testimonials</h3>
            <ul className="testimonials-list has-scrollbar">
                {Array.from(({ length : 4 }),(_, i) => (
                    <li className="testimonials-item" key={i}>
                        <div className="content-card">
                            <figure className="testimonials-avatar-box">
                                <img src={`${window.location.origin}/assets/images/avatar-${i + 1}.png`} alt="" width="60"/>
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
        </section> */}
        {/* <section className="clients">
            <h3 className="h3 clients-title">Clients</h3>
            <ul className='clients-list has-scrollbar'>
                {Array.from(Array(6), (_, i) => (
                    <li className='clients-item' key={i}>
                        <img src={`${window.location.origin}/assets/images/logo-${i+1}-color.png`} alt=""/>
                    </li>
                ))}
            </ul>
        </section> */}
        <section className='button-stack about-text'>
            <button className='content-card content-button'>Hire me!</button>
            <a href={resumePDF}>
            <button className='content-card content-button'>Download CV</button>
            </a>
        </section>
        <section className="tech">
            <h3 className="h3 tech-title">Tech Stack</h3>
            <ul className='tech-list has-scrollbar'>
                <Swiper modules={[Autoplay]} breakpoints={{ 320: {slidesPerView: 2, spaceBetween: 0}, 425: {slidesPerView: 3, spaceBetween: 0}, 768: {slidesPerView: 4.5, spaceBetween: 0}, 1024: {slidesPerView: 6, spaceBetween: 0} }} centeredSlides={false} spaceBetween={0} slidesPerView={1} className='mySwiper' autoplay={{ delay: 2500, disableOnInteraction: false }}>
                    {techName?.map((item, index) => (
                        <SwiperSlide>
                            <li className='tech-item' key={index} title={item.split('-').join(' ').split("(", 1)}>
                                <div className="content-card" style={{ padding: '15px', width: '120px', height: "120px", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    {/* <img src={import(`../../../../assets/tech/${item}.svg`)} className='tech-image' alt=""/> */}
                                    <img src={`${window.location.origin}/assets/tech/${item}.svg`} className='tech-image' alt=""/>
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
