import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className='app__newsletter'>
    <div className='app__newsletter-heading'>
      <SubHeading title="Noutati"/>
      <h1 className='headtext__cormorant'>Aboneaza-te la noutati</h1>
      <p className='p__opensans'>Nu rata ultimele noutati!</p>
    </div>
    <div className='app__newsletter-input flex__center'>
      <input type="email" placeholder='Introdu adresa de email' />
      <button type='button' className='custom__button'>Aboneazate</button>
    </div>
  </div>
);

export default Newsletter;
