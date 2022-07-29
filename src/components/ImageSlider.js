import React from 'react'

import './ImageSlider.css'

function ImageSlider(props) {
  return (
    <div className='scroller__wrapper'>
      <div className='scroller__container'>
        <div className='scroller'>
          <div className='scroller__item'><img src={props.img1} alt='image' /></div>
          <div className='scroller__item'><img src={props.img2} alt='image' /></div>
          <div className='scroller__item'><img src={props.img3} alt='image' /></div>
          <div className='scroller__item'><img src={props.img4} alt='image' /></div>
          <div className='scroller__item'><img src={props.img5} alt='image' /></div>
          <div className='scroller__item'><img src={props.img6} alt='image' /></div>
          <div className='scroller__item'><img src={props.img7} alt='image' /></div>
          <div className='scroller__item'><img src={props.img8} alt='image' /></div>

          <div className='scroller__item'><img src={props.img1} alt='image' /></div>
          <div className='scroller__item'><img src={props.img2} alt='image' /></div>
          <div className='scroller__item'><img src={props.img3} alt='image' /></div>
          <div className='scroller__item'><img src={props.img4} alt='image' /></div>
          <div className='scroller__item'><img src={props.img5} alt='image' /></div>
          <div className='scroller__item'><img src={props.img6} alt='image' /></div>
          <div className='scroller__item'><img src={props.img7} alt='image' /></div>
          <div className='scroller__item'><img src={props.img8} alt='image' /></div>
        </div>
      </div>
    </div>
  )
}

export default ImageSlider