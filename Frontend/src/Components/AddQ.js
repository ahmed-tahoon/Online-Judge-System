import React,{useState} from 'react'
import { Editor } from "react-draft-wysiwyg";
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import 'draft-js/dist/Draft.css';
import brace from 'brace';
import AceEditor from 'react-ace';
import "../../node_modules/ace-builds/src-min-noconflict/mode-python"
import "../../node_modules/ace-builds/src-min-noconflict/mode-javascript"
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddQ = () => {

const [Sequence,setSequence] = useState()
const [title , setTitle] = useState("")
const [data , setData ]= useState(EditorState.createEmpty())
const [difficulty , setDif] = useState(10)
const [frequency , setFrequency] = useState(0);
const [description ,setDesc] =useState()
const [hints , setHints] = useState('')
const [uniqueName , setUnique]  = useState("")
const [jsmain,setJsmain] = useState('');
const [pythonmain,setPythonmain] = useState('');
const [solution,setSolution] = useState('')
const [mainfunction ,setMainfunction]=useState('')
const [value, setValue] = React.useState(2);

const onEditorStateChange=(editorState) => {
    setData(editorState)
     setDesc(draftToHtml(convertToRaw(data.getCurrentContent())))


  };

  const HandelTitile = (e)=>{
      const t = e.target.value;
      setTitle(t);
      let un = ""
      for(let i =0 ;i < t.length ; i++)
      {
        if(t[i]==' ')
        {
          un+='-'
        }
        else
        un+=t[i].toLowerCase()
      }

      setUnique(un)
  }
const nav = useNavigate()
const handleClick = async ()=>{

  const data = {
    sequence: Sequence,
    title: title,
    description: description,
    mainfunction: mainfunction,
    jsmain: jsmain,
    uniquename:uniqueName,
    pythonmain: pythonmain,
    solution: solution,
    difficulty: difficulty,
    frequency: frequency,
    rating: value,
    hints: hints
  }
await axios.post('http://localhost:5000/api/questions',data).then((D)=>{
toast.success('Add Success', {
position: "top-right",
autoClose: 2000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
});
nav('/')
}).catch((D)=>{
toast.error(D.response.data.errors, {
position: "top-right",
autoClose: 2000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
});
  })

}
  return (
    <div>
    <div className="" style={{backgroundColor: '#E3E4E4'}} >
<div className="d-flex flex-column py-3 align-items-center">
  <div className="d-flex flex-column ml-3 w-50">
  <div className="d-flex flex-column align-items-center flex-lg-row align-items-lg-start m-auto">
    <h2>Create New Question</h2>
  </div>
  <hr />
  <div className="mb-3 col-lg-6">
     <input
        value={Sequence} onChange={(e)=>setSequence(e.target.value)} 
        type="text"
        className="form-control"
        id="formGroupExampleInput"
        placeholder="Sequence"
      />
   
</div>

  <input
        value={title} onChange={(e)=>HandelTitile(e)} 
        type="text"
        className="form-control"
        id="formGroupExampleInput"
        placeholder="Title"
   />
   <input
        value={uniqueName}
        type="text"
        className="form-control mt-2 "
        id="formGroupExampleInput"
        disabled
   />
<Editor
  toolbarClassName="toolbarClassName"
  wrapperClassName="bg-white demo-wrapper mt-2"
  editorClassName="demo-editor"
  editorState={data}
  onEditorStateChange={onEditorStateChange}
/>
Java Function:

 <AceEditor
  placeholder={"Enter your code here"}
  mode="java"
  theme="tomorrow"
  name="blah2"
  onChange={(e)=>setMainfunction(e)}
  fontSize={12}
  showPrintMargin={true}
  showGutter={true}
  highlightActiveLine={true}
  value={mainfunction}
  setOptions={{
  enableBasicAutocompletion: true,
  enableLiveAutocompletion: true,
  enableSnippets: true,
  showLineNumbers: true,
  tabSize: 0,
  }}/>

Javascript Function:

 <AceEditor
  placeholder={"Enter your code here"}
  mode="javascript"
  theme="tomorrow"
  name="blah2"
  onChange={(e)=>setJsmain(e)}
  fontSize={12}
  showPrintMargin={true}
  showGutter={true}
  highlightActiveLine={true}
  value={jsmain}
  setOptions={{
  enableBasicAutocompletion: true,
  enableLiveAutocompletion: true,
  enableSnippets: true,
  showLineNumbers: true,
  tabSize: 0,
  }}/>


Python Function:



 <AceEditor
  placeholder={"Enter your code here"}
  mode="python"
  theme="tomorrow"
  name="blah2"
  onChange={(e)=>setPythonmain(e)}
  fontSize={12}
  showPrintMargin={true}
  showGutter={true}
  highlightActiveLine={true}
  value={pythonmain}
  setOptions={{
  enableBasicAutocompletion: true,
  enableLiveAutocompletion: true,
  enableSnippets: true,
  showLineNumbers: true,
  tabSize: 0,
  }}/>

Solution

 <AceEditor
  placeholder={"Enter your code here"}
  mode="python"
  theme="tomorrow"
  name="blah2"
  onChange={(e)=>setSolution(e)}
  fontSize={12}
  showPrintMargin={true}
  showGutter={true}
  highlightActiveLine={true}
  value={solution}
  setOptions={{
  enableBasicAutocompletion: true,
  enableLiveAutocompletion: true,
  enableSnippets: true,
  showLineNumbers: true,
  tabSize: 0,
  }}/>
  Hints
  <input
        value={hints} onChange={(e)=>setHints(e.target.value)} 
        type="text"
        className="form-control "
        id="formGroupExampleInput"
        placeholder="hints"
      />
Difficulty
<select onChange={(e)=>setDif(e.target.value)} class="form-select" aria-label="Default select example">
  <option selected value="10">Easy</option>
  <option value="20">Medium</option>
  <option value="30">Hard</option>
</select>
Frequency
<div class="input-group mb-3">
  <input value={frequency} onChange={(e)=>setFrequency(e.target.value)} type="number" class="form-control" placeholder="Frequency" aria-label="Username" aria-describedby="basic-addon1"/>
</div>

<Typography component="legend">Rating</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />   

    </div>

<button onClick={handleClick} class="btn btn-primary px-4 me-2 mb-5">Sumbit</button>







  </div>
  </div>

     </div>

  )
}

export default AddQ