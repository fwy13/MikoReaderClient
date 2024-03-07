export default async function FetchChap({ IdManga }: { IdManga: string }) {
    return await fetch(
        `https://corsproxy.org/?${encodeURIComponent(
            `https://www.nettruyenee.com/Comic/Services/ComicService.asmx/ProcessChapterList?comicId=${IdManga}`
        )}`
    )
        .then((res) => res.json())
        .then((data) => {
            return data.chapters;
        });
}
