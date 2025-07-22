import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

export const Private = () => {

    const Navigate = useNavigate();

    useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      Navigate("/login");
    }
  }, []);

    return (
        <div className="d-flex flex-column align-items-center">
            <h1 className="text-center">Pagina privada</h1>
            <button onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                Navigate("/");
            }}>Cerrar sesion</button>
        </div>
    )
}