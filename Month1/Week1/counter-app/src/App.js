import logo from './logo.svg';
import DisplayField from './Components/DisplayField';
import './App.css';
import BottomField from './Components/BottomField';
import React,{useState} from 'react';

function App() {

  
const[value,setValue]=useState(0);
const increaseValue=()=>{
  setValue(value + 1);
}

const decreaseValue=()=>{
  if(value<=0){
    setValue(0);
    alert("Cant go negative");
  }
  else{

    setValue(value - 1);
  }
}

const resetValue=()=>{
  setValue(0);
}

  return (
    <div className="App">
    <DisplayField value={value}/>
    <BottomField 
    increaseHandel={increaseValue}
    decreaseHandel={decreaseValue}
    resetHandel={resetValue}
    ></BottomField>
    </div>
  );
}

export default App;
