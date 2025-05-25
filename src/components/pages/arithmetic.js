'use client';

import Link from 'next/link';
import ArithmeticDemo from '../code/arithmetic-demo';
import ExampleCode from '../code/example-code';
import { FaArrowRight as NextIcon, FaArrowLeft as BackIcon } from "react-icons/fa";
import {  } from "react-icons/fa";
import { ArithmeticExample, ArithmeticJavaScript, ArithmeticReactJS } from '../data/codedata';
import '../styles/arithmetic.css';
import { ArithmeticDef1, ArithmeticTitle, Operand_Operator, Operand_Definition, Operator_Definition, Add_Def, Sub_Def, Mult_Def, Div_Def, Mod_Def } from '../data/definition';

export default function Arithmetic () {
    return (
        <>
            <section className='LINK-SEC-NEX-BK'>
                <Link href={'/introduction'} title='Introduction' className='poppins-regular-LNK-BK-NX'>
                    <BackIcon size={20} color='#ffffff' />
                </Link>
                <Link href={'/division-operation'} title='Division Operation' className='poppins-regular-LNK-BK-NX'>
                    <NextIcon size={20} color='#ffffff' />
                </Link>
            </section>
            <section className='AO_SEC_H1'>
                <h1 className='poppins-regular-AO_H1'>{ArithmeticTitle}</h1>
            </section>
            <article className='ART_P_DEF_AO'>
                <p className='poppins-regular-AOP'>{ArithmeticDef1}</p>
            </article>
            <section className='AO_SEC_H1'>
                <h1 className='poppins-regular-AO_H1'>{Operand_Operator}</h1>
            </section>
            <article className='ART_P_DEF_AO'>
                <p className='poppins-regular-AOP'>
                    <span>Operand </span>{Operand_Definition}
                    <span>Operator </span>{Operator_Definition}
                </p>
            </article>
            <ol type='1' start={1} className='AO_OL_PT'>
                <li className='poppins-regular-LI'><span className='SPA_AO'>Addition (+) </span>{Add_Def}</li>
                <li className='poppins-regular-LI'><span className='SPA_AO'>Subtraction (-) </span>{Sub_Def}</li>
                <li className='poppins-regular-LI'><span className='SPA_AO'>Multiplication (X or *) </span>{Mult_Def}</li>
                <li className='poppins-regular-LI'><span className='SPA_AO'>Division (/) </span>{Div_Def}</li>
                <li className='poppins-regular-LI'><span className='SPA_AO'>Modulus (%) </span>{Mod_Def}</li>
            </ol>
            <section className='SEC_CODE_H1_SYNT'>
                <div className='SEC_CODE_H1_SYNT-DIV'>
                    <h1 className='poppins-regular-CODEP'>Arithmetic Operation Concept</h1>
                </div>
                <ExampleCode Code={ArithmeticExample} H1data={"Arithmetic Concept"} />
            </section>
            <section className='SEC_CODE_H1_SYNT'>
                <div className='SEC_CODE_H1_SYNT-DIV'>
                    <h1 className='poppins-regular-CODEP'>React.JS Example</h1>
                </div>
                <ArithmeticDemo />
            </section>
            <section className='SEC_CODE_H1_SYNT'>
                <div className='SEC_CODE_H1_SYNT-DIV'>
                    <h1 className='poppins-regular-CODEP'>JavaScript Code</h1>
                </div>
                <ExampleCode Code={ArithmeticJavaScript} H1data={"JavaScript Code"} />
            </section>
            <section className='SEC_CODE_H1_SYNT'>
                <div className='SEC_CODE_H1_SYNT-DIV'>
                    <h1 className='poppins-regular-CODEP'>React.JS Code</h1>
                </div>
                <ExampleCode Code={ArithmeticReactJS} H1data={"React.JS Code"} />
            </section>
        </>
    );
}