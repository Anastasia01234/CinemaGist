import axios from "axios";
import React, { useContext, useState } from "react";
import { Alert, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import './Card.css';

function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { setUserData } = useContext(UserContext);

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        try {
            const loginUser = {email, password};
            const loginRes = await axios.post("http://localhost:4000/api/users/login", loginUser)
            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user,
            });

            localStorage.setItem("auth-token", loginRes.data.token);
            navigate('/');
        } catch (err) {
            setLoading(false);
            err.response.data.msg && setError(err.response.data.msg);
        }
    }

    return (
        <div className="card">
            <div>
                <h2> Log In</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" required onChange={e => setEmail(e.target.value)}/>
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" required onChange={e => setPassword(e.target.value)}/>
                    </Form.Group>
                    <button disabled={loading} type="submit">Log In</button>
                </Form>
            </div>
            <div>Need an account?<Link to="/signup">Sign up</Link></div>
        </div>
    )
}

export default Login;
