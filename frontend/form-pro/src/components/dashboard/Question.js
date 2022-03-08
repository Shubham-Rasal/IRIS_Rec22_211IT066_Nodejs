import React,{useState} from 'react'
import {AiOutlineDelete} from "react-icons/ai"


const Question = () => {

    const [show, setShow] = useState(true);

    function handleDeleteQuestion(){

        setShow(false);
      
        
        }


return (
    <>{show?
   <div>

       Question
       <AiOutlineDelete onClick={()=>handleDeleteQuestion()} className='rm-btn'   />
    

   </div>
   :null}
    </>
  )
}

export default Question