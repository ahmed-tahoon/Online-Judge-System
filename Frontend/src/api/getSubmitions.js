import axios from "axios"
const getSubmitionAll =  async (data)=>{

  try {
    axios.defaults.headers.common = {
    'Authorization': data.token
    };

    const res = await axios
      .get("http://localhost:5000/api/submit/submitions/"+data.q)
      console.log(res)
    return (res.data)
  } catch(err) {
          console.log(err)

    return err
  }


}
export {getSubmitionAll} 