import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import axios from "axios";
import Swal from "sweetalert2";
@Component({
  selector: "app-todos-edit",
  templateUrl: "./todos-edit.component.html",
  styleUrls: ["./todos-edit.component.scss"],
})
export class TodosEditComponent implements OnInit {
  idTodos;
  todos = {
    content: "",
    date: "",
  };
  constructor(route: ActivatedRoute, private router: Router) {
    // idt:any = this.id;
    this.idTodos = route.snapshot.params["id"];
    console.log(this.idTodos);
  }

  ngOnInit(): void {
    this.getTodosById();
  }

  getTodosById() {
    axios
      .get("http://127.0.0.1:3000/todos/" + this.idTodos + "/get")
      .then((res) => {
        console.log(res.data);
        this.todos = res.data.todos;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  EditTodos(form: NgForm) {
    const data = form.value;

    axios
      .post("http://127.0.0.1:3000/todos/" + this.idTodos + "/modifier", data)
      .then((res) => {
        console.log(res);
        Swal.fire({
          title: "Success !",
          text: "Task successfully modified",
          icon: "success",
          confirmButtonText: "ok",
        });
        form.reset();
        this.router.navigate(["todos/list"]);
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: "Error !",
          text: "An addition problem",
          icon: "error",
          confirmButtonText: "ok",
        });
      });
  }
}
