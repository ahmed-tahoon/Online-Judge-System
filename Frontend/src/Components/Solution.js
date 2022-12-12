import React from 'react'
import AceEditor from 'react-ace';

const Solution = (props) => {
  return (
    <div>

<i  onClick={() => {navigator.clipboard.writeText(props.value)}} class="fas fa-copy"></i>
    
     <AceEditor
  placeholder={"Enter your code here"}
  mode={props.mode}
  height={500}
  width='100%'
  theme="twilight"
  name="blah2"
  fontSize={12}
  showPrintMargin={true}
  showGutter={false}
  highlightActiveLine={true}
  value={props.value}
  setOptions={{
  enableBasicAutocompletion: true,
  enableLiveAutocompletion: true,
  enableSnippets: true,
  showLineNumbers: true,
  tabSize: 0,
  }}/>
    
    
    
    
    
    
    </div>
  )
}

export default Solution