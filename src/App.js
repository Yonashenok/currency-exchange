import { Routes, Route, Outlet } from 'react-router-dom';
import './App.css';

function Layout() {
  return (
    <>
      <ul className="">
        <li>
          <a to="/">Home</a>
        </li>
        <li>
          <a to="/about">About</a>
        </li>
      </ul>
      <Outlet />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<h1>Hello world!</h1>} />
        <Route path="about" element={<div>About page</div>} />
        <Route path="*" element={<div>If page not found it goes here</div>} />
      </Route>
    </Routes>
  );
}

export default App;
