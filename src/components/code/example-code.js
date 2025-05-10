"use client";
import { useState } from "react";
import { FaCopy as CopyIcon, FaRegCheckCircle as TickIcon } from "react-icons/fa";
import { toast, Slide } from "react-toastify";
import "../styles/example-code.css";
import "react-toastify/dist/ReactToastify.css";
export default function ExampleCode({ Code }) {
    const [isCopied, setIsCopied] = useState(false);

    const HandleCopy = () => {
        const codeString = typeof Code === "object" ? JSON.stringify(Code, null, 2) : Code;

        navigator.clipboard
            .writeText(codeString)
            .then(() => {
                setIsCopied(true);
                toast.success(`Code Statement Copied`, { position: "top-right", autoClose: 3000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "colored", transition: Slide, style: { background: "#000000", color: "#ffffff" }, });
                setTimeout(() => setIsCopied(false), 2000);
            })
            .catch((error) => {
                toast.error("Failed to copy text!", { position: "top-right", autoClose: 3000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "colored", transition: Slide, style: { background: "#ff0000", color: "#ffffff" }, });
                console.error("Failed to copy text: ", error);
            });
    };

    return (
        <section className="CODE_SEC_BOX">
            <div className="CPY_BTN_DIV">
                <button onClick={HandleCopy} className="NPM-CPY-BTN">
                    {isCopied ? (
                        <TickIcon size={15} color="#ffffff" />
                    ) : (
                        <CopyIcon size={15} color="#ffffff" />
                    )}
                </button>
            </div>
            <pre className="poppins-regular-CODE_PRE">
                {typeof Code === "object" ? JSON.stringify(Code, null, 2) : Code}
            </pre>
        </section>
    );
}
