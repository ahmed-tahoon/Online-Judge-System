const Question = require('../models/question')
const RunnerManager = require('../Judge/RunnerManager')
const Submission =  require('../models/submission')
const moment = require('moment');
const submission = require('../models/submission');
const SleepUtil = require("../utils/").SleepUtil;


const submission_run =async (req,res,next)=>{
  SleepUtil.sleep();

  var newsubmit =new Submission({
    username: req.body.username,
    questionname: req.body.uniquename,
    language: req.body.language,
    solution: req.body.solution,
    status:"initial",
    timeupdated:moment(new Date(Date.now())),
    timesubmitted:moment(new Date(Date.now())),
    runtime: 0

  })

   Submission.findOne(
  {
    username:newsubmit.username,
    questionname:newsubmit.questionname,
    language:newsubmit.language,
    status:"initial"
  }
  ,
  (err,submission)=>{
    if(err)
    {
             console.log(err)

    }
    if(!submission)
    {
      newsubmit.save({new:true},(err,newsubmit)=>{
        if(err)
        {
             console.log(err)

        }
         run(req, res, next, newsubmit);
      })
    }
    else
    {
      submission.solution=newsubmit.solution
      submission.timesubmitted=moment(new Date(Date.now()))


     Submission.findByIdAndUpdate(submission._id ,
      {
        $set:submission
      },
       {new : true}
     ,
      (err,submission)=>{
        if(err)
        {
             console.log(err)

        }
        run(req, res, next, submission);
      }
      )
    }
  }
)

}
   





function run(req, res, next, submission) {

  var start = moment(new Date(Date.now()));

  // 2. Then, run the solution to get the test result
  RunnerManager.run(
    submission.questionname,
    submission.language,
    submission.solution,
    function(status, message) {
      const result = {
        status,
        message
      };
      if (status == "pass" || status == "fail") {
        var end = moment(new Date(Date.now()));

        var ms = moment(end, "DD/MM/YYYY HH:mm:ss").diff(
          moment(start, "DD/MM/YYYY HH:mm:ss")
        );

        // 3. Find the submission
        Submission.findById(submission.id, function(err, submission) {
          // update status
          submission.status = status;
          submission.runtime = ms;
          submission.timesubmitted = moment(new Date(Date.now()));

          //console.log(submission);
          // 4. Update the submission
          submission.save(function(err) {
           console.log("d",result )
               res.status(200).json(result);
          });
        });
      } else {
        res.status(200).json(result);
      }
    }
  );
}


const getSubmitionAll = (req,res)=>{
 

  const userId = req.user._id
  const question = req.params.filter

  console.log(userId)
   
   Submission.find({
    username: userId,
    questionname: question,
    status: { $ne: "initial" }
  })
    .sort({ timesubmitted: "desc" })
    .exec(function(err, submissions) {
      if (err) return next(err);
      res.status(200).json(submissions);
    });


}


module.exports={submission_run,getSubmitionAll}