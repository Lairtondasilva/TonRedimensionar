import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import './App.css';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const Instagram = lazy(() => import('./pages/Instagram'));
const WhatsApp = lazy(() => import('./pages/WhatsApp'));
const Photo3x4 = lazy(() => import('./pages/Photo3x4'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));

function Loading() {
  return <div className="loading-spinner">Carregando...</div>;
}

function App() {
  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/instagram" element={<Instagram />} />
          <Route path="/whatsapp" element={<WhatsApp />} />
          <Route path="/3x4" element={<Photo3x4 />} />
          <Route path="/privacidade" element={<Privacy />} />
          <Route path="/termos" element={<Terms />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
