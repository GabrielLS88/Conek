import {verificarDadosCliente} from '../services/authServices'


export async function validacaoDadosUsuarioLogin(name,password){
    const colentandoDados = await verificarDadosCliente();
    const validandoStatusESetandoAutorizacao = await verificadoSeUserEstaAutorizado(colentandoDados);
    return validandoStatusESetandoAutorizacao;
}

async function verificadoSeUserEstaAutorizado(colentandoDados) {
    if(colentandoDados.status == 200){
        if(colentandoDados.cadastro == "ativo"){
            localStorage.setItem("acesso","liberado");
            alert(`Seu acesso esta liberado ${colentandoDados.cliente}`);
            return true;
        }
        if(colentandoDados.cadastro != "ativo"){
            localStorage.setItem("acesso","bloqueado");
            alert(`Seu acesso esta negado ${colentandoDados.cliente}`);
            return false;
        }
    }
    localStorage.setItem("acesso","bloqueado");
    alert(`Desculpa ouve um imprevisto em nosso sistema, tente novamente`);
    return false;
}