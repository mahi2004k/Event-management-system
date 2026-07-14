import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../../services/authService";
import { useAuth } from "../../context/AuthContext";

function Login() {

  const navigate = useNavigate();

  const { login: saveLogin } = useAuth();


  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });


  const [loading, setLoading] = useState(false);



  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };



  const handleSubmit = async (e) => {

    e.preventDefault();


    if (!formData.email || !formData.password) {

      toast.error(
        "Email and Password are required"
      );

      return;

    }


    try {

      setLoading(true);


      const response = await login(formData);


      saveLogin(
        response.accessToken
      );


      toast.success(
        response.message || "Login Successful"
      );


      navigate("/");


    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Invalid Email or Password"
      );


    } finally {

      setLoading(false);

    }

  };



  return (

    <div
      className="min-vh-100 d-flex align-items-center"
      style={{
        background:
          "linear-gradient(135deg,#0d6efd,#6610f2)",
      }}
    >

      <div className="container">


        <div className="row justify-content-center">


          <div className="col-lg-5 col-md-7">


            <div
              className="card border-0 shadow-lg overflow-hidden"
              style={{
                borderRadius:"22px"
              }}
            >


              {/* Header */}

              <div
                className="text-center text-white p-5"
                style={{
                  background:
                  "linear-gradient(135deg,#6610f2,#0d6efd)"
                }}
              >


                <div
                  style={{
                    fontSize:"70px"
                  }}
                >
                  🔐
                </div>


                <h2 className="fw-bold mt-3">
                  Welcome Back
                </h2>


                <p className="mb-0">
                  Login to manage your events
                </p>


              </div>



              {/* Form */}


              <div className="card-body p-5">


                <form onSubmit={handleSubmit}>


                  <div className="mb-4">


                    <label className="form-label fw-bold">

                      Email Address

                    </label>


                    <div className="input-group">


                      <span className="input-group-text">

                        <i className="bi bi-envelope-fill"></i>

                      </span>


                      <input

                        type="email"

                        className="form-control form-control-lg"

                        name="email"

                        placeholder="Enter your email"

                        value={formData.email}

                        onChange={handleChange}

                      />


                    </div>


                  </div>




                  <div className="mb-4">


                    <label className="form-label fw-bold">

                      Password

                    </label>


                    <div className="input-group">


                      <span className="input-group-text">

                        <i className="bi bi-lock-fill"></i>

                      </span>


                      <input

                        type="password"

                        className="form-control form-control-lg"

                        name="password"

                        placeholder="Enter your password"

                        value={formData.password}

                        onChange={handleChange}

                      />


                    </div>


                  </div>




                  <button

                    disabled={loading}

                    className="btn btn-primary btn-lg w-100"

                  >

                    {
                      loading ?

                      <>

                        <span
                          className="spinner-border spinner-border-sm me-2"
                        ></span>

                        Logging In...

                      </>

                      :

                      <>
                        <i className="bi bi-box-arrow-in-right me-2"></i>

                        Login

                      </>

                    }


                  </button>



                </form>



                <p className="text-center mt-4 mb-0">


                  Don't have an account?


                  <Link
                    to="/register"
                    className="fw-bold text-decoration-none ms-2"
                  >

                    Register

                  </Link>


                </p>


              </div>



            </div>


          </div>


        </div>


      </div>


    </div>

  );

}


export default Login;