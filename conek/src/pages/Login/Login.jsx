import './Login.css'
import { validacaoDadosUsuarioLogin } from '../../features/validarUserComAPi'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function Login() {
  const [dadosLogin, setDadosLogin] = useState({
    nome: '',
    senha: ''
  })

  const handleInputChange = (event) => {
    const {name,value} = event.target;
    setDadosLogin((prevState) => ({
      ...prevState,
      [name]: value
    }))
    console.log(dadosLogin.nome,dadosLogin.senha)
  }

  const navigate = useNavigate()
  const executarAtividadeDoBotao = async () => {
    const {nome, senha} = dadosLogin
    const consultaTeste = await validacaoDadosUsuarioLogin(nome, senha)
    if (consultaTeste) {
      navigate("/home")
    }
  }

  return (
      <div className="bodyEspacoLogin">
        <h1>Conek</h1>
        <div className="espacoInputsEButton">
          <input type="text" 
            name='nome'
            placeholder='Usuario ou email.'
            value={dadosLogin.nome}
            onChange={handleInputChange}
            />
          <input type="text"
            name='senha'
            placeholder='Senha.'
            value={dadosLogin.senha}
            onChange={handleInputChange}
            />
          <button onClick={executarAtividadeDoBotao}>Entrar</button>
        </div>
      </div>
  )
}

export default Login
