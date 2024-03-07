import { Dispatch, SetStateAction } from "react";
import Url from "../constants";

import * as cheerio from "cheerio";
import FetchChap from "./FetchChap";

interface AllType {
    href: string;
    title: string;
}

interface Chapter {
    chapterId: number;
    name: string;
    url: string;
}
export interface DataManga {
    title: string;
    updateTime: string;
    author: string;
    status: string;
    AllTypes: AllType[];
    view: string;
    rating: string;
    follow: string;
    image: string;
    content: string;
    fullChapter: Chapter[];
    load: boolean;
}

export default async function FetchManga({
    setData,
    IdManga,
}: {
    setData: Dispatch<SetStateAction<DataManga>>;
    IdManga: string;
}) {
    await fetch(
        `https://corsproxy.org/?https://www.nettruyenbb.com/truyen-tranh/${IdManga}`
    )
        .then((res) => res.text())
        .then(async (html) => {
            
            const $ = cheerio.load(html);
            const el: any = $(".list-info").find("li");
            const elLength = $(".list-info").find("li").length;
            const elRating: any = $(".mrt5").find("span");
            var idManga: string = "";
            $("meta", html).each((index: number, item: any) => {
                if (item.attribs.property === "og:image") {
                    const elContent = item.attribs.content.split("/")[item.attribs.content.split("/").length - 1]
                    idManga = elContent.slice(0, elContent.length - 4)
                }
            });
            const DataFullChapter = await FetchChap({
                IdManga: idManga,
            });
            const elFollow: any = $(".follow").find("span")[1].children[1];
            const elImage: any = $(".col-image")[0].children[1];
            const elContent: any =
                $(".detail-content").find("p")[0].children[0];
            if (elLength === 4) {
                var author = "";
                if (el[0].children[3].children[0].data) {
                    author = el[0].children[3].children[0].data;
                } else {
                    author = el[0].children[3].children[0].children[0].data;
                }
                const elTitle: any = $(".title-detail")[0].children[0];
                const elTime: any = $(".small")[0].children[0];
                const title = elTitle.data;
                const updateTime = elTime.data;
                const status = el[1].children[3].children[0].data;
                const type = el[2].children[3].children;
                const view = el[3].children[3].children[0].data;
                const image = `https:${elImage.attribs.src}`;
                const rating = `${elRating[1].children[1].children[0].data} / ${elRating[1].children[3].children[0].data} - ${elRating[1].children[5].children[0].data} lượt đánh giá`;
                const follow = elFollow.children[0].data;
                var content = elContent.data;
                if (content === "\n") {
                    content = `Truyện Tranh ${title} được cập nhật tại Miko Reader. Hãy ủng hộ và chia sẻ giúp tranh nhé.`;
                }
                const AllTypes: AllType[] = [];
                type.forEach((types: any) => {
                    if (types.attribs) {
                        AllTypes.push({
                            href: types.attribs.href.slice(39),
                            title: types.children[0].data,
                        });
                    }
                });
                setData({
                    title,
                    updateTime,
                    author,
                    status,
                    AllTypes,
                    view,
                    rating,
                    follow,
                    image,
                    content,
                    fullChapter: DataFullChapter,
                    load: false,
                });
            } else {
                var author = "";
                if (el[1].children[3].children[0].data) {
                    author = el[1].children[3].children[0].data;
                } else {
                    author = el[1].children[3].children[0].children[0].data;
                }
                const elTitle: any = $(".title-detail")[0].children[0];
                const elTime: any = $(".small")[0].children[0];
                const title = elTitle.data;
                const updateTime = elTime.data;
                const status = el[2].children[3].children[0].data;
                const type = el[3].children[3].children;
                const view = el[4].children[3].children[0].data;
                const image = `https:${elImage.attribs.src}`;
                const rating = `${elRating[1].children[1].children[0].data} / ${elRating[1].children[3].children[0].data} - ${elRating[1].children[5].children[0].data} lượt đánh giá`;
                const follow = elFollow.children[0].data;
                var content = elContent.data;
                if (content === "\n") {
                    content = `Truyện Tranh ${title} được cập nhật tại Miko Reader. Hãy ủng hộ và chia sẻ giúp tranh nhé.`;
                }
                const AllTypes: AllType[] = [];
                type.forEach((types: any) => {
                    if (types.attribs) {
                        AllTypes.push({
                            href: types.attribs.href.slice(27),
                            title: types.children[0].data,
                        });
                    }
                });
                setData({
                    title,
                    updateTime,
                    author,
                    status,
                    AllTypes,
                    view,
                    rating,
                    follow,
                    image,
                    content,
                    fullChapter: DataFullChapter,
                    load: false,
                });
            }
        });
}
