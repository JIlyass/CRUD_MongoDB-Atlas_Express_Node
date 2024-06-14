const {Module}=require('module')
const student = require('../Models/Student')

const Index= async (req,resp)=>{
    try{
        let data = await student.find({}).exec()
        resp.status(200).json(data)
        // resp.status(200).json({
        //     "success":true,
        //     "data":data,
        //     "message":"all is good :) "
        // })
    }catch(err){
        console.log('Erreur : '+err); 
        resp.status(400).json({
            "success":false,
            "data":null, 
            "message":"problem "
        })
    }
}


const Search= async (req,resp)=>{
    try{
        let idS = req.params['id']
        let data = await student.find({_id:idS}).exec();
       
        if(data){
            resp.status(200).json(data)
        }else{
            resp.status(200).json({
                "success":true,
                "message":"user introuvables  "
            })
        }
    }catch(err){
        console.log('Erreur : '+err); 
        resp.status(200).json({
            "success":false,
            "data":null,
            "message":"problem "
        })
    }
}

const Ajouter = async (req,resp)=>{
    try{
        let newUser = await student.create(req.body)
        if(newUser){
            resp.status(200)
            // resp.status(200).json({
            //     "success":true,
            //     "newUser":newUser,
            //     "message":"Inseré avec succes !  "
            // })
        }

    }catch(err){
        console.log("err: "+err);
        resp.status(400).json({
            "success":false,
            "data":null,
            "message":"problem "
        });
    }
}


const Modifier = async (req,resp)=>{
    try{
        let idUpdated = req.params['id'];
        let UserUpdated = await student.findOneAndUpdate({_id:idUpdated},req.body)
        if(UserUpdated){
            resp.status(200).json({
                "success":true,
                "UserUpdated":UserUpdated,
                "message":"modifié avec succes !  "
            });
        }else{
            resp.status(400).json({
                "success":false,
                "message":"user introuvable !  "
            });
        }

    }catch(err){
        console.log("err: "+err);
        resp.status(400).json({
            "success":false,
            "data":null,
            "message":"problem  liéé à la base de donnee"
        });
    }
}

const Supprimer = async (req,resp)=>{
    try{
        let id_to_delete = req.params['id'];
        let oldUser =await  student.findOneAndDelete({_id:id_to_delete})
        console.log("id params===>"+id_to_delete);
        console.log("User deleted===> "+oldUser);
        if(oldUser){
            resp.status(200).json({
                "success":true,
                "UserDeleted":student.find({}).exec(),
                "message":"Supprimé avec succes !  "
            })
        }else{
            resp.status(403).json({
                success:false,
                data:newPlayer,
                message:"aucun student avec l'id "+id_to_delete+ " n'existe"
            }); 
        }
        


    }catch(err){
        console.log("erreur : "+err);
        resp.status(400).json({
            "success":false,
            "message":"problem de connexion a la base donnee !!! "
        })
    }
}

module.exports = {Index, Search, Ajouter, Modifier, Supprimer}