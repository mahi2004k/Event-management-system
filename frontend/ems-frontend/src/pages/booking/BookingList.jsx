import { useEffect, useState } from "react";
import { getAllBookings } from "../../services/bookingService";

function BookingList() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = async () => {
    try {
      const data = await getAllBookings();
      setBookings(data || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
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

      {/* Header */}

      <section
        className="text-white py-5"
        style={{
          background:
            "linear-gradient(135deg,#0d6efd,#6610f2)",
        }}
      >
        <div className="container">

          <h1 className="display-5 fw-bold">
            Booking Management
          </h1>

          <p className="lead">
            View and manage all customer bookings.
          </p>

          {!loading && (
            <span className="badge bg-light text-dark fs-6 px-4 py-2">
              Total Bookings : {bookings.length}
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
                📋
              </div>

              <h3 className="mt-3">
                No Bookings Found
              </h3>

            </div>

          </div>
        )}

        {/* Table */}

        {!loading && bookings.length > 0 && (

          <div className="card border-0 shadow-lg">

            <div className="card-header bg-primary text-white">

              <h4 className="mb-0">
                Booking List
              </h4>

            </div>

            <div className="table-responsive">

              <table className="table table-hover align-middle mb-0">

                <thead className="table-dark">

                  <tr>

                    <th>#</th>

                    <th>User</th>

                    <th>Email</th>

                    <th>Package</th>

                    <th>Members</th>

                    <th>Status</th>

                  </tr>

                </thead>

                <tbody>

                  {bookings.map((booking, index) => (

                    <tr key={booking.id}>

                      <td>
                        {index + 1}
                      </td>

                      <td className="fw-semibold">
                        {booking.userName}
                      </td>

                      <td>
                        {booking.userEmail}
                      </td>

                      <td>
                        {booking.packageName}
                      </td>

                      <td>
                        {booking.numberOfMembers}
                      </td>

                      <td>

                        <span
                          className={`badge ${getStatusBadge(
                            booking.status
                          )}`}
                        >
                          {booking.status}
                        </span>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>

        )}

      </div>

    </div>
  );
}

export default BookingList;