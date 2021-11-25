/**
 * importing the data file required
 */
const members = require(`../public/members.json`);
const fs = require("fs");
const uuid = require("uuid");

let Members = {};

/**
 * list all members from data file
 * @returns members data
 */
Members.getAll = () => {
    return members;
};

/**
 * get details of member by id
 * @param  id 
 * @returns member having corresponding id
 */
Members.getMemberById = (id) => {
    return members.filter((x) => x.id === id);
};

/**
 * Adding new member 
 */

Members.addNew = async (memberObj) => {
    const id = uuid.v4();
    memberObj.id = id;
    members.push(memberObj);
    fs.writeFile(`public/members.json`, JSON.stringify(members), (err) => {
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
