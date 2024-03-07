const Manga = ({ params }: { params: { type: string } }) => {
    return (
        <>
            <span>Manga Name: {params.type}</span>
        </>
    );
};

export default Manga;