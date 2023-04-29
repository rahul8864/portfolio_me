import React, { useState } from 'react';
// import './sidebar.css'
// import myAvatar from '../assets/images/my-avatar.png'

function Sidebar() {
    
    const [active, setActive] = useState(false);

    const personalDetails = [
        {id: 1, title: "Email", iconName:"mail-outline", href:"mailto:rahulkumar8864084963@gmail.com", name: "rahulkumar8864084963@gmail.com"},
        {id: 2, title: "Phone", iconName:"phone-portrait-outline", href:"tel:+91 9334816062", name: "+91 9334816062"},
        {id: 3, title: "Location", iconName:"location-outline", href:"mailto:rahulkumar8864084963@gmail.com", name: "Bokaro, Jharkhand, India"},
    ]
    const personalSocial = [
        {id: 1, link: "https://www.linkedin.com/in/rahulkumarrj/", iconName:"logo-linkedin"},
        {id: 2, link: "https://github.com/rahul8864", iconName:"logo-github"},
        {id: 3, link: "https://www.youtube.com/channel/UCtVH2uoys5vZAEc6p0wud_A", iconName:"logo-youtube"},
        {id: 4, link: "Instagram", iconName:"logo-instagram"},
    ]
  return (
    <aside className={`sidebar ${active ? 'active' : ''}`}>
        <div className="sidebar-info">
            <figure className="avatar-box">
                <img src={`${window.location.origin}/assets/images/my-avatar.png`} alt="Rahul Kumar" width="80"/>
            </figure>
            <div className="info-content">
                <h1 className='name' title='Rahul Kumar'>Rahul Kumar</h1>
                <p className='title'>Frontend Developer</p>
            </div>
            <button className="info_more-btn" onClick={() => setActive(!active)}>
                {active ? (
                    <>
                        <span>Show Collapse</span>
                        <ion-icon name="chevron-up" />
                    </>
                ) : (
                    <>
                        <span>Show Expand</span>
                        <ion-icon name="chevron-down" />
                    </>
                )}
            </button>
        </div>
        <div className="sidebar-info_more">
            <div className="separator"></div>
            <ul className="contacts-list">
                {personalDetails?.map(list => (
                    <li className="contact-item" key={list.id}>
                        <div className="icon-box">
                            <ion-icon name={list.iconName} />
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">{list.title}</p>
                            <a href={list.href} className="contact-link">{list.name}</a>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="separator"></div>
            <ul className='social-list'>
                {personalSocial?.map(social => (
                    <li className="social-item" key={social.id}>
                        <a href={social.link} className='social-link' target='_blank'>
                            <ion-icon name={social.iconName} />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </aside>
  )
}
export default Sidebar;