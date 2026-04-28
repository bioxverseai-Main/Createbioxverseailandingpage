import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Consumer from './Consumer';
import Hospitals from './Hospitals';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Consumer />} />
        <Route path="/hospitals" element={<Hospitals />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
