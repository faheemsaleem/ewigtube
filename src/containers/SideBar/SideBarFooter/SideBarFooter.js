import React from 'react';
import './SideBarFooter.scss'

export function SideBarFooter() {
  return (
    <React.Fragment>
      <div className='footer-block'>
        <div>About Press Copyright</div>
        <div>Creators Advertise</div>
        <div>Developers +Ewiglife</div>
        <div>Legal</div>
      </div>
      <div className='footer-block'>
        <div>Terms Privacy</div>
        <div>Policy & Safety</div>
      </div>
      <div className='footer-block'>
        <div>All prices include</div>
      </div>
      <div className='footer-block'>
        <div>©Ewiglife.com</div>
      </div>
    </React.Fragment>
  );
}