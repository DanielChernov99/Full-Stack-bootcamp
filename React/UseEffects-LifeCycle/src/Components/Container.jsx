import { useState,useEffect } from "react";
import TextCard from "./TextCard";
import "../styles/Container.css";


//the data will be array of objects and each object will have title and text
export default function Container(){

    const [cards,setCards] = useState([])
    const [data,setData] = useState([])

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const isSmallScreen = screenWidth < 700;

    const updateCards = (posts) =>{
        setCards(posts.map(d =>
            <TextCard 
            title={d.title}
            text={d.body}
            />))
    }

    useEffect(() =>{
        const getData = async function(){
            const response = await fetch("/mock.json")
            const data = await response.json();
            const firstTenPosts = data.slice(0, 10);

            setData(firstTenPosts)
            updateCards(firstTenPosts)
        }
        getData();       
    },[])

    useEffect(() =>{
        const handleResize = () =>{
            setScreenWidth(window.innerWidth)
        }
        window.addEventListener("resize",handleResize);

        return () => removeEventListener("resize",handleResize)

    },[])

    
    
    return (
        <div className={isSmallScreen? "cards-container small" : "cards-container"}>{cards}</div>     
    )
          
}