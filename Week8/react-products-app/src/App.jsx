import { createHashRouter, RouterProvider } from 'react-router';
import RootLayout from './components/RootLayout';
import Home from './components/Home';
import ProductsList from './components/ProductsList';
import ContactUs from './components/ContactUs';

function App() {
  const routerObj = createHashRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'products', element: <ProductsList /> },
        { path: 'contact', element: <ContactUs /> },
      ],
    },
  ]);

  return <RouterProvider router={routerObj} />;
}

export default App;
