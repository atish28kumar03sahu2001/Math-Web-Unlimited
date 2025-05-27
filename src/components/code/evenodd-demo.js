'use client';
import { useState } from "react";
import { evenOdd } from "math-unlimited";
import "../styles/evenodd.css";
export default function EvenOddDemo () {
    const [res, setRes] = useState("");
    const HandleEvenOddNumber = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const inputvalue = formData.get('input1');

        const result = evenOdd(Number(inputvalue));
        setRes(result);

        setTimeout(() => {
            setRes('');
            e.target.reset();
        }, 2000);
    }
    return (
        <>
            <section>
                <form onSubmit={HandleEvenOddNumber} className="EO_FRM">
                    <input required className="EOIP" type="text" id="input1" name="input1" placeholder="Enter Integer Value" />
                    <input className="EOBTN" type="submit" value="Result" />
                    <input className="EOIP" readOnly value={res} placeholder="Display Result" />
                </form>
            </section>
        </>
    );
}