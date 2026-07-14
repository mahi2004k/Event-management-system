import { Link } from "react-router-dom";

function EventCard({ event }) {
  return (
    <div className="col-lg-4 col-md-6 mb-4">

      <div
        className="card border-0 shadow-lg h-100 overflow-hidden"
        style={{
          transition: "all 0.3s ease",
          borderRadius: "18px",
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
        {/* Event Image */}

        {event.imageUrl ? (
          <div className="position-relative">

            <img
              src={event.imageUrl}
              alt={event.name}
              className="card-img-top"
              style={{
                height: "240px",
                objectFit: "cover",
              }}
            />

            <span
              className="badge bg-primary position-absolute top-0 end-0 m-3 px-3 py-2"
              style={{ borderRadius: "20px" }}
            >
              {event.categoryName}
            </span>

          </div>
        ) : (
          <div
            className="bg-primary text-white d-flex justify-content-center align-items-center"
            style={{
              height: "240px",
              fontSize: "80px",
            }}
          >
            🎉
          </div>
        )}

        {/* Card Body */}

        <div className="card-body d-flex flex-column">

          <h4 className="fw-bold mb-3">
            {event.name}
          </h4>

          <p
            className="text-muted"
            style={{
              minHeight: "75px",
            }}
          >
            {event.description?.length > 110
              ? event.description.substring(0, 110) + "..."
              : event.description}
          </p>

          <hr />

          <div className="mb-2">

            <i className="bi bi-tag-fill text-primary me-2"></i>

            <strong>Category:</strong>

            <span className="ms-2 text-muted">
              {event.categoryName}
            </span>

          </div>

          <div className="mb-3">

            <i className="bi bi-geo-alt-fill text-danger me-2"></i>

            <strong>Location:</strong>

            <span className="ms-2 text-muted">
              {event.location}
            </span>

          </div>

          <div className="mt-auto">

            <Link
              to={`/events/${event.id}`}
              className="btn btn-primary w-100"
            >
              View Details →
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default EventCard;