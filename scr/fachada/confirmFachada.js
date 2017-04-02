var Regex = require("regex");

import daoDriver from '../dao/daoDriver'
import daoService from '../dao/daoService'
import daoPush from '../dao/daoPush'

class validacion{

    constructor(){
    
    }

    validacion(idService,idDriver){
      try{
        var servicemodel=new daoService().valStatus(idService);
        var drivermodel=new daoDriver().getById(idDriver);
        servicemodel.car=drivermodel.car;
        servicemodel.status=2;
        var servicemodel = new daoService().getById(idService,servicemodel);
        var push=new daoNotification().sendNotication(servicemodel);
        return push;
      } catch (err) {
        return 'error fachada.'; 
      }
        return servicemodel +' '+DriverMsm;
    }

  
}    

export default validacion;
