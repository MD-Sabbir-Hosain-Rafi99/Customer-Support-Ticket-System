import React from 'react'
import Container from './Container'
import x from '../assets/x.png'
import i from '../assets/in.png'
import f from '../assets/f.png'
import g from '../assets/g.png'

const Footer = () => {
  return (
    <div className='bg-neutral mt-10'>
      <Container>
        <footer className="footer sm:footer-horizontal text-white p-10">
          <nav>
            <h6 className="footer-title">CS — Ticket System</h6>
            <p className='w-[350px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <span className="link link-hover">About us</span>
            <span className="link link-hover">Our Mission</span>
            <span className="link link-hover">Contact Saled</span>
          </nav>
          <nav>
            <h6 className="footer-title">Services</h6>
            <span className="link link-hover">Products & Services</span>
            <span className="link link-hover">Customer Stories</span>
            <span className="link link-hover">Download Apps</span>
          </nav>
          <nav>
            <h6 className="footer-title">Information</h6>
            <span className="link link-hover">Privacy Policy</span>
            <span className="link link-hover">Terms & Conditions</span>
            <span className="link link-hover">Join Us</span>
          </nav>
          <nav>
            <h6 className="footer-title">Social Links</h6>
            <div className="flex items-center gap-x-2">
              <img src={x} alt="" />
              <span className="link link-hover">@CS — Ticket System</span>
            </div>
            <div className="flex items-center gap-x-2">
              <img src={i} alt="" />
              <span className="link link-hover">@CS — Ticket System</span>
            </div>
            <div className="flex items-center gap-x-2">
              <img src={f} alt="" />
              <span className="link link-hover">@CS — Ticket System</span>
            </div>
            <div className="flex items-center gap-x-2">
              <img src={g} alt="" />
              <span className="link link-hover">support@cst.com</span>
            </div>
          </nav>
        </footer>
      </Container>
    </div>
  )
}

export default Footer
