'use client';
import { useState } from "react";
import { arithmetic } from "math-unlimited";
import "../styles/arithmetic.css";
export default function ArithmeticDemo () {
    const [Res, setRes] = useState(0);
    const HandleOperation = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const Obj = Object.fromEntries(formData.entries());
        console.log(Obj);
        setRes(arithmetic(parseInt(Obj.IP1), parseInt(Obj.IP2), Obj.OPERATOR));
        e.target.reset();
        setTimeout(() => {
            setRes(0);
        }, 5000);
    }
    return (
        <>
            <section className="ARTH-DEMO-SEC">
                <form onSubmit={HandleOperation} className="FRM-ARTH-DEMO">
                    <div className="FRM-DIV">
                        <div className="IPDIV"><input type='text' placeholder='Enter Input Value1' name='IP1' className="IP INPUT" title="Enter Integer Value Only" /></div>
                        <div className="IPDIV"><input type='text' placeholder='Enter Input Value2' name='IP2' className="IP INPUT" title="Enter Integer Value Only" /></div> 
                    </div>
                    <div className="FRM-DIV">
                        <div className="IPDIV">
                            <select name="OPERATOR" className="IP SELECT-IP">
                                <option value={'ADDITION'}>Addition</option>
                                <option value={'SUBTRACTION'}>Subtraction</option>
                                <option value={'MULTIPLICATION'}>Multiplication</option>
                                <option value={'DIVISION'}>Division</option>
                                <option value={'MODULO'}>Modulo</option>
                            </select>
                        </div>
                        <div className="IPDIV">
                            <input type='submit' value='Calculate' className="IP" />
                        </div>
                    </div>
                </form>
                <p className="RES-P">{Res}</p>
            </section>
        </>
    );
}