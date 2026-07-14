import { useEffect, useState } from "react";
import { getProfile } from "../../services/userService";
import {
    FaUser,
    FaEnvelope,
    FaPhone,
    FaShieldAlt,
    FaCalendarAlt
} from "react-icons/fa";


function Profile() {

    const [user, setUser] = useState(null);


    useEffect(() => {

        loadProfile();

    }, []);

    const loadProfile = async () => {

        try {

            const data = await getProfile();

            setUser(data);

        }
        catch (error) {

            console.log(error);

        }

    };

    if (!user) {

        return (

            <div className="container py-5 text-center">

                <div className="spinner-border text-primary"></div>

                <h5 className="mt-3">
                    Loading Profile...
                </h5>

            </div>

        );

    }

    return (

        <div className="container py-5">

            <div 
                className="card shadow-lg border-0 mx-auto overflow-hidden"
                style={{
                    maxWidth:"650px",
                    borderRadius:"20px"
                }}
            >
\
                {/* Header */}

                <div
                    className="text-white text-center p-5"
                    style={{
                        background:
                        "linear-gradient(135deg,#667eea,#764ba2)"
                    }}
                >
\
                    <div
                        className="rounded-circle bg-white text-primary d-flex align-items-center justify-content-center mx-auto mb-3"
                        style={{
                            width:"100px",
                            height:"100px",
                            fontSize:"45px"
                        }}
                    >

                        <FaUser/>

                    </div>

                    <h2 className="fw-bold">

                        {user.firstName} {user.lastName}

                    </h2>

                    <span className="badge bg-light text-primary px-4 py-2">

                        {user.role}

                    </span>
                </div>

                {/* Body */}

                <div className="card-body p-4">


                    <h5 className="fw-bold mb-4">

                        Account Information

                    </h5>

                    <div className="row g-3">

                        <div className="col-md-6">

                            <div className="p-3 bg-light rounded shadow-sm">

                                <FaEnvelope className="text-primary me-2"/>

                                <small className="text-muted d-block">
                                    Email
                                </small>


                                <strong>
                                    {user.email}
                                </strong>


                            </div>
                        </div>

                        <div className="col-md-6">

                            <div className="p-3 bg-light rounded shadow-sm">

                                <FaPhone className="text-success me-2"/>

                                <small className="text-muted d-block">
                                    Phone
                                </small>

                                <strong>
                                    {user.phone}
                                </strong>
                            </div>


                        </div>

                        <div className="col-md-6">

                            <div className="p-3 bg-light rounded shadow-sm">

                                <FaShieldAlt className="text-danger me-2"/>

                                <small className="text-muted d-block">
                                    Role
                                </small>

                                <strong>
                                    {user.role}
                                </strong>
                            </div>
                        </div>

                        <div className="col-md-6">

                            <div className="p-3 bg-light rounded shadow-sm">

                                <FaCalendarAlt className="text-warning me-2"/>

                                <small className="text-muted d-block">
                                    Account Status
                                </small>

                                <strong className="text-success">
                                    Active
                                </strong>
                            </div>
                        </div>
                    </div>
                    <hr className="my-4"/>
                    <button 
                        className="btn btn-primary w-100 py-2"
                        style={{
                            borderRadius:"10px"
                        }}
                    >
                        Edit Profile

                    </button>
                </div>
            </div>
        </div>

    );

}

export default Profile;