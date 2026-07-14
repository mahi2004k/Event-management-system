import { useEffect, useState } from "react";
import {
  getMyBookings,
  cancelBooking,
} from "../../services/bookingService";

function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const data = await getMyBookings();
      setBookings(data || []);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = async (id) => {
    if (!window.confirm("Are you sure you want to cancel this booking?")) {
      return;
    }

    try {
      await cancelBooking(id);
      fetchBookings();
    } catch (error) {
      console.error(error);
      alert("Failed to cancel booking.");
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "CONFIRMED":
        return "bg-success";
      case "PENDING":
        return "bg-warning text-dark";
      case "CANCELLED":
        return "bg-danger";
      default:
        return "bg-secondary";
    }
  };

  return (
    <div className="bg-light min-vh-100">

      {/* Hero */}

      <section
        className="text-white py-5"
        style={{
          background: "linear-gradient(135deg,#0d6efd,#6610f2)",
        }}
      >
        <div className="container text-center">

          <h1 className="display-5 fw-bold">
            My Bookings
          </h1>

          <p className="lead">
            Manage all your event bookings in one place.
          </p>

          {!loading && (
            <span className="badge bg-light text-dark fs-6 px-4 py-2">
              {bookings.length} Booking(s)
            </span>
          )}

        </div>
      </section>

      <div className="container py-5">

        {/* Loading */}

        {loading && (
          <div className="text-center py-5">

            <div
              className="spinner-border text-primary"
              style={{
                width: "4rem",
                height: "4rem",
              }}
            ></div>

            <h4 className="mt-3">
              Loading Bookings...
            </h4>

          </div>
        )}

        {/* Empty */}

        {!loading && bookings.length === 0 && (
          <div className="card shadow border-0">

            <div className="card-body text-center py-5">

              <div style={{ fontSize: "70px" }}>
                📅
              </div>

              <h3 className="mt-3">
                No Bookings Found
              </h3>

              <p className="text-muted">
                You haven't booked any event yet.
              </p>

            </div>

          </div>
        )}

        {/* Booking Cards */}

        {!loading && bookings.length > 0 && (

          <div className="row">

            {bookings.map((booking) => (

              <div
                className="col-lg-6 mb-4"
                key={booking.id}
              >

                <div
                  className="card border-0 shadow-lg h-100"
                  style={{
                    borderRadius: "18px",
                    transition: "0.3s",
                  }}
                >

                  <div
                    className="card-header bg-primary text-white d-flex justify-content-between align-items-center"
                  >

                    <h5 className="mb-0">
                      Booking #{booking.id}
                    </h5>

                    <span
                      className={`badge ${getStatusBadge(
                        booking.status
                      )}`}
                    >
                      {booking.status}
                    </span>

                  </div>

                  <div className="card-body">

                    <div className="mb-3">

                      <h5 className="fw-bold">
                        🎁 Package
                      </h5>

                      <p className="text-muted mb-0">
                        {booking.packageName}
                      </p>

                    </div>

                    <hr />

                    <div className="mb-3">

                      <h5 className="fw-bold">
                        🎉 Event
                      </h5>

                      <p className="text-muted mb-0">
                        {booking.eventTitle}
                      </p>

                    </div>

                    <hr />

                    <div className="mb-3">

                      <h5 className="fw-bold">
                        👥 Members
                      </h5>

                      <p className="text-muted mb-0">
                        {booking.numberOfMembers}
                      </p>

                    </div>

                  </div>

                  <div className="card-footer bg-white border-0">

                    {booking.status !== "CANCELLED" ? (

                      <button
                        className="btn btn-danger w-100"
                        onClick={() =>
                          handleCancel(booking.id)
                        }
                      >
                        Cancel Booking
                      </button>

                    ) : (

                      <button
                        className="btn btn-secondary w-100"
                        disabled
                      >
                        Booking Cancelled
                      </button>

                    )}

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
}

export default MyBookings;