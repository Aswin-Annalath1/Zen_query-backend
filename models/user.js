const mongoose = require('mongoose')
const bcrypt = require('bcrypt')         // Here we need to hash password

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true, "Username is required"],  //To make it must needed
        trim: true,                                //To avoid unwanted white space written  
        unique: true,                            //To be unique when compared with Db
    },
    role:{
        type: String,
        default: "user"
    },
    email:{
        type: String,
        required: [true, "Email is required"],  //To make it must needed
        trim: true,                                //To avoid unwanted white space written  
        unique: true, 
    },
    password: {
        type: String,
        required: [true, "Password is required"],  //To make it must needed

    }
})

// Here we are hashing our password before saving it to database...
userSchema.pre("save", async function(next){
    try{
        const salt = await bcrypt.genSalt(10)    //salt will mixmatch it again 10 times after hash..
        const hashedPassword = await bcrypt.hash(this.password, salt) //this. tells to do to the current password entered by the user
        this.password = hashedPassword     //Here the password entered is converted to hashpassword
        next() 
    }
    catch(error){
        next(error)
    }
})

//Here we are creating schema for login (re-entering) requirements...(login is method created by us and called in usercontroller.js )
userSchema.statics.login = async function(email,password){    //statics help use login outside (in usercontroller.js)
    try{
        const user = await this.model("User").findOne({email: email})
        if(!user){                            //If no such user
            throw new Error("User not found")
        }
        const isMatch = await bcrypt.compare(password, user.password) 
        if(!isMatch){
            throw new Error("Incorrect password")
        }
        return user      //If all correct then user details are send to usercontroller.js file...
    }
    catch(error){
        throw new Error(error)
    }
}

const User = mongoose.model("User", userSchema) ////Here code automatically call Db(User) and tell to do this job of storing data...//model is name or person in Db to whom code will communicate
module.exports = User


