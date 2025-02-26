import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Popular.css";
import { BASE_URL } from "../../Utils/constant";
import { Link } from "react-router-dom";


const Popular = () => {
  const [popularlist, setPopularlist] = useState([]);

  useEffect(() => {
    const fetchPopular = async () => {
      try {
        const resp = await fetch(
          BASE_URL + "/products/category/women's%20clothing"
        );
        const json = await resp.json();
        setPopularlist(json);
      } catch (error) {
        console.error("Error fetching popular items:", error);
      }
    };
    fetchPopular();
  }, []);
  const filteredList = popularlist.filter((item) => item.rating.rate > 3.5);

  return (
    <div className="content-below-video">
      <h2>POPULAR IN WOMEN</h2>
      <p>“Elegance is not standing out, but being remembered.”</p>
      <section className="page carousel-1-page">
        {filteredList.length > 0 ? (
          <Swiper
            grabCursor
            centeredSlides
            slidesPerView={2}
            effect="coverflow"
            loop
            pagination={{ clickable: true }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 3,
              slideShadows: true,
            }}
            modules={[Pagination, EffectCoverflow]}
          >
            {filteredList.map((slide) => (
              <SwiperSlide
                key={slide.title}
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              >
                <Link to={`/product-display/${slide.id}`}>
                  <div>
                    <div>
                      <h2>{slide.title}</h2>
                      <p>explore</p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p>No popular items to show</p>
        )}
        <div className="header-overlay"></div>
      </section>
    </div>
  );
};

export default Popular;
