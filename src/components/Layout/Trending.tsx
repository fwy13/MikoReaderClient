import { useEffect, useState } from "react";
import Image from "next/image";
import FetchDataTrending from "@/utils/Fetch/FetchDataTrending";
import Link from "next/link";

const Trending = () => {
    const [IsDataTrending, setIsDataTrending] = useState<any[]>([]);

    useEffect(() => {
        FetchDataTrending({ setData: setIsDataTrending });
    }, []);
    return (
        <main className="p-3">
            <span className="text-[1.25em] text-[#f9cdd4] border-b border-white p-2">Trending</span>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-5">
                {IsDataTrending.map(
                    (
                        item: {
                            title: string;
                            url: string;
                            srcImage: string;
                            chapter: string;
                            timeUpdate: string;
                        },
                        index: number
                    ) => (
                        <Link href={item.url} key={index}>
                            <div className="bg-[#c4c4c42c] text-white flex hover:scale-105 hover:border-[#17B890] border-transparent border-2">
                                <Image
                                    src={`https:${item.srcImage}`}
                                    width={200}
                                    height={300}
                                    className="w-[200px] h-[300px]"
                                    alt={item.title}
                                    priority
                                />
                                <div className=" text-center mx-auto mt-2">
                                    <span className="text-[1.2em] text-white hover:text-[#eca1ac]">
                                        {item.title} <br />
                                    </span>
                                    <span className="text-[1.1em]">
                                        {item.chapter}
                                        <span className="p-1 rounded-full bg-[#f06261]">
                                            Hot
                                        </span>
                                        <br />
                                    </span>
                                    {item.timeUpdate}
                                </div>
                            </div>
                        </Link>
                    )
                )}
            </div>
        </main>
    );
};
export default Trending;
