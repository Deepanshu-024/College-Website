import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/edusity_assets/mail-icon.png'
import phone_icon from '../../assets/edusity_assets/phone-icon.png'
import msg_icon from '../../assets/edusity_assets/msg-icon.png'
import location_icon from '../../assets/edusity_assets/location-icon.png'
import white_arrow from '../../assets/edusity_assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0e4c9b9b-7b6d-4e82-8a8a-6982a36ae1d8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Feel free to contact through our mail or our contact form below. Your suggestions are always appreciated and are important for our growth.</p>
            <ul>
                <li><img src={mail_icon} alt="" />contact@educity.in</li>
                <li><img src={phone_icon} alt="" />+91 9999999999</li>
                <li><img src={location_icon} alt="" />Paschim Vihar, New Delhi, India</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your phone number' required/>
                <label>Enter your message here</label>
                <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow}/></button>
            </form>
            <span>{result}</span>
        </div>
    
    </div>
  )
}

export default Contact
