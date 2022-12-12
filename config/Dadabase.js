const mongoose = require('mongoose');
url="mongodb+srv://ahmed:ahmed12345@cluster0.cgzzj.mongodb.net/online_judge2?retryWrites=true&w=majority";


mongoose.connect(url , (err)=>{
if (err)
{
    console.log(err)
}
else
{
    console.log("Connected To Database Success")
}

} )