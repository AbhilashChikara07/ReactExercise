import React from "react";
import "../../features/LoginSignup/Component/StyleCss/LoginSignup.Style.css";
import ImageComponent from "../../features/LoginSignup/Component/ImageComponent";
import Button from "../../features/LoginSignup/Component/Button.Component.jsx";
import Strings from "../../res/String.jsx";
import { signInUser } from "../../firebase/auth.js";

const SignIn = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const handleSignUp = async () => {
        setError("");
        setLoading(true);
        try {
            await signInUser(email, password);
            alert("Login successful");
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="main-container">
            <div className="auth-container">
                <ImageComponent />

                <div className="auth-form">
                    <h2>{Strings.WELCOME_BACK}</h2>
                    <p className="subtitle">{Strings.LOGIN_SUBTITLE}</p>

                    <input
                        type="email"
                        placeholder={Strings.EMAIL_PLACEHOLDER}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder={Strings.PASSWORD_PLACEHOLDER}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button
                        label={Strings.LOGIN}
                        onClick={handleSignUp}
                        disabled={loading}
                    />

                    <Button label={Strings.SIGN_UP} />

                    <div className="divider">{Strings.OR}</div>

                    <button className="google-btn">
                        <img
                            src="https://www.svgrepo.com/show/475656/google-color.svg"
                            alt="Google"
                        />
                        {Strings.CONTINUE_WITH_GOOGLE}
                    </button>

                    {error && <p className="error-text">{error}</p>}
                </div>
            </div>
        </div>
    );
};

export default SignIn;