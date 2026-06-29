import { useState,useEffect } from "react";
import "../styles/TextCard.css";

export default function TextCard({title,text}){

    
    return (
        <div className="card">
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
          
}