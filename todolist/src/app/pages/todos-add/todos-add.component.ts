import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import axios from "axios";

import Swal from "sweetalert2";
@Component({
  selector: "app-todos-add",
  templateUrl: "./todos-add.component.html",
  styleUrls: ["./todos-add.component.scss"],
})
export class TodosAddComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  AddTodos(addForm: NgForm) {
    // console.log(addForm.value);
    const data = addForm.value;

    axios
      .post("http://127.0.0.1:3000/todos/ajouter", data)
      .then((res) => {
        console.log(res);
        Swal.fire({
          title: "Success !",
          text: "Task successfully added",
          icon: "success",
          confirmButtonText: "ok",
        });
        addForm.reset();
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
