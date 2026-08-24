import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import {
  FiEye,
  FiEyeOff,
  FiArrowLeft,
  FiArrowRight,
} from "react-icons/fi";
import "./LoginPage.css";

function LoginPage() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Django authentication will be connected here later.
    console.log("Login data:", formData);
  };

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:8000/accounts/google/login/";
  };

  const handleGithubLogin = () => {
    // GitHub OAuth will be connected here later.
    console.log("Continue with GitHub");
  };

  return (
    <div className="login-page">

      {/* Background effects */}
      <div className="login-glow login-glow-one"></div>
      <div className="login-glow login-glow-two"></div>

      {/* Back to home */}
      <button
        className="login-back-home"
        onClick={() => navigate("/")}
      >
        <FiArrowLeft />
        Back to home
      </button>

      <div className="login-container">

        {/* ================= LEFT SIDE ================= */}

        <div className="login-branding">

          <div className="login-brand-logo">
            <span className="login-logo-mark">W</span>

            <span>
              Workforce
              <span className="login-logo-accent">
                Academy
              </span>
            </span>
          </div>

          <div className="login-brand-content">

            <span className="login-brand-label">
              WELCOME BACK
            </span>

            <h1>
              Keep building
              <span> your future.</span>
            </h1>

            <p>
              Continue where you left off and keep
              developing the skills that matter.
            </p>

            <div className="login-stats">

              <div>
                <strong>10K+</strong>
                <span>Learners</span>
              </div>

              <div className="login-stat-divider"></div>

              <div>
                <strong>500+</strong>
                <span>Courses</span>
              </div>

              <div className="login-stat-divider"></div>

              <div>
                <strong>50+</strong>
                <span>Instructors</span>
              </div>

            </div>

          </div>

          <div className="login-brand-footer">
            <span>Learn</span>
            <span>•</span>
            <span>Build</span>
            <span>•</span>
            <span>Grow</span>
          </div>

        </div>


        {/* ================= LOGIN CARD ================= */}

        <div className="login-card">

          <div className="login-header">

            <div className="mobile-login-logo">
              <span className="login-logo-mark">W</span>
            </div>

            <h2>Welcome back</h2>

            <p>
              Log in to continue your learning journey.
            </p>

          </div>


          {/* OAuth */}

          <div className="login-oauth-buttons">

            <button
              type="button"
              className="login-oauth-button"
              onClick={handleGoogleLogin}
            >
              <FcGoogle className="login-oauth-icon" />

              <span>
                Continue with Google
              </span>
            </button>


            <button
              type="button"
              className="login-oauth-button"
              onClick={handleGithubLogin}
            >
              <FaGithub className="login-oauth-icon login-github-icon" />

              <span>
                Continue with GitHub
              </span>
            </button>

          </div>


          {/* Divider */}

          <div className="login-divider">

            <span></span>

            <p>OR CONTINUE WITH EMAIL</p>

            <span></span>

          </div>


          {/* Login form */}

          <form
            className="login-form"
            onSubmit={handleSubmit}
          >

            {/* Email */}

            <div className="login-form-group">

              <label htmlFor="email">
                Email address
              </label>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />

            </div>


            {/* Password */}

            <div className="login-form-group">

              <div className="login-password-label">

                <label htmlFor="password">
                  Password
                </label>

                <button
                  type="button"
                  onClick={() =>
                    navigate("/forgot-password")
                  }
                >
                  Forgot password?
                </button>

              </div>


              <div className="login-password-wrapper">

                <input
                  id="password"
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />

                <button
                  type="button"
                  className="login-password-toggle"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showPassword ? (
                    <FiEyeOff />
                  ) : (
                    <FiEye />
                  )}
                </button>

              </div>

            </div>


            {/* Remember me */}

            <label className="remember-me">

              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />

              <span>
                Remember me
              </span>

            </label>


            {/* Login button */}

            <button
              type="submit"
              className="login-submit-button"
            >
              Log in

              <FiArrowRight />

            </button>

          </form>


          {/* Signup */}

          <p className="signup-prompt">

            Don't have an account?

            <button
              type="button"
              onClick={() => navigate("/signup")}
            >
              Create an account
            </button>

          </p>


          <div className="login-security-note">
            <span>🔒</span>
            <span>
              Your account and data are securely protected.
            </span>
          </div>

        </div>

      </div>

    </div>
  );
}

export default LoginPage;