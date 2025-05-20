import React, { createContext, useContext, useRef } from "react";
import Slider from "react-slick";
import LeftArrow from "../assets/chevron_left.svg";
import RightArrow from "../assets/chevron_right.svg";
import { ArrowContainer } from "./CarouselContext.style";

const CarouselContext = createContext();

const useCarousel = () => {
  return useContext(CarouselContext);
};

export const CarouselProvider = ({ children, items, settings }) => {
  let sliderRef = useRef(null);

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  // Define arrows inside the provider so they have access to context
  const SamplePrevArrow = (props) => (
    <ArrowContainer
      direction="left"
      onClick={props.onClick}
      className={props.className}
      style={props.style}
    >
      <img src={LeftArrow} alt="left_arrow" />
    </ArrowContainer>
  );
  const SampleNextArrow = (props) => (
    <ArrowContainer
      direction="right"
      onClick={props.onClick}
      className={props.className}
      style={props.style}
    >
      <img src={RightArrow} alt="right_arrow" />
    </ArrowContainer>
  );

  // Use settings from props or default, but override arrows with local ones
  let settingsProp = {
    ...(settings || settingsDefault),
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };

  return (
    <CarouselContext.Provider value={{ handleNext, handlePrev }}>
      <React.Fragment>
        {children}
        <div style={{ width: "100%" }}>
          <Slider
            ref={(slider) => {
              sliderRef.current = slider;
            }}
            {...settingsProp}
            style={{ width: "100%" }}
          >
            {items}
          </Slider>
        </div>
      </React.Fragment>
    </CarouselContext.Provider>
  );
};

const settingsDefault = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        speed: 500,
        arrows: false,
      },
    },
    {
      breakpoint: 1399,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        speed: 500,
        arrows: false,
      },
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
        speed: 500,
        arrows: true,
      },
    },
  ],
};
