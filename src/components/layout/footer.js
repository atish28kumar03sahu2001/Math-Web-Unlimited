import Link from "next/link";
import "../styles/footer.css";
import { ImNpm as NpmIcon, ImGithub as GithubIcon } from "react-icons/im";
export default function Footer () {
    return (
        <>
            <footer className="FTR_FOOTER">
                <div className="FTR_LNK_TEXT">
                    <Link href={"/"} className="poppins-regular-LNK-TEXT">math-unlimited</Link>
                </div>
                <div className="FTR_LNK_DIV_TEXT">
                    <p className="poppins-regular-p-ftr-text">&copy; 2025 math-unlimited. All rights reserved.</p>
                    <p className="poppins-regular-p-ftr-text">Unauthorized use and/or duplication of this material without express and written permission from this site’s owner is strictly prohibited.</p>
                </div>
                <div className="FTR_DIV_ICON">
                    <Link href={"https://www.npmjs.com/package/math-unlimited"}>
                        <NpmIcon size={20} color="#ffffff" title="NPM Package" className="ICON" />
                    </Link>
                    <Link href={"https://github.com/atish28kumar03sahu2001/ultimate-math-npm-package.git"}>
                        <GithubIcon size={20} color="#ffffff" title="Github Repository" className="ICON" />
                    </Link>
                </div>
            </footer>
        </>
    );
}

