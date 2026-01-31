import React, { useRef } from 'react';
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";

const ContactData = [
  {
    id: 1,
    icon: <MdOutlineEmail />,
    title: "Email",
info: "zh9193692@gmail.com",
link: "mailto:zh9193692@gmail.com",

  },
  {
    id: 2,
    icon: <RiMessengerLine />,
    title: "Messenger",
 info: "Zeyad Hamdy",
link: "https://www.facebook.com/share/1C6KXLNj4e/",

  },
  {
    id: 3,
    icon: <BsWhatsapp />,
    title: "WhatsApp",
    info: "01004817363",
    link: "https://api.whatsapp.com/send?phone=201004817363",
  },
];

function Contact() {

 const form = useRef();


 const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0q9fswr', 'template_ar54q8h', form.current, 'UF3RDf2FbvBLBHh0K',

      )
      e.target.reset()
    
  };











  return (
    <section className="contact " id="Contect">
      <div className="top_section">
        <h5> Get In Touch</h5>
        <h2>Contect Me</h2>
      </div>
      <div className="container contact_container">
        <div className="contact_options">
        {ContactData.map(({ id, icon, title, info, link }) => {
          return (
            <article key={id} className="contact_option">
              {icon}
              <h4>{title}</h4>
              <h5>{info}</h5>
              <a href={link} target="_blank">
                Send Message
              </a>
            </article>
          );
        })}
</div>
       
        <form  ref={form} onSubmit={sendEmail}  >
          <input type="text" placeholder=" Full Name" name="name" />
          <input type="email" placeholder="Your Email" name="email" />

          <textarea rows={10}   name="message" id="" placeholder=" Enter Your Message"></textarea>
          <button className="btn btn-primary">Send Message</button>
        </form>
      </div>
      
    </section>
  );
}

export default Contact;
