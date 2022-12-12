import React from 'react'

const test = () => {
  return (
    <div>
       <div className="h-100 black text-white">
  <div className="d-flex justify-content-between flex-md-row flex-column">
    {/* problem */}
    <div className="problem grey rounded overflow-hidden ">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home-tab-pane"
            type="button"
            role="tab"
            aria-controls="home-tab-pane"
            aria-selected="true"
          >
            {" "}
            <i className="fa-solid fa-code me-2" />
            Description
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile-tab-pane"
            type="button"
            role="tab"
            aria-controls="profile-tab-pane"
            aria-selected="false"
          >
            <i className="fa-solid fa-gears me-2" />
            Solution
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact-tab-pane"
            type="button"
            role="tab"
            aria-controls="contact-tab-pane"
            aria-selected="false"
          >
            <i className="fa-regular fa-clock me-2" />
            Sumbmissions
          </button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active p-4 border border-top-0 maxH"
          id="home-tab-pane"
          role="tabpanel"
          aria-labelledby="home-tab"
          tabIndex={0}
        >
          <h5>{Q?Q.sequence+". "+Q.title:null} </h5>
          <Rating
        name="simple-controlled"
        value={Q?Q.rating:null}
         size="small" 
      />
      {}
          <p className="text-success fw-semibold">Easy</p>
          <hr />
          <div id="desc">
          </div>
        </div>
        <div
          className="tab-pane fade show p-4 border border-top-0 maxH"
          id="profile-tab-pane"
          role="tabpanel"
          aria-labelledby="home-tab"
          tabIndex={0}
        >
          <div id="desc"></div>
        </div>
        <div
          className="tab-pane fade show p-4 border border-top-0 maxH"
          id="contact-tab-pane"
          role="tabpanel"
          aria-labelledby="home-tab"
          tabIndex={0}
        >
          <div>
            <div className="d-flex  mb-3">
              <div>
                <h6 className="text-success m-0">Accepted</h6>
                <p className="text-secondary">Lorem, ipsum dolor.</p>
              </div>
              <h6 className="text-primary ms-5 ps-5">c++</h6>
            </div>
            <div className="d-flex  mb-3">
              <div>
                <h6 className="text-success m-0">Accepted</h6>
                <p className="text-secondary">Lorem, ipsum dolor.</p>
              </div>
              <h6 className="text-primary ms-5 ps-5">c++</h6>
            </div>
            <div className="d-flex  mb-3">
              <div>
                <h6 className="text-success m-0">Accepted</h6>
                <p className="text-secondary">Lorem, ipsum dolor.</p>
              </div>
              <h6 className="text-primary ms-5 ps-5">c++</h6>
            </div>
            <div className="d-flex  mb-3">
              <div>
                <h6 className="text- m-0">Wrong Answer</h6>
                <p className="text-secondary">Lorem, ipsum dolor.</p>
              </div>
              <h6 className="text-primary ms-5 ps-5">c++</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* solution */}
    <div className="col-6">
      <div className="a ">
        <select onChange={(e)=>change(e.target.value)} id="inputState" className="form-select a">
          <option value="javascript" selected="" className="mb-3">
            Javascript
          </option>
          <option value="java">java</option>
          <option value="python">Python</option>
        </select>
      </div>
      <div className="code mt-1">
        <div className=" mb-2 h-50 coding overflow-auto">
          

<AceEditor
  placeholder={"Enter your code here"}
  mode={mode}
  height={264}
  width='100%'
  theme="one_dark"
  name="blah2"
  onChange={onChange}
  fontSize={14}
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
        <div className="p-4 border ahmed h-50">
          <div className="d-flex justify-content-between">
            <h6>Wrong Answer</h6>
            <p>Rumtime: 104ms</p>
          </div>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">
              Inputs
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Example input placeholder"
            />
          </div>
          <div className="row">
            <div className="mb-3 col">
              <label htmlFor="formGroupExampleInput2" className="form-label">
                Output
              </label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="Another input placeholder"
              />
            </div>
            <div className="mb-3 col">
              <label htmlFor="formGroupExampleInput2" className="form-label">
                Expected
              </label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="Another input placeholder"
              />
            </div>
              <button onClick={run} className="btn btn-success">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default test