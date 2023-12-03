import axios from "axios";
import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CreateItem from "./components/CreateItem";
import EditUser from "./components/EditUser";
import Login from "./components/Login";
import ShowItemList from "./components/ShowItemList";
import Signup from "./components/Signup";
import UserContext from "./context/UserContext";

const App = () => {
    const [userData, setUserData] = useState({
        token: undefined,
        user: undefined,
    });
    useEffect(() => {
        const checkLoggedIn = async() => {
            let token = localStorage.getItem("auth-token");
            if (token === null) {
                localStorage.setItem("auth-token", "");
                token = "";
            }
            const tokenResponse = await axios.post(
                "http://localhost:4000/api/users/tokenIsValid", {
                    headers: { "x-auth-token": token } }
            );
            if (tokenResponse.data) {
                const userRes = await axios.get("http://localhost:4000/api/users.", {
                    headers: { "x-auth-token": token }, 
            })
            setUserData({
                token,
                user: userRes.data,
            });
        }
    };
        checkLoggedIn();
    }, []);

    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            <Router>
                <div>
                    <Routes>
                        <Route exact path = '/' element={ <ShowItemList/> } />
                        <Route exact path = '/create-item' element={<CreateItem />} />
                        <Route exact path = '/login' element={ <Login />} />
                        <Route exact path = '/signup' element={ <Signup/> } />
                        <Route exact path = 'edit-user/:id' element={<EditUser/>} />
                    </Routes>
                </div>
            </Router>
        </UserContext.Provider>
    )
}

export default App;