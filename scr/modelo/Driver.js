'use strict'

import { Schema } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'
import bcrypt from 'bcrypt'
//import DBConnection from '../util/mongoConnect'
//import enviroment from '../config/enviroment'


const DriverSchema = new Schema({
  id: {type: Number, unique: [true, 'UNIQUE_ID'], index: true},
  nameService:{type: String}, 
  status:{type: String},
  avalible:{type: Number}, 
  car: {type : Number }
})

DriverSchema.methods.convertPassword = function convertPassword () {
  this.password = bcrypt.hashSync(this.password, enviroment.saltRound)
}

DriverSchema.plugin(uniqueValidator)

export default DBConnection.model('driver', DriverSchema)