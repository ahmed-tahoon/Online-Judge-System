const mongoose = require('mongoose');
url="";


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
