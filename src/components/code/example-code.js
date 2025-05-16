"use client";
import "../styles/example-code.css";
import { useState } from 'react';
import { FaCopy as CopyIcon, FaRegCheckCircle as TickIcon } from "react-icons/fa";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function ExampleCode({ Code, H1data }) {
    const [isCopied, setIsCopied] = useState(false);
    const HandleCopy = () => {
        const textToCopy = Code;
        navigator.clipboard.writeText(textToCopy).then(() => {
            setIsCopied(true); 
            toast.success(`Code Copied`, { position: "top-right", autoClose: 3000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "colored", transition: Slide, style: {background: '#000000', color: '#ffffff'} });
            setTimeout(() => setIsCopied(false), 2000);
        }).catch(error => {
            toast.error("Failed to copy text!", { position: "top-right", autoClose: 3000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "colored", transition: Slide, style: {background: '#ff0000', color: '#ffffff'} });
            console.error("Failed to copy text: ", error);
        })
    }
    return (
        <>
            <section className="CODE_SEC_CODER">
                <div className="CODE_SEC_P_BTN">
                    <p className="poppins-regular-PH1DATA">{H1data}</p>
                    <button onClick={HandleCopy} className="CODE_COPY_BTN">
                        {isCopied ? (
                            <TickIcon size={15} color="#ffffff" />
                        ) : (
                            <CopyIcon size={15} color="#ffffff" />
                        )}
                    </button>
                </div>
                <SyntaxHighlighter 
                    language="jsx" 
                    style={atomOneDark} 
                    customStyle={{
                        padding: "25px",
                    }}
                    className="CODE_CODER"
                >
                    {Code}
                </SyntaxHighlighter>
            </section>
        </>
    );
}
