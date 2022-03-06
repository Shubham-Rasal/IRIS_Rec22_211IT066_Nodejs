import React,{useState}  from 'react'
import "./dashboard.css"
import Newform from './Newform';

const Dashboard = () => {

const [forms, setForms] = useState(["Default"]);

function createForm(){

setForms([...forms,"New Form"]);

}


  return (
    
    <>

    <h1>Dashboard</h1>

    <button onClick={()=>createForm()} >New Form</button>


    <div className="new-form-list">

        {forms.map((index)=>(<Newform key={Math.random()  }/>))}
        
        
        </div>



    </>
  )
}

export default Dashboard