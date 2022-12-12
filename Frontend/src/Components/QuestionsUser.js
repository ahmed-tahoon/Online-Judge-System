import React, { useEffect,useState } from 'react'
import axios from "axios"
import { getQuestions } from '../api/getQuestions';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
const QuestionsUser = () => {
   
const [Questions , setQ ]= useState([]);

useEffect(()=>{

getQuestions().then((data)=>{
    setQ(data);
})

},[])
   



  return (
    <div>
    
  <div class="container">
  <h2 className='text-white'>Questions</h2>
  <hr/>
  <table class="table table-striped table-dark">
    <thead>
      <tr>
        <th>#</th>
        <th>Title</th>
        <th>Difficulty</th>
        <th>Frequency</th>
        <th>Rating</th>
      </tr>
    </thead>
    <tbody>

{Questions.map((item)=> 
   <tr>
        <td>{item.sequence}</td>
        <td><a type="button" href={'/question/'+item.uniquename} >{item.title}</a></td>
        <td style={{color:item.difficulty==10 ? 'green':item.difficulty==20?'#F49D1A':"red"}}>
        {item.difficulty==10 ?"Easy":item.difficulty==20?"Medium":"Hard"}
        </td>
        <td>
        {item.frequency}%
        </td>
        <td>
       <Rating
        name="simple-controlled"
        value={item.rating}
         size="small" 
      />  
        </td>
      </tr>
)}

    </tbody>
  </table>
</div>

    </div>
  )
}

export default QuestionsUser