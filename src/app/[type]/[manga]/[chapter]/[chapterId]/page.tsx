const ChapterManga = ({
    params,
}: {
    params: { type: string; manga: string; chapter: string; chapterId: string };
}) => {
    return (
        <>
            {params.chapterId}
            <span>{params.chapter}</span>
        </>
    );
};

export default ChapterManga;
