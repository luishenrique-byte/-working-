export interface Tarefa {
    id: number;
    titulo: string;
    concluida: boolean;
    descricao?: string; //'?' significa q é opcional
}
