import React from 'react';
import linkedinIcon from "../assets/icons/linkedinIcon.svg";
import facebookIcon from "../assets/icons/facebookIcon.svg";
import twitterIcon from "../assets/icons/twitterIcon.svg";
import instagramIcon from "../assets/icons/instagramIcon.svg";

const Footer = () => {
    return (
        <div className='footerWrapper'>
            <div className="usHolder">
                <div class="about-us">
                        <p class="footerTitle">About Us</p>
                        <p class="about-us">SP Head Quater</p>
                        <p class="about-us">SP Rusororo Fuel Depot</p>
                        <p class="about-us">SP Stations</p>
                        <p class="about-us">SP Gas</p>
                </div>
                <div class="follow-us">
                    <p class="footerTitle">Follow Us</p>
                    <div class="social-media">
                        <div>
                            
                            <a href="https://www.linkedin.com/in/nshumbushijwenayo-samuel-726170112/">
                                <img class="media" src={linkedinIcon} alt="linkedin"/>
                            </a>
                        </div>
                        <div>
                            
                            <a href="https://twitter.com/samuel_nayo">
                                <img class="media" src={twitterIcon} alt="twitter"/>
                            </a>
                        </div>
                        <div>
                            
                            <a href="https://web.facebook.com/samuelsabas.nshumbushijwenayo.3/">
                                <img class="media" src={facebookIcon} alt="facebook"/>
                            </a>
                        </div>
                        <div>
                            
                            <a href="https://web.facebook.com/samuelsabas.nshumbushijwenayo.3/">
                                <img class="media" src={instagramIcon} alt="instagram"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="contact-us">
                    <p class="footerTitle">Contact Us</p>
                    <p>Email: infos@sp.co.rw</p>
                    <p>Phone: (+250) 787814449</p>
                    <p>Kigali, Rwanda</p>
                    <p>KG 03 RD, Kigali</p>
                </div>
            </div>
            <div class="copy-right">
                <p>Made with ❤️ in Kigali 🇷🇼 || Copyright &copy; SOCIÉTÉ PETROLIÈRE 2021 by SamuelNayo</p>
            </div>
        </div>
    )
};

export default Footer;