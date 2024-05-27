const mongo=require('mongoose')
console.log(process.env.PORT,"jj")
mongo.connect(`${process.env.MONGO_URL}/payit`)

const userSchema = new mongo.Schema({
    email: String,
    password: String,
})

const User=mongo.model('User',userSchema)

module.exports=User