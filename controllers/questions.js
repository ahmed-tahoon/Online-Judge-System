const Question = require('../models/question')



const create_question = async (req,res)=>{
var question = new Question({
    sequence: req.body.sequence,
    title: req.body.title,
    description: req.body.description,
    mainfunction: req.body.mainfunction,
    jsmain: req.body.jsmain,
    uniquename:req.body.uniquename,
    pythonmain: req.body.pythonmain,
    solution: req.body.solution,
    difficulty: req.body.difficulty,
    frequency: req.body.frequency,
    rating: req.body.rating,
    hints: req.body.hints
  });
try {

  const newQ =  await question.save()
  res.status(200).json({
        success: true,
        message: `Q has been added successfully!`,
        Q: newQ
      });

 } catch (error) {
   console.log(error)
        res.status(400).json(error);
 }

}


const question_all = async (req,res)=>{
     try {
       const data =  await Question.find({})
          .sort({ sequence: "asc" })
      
        res.status(200).json(data);

     } catch (error) {
        res.status(400).json(error);
     }

}



const GetOne = async (req,res)=>{
     const Q_id = req.params.id 
     try {
      
      const Q_one = await Question.findOne({uniquename:Q_id})

       res.status(200).json({
        success: true,
        Q: Q_one
      });

     } catch (error) {
      
        res.status(400).json(error);


     }
  


}



module.exports={question_all,create_question,GetOne}