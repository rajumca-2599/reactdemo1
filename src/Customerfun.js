import React,{useState,useEffect} from 'react'

function Customerfun() {
    let [dogImage,setdogImage]=useState(null)
    useEffect(() => {
     fetch("https://dog.ceo/api/breeds/image/random/42").then(Response=>Response.json()).then(data=> setdogImage(data.message))
    }, [])
    return (
        <div className="App">
        <h1 style={{color:"red"}}>Dog images</h1>
    {dogImage && dogImage.map((dog) => <img width={"200px"} height={"200px"} src={dog}></img>)}
    </div>
    )
}

export default Customerfun
