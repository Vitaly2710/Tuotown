import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./style.sass";
import { Pagination } from "swiper";

const Swiperr = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };
    return(
        <>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className={'firstSlide'}>
                    <div className={'containerInFirstSlide'}> Исключительное качество</div>
                </SwiperSlide>
                <SwiperSlide className={'secondSlide'}>
                    <div className={'sec'}></div>
                </SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
        </>

    )
}

export default Swiperr

