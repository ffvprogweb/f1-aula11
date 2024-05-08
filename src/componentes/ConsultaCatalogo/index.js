import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { listaDeProdutos } from "../ProdutoServico";
import { useNavigate } from "react-router-dom";
import "./styles.css";
function ConsultaCatalogo() {
  const [produtos, setProdutos] = useState([]);
  const navigator = useNavigate();
  useEffect(() => {
    listaDeProdutos()
      .then((response) => {
        setProdutos(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  function cadastrarProduto() {
    navigator("/cad-produto");
  }
  return (
    <div className="container">
      <h5 className="text-center">Consulta Catalogo </h5>
      <button className="btn btn-primary mb-2" onClick={cadastrarProduto}>
        Cadastrar Produto
      </button>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Descrição</th>
            <th>Categoria</th>
            <th>Custo</th>
            <th>Quant</th>
          </tr>
        </thead>
        <tbody className="Catalogo">
          {produtos.map((produto) => (
            <tr key={produto.id}>
              <td>{produto.id}</td>
              <td>{produto.descricao}</td>
              <td>{produto.categoria}</td>
              <td>{produto.custo}</td>
              <td>{produto.quantidadeNoEstoque}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default ConsultaCatalogo;
