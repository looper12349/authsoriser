import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import HomePage from '../pages/HomePage';
import ServicePage from '../pages/ServicePage';
import ContactPage from '../pages/ContactPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'services/:serviceId',
        element: <ServicePage />
      },
      {
        path: 'contact',
        element: <ContactPage />
      }
    ]
  }
]);

export default router;
