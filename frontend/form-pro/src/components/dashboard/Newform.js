import React, { useState, useEffect } from 'react'

import "./newform.css"
import Question from './Question';
import { AiOutlineDelete } from "react-icons/ai"






const Newform = () => {

  const [count, setCount] = useState([]);

  const [show, setshow] = useState(true);






  function handleAddQuestion() {

    setCount([...count, Math.random()]);

  }



  function handleFormsave(e) {

    e.preventDefault();

    const formTitle = e.target[0].value;
    const formDescription = e.target[1].value;

    // console.log(e.target);

    // console.log(formTitle,formDescription)



    var ol = document.getElementById("ol");

    const children = ol.childNodes;
    // console.log(ol.childNodes)

    const questionList = [];
    children.forEach(element => {
      var qestionStatement = element.childNodes[0].firstChild.childNodes[0].value;


     if(questionList.find(question=>question.questionStatement==qestionStatement))
     {
     console.log("Found");

      return ;
    }
      

      questionList.push({ questionStatement: qestionStatement });


      console.log(qestionStatement)

    });

    // console.log(questionList);





    async function sendToServer(options)
    {
      const response = await fetch('http://localhost:8000/form', options);

    }

    const data_to_send ={
      formTitle:formTitle,
      formDescription:formDescription,
      formquestions:questionList
    }

    const options = {
      method: 'POST',

      body: JSON.stringify(data_to_send),
      headers: {
        'Content-Type': 'application/json',
      }
    };

    sendToServer(options)









}


  return (
    <div className='new-form'>


      <form onSubmit={handleFormsave} className='new-form-form'>
        <input type="text" placeholder='Title of Form' />


        <textarea name="description" id="description" className='description' cols="50" rows="3" placeholder='Description'>

        </textarea>



        <div className="questions">

          <ol id='ol'>

            {count.map((question, index) =>



            (
              <>


                <Question item={index} />


              </>
            )


            )

            }

          </ol>

        </div>



        <button type='button' className='add-btn' onClick={() => handleAddQuestion()}  >Add Question</button>


        <input type="submit" value="Save Form" />

      </form>











    </div>
  )
}

export default Newform