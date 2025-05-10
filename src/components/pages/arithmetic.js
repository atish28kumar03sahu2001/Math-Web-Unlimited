import ExampleCode from '../code/example-code';
import { ArithmeticExample, ArithmeticJavaScript } from '../data/codedata';
import '../styles/arithmetic.css';
export default function Arithmetic () {
    return (
        <>
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
            <section className='AO_EX_SEC'>
                <h1 className='poppins-regular-AO_H1'>Arithmetic Operation Example</h1>
            </section>
            <section className='AO_EX_SEC_CDE'>
                <ExampleCode Code={ArithmeticExample} />
            </section>
            <section className='AO_EX_SEC'>
                <h1 className='poppins-regular-AO_H1'>JavaScript Example</h1>
            </section>
            <section className='AO_EX_SEC_CDE'>
                <ExampleCode Code={ArithmeticJavaScript} />
            </section>
        </>
    );
}