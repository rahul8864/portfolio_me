import React from 'react';
// import './resume.css'

function Resume() {
  const workExperience = [
    {id: 1, headerName: "Education", list: [
      {id: 1, degree: 'Newton School', year: '2021 - 2022', details: 'Working on both the frontend and backend of web apps will help you construct web application\'s as a full-stack developer intern at Newton School. This entails utilizing client-side programming languages like Node.js to generate the applications functionality and HTML, CSS, JavaScript and React JS to create the user interface. Also, you will learn about testing and debugging your code, and version control.'},
      {id: 2, degree: 'R.V.S Mahavidyalay', year: '2018 - 2021', details: 'I completed my Bachelor\'s degree in B.Sc. with a Mathematics Honours stream.'},
      {id: 3, degree: 'S.L Arya Mahavidalay', year: '2017 - 2018', details: 'I completed my 12th standard in 2018 with PCM (Physics, Chemistry, Mathematics).'},
      {id: 4, degree: 'Ram Rudra +2 High School', year: '2015 - 2017', details: 'I completed my 12th standard in 2017 with PCM (Physics, Chemistry, Mathematics) but I was declared failed in the Chemistry subject.'},
      {id: 5, degree: 'A.R.S Public School', year: '2013 - 2015', details: 'I completed my 10th standard in 2015.'}
    ]},
    {id: 2, headerName: "Experience", list: [
      {id: 1, degree: 'Aerosimple', year: '2022 - Present', details: 'I work at Aerosimple and use ReactJS in my job.'},
    ]}
  ]

  const skillData = [
    {id: 1, name: 'Micro-Frontend', percent: '50'},
    {id: 2, name: 'Nodejs', percent: '80'},
    {id: 3, name: 'Redux', percent: '80'},
    {id: 4, name: 'Reactjs', percent: '80'},
    {id: 5, name: 'JavaScript', percent: '60'},
    {id: 6, name: 'TailwindCSS', percent: '65'},
    {id: 7, name: 'Bootstrap', percent: '75'},
    {id: 8, name: 'CSS', percent: '85'},
    {id: 9, name: 'HTML', percent: '90'},
  ]

  return (
    <article className='resume active'>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>
      {workExperience?.map(item => (
        <section className="timeline" key={item.id}>
          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="book-outline" />
            </div>
            <h3 className="h3">{item.headerName}</h3>
          </div>
            <ol className="timeline-list">
              {item?.list?.map(itemList => (
                  <li className="timeline-item" key={itemList.id}>
                    <h4 className="h4 timeline-item-title">{itemList.degree}</h4>
                    <span>{itemList.year}</span>
                    <p className="timeline-text">{itemList.details}</p>
                  </li>
              ))}
            </ol>
        </section>
      ))}
        <section className="skill">
          <h3 className="h3 skills-title">Skills</h3>
          <ul className="skills-list content-card">
            {skillData?.map(item => (
              <li className="skills-item" key={item.id}>
                <div className="title-wrapper">
                  <h5 className="h5">{item.name}</h5>
                  <data value={item.percent}></data>
                </div>
                <div className="skill-progress-bg">
                  <div className="skill-progress-fill" style={{ width: `${item.percent}%` }}></div>    
                </div>
              </li>
            ))}
          </ul>
        </section>
    </article>
  )
}
export default Resume;
