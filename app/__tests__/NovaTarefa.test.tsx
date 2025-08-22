import { fireEvent, render, screen } from "@testing-library/react";
import NovaTarefa from "../components/NovaTarefa";
import "@testing-library/jest-dom";

test("adiciona tarefa, renderiza e verifica se a tarefa foi adicionada", () => {
  render(<NovaTarefa />);
  const input = screen.getByRole("textbox");
  const button = screen.getByRole("button", { name: "Adicionar" });

  fireEvent.change(input, { target: { value: "" } });
  expect(button).toBeDisabled();

  fireEvent.change(input, { target: { value: "    " } });
  expect(button).toBeDisabled();

  fireEvent.change(input, { target: { value: "Tarefa" } });
  expect(button).not.toBeDisabled();
  fireEvent.click(button);

  expect(screen.getByText("Tarefa")).toBeInTheDocument();
});
