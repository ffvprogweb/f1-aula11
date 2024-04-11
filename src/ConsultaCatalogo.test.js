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
test("ct02 - verificar o comportamento da funcao consulta catalogo com sucesso", async () => {
  const { getByText } = render(<App />);
  await waitFor(() => {
    expect(getByText(/eletrobomba/i)).toBeInTheDocument();
  });
});

test("ct03 - verifica o comportamento da funcao consulta catalogo com sucesso", async () => {
  //dado que existem 3 produtos cadastrados
  render(<App />);

  // quando consulto o catalogo de produtos
  await waitFor(() => {
    const tabelaProdutos = screen.getByRole("table");
    const linhasProdutos = tabelaProdutos.querySelectorAll("tbody > tr");

    // então a quantidade de linhas e três
    expect(linhasProdutos.length).toBeGreaterThan(3);
  });
});
