import * as cheerio from "cheerio";
import { Dispatch, SetStateAction } from "react";
import Url from "../constants";

export default async function FetchDataTrending({
    setData,
}: {
    setData: Dispatch<SetStateAction<any[]>>;
}) {
    await fetch(`${Url.corsproxy}/?${Url.nettruyen}`)
        .then((res) => res.text())
        .then((html) => {
            const ArrayData: any[] = [];
            const $ = cheerio.load(html);
            const time = $(".slide-caption > span").text().split("\n\n");
            $(".item > a", html).each(function (index) {
                const href = $(this).attr("href");
                const title = $(this).attr("title");
                const srcImage = $(this).find("img").attr("data-src");
                const chapter = $(".slide-caption > a")[index].attribs.title;
                const Time = time[index + 1];
                ArrayData.push({
                    title: title,
                    url: href?.slice(27),
                    srcImage: srcImage,
                    chapter: chapter,
                    timeUpdate: Time,
                });
            });
            setData(ArrayData);
        });
}
