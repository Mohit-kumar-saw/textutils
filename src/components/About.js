

import React, { useState } from 'react';

export default function About(props) {
    
  
    // const [btntext, setbtntext] = useState('Dark Mode');


    // const [myStyle, setMyStyle] = useState({
    //     color:'white',
    //     backgroundColor:'black'
    // })

    // const togglestyle=()=>{
    //     if(myStyle.color=='white'){
    //         setMyStyle({
    //             color:'black',
    //             backgroundColor:'white'
    //         })
    //        setbtntext("Dark mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor:'black'
    //         } )
    //         setbtntext("Light mode")
    //     }
       
    // }

  
  return (
    
    <div className='container  my-3' >
    <h2 className='my-3'style={{color:props.mode==='light'?'black':'white ' }}>About Us</h2>
      <div className="accordion" id="accordionPanelsStayOpenExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style={{backgroundColor:props.mode==='light'?'white':'#102d58',color:props.mode=='dark'?'white':'black'}}>
        Accordion Item #1
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div className="accordion-body" style={{backgroundColor:props.mode==='light'?'white':'#102d58',color:props.mode=='dark'?'white':'black'}} >
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo" style={{backgroundColor:props.mode==='light'?'white':'#102d58',color:props.mode=='dark'?'white':'black'}}>
        Accordion Item #2
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse " aria-labelledby="panelsStayOpen-headingTwo">
      <div className="accordion-body" style={{backgroundColor:props.mode==='light'?'white':'#102d58',color:props.mode=='dark'?'white':'black'}}>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree" style={{backgroundColor:props.mode==='light'?'white':'#102d58',color:props.mode=='dark'?'white':'black'}}>
        Accordion Item #3
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div className="accordion-body" style={{backgroundColor:props.mode==='light'?'white':'#102d58',color:props.mode=='dark'?'white':'black'}} >
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
<div className="container py-2">
{/* <button type="button" onClick={togglestyle} className="btn btn-dark ">{btntext}</button> */}
</div>
    </div>
  )
}

