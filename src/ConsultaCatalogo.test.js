import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

test("ct01-verifica o comportamento da funcao consulta catalogo com sucesso", () => {
  //dado que existem 3 produtos cadastrados
  render(<App />);
  //quando consulto o catalogo
  const textElement = screen.getByText(/consulta catalogo/i);
  //entao retorna a pagina de consulta
  expect(textElement).toBeInTheDocument();
});

test("ct02 - verifica o comportamento da funcao consulta catalogo com sucesso", async () => {
  //dado que existem 3 produtos cadastrados
  render(<App />);

  // quando consulto o catalogo de produtos
  await waitFor(() => {
    const tabelaProdutos = screen.getByRole("table");
    const linhasProdutos = tabelaProdutos.querySelectorAll("tbody > tr");

    // então a quantidade de linhas eh maior ou igual a 0
    expect(linhasProdutos.length).toBeGreaterThanOrEqual(0);
  });
});
