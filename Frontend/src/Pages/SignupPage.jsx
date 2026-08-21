import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FiEye, FiEyeOff, FiArrowLeft } from "react-icons/fi";
import "./SignupPage.css";

function SignupPage() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Backend registration will be connected here later.
    console.log(formData);
  };

  const handleGoogleSignup = () => {
    // Google OAuth will be connected here later.
    console.log("Continue with Google");
  };

  const handleGithubSignup = () => {
    // GitHub OAuth will be connected here later.
    console.log("Continue with GitHub");
  };

  return (
    <div className="signup-page">

      {/* Background effects */}
      <div className="signup-glow signup-glow-one"></div>
      <div className="signup-glow signup-glow-two"></div>

      {/* Back button */}
      <button
        className="back-home"
        onClick={() => navigate("/")}
      >
        <FiArrowLeft />
        Back to home
      </button>


      <div className="signup-container">

        {/* ================= LEFT SIDE ================= */}

        <div className="signup-branding">

          <div className="signup-brand-logo">
            <span className="signup-logo-mark">W</span>

            <span>
              Workforce
              <span className="signup-logo-accent">
                Academy
              </span>
            </span>
          </div>


          <div className="branding-content">

            <span className="branding-label">
              START YOUR JOURNEY
            </span>

            <h1>
              Invest in your
              <span> future.</span>
            </h1>

            <p>
              Join Workforce Academy and start building practical
              skills that can move your career forward.
            </p>


            <div className="benefits">

              <div className="benefit">
                <div className="benefit-icon">✓</div>

                <div>
                  <strong>Learn practical skills</strong>
                  <span>
                    Courses designed around real-world applications.
                  </span>
                </div>
              </div>


              <div className="benefit">
                <div className="benefit-icon">✓</div>

                <div>
                  <strong>Track your progress</strong>
                  <span>
                    Monitor your learning and skill development.
                  </span>
                </div>
              </div>


              <div className="benefit">
                <div className="benefit-icon">✓</div>

                <div>
                  <strong>Build your career</strong>
                  <span>
                    Develop skills that create new opportunities.
                  </span>
                </div>
              </div>

            </div>

          </div>


          <div className="branding-footer">
            <span>10K+ learners</span>
            <span className="footer-divider">•</span>
            <span>500+ courses</span>
            <span className="footer-divider">•</span>
            <span>50+ instructors</span>
          </div>

        </div>


        {/* ================= SIGNUP FORM ================= */}

        <div className="signup-card">

          <div className="signup-header">

            <span className="mobile-logo">
              <span className="signup-logo-mark">W</span>
            </span>

            <h2>
              Create your account
            </h2>

            <p>
              Start your learning journey today.
            </p>

          </div>


          {/* OAuth */}

          <div className="oauth-buttons">

            <button
              type="button"
              className="oauth-button"
              onClick={handleGoogleSignup}
            >
              <FcGoogle className="oauth-icon" />

              <span>
                Continue with Google
              </span>
            </button>


            <button
              type="button"
              className="oauth-button"
              onClick={handleGithubSignup}
            >
              <FaGithub className="oauth-icon github-icon" />

              <span>
                Continue with GitHub
              </span>
            </button>

          </div>


          {/* Divider */}

          <div className="divider">
            <span></span>

            <p>OR SIGN UP WITH EMAIL</p>

            <span></span>
          </div>


          {/* Form */}

          <form
            className="signup-form"
            onSubmit={handleSubmit}
          >

            <div className="name-fields">

              <div className="form-group">
                <label htmlFor="firstName">
                  First name
                </label>

                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  placeholder="Gerry"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>


              <div className="form-group">
                <label htmlFor="lastName">
                  Last name
                </label>

                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  placeholder="Odhiambo"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>


            <div className="form-group">

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


            <div className="form-group">

              <label htmlFor="password">
                Password
              </label>

              <div className="password-wrapper">

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  minLength="8"
                />

                <button
                  type="button"
                  className="password-toggle"
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

              <span className="input-hint">
                Use at least 8 characters.
              </span>

            </div>


            <div className="form-group">

              <label htmlFor="confirmPassword">
                Confirm password
              </label>

              <div className="password-wrapper">

                <input
                  id="confirmPassword"
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  minLength="8"
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                  aria-label={
                    showConfirmPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showConfirmPassword ? (
                    <FiEyeOff />
                  ) : (
                    <FiEye />
                  )}
                </button>

              </div>

            </div>


            <label className="terms">

              <input
                type="checkbox"
                required
              />

              <span>
                I agree to the{" "}
                <button type="button">
                  Terms of Service
                </button>{" "}
                and{" "}
                <button type="button">
                  Privacy Policy
                </button>
              </span>

            </label>


            <button
              type="submit"
              className="create-account-btn"
            >
              Create Account
              <span>→</span>
            </button>

          </form>


          <p className="login-prompt">
            Already have an account?

            <button
              type="button"
              onClick={() => navigate("/login")}
            >
              Log in
            </button>
          </p>

        </div>

      </div>

    </div>
  );
}

export default SignupPage;