function CategoryCard({ category }) {
  return (
    <div className="col-lg-4 col-md-6 mb-4">

      <div
        className="card border-0 shadow-lg h-100 overflow-hidden"
        style={{
          borderRadius: "18px",
          transition: "all 0.3s ease",
          cursor: "pointer",
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
        {/* Category Image */}

        {category.imageUrl ? (
          <div className="position-relative">

            <img
              src={category.imageUrl}
              alt={category.name}
              className="card-img-top"
              style={{
                height: "240px",
                objectFit: "cover",
              }}
            />

            <span
              className="badge bg-primary position-absolute top-0 end-0 m-3 px-3 py-2"
              style={{
                borderRadius: "20px",
              }}
            >
              Category
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
            🎊
          </div>
        )}

        {/* Card Body */}

        <div className="card-body text-center d-flex flex-column">

          <h4 className="fw-bold mb-3">
            {category.name}
          </h4>

          <p
            className="text-muted"
            style={{
              minHeight: "70px",
            }}
          >
            {category.description?.length > 120
              ? category.description.substring(0, 120) + "..."
              : category.description}
          </p>

          <hr />

          <div className="mt-auto">

            <span className="badge bg-light text-primary border fs-6 px-3 py-2">
              Explore Events
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}

export default CategoryCard;