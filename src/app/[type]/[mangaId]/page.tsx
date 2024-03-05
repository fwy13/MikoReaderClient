"use client";
import FetchManga, { DataManga } from "@/utils/Fetch/FetchManga";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Chapter = ({ params }: { params: { type: string; mangaId: string } }) => {
    const [IsData, setIsData] = useState<DataManga>({
        title: "",
        updateTime: "",
        author: "",
        status: "",
        AllTypes: [],
        view: "",
    });
    useEffect(() => {
        FetchManga({ setData: setIsData, IdManga: params.mangaId });
    }, [params.mangaId]);
    return (
        <main>
            <Link href={"/"}>
                <button className="text-white rounded-full p-2 bg-[#ff4444] mb-2 hover:scale-105">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                        />
                    </svg>
                </button>
            </Link>
            <div className="p-2 flex bg-[#c4c4c42c]">
                <div>
                    <Image
                        src={
                            "https://st.nettruyenbb.com/data/comics/255/tuyet-sac-dao-lu-deu-noi-ngo-hoang-the-c-2143.jpg"
                        }
                        width={250}
                        height={350}
                        className="w-[200px]"
                        alt=""
                    />
                    <div className="mt-2 flex gap-2">
                        <button className="bg-[#ff4444] lg:hidden rounded p-2 mt-[10px] text-white w-full">
                            Đọc từ đầu
                        </button>
                    </div>
                </div>
                <div className="text-white px-2">
                    <h2 className="text-[1.2em] lg:text-[1.5em]">
                        {IsData.title}
                    </h2>
                    <span className="text-[#aaa]">{`${IsData.view} lượt xem`}</span>
                    <div className="flex gap-2 mb-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                            />
                        </svg>
                        {IsData.author}
                    </div>
                    <div className="flex gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                            />
                        </svg>
                        3.5 / 5 - 7,4N đánh giá
                    </div>
                    <div className="flex gap-2 mt-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                            />
                        </svg>
                        58,21N theo dõi
                    </div>
                    <div className="flex gap-2">
                        <button className="bg-[#ff4444] lg:hidden rounded p-2 mt-2 text-white w-full">
                            Đọc chương mới nhất
                        </button>
                        <button className="bg-[#ff4444] lg:hidden p-2 mt-2 rounded-full text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="lg:text-white hidden gap-2 lg:flex">
                        <button className="bg-[#ff4444] rounded p-2 mt-2">
                            Đọc từ đầu
                        </button>
                        <button className="bg-[#ff4444] rounded p-2 mt-2">
                            Đọc chương mới nhất
                        </button>
                        <button className="bg-[#ff4444] p-2 mt-2 rounded-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-[#c4c4c42c] w-full h-auto text-[1em] text-white p-2">
                <span>
                    Mô tả: Ta chỉ là một người bình thường mà thôi, vậy mà trở
                    thành Yêu Hoàng chuyển thế, còn muốn cùng các loại thú nương
                    trọng chấn tộc uy? Thướt tha phong tao Phượng Hoàng nương,
                    nhu thuận ngốc manh Tuyết Điêu nương, bưu hãn vô song gấu
                    trúc nương...... Đây cũng quá tổn thương thận thể, ta vẫn là
                    đi quét ngang thiên hạ nhất thống giang sơn đi!
                </span>
                <div>
                    <h2 className="text-[2em] text-[#f294b6]">Các Chương</h2>
                </div>
            </div>
        </main>
    );
};
export default Chapter;
