import React,{useState} from 'react'
import {AiOutlineDelete} from "react-icons/ai"


const Question = props => {

    const [show, setShow] = useState(true);


    function handleDeleteQuestion(){

        setShow(false);
      
        
        }


return (
    <>{show?
   <div>
       <li key={Math.random()*1000}>
           

           <div className="question">
               <input type="text" name="question" id="question " placeholder='Enter question statement here:' />
               
               </div>
<div className="answer">
    <textarea name="ans" id="ans" cols="50" rows="5" placeholder='Enter your answer here' >
        </textarea>
    
    </div>
      
       <AiOutlineDelete onClick={()=>handleDeleteQuestion()} className='rm-btn'   />



    

       </li>
   </div>
   :null}
    </>
  )
}

export default Question