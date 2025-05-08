import Link from "next/link";
import "../styles/header.css";
export default function Header () {
    return (
        <>
            <header className="HDR_HD">
                <Link href={"/"} className="poppins-regular-HDR-HD">
                    math-unlimited
                </Link>
            </header>
        </>
    );
}