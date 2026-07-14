import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getEventById } from "../../services/eventService";

function EventDetails() {
  const { id } = useParams();

  const [event, setEvent] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadEvent();
  }, [id]);

  const loadEvent = async () => {
    try {
      const data = await getEventById(id);
      setEvent(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ minHeight: "70vh" }}
      >
        <div className="text-center">
          <div
            className="spinner-border text-primary"
            style={{ width: "4rem", height: "4rem" }}
          ></div>

          <h4 className="mt-3 text-secondary">
            Loading Event...
          </h4>
        </div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger text-center shadow">
          <h4>Event Not Found</h4>
          <p>The requested event does not exist.</p>

          <Link to="/events" className="btn btn-primary">
            Back to Events
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-light py-5">

      <div className="container">

        <div className="card border-0 shadow-lg overflow-hidden">

          {/* Event Image */}

          {event.imageUrl ? (
            <img
              src={event.imageUrl}
              alt={event.title}
              style={{
                height: "450px",
                objectFit: "cover",
                width: "100%",
              }}
            />
          ) : (
            <div
              className="bg-primary text-white d-flex justify-content-center align-items-center"
              style={{
                height: "350px",
                fontSize: "90px",
              }}
            >
              🎉
            </div>
          )}

          <div className="card-body p-5">

            <div className="d-flex justify-content-between align-items-center flex-wrap">

              <div>

                <span className="badge bg-primary fs-6 mb-3">
                  {event.categoryName}
                </span>

                <h1 className="fw-bold">
                  {event.title}
                </h1>

              </div>

              <div>

                <h2 className="text-success fw-bold">
                  ₹ {event.price}
                </h2>

              </div>

            </div>

            <hr />

            <h4 className="mb-3">
              About This Event
            </h4>

            <p className="text-muted fs-5">
              {event.description}
            </p>

            <div className="row mt-5">

              <div className="col-md-6 mb-4">

                <div className="card border-0 shadow-sm h-100">

                  <div className="card-body">

                    <h5 className="fw-bold mb-4">
                      Event Information
                    </h5>

                    <p>
                      <i className="bi bi-calendar-event text-primary me-2"></i>

                      <strong>Date :</strong>{" "}
                      {event.eventDate}
                    </p>

                    <p>
                      <i className="bi bi-clock text-success me-2"></i>

                      <strong>Time :</strong>{" "}
                      {event.eventTime}
                    </p>

                    <p>
                      <i className="bi bi-geo-alt-fill text-danger me-2"></i>

                      <strong>Venue :</strong>{" "}
                      {event.venue}
                    </p>

                    <p>
                      <i className="bi bi-tags-fill text-warning me-2"></i>

                      <strong>Category :</strong>{" "}
                      {event.categoryName}
                    </p>

                  </div>

                </div>

              </div>

              <div className="col-md-6 mb-4">

                <div className="card border-0 shadow-sm h-100">

                  <div className="card-body">

                    <h5 className="fw-bold mb-4">
                      Booking Details
                    </h5>

                    <p>
                      <i className="bi bi-cash-stack text-success me-2"></i>

                      <strong>Price :</strong>{" "}
                      ₹ {event.price}
                    </p>

                    <p>
                      <i className="bi bi-people-fill text-primary me-2"></i>

                      <strong>Capacity :</strong>{" "}
                      {event.capacity}
                    </p>

                    <p>
                      <i className="bi bi-check-circle-fill text-success me-2"></i>

                      <strong>Status :</strong>{" "}
                      <span className="badge bg-success">
                        Available
                      </span>
                    </p>

                  </div>

                </div>

              </div>

            </div>

            <div className="mt-4 d-flex flex-wrap gap-3">

              <Link
                to={`/events/${event.id}/packages`}
                className="btn btn-success btn-lg"
              >
                <i className="bi bi-box-seam me-2"></i>

                View Packages
              </Link>

              <Link
                to="/events"
                className="btn btn-outline-secondary btn-lg"
              >
                <i className="bi bi-arrow-left me-2"></i>

                Back to Events
              </Link>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default EventDetails;