import {
  Link,
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import "./App.css";

function Location() {
  const current = useLocation();
  return <p>{current.pathname}</p>;
}
function Child() {
  return (
    <>
      <div className="card vstack">
        <Link to="">go to /regions/foo</Link>
        <Link to="bar">go to /regions/foo/bar</Link>
      </div>
      <Routes>
        <Route path="" element={<p>list</p>} />
        <Route path=":name" element={<p>show</p>} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="card vstack">
        <Link to="/">go to Home</Link>
        <Link to="/regions/foo">go to /regions/foo</Link>
      </div>
      <Routes>
        <Route path="/" element={<p>root</p>} />
        <Route path="/regions/:slug/*" element={<Child />} />
      </Routes>
      <Location />
    </BrowserRouter>
  );
}

export default App;
