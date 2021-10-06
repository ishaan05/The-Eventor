import React from 'react';
import './Footer.css';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { FcPodiumWithSpeaker } from 'react-icons/fc';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join our exclusive membership to receive the latest news and trends
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Email please'
            />
            <Button className="subs-btn" href="/">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h3>About Us</h3>
            <Link to='/sign-up'>Join Us</Link>
            <Link to='/'>Testimonials</Link>
            {/* <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link> */}
            <Link to='/'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h3>Contact Us</h3>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h3>Videos</h3>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div className='footer-link-items'>
            <h3>Social Media</h3>
            <Link to='/'>Twitter</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Linkedin</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
            <FcPodiumWithSpeaker className="navbar-icon" />
                <h1 className="title">The Eventor</h1>
            </Link>
          </div>
          <small className='website-rights'>The Eventor © 2021</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link fb'
              to='//en-gb.facebook.com/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link insta'
              to='//www.instagram.com/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link yt'
              to={
                '//www.youtube.com/'
              }
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>
            { <Link
              className='social-icon-link twt'
              to='//twitter.com/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link> }
            <Link
              className='social-icon-link lnkd'
              to='//www.linkedin.com/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;