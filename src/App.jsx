import React,{useState} from 'react'


function App() {
  const [counter, setCounter]=useState(15)

  const addValue=()=>{
    if(counter!=20){
      setCounter(counter+1);
      console.log(counter);
    }
  };

  const removeValue=()=>{
    if(counter!=0){
      setCounter(counter-1);
        console.log(counter);
    }
  }
  return (
    <>
     <h1>I am here to Get Ready</h1>
     <h2>counter value: {counter}</h2>
     <button onClick={addValue}>add Value</button>
     <br />
     <button onClick={removeValue}>remove Value</button>
    </>
  )
}

export default App
