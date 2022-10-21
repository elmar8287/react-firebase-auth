import React from 'react';
import "./About.css";

function About({user}) {
  return (
    <div className="ticket">
      <h2>Dear visitor ({user.displayName} {user.email}),</h2>
      <p>This project was built for an online ticket system for companies that gets a lot of clients each day.
        The system makes the possibility to select the date and time for the appointment.
        It is strongly considered already booked date and time, so the company could be confident
        about careful queue assignment.</p>
      <h3>We prepared the manual video for you about this app</h3>
      <p className='youtube'>
        If you have an application you are interested in developing,
        a feature that you need built or a project that needs coding,
        then, please, go throw
        <a href='https://elmar8287.github.io/#contact' className='contact-link'>
        this contact form.
        </a>
        We’d love to help with it. Thanks!
      </p>
    
      <iframe width="560" height="315" src="https://www.youtube.com/embed/C5o-rLhmTKU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  );
}

export default About;