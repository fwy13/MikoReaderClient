import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
    return (
        <nav className="flex items-center flex-col">
            <div className="flex">
                <Image
                    src={"/yae-miko-reader.png"}
                    width={56}
                    height={56}
                    alt="logo-yae-miko"
                    className="w-auto h-auo"
                />
                <span className="mt-5 text-[2.2em] text-[#e27589] font-pactrick">Moki Reader</span>
            </div>
            <input type="text" className="outline-none bg-[#c4c4c42c] mt-2 text-white p-2 rounded w-[400px]" placeholder="What are you looking for ?"/>
        </nav>
    );
};

export default NavBar;
