import Link from "next/link";
import "../styles/division.css";
import "../styles/arithmetic.css";
import { FaArrowRight as NextIcon, FaArrowLeft as BackIcon } from "react-icons/fa";
import { Dividend_Definition, DivisionTitle, Division_Definition, Divisor_Definition, Quotient_Definition, Remainder_Definition } from "../data/definition";
import ExampleCode from "../code/example-code";
import { DivisionConcept, DivisionJavaScript, DivisionReactJS } from "../data/codedata";
import DivisionDemo from "../code/division-demo";
export default function Division() {
    return (
        <>
            <section className='LINK-SEC-NEX-BK'>
                <Link href={'/introduction'} title="Introduction" className='poppins-regular-LNK-BK-NX'>
                    <BackIcon size={20} color='#ffffff' />
                </Link>
                <Link href={'/even-odd'} title="Even-Odd Number" className='poppins-regular-LNK-BK-NX'>
                    <NextIcon size={20} color='#ffffff' />
                </Link>
            </section>
            <section className='AO_SEC_H1'>
                <h1 className='poppins-regular-AO_H1'>{DivisionTitle}</h1>
            </section>
            <article className='ART_P_DEF_AO'>
                <p className='poppins-regular-AOP'>{Division_Definition}</p>
            </article>
            <ol type='1' start={1} className='AO_OL_PT'>
                <li className='poppins-regular-LI'><span className='SPA_AO'>Dividend: </span>{Dividend_Definition}</li>
                <li className='poppins-regular-LI'><span className='SPA_AO'>Divisor: </span>{Divisor_Definition}</li>
                <li className='poppins-regular-LI'><span className='SPA_AO'>Quotient: </span>{Quotient_Definition}</li>
                <li className='poppins-regular-LI'><span className='SPA_AO'>Remainder </span>{Remainder_Definition}</li>
            </ol>
            <section className='SEC_CODE_H1_SYNT'>
                <div className='SEC_CODE_H1_SYNT-DIV'>
                    <h1 className='poppins-regular-CODEP'>Division Operation Concept</h1>
                </div>
                <ExampleCode Code={DivisionConcept} H1data={"Division Concept"} />
            </section>
            <section className='SEC_CODE_H1_SYNT'>
                <div className='SEC_CODE_H1_SYNT-DIV'>
                    <h1 className='poppins-regular-CODEP'>Division Example</h1>
                </div>
                <DivisionDemo />
            </section>
            <section className='SEC_CODE_H1_SYNT'>
                <div className='SEC_CODE_H1_SYNT-DIV'>
                    <h1 className='poppins-regular-CODEP'>JavaScript Code</h1>
                </div>
                <ExampleCode Code={DivisionJavaScript} H1data={"Division Concept"} />
            </section>
            <section className='SEC_CODE_H1_SYNT'>
                <div className='SEC_CODE_H1_SYNT-DIV'>
                    <h1 className='poppins-regular-CODEP'>React.JS Code</h1>
                </div>
                <ExampleCode Code={DivisionReactJS} H1data={"Division Concept"} />
            </section>
            
        </>
    );
}