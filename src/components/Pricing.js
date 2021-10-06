import React from 'react';
import { Button } from './Button';
import './Pricing.css';
import { AiTwotoneFire } from 'react-icons/ai';
import { MdImportantDevices } from 'react-icons/md';
import { GiCutDiamond } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 55 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>Plans</h1>
          <div className='pricing__container'>
            <Link to='/sign-up' className='pricing__container-card'>
              
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  {/* <AiTwotoneFire /> */}
                </div>
                <h3>Basic</h3>
                {/* <h4>₹</h4> */}
                <p>per Month</p>
                <ul className='pricing__container-features'>
                  <li>Free 3 Events</li>
                  <li>Good Quality</li>
                  <li>Access to 1 device</li>
                  <li>Ad</li>
                </ul>
                <Button buttonSize='btn--wide btn' buttonColor='primary'>
                  Select Plan
                </Button>
              </div>
            </Link>
            
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  {/* <MdImportantDevices /> */}
                </div>
                <h3>Duo</h3>
                {/* <h4>₹2500</h4> */}
                <p>Every 6 Months</p>
                <ul className='pricing__container-features'>
                  <li>Free 5 Events</li>
                  <li>Better Quality</li>
                  <li>Access to 2 devices</li>
                  <li>Ad Free</li>
                </ul>
                <Button buttonSize='btn--wide btn' buttonColor='red'>
                  Select Plan
                </Button>
              </div>
            </Link>
            
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  {/* <GiCutDiamond /> */}
                </div>
                <h3>Premium</h3>
                {/* <h4>₹5500</h4> */}
                <p>per Year</p>
                <ul className='pricing__container-features'>
                  <li>Free 10 Events</li>
                  <li>Best Quality</li>
                  <li>Access to 4 devices</li>
                  <li>Ad Free</li>
                </ul>
                <Button buttonSize='btn--wide btn' buttonColor='primary'>
                  Select Plan
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;