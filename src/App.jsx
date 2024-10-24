import ProductDetails from "./ProductDetails";
import ProductsList from "./ProductsList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ResetPassword from "./ResetPassword";
import { QueryClient, QueryClientProvider } from "react-query";
import ForgotPassword from "./ForgotPassword";
import { Navbar } from "./components/Navbar";
import { Container } from "react-bootstrap";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import Return from "./Return";
const queryClient = new QueryClient();
function App() {
  return (
    <>
      <Router>
        <ShoppingCartProvider>
          <Navbar />
          <Container fluid className="mb-4">
            <QueryClientProvider client={queryClient}>
              <Routes>
                <Route path="/account/signIn" element={<SignIn />} />
                <Route path="/account/signUp" element={<SignUp />} />
                <Route
                  path="/account/resetPassword"
                  element={<ResetPassword />}
                />
                <Route
                  path="/account/forgotPassword"
                  element={<ForgotPassword />}
                />
                <Route path="*" element={<ProductsList />} />
                <Route
                  path="/product/:productId"
                  element={<ProductDetails />}
                />
                <Route path="/return" element={<Return />} />
              </Routes>
            </QueryClientProvider>
          </Container>
        </ShoppingCartProvider>
      </Router>
    </>
  );
}

export default App;
