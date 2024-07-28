const TodosModel = require("../Models/todos");

// fonction ajouter todos
exports.ajouterTodos = (req, res) => {
  const todosObj = {
    content: req.body.content,
    date: req.body.date,
  };
  const Todos = new TodosModel(todosObj);
  Todos.save((error, createdTodos) => {
    if (error) return res.status(400).json({ error }); //erreur d'ajout
    if (createdTodos) {
      return res.status(200).json({ createdTodos });
    }
  });
};

// fonction supprimer todos
exports.supprimerTodos = (req, res) => {
  const id = req.params.idtodos;
  TodosModel.findByIdAndRemove(id).exec((error, todos) => {
    if (error) return res.status(400).json({ error }); //erreur
    if (todos) {
      return res
        .status(200)
        .json({ message: "Todos supprimée avec succées ..." });
    }
  });
};

// fonction modifier todos
exports.modifierTodos = (req, res) => {
  const id = req.params.idtodos;
  const ModifieObj = {
    content: req.body.content,
    date: req.body.date,
  };
  TodosModel.findByIdAndUpdate(id, ModifieObj).exec((error, modifiedTodos) => {
    if (error) return res.status(400).json({ error }); //erreur d'ajout
    if (modifiedTodos) {
      return res
        .status(200)
        .json({ message: "Todos modifiée avec succées ..." });
    }
  });
};

// fonction lister todos
exports.listerTodos = (req, res) => {
  TodosModel.find({}).exec((error, listTodos) => {
    if (error) return res.status(400).json({ error }); //erreur
    if (listTodos) {
      return res.status(200).json({ listTodos });
    }
  });
};

exports.TodosById = (req, res) => {
  const id = req.params.idtodos;
  TodosModel.findById(id).exec((error, todos) => {
    if (error) return res.status(400).json({ error });
    if (todos) {
      return res.status(200).json({ todos });
    }
  });
};
