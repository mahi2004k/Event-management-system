import { Link } from "react-router-dom";

function PackageCard({ pkg }) {
  return (
    <div className="col-lg-4 col-md-6 mb-4">

      <div
        className="card border-0 shadow-lg h-100 overflow-hidden"
        style={{
          borderRadius: "18px",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-8px)";
          e.currentTarget.style.boxShadow =
            "0 18px 35px rgba(0,0,0,0.18)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "";
        }}
      >
        {/* Header */}

        <div
          className="text-center text-white"
          style={{
            background: "linear-gradient(135deg,#0d6efd,#6610f2)",
            padding: "35px 20px",
          }}
        >
          <div style={{ fontSize: "55px" }}>
            🎁
          </div>

          <h3 className="fw-bold mt-3">
            {pkg.packageName}
          </h3>
        </div>

        {/* Body */}

        <div className="card-body d-flex flex-column">

          <div className="text-center mb-4">

            <span
              className="badge bg-success fs-5 px-4 py-3"
              style={{
                borderRadius: "30px",
              }}
            >
              ₹ {pkg.packagePrice}
            </span>

          </div>

          <p
            className="text-muted"
            style={{
              minHeight: "90px",
            }}
          >
            {pkg.description?.length > 140
              ? pkg.description.substring(0, 140) + "..."
              : pkg.description}
          </p>

          <hr />

          <div className="mb-4">

            <div className="d-flex justify-content-between mb-2">
              <span>✔ Professional Service</span>
            </div>

            <div className="d-flex justify-content-between mb-2">
              <span>✔ Trusted Organizers</span>
            </div>

            <div className="d-flex justify-content-between">
              <span>✔ Best Price Guarantee</span>
            </div>

          </div>

          <div className="mt-auto">

            <Link
              to={`/book-package/${pkg.id}`}
              className="btn btn-success w-100 btn-lg"
            >
              Book Now →
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default PackageCard;