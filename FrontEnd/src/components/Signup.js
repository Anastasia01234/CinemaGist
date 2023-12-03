import axios from "axios";
import React, { useContext, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";

function Signup() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] =  useState();
    const [username, setUsername] = useState();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const { setUserData } = useContext(UserContext);

    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const newUser = { email, password, confirmPassword, username };
            await axios.post("http://localhost:4000/api/users/signup", newUser);
            const loginRes = await axios.post("http://localhost:4000/api/users/login", {
                email,
                password,
            });
            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user,
            });
            localStorage.setItem("auth-token", loginRes.data.token);
            setLoading(false);
            navigate('/');
        } catch (err) {
            setLoading(false);
            err.response.data.msg && setError(err.response.data.msg);
        }
    }

    return (
        <div>
            <div>
                <h2>Sign Up</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="name"
                            required
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group id="password-confirm">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control
                            type="password"
                            required
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Button disabled={loading} type="submit">Sign Up</Button>
                </Form>
            </div>
            <div>
                Already have an account?<Link to="/login">Log in</Link>
            </div>
        </div>
    );
}

export default Signup;