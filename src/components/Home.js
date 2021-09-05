import React from 'react'
import './Home.css'
export default function Home() {
    return (
        <>
        <div className="jumbotron container mt-5 pt-5 ">
        </div>
        <div className="page-scroll"></div>

        <div className="containert">
  <div className="contact">
    <div className="left">
      <div className="heading">Contact Me</div>
      <div className="para">Feel free to contact me</div>
      <div className="form">
        <div className="field">
          <input type="text" name="name" id="name" required />
          <label for="name" className="label">Your Name</label>
        </div>
        <div className="field">
          <input type="email" name="email" id="email" required />
          <label for="email" className="label">Your Email</label>
        </div>
        <div className="field">
          <input type="text" name="phone" id="phone" required />
          <label for="phone" className="label">Your Mobile Number</label>
        </div>
        <div className="field">
          <textarea name="msg" id="msg" cols="30" rows="5" required></textarea>
          <label for="msg" className="label t_msg">Your Message</label>
        </div>
        <button className="btn">Submit <div></div> </button>
      </div>
    </div>
    <div className="right">
      <div className="right_heading">Contact Information</div>
      <div className="tabs">
        <div className="tab1 tab">
          <div className="email"><i className="fas fa-at"></i>info@kiranrajr.com</div>
        </div>
        <div className="tab2 tab">
          <div className="phone"><i className="fas fa-phone"></i>9000478900</div>
        </div>
        <div className="tab3 tab">
          <div className="location"><i className="fas fa-home"></i>Kerala, India</div>
        </div>
      </div>
      <div className="social">
        <i className="fab fa-facebook"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-youtube"></i>
      </div>
    </div>

  </div>
</div>
        </>
    )
}
