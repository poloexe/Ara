import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthStore } from "./store/useAuthStore.js";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Shop from "./pages/Shop.jsx";
import About from "./pages/About.jsx";
import Cart from "./pages/Cart.jsx";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";

function App() {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth && !authUser) {
    return (
      <div className="flex items-center justify-center h-screen">
        Let me cook...
      </div>
    );
  }

  return (
    <>
      <Toaster />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen w-full bg-background text-primary">
          <Navbar />

          {/* Main App Routes */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/shop/:id" element={<ProductDetails />} />
              <Route path="/about" element={<About />} />

              <Route
                path="/cart"
                element={authUser ? <Cart /> : <Navigate to="/login" />}
              />

              <Route
                path="/signup"
                element={!authUser ? <SignUp /> : <Navigate to="/" />}
              />
              <Route
                path="/login"
                element={!authUser ? <Login /> : <Navigate to="/" />}
              />
              <Route
                path="/admin"
                element={authUser?.isAdmin ? <AdminDashboard /> : <Navigate to="/" />}
              />
            </Routes>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
