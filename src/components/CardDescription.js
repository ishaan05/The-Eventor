import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Scrollspy from 'react-scrollspy'
import { HiShare } from "react-icons/hi";
import { BiCalendarEvent } from "react-icons/bi";
import { IoTicket } from "react-icons/io5";
import { RiGalleryFill } from "react-icons/ri";
import { MdLocationOn } from "react-icons/md";
import { GoOrganization } from "react-icons/go";
import { FaArrowRight} from "react-icons/fa";
import { IoIosGlobe} from "react-icons/io";
import { Gallery, Item } from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'

import {Link} from 'react-router-dom';
import './CardDescription.css';


function CardDescription() {
  return (
    <>
      <div className="card_dis">


<div id="list-example" className="list-group ">
  <a className="lo-go" href="#list-item-1"><IoTicket /><a  id="one" className="item" >Event Information</a></a>
  <a className="lo-go" href="#list-item-2"><MdLocationOn /><a id="Two" className="item" >Venue</a></a>
  <a className="lo-go" href="#list-item-3"><RiGalleryFill /><a id="Three" className="item" >Gallery</a></a>
  <a className="lo-go" href="#list-item-4"><GoOrganization /><a id="Four" className="item" >Organizer</a></a>
</div>
<Scrollspy items={['list-item-1', 'list-item-2', 'list-item-3', 'list-item-4',]} currentClassName="scrollspy-example" >
  <div className="sec">
    <div id="list-item-1" >
     <img src="Eventphoto1.jpg" alt=""/>
     <h2>Event Name <HiShare /></h2>
     <BiCalendarEvent /> <span> Jul 23 - Aug 08 | 05:00 AM    <IoIosGlobe /> Online Event</span>
      <h4>Event Information </h4>
      <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page,
        the appropriate navigation link is highlighted. It's repeated throughout the component example.
        We keep adding some more example copy here to emphasize the scrolling and highlightingThis is 
        some placeholder content for the scrollspy page. Note that as you scroll down the page,
        the appropriate navigation link is highlighted. It's repeated throughout the component example.
        We keep adding some more example copy here to emphasize the scrolling and highlighting
        some placeholder content for the scrollspy page. Note that as you scroll down the page,
        the appropriate navigation link is highlighted. It's repeated throughout the component example.
        We keep adding some more example copy here to emphasize the scrolling and highlighting
        some placeholder content for the scrollspy page. Note that as you scroll down the page,
        the appropriate navigation link is highlighted. It's repeated throughout the component example.
        We keep adding some more example copy here to emphasize the scrolling and highlighting
        We keep adding some more example copy here to emphasize the scrolling and highlighting</p>
        
    </div>
    <div id="list-item-2">
    
      <h4 >Venue</h4>
      <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page,
        the appropriate navigation link is highlighted. It's repeated throughout the component example.
        We keep adding some more example copy here to emphasize the scrolling and highlighting</p>
    </div>
              
              <div id="list-item-3">
                <h4 >Gallery</h4>
                {/* <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page,
                  the appropriate navigation link is highlighted. It's repeated throughout the component example.
                  We keep adding some more example copy here to emphasize the scrolling and highlighting</p> */}
                  <Gallery >
                <Item
                  original="images/2.jpg"
                  thumbnail="images/2.jpg"
                  width="1024"
                  height="768"
                >
                  {({ ref, open }) => (
                    <img ref={ref} onClick={open} src="images/2.jpg" alt="..." />
                  )}
                </Item>
                <Item
                  original="images/3.jpg"
                  thumbnail="images/3.jpg"
                  width="1024"
                  height="768"
                >
                  {({ ref, open }) => (
                    <img ref={ref} onClick={open} src="images/3.jpg" alt="..." />
                  )}
                </Item>
                <Item
                  original="images/4.jpg"
                  thumbnail="images/4.jpg"
                  width="1024"
                  height="768"
                >
                  {({ ref, open }) => (
                    <img ref={ref} onClick={open} src="images/4.jpg" alt="..." />
                  )}
                </Item>
                <Item
                  original="images/5.jpg"
                  thumbnail="images/5.jpg"
                  width="1024"
                  height="768"
                >
                  {({ ref, open }) => (
                    <img ref={ref} onClick={open} src="images/5.jpg" alt="..." />
                  )}
                </Item>
                <Item
                  original="images/6.jpg"
                  thumbnail="images/6.jpg"
                  width="1024"
                  height="768"
                >
                  {({ ref, open }) => (
                    <img ref={ref} onClick={open} src="images/6.jpg" alt="..." />
                  )}
                </Item>
                <Item
                  original="images/1.jpg"
                  thumbnail="images/1.jpg"
                  width="1024"
                  height="768"
                >
                  {({ ref, open }) => (
                    <img ref={ref} onClick={open} src="images/1.jpg" alt="..." />
                  )}
                </Item>
                {/* <Item
                  original="images/banner.png"
                  thumbnail="images/banner.png"
                  width="1024"
                  height="768"
                >
                  {({ ref, open }) => (
                    <img ref={ref} onClick={open} src="images/banner.png" alt="..." />
                  )}
                </Item> */}
              </Gallery>
              </div>
              <div id="list-item-4">
              <h4 >Organizer</h4>
              <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page,
                the appropriate navigation link is highlighted. It's repeated throughout the component example.
                We keep adding some more example copy here to emphasize the scrolling and highlighting</p>

            </div>
          </div>

        </Scrollspy>

      </div>
      <Link to='' ><button type="button" class="Con_btn">CONTACT ORGANIZER</button></Link>
      <Link to='/sign-up' ><button type="button" class="Bo_btn">BOOK NOW  <FaArrowRight /></button></Link>

    </>
  )
}

export default CardDescription
