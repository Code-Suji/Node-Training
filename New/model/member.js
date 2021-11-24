const members = require(`../public/members.json`);
const fs = require("fs");
const uuid = require("uuid");

let Members = {};

Members.getAll = () => {
    return members;
};
Members.getMemberById = (id) => {
    return members.filter((x) => x.id === id);
};

Members.addNew = async (memberObj) => {
    const id = uuid.v4();
    memberObj.id = id;
    members.push(memberObj);
    await fs.writeFile(`public/members.json`,JSON.stringify(members),(err) => {
            if (err) {
                console.log(err);
                return false;
            } else {
                return true;
            }
        }
    );
};

module.exports = Members;
