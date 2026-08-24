import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiHome,
  FiBookOpen,
  FiCompass,
  FiAward,
  FiBarChart2,
  FiMessageSquare,
  FiBell,
  FiSettings,
  FiHelpCircle,
  FiLogOut,
  FiSearch,
  FiMenu,
  FiX,
  FiClock,
  FiPlay,
  FiChevronRight,
  FiCalendar,
  FiCheckCircle,
  FiTrendingUp,
} from "react-icons/fi";
import { FaFire, FaStar } from "react-icons/fa";
import "./LearnerDashboard.css";

function LearnerDashboard() {
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Overview");

  // Logged in user

  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/current_user/",
          {
            credentials: "include",
          }
        );
        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          console.error("Failed to fetch current user");
        }
      } catch (error) {
        console.error("Error fetching current user:", error);
      }
    };

    fetchCurrentUser();
  }, []);

  const [enrolledCourses, setEnrolledCourses] = useState([
    {
      id: 1,
      title: "Python Backend Development",
      instructor: "David Mwangi",
      category: "Backend Development",
      progress: 78,
      lessonsCompleted: 24,
      totalLessons: 31,
      duration: "18h 40m",
      level: "Intermediate",
      color: "gold",
      lastLesson: "REST API Authentication",
    },
    {
      id: 2,
      title: "Machine Learning Fundamentals",
      instructor: "Sarah Wanjiku",
      category: "Artificial Intelligence",
      progress: 42,
      lessonsCompleted: 12,
      totalLessons: 29,
      duration: "21h 15m",
      level: "Beginner",
      color: "purple",
      lastLesson: "Linear Regression",
    },
    {
      id: 3,
      title: "Database Engineering",
      instructor: "Brian Otieno",
      category: "Data Engineering",
      progress: 15,
      lessonsCompleted: 4,
      totalLessons: 27,
      duration: "16h 30m",
      level: "Intermediate",
      color: "blue",
      lastLesson: "Database Normalization",
    },
  ]);

  const availableCourses = [
    {
      id: 4,
      title: "Django REST APIs",
      instructor: "James Kamau",
      category: "Backend Development",
      rating: 4.9,
      students: "3.2K",
      lessons: 36,
      duration: "22h 30m",
      level: "Intermediate",
      price: "Free",
      color: "green",
    },
    {
      id: 5,
      title: "React & Modern Frontend",
      instructor: "Grace Akinyi",
      category: "Web Development",
      rating: 4.8,
      students: "5.8K",
      lessons: 42,
      duration: "25h 10m",
      level: "Intermediate",
      price: "Free",
      color: "cyan",
    },
    {
      id: 6,
      title: "Deep Learning with PyTorch",
      instructor: "Mark Ochieng",
      category: "Artificial Intelligence",
      rating: 4.9,
      students: "2.4K",
      lessons: 39,
      duration: "27h 45m",
      level: "Advanced",
      price: "Free",
      color: "orange",
    },
  ];

  const navItems = [
    {
      label: "Overview",
      icon: <FiHome />,
    },
    {
      label: "My Learning",
      icon: <FiBookOpen />,
    },
    {
      label: "Explore Courses",
      icon: <FiCompass />,
    },
    {
      label: "Achievements",
      icon: <FiAward />,
    },
    {
      label: "My Progress",
      icon: <FiBarChart2 />,
    },
  ];

  const bottomNavItems = [
    {
      label: "Messages",
      icon: <FiMessageSquare />,
    },
    {
      label: "Notifications",
      icon: <FiBell />,
    },
    {
      label: "Settings",
      icon: <FiSettings />,
    },
    {
      label: "Help & Support",
      icon: <FiHelpCircle />,
    },
  ];

  const handleNavigation = (label) => {
    setActiveNav(label);
    setSidebarOpen(false);
  };

  const handleEnroll = (course) => {
    setEnrolledCourses((previous) => [
      ...previous,
      {
        ...course,
        progress: 0,
        lessonsCompleted: 0,
        totalLessons: course.lessons,
        lastLesson: "Introduction",
      },
    ]);
  };

  const isEnrolled = (courseId) => {
    return enrolledCourses.some(
      (course) => course.id === courseId
    );
  };

  const continueCourse = enrolledCourses[0];

  return (
    <div className="dashboard">

      {/* ================= MOBILE OVERLAY ================= */}

      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ================= SIDEBAR ================= */}

      <aside
        className={`dashboard-sidebar ${
          sidebarOpen ? "sidebar-open" : ""
        }`}
      >

        <div className="sidebar-top">

          {/* Logo */}

          <div className="dashboard-logo">

            <div className="dashboard-logo-mark">
              W
            </div>

            <div>
              <span>Workforce</span>
              <strong>Academy</strong>
            </div>

          </div>


          {/* Mobile close */}

          <button
            className="sidebar-close"
            onClick={() => setSidebarOpen(false)}
          >
            <FiX />
          </button>


          {/* Navigation */}

          <nav className="dashboard-nav">

            <div className="nav-section-title">
              LEARN
            </div>

            {navItems.map((item) => (
              <button
                key={item.label}
                className={`dashboard-nav-item ${
                  activeNav === item.label
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  handleNavigation(item.label)
                }
              >
                <span className="nav-icon">
                  {item.icon}
                </span>

                <span>{item.label}</span>

                {item.label === "My Learning" &&
                  enrolledCourses.length > 0 && (
                    <span className="nav-count">
                      {enrolledCourses.length}
                    </span>
                  )}
              </button>
            ))}


            <div className="nav-section-title nav-section-space">
              ACCOUNT
            </div>

            {bottomNavItems.map((item) => (
              <button
                key={item.label}
                className="dashboard-nav-item"
                onClick={() =>
                  handleNavigation(item.label)
                }
              >
                <span className="nav-icon">
                  {item.icon}
                </span>

                <span>{item.label}</span>

                {item.label === "Notifications" && (
                  <span className="notification-dot"></span>
                )}
              </button>
            ))}

          </nav>

        </div>


        {/* Sidebar profile */}

        <div className="sidebar-profile">

          <div className="sidebar-avatar">
            GO
          </div>

          <div className="sidebar-profile-info">
            <strong>Gerry Odhiambo</strong>
            <span>Learner</span>
          </div>

          <button
            className="sidebar-logout"
            onClick={() => navigate("/")}
            title="Logout"
          >
            <FiLogOut />
          </button>

        </div>

      </aside>


      {/* ================= MAIN ================= */}

      <main className="dashboard-main">

        {/* ================= HEADER ================= */}

        <header className="dashboard-header">

          <div className="header-left">

            <button
              className="mobile-menu-button"
              onClick={() => setSidebarOpen(true)}
            >
              <FiMenu />
            </button>

            <div className="mobile-page-title">
              {activeNav}
            </div>

          </div>


          <div className="header-right">

            {/* Search */}

            <div className="dashboard-search">

              <FiSearch />

              <input
                type="text"
                placeholder="Search courses..."
              />

              <span className="search-shortcut">
                /
              </span>

            </div>


            {/* Notifications */}

            <button className="header-icon-button">
              <FiBell />

              <span className="header-notification"></span>
            </button>


            {/* Profile */}

            <button className="header-profile">

              <div className="header-avatar">
                GO
              </div>

              <div className="header-profile-info">
                <strong>Gerry</strong>
                <span>Learner</span>
              </div>

            </button>

          </div>

        </header>


        {/* ================= CONTENT ================= */}

        <div className="dashboard-content">

          {/* Welcome */}

          <section className="welcome-section">

            <div>

              <span className="welcome-label">
                FRIDAY, AUGUST 21
              </span>

              <h1>
                Good morning, {user?.first_name}
                <span> 👋</span>
              </h1>

              <p>
                Keep the momentum going. You're making
                great progress.
              </p>

            </div>

            <button
              className="explore-button"
              onClick={() =>
                setActiveNav("Explore Courses")
              }
            >
              Explore courses
              <FiCompass />
            </button>

          </section>


          {/* ================= STATS ================= */}

          <section className="stats-grid">

            <div className="stat-card">

              <div className="stat-icon courses-stat">
                <FiBookOpen />
              </div>

              <div className="stat-content">
                <span>ENROLLED COURSES</span>
                <strong>
                  {enrolledCourses.length}
                </strong>
              </div>

              <span className="stat-trend">
                +1 this month
              </span>

            </div>


            <div className="stat-card">

              <div className="stat-icon time-stat">
                <FiClock />
              </div>

              <div className="stat-content">
                <span>LEARNING TIME</span>
                <strong>12h 45m</strong>
              </div>

              <span className="stat-trend">
                +18% this month
              </span>

            </div>


            <div className="stat-card">

              <div className="stat-icon certificate-stat">
                <FiAward />
              </div>

              <div className="stat-content">
                <span>CERTIFICATES</span>
                <strong>2</strong>
              </div>

              <span className="stat-trend">
                Keep learning
              </span>

            </div>


            <div className="stat-card streak-stat-card">

              <div className="stat-icon streak-stat">
                <FaFire />
              </div>

              <div className="stat-content">
                <span>CURRENT STREAK</span>
                <strong>7 days</strong>
              </div>

              <span className="stat-trend streak-trend">
                🔥 On fire
              </span>

            </div>

          </section>


          {/* ================= MAIN GRID ================= */}

          <div className="dashboard-grid">

            {/* ================= LEFT ================= */}

            <div className="dashboard-primary">


              {/* Continue learning */}

              <section className="dashboard-section">

                <div className="section-header">

                  <div>
                    <span className="section-label">
                      PICK UP WHERE YOU LEFT OFF
                    </span>

                    <h2>
                      Continue learning
                    </h2>
                  </div>

                  <button
                    className="view-all-button"
                    onClick={() =>
                      setActiveNav("My Learning")
                    }
                  >
                    View all
                    <FiChevronRight />
                  </button>

                </div>


                <div className="continue-card">

                  <div
                    className={`continue-course-image ${continueCourse.color}`}
                  >
                    <div className="course-image-pattern"></div>

                    <span className="course-category">
                      {continueCourse.category}
                    </span>

                    <FiBookOpen className="large-course-icon" />
                  </div>


                  <div className="continue-course-content">

                    <div className="course-meta">
                      <span>
                        {continueCourse.level}
                      </span>

                      <span>•</span>

                      <span>
                        {continueCourse.duration}
                      </span>
                    </div>

                    <h3>
                      {continueCourse.title}
                    </h3>

                    <p className="continue-lesson">
                      <FiPlay />
                      Next: {continueCourse.lastLesson}
                    </p>


                    <div className="progress-area">

                      <div className="progress-info">
                        <span>
                          {continueCourse.progress}%
                          complete
                        </span>

                        <span>
                          {
                            continueCourse.lessonsCompleted
                          } /{" "}
                          {continueCourse.totalLessons}{" "}
                          lessons
                        </span>
                      </div>

                      <div className="progress-bar">
                        <div
                          style={{
                            width: `${continueCourse.progress}%`,
                          }}
                        ></div>
                      </div>

                    </div>


                    <button className="continue-button">

                      Continue learning

                      <FiChevronRight />

                    </button>

                  </div>

                </div>

              </section>


              {/* ================= MY COURSES ================= */}

              <section className="dashboard-section">

                <div className="section-header">

                  <div>
                    <span className="section-label">
                      YOUR LEARNING
                    </span>

                    <h2>
                      My courses
                    </h2>
                  </div>

                  <button
                    className="view-all-button"
                    onClick={() =>
                      setActiveNav("My Learning")
                    }
                  >
                    View all
                    <FiChevronRight />
                  </button>

                </div>


                <div className="course-grid">

                  {enrolledCourses.map((course) => (

                    <div
                      className="course-card"
                      key={course.id}
                    >

                      <div
                        className={`course-thumbnail ${course.color}`}
                      >

                        <div className="thumbnail-pattern"></div>

                        <span>
                          {course.category}
                        </span>

                        <FiBookOpen />

                      </div>


                      <div className="course-card-content">

                        <div className="course-level">
                          {course.level}
                        </div>

                        <h3>
                          {course.title}
                        </h3>

                        <p className="course-instructor">
                          By {course.instructor}
                        </p>


                        <div className="course-progress">

                          <div className="course-progress-top">

                            <span>
                              Progress
                            </span>

                            <strong>
                              {course.progress}%
                            </strong>

                          </div>

                          <div className="small-progress">
                            <div
                              style={{
                                width: `${course.progress}%`,
                              }}
                            ></div>
                          </div>

                        </div>


                        <button className="course-continue">

                          Continue

                          <FiChevronRight />

                        </button>

                      </div>

                    </div>

                  ))}

                </div>

              </section>


              {/* ================= EXPLORE COURSES ================= */}

              <section className="dashboard-section">

                <div className="section-header">

                  <div>
                    <span className="section-label">
                      KEEP GROWING
                    </span>

                    <h2>
                      Explore courses
                    </h2>
                  </div>

                  <button
                    className="view-all-button"
                    onClick={() =>
                      setActiveNav("Explore Courses")
                    }
                  >
                    Browse all
                    <FiChevronRight />
                  </button>

                </div>


                <div className="course-grid">

                  {availableCourses.map((course) => (

                    <div
                      className="course-card"
                      key={course.id}
                    >

                      <div
                        className={`course-thumbnail ${course.color}`}
                      >

                        <div className="thumbnail-pattern"></div>

                        <span>
                          {course.category}
                        </span>

                        <FiCompass />

                      </div>


                      <div className="course-card-content">

                        <div className="course-level">
                          {course.level}
                        </div>

                        <h3>
                          {course.title}
                        </h3>

                        <p className="course-instructor">
                          By {course.instructor}
                        </p>


                        <div className="course-rating">

                          <FaStar />

                          <strong>
                            {course.rating}
                          </strong>

                          <span>
                            ({course.students})
                          </span>

                        </div>


                        <div className="course-details">

                          <span>
                            <FiBookOpen />
                            {course.lessons} lessons
                          </span>

                          <span>
                            <FiClock />
                            {course.duration}
                          </span>

                        </div>


                        <button
                          className={`enroll-button ${
                            isEnrolled(course.id)
                              ? "enrolled"
                              : ""
                          }`}
                          onClick={() =>
                            !isEnrolled(course.id) &&
                            handleEnroll(course)
                          }
                        >

                          {isEnrolled(course.id)
                            ? "Enrolled ✓"
                            : "Enroll now"}

                        </button>

                      </div>

                    </div>

                  ))}

                </div>

              </section>

            </div>


            {/* ================= RIGHT COLUMN ================= */}

            <aside className="dashboard-secondary">


              {/* Learning streak */}

              <section className="side-card streak-card">

                <div className="side-card-header">

                  <div>
                    <span>
                      YOUR STREAK
                    </span>

                    <h3>
                      Keep it going!
                    </h3>
                  </div>

                  <FaFire className="fire-icon" />

                </div>


                <div className="streak-number">
                  7
                  <span>days</span>
                </div>


                <div className="streak-days">

                  {[
                    "M",
                    "T",
                    "W",
                    "T",
                    "F",
                    "S",
                    "S",
                  ].map((day, index) => (

                    <div
                      key={index}
                      className={
                        index < 6
                          ? "streak-day completed"
                          : "streak-day"
                      }
                    >
                      <span>{day}</span>

                      <div>
                        {index < 6 ? "✓" : ""}
                      </div>

                    </div>

                  ))}

                </div>


                <p className="streak-message">
                  Learn today to reach an
                  <strong> 8 day streak.</strong>
                </p>

              </section>


              {/* ================= UPCOMING ================= */}

              <section className="side-card">

                <div className="side-card-header">

                  <div>
                    <span>
                      YOUR SCHEDULE
                    </span>

                    <h3>
                      Upcoming
                    </h3>
                  </div>

                  <button className="side-header-button">
                    <FiCalendar />
                  </button>

                </div>


                <div className="upcoming-list">

                  <div className="upcoming-item">

                    <div className="upcoming-icon quiz">
                      <FiCheckCircle />
                    </div>

                    <div className="upcoming-content">

                      <strong>
                        Backend API Quiz
                      </strong>

                      <span>
                        Tomorrow • 10:00 AM
                      </span>

                    </div>

                    <span className="upcoming-dot"></span>

                  </div>


                  <div className="upcoming-item">

                    <div className="upcoming-icon assignment">
                      <FiBookOpen />
                    </div>

                    <div className="upcoming-content">

                      <strong>
                        Database Assignment
                      </strong>

                      <span>
                        Friday • Due 11:59 PM
                      </span>

                    </div>

                  </div>


                  <div className="upcoming-item">

                    <div className="upcoming-icon live">
                      <FiPlay />
                    </div>

                    <div className="upcoming-content">

                      <strong>
                        Backend Architecture
                      </strong>

                      <span>
                        Saturday • 2:00 PM
                      </span>

                    </div>

                  </div>

                </div>


                <button className="view-schedule">
                  View full schedule
                  <FiChevronRight />
                </button>

              </section>


              {/* ================= ACHIEVEMENTS ================= */}

              <section className="side-card">

                <div className="side-card-header">

                  <div>
                    <span>
                      MILESTONES
                    </span>

                    <h3>
                      Achievements
                    </h3>
                  </div>

                  <FiAward className="achievement-icon" />

                </div>


                <div className="achievement-list">

                  <div className="achievement-item">

                    <div className="achievement-badge">
                      🏆
                    </div>

                    <div>
                      <strong>
                        First Course
                      </strong>

                      <span>
                        Completed your first course
                      </span>
                    </div>

                  </div>


                  <div className="achievement-item">

                    <div className="achievement-badge">
                      🔥
                    </div>

                    <div>
                      <strong>
                        Week Warrior
                      </strong>

                      <span>
                        Maintained a 7 day streak
                      </span>
                    </div>

                  </div>


                  <div className="achievement-item">

                    <div className="achievement-badge">
                      ⚡
                    </div>

                    <div>
                      <strong>
                        10 Hour Learner
                      </strong>

                      <span>
                        Reached 10 hours of learning
                      </span>
                    </div>

                  </div>

                </div>


                <button className="view-schedule">
                  View all achievements
                  <FiChevronRight />
                </button>

              </section>


              {/* ================= PROGRESS ================= */}

              <section className="side-card progress-summary">

                <div className="side-card-header">

                  <div>
                    <span>
                      THIS MONTH
                    </span>

                    <h3>
                      Your progress
                    </h3>
                  </div>

                  <FiTrendingUp className="trend-icon" />

                </div>


                <div className="progress-chart">

                  <div className="chart-bars">

                    {[40, 65, 48, 75, 55, 90, 68].map(
                      (height, index) => (
                        <div
                          className="chart-column"
                          key={index}
                        >
                          <div
                            style={{
                              height: `${height}%`,
                            }}
                          ></div>

                          <span>
                            {
                              [
                                "M",
                                "T",
                                "W",
                                "T",
                                "F",
                                "S",
                                "S",
                              ][index]
                            }
                          </span>

                        </div>
                      )
                    )}

                  </div>

                </div>


                <div className="progress-summary-footer">

                  <div>
                    <strong>
                      12h 45m
                    </strong>

                    <span>
                      Learning time
                    </span>
                  </div>

                  <div className="growth">

                    <FiTrendingUp />

                    +18%

                  </div>

                </div>

              </section>

            </aside>

          </div>

        </div>

      </main>

    </div>
  );
}

export default LearnerDashboard;