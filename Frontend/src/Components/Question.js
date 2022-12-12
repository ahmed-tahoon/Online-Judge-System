import React,{useState,useEffect} from 'react'
import brace from 'brace';
import AceEditor from 'react-ace';
import { compile } from '../api/compiler';
import "../../node_modules/ace-builds/src-min-noconflict/theme-monokai"
import "../../node_modules/ace-builds/src-min-noconflict/theme-one_dark"

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
import { getcode } from '../api/getcode';
const Question = () => {

   const [code,setCode] = useState('');
   const [mode,setMode] = useState('python')
   const [data,setData] = useState('')
   const [lang , setLang] = useState('python')
   const [error,setError] = useState('')
   const [main,setMain] = useState('python')
   const [placeholder , setPlaceholder] = useState('')

function onChange(newValue) {
  setCode(newValue);
}

const change =(lan)=>{

  if(lan=='c++' || lan=='c')
  {
    setMain(lan)
    if(lan=='c++')
       setLang('c++')
    else
       setLang('c')  

    setMode('c_cpp')
  

  }
  else
  {


setMain(lan);
setLang(lan)
setMode(lang)

  }

}

useEffect(()=>{

getcode(lang).then((data)=>{
setCode(data.code)
setData('')
 })

},[lang])

const run = ()=>{
    setError('')
    setData('')
       const data ={
        lang:lang,
        code:code
    }
    compile(data).then((res)=>{
        console.log(res.status)
        if(res.status==0)
        {
            setData(res.message)
        }
        else
        {
            setError(res.message)
        }

    }).catch((err)=>
    setError(err.message)
    )
}

const clear = ()=>{
    setError('')
    setData('')
}


  return (
    <div>
    <div
  className="d-flex w-100 bottom bg-light border-secondary border-top"
  id="bottom"
>
  {/* languages */}
  <div className="px-2 border-end border-secondary grey " id="lang">
    <ul
      className="nav nav-pills mt-5 mb-1 d-flex flex-column align-items-center"
      id="pills-tab"
      role="tablist"
    >
      <li
        className="nav-item mb-2 border border-secondary rounded mt-2"
        role="presentation"
      >
        <button
          className="nav-link active text-light"
          id="pills-home-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-home"
          type="button"
          role="tab"
          aria-controls="pills-home"
          aria-selected="true"
          onClick={()=>change("python")}
        >
          <i className="fa-brands fa-python fs-2" />
        </button>
      </li>
      <li
        className="nav-item mb-2 border rounded border-secondary"
        role="presentation"
      >
        <button
          className="nav-link text-light"
          id="pills-profile-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-profile"
          type="button"
          role="tab"
          aria-controls="pills-profile"
          aria-selected="false"
          onClick={()=>change("c")}
        >
          <i className="fa-solid fa-c fs-3" />
        </button>
      </li>
      <li
        className="nav-item mb-2 border rounded border-secondary"
        role="presentation"
      >
        <button
          className="nav-link px-2 text-light"
          id="pills-contact-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-contact"
          type="button"
          role="tab"
          aria-controls="pills-contact"
          aria-selected="false"
          onClick={()=>change("c++")}
        >
          <i className="fa-solid fa-c fs-4" />
          ++
        </button>
      </li>
      <li
        className="nav-item mb-2 border rounded border-secondary"
        role="presentation"
      >
      </li>
      <li
        className="nav-item mb-2 border rounded border-secondary"
        role="presentation"
      >
        <button
          className="nav-link text-light"
          id="pills-contact-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-contact"
          type="button"
          role="tab"
          aria-controls="pills-contact"
          aria-selected="false"
          onClick={()=>change("java")}
        >
          <i className="fa-brands fa-java fs-2" />
        </button>
      </li>
      <li
        className="nav-item mb-2 border rounded border-secondary"
        role="presentation"
      >
        <button
          onClick={()=>change("javascript")}
          className="nav-link text-light"
          id="pills-contact-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-contact"
          type="button"
          role="tab"
          aria-controls="pills-contact"
          aria-selected="false"
        >
          <i className="fa-brands fa-js fs-2" />
        </button>
      </li>
      <li
        className="nav-item mb-2 border rounded border-secondary"
        role="presentation"
      >
      </li>
      <li
        className="nav-item mb-2 border rounded border-secondary"
        role="presentation"
      >
      </li>
    </ul>
  </div>
  
  {/* code */}
  <div className=" w-100 d-md-flex d-none">
    {/* main */}
    <div className="w-60 border-end border-secondary dark_blue">
      <div className="d-flex justify-content-between px-3 py-2 border-bottom border-secondary align-items-end grey">
        <h6 className="text-white fw-normal">{main}</h6>
        <div className="d-flex align-items-center">
          <i
            className="fa-solid fa-expand fs-5 text-secondary p-2 border me-3 border-secondary text-light"
            id="max"
          />
          <i
            className="fa-solid fa-compress fs-5 text-secondary p-2 border me-3 border-secondary text-light"
            id="min"
          />
          {/* <i class="fa-regular fa-moon fs-5 text-secondary p-2 border me-3 border-secondary text-white"></i> */}
          <button onClick={run} className="btn btn-primary">Run</button>
        </div>
      </div>
      
     <AceEditor
  placeholder={"Enter your code here"}
  mode={mode}
  theme="one_dark"
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
    {/* output */}
    <div className="w-50 dark_blue">
      <div className="d-flex justify-content-between px-3 py-2 border-bottom border-secondary align-items-end grey">
        <h6 className="text-white fw-normal">Output</h6>
        <button onClick={clear} className="btn btn-outline-secondary text-white">Clear</button>
      </div>
      <div className="p-3">
        {error?<span className="tc" Style="white-space: pre-line">{error}</span>
        :<span className="text-white" Style="white-space: pre-line">{data}</span>}
      </div>
    </div>
  </div>
  {/* small screen */}
  <div className="d-md-none d-block w-100 dark_blue">
    <ul
      className="nav nav-pills mb-3 d-flex justify-content-between py-2 border-bottom grey border-secondary"
      id="pills-tab"
      role="tablist"
    >
      <i className="fa-regular fa-moon fs-5 text-light p-2 me-3 hidden" />
      <div className="d-flex">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active text-white"
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            main
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link text-white"
            id="pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-profile"
            type="button"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            Output
          </button>
        </li>
      </div>
      <i className="fa-regular fa-moon fs-5 text-secondary p-2 me-3 hidden" />
    </ul>
    <div className="tab-content" id="pills-tabContent ">
      <div
        className="tab-pane fade show active"
        id="pills-home"
        role="tabpanel"
        aria-labelledby="pills-home-tab"
        tabIndex={0}
      >
        ...
      </div>
      <div
        className="tab-pane fade"
        id="pills-profile"
        role="tabpanel"
        aria-labelledby="pills-profile-tab"
        tabIndex={0}
      />
      <div
        className="tab-pane fade"
        id="pills-contact"
        role="tabpanel"
        aria-labelledby="pills-contact-tab"
        tabIndex={0}
      />
      <div
        className="tab-pane fade"
        id="pills-disabled"
        role="tabpanel"
        aria-labelledby="pills-disabled-tab"
        tabIndex={0}
      >
        ...
      </div>
    </div>
  </div>
</div>

    
    
    </div>
  )
}

export default Question
