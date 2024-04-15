import React,{useRef} from 'react'

function UseRefs() {
    const ref = useRef();
    console.log(ref,"ref");

    const handleRef = () =>{
        ref.current.focus();
        ref.current.style.color="red";

    }
  return (
    <div className='app'>
      <input type="text" ref={ref} />
      <button onClick={handleRef}>Click me</button>
    </div>
  )
}

export default UseRefs
