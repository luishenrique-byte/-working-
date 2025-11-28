import { Tarefa } from "./tarefa";

export interface Coluna {
    id:number;
    nome: string;
    tarefas?: Tarefa[];
}
