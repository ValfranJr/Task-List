"use client";

import { useState } from "react";
import { useContadorDeTarefas } from "../hooks/ContadorDeTarefas";
import { tarefas } from "../lib/tarefas";

const NovaTarefa = () => {
  const [nome, setNome] = useState("");
  const [lista, setLista] = useState(tarefas);
  const { contadorDeTarefas, setContadorDeTarefas } = useContadorDeTarefas();

  const adicionarTarefa = () => {
    if (nome.trim() === "") {
      return false;
    }
    if (nome.length < 3) {
      return false;
    }
    setLista([...lista, { id: contadorDeTarefas + 1, nome: nome }]);
    setContadorDeTarefas(contadorDeTarefas + 1);
    setNome("");
  };
  return (
    <div className="bg-purple-100 flex items-center justify-center min-h-screen p-4">
      <div className="bg-white rounded-lg shadow-lg w-96">
        <div className="bg-purple-500 rounded-t-lg px-4 py-2 flex items-center justify-between">
          <h1 className="text-white text-xl font-semibold ">
            Lista de Tarefas
          </h1>
        </div>
        <div className="p-4">
          <div className="flex mb-4">
            <input
              placeholder="Adicione uma nova tarefa..."
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  adicionarTarefa();
                }
              }}
              className="flex-grow p-2 rounded-md border border-gray-300"
            />
            <button
              onClick={adicionarTarefa}
              className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Adicionar
            </button>
          </div>
          <div className=" rounded-t-lg px-2 py-1 flex items-center justify-between">
            <p className="text-gray-600 text-sm font-semibold ">
              Tarefas adicionadas: {contadorDeTarefas}
            </p>
          </div>
          <ul>
            <li className="flex items-center justify-between p-2 border-gray-200">
              <span className="flex-grow">
                <ul>
                  <li className="flex items-center justify-between p-2 border-gray-200">
                    <div className="flex-grow">
                      <ul>
                        {lista.map((tarefa, index) => (
                          <li
                            key={index}
                            className="flex items-center justify-between p-4 border-b border-gray-200"
                          >
                            <span className="flex-grow">{tarefa.nome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                </ul>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NovaTarefa;
