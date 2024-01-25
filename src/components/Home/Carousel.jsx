import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { BsFillPlayFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Cover from '../../assets/img/Cover.png';

function Carousel({ images }) {
  const { width } = useWindowDimensions();

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={width <= 600 ? false : true}
        pagination={{ dynamicBullets: true }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <Container>
              {width <= 600 && (
                <img
                  src={item.cover !== item.image ? item.cover : Cover}
                  alt=""
                  style={coverStyleMobile}
                />
              )}
              {width > 600 && (
                <img
                  src={item.cover !== item.image ? item.cover : Cover}
                  alt=""
                  style={bannerImgStyle}
                />
              )}
              <Wrapper>
                <Content>
                  {width <= 600 && (
                    <p>
                      {item.title.english
                        ? item.title.english.length > 50
                          ? `${item.title.english.substring(0, 50)} ...`
                          : item.title.english
                        : item.title.english}
                    </p>
                  )}
                  {width > 600 && width <= 850 && (
                    <p>
                      {item.title.english
                        ? item.title.english.length > 15
                          ? `${item.title.english.substring(0, 15)} ...`
                          : item.title.english
                        : item.title.english}
                    </p>
                  )}
                  {width > 850 && width <= 1200 && (
                    <p>
                      {item.title.english
                        ? item.title.english.length > 35
                          ? `${item.title.english.substring(0, 35)} ...`
                          : item.title.english
                        : item.title.english}
                    </p>
                  )}
                  {width > 1200 && (
                    <p>
                      {item.title.english
                        ? item.title.english.length > 65
                          ? `${item.title.english.substring(0, 65)} ...`
                          : item.title.english
                        : item.title.english}
                    </p>
                  )}

                  {width <= 600 && (
                    <IconContext.Provider
                      value={{
                        size: "2rem",
                        style: {
                          verticalAlign: "middle",
                          paddingLeft: "0.2rem",
                        },
                      }}
                    >
                      <Button to={"details/" + item.id}>
                        <BsFillPlayFill />
                      </Button>
                    </IconContext.Provider>
                  )}
                  {width > 600 && (
                    <IconContext.Provider
                      value={{
                        size: "18px",
                        style: {
                          verticalAlign: "middle",
                          marginBottom: "0.1rem",
                          marginRight: "0.3rem",
                        },
                      }}
                    >
                      <Button
                        className="carousel-button"
                        to={"details/" + item.id}
                      >
                        <BsFillPlayFill />
                        Watch Now
                      </Button>
                    </IconContext.Provider>
                  )}
                </Content>
              </Wrapper>
            </Container>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

const bannerImgStyle = {
  width: "100%",
  height: "380px",
  objectFit: "cover",
  borderRadius: "0.7rem",
};

const coverStyleMobile = {
  width: "100%",
  height: "250px",
  objectFit: "cover",
  borderRadius: "0.5rem",
};

const Container = styled.div`
  position: relative;
`;

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 50%;
  bottom: 0;
  left: 0;
  margin-bottom: 0.2rem;
  background: linear-gradient(
    180deg,
    rgba(25, 25, 25, 0) 0%,
    rgba(45, 45, 45, 0.5) 50%,
    rgba(10, 10, 10, 1) 120%
  );
  background-blend-mode: multiply;
  border-radius: 0.7rem;

  @media screen and (max-width: 600px) {
    border-radius: 0.4rem;
    background: linear-gradient(
      180deg,
      rgba(25, 25, 25, 0) 0%,
      rgba(45, 45, 45, 0.5) 50%,
      rgba(10, 10, 10, 1) 120%
    );
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  margin: 7rem 2.3rem 0 2.3rem;

  p {
    font-family: "Gilroy-Bold", sans-serif;
    font-size: 1.6rem;
  }
  @media screen and (max-width: 600px) {
    align-items: flex-start;
    margin: 3rem 1.3rem 0 1.3rem;
    p {
      margin-top: 0.5rem;
      font-size: 1.4rem;
    }
  }
`;

const Button = styled(Link)`
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.5);
  font-family: "Gilroy-Bold", sans-serif;
  text-decoration: none;
  outline: none;
  border: none;
  padding: 0.75rem 1.3rem 0.75rem 1.3rem;
  border-radius: 0.4rem;
  cursor: pointer;
  font-size: 0.9rem;
  transition: 0.3s;

  @media screen and (max-width: 600px) {
    border-radius: 50%;
    padding: 1.1rem;
    margin-top: 2.8rem;
  }
`;

export default Carousel;
