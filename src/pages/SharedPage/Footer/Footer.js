import React from 'react';
import footerBg from '../../../assets/images/footer.png';

const Footer = () => {
    return (
        <div>
            <footer class="footer mt-10 p-10  text-base-content bg-cover bg-center " style={{
                background: `url(${footerBg})`
            }}>
                <div>
                    <span class="footer-title">Services</span>
                    <a class="link link-hover">Emergency Checkup</a>
                    <a class="link link-hover">Monthly Checkup</a>
                    <a class="link link-hover">Weekly Checkup</a>
                    <a class="link link-hover">Deep Checkup</a>
                </div>
                <div>
                    <span class="footer-title">Oral Health</span>
                    <a class="link link-hover">Fluoride Treatment</a>
                    <a class="link link-hover">Cavity Filling</a>
                    <a class="link link-hover">Teath Whitening</a>
                </div>
                <div>
                    <span class="footer-title">Our Address</span>
                    <a class="link link-hover">New York - 101010 Hudson</a>
                </div>
            </footer>
            <footer class="footer footer-center p-4 bg-base-300 text-base-content">
                <div>
                    <p>Copyright © 2022 - All right reserved by Doctors Portal Ltd</p>
                </div>
            </footer>
        </div>

    );
};

export default Footer;