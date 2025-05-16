'use client';

import Link from 'next/link';
import ArithmeticDemo from '../code/arithmetic-demo';
import ExampleCode from '../code/example-code';
import { FaArrowRight as NextIcon, FaArrowLeft as BackIcon } from "react-icons/fa";
import {  } from "react-icons/fa";
import { ArithmeticExample, ArithmeticJavaScript, ArithmeticReactJS } from '../data/codedata';
import '../styles/arithmetic.css';

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
                <h1 className='poppins-regular-AO_H1'>Arithmetic Operation</h1>
            </section>
            <article className='ART_P_DEF_AO'>
                <p className='poppins-regular-AOP'>
                    Arithmetic operations are fundamental mathematical processes that involve manipulating numbers to perform calculations. These operations form the basis of many mathematical computations and are used in various fields such as science, engineering, economics, and everyday problem-solving. The primary arithmetic operations include addition, subtraction, multiplication, and division, along with more advanced operations like exponentiation and modulus.
                </p>
                <p className='poppins-regular-AOP'>
                    An <span>Operand </span>is the value or data on which an operation is performed. In mathematical expressions or programming, operands can be numbers, variables, or any data that is used in conjunction with an operator to produce a result. Operands act as inputs to operators. An <span>Operator </span>is a symbol or keyword that specifies the type of operation to be performed between one or more operands. Operators can represent mathematical operations (e.g., addition, subtraction), logical comparisons (e.g., greater than, equal to), or other functions.
                </p>
            </article>
            <ol type='1' start={1} className='AO_OL_PT'>
                <li className='poppins-regular-LI'><span className='SPA_AO'>Addition </span>is the process of combining two or more numbers to get a total or sum. It is represented by the <span>+</span> symbol. The numbers being added are called addends, and the result is the sum.</li>
                <li className='poppins-regular-LI'><span className='SPA_AO'>Subtraction </span>is the process of finding the difference between two numbers. It is represented by the <span>−</span> symbol. The number from which another number is subtracted is called the minuend, and the number being subtracted is the subtrahend. The result is the difference.</li>
                <li className='poppins-regular-LI'><span className='SPA_AO'>Multiplication </span>is the process of combining equal groups to find the total. It is represented by the <span>X</span>, <span>·</span> and <span>*</span> symbol. The numbers being multiplied are called factors, and the result is the product.</li>
                <li className='poppins-regular-LI'><span className='SPA_AO'>Division </span>is the process of splitting a number into equal parts. It is represented by the <span>÷</span> or <span>/</span> symbol. The number being divided is the dividend, the number by which it is divided is the divisor, and the result is the quotient.</li>
                <li className='poppins-regular-LI'><span className='SPA_AO'>Modulus </span>is the operation of finding the remainder when one number is divided by another. It is represented by the <span>%</span> symbol.</li>
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
// npm uninstall 