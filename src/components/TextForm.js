import React,{useState}from 'react'


export default function TextForm(props) {

    // const [MyStyle,setMyStyle]=useState({
    //     color:'white',
    //     backgroundColor:'black'
    // })
    

    // const [btntext,setbtntext]=useState('dark mode')

    // const togglemode=()=>{
    //     if(MyStyle.color=="white"){
    //         setMyStyle({
    //             color:'black',
    //             backgroundColor:'white'
    //         })
    //         setbtntext("dark mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor:'black'
    //         } )
    //         setbtntext("light mode")
    //     }
    // }
   
    const handleCopy=()=>{
        let text=document.getElementById('box2')
        navigator.clipboard.writeText(text.value)
    }

    const handleUpClick=()=>{
        // console.log("uppercase was clicked")
        let newtext=text.toUpperCase();
        setText(newtext)
    }
    const handleloClick=()=>{
        // console.log("uppercase was clicked")
        let newtext=text.toLowerCase();
        setText(newtext)
    }

    const handleDeClick=()=>{
        // console.log("uppercase was clicked")
        let newtext="";
        setText("")
    }

    
const handleOnChange=(event)=>{
    // console.log("text is changed")
    setText(event.target.value)
}

    const [text,setText]=useState('enter text hear')
  
    return (

   
<>

<div className='container' style={{color: props.mode=='dark'?'white':'black'}}>
<h1>{props.heading}</h1>
<div className="mb-3">
  
  {<textarea className="form-control" value={text}  /*style={MyStyle}*/  style={{backgroundColor:props.mode==='light'?'white':'#172841',color:props.mode=='dark'?'white':'black'}}  onChange={handleOnChange} id="box2"  rows="8"> </textarea> }
</div>
<button className="btn btn_primary mx-2 " onClick={handleUpClick}>Convert To Uppercase</button>
<button className="btn btn_primary " onClick={handleloClick}>Convert To Lowercase</button>
<button className="btn btn_primary mx-2 " onClick={handleDeClick}>clear</button>
<button className="btn btn_primary mx-2 " onClick={handleCopy}>Copy</button>
{/* <button className="btn btn_primary mx-2 " onClick={togglemode}>{btntext}</button> */}

</div>

<div className="container my-3" style={{color:props.mode=='dark'?'white':'black'}}>
    <h2>Your Text Summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes read</p>
    <h4>Preview</h4>
    <p>{text}</p>
</div>
 </>
  )
}
