import { useState,useEffect } from "react";

export default function Exercise1(){
    const [time,setTime] = useState(new Date())

    useEffect(() => {
        const timeUpdater = setInterval(() => {
            setTime(new Date())
        }, 1000);

        return () => {
            clearInterval(timeUpdater)
        }
    },[])

    
    return (
        <div className="Container">
            <p className="timeTxt" >{time.toLocaleTimeString()}</p>
        </div>
    )
}