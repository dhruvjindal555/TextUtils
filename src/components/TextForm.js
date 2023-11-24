import React,{ useState } from "react"

export default function TextForm(props) {
    const [text,setText] =useState('Enter text here');
    const handleUpClick=()=>{
        let newText = text.toUpperCase();
        console.log("uppercase was clicked")
        setText(newText);
        props.showAlert("Text converted to uppercase","success")
    }
    const handleLoClick=()=>{
        let newText = text.toLowerCase();
        console.log("lowercase was clicked")
        setText(newText);
    }
    const handleOnChange=(event)=>{
        console.log("handleOnChange was envoked")
        setText(event.target.value)
    }  
    const handleCopy=()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text copied","success")
    }  
    const handleExtraSpaces=()=>{
        var newText = text.split(/[ ]+/);
        setText(newText.join(" ")); 
        props.showAlert("Extraspaces are removed","success")
    }  
    // const countingIss=(text)=>{
    //     if(((text.charAt(text.length-1))==" ") || text==""){
    //         return text.split(" ").length -1
    //     }else{
            
    //         return text.split(" ").length 
    //     }

    // }
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}} >
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" style={{backgroundColor: props.mode==='light'?'white':'black',color: props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length==0} onClick={handleUpClick} className="btn btn-primary mx-2">Convert to uppercase</button>
            <button disabled={text.length==0} onClick={handleLoClick} className="btn btn-primary mx-2">Convert to lowercase</button>
            <button disabled={text.length==0} onClick={handleCopy} className="btn btn-primary mx-2">Copy Text </button>
            <button disabled={text.length==0} onClick={handleExtraSpaces} className="btn btn-primary mx-2">Remove Extra Spaces </button>
        </div>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}} >
            <h1>Your text summary</h1>
            {/* split gives an array */}
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008*text.split(/\s+/).length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}