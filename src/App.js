import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

// components
import Navbar from './components/Navbar';
import { useAuthContext } from './hooks/useAuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  /* Destructuring the user and authIsReady from the useAuthContext hook. */
  const { user, authIsReady } = useAuthContext();
  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          {/* A way to render the components based on the path.  */}
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="login" />}
            />
            <Route
              path="signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />
            <Route
              path="login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
