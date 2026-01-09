import React from 'react';
import "../../features/LoginSignup/Component/StyleCss/LoginSignup.Style.css";
import AssetsConstant from '../../constant/AssetsConstant';

class SignIn extends React.Component {
    handleGoogleLogin = () => {
        console.log('Google Login Clicked');
    };

    render() {
        return (
            <div className="auth-card">
                {/* LEFT IMAGE SECTION */}
                {/* <img className="container"
                    src={AssetsConstant.LoginBanner} // Use the constant here
                    alt="Auth Visual"
                /> */}

                {/* <img
                    src="https://picsum.photos/2000/500"
                    alt="Auth Visual"
                />
                <AppNetworkImage
                    imageUrl={"https://picsum.photos/1000/500"}
                    fit='fill'
                /> */}


                {/* RIGHT FORM SECTION */}
                {/* <div className="auth-form">
                    <h1>Create an Account</h1>
                    <p className="sub-text">
                        Already have an account? <span>Log in</span>
                    </p>

                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                    <input type="email" placeholder="Email Address" />
                    <input type="password" placeholder="Password" />

                    <button className="primary-btn">
                        Create Account
                    </button>

                    <div className="divider">or</div>

                    <button
                        className="google-btn"
                        onClick={this.handleGoogleLogin}
                    >
                        <img
                            src="https://www.svgrepo.com/show/475656/google-color.svg"
                            alt="Google"
                        />
                        Continue with Google
                    </button>
                </div> */}
            </div>
        );
    }
}

export default SignIn;
