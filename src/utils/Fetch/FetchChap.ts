export default async function FetchChap({ IdManga }: { IdManga: string }) {
    return await fetch(
        `https://corsproxy.org/?https%3A%2F%2Fwww.nettruyenee.com%2FComic%2FServices%2FComicService.asmx%2FProcessChapterList%3FcomicId%3D${IdManga}`
    )
    .then(res => res.json())
    .then(data => {
        return data.chapters
    })
}
