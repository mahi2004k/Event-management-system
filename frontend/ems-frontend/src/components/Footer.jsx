import { Link } from "react-router-dom";

function Footer() {

  return (

    <footer
      className="text-white mt-5"
      style={{
        background:
          "linear-gradient(135deg,#0d6efd,#6610f2)"
      }}
    >

      <div className="container py-5">


        <div className="row">


          {/* Brand */}

          <div className="col-md-4 mb-4">


            <h3 className="fw-bold">
              🎉 EventPro
            </h3>


            <p className="mt-3">

              Create unforgettable moments with
              amazing events, packages and services.

            </p>


          </div>




          {/* Quick Links */}

          <div className="col-md-4 mb-4">


            <h5 className="fw-bold">
              Quick Links
            </h5>


            <ul className="list-unstyled mt-3">


              <li className="mb-2">

                <Link
                  to="/"
                  className="text-white text-decoration-none"
                >
                  Home
                </Link>

              </li>



              <li className="mb-2">

                <Link
                  to="/events"
                  className="text-white text-decoration-none"
                >
                  Events
                </Link>

              </li>



              <li className="mb-2">

                <Link
                  to="/my-bookings"
                  className="text-white text-decoration-none"
                >
                  My Bookings
                </Link>

              </li>


            </ul>


          </div>





          {/* Contact */}

          <div className="col-md-4 mb-4">


            <h5 className="fw-bold">
              Contact
            </h5>


            <p className="mt-3 mb-2">

              📧 support@eventpro.com

            </p>


            <p>

              📞 +91 98765 43210

            </p>


            <div className="mt-3">


              <span className="fs-4 me-3">
                🌐
              </span>


              <span className="fs-4 me-3">
                📘
              </span>


              <span className="fs-4">
                📷
              </span>


            </div>


          </div>


        </div>


        <hr className="border-light" />



        <div className="text-center">


          <p className="mb-0">

            © 2026 Event Management System |
            All Rights Reserved

          </p>


        </div>


      </div>


    </footer>

  );

}


export default Footer;