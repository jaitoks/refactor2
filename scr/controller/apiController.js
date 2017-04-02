import FachadaConfirm from '../fachada/confirmFachada' 


var bodyParser = require('body-parser');
module.exports = function(app){

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    var facSol=new FachadaConfirm();
    
    app.post('/api/confirm',function(req,res){
        var idService=req.body.serviceId;
        var idDriver=req.body.driverId;
        
        if(idService!=null ){
            res.send(facSol.validacion(idService,idDriver));
        }else{
            res.send('Error 3');
        }
    }); 
       
}