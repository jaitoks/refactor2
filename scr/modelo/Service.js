'use strict'

import { Schema } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'
import bcrypt from 'bcrypt'
//import DBConnection from '../util/mongoConnect'
//import enviroment from '../config/enviroment'


const ServiceSchema = new Schema({
  id: {type: Number, unique: [true, 'UNIQUE_ID'], index: true},  
  servicename: { type: String, unique: [true, 'UNIQUE_USERNAME'], index: true },
  status:{type:Number},
  idDriver:{type: Number}, 
  car: { type : Number  },
  user:{ type:String}
})

ServiceSchema.methods.convertPassword = function convertPassword () {
  this.password = bcrypt.hashSync(this.password, enviroment.saltRound)
}

ServiceSchema.plugin(uniqueValidator)

export default DBConnection.model('service', ServiceSchema)