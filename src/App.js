import './App.sass';
import Header from "./Components/Header/header";

import React, { useRef, useState } from "react";
import Swiperr from "./Components/SwiperInMain/swiper";
import Main from "./Components/Main/main";

export default function App() {
        return (
        <div className={'app'}>
            <Header/>
           <Swiperr/>
            <Main/>
        </div>
    );
}

