const express = require('express')
const fs = require('fs')
let bodyParser =  require('body-parser')
let app = express();

//This Is A Exercise 1
app.get('/',function(req,res){
    res.send("Hello It Is My First Express Application")
})

//This Is A Exercise 2
app.get('/about',function(req,res){
    res.send("Its A New Response From Express But About Page")
})

app.get('/user/:userId/books/:bookId',function(req,res){
    res.send(req.params)
})


//This Is A Exercise 3

app.get('/GetStudent',function(req,res){
    fs.readFile(__dirname+'/Student.json','utf-8',function(err,data){
        res.send({
            data:JSON.parse(data),
        });
    });
});

app.get('/GetStudentid/:id',(req,res)=>{
    studentdata={}
    fs.readFile(__dirname+'/Student.json','utf-8',function(err,data){
        let students=JSON.parse(data)
        let Student=students["Student"+req.params.id]
        console.log("Studnet",Student)

        res.send({
            data:Student
        })


    })
    
}

)

//This Is Exercise 4

app.get('/studnetinfo',function(req,res){
    res.sendFile('Stuform.html',{root: __dirname});
})

app.post('/submit-data',function(req,res){
    let name = req.body.firstName+''+req.body.lastName+'';
    let Age = req.body.myAge+' Gender: ' +req.body.gender+'';
    console.log('Qualification '+req.body.Qual)

    res.send({
        status: true,
        message: 'Form Details',
        data:{name:name,age:Age,Qualification:Qual}
    })
})


app.listen(9000,function(){
    console.log('Server Is Running')
});