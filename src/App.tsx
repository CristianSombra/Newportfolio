import { Suspense } from 'react';
import AppRouter from './routes/AppRouter'
import { Navbar, Footer } from './layouts/index';
import { ScrollTop } from './components/index';
import { ToastContainer } from "react-toastify";
import { SpinnerLoading } from "./components";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "react-toastify/dist/ReactToastify.css";
import './App.css'

function App() {

  return (
    <Suspense fallback={<SpinnerLoading />}>
      <Navbar />
      <AppRouter />
      <ScrollTop />
      <Footer />
      <ToastContainer />
    </Suspense>
  )
}

export default App;
