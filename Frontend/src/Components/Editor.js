import React,{useState,useEffect} from 'react'
import brace from 'brace';
import AceEditor from 'react-ace';
import { compile } from '../api/compiler';
import "../../node_modules/ace-builds/src-min-noconflict/theme-monokai"
import "../../node_modules/ace-builds/src-min-noconflict/theme-twilight"
import Rating from '@mui/material/Rating';
import "../../node_modules/ace-builds/src-min-noconflict/mode-java"
import "../../node_modules/ace-builds/src-min-noconflict/mode-javascript"
import "../../node_modules/ace-builds/src-min-noconflict/mode-python"
import "../../node_modules/ace-builds/src-min-noconflict/mode-c_cpp"
import "../../node_modules/ace-builds/src-noconflict/ext-language_tools";
import './bootstrap.min.css'
import "./style.css"
import "../fontawesome-free-6.2.1-web/css/fontawesome.css"
import "../fontawesome-free-6.2.1-web/css/brands.css" 
import "../fontawesome-free-6.2.1-web/css/solid.css"
import ClockLoader from "react-spinners/ClockLoader";
import { getcode } from '../api/getcode';
import { useParams } from 'react-router-dom';
import Submitions from './Submitions';
import Solution from './Solution';
const user = JSON.parse(localStorage.getItem("UserData")) ;

const Editor = () => {

   const [code,setCode] = useState("");
   const [mode,setMode] = useState('javascript')
   const [data,setData] = useState('')
   const [lang , setLang] = useState('javascript')
   const [error,setError] = useState('')
   const [main,setMain] = useState(false)
   const [placeholder , setPlaceholder] = useState('')
   const [loading ,setLoading] = useState(false)
   const [accepted ,setAcceted ] = useState(false)

   const [input , setInput] = useState('')
   const [output , setOut ] = useState('')
   const [expected , setExpected ] = useState('');
  const [m,setm]=useState("")

   const [Q,setQ] = useState()
   const params = useParams()

function onChange(newValue) {
  setCode(newValue);
}

const change =(lan)=>{
  if(lan=='c++' || lan=='c')
  {
    if(lan=='c++')
       setLang('c++')
    else
       setLang('c')  

    setMode('c_cpp')
  

  }
  else
  {

setLang(lan)
setMode(lan)

  }

}

useEffect(()=>{

getcode(params.uniquename).then((data)=>{
setQ(data.Q)
  if(lang=="javascript")
  {
    setCode(data.Q.jsmain)
  }
  else if(lang=="java")
  {
    setCode(data.Q.mainfunction)

  }
  else
  {
    setCode(data.Q.pythonmain)
  }
console.log(data)
setData('')

document.getElementById("desc").innerHTML = data.Q.description
 })

},[lang])

const run = ()=>{
  


    setMain(true)
    setLoading(true)
    setError('')
    setData('')
       const data ={
        username:user.id,
        uniquename:Q.uniquename,
        language:lang,
        solution:code
    }
    compile(data).then((res)=>{
      console.log(res)
      setMain(true)
      if(res.status=="fail")
      {
         setAcceted(false)
         let o = res.message.split(';');
         setInput(o[0])
         setOut(o[1])
         setExpected('['+o[2]+']');
         
      }
      else if(res.status=="pass")
      {
           setm(res.message)
           setAcceted(true)
      }
      else if(res.status=="err_exe" ||res.status=="err_cmp")
      {
        setAcceted(false)
        setError(res.message)
      }
      setLoading(false)

    }).catch((err)=>{
      console.log("H" , err)
      setAcceted(false)
      setMain(true)
      setError("Error")
      setLoading(false)
    }
    )
}

const clear = ()=>{
    setError('')
    setData('')
}


return (
    <div>
<div className="h-100 black text-white mt-4">
  <div className="d-flex justify-content-between flex-md-row flex-column">
    {/* problem */}
    <div className=" problem grey rounded overflow-hidden">
      <ul
        className="nav nav-tabs" id="myTab" role="tablist"
      >
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            <i className="fa-solid fa-code me-2" />
            Description
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-profile"
            type="button"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            <i className="fa-solid fa-gears me-2" />
            Solution
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-contact-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-contact"
            type="button"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
          >
            <i className="fa-regular fa-clock me-2" />
            Sumbmissions
          </button>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active p-3 hh"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
          tabIndex={0}
        >
          <div className="d-flex justify-content-between align-items-center">
            <h5>{Q?Q.sequence+". "+Q.title:null}</h5>
            <div>
               <Rating
        name="simple-controlled"
        value={Q?Q.rating:null}
         size="small" 
      />
            </div>
           {Q?<h5 className=" fw-semibold" style={{color:Q.difficulty==10 ? 'green':Q.difficulty==20?'#F49D1A':"red"}}>{Q?Q.difficulty==10 ?"Easy":Q.difficulty==20?"Medium":"Hard":null}</h5>:null}
          </div>
          <hr />
          <div id="desc">
          </div>
        </div>
        <div
          className="tab-pane fade p-3"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
          tabIndex={0}
        >
          <Solution mode={mode} value={Q?Q.solution:""}/>
        </div>
        <div
          className="tab-pane fade p-3 overflow-auto"
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
          tabIndex={0}
        >
        <div className="overflow-auto">

           <Submitions  question={params.uniquename}/>
        </div>
         
        </div>
      </div>
    </div>
    {/* solution */}
    <div className="col-5 grey solution rounded overflow-hidden mt-md-0 mt-2">
      <div className="d-flex justify-content-between py-2">
        <div className="col-md-3 ms-2">
         <select onChange={(e)=>change(e.target.value)} id="inputState" className="form-select a form-select grey border-secondary text-white">
          <option value="javascript" selected="" className="mb-3 ">
            Javascript
          </option>
          <option value="java">java</option>
          <option value="python">Python</option>
        </select>
        </div>
        <div>
          <button onClick={run}  className="btn btn-secondary me-4 lightGreen border-0">
            Submit
          </button>
        </div>
      </div>
      <div className="code black d-flex flex-column justify-content-between align-items-between ">
        {/*----------- write code --------*/}
   <div className="border coding overflow-auto grey rounded-bottom">
 <AceEditor
  placeholder={"Enter your code here"}
  mode={mode}
  height={263}
  width='100%'
  theme="twilight"
  name="blah2"
  onChange={onChange}
  fontSize={12}
  showPrintMargin={true}
  showGutter={true}
  highlightActiveLine={true}
  value={code}
  setOptions={{
  enableBasicAutocompletion: true,
  enableLiveAutocompletion: true,
  enableSnippets: true,
  showLineNumbers: true,
  tabSize: 0,
  }}/>
        </div>

{main?<>

{error ?<>
<div className="p-3 result grey rounded overflow-auto">
  <div className="d-flex justify-content-between">
 <p className='text-danger'>{error}</p>
  </div>
</div>

</>: <>

{loading ?
<div className="d-flex flex-column justify-content-center align-items-center p-3 result grey rounded overflow-hidden"> <ClockLoader
  color="#f6fef9"
  size={70}
  speedMultiplier={3}
/> </div>:<>
             {accepted ?<div className='d-flex flex-column justify-content-center align-items-center p-3 result grey rounded overflow-hidden'>
               <i className="fa-regular fa-square-check fs-1 green mb-1" />
          <h5 className="green">Accepted</h5>
          <p>{m}</p>
             </div> :
             <div className="p-3 result grey rounded overflow-hidden">
  <div className="d-flex justify-content-between">
    <h6 className="text-danger">Wrong Answer</h6>
  </div>
  <div className="mb-3">
    <label htmlFor="formGroupExampleInput" className="form-label">
      Inputs
    </label>
    <input
      value={input}
      type="text"
      className="form-control grey2 border-0 text-white"
      id="formGroupExampleInput"
      placeholder="Example input placeholder"
      disabled=""
      defaultValue={12}
    />
  </div>
  <div className="row">
    <div className="mb-3 col">
      <label htmlFor="formGroupExampleInput2" className="form-label">
        Output
      </label>
      <input
      value={output}
        type="text"
        className="form-control grey2 border-0 text-white"
        id="formGroupExampleInput2"
        placeholder="Another input placeholder"
        disabled=""
        defaultValue={12}
      />
    </div>
    <div className="mb-3 col">
      <label htmlFor="formGroupExampleInput2" className="form-label">
        Expected
      </label>
      <input
        value={expected}
        type="text"
        className="form-control grey2 border-0 text-white"
        id="formGroupExampleInput2"
        placeholder="Another input placeholder"
        disabled=""
        defaultValue={12}
      />
    </div>
  </div>
              </div>

         }
</>}
</>}




</>:<>
<div className="d-flex flex-column justify-content-center align-items-center p-3 result grey rounded overflow-hidden"> 
  <p>You must run your code first</p>
 </div>

</>}
   





      </div>
    </div>
  </div>
</div>

  
    
    
    </div>
  )
}

export default Editor

