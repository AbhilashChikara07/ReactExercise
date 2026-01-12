import React from "react";
import "../../features/LoginSignup/Component/StyleCss/LoginSignup.Style.css";
import ImageComponent from "../../features/LoginSignup/Component/ImageComponent";
import Button from "../../features/LoginSignup/Component/Button.Component.jsx";
import Strings from "../../res/String.jsx";
import { signUpUser, signInWithGoogle } from "../../firebase/auth.js";
import { useNavigate } from "react-router-dom";


const SignupPage = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [error, setError] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const navigate = useNavigate();


    // SIGN UP
    const handleSignUp = async () => {
        if (!email || !password || !confirmPassword) {
            setError("All fields are required");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        setError("");
        setLoading(true);
        try {
            await signUpUser(email, password);
            alert("Account created successfully");
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // GOOGLE SIGN UP
    const handleGoogleSignUp = async () => {
        setError("");
        setLoading(true);
        try {
            await signInWithGoogle();
            alert("Signed up with Google successfully");
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
                    <h2>{Strings.SIGN_UP}</h2>
                    <p className="subtitle">Create your account</p>

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

                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    {/* SIGN UP BUTTON */}
                    <Button
                        label={Strings.SIGN_UP}
                        onClick={handleSignUp}
                        disabled={loading}
                    />

                    <Button
                        label={Strings.LOGIN}
                        onClick={() => navigate("/sign-in")}
                        disabled={loading}
                    />


                    <div className="divider">{Strings.OR}</div>

                    {/* GOOGLE SIGN UP */}
                    <button
                        className="google-btn"
                        onClick={handleGoogleSignUp}
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

export default SignupPage;