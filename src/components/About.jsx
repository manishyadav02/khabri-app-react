import React from "react";
import './About.css'

function About(){
    return(
        <>
        <div className="conatiner">
            <div className="content">
                <h1>NEWS-REACT</h1>
                <p><strong>Purpose of a News Website:</strong><br/>
Inform: Providing accurate and timely news to the public.
Educate: Explaining complex issues and offering context.
Entertain: Engaging readers with interesting and informative content.
Engage: Fostering interaction between the news outlet and its audience.<br/>
Influence: Shaping public opinion and driving social change.
In essence, news websites are vital tools for staying informed and connected to the world. They have become essential platforms for individuals, businesses, and governments to access and share information.</p>
            </div>
            <div className="imag">
                <img src="/news.avif" alt="" height="300px" />
            </div>
        </div>
        <p className="text"><strong>In our website our user can watch the different types of news which are fetched from types of channels.</strong></p>
        <div className="logo">
            <div className="logoleft">
                
                <img src="/aaj.jpeg.jpg" alt="" height="80px" />
                <p>Aaj Tak</p>
                <img src="/atv.jpeg.jpg" alt=""height="80px" />
                <p>Atv</p>
                <img src="/danik.png" alt="" height="80px"/>
                <p>Danik Bhasker</p>
                <img src="/fox.png" alt=""height="80px" />
                <p>Fox news</p>
            </div>
        </div>
        <hr />
        <div className="logo">
            <div className="logoleft">
                
                <img src="/time.png" alt="" height="80px" />
                <p>Hindustan times</p>
                <img src="/Global.png" alt=""height="80px" />
                <p>Hindustan times</p>
                <img src="/world.webp" alt="" height="80px"/>
                <p>Hindustan times</p>
                <img src="/bratain.jpg" alt=""height="80px" />
                <p>Hindustan times</p>
            </div>
        </div>
        <hr />
        <div className="logo">
            <div className="logoleft">
                
                <img src="/expert.png" alt="" height="80px" />
                <p>Expert News</p>
                <img src="/nd.jpeg.jpg" alt=""height="80px" />
                <p>Nd Tv</p>
                <img src="/hindus.jpeg.jpg" alt="" height="80px"/>
                <p>Hindustan</p>
                <img src="/super.jpeg.jpg" alt=""height="80px" />
                <p>Super News</p>
            </div>
        </div>
        
        <div className="footer1">
        <div class="footer-left">

        <h3>News React<span>Collection</span></h3>

        <p>
            Home | categories | country | video
          
        </p>

        <p class="footer-company-name">News website © 2024</p>
      </div>

      <div class="footer-center">

        <div>
          <i class="fa fa-map-marker"></i>
          <p>LIET Collage (Alwar)</p>
        </div>

        <div>
          <i class="fa fa-phone"></i>
          <p>9024384454</p>
        </div>

        <div>
          <i class="fa fa-envelope"></i>
          <p>News@react.com</p>
        </div>

      </div>

      <div class="footer-right">

        <p class="footer-company-about">
          <span>About the website</span>
         Throug this website a human being can know about the facts , data , gossips , stories , opportunities , blog etc. around the world . 
        </p>

        
        </div>
      </div>

        </>
    )
}
export default About
