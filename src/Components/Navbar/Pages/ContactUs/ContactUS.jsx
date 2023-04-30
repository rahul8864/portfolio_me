import React from "react";

export default function ContactUS() {
  return (
    <article class="contact active" data-page="contact">
      <header>
        <h2 class="h2 article-title">Contact</h2>
      </header>

      <section class="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243207.75285948184!2d83.09778235334309!3d17.73893044208716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39431389e6973f%3A0x92d9c20395498468!2sVisakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1682872115286!5m2!1sen!2sin"
            width="400"
            height="300"
            loading="lazy"
          ></iframe>
        </figure>
      </section>

      <section class="contact-form">
        <h3 class="h3 form-title">Contact Form</h3>

        <form action="#" class="form" data-form>
          <div class="input-wrapper">
            <input
              type="text"
              name="fullname"
              class="form-input"
              placeholder="Full name"
              required
            />

            <input
              type="email"
              name="email"
              class="form-input"
              placeholder="Email address"
              required
            />
          </div>

          <textarea
            name="message"
            class="form-input"
            placeholder="Your Message"
            required
          ></textarea>

          <button class="form-btn" type="submit" disabled>
            <ion-icon name="paper-plane"></ion-icon>
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  );
}