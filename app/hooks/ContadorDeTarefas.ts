import { useState } from "react";
import { tarefas } from "../lib/tarefas";

const contador = tarefas.length;

export const useContadorDeTarefas = () => {
  const [contadorDeTarefas, setContadorDeTarefas] = useState(contador);

  return {
    contadorDeTarefas,
    setContadorDeTarefas,
  };
};