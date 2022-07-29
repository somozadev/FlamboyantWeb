import React from 'react'
import ImageSlider from './ImageSlider'
import img1 from '../img/image1.png'
import img2 from '../img/image2.png'
import img3 from '../img/image3.png'
import img4 from '../img/image4.png'
import img5 from '../img/image5.png'
import img6 from '../img/image6.png'
import img7 from '../img/image7.png'
import img8 from '../img/image8.png'
function ImageSliderGroup() {
  return (
    <div className='image-slider-group' >
      <ImageSlider img1={img1} img2={img2} img3={img3} img4={img4} img5={img5} img6={img6} img7={img7} img8={img8} />
      <ImageSlider img1={img5} img2={img1} img3={img6} img4={img2} img5={img7} img6={img8} img7={img3} img8={img4} />
      {/* <ImageSlider img1={img7} img2={img8} img3={img5} img4={img6} img5={img1} img6={img2} img7={img4} img8={img3} /> */}
      {/* <ImageSlider/>
            <ImageSlider/> */}
    </div>
  )
}

export default ImageSliderGroup