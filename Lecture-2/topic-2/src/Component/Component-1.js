import React from "react";


function Tag (){
    return <>
    <h1 style={{color:"black"}}>Jay Shrre Ram...</h1>
    <h2 style={{color:"black"}}>Jay Shrre Ram...</h2>
    <h3 style={{color:"black"}}>Jay Shrre Ram...</h3>
    </>
}
function Tag2(){
    return <>

    <h1 style={{color:"red"}}>Jay Murlidhar...</h1>
    <h2 style={{color:"red"}}>Jay Murlidhar...</h2>
    <h3 style={{color:"red"}}>Jay Murlidhar...</h3>
    </>
}

function Tag3(){
    return<>
    <p style={{backgroundColor:"yellow", border:"2px solid black"}}> A second common modern English style is to use no indenting, but add vertical white space to create "block paragraphs." On a typewriter, a double carriage return produces a blank line for this purpose; professional typesetters </p> 
    <p style={{backgroundColor:"yellow", border:"2px solid black"}}>A second common modern English style is to use no indenting, but add vertical white space to create "block paragraphs." On a typewriter, a double carriage return produces a blank line for this purpose; professional typesetters </p> 
    <p style={{backgroundColor:"yellow", border:"2px solid black"}}>A second common modern English style is to use no indenting, but add vertical white space to create "block paragraphs." On a typewriter, a double carriage return produces a blank line for this purpose; professional typesetters </p>
    <p style={{backgroundColor:"yellow", border:"2px solid black"}}>A second common modern English style is to use no indenting, but add vertical white space to create "block paragraphs." On a typewriter, a double carriage return produces a blank line for this purpose; professional typesetters </p>
    <p style={{backgroundColor:"yellow", border:"2px solid black"}}>A second common modern English style is to use no indenting, but add vertical white space to create "block paragraphs." On a typewriter, a double carriage return produces a blank line for this purpose; professional typesetters </p>
    </>
}
function Tag4(){
    return <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" style={{width:"1000px",height:"500px"}}/>
}
function Tag5(){
    return <ul>
            <li>Home</li>
            <li className="mt-5 text-center text-red-600">Data</li>
            <li>Contact</li>
            <li>Blog</li>
        </ul>
}

function Tag6(){
    let style = {
        color:"red"
    }
    return <h1 style={style}>Nikhil</h1>
}

export default Tag;
export {Tag2,Tag3,Tag4,Tag5,Tag6};