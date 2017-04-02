

export const sendNotication = async (service) => {
  try {
    if(service.user==null)  
         throw new Error(ErrorMessage.JSON_0)
    if(service.user==1){
        //logica para el push ios
    }   
  else{
      ////logica para el push android
  }
  
    return 'tu servicio ha sido confirmado'
  } catch (err) {
    return 'se ha presentado un error Daoservice :'+err;
  }
}