import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPackagesByEvent } from "../../services/packageService";
import PackageCard from "../../components/PackageCard";

function PackageList() {
  const { eventId } = useParams();

  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchPackages();
  }, [eventId]);

  const fetchPackages = async () => {
    try {
      const data = await getPackagesByEvent(eventId);
      setPackages(data || []);
    } catch (error) {
      console.log(error);
      setError("Failed to load packages.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-light min-vh-100">

      {/* Hero Section */}

      <section
        className="text-white py-5"
        style={{
          background: "linear-gradient(135deg,#198754,#20c997)",
        }}
      >
        <div className="container text-center">

          <h1 className="display-5 fw-bold">
            Event Packages
          </h1>

          <p className="lead mt-3">
            Choose the perfect package for your event.
          </p>

          {!loading && !error && (
            <span className="badge bg-light text-dark fs-6 px-4 py-2 mt-2">
              {packages.length} Packages Available
            </span>
          )}

        </div>
      </section>

      {/* Content */}

      <div className="container py-5">

        {/* Loading */}

        {loading && (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "300px" }}
          >
            <div className="text-center">

              <div
                className="spinner-border text-success"
                style={{
                  width: "4rem",
                  height: "4rem",
                }}
              ></div>

              <h4 className="mt-3">
                Loading Packages...
              </h4>

            </div>
          </div>
        )}

        {/* Error */}

        {!loading && error && (
          <div className="alert alert-danger text-center shadow">

            <h4>Something Went Wrong</h4>

            <p>{error}</p>

            <button
              className="btn btn-danger"
              onClick={fetchPackages}
            >
              Retry
            </button>

          </div>
        )}

        {/* Empty */}

        {!loading && !error && packages.length === 0 && (
          <div className="card shadow border-0">

            <div className="card-body text-center py-5">

              <div style={{ fontSize: "70px" }}>
                📦
              </div>

              <h3 className="mt-3">
                No Packages Available
              </h3>

              <p className="text-muted">
                There are currently no packages available for this event.
              </p>

            </div>

          </div>
        )}

        {/* Package Grid */}

        {!loading && !error && packages.length > 0 && (
          <>
            <div className="d-flex justify-content-between align-items-center mb-4">

              <h3 className="fw-bold">
                Available Packages
              </h3>

              <span className="badge bg-success fs-6">
                {packages.length} Packages
              </span>

            </div>

            <div className="row g-4">

              {packages.map((pkg) => (
                <PackageCard
                  key={pkg.id}
                  pkg={pkg}
                />
              ))}

            </div>
          </>
        )}

      </div>

    </div>
  );
}

export default PackageList;