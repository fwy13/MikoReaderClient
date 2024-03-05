"use client";

import Trending from "@/components/Layout/Trending";
import Update from "@/components/Layout/Update";
import SwiperManga from "@/components/SlideManga/Swiper";

const Home = () => {
    return (
        <>
            <Trending />
            <Update />
            <span>Hello World from Home Page</span>
        </>
    );
};

export default Home;
