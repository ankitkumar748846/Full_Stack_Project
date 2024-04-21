import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import NotFound from "./Pages/NotFound.jsx";
import Signup from "./Pages/Signup.jsx";
import Login from "./Pages/Login.jsx";
import CourseList from "./Pages/Course/CourseList.jsx";
import Contact from "./Pages/Contact.jsx";
import Denied from "./Pages/Denied.jsx";
import CourseDescription from "./Pages/Course/CourseDescription.jsx";
import RequireAuth from "./Components/Auth/RequireAuth.jsx";
import CreateCourse from "./Pages/Course/CreateCourse.jsx";
import Profile from "./Pages/User/Profile.jsx";
import EditProfile from "./Pages/User/EditProfile.jsx";
import Checkout from "./Pages/Payment/Checkout.js";
import CheckoutSuccess from "./Pages/Payment/CheckoutSuccess.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/courses" element={<CourseList />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/denied" element={<Denied />} />

        <Route path="/course/description" element={<CourseDescription />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route element={<RequireAuth allowedRoles={["ADMIN"]} />}>
          <Route path="/course/create" element={<CreateCourse />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={["ADMIN", "USER"]} />}>
          <Route path="/user/profile" element={<Profile />} />
          <Route path="/user/editprofile" element={<EditProfile />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout/success" element={<CheckoutSuccess />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
