const members = require(`./members.json`)

let Members = {}

Members.getAll = ()=>{
    return members
}
Members.getMemberById = (id)=>{
    return members.filter( x=> x.id === id)
}

module.exports = Members