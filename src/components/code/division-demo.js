'use client';
import { useState } from "react";
import { divisionOperation } from "math-unlimited";
import "../styles/division.css";
export default function DivisionDemo () {
    const [Operation, setOperation] = useState("");
    const [Placeholder, setPlaceholder] = useState({input1: "", input2: "", input3: ""});
    const [Inputs, setInputs] = useState({input1: "", input2: "", input3: ""});
    const [Result, setResult] = useState("");
    const HandleInputChange = (event) => {
        const { name, value } = event.target;
        setInputs((prev) => ({ ...prev, [name]: value }));
    }
    const HandleOperationChange = (event) => {
        const selectedOperation = event.target.value;
        setOperation(selectedOperation);
        const placeholderMap = {
            quotient: { input1: "Enter Dividend Value", input2: "Enter Remainder Value", input3: "Enter Divisor Value", },
            dividend: { input1: "Enter Quotient Value", input2: "Enter Divisor Value", input3: "Enter Remainder Value", },
            divisor: { input1: "Enter Dividend Value", input2: "Enter Quotient Value", input3: "Enter Remainder Value", },
            remainder: { input1: "Enter Dividend Value", input2: "Enter Quotient Value", input3: "Enter Divisor Value", },
        };
        setPlaceholder(placeholderMap[selectedOperation] || { input1: "", input2: "", input3: "" });
    }
    const HandleSubmit = (event) => {
        event.preventDefault();
        try {
            const num1 = parseInt(Inputs.input1);
            const num2 = parseInt(Inputs.input2);
            const num3 = parseInt(Inputs.input3);
            if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
                throw new Error("Please enter valid numeric values.");
            }
            const result = divisionOperation(Operation, num1, num2, num3);
            setResult(result);
        } catch (error) {
            setResult((error).message);
        }
    }
    return (
        <>
            <section>
                <form onSubmit={HandleSubmit} className="PARENT_FRM">
                    <div className="PFRM_1 PFRM">
                        <input className="PFRM_IP" type="text" name="input1" value={Inputs.input1} onChange={HandleInputChange} placeholder={Placeholder.input1 || "Enter Input1 Value"} />
                    </div>
                    <div className="PFRM_2 PFRM">
                        <input className="PFRM_IP" type="text" name="input2" value={Inputs.input2} onChange={HandleInputChange} placeholder={Placeholder.input2 || "Enter Input2 Value"} />
                    </div>
                    <div className="PFRM_3 PFRM">
                        <input className="PFRM_IP" type="text" name="input3" value={Inputs.input3} onChange={HandleInputChange} placeholder={Placeholder.input3 || "Enter Input3 Value"} />
                    </div>
                    <div className="PFRM_4 PFRM">
                        <select className="PFRM_IP" value={Operation} onChange={HandleOperationChange}>
                            <option value="" hidden>Choose An Operation</option>
                            <option value="dividend">Dividend</option>
                            <option value="divisor">Divisor</option>
                            <option value="quotient">Quotient</option>
                            <option value="remainder">Remainder</option>
                        </select>
                    </div>
                    <div className="PFRM_5 PFRM">
                        <input className="PFRM_IP" type="submit" value="Result" />
                    </div>
                    <div className="PFRM_6 PFRM">
                        <input className="PFRM_IP" value={Result} placeholder="Display The Result" readOnly />
                    </div>
                </form>
            </section>
        </>
    );
}