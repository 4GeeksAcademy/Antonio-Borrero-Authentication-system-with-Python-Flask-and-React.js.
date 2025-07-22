import { useState } from "react";
import { useNavigate } from "react-router-dom"; 

export const Login = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        let user = {
            "email": email,
            "password": password
        }

        const response = await fetch("https://expert-doodle-7v5q44p5pvq9hpqwx-3001.app.github.dev/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
        const data = await response.json();
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        navigate("/Private");
    }

    return (
        <div className="d-flex justify-content-center bg-light">
            <div className="card p-4 shadow" style={{ minWidth: "300px", maxWidth: "400px", width: "100%" }}>
                <h2 className="mb-4 text-center">Inicio de sesion</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Correo electrónico
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="correo@ejemplo.com"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Contraseña"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                        Iniciar sesión
                    </button>
                </form>
            </div>
        </div>
    );
};