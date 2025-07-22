import { useState } from "react";
import { useNavigate } from "react-router-dom"; 

export const Register = () => {

    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        let new_user = {
            "username": username,
            "email": email,
            "password": password
        }

        await fetch("https://expert-doodle-7v5q44p5pvq9hpqwx-3001.app.github.dev/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(new_user),
        })

        navigate("/login");
    }

    return (
        <div className="d-flex justify-content-center bg-light">
            <div className="card p-4 shadow" style={{ minWidth: "300px", maxWidth: "400px", width: "100%" }}>
                <h2 className="mb-4 text-center">Registro</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">
                            Nombre de usuario
                        </label>
                        <input
                            type="username"
                            className="form-control"
                            id="username"
                            placeholder="Username"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
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
                        Registrarse
                    </button>
                </form>
            </div>
        </div>
    );
};
