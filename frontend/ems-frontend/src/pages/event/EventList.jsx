import { useEffect, useState } from "react";
import EventCard from "../../components/EventCard";
import { getAllEvents } from "../../services/eventService";

function EventList() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const data = await getAllEvents();
      setEvents(data || []);
    } catch (error) {
      console.log(error);
      setError("Failed to load events.");
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
          background: "linear-gradient(135deg,#0d6efd,#6610f2)",
        }}
      >
        <div className="container text-center">

          <h1 className="display-4 fw-bold">
            Explore Amazing Events
          </h1>

          <p className="lead mt-3">
            Discover exciting events and book your favorite experience.
          </p>

          {!loading && !error && (
            <span className="badge bg-light text-dark fs-6 mt-2 px-4 py-2">
              {events.length} Events Available
            </span>
          )}

        </div>
      </section>

      <div className="container py-5">

        {/* Loading */}

        {loading && (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "300px" }}
          >
            <div className="text-center">

              <div
                className="spinner-border text-primary"
                style={{
                  width: "4rem",
                  height: "4rem",
                }}
              ></div>

              <h5 className="mt-3 text-secondary">
                Loading Events...
              </h5>

            </div>
          </div>
        )}

        {/* Error */}

        {!loading && error && (
          <div className="alert alert-danger text-center shadow-sm">

            <h4 className="mb-2">
              Something Went Wrong
            </h4>

            <p>{error}</p>

            <button
              className="btn btn-danger"
              onClick={fetchEvents}
            >
              Retry
            </button>

          </div>
        )}

        {/* Empty */}

        {!loading && !error && events.length === 0 && (
          <div className="card shadow border-0">

            <div className="card-body text-center py-5">

              <div style={{ fontSize: "70px" }}>
                📅
              </div>

              <h3 className="mt-3">
                No Events Available
              </h3>

              <p className="text-muted">
                There are currently no events to display.
              </p>

            </div>

          </div>
        )}

        {/* Event Grid */}

        {!loading && !error && events.length > 0 && (
          <>
            <div className="d-flex justify-content-between align-items-center mb-4">

              <h3 className="fw-bold">
                Available Events
              </h3>

              <span className="badge bg-primary fs-6">
                {events.length} Events
              </span>

            </div>

            <div className="row g-4">

              {events.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                />
              ))}

            </div>
          </>
        )}

      </div>

    </div>
  );
}

export default EventList;