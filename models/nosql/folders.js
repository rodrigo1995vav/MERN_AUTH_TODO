const mongoose = require("mongoose")
const FoldersSchema = new mongoose.Schema(
    {
        name: {
            type:String,
            required: true
        },
        userId:{
            type:String
        }     
    },
    {
        timestamps:true,  //in the upper fields it automatically creates time stamps //TODO createdAt, updateAt
        versionKey: false,
    }
)

module.exports = mongoose.model("folders", FoldersSchema)