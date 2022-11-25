import { Selecao } from "./selecao.model";

export interface Jogo {
  id?: number;
  selecaoAId: number;
  selecaoA?: Selecao;
  selecaoBId: number;
  selecaoB?: Selecao;
  criadoEm?: string;
}
