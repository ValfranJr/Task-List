import { renderHook } from "@testing-library/react";
import { useContadorDeTarefas } from "../hooks/ContadorDeTarefas";

jest.mock("../lib/tarefas", () => ({
  tarefas: [
    { id: 1, nome: "Tarefa 1" },
    { id: 2, nome: "Tarefa 2" },
  ],
}));

test("retorna o número de tarefas na lista", () => {
  const { result } = renderHook(() => useContadorDeTarefas());
  expect(result.current.contadorDeTarefas).toBe(2);
});
