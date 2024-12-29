/* first exercise */
function NewEmployee(name,salary){
    console.log("Hello "+ name+" your salary will be for your role is "+ salary)
}
NewEmployee("Daniyal",800)


/* Second Task */
const EmSkill = (skill) =>{
    console.log("your expertise is in "+ skill)

}

EmSkill("python")

/* Third Task */

const studentinfo = require('./studentinfo')
console.log("Name Of the student: "+ studentinfo.getName())
console.log("Student Campus: "+studentinfo.getCampus())
console.log("Student Date Of Birth: "+ studentinfo.getdob)
console.log("Student expected Grade In His year 1: "+studentinfo.StudentGrade(55))
console.log("Student Grade In His year 1: "+studentinfo.StudentGrade())


/* ------*/

const person = require('./person')

Person1 = new person ("Daniyal",19,"wontgiveyou@my.com")

console.log("Heres My fake detail: " + Person1.person)



