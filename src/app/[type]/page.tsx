const Manga = ({ params }: { params: { manga: string } }) => {
    return (
        <>
            <span>Manga Name: {params.manga}</span>
        </>
    );
};

export default Manga;