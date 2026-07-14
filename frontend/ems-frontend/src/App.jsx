import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";

import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import Profile from "./pages/profile/Profile";

import MyBookings from "./pages/booking/MyBookings";
import BookingList from "./pages/booking/BookingList";
import BookingForm from "./pages/booking/BookingForm";

import Payment from "./pages/payment/Payment";

import EventList from "./pages/event/EventList";
import EventDetails from "./pages/event/EventDetails";

import PackageList from "./pages/package/PackageList";


function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* Public Routes */}

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />


        <Route path="/events" element={<EventList />} />

        <Route 
          path="/events/:id" 
          element={<EventDetails />} 
        />

        <Route
          path="/events/:eventId/packages"
          element={<PackageList />}
        />


        {/* Protected User Routes */}

        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />


        <Route
          path="/my-bookings"
          element={
            <PrivateRoute>
              <MyBookings />
            </PrivateRoute>
          }
        />


        <Route
          path="/book-package/:packageId"
          element={
            <PrivateRoute>
              <BookingForm />
            </PrivateRoute>
          }
        />


        <Route
          path="/payment"
          element={
            <PrivateRoute>
              <Payment />
            </PrivateRoute>
          }
        />


        {/* Admin Route */}

        <Route
          path="/bookings"
          element={
            <PrivateRoute>
              <BookingList />
            </PrivateRoute>
          }
        />

        <Route

path="/payment/:bookingId"

element={<Payment/>}

/>


      </Routes>


      <Footer />


      <ToastContainer 
        position="top-right" 
        autoClose={3000} 
      />


    </BrowserRouter>

  );

}

export default App;