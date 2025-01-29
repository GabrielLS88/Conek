import {verificarDadosCliente} from '../services/authServices'


export async function validacaoDadosUsuarioLogin(name,password){
    const colentandoDados = await verificarDadosCliente(name,password);
    const validandoStatusESetandoAutorizacao = await verificadoSeUserEstaAutorizado(colentandoDados,name,password);
    return validandoStatusESetandoAutorizacao;
}

async function verificadoSeUserEstaAutorizado(colentandoDados) {
    if(colentandoDados.status == 200){
        if(colentandoDados.cadastro == "ativo"){
            localStorage.setItem("acesso","liberado");
            console.log(`Seu acesso esta liberado ${colentandoDados.cliente}`);
            return true;
        }
        if(colentandoDados.cadastro != "ativo"){
            localStorage.setItem("acesso","bloqueado");
            console.log(`Seu acesso esta negado ${colentandoDados.cliente}`);
            return false;
        }
    }
    localStorage.setItem("acesso","bloqueado");
    alert(`Desculpa ouve um imprevisto em nosso sistema, tente novamente`);
    return false;
}