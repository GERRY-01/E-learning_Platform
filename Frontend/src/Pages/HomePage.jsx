import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

function AnimatedNumber({ target, suffix = "", duration = 1800 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      // Ease-out effect
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration]);

  return (
    <>
      {count.toLocaleString()}
      {suffix}
    </>
  );
}

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-page">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        <div
          className="logo"
          onClick={() => navigate("/")}
        >
          <span className="logo-mark">W</span>

          <span>
            Workforce
            <span className="logo-accent">Academy</span>
          </span>
        </div>

        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#courses">Courses</a>
        </div>

        <div className="nav-actions">
          <button
            className="login-btn"
            onClick={() => navigate("/login")}
          >
            Log In
          </button>

          <button
            className="signup-btn"
            onClick={() => navigate("/signup")}
          >
            Get Started
          </button>
        </div>
      </nav>


      {/* ================= HERO ================= */}

      <main>

        <section className="hero">

          <div className="hero-content">

            <div className="eyebrow">
              <span className="pulse-dot"></span>
              BUILD SKILLS. BUILD YOUR FUTURE.
            </div>

            <h1>
              Learn skills that
              <span> move your career </span>
              forward.
            </h1>

            <p className="hero-description">
              Workforce Academy is a modern learning platform built
              to help you develop practical, job-ready skills through
              expert-led courses, hands-on learning, and continuous growth.
            </p>

            <div className="hero-buttons">

              <button
                className="primary-btn"
                onClick={() => navigate("/signup")}
              >
                Start Learning
                <span>→</span>
              </button>

              <button
                className="secondary-btn"
                onClick={() => navigate("/courses")}
              >
                Explore Courses
              </button>

            </div>


            <div className="trust">

              <div className="avatar-stack">
                <div className="avatar">A</div>
                <div className="avatar">J</div>
                <div className="avatar">M</div>
                <div className="avatar">K</div>
              </div>

              <div>
                <strong>Join thousands of learners</strong>
                <p>building skills for the future</p>
              </div>

            </div>

          </div>


          {/* ================= HERO VISUAL ================= */}

          <div className="hero-visual">

            <div className="glow"></div>

            <div className="learning-card">

              <div className="card-top">

                <div>
                  <span className="small-label">
                    YOUR LEARNING
                  </span>

                  <h3>Continue Learning</h3>
                </div>

                <div className="progress-circle">
                  72%
                </div>

              </div>


              <div className="course-preview">

                <div className="course-icon">
                  ⌘
                </div>

                <div className="course-info">

                  <span>
                    Software Engineering
                  </span>

                  <strong>
                    Backend Development
                  </strong>

                  <div className="progress-bar">
                    <div className="progress-fill"></div>
                  </div>

                  <small>
                    18 of 25 lessons completed
                  </small>

                </div>

              </div>


              <div className="learning-stats">

                <div>
                  <strong>24</strong>
                  <span>Courses</span>
                </div>

                <div>
                  <strong>86%</strong>
                  <span>Average Score</span>
                </div>

                <div>
                  <strong>12h</strong>
                  <span>This Week</span>
                </div>

              </div>

            </div>


            {/* Achievement */}

            <div className="floating-card certificate-card">

              <div className="certificate-icon">
                ✓
              </div>

              <div>
                <span>ACHIEVEMENT UNLOCKED</span>
                <strong>Course Completed</strong>
              </div>

            </div>


            {/* Skills */}

            <div className="floating-card skill-card">

              <span>SKILLS GAINED</span>

              <div className="skill-tags">
                <span>Python</span>
                <span>React</span>
                <span>SQL</span>
              </div>

            </div>

          </div>

        </section>


        {/* ================= STATS ================= */}

        <section className="stats-section">

          <div className="stat">
            <strong>
              <AnimatedNumber
                target={10000}
                suffix="+"
              />
            </strong>

            <span>Learners</span>
          </div>


          <div className="stat">
            <strong>
              <AnimatedNumber
                target={500}
                suffix="+"
              />
            </strong>

            <span>Courses</span>
          </div>


          <div className="stat">
            <strong>
              <AnimatedNumber
                target={50}
                suffix="+"
              />
            </strong>

            <span>Expert Instructors</span>
          </div>


          <div className="stat">
            <strong>
              <AnimatedNumber
                target={95}
                suffix="%"
              />
            </strong>

            <span>Skill Completion</span>
          </div>

        </section>


        {/* ================= FEATURES ================= */}

        <section
          className="features-section"
          id="features"
        >

          <div className="section-heading">

            <span>WHY WORKFORCE ACADEMY</span>

            <h2>
              Learning built around your growth.
            </h2>

            <p>
              Everything you need to develop valuable skills
              and turn knowledge into real-world capability.
            </p>

          </div>


          <div className="features-grid">

            <div className="feature-card">

              <div className="feature-number">
                01
              </div>

              <div className="feature-icon">
                ◈
              </div>

              <h3>
                Learn Practical Skills
              </h3>

              <p>
                Learn technologies and skills through structured,
                practical courses designed around real-world applications.
              </p>

            </div>


            <div className="feature-card highlighted">

              <div className="feature-number">
                02
              </div>

              <div className="feature-icon">
                ↗
              </div>

              <h3>
                Track Your Progress
              </h3>

              <p>
                Keep track of your learning journey, complete lessons,
                take assessments, and see how far you've come.
              </p>

            </div>


            <div className="feature-card">

              <div className="feature-number">
                03
              </div>

              <div className="feature-icon">
                ✦
              </div>

              <h3>
                Build Your Career
              </h3>

              <p>
                Develop skills that matter, earn certificates,
                and prepare yourself for opportunities.
              </p>

            </div>

          </div>

        </section>


        {/* ================= ABOUT ================= */}

        <section
          className="about-section"
          id="about"
        >

          <div className="about-content">

            <span>
              LEARN WITHOUT LIMITS
            </span>

            <h2>
              Your skills are your
              <span> greatest investment.</span>
            </h2>

            <p>
              The world of work is constantly changing.
              Workforce Academy gives learners a place to continuously
              develop, explore new technologies, and stay ahead of the curve.
            </p>

            <button
              className="primary-btn"
              onClick={() => navigate("/signup")}
            >
              Join Workforce Academy
              <span>→</span>
            </button>

          </div>


          <div className="about-box">

            <div className="about-line"></div>

            <span>
              THE WORKFORCE ACADEMY
            </span>

            <h3>
              Knowledge is useful.
              <br />
              <strong>
                Capability is powerful.
              </strong>
            </h3>

          </div>

        </section>


        {/* ================= CTA ================= */}

        <section
          className="cta-section"
          id="courses"
        >

          <div>

            <span>
              READY TO START?
            </span>

            <h2>
              Your next skill
              <br />
              starts here.
            </h2>

            <p>
              Join Workforce Academy and start building skills
              that can take you further.
            </p>

          </div>


          <button
            className="primary-btn large"
            onClick={() => navigate("/signup")}
          >
            Create Your Account
            <span>→</span>
          </button>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <footer>

        <div
          className="logo"
          onClick={() => navigate("/")}
        >
          <span className="logo-mark">
            W
          </span>

          <span>
            Workforce
            <span className="logo-accent">
              Academy
            </span>
          </span>

        </div>

        <p>
          Build skills. Build your future.
        </p>

        <span className="copyright">
          © 2026 Workforce Academy
        </span>

      </footer>

    </div>
  );
}

export default HomePage;