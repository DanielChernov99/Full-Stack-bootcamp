import { useState } from "react"

export default function Exercise1(){
    const [galary,setGalary] = useState(
        {
            images: [
            "https://hips.hearstapps.com/hmg-prod/images/lychee-fruit-sugar-1530136136.jpg?crop=1xw:1xh;center,top&resize=640:*",
            "https://hips.hearstapps.com/hmg-prod/images/mango-fruit-sugar-1530136260.jpg?crop=1xw:1xh;center,top&resize=640:*",
            "https://hips.hearstapps.com/hmg-prod/images/cherries-sugar-fruit-1530136329.jpg?crop=1xw:1xh;center,top&resize=640:*",
            ],
            currentImg: 0
        }
    )

    const shiftImageBack = () => {
        setGalary((prev) => ({...prev,currentImg:(prev.currentImg - 1 + prev.images.length) % prev.images.length}))
    }

    const shiftImageForward  = () => {
        setGalary((prev) => ({...prev,currentImg:(prev.currentImg + 1) % prev.images.length}))

    }

    return (
        <div className="exercise-container">
            <button onClick={shiftImageBack} type="button">Back</button>
            <img src={galary.images[galary.currentImg]}  />
            <button onClick={shiftImageForward} type="button">Forward</button>

        </div>
    )

}