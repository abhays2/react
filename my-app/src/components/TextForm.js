import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleClearText = () => {
        setText('')
    }
    const jsonBeatify = () => {
        JSON.stringify(text, null, '\t')
    }
    const [text, setText] = useState('');
    
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <div className="mb-3">
            <h3>{props.heading}</h3>    
            <textarea className="form-control" id="text-control" style={{color:props.mode==='dark'?'white':'black', backgroundColor:props.mode==='dark'?'#0c151e':'white'}} value={text} onChange={handleOnChange} rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick} > Convert to UpperCase </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick} > Convert to LowerCase </button>
        <button className="btn btn-primary mx-2" onClick={handleClearText} > Clear Text </button>
        <button className="btn btn-primary mx-2" onClick={jsonBeatify} > Json Beatify </button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{ text.split(" ").length -1 } Total words and {text.length} Total Characters</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter something to see prview'}</p>
    </div>
    </>
  )
}
