import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {

  const { isAuthenticated, logout } = useAuth();

  const navigate = useNavigate();



  const handleLogout = () => {

    logout();

    navigate("/login");

  };



  return (

    <nav
      className="navbar navbar-expand-lg navbar-dark shadow"
      style={{
        background:
          "linear-gradient(135deg,#0d6efd,#6610f2)"
      }}
    >

      <div className="container">


        {/* Brand */}

        <Link
          className="navbar-brand fw-bold fs-3"
          to="/"
        >

          🎉 EventPro

        </Link>




        {/* Toggle */}

        <button

          className="navbar-toggler"

          type="button"

          data-bs-toggle="collapse"

          data-bs-target="#navbarNav"

          aria-controls="navbarNav"

          aria-expanded="false"

          aria-label="Toggle navigation"

        >

          <span className="navbar-toggler-icon"></span>

        </button>




        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >


          <ul
            className="navbar-nav ms-auto align-items-lg-center"
          >



            <li className="nav-item">

              <Link
                className="nav-link px-3"
                to="/"
              >

                🏠 Home

              </Link>

            </li>





            <li className="nav-item">

              <Link
                className="nav-link px-3"
                to="/events"
              >

                🎪 Events

              </Link>

            </li>





            {!isAuthenticated ? (

              <>


                <li className="nav-item">

                  <Link
                    className="nav-link px-3"
                    to="/login"
                  >

                    🔐 Login

                  </Link>

                </li>




                <li className="nav-item">

                  <Link
                    className="btn btn-light text-primary fw-bold px-4 ms-lg-2 mt-2 mt-lg-0"
                    to="/register"
                    style={{
                      borderRadius:"25px"
                    }}
                  >

                    Register

                  </Link>

                </li>


              </>


            ) : (

              <>


                <li className="nav-item">

                  <Link
                    className="nav-link px-3"
                    to="/profile"
                  >

                    👤 Profile

                  </Link>

                </li>





                <li className="nav-item">

                  <Link
                    className="nav-link px-3"
                    to="/my-bookings"
                  >

                    📅 My Bookings

                  </Link>

                </li>





                <li className="nav-item">


                  <button

                    className="btn btn-danger px-4 ms-lg-3 mt-2 mt-lg-0"

                    style={{
                      borderRadius:"25px"
                    }}

                    onClick={handleLogout}

                  >

                    🚪 Logout

                  </button>


                </li>


              </>


            )}


          </ul>


        </div>


      </div>


    </nav>

  );

}


export default Navbar;