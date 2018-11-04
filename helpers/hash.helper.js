const bcrypt = require('bcryptjs')

module.exports={
    encode : (password)=>{
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(password,salt);
        return hash
    },

    
    decode : (password,passwordOld,salt=10)=>{
        return bcrypt.compareSync(password,passwordOld);
    }
}