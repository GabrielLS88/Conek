import './Home.css';
import CsvReader from '../../components/CsvReader/CsvReader'
import NavBar from '../../components/navbar/navbar.jsx';
import { useState } from 'react';

function Home() {

  const [isVisible, setIsVisible] = useState(false);
  const [idRoteador, setIdRoteador] = useState(0);
  const [dadosRoteadorSelect, setDadosRoteadorSelect] = useState({
    id: '',
    numero: '',
    relatorios: []
  })

  let retornoAPiEX = [
    { id: 1, nome: "Roteador 1" },
    { id: 2, nome: "Roteador 2" },
    { id: 3, nome: "Roteador 3" }
  ]

  let consultaRouter = [
    {
      idRoteador: 1,
      numberRouter: 34997801829,
      relatorios: ["Exemplo de apresentação 1", "Testes"],
    }, {
      idRoteador: 2,
      numberRouter: 34997801829,
      relatorios: ["Exemplo de apresentação 2", "Testes"],
    }, {
      idRoteador: 3,
      numberRouter: 34997801829,
      relatorios: ["Exemplo de apresentação 3"],
    }
  ]

  const verificarSePopRelatoriosEstaAtivo = (idRoteadorParaOpen, ultimoIdRoteador) => {
    idRoteadorParaOpen == ultimoIdRoteador ? (isVisible ? setIsVisible(false) : setIsVisible(true)) : setIsVisible(true);
    setIdRoteador(idRoteadorParaOpen);
  }

  const montarEstruturaHtmlRelatorio = () => {
    const dadosRoteador = consultaRouter.filter(indice => indice.idRoteador == idRoteador)
    if (dadosRoteador.length > 0) {
      return (
        <div className="divPrincipalElemento">
          <div className="numeroRoteador">
            <h1>{dadosRoteador[0].idRoteador}</h1>
          </div>
          <div className="relatoriosListados">
            {dadosRoteador[0].relatorios.map((relatorio, index) => (
              <h1>{relatorio}</h1>
            ))}
          </div>
        </div>
      )
    }
    return null
  }

  return (
    <div className='bodyPageHome'>
      <NavBar />
      <div className="headerRouters">
        <div className="spaceButtonAdd">
          <button className='btnAddRoteador'>Adicionar</button>
          {retornoAPiEX.map((item) => (
            <div className="blocoOpcoes" key={item.id}>
              <button className='buttomOpcaoRoteador' onClick={() => (verificarSePopRelatoriosEstaAtivo(item.id, idRoteador))}>{item.nome}
              </button>
            </div>
          ))}
        </div>
      </div>
      <section className='spaceApresentacaoDetalhesRouter'>
        <div style={{ display: isVisible ? "block" : "none" }} className="blocoDadosInfo">
          {montarEstruturaHtmlRelatorio()}
        </div>
      </section>
    </div>
  )
}

export default Home
