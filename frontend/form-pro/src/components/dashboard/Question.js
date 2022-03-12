import React,{useState} from 'react'
import {AiOutlineDelete} from "react-icons/ai"


const Question = props => {

    const [show, setShow] = useState(true);
    const [value, setValue] = useState("kqjhksjdfhskjf");


    function handleDeleteQuestion(){

        setShow(false);
      
        
        }



        function handleChange(e)
        {

            // console.log(e.target.value)

            setValue(e.target.value);




        }


return (
    <>{show?
   <div>
       <li >
           

           <div className="question">
               <input type="text" name="question" id="question "  value={value} onChange={handleChange}  placeholder='Enter question statement here:' />
               
               </div>

       <AiOutlineDelete onClick={()=>handleDeleteQuestion()} className='rm-btn'   />



    

       </li>
   </div>
   :null}
    </>
  )
}

export default Question