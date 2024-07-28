const express = require("express");
const router = express.Router();
const TodosController = require("../Controllers/TodosController");

router.get("/lister", TodosController.listerTodos);
router.post("/ajouter", TodosController.ajouterTodos);
router.get("/:idtodos/supprimer", TodosController.supprimerTodos);
router.post("/:idtodos/modifier", TodosController.modifierTodos);
router.get("/:idtodos/get", TodosController.TodosById);

module.exports = router;
