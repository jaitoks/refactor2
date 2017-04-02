import Service from '../modelo/Service'


export const edit = async (id, service) => {
  try {
    let servData = await Service.findOneAndUpdate({'_id': id}, service)
    return servData.toObject()
  } catch (err) {
    return 'se ha presentado un error Daoservice :'+err;
  }
}

export const getById = async (id) => {
  try {
  
    let servData = await Service.findById(id)
    let result

    if (servData) {
      result = servData.toObject()
    }
    return result
  } catch (err) {
    
    return 'se ha presentado un error Daoservice :'+err;
  }
}

export const valStatus = async (id) => {
  
  try {
    let servData = await Service.findById(id)
    if(servData!= null){
        if(servData.status == 6){
            throw new Error(ErrorMessage.JSON_2)
        }
        if(servData.status ==1 && servData.idDriver!=null){
            return servData.toObject();
        }
    }else{
        throw new Error(ErrorMessage.JSON_3)
    }

  }catch (err) {
    return null;
  }
}


