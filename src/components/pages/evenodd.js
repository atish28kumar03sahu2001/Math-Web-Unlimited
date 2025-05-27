import Link from "next/link";
import "../styles/arithmetic.css";
import { FaArrowRight as NextIcon, FaArrowLeft as BackIcon } from "react-icons/fa";
import { EvenOddTitle, EvenOddDefinition, EvenNumbers, OddNumbers } from "../data/definition";
import ExampleCode from "../code/example-code";
import { EvenOddNumberJavaScript, EvenOddNumberReactJS } from "../data/codedata";
import EvenOddDemo from "../code/evenodd-demo";
export default function EvenOddNumber () {
    return (
        <>
            <section className='LINK-SEC-NEX-BK'>
                <Link href={'/introduction'} title="Introduction" className='poppins-regular-LNK-BK-NX'>
                    <BackIcon size={20} color='#ffffff' />
                </Link>
                <Link href={'/divisible-operation'} title="Even-Odd Number" className='poppins-regular-LNK-BK-NX'>
                    <NextIcon size={20} color='#ffffff' />
                </Link>
            </section>
            <section className='AO_SEC_H1'>
                <h1 className='poppins-regular-AO_H1'>{EvenOddTitle}</h1>
            </section>
            <article className='ART_P_DEF_AO'>
                <p className='poppins-regular-AOP'>{EvenOddDefinition}</p>
            </article>
            <ol type='1' start={1} className='AO_OL_PT'>
                <li className='poppins-regular-LI'><span className='SPA_AO'>Even Number: </span>{EvenNumbers}</li>
                <li className='poppins-regular-LI'><span className='SPA_AO'>Odd Number: </span>{OddNumbers}</li>
            </ol>
            <section className='SEC_CODE_H1_SYNT'>
                <div className='SEC_CODE_H1_SYNT-DIV'>
                     <h1 className='poppins-regular-CODEP'>Even Odd In JavaScript</h1>
                </div>
                <ExampleCode Code={EvenOddNumberJavaScript} H1data={"Even Odd Number"} />
            </section>
            <section className='SEC_CODE_H1_SYNT'>
                <div className='SEC_CODE_H1_SYNT-DIV'>
                    <h1 className='poppins-regular-CODEP'>Division Example</h1>
                </div>
                <EvenOddDemo />
            </section>
            <section className='SEC_CODE_H1_SYNT'>
                <div className='SEC_CODE_H1_SYNT-DIV'>
                     <h1 className='poppins-regular-CODEP'>Even Odd In React.JS</h1>
                </div>
                <ExampleCode Code={EvenOddNumberReactJS} H1data={"Even Odd Number"} />
            </section>
        </>
    );
}