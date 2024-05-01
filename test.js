const bcrypt = require("bcrypt");
async function hash() {
    const hashPassword = await bcrypt.hash("attae123456789" , 12);
    console.log(hashPassword)
};


hash();

