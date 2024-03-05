import { Swiper, SwiperSlide } from "swiper/react";
import { parse } from "node-html-parser";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { useCallback, useEffect, useState } from "react";
import * as cheerio from "cheerio";
import Image from "next/image";

const SwiperManga = () => {
    const [IsDataSlide, setIsDataSlide] = useState<any[]>([]);
    const FetchDataHome = async () => {
        return await fetch(
            "https://corsproxy.org/?https%3A%2F%2Fwww.nettruyenss.com"
        )
            .then((res) => res.text())
            .then((html) => {
                const ArrayData: any[] = [];
                const $ = cheerio.load(html);
                const $$ = parse(html);
                const LenthData = $(".item > a").length;
                const time = $(".slide-caption > span").text().split("\n\n");

                for (let j = 0; j < LenthData; j++) {
                    const { title, href } = $(".item > a")[j].attribs;
                    const Children: any = $(".item > a")[j].children[1];
                    const src = Children.attribs["data-src"];
                    const chapter = $(".slide-caption > a")[j].attribs.title;
                    const Time = time[j + 1];

                    ArrayData.push({
                        title: title,
                        url: href,
                        srcImage: src,
                        chapter: chapter,
                        timeUpdate: Time,
                    });
                }
                setIsDataSlide(ArrayData);

            });
    };

    useEffect(() => {
        FetchDataHome();
    }, []);

    return (
        <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            loop
            centeredSlides={true}
        >
            {IsDataSlide && (
                <div>
                    <SwiperSlide className="bg-[#c4c4c42c] backdrop-blur-lg w-full h-[500px] p-8 pl-10">
                        <div className="w-[200px] bg-black h-auto hover:scale-110">
                            {IsDataSlide[0] && (
                                <Image
                                    src={`https:${IsDataSlide[0].srcImage}`}
                                    width={200}
                                    height={300}
                                    alt={IsDataSlide[0].title}
                                    priority
                                    className="w-[200px] h-[300px]"
                                />
                            )}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-[#c4c4c42c] backdrop-blur-lg w-full h-[500px] p-8 pl-10">
                        <div className="w-[200px] bg-black h-auto">
                            {IsDataSlide[1] && (
                                <Image
                                    src={`https:${IsDataSlide[1].srcImage}`}
                                    width={200}
                                    height={300}
                                    alt={IsDataSlide[1].title}
                                    priority
                                    className="w-[200px] h-[300px]"
                                />
                            )}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-[#c4c4c42c] backdrop-blur-lg w-full h-[500px] p-8 pl-10">
                        <div className="w-[200px] bg-black h-auto">
                            {IsDataSlide[2] && (
                                <Image
                                    src={`https:${IsDataSlide[2].srcImage}`}
                                    width={200}
                                    height={300}
                                    alt={IsDataSlide[2].title}
                                    priority
                                    className="w-[200px] h-[300px]"
                                />
                            )}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-[#c4c4c42c] backdrop-blur-lg w-full h-[500px] p-8 pl-10">
                        <div className="w-[200px] bg-black h-auto">
                            {IsDataSlide[3] && (
                                <Image
                                    src={`https:${IsDataSlide[3].srcImage}`}
                                    width={200}
                                    height={300}
                                    alt={IsDataSlide[3].title}
                                    priority
                                    className="w-[200px] h-[300px]"
                                />
                            )}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-[#c4c4c42c] backdrop-blur-lg w-full h-[500px] p-8 pl-10">
                        <div className="w-[200px] bg-black h-auto">
                            {IsDataSlide[4] && (
                                <Image
                                    src={`https:${IsDataSlide[4].srcImage}`}
                                    width={200}
                                    height={300}
                                    alt={IsDataSlide[4].title}
                                    priority
                                    className="w-[200px] h-[300px]"
                                />
                            )}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-[#c4c4c42c] backdrop-blur-lg w-full h-[500px] p-8 pl-10">
                        <div className="w-[200px] bg-black h-auto">
                            {IsDataSlide[5] && (
                                <Image
                                    src={`https:${IsDataSlide[5].srcImage}`}
                                    width={200}
                                    height={300}
                                    alt={IsDataSlide[5].title}
                                    priority
                                    className="w-[200px] h-[300px]"
                                />
                            )}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-[#c4c4c42c] backdrop-blur-lg w-full h-[500px] p-8 pl-10">
                        <div className="w-[200px] bg-black h-auto">
                            {IsDataSlide[6] && (
                                <Image
                                    src={`https:${IsDataSlide[6].srcImage}`}
                                    width={200}
                                    height={300}
                                    alt={IsDataSlide[6].title}
                                    priority
                                    className="w-[200px] h-[300px]"
                                />
                            )}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-[#c4c4c42c] backdrop-blur-lg w-full h-[500px] p-8 pl-10">
                        <div className="w-[200px] bg-black h-auto">
                            {IsDataSlide[7] && (
                                <Image
                                    src={`https:${IsDataSlide[7].srcImage}`}
                                    width={200}
                                    height={300}
                                    alt={IsDataSlide[7].title}
                                    priority
                                    className="w-[200px] h-[300px]"
                                />
                            )}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-[#c4c4c42c] backdrop-blur-lg w-full h-[500px] p-8 pl-10">
                        <div className="w-[200px] bg-black h-auto">
                            {IsDataSlide[8] && (
                                <Image
                                    src={`https:${IsDataSlide[8].srcImage}`}
                                    width={200}
                                    height={300}
                                    alt={IsDataSlide[8].title}
                                    priority
                                    className="w-[200px] h-[300px]"
                                />
                            )}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-[#c4c4c42c] backdrop-blur-lg w-full h-[500px] p-8 pl-10">
                        <div className="w-[200px] bg-black h-auto">
                            {IsDataSlide[9] && (
                                <Image
                                    src={`https:${IsDataSlide[9].srcImage}`}
                                    width={200}
                                    height={300}
                                    alt={IsDataSlide[9].title}
                                    priority
                                    className="w-[200px] h-[300px]"
                                />
                            )}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-[#c4c4c42c] backdrop-blur-lg w-full h-[500px] p-8 pl-10">
                        <div className="w-[200px] bg-black h-auto">
                            {IsDataSlide[10] && (
                                <Image
                                    src={`https:${IsDataSlide[10].srcImage}`}
                                    width={200}
                                    height={300}
                                    alt={IsDataSlide[10].title}
                                    priority
                                    className="w-[200px] h-[300px]"
                                />
                            )}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-[#c4c4c42c] backdrop-blur-lg w-full h-[500px] p-8 pl-10">
                        <div className="w-[200px] bg-black h-auto">
                            {IsDataSlide[11] && (
                                <Image
                                    src={`https:${IsDataSlide[11].srcImage}`}
                                    width={200}
                                    height={300}
                                    alt={IsDataSlide[11].title}
                                    priority
                                    className="w-[200px] h-[300px]"
                                />
                            )}
                        </div>
                    </SwiperSlide>
                </div>
            )}
        </Swiper>
    );
};

export default SwiperManga;
