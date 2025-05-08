"use client";
import { useState } from "react";
import "../styles/welcome.css";
import { FaCopy as CopyIcon, FaRegCheckCircle as TickIcon } from "react-icons/fa";
import { toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Component1 () {
    const [isCopied, setIsCopied] = useState(false);
    const HandleCopy = () => {
        const textToCopy = document.querySelector("#PTAG").textContent;
        navigator.clipboard.writeText(textToCopy).then(() => {
            setIsCopied(true); 
            toast.success(`${textToCopy} Copied`, { position: "top-right", autoClose: 3000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "colored", transition: Slide, style: {background: '#000000', color: '#ffffff'} });
            setTimeout(() => setIsCopied(false), 2000);
        }).catch(error => {
            toast.error("Failed to copy text!", { position: "top-right", autoClose: 3000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "colored", transition: Slide, style: {background: '#ff0000', color: '#ffffff'} });
            console.error("Failed to copy text: ", error);
        })
    }
    return (
        <>
            <section className="CPY_SEC_TEXT">
                <div className="CPY_DIV_TEXT">
                    <p id="PTAG" className="poppins-regular-NPMP-TEXT">npm i math-unlimited@latest</p>
                    <button onClick={HandleCopy} className="NPM-CPY-BTN">
                        {isCopied ? (
                            <TickIcon size={15} color="#ffffff" />
                        ) : (
                            <CopyIcon size={15} color="#ffffff" />
                        )}
                    </button>
                </div>
            </section>
        </>
    );
}