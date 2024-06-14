const express = require('express')
const app =express();


const studentsRouter = express.Router();
const studentsController = require('../Controllers/studentsController')

studentsRouter.get('/',studentsController.Index);
studentsRouter.get('/:id',studentsController.Search);
studentsRouter.post('/',studentsController.Ajouter);
studentsRouter.put('/:id',studentsController.Modifier);
studentsRouter.delete('/:id',studentsController.Supprimer);


module.exports=studentsRouter;