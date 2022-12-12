import axios from "axios"


const getcode = async (qN)=>{
  try {

    const res = await axios
      .get("http://localhost:5000/api/questions/"+qN)
    return (res.data)
  } catch(err) {
    return err
  }


}
export  {getcode} 