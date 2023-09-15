import React from 'react';
import './about.css';

function AboutUs() {
  return (
    <div className='about'>
      <div className="container">
        <h1 className="heading1">Brief About This website</h1>
        <p className="description1">
          1. This website is an innovative online platform for practicing coding
          for designing websites.
          <br />
          <br />
          2. HTML Editor. With our online HTML editor, you can edit HTML, CSS,
          and JavaScript code and view the result in your browser.
        </p>
      </div>
      <br />
      <div className="container">
        <h1 className="heading3">Our Team</h1>
        <p className="description3">
          1. We possess a diverse range of technical skills, web development,
          and user interface design. With the aim to excel in our respective
          fields, we collaborated harmoniously to create this innovative
          platform.
          <br />
          <br />
          2. We implemented sophisticated algorithms and data processing
          techniques to ensure the accuracy and real-time relevance of the
          website information presented to users.
        </p>
      </div>
      <br />
      <div className="picturesflex">
        <div className="dev dev1">
          <div className="picdev picdev1"></div>
          <div className="description description1">
            <p className="name">SOHAIL S</p>
            <p className="role">FRONTEND DEVELOPER</p>
          </div>
          <div className="links">
            <a className="linkedin" href="https://www.linkedin.com/in/shaik-sohail-43359a219">linkedin</a>
            <a className="github" href="https://github.com/sohailshaik20">github</a>
          </div>
        </div>
        
                <div className = "dev dev2">
                    <div className = "picdev picdev2"></div>
                    <div className  = "description description2"><p className= "name">SIVA KUMAR D</p><p className= "role"></p>BACKEND DEVELOPER</div>
                    <div className = "links"><a className= "linkedin" href="https://www.linkedin.com/in/siva-kumar-derangula-b69a33218">linkedin</a><a className= "github" href="https://github.com/Siva20030">github</a></div>
                </div>
                <div className = "dev dev3">
                    <div className = "picdev picdev3"></div>
                    <div className  = "description description3"><p className= "name">KIRAN KUMAR M</p><p className= "role"></p>FRONTEND DEVELOPER</div>
                    <div className = "links"><a className= "linkedin" href="https://www.linkedin.com/in/kiran-kumar-m-887312219">linkedin</a><a className= "github" href="https://github.com/kiranmass">github</a></div>
                </div>
                <div className = "dev dev4">
                    <div className= "picdev picdev4"></div>
                    <div className = "description description4"><p className= "name">VENU GOPAL B</p><p className= "role"></p>FRONTEND DEVELOPER</div>
                    <div className= "links"><a className= "linkedin" href="https://www.linkedin.com/in/bestha-venu-415445219">linkedin</a><a className= "github" href="https://github.com/VenuGopalBestha">github</a></div>
                </div>
                <div className= "dev dev5">
                <div className= "picdev picdev5"></div>
                    <div className = "description description5"><p className= "name">UDAY KIRAN S.V</p><p className= "role"></p>FRONTEND DEVELOPER</div>
                    <div className= "links"><a className= "linkedin" href="https://www.linkedin.com/in/venkata-uday-kiran-sundari-709264219">linkedin</a><a className= "github" href="https://github.com/SUdaykiran">github</a></div>
                </div>
        {/* Add similar blocks for other team members */}
      </div>
    </div>
  );
}

export default AboutUs;
