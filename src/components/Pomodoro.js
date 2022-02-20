import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import '../index.css'



export default function Pomodoro() {

  const boxRef = useRef();
 
useEffect(() => {
  
  gsap.timeline()
    .from(boxRef.current, {
      xPercent:100,
      duration: 2,
      rotate:"+=360"
    })
    .from((".sec"),{
      x:100,
      duration: 1,
      ease:"back.in",
    })
});


  
  return( 
  <div className='container' > 
      <h1 ref={boxRef}>LOL</h1>
      <h1 className='sec'>LOL</h1>
  </div>
  );
}


