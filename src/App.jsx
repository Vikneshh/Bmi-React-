import { useState } from "react"

const App = () => {
  const [height,setHeight]=useState("");
  const [weight,setWeight]=useState("");
  const [bmi,setBmi]=useState(null);
  const[bmiStatus,setBmiStatus]=useState("");
  const[errorMsg,setErrorMsg]=useState("")

  const calculateBmi=()=>{
    // Validating whether the height and weight are numbers only
    const isValidHeight=/^\d+$/.test(height);
    const isValidWeight=/^\d+$/.test(weight);

    if(isValidHeight&&isValidWeight){
        // Converting height from cm to m
        const heightInMetres=height/100;
        // Formula to find bmivalues
        const bmiValue=weight/(heightInMetres*heightInMetres)
        setBmi(bmiValue.toFixed(2))
        if(bmiValue<18.5){
          setBmiStatus("Underweight")}
        else if(bmiValue>=18.5&&bmiValue<24.9){ 
          setBmiStatus('Normal Weight')}
        else if(bmiValue>=25 && bmiValue<29.9) {
          setBmiStatus('OverWeight')}
        else {
          setBmiStatus("Obese")}

          setErrorMsg("")
          // To empty the error messages
    }
    else{
      setBmi(null);
      setBmiStatus("");
      setErrorMsg("Please Enter valid numeric values for height and weight");
    }
  }

  const clearAll=()=>{
      setHeight('')
      setWeight('')
      setBmi(null)
  }
  return (
    <>
      <div className="bmi-calculator">
        <div className="box"></div>
        <div className="data">
          <h1>BMI Calculator</h1>

         {errorMsg && <p className="error">{errorMsg}</p>}
          <div className="input-container">
            <label htmlFor="height">Height (cm):</label>
            <input type="text" id="height" value={height} onChange={(e)=>setHeight(e.target.value)}/>
          </div>
          <div className="input-container">
            <label htmlFor="weight">Weight (kg):</label>
            <input type="text" id="weight" value={weight} onChange={(e)=>setWeight(e.target.value)}/>
          </div>

          <button onClick={calculateBmi}>Calculate BMI</button>
          <button onClick={clearAll} className="btn2">Clear</button>
          {bmi!==null && (<div className="result">
            <p>Your BMI is : {bmi}</p>
            <p>Status: {bmiStatus}</p>
          </div>)}
        </div>
      </div>
    </>
  )
}

export default App