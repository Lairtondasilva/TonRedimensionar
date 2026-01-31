import { useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Maximize } from 'lucide-react';
import { useAnalytics } from '../hooks/useAnalytics';
import AdSense from './AdSense';
import '../App.css';

function Layout({ children }) {
  const location = useLocation();
  const { trackPageView } = useAnalytics();

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location, trackPageView]);

  return (
    <div className="layout-wrapper">
      <header className="site-header">
        <div className="header-container">
          <Link to="/" className="logo-link">
            <div className="logo-icon-bg">
              <Maximize size={24} strokeWidth={2.5} />
            </div>
            TonRedimensionar
          </Link>
          <nav>
            <NavLink to="/instagram" className={({ isActive }) => isActive ? "active" : ""}>Instagram</NavLink>
            <NavLink to="/whatsapp" className={({ isActive }) => isActive ? "active" : ""}>WhatsApp</NavLink>
            <NavLink to="/3x4" className={({ isActive }) => isActive ? "active" : ""}>3x4</NavLink>
          </nav>
        </div>
      </header>

      <main className="main-content">
        <div className="container">
          {children}
        </div>
      </main>

      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-ads" style={{ marginBottom: '1.5rem' }}>
             <p style={{ fontSize: '0.75rem', color: '#666', marginBottom: '0.5rem' }}>Publicidade</p>
             <AdSense slot="0987654321" style={{ display: 'block', minHeight: '90px' }} />
          </div>
          <p>&copy; {new Date().getFullYear()} TonRedimensionar. Todos os direitos reservados.</p>
          <div className="footer-links">
            <Link to="/privacidade">Política de Privacidade</Link>
            <Link to="/termos">Termos de Uso</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
