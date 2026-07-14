import { useState } from "react";
import { createBooking } from "../../services/bookingService";
import { useNavigate, useParams } from "react-router-dom";

function BookingForm() {

    const { packageId } = useParams();

    const navigate = useNavigate();

    const [numberOfMembers, setNumberOfMembers] = useState(1);

    const [loading, setLoading] = useState(false);


    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);


            const booking = await createBooking({

                numberOfMembers: Number(numberOfMembers),

                packageId: Number(packageId)

            });


            alert("Booking Created Successfully");


            navigate(
                `/payment/${booking.id}`
            );


        } catch (err) {

            console.error(err);


            alert(
                err.response?.data?.message ||
                "Booking Failed"
            );


        } finally {

            setLoading(false);

        }

    };


    return (

        <div
            className="bg-light min-vh-100 py-5"
        >

            <div className="container">


                <div
                    className="card border-0 shadow-lg mx-auto overflow-hidden"
                    style={{
                        maxWidth:"650px",
                        borderRadius:"20px"
                    }}
                >


                    {/* Header */}

                    <div
                        className="text-white text-center p-5"
                        style={{
                            background:
                            "linear-gradient(135deg,#0d6efd,#6610f2)"
                        }}
                    >

                        <div
                            style={{
                                fontSize:"70px"
                            }}
                        >
                            🎟️
                        </div>


                        <h2 className="fw-bold">
                            Book Your Package
                        </h2>


                        <p className="mb-0">
                            Complete your booking details below
                        </p>


                    </div>



                    {/* Form Body */}


                    <div className="card-body p-5">


                        <div
                            className="alert alert-primary"
                        >

                            <i className="bi bi-info-circle me-2"></i>

                            Your booking will be confirmed after successful payment.

                        </div>



                        <form onSubmit={handleSubmit}>


                            <div className="mb-4">


                                <label
                                    className="form-label fw-bold"
                                >

                                    Number of Members

                                </label>


                                <div className="input-group">


                                    <span className="input-group-text">

                                        <i className="bi bi-people-fill"></i>

                                    </span>


                                    <input

                                        type="number"

                                        min="1"

                                        className="form-control form-control-lg"

                                        value={numberOfMembers}

                                        onChange={(e)=>
                                            setNumberOfMembers(
                                                e.target.value
                                            )
                                        }

                                        required

                                    />


                                </div>


                                <small className="text-muted">

                                    Enter total number of people attending.

                                </small>


                            </div>




                            <div className="card bg-light border-0 mb-4">


                                <div className="card-body">


                                    <h5 className="fw-bold mb-3">

                                        Booking Summary

                                    </h5>


                                    <div
                                        className="d-flex justify-content-between"
                                    >

                                        <span>
                                            Members
                                        </span>


                                        <strong>
                                            {numberOfMembers}
                                        </strong>


                                    </div>


                                </div>


                            </div>




                            <button

                                type="submit"

                                className="btn btn-success btn-lg w-100"

                                disabled={loading}

                            >

                                {
                                    loading ?

                                    <>
                                        <span
                                            className="spinner-border spinner-border-sm me-2"
                                        ></span>

                                        Processing...

                                    </>

                                    :

                                    <>
                                        <i className="bi bi-check-circle me-2"></i>

                                        Confirm Booking

                                    </>

                                }


                            </button>



                        </form>


                    </div>



                </div>


            </div>


        </div>

    );

}


export default BookingForm;