import axios from "axios"


const getQuestions = async (lang)=>{
  try {

    const res = await axios
      .get("http://localhost:5000/api/questions/")
    return (res.data)
  } catch(err) {
    return err
  }


}
export  {getQuestions} 