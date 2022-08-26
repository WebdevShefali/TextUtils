import React from 'react'

const About = (props) => {
  return (
    <div className="container">
      <div className="accordion accordion-flush" id="accordionExample">
  <div className="accordion-item"  >
    <h2 className="accordion-header" id="headingOne" style={{backgroundColor:props.mode==="light"?"rgba(237,246,250,1)":"rgba(63,92,114)",color: props.mode==="light"?"black":"white"}}>
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor:props.mode==="light"?"rgba(237,246,250,1)":"rgba(63,92,114)",color: props.mode==="light"?"black":"white"}}>
         Analyse your text
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor:props.mode==="light"?"rgba(237,246,250,1)":"rgba(63,92,114)",color: props.mode==="light"?"black":"white"}}>
      Textutils gives you a way to analyze your text quickly and efficently.It let you to count word, count charecters or reading time required.It has both light and dark mode for better compartable.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo" style={{backgroundColor:props.mode==="light"?"rgba(237,246,250,1)":"rgba(63,92,114)",color: props.mode==="light"?"black":"white"}}>
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{backgroundColor:props.mode==="light"?"rgba(237,246,250,1)":"rgba(63,92,114)",color: props.mode==="light"?"black":"white"}}>
        Free to use
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor:props.mode==="light"?"rgba(237,246,250,1)":"rgba(63,92,114)",color: props.mode==="light"?"black":"white"}}>
      TextUtils is a free character counter tool that provided instant character count and word count statics for a given text. TextUtils reports the number of words and character. Thus it is suitable for writing text with word / character limit.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree" style={{backgroundColor:props.mode==="light"?"rgba(237,246,250,1)":"rgba(63,92,114)",color: props.mode==="light"?"black":"white"}}>
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{backgroundColor:props.mode==="light"?"rgba(237,246,250,1)":"rgba(63,92,114)",color: props.mode==="light"?"black":"white"}}>
        Browser Compatible
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor:props.mode==="light"?"rgba(237,246,250,1)":"rgba(63,92,114)",color: props.mode==="light"?"black":"white"}}>
      This word counter software works in any web browser such as Chrome , Firefox ,Internet Explorer ,Safari,Opera etc.
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default About
