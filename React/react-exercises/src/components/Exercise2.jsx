import { useState } from "react"
import List from "./List";
import Conversation from "./Conversation";

export default function Exercise2(){
    const [data, setData] = useState({                    
        displayConversation: null,
        conversations: [
            {
                with: "Laura", convo: [
                    { text: "Hi", sender: "self" },
                    { text: "You there?", sender: "self" },
                    { text: "Yeah, hi, what's up?", sender: "other" }
                ]
            },
            {
                with: "Dad", convo: [
                    { text: "Have you finished your school work yet?", sender: "other" },
                    { text: "Yes.", sender: "self" },
                    { text: "What do you mean, yes?", sender: "other" },
                    { text: "??", sender: "self" }
                ]
            },
            {
                with: "Shoobert", convo: [
                    { text: "Shoobert!!!", sender: "self" },
                    { text: "Dude!!!!!!!!", sender: "other" },
                    { text: "Shooooooooo BERT!", sender: "self" },
                    { text: "You're my best friend", sender: "other" },
                    { text: "No, *you're* my best friend", sender: "self" },
                ]
            }
        ]
    }
        
    )

    const displayConvo = (name) => {
        setData((prev) => ({...prev,displayConversation: name}))

    } 
    const backToList = () => {
        setData(prev => ({
            ...prev,
            displayConversation: null
        }));
    };
    const findConvo = (name) =>{
        return data.conversations.find(u => u.with === name)
    }
    const selectedConversation = findConvo(data.displayConversation);

    return (
        <div className="container">
            {data.displayConversation === null ?
            <List
                contacts={data.conversations.map(u => u.with)}
                displayConvo={displayConvo}                                                      
            />
            :
            <Conversation
                convo={selectedConversation.convo}
                sender={data.displayConversation}
                backToList={backToList}
            />
            
            }
        </div>
    )
}