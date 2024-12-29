const dob = "12/27/2009"
const getStudnetname = ()=>{
    return "Daniyal"
}

const getCampusName = ()=>{
    return "Dockland Campus"
}

exports.getName = getStudnetname
exports.getCampus = getCampusName

exports.getdob = dob

exports.StudentGrade = (marks)=>{
    if(marks>50 && marks< 70)
        return "B Grade"
    else"A grade"
}