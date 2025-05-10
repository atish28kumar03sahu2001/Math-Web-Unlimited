import Link from "next/link";
import { Paragraph1, Paragraph2, Paragraph3, Paragraph4, KeyFeatures, PackageMethods } from "../data/codedata";
import "../styles/introduction.css";
export default function IntroductionPage() {
    return (
        <>
            <section className="AB-SEC-H1">
                <h1 className="poppins-regular-AB-H1">About math-unlimited Package</h1>
            </section>
            <section className="AB-SEC-P">
                <p className="poppins-regular-AB-P">{Paragraph1}</p>
                <p className="poppins-regular-AB-P">{Paragraph2}</p>
                <p className="poppins-regular-AB-P">{Paragraph3}</p>
                <p className="poppins-regular-AB-P">{Paragraph4}</p>
            </section>
            <section>
                <article className="ART-H1-FTR">
                    <h1 className="poppins-regular-ART-H1">Key Features</h1>
                </article>
                <article>
                    {
                        KeyFeatures.map((KF)=>(
                            <div key={KF.id} className="KF-DIV">
                                <h2 className="poppins-regular-H2-FTR">{KF.id}. {KF.head}</h2>
                                <p className="poppins-regular-P-FTR">{KF.details}</p>
                            </div>
                        ))
                    }
                </article>
            </section>
            <section className="PACKAGE-METHODS-SEC">
                {PackageMethods.map((method) => (
                    <Link href={`/${method.link}`} className="LNK-PACK" key={method.id} title={method.name}>
                        {method.name}
                    </Link>
                ))}
            </section>
        </>
    );
}