import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { register } from "../../services/authService";

function Register() {

  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
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


    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.password
    ) {

      toast.error(
        "All fields are required"
      );

      return;

    }


    try {

      setLoading(true);


      const response = await register(formData);


      toast.success(
        response.message ||
        "Registration Successful"
      );


      navigate("/login");


    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Registration Failed"
      );


    } finally {

      setLoading(false);

    }

  };



  return (

    <div
      className="min-vh-100 d-flex align-items-center py-5"
      style={{
        background:
        "linear-gradient(135deg,#0d6efd,#6610f2)",
      }}
    >

      <div className="container">


        <div className="row justify-content-center">


          <div className="col-lg-6 col-md-8">


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
                  🚀
                </div>


                <h2 className="fw-bold mt-3">
                  Create Account
                </h2>


                <p className="mb-0">
                  Join our event management community
                </p>


              </div>



              {/* Form */}


              <div className="card-body p-5">


                <form onSubmit={handleSubmit}>


                  {/* Name Row */}

                  <div className="row">


                    <div className="col-md-6 mb-3">


                      <label className="form-label fw-bold">
                        First Name
                      </label>


                      <div className="input-group">


                        <span className="input-group-text">

                          <i className="bi bi-person-fill"></i>

                        </span>


                        <input

                          type="text"

                          className="form-control"

                          name="firstName"

                          placeholder="First name"

                          value={formData.firstName}

                          onChange={handleChange}

                        />


                      </div>


                    </div>




                    <div className="col-md-6 mb-3">


                      <label className="form-label fw-bold">
                        Last Name
                      </label>


                      <div className="input-group">


                        <span className="input-group-text">

                          <i className="bi bi-person-fill"></i>

                        </span>


                        <input

                          type="text"

                          className="form-control"

                          name="lastName"

                          placeholder="Last name"

                          value={formData.lastName}

                          onChange={handleChange}

                        />


                      </div>


                    </div>


                  </div>





                  <div className="mb-3">


                    <label className="form-label fw-bold">
                      Email
                    </label>


                    <div className="input-group">


                      <span className="input-group-text">

                        <i className="bi bi-envelope-fill"></i>

                      </span>


                      <input

                        type="email"

                        className="form-control"

                        name="email"

                        placeholder="Enter email"

                        value={formData.email}

                        onChange={handleChange}

                      />


                    </div>


                  </div>





                  <div className="mb-3">


                    <label className="form-label fw-bold">
                      Phone
                    </label>


                    <div className="input-group">


                      <span className="input-group-text">

                        <i className="bi bi-telephone-fill"></i>

                      </span>


                      <input

                        type="text"

                        className="form-control"

                        name="phone"

                        placeholder="Mobile number"

                        value={formData.phone}

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

                        className="form-control"

                        name="password"

                        placeholder="Create password"

                        value={formData.password}

                        onChange={handleChange}

                      />


                    </div>


                  </div>





                  <button

                    className="btn btn-primary btn-lg w-100"

                    disabled={loading}

                  >

                    {

                      loading ?

                      <>

                        <span
                          className="spinner-border spinner-border-sm me-2"
                        ></span>

                        Creating Account...

                      </>

                      :

                      <>

                        <i className="bi bi-person-plus-fill me-2"></i>

                        Register

                      </>

                    }


                  </button>



                </form>




                <p className="text-center mt-4 mb-0">


                  Already have an account?


                  <Link
                    to="/login"
                    className="fw-bold text-decoration-none ms-2"
                  >

                    Login

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


export default Register;