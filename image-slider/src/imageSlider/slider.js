import React, { useRef } from 'react'
import './slider.css'
import Slider from 'react-slick'
import ImageSlider from './imageSlider';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

let testimonialsData = [
  { 
    position : "Web Developer",
    stars : 3,
    comment: "Great experience with the service. Amazing tutorials! I learned a lot.Great experience with the service. Amazing tutorials! I learned a lot.Great experience with the service. ", 
    name: "John Doe" ,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIsrolD_5ffg9Xgw5CeeWygvVxHA3Uwn_4fQ&usqp=CAU"
  },
  { 
    position : "Python Developer",
    stars : 4,
    comment: "Amazing tutorials! I learned a lot.Great experience with the service.Amazing tutorials! I learned a lot.Great experience with the service.Amazing tutorials! I learned a lot.", 
    name: "Jane Smith" ,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPO5CvTL79PoqndYQgx3k34A2ETEmkZGCxfg&usqp=CAU"
  },
  { 
    position : "Front-end Developer",
    stars : 5,
    comment: "Good explantion! I learned a lot.Great experience with the service.Amazing tutorials! I learned a lot.Great experience with the service.Amazing tutorials! I learned a lot.", 
    name: "Shiza Smith" ,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyWoHts5NQHLpMzXX7TnKJ90JJTJi25_nnOg&usqp=CAU"
  },
  { 
    position : "JS Developer",
    stars : 4,
    comment: "Amazing tutorials! I learned a lot.Great experience with the service.Amazing tutorials! I learned a lot.Great experience with the service.Amazing tutorials! I learned a lot.", 
    name: "Max John" ,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIXdPOtEyKHg9RGiRnhXu7JJ7qS2Lvmz6gTg&usqp=CAU"
  },
  { 
    position : "React JS",
    stars : 5,
    comment: "Amazing tutorials! I learned a lot.Great experience with the service.Amazing tutorials! I learned a lot.Great experience with the service.Amazing tutorials! I learned a lot.", 
    name: "Lisa Clein" ,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjLn9JKF9od63lJhWZsaMZezdRJiRBa4OvEA&usqp=CAU"
  },
  { 
    position : "HTML && CSS",
    stars : 5,
    comment: "Amazing tutorials! I learned a lot.Great experience with the service.Amazing tutorials! I learned a lot.Great experience with the service.Amazing tutorials! I learned a lot.", 
    name: "Jane Smith" ,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPO5CvTL79PoqndYQgx3k34A2ETEmkZGCxfg&usqp=CAU"
  }
];

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows : false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 530,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]}


const Testimonial = () => {

    const arrowRef = useRef(null);

    let clientDisc = "";
    clientDisc = testimonialsData.map((item, i) => (
      <ImageSlider item={item} key={i} />
    ))

  return (
    <div className='testimonial'>
         <h3 className='span'>TESTIMONIAL SLIDER</h3>
         <h1 className='heading'>what clients says</h1>
         <div className='testimonials-slider'>
            <Slider ref={arrowRef} {...settings}>
              {clientDisc}

            </Slider>
            <div className='back-forward-button'>
              <button onClick={() => arrowRef.current.slickPrev()}><IoIosArrowBack /></button>
              <button onClick={() => arrowRef.current.slickNext()}><IoIosArrowForward /></button>
            </div>
         </div>
    </div>
  )
}

export default Testimonial