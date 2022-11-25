import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Selecao } from "src/app/models/selecao.model";


import { Jogo } from "src/app/models/jogo.model";

@Component({
  selector: "app-cadastrar-jogo",
  templateUrl: "./cadastrar-jogo.component.html",
  styleUrls: ["./cadastrar-jogo.component.css"],
})



export class CadastrarJogoComponent implements OnInit {

  selecaoId!: number;
  selecaoA!: Selecao;
  selecaoB!: Selecao;
  selecaoAId!: number;
  selecaoBId!: number;
  selecoes!: Selecao[];
  criadoEm!: string;
  

  constructor(
    private http: HttpClient,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {

        this.http
        .get<Selecao[]>("https://localhost:5001/api/selecao/listar")
        
        .subscribe({
          next: (selecoes) => {
              this.selecoes = selecoes;
            }
          });
  }

  cadastrar(): void {
    let jogo: Jogo = {
      selecaoAId: this.selecaoAId,
      selecaoBId: this.selecaoBId,
      selecaoA: this.selecaoA,
      selecaoB: this.selecaoB,
      criadoEm: this.criadoEm
    }
  
    console.log(jogo);
    this.http.post<Jogo>("https://localhost:5001/api/jogo/cadastrar", jogo).subscribe({
      next: (f) => {
        this._snackBar.open("Jogo cadastrado!", "Ok!", {
          horizontalPosition: "right",
          verticalPosition: "top",
        });
        this.router.navigate(["pages/jogo/listar"]);
      },
    });
  }

}
