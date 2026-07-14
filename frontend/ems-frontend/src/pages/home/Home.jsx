import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllCategories } from "../../services/categoryService";
import CategoryCard from "../../components/CategoryCard";

function Home() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const data = await getAllCategories();
      setCategories(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero Section */}

      <section
        className="text-white"
        style={{
          background:
            "linear-gradient(135deg, #0d6efd 0%, #6610f2 100%)",
          padding: "90px 0",
        }}
      >
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-6">

              <span className="badge bg-warning text-dark mb-3 fs-6">
                #1 Event Management Platform
              </span>

              <h1 className="display-3 fw-bold mb-4">
                Plan Your Dream Event With Ease
              </h1>

              <p className="lead mb-4">
                Discover premium event packages, trusted organizers,
                professional services and unforgettable experiences—all in one
                place.
              </p>

              <div className="d-flex flex-wrap gap-3">

                <Link to="/events" className="btn btn-light btn-lg px-4">
                  Explore Events
                </Link>

                <Link
                  to="events/packages"
                  className="btn btn-outline-light btn-lg px-4"
                >
                  View Packages
                </Link>

              </div>

            </div>

            <div className="col-lg-6 text-center mt-5 mt-lg-0">

              <div
                className="bg-white rounded-circle shadow-lg d-inline-flex justify-content-center align-items-center"
                style={{
                  width: "320px",
                  height: "320px",
                  fontSize: "140px",
                }}
              >
                🎉
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Statistics */}

      <section className="py-5 bg-light">

        <div className="container">

          <div className="row text-center">

            <div className="col-md-3 mb-4">

              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <h1 className="text-primary fw-bold">500+</h1>
                  <h5>Events</h5>
                </div>
              </div>

            </div>

            <div className="col-md-3 mb-4">

              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <h1 className="text-success fw-bold">120+</h1>
                  <h5>Packages</h5>
                </div>
              </div>

            </div>

            <div className="col-md-3 mb-4">

              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <h1 className="text-danger fw-bold">1000+</h1>
                  <h5>Happy Clients</h5>
                </div>
              </div>

            </div>

            <div className="col-md-3 mb-4">

              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <h1 className="text-warning fw-bold">24/7</h1>
                  <h5>Support</h5>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Categories */}

      <section className="container py-5">

        <div className="text-center mb-5">

          <h2 className="fw-bold">Browse Event Categories</h2>

          <p className="text-muted">
            Find the perfect category for your next celebration.
          </p>

        </div>

        <div className="row">

          {loading ? (
            <div className="text-center py-5">

              <div
                className="spinner-border text-primary"
                role="status"
              ></div>

              <p className="mt-3">Loading Categories...</p>

            </div>
          ) : categories.length === 0 ? (
            <h4 className="text-center text-muted">
              No Categories Available
            </h4>
          ) : (
            categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
              />
            ))
          )}

        </div>

      </section>

      {/* Featured Services */}

      <section className="py-5 bg-light">

        <div className="container">

          <div className="text-center mb-5">

            <h2 className="fw-bold">
              Featured Event Services
            </h2>

            <p className="text-muted">
              Everything you need to make your event unforgettable.
            </p>

          </div>

          <div className="row g-4">

            <div className="col-md-4">

              <div className="card border-0 shadow h-100">

                <div className="card-body text-center">

                  <div className="display-3 mb-3">
                    🎵
                  </div>

                  <h4>Music & DJ</h4>

                  <p className="text-muted">
                    Professional DJs, live bands and amazing sound systems for
                    every occasion.
                  </p>

                </div>

              </div>

            </div>

            <div className="col-md-4">

              <div className="card border-0 shadow h-100">

                <div className="card-body text-center">

                  <div className="display-3 mb-3">
                    🎂
                  </div>

                  <h4>Birthday Events</h4>

                  <p className="text-muted">
                    Creative decorations, cakes, photography and complete party
                    planning.
                  </p>

                </div>

              </div>

            </div>

            <div className="col-md-4">

              <div className="card border-0 shadow h-100">

                <div className="card-body text-center">

                  <div className="display-3 mb-3">
                    💍
                  </div>

                  <h4>Wedding Planning</h4>

                  <p className="text-muted">
                    Elegant venues, decoration, catering and premium wedding
                    packages.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Why Choose Us */}

      <section className="container py-5">

        <div className="row align-items-center">

          <div className="col-lg-6">

            <h2 className="fw-bold mb-4">
              Why Choose Us?
            </h2>

            <div className="mb-4">

              <h5>✅ Trusted Event Organizers</h5>

              <p className="text-muted">
                Work with verified professionals who ensure a successful event.
              </p>

            </div>

            <div className="mb-4">

              <h5>💰 Affordable Packages</h5>

              <p className="text-muted">
                Flexible pricing options suitable for every budget.
              </p>

            </div>

            <div className="mb-4">

              <h5>⭐ Premium Quality</h5>

              <p className="text-muted">
                High-quality services with customer satisfaction guaranteed.
              </p>

            </div>

          </div>

          <div className="col-lg-6 text-center">

            <div
              className="bg-primary rounded-4 text-white shadow-lg d-flex justify-content-center align-items-center"
              style={{
                height: "350px",
                fontSize: "140px",
              }}
            >
              🥳
            </div>

          </div>

        </div>

      </section>

      {/* Call To Action */}

      <section
        className="py-5 text-white"
        style={{
          background:
            "linear-gradient(135deg,#6610f2,#0d6efd)",
        }}
      >

        <div className="container text-center">

          <h2 className="fw-bold mb-3">
            Ready To Plan Your Next Event?
          </h2>

          <p className="lead mb-4">
            Browse our event packages and book your perfect event today.
          </p>

          <Link
            to="/events"
            className="btn btn-light btn-lg px-5"
          >
            Get Started
          </Link>

        </div>

      </section>
    </>
  );
}

export default Home;