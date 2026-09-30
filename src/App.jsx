import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Legal from './pages/Legal.jsx'
import { privacy, terms } from './legal.js'
export default function App() {
  return (<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/privacy" element={<Legal title="Privacy policy" items={privacy} />} />
    <Route path="/terms" element={<Legal title="Terms and conditions" items={terms} />} />
    <Route path="*" element={<Legal title="Page not found" items={[['404', 'This page does not exist. Use the logo above to return home.']]} />} />
  </Routes>)
}
