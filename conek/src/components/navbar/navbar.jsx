import './NavBar.css'

function NavBar() {
    return (
        <div className="bodyNavBar">
            <div className="spacoOpcoesMenu">
                <a href="#">Inicio</a>
                <a href="/growth">Growth</a>
            </div>
            <div className="spaceOpcaoSair">
                <a href="/">Sair</a>
            </div>

        </div>
    )

}

export default NavBar