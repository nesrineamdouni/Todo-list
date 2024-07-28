import { Component, OnInit } from "@angular/core";
import axios from "axios";
import Swal from "sweetalert2";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.scss"],
})
export class TodoListComponent implements OnInit {
  // todos = []
  todos = [
    {
      _id: "",
      content: "",
      date: "",
    },
  ];

  constructor() {}

  ngOnInit(): void {
    // appel
    this.getTodosList();
  }

  // définition
  getTodosList() {
    axios
      .get("http://127.0.0.1:3000/todos/lister")
      .then((res) => {
        console.log(res.data.listTodos);
        this.todos = res.data.listTodos;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  DeleteTodos(id: any) {
    if (confirm("Are you sure you want to delete this task")) {
      axios
        .get("http://127.0.0.1:3000/todos/" + id + "/supprimer")
        .then((res) => {
          Swal.fire({
            title: "Success !",
            text: "Task successfully deleted",
            icon: "success",
            confirmButtonText: "ok",
          });
        })
        .catch((err) => {
          Swal.fire({
            title: "Error !",
            text: "A deletion problem",
            icon: "error",
            confirmButtonText: "ok",
          });
        });
    }
  }
}
