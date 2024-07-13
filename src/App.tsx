import { Suspense } from 'react';
import AppRouter from './routes/AppRouter'
import { SpinnerLoading } from "./components";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "react-toastify/dist/ReactToastify.css";
import './App.css'

function App() {

  return (
    <Suspense fallback={<SpinnerLoading />}>
      <AppRouter />
    </Suspense>
  )
}

export default App;
