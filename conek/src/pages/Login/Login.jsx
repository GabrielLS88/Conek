import './Login.css'
import {validacaoDadosUsuarioLogin} from '../../features/validarUserComAPi'
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate()
  const executarAtividadeDoBotao = async () => {
    const consultaTeste = await validacaoDadosUsuarioLogin("Gabriel","1234")
    if(consultaTeste){
      navigate("/home")
    }
  }

  return (
    <>
     <h1>Login</h1>
     <button onClick={executarAtividadeDoBotao}>Testar</button>
    </>
  )
}

export default Login
