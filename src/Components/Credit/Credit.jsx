import React, { useEffect } from 'react';
import './credit.css';

export default function Credit() {

    useEffect(() => {
        // const str = 'credit by - codewithsadee -';
        // const text = document.getElementById("text");
        // window.onload = () => {
        //     for(let i = 0; i < str.length; i++) {
        //         let span = document.createElement("span");
        //         span.innerText = str[i];
        //         text.appendChild(span);
        //         span.style.transform = `rotate(${i * 12.9}deg)`
        //     }
        // }
        const text = document.querySelector('.text p');
        text.innerHTML = text.innerText.split("").map((char, i) => `<span style="transform: rotate(${i * 8}deg)">${char}</span>`).join("");
    }, [])

  return (
    <>
        {/* <p id="text"></p> */}
        <a href="https://github.com/codewithsadee/" target='_blank'>
            <div className="circle">
                <div className="logo"></div>
                <div className="text">
                    <p>credit by * codewithsadee *</p>
                </div>
            </div>
        </a>
    </>

  )
}
