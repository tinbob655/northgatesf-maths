import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import SitePasswordWrapper from './components/multiPageComponents/sitePasswordWrapper.tsx';
import Header from './components/multiPageComponents/header.tsx';
import Footer from './components/multiPageComponents/footer.tsx';
import AllRoutes from './routes.js';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SitePasswordWrapper>
      <BrowserRouter>

      <header>
        <Header />
      </header>
      <AllRoutes />
      <footer>
        <Footer />
      </footer>
      
      </BrowserRouter>
    </SitePasswordWrapper>
  </StrictMode>,
);
