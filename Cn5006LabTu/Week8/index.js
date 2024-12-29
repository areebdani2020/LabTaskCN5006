mongoose = require('mongoose')
//T A S K 1
const MONGOURL = 'mongodb://localhost:27017'
 mongoose.connect(MONGOURL,{useUnifiedTopology: true});
 db = mongoose.connection;

 db.on('error',function(err)
{
    console.log("Error occured during connection"+err)

});

db.once('connected',function()
{
    console.log('connected  to '+MONGOURL);

});

let PersonScheme = new mongoose.Schema({name:{type:String,required:true},
age:Number,Gender:String,Salary:Number
});

let person_doc = mongoose.model('modelname',PersonScheme,'personCollection');
let doc1 = new person_doc({name:'Jacky',age:23,Gender:"Male",Salary:4000});

doc1
    .save()
    .then((doc1)=>{
        console.log('New Article Has Been Added',doc1);
    }
)
    .catch((err)=>{
        console.error(err)
    }
    
)

//T A S K 2

manyperson= [{
    name:'Simon',Gender:'Female',Salary:45000},
    {name:'Jessy',Gender:'Female',Salary:6000},
    {name:'Coby',Gender:'Male',Salary:35000},
    {name:'Haruki',Gender:'Male',Salary:28000},
]

    person_doc.insertMany(manyperson).then(function()
    {
        console.log("data inserted")
    }).catch(function(error){
        console.log(error)
    })

//T A S K 3

person_doc.find({})

.sort({Salary:1})
.select("name Salary age")
.limit(10)
.exec()
.then(docs=>{
    console.log("showing all the document")
    doc1.ForEach(function(Doc){
        console.log(Doc.age.Doc.Name);
    })
})

.catch(err=>{
    console.error(err)
})

// TASK 4

var givenage = 30

person_doc.find({Gender:"Female",age:{$gt:givenage}})

.sort({Salary:1})
.select("name Salary age")
.limit(10)
.exec()
.then(docs=>{
    console.log("showing age greater than 15".givenage)
    docs.ForEach(function(Doc){
        console.log(Doc.age.Doc.name);
    })
})

.catch(err=>{
    console.error(err)
})


// Task 5
person_doc.countDocuments()
.exec()
.then(count=>{
    console.log("Total Document Count: ",count)
})
.catch(err=>{
    console.error(err)
})


//TASK6

person_doc.deleteMany({age:{$gt:25}})
.exec()
.then(docs=>{
    console.log("deleted document are: ",docs)
})

.catch(function(error){
    console.log(err)
})

person_doc.updateMany({Gender:"Female"},{Salary:5555})
.exec()
.then(docs=>{
    console.log("update")
    console.log(docs);
})

.catch(function(error){
    console.log(error)
})