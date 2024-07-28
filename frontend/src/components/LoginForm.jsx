import { useState } from "react";
import api from "../api";
import {useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";

function LoginForm({route, method}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const title = method === "login" ? "Login" : "Register";

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        try { 
            const res = await api.post(route, { username, password })
            if(method === "login") {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate("/months")
            } else {
                navigate("/login")
            }
        }
        catch (error) {
            alert(error)
        }
        finally {
            setLoading(false)
        }
    };

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                    <label className="label">
                    <span className="label-text">Username</span>
                    </label>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} 
                    type="text" placeholder="username" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                    <span className="label-text">Password</span>
                    </label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} 
                    type="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary" type="submit">{title}</button>
                </div>
            </form>
        </div>
        </div>
    </div>
  );
}

export default LoginForm