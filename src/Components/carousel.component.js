import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import '../assets/css/carousel.component.css'

export default function CarouselComponent() {
    return (
        <div class="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                    <img src="https://scontent-otp1-1.xx.fbcdn.net/v/t1.0-9/83186296_10158124028623559_3676912216386306048_n.jpg?_nc_cat=103&ccb=3&_nc_sid=e3f864&_nc_ohc=tyU0Fr6Ki70AX_3toLm&_nc_ht=scontent-otp1-1.xx&oh=369465d138e75356996d2fbfadd5e6db&oe=604F086F" alt="carouselimg" />
                </div>
                <div>
                    <img src="https://scontent-otp1-1.xx.fbcdn.net/v/t1.0-9/116910788_10158776370618559_8984314790126108346_n.jpg?_nc_cat=110&ccb=3&_nc_sid=e3f864&_nc_ohc=kKS4dvJPxKcAX_-Mshc&_nc_oc=AQntgIZ1JhDNzxex_LuLco7P_eVPYwX7SA37H9eFbshsXAZwowfPW1WjzVPDhUg_qTw&_nc_ht=scontent-otp1-1.xx&oh=383ca5643cbe1878f348a8f56f5c85e0&oe=6050AC46" alt="carouselimg"/>
                </div>
                <div>
                    <img src="https://scontent-otp1-1.xx.fbcdn.net/v/t1.0-9/104864181_10158648376713559_2717629812895709381_n.jpg?_nc_cat=105&ccb=3&_nc_sid=e3f864&_nc_ohc=Ij1cIpcHYfwAX_zojsm&_nc_ht=scontent-otp1-1.xx&oh=c54c2d9f9a501e8ac80ad99de5524b45&oe=60517A49" alt="carouselimg"/>
                </div>
            </Carousel>
        </div>
    );
}
