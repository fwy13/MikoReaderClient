import FetchDataUpdate from "@/utils/Fetch/FetchDataUpdate";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Update = () => {
    const [IsDataUpdate, setIsDataUpdate] = useState<any[]>([]);

    useEffect(() => {
        FetchDataUpdate({ setData: setIsDataUpdate });
    }, []);
    return (
        <main className="p-3">
            <span className="text-[1.25em] text-[#f9cdd4] border-b border-white p-2">
                Update
            </span>
            <div className="grid grid-cols-3 gap-3 md:grid-cols-4 lg:grid-cols-6 mt-5">
                {IsDataUpdate.map(
                    (
                        item: {
                            title: string;
                            url: string;
                            srcImage: string;
                            Update: [
                                {
                                    ChapterUpdate: string;
                                    TimeUpdate: string;
                                }
                            ];
                            InformationManga: {
                                View: string;
                                Comment: string;
                                Like: string;
                            };
                        },
                        index: number
                    ) => (
                        <Link href={item.url} key={index}>
                            <div className="bg-transparent text-white flex flex-col items-center group">
                                <div className="relative">
                                    <Image
                                        src={`${item.srcImage}`}
                                        width={250}
                                        height={333}
                                        className="w-[109px] h-[141px] lg:w-[172px] lg:h-[224px]"
                                        alt={item.title}
                                        priority
                                    />
                                    <div className="absolute flex flex-col items-center text-center bg-transparent text-transparent group-hover:bg-[#222020] bottom-0 group-hover:animate-fade-up group-hover:animate-once group-hover:animate-duration-700 h-[70px] w-full p-2">
                                        <div className="text-[12px] lg:text-[15px] group-hover:text-[#aaa] flex flex-col items-center justify-center">
                                            <span>
                                                {item.InformationManga.View}
                                                lượt xem
                                            </span>
                                            <div className="flex text-[9px] lg:text-[12px] gap-1">
                                                <div className="flex items-center">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                        className="w-4 h-4"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                                        />
                                                    </svg>
                                                    {item.InformationManga.Like}
                                                </div>
                                                •
                                                <span>
                                                    {item.Update[0].TimeUpdate}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mx-auto mt-1 text-ellipsis w-[120px] md:w-[150px] lg:w-[190px] whitespace-nowrap overflow-hidden text-[#eca1ac]">
                                    <span className="text-[14px] lg:text-[1.2em]">
                                        {item.title}
                                    </span>
                                    {/* <span className="text-[1.1em]">
                                        {item.chapter}
                                        <span className="p-1 rounded-full bg-[#f06261]">
                                            Hot
                                        </span>
                                        <br />
                                    </span>
                                    {item.timeUpdate} */}
                                </div>
                            </div>
                        </Link>
                    )
                )}
            </div>
        </main>
    );
};
export default Update;
