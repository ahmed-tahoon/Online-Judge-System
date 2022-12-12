import React, { useEffect, useState } from 'react'
import { getSubmitionAll } from '../api/getSubmitions'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AceEditor from 'react-ace';
import { compile } from '../api/compiler';
import './style.css'
import "../../node_modules/ace-builds/src-min-noconflict/theme-tomorrow"
import "../../node_modules/hover.css/css/hover-min.css"
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const user = JSON.parse(localStorage.getItem("UserData")) ;

const Submitions = (question) => {
      const [open, setOpen] = React.useState(false);
      const [item , setItem] = useState({})
  const handleOpen = (item) => {
    setItem(item)
    setOpen(true);

  }
  const handleClose = () => setOpen(false);
    const [submissions,setSubmitions]  =useState([])
    useEffect(()=>{

        const data = {
            token : user.token,
            q:question.question
        }

      getSubmitionAll(data).then((data)=>{
        console.log(data)
        setSubmitions(data)
      }).catch((err)=>{
        console.log(err)
      })


    },[])
  



  return (
    <div className='overflow-auto'>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
     
     <div className="d-flex overflow-auto mb-3 justify-content-between border-bottom border-secondary">
              <div>
              {item.status=="pass"? 
                <h6 className="text-success m-0 green">Accepted</h6>
              :
                <h6 className="text-danger m-0">Wrong Answer</h6>
               }
                <p className="text-secondary">{new Date(item.timesubmitted).toLocaleString()}</p>
              </div>
              <h6 className="text-primary ms-5 ps-5">{item.language}</h6>
              <h6 className="text-dark ms-5 ps-5">{item.runtime/100+"s"}</h6>

            </div>
                            <i  onClick={() => {navigator.clipboard.writeText(item.solution)}} class="fas fa-copy"></i>

            <div className="border">
       <AceEditor
  placeholder="Placeholder Text"
  mode="javascript"
  disabled={true}
  theme="tomorrow"
  name="blah2"
  height={450}
  width={"100%"}
  onLoad={()=>{console.log("fdsf")}}
  onChange={()=>{console.log("fdsf")}}
  fontSize={14}
  showPrintMargin={true}
  showGutter={true}
  highlightActiveLine={true}
  value={item.solution}
  setOptions={{
  enableBasicAutocompletion: false,
  enableLiveAutocompletion: false,
  enableSnippets: false,
  showLineNumbers: true,
  tabSize: 2,
  }}/>
            </div>
     
        </Box>
      </Modal>
    <div className="overflow-auto">
            {submissions.map((item)=>
                <>

            <div onClick={()=>handleOpen(item)} className="d-flex justify-content-between mb-3 mt-1  border-bottom border-secondary hvr-bob hvr-shadow box">
              <div>
              {item.status=="pass"? 
                <h6 className="text-success m-0 green">Accepted</h6>
              :
                <h6 className="text-danger m-0">Wrong Answer</h6>
               }
                <p className="text-secondary">{new Date(item.timesubmitted).toLocaleString()}</p>
              </div>
              <h6 className="text-primary ms-5 ps-5">{item.language}</h6>
              <h6 className="text-white ms-5 ps-5">{item.runtime/100+"S"}</h6>
            </div>
                </>
            )}
            



     </div>    
    </div>
  )
}

export default Submitions