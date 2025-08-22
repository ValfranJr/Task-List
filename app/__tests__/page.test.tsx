import { render, screen } from "@testing-library/react";
import Home from "../page";

jest.mock("../lib/tarefas", () => ({
  tarefas: [
    { id: 1, nome: "Tarefa 1" },
    { id: 2, nome: "Tarefa 2" },
  ],
}));

test("renderiza a lista de tarefas",() => {
  render(<Home />);
  expect(screen.getByText("Tarefa 1")).toBeInTheDocument();
  expect(screen.getByText("Tarefa 2")).toBeInTheDocument();
});