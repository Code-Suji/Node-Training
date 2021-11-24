const members = require(`./members.json`)
const fs =require('fs')
const uuid = require('uuid');

let Members = {}

Members.getAll = ()=>{
    return members
}
Members.getMemberById = (id)=>{
    return members.filter( x=> x.id === id)
}

Members.addNew = (memberObj) => {
    const id = uuid.v4()
    memberObj.id = id
    let obj = JSON.parse(members)
    obj.push(memberObj)
    let data=JSON.stringify(obj)
    // console.table(members)
    
    fs.writeFile(`./members.json`,data,(err)=>{
        if(err){
            throw err
            console.log(err)
            return false    
        }
        else{
            return true
        }
    })
    console.table(JSON.stringify(obj))

}

module.exports = Members