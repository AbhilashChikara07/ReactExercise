import React from "react";
import "../../features/LoginSignup/Component/StyleCss/LoginSignup.Style.css";
import ImageComponent from "../../features/LoginSignup/Component/ImageComponent";
import Button from "../../features/LoginSignup/Component/Button.Component.jsx";
import Strings from "../../res/String.jsx";
import { useNavigate } from "react-router-dom";
import { AuthRepository } from "../../data/repository/authRepository";
import { setUser } from "../../store/authSlice.js";
import { useDispatch } from "react-redux";

import {
    signInUser,
    signUpUser,
    signInWithGoogle
} from "../../firebase/auth.js";



const SignIn = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // LOGIN
    const handleLogin = async () => {
        if (!email || !password) {
            setError("Email and password are required");
            return;
        }

        setLoading(true);
        setError("");

        try {
            const user = await AuthRepository.login(email, password);
            dispatch(setUser(user));
            console.log("Logged in user:", user);
            alert("Login successful");
            navigate("/shop");
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // GOOGLE LOGIN
    const handleGoogleLogin = async () => {
        setError("");
        setLoading(true);
        try {
            var value = await signInWithGoogle();
            console.log("Google Login Value:", value);
            alert("Google login successful");
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="main-container">
            <div className="auth-container">
                {/* LEFT IMAGE */}
                <ImageComponent />

                {/* RIGHT FORM */}
                <div className="auth-form">
                    <h2>{Strings.WELCOME_BACK}</h2>
                    <p className="subtitle">{Strings.LOGIN_SUBTITLE}</p>

                    {error && <p className="error-text">{error}</p>}

                    <input
                        type="email"
                        placeholder={Strings.EMAIL_PLACEHOLDER}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder={Strings.PASSWORD_PLACEHOLDER}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {/* LOGIN */}
                    <Button
                        label={Strings.LOGIN}
                        onClick={handleLogin}
                        disabled={loading}
                    />

                    {/* SIGN UP */}
                    <Button
                        label={Strings.SIGN_UP}
                        onClick={() => navigate("/sign-up")}
                        disabled={loading}
                    />

                    <div className="divider">{Strings.OR}</div>

                    {/* GOOGLE */}
                    <button
                        className="google-btn"
                        onClick={handleGoogleLogin}
                        disabled={loading}
                    >
                        <img
                            src="https://www.svgrepo.com/show/475656/google-color.svg"
                            alt="Google"
                        />
                        {Strings.CONTINUE_WITH_GOOGLE}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignIn;