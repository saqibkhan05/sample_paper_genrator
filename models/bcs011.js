var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bcs011 = new Schema({
    time_zone:  {required:true, type:String},

    Question_no:    {required:true, type:String},

    Question_part:  {required:true, type:String},

    Marks:  {required:true, type:Number},

    Block_no:   {required:true, type:Number},

    Unit_no:    {required:true, type:Number},

    tag:    {required:true, type:String},

    Question:   {required:true, type:String},


});

module.exports = mongoose.model('bcs011', bcs011);
