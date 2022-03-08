import React,{useState} from 'react'

import "./newform.css"
import Question from './Question';
import {AiOutlineDelete} from "react-icons/ai"






const Newform = () => {

const [questions, setQuestions] = useState([]);
    const [show, setshow] = useState(true);


function handleAddQuestion()
{

  setQuestions([...questions,<Question/>]);


}


function handleDeleteQuestion(){

setshow(false);
setshow(true);

}



  return (
    <div  className='new-form'>


      <form action="" className='new-form-form'>
        <input type="text" placeholder='Title of Form' />
      
       
       <textarea name="description" id="description" className='description' cols="50" rows="3" placeholder='Description'>
         
         </textarea>



         <div className="questions">

           {questions.map(()=>
             (
             
             <Question/> 
            
             )


           )}
           

           </div>

         <button type='button' className='add-btn' onClick={()=>handleAddQuestion()}  >Add Question</button>






        </form>


    
       
        
    





    </div>
  )
}

export default Newform