import { Navigate, Outlet } from "react-router-dom";



export const PrivateRoute = () => {
  let acesso = false;
  const validacaoDeAcesso = localStorage.getItem("acesso");

  if (validacaoDeAcesso == "liberado") {
    acesso = true;
  }

  return acesso ? <Outlet /> : <Navigate to="/" />;
};