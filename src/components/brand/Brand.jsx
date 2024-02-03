import React from 'react';
import './brand.css';
import { google, shopify, slack, atlassian, dropbox } from './imports';
const Brand = () => {
  return (
    <div className='gpt3__brand section_padding'>

      <div className='gpt3__brand-google'>
        <img src = {google} alt='google'/>
      </div>

      <div className='gpt3__brand-slack'>
        <img src = {slack} alt='slack'/>
      </div>

      <div className='gpt3__brand-atlassian'>
        <img src = {atlassian} alt='atlassian'/>
      </div>

      <div className='gpt3__brand-dropbox'>
        <img src = {dropbox} alt='dropbox'/>
      </div>

      <div className='gpt3__brand-shopify'>
        <img src = {shopify} alt='shopify'/>
      </div> 

    </div>
  )
}

export default Brand
