import Component1 from "../code/component1";
import "../styles/welcome.css";
import { DataArray } from "../data/codedata";
import { FaArrowAltCircleRight as RightArrowIcon, FaArrowAltCircleDown as DownArrowIcon } from "react-icons/fa";
import Link from "next/link";
export default function WelcomePage () {
    return (
        <>
            <section className="WEL_SECTION_H12">
                <h1 className="poppins-regular-WEL-SEC-H1">Welcome To</h1>
                <h2 className="poppins-regular-WEL-SEC-H2">math-unlimited npm package</h2>
            </section>
            <section>
                <Component1 />
            </section>
            <section className="SEC_BTN_LNK">
                <Link className="BTN_LNK_CLK" href={"/introduction"} title="Introduction To Math Unlimited">
                    Click Here
                </Link>
            </section>
            <section className="WELCOME_DATA_SEC">
                {
                    DataArray.map((data) => (
                        <details key={data.id} className="WELCOME_DATA_DIV">
                            <summary className="poppins-regular-WELCOME_DATA_SUM">
                                <RightArrowIcon className="icon right-icon" size={15} color="#000000" />
                                <DownArrowIcon className="icon down-icon" size={15} color="#000000" />
                                {data.head}
                            </summary>
                            <p className="poppins-regular-WELCOME_DATA_P">{data.data}</p>
                        </details>
                    ))
                }
            </section>
        </>
    );
}