import { Dispatch, SetStateAction } from "react";
import Url from "../constants";

import * as cheerio from "cheerio";

interface AllType {
    href: string;
    title: string;
}

export interface DataManga {
    title: string;
    updateTime: string;
    author: string;
    status: string;
    AllTypes: AllType[];
    view: string;
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
        .then((html) => {
            const $ = cheerio.load(html);
            const el: any = $(".list-info").find("li");
            const elLength = $(".list-info").find("li").length;

            if (elLength === 4) {
                var author = "";
                if (el[0].children[3].children[0].data) {
                    author = el[0].children[3].children[0].data;
                } else {
                    author = el[0].children[3].children[0].children[0].data;
                }
                const status = el[1].children[3].children[0].data;
                const type = el[2].children[3].children;
                const view = el[3].children[3].children[0].data;
                const AllTypes: AllType[] = [];
                type.forEach((types: any) => {
                    if (types.attribs) {
                        AllTypes.push({
                            href: types.attribs.href.slice(27),
                            title: types.children[0].data,
                        });
                    }
                });
                const elTitle: any = $(".title-detail")[0].children[0];
                const elTime: any = $(".small")[0].children[0];
                const title = elTitle.data;
                const updateTime = elTime.data;
                setData({
                    title,
                    updateTime,
                    author,
                    status,
                    AllTypes,
                    view,
                });
            } else {
                var author = "";
                if (el[1].children[3].children[0].data) {
                    author = el[1].children[3].children[0].data;
                } else {
                    author = el[1].children[3].children[0].children[0].data;
                }
                const status = el[2].children[3].children[0].data;
                const type = el[3].children[3].children;
                const view = el[4].children[3].children[0].data;
                const AllTypes: AllType[] = [];
                type.forEach((types: any) => {
                    if (types.attribs) {
                        AllTypes.push({
                            href: types.attribs.href.slice(27),
                            title: types.children[0].data,
                        });
                    }
                });
                const elTitle: any = $(".title-detail")[0].children[0];
                const elTime: any = $(".small")[0].children[0];
                const title = elTitle.data;
                const updateTime = elTime.data;
                setData({
                    title,
                    updateTime,
                    author,
                    status,
                    AllTypes,
                    view,
                });
            }
        });
}
