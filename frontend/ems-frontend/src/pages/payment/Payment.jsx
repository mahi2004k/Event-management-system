import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createPayment } from "../../services/paymentService";

function Payment() {
  const { bookingId } = useParams();
  const navigate = useNavigate();

  const paymentCalled = useRef(false);

  const [payment, setPayment] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!paymentCalled.current) {
      paymentCalled.current = true;
      makePayment();
    }
  }, []);

  const makePayment = async () => {
    try {
      const data = await createPayment({
        bookingId: Number(bookingId),
      });

      setPayment(data);
    } catch (error) {
      if (error.response?.status === 409) {
        alert("Payment already completed.");
      } else {
        alert(
          error.response?.data?.message ||
            "Payment Failed"
        );
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          minHeight: "100vh",
          background: "#f8f9fa",
        }}
      >
        <div className="text-center">

          <div
            className="spinner-border text-primary"
            style={{
              width: "4rem",
              height: "4rem",
            }}
          ></div>

          <h3 className="mt-4">
            Processing Your Payment...
          </h3>

          <p className="text-muted">
            Please wait while we confirm your booking.
          </p>

        </div>
      </div>
    );
  }

  if (!payment) {
    return (
      <div className="container mt-5">

        <div className="alert alert-danger text-center shadow">

          <h3>Payment Failed</h3>

          <p>
            Unable to retrieve payment details.
          </p>

          <button
            className="btn btn-primary"
            onClick={() => navigate("/my-bookings")}
          >
            Back to Bookings
          </button>

        </div>

      </div>
    );
  }

  return (
    <div
      className="py-5"
      style={{
        background: "#f8f9fa",
        minHeight: "100vh",
      }}
    >
      <div className="container">

        <div
          className="card border-0 shadow-lg mx-auto"
          style={{
            maxWidth: "700px",
            borderRadius: "20px",
          }}
        >

          {/* Header */}

          <div
            className="text-center text-white"
            style={{
              background:
                "linear-gradient(135deg,#198754,#20c997)",
              padding: "40px",
            }}
          >

            <div
              style={{
                fontSize: "70px",
              }}
            >
              ✅
            </div>

            <h2 className="fw-bold mt-3">
              Payment Successful
            </h2>

            <p className="mb-0">
              Your booking has been confirmed.
            </p>

          </div>

          {/* Body */}

          <div className="card-body p-5">

            <div className="row mb-4">

              <div className="col-6">
                <strong>Package</strong>
              </div>

              <div className="col-6 text-end">
                {payment.packageName}
              </div>

            </div>

            <hr />

            <div className="row mb-4">

              <div className="col-6">
                <strong>Amount Paid</strong>
              </div>

              <div className="col-6 text-end text-success fw-bold fs-5">
                ₹ {payment.amount}
              </div>

            </div>

            <hr />

            <div className="row mb-4">

              <div className="col-6">
                <strong>Transaction ID</strong>
              </div>

              <div className="col-6 text-end">

                <span className="badge bg-dark fs-6">
                  {payment.transactionId}
                </span>

              </div>

            </div>

            <hr />

            <div className="row mb-4">

              <div className="col-6">
                <strong>Status</strong>
              </div>

              <div className="col-6 text-end">

                <span className="badge bg-success fs-6">
                  {payment.status}
                </span>

              </div>

            </div>

            <div className="alert alert-success mt-4">

              🎉 Thank you for your booking! Your payment has been received successfully.

            </div>

            <div className="d-grid gap-3 mt-4">

              <button
                className="btn btn-success btn-lg"
                onClick={() => navigate("/my-bookings")}
              >
                View My Bookings
              </button>

              <button
                className="btn btn-outline-primary"
                onClick={() => navigate("/events")}
              >
                Explore More Events
              </button>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Payment;