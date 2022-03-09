import React, { useState } from 'react'

import "./newform.css"
import Question from './Question';
import { AiOutlineDelete } from "react-icons/ai"






const Newform = () => {

  const [count, setCount] = useState(1);

  const [questions, setQuestions] = useState([]);
  const [show, setshow] = useState(true);


  function handleAddQuestion() {

   const ol = document.getElementById("ol");

   console.log(ol);

   ol


    setQuestions([...questions, count]);


  }



  function handleFormsave(e) {

    e.preventDefault();

    const  formTitle = e.target[0].value;
    const formDescription =e.target[1].value;

    console.log(e.target);

    // console.log(formTitle,formDescription)


   
  }





  return (
    <div className='new-form'>


      <form onSubmit={handleFormsave} className='new-form-form'>
        <input type="text" placeholder='Title of Form' />


        <textarea name="description" id="description" className='description' cols="50" rows="3" placeholder='Description'>

        </textarea>



        <div className="questions">

          <ol  id='ol'>

            {questions.map((question, index) =>



            (
              <>


                <Question key={Math.random()*2020} item={index} />


              </>
            )


            )}

          </ol>

        </div>

        <button type='button' className='add-btn' onClick={() => handleAddQuestion()}  >Add Question</button>


       <input type="submit" value="Save Form" />

      </form>











    </div>
  )
}

export default Newform