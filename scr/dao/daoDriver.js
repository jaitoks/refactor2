
import Driver from '../modelo/Driver'


export const edit = async (id, driver) => {
  try {
   
    let userData = await Driver.findOneAndUpdate({'_id': id}, driver)
    return userData.toObject()
  } catch (err) {
    return 'se ha presentado un  DaoDriver:'+err; 
  }
}

export const getById = async (id) => {
  try {
    
    let userData = await Driver.findById(id)
    let result

    if (userData) {
      result = userData.toObject()
    }

    return result
  } catch (err) {
    return 'se ha presentado un error DaoDriver :'+err;
  }
}