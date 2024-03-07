import * as cheerio from "cheerio";
import { Dispatch, SetStateAction } from "react";
import Url from "../constants";

export default async function FetchDataUpdate({
    setData,
}: {
    setData: Dispatch<SetStateAction<any[]>>;
}) {
    await fetch(`${Url.corsproxy}/?${Url.nettruyen}`)
        .then((res) => res.text())
        .then((html) => {
            const ArrayData: any[] = [];
            const $ = cheerio.load(html);

            $(".items > .row", html)
                .find(".item > .clearfix > .image > a")
                .each(function (index) {
                    const href = $(this).attr("href");
                    const titleBefore = $(this).attr("title");
                    var InformationManga;
                    InformationManga = $(this).parent().find("span");
                    const Data: any = (index: number, childrens: number) => {
                        if ($(this).parent().find("span")[index]) {
                            const Children: any = $(this).parent().find("span")[
                                index
                            ].children[childrens];
                            if (Children) {
                                return Children.data
                            }
                        }
                    };
                    if (InformationManga[1]) {
                        InformationManga = {
                            View: Data(1, 2),
                            Comment: Data(1, 4),
                            Like: Data(1, 6),
                        };
                    } else {
                        InformationManga = {
                            View: Data(0, 2),
                            Comment: Data(0, 4),
                            Like: Data(0, 6),
                        };
                    }
                    var titleAfter: string = "";
                    if (titleBefore?.split(" ")[0] === "Truyện") {
                        titleAfter = `${titleBefore
                            .split(" ")
                            .splice(2)
                            .join(" ")}`;
                    }
                    const srcImage = $(this).find("img").attr("data-original");
                    const ChapterUpdated = $(
                        ".item > .clearfix > figcaption > ul"
                    )[index].childNodes.map((item: any) => {
                        const ChapterUpdate = item.children[0].children[0].data;
                        const TimeUpdate = item.children[1].children[0].data;
                        return { ChapterUpdate, TimeUpdate };
                    });
                    console.log();
                    ArrayData.push({
                        title: titleAfter,
                        url: href?.slice(27),
                        srcImage: `https:${srcImage}`,
                        Update: ChapterUpdated,
                        InformationManga: InformationManga,
                    });
                    setData(ArrayData);
                });
        });
}
