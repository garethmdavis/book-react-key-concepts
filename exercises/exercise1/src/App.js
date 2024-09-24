import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './routes/Welcome';
// import MainNavigation from './components/MainNavigation';
// import Products from './routes/Products';
// import ProductDetail from './routes/ProductDetail';
// import NotFound from './routes/NotFound';
import Root from './routes/Root';
import { lazy, Suspense } from 'react';

const Products = lazy(() => import('./routes/Products'));
const ProductDetail = lazy(() => import('./routes/ProductDetail'));
const NotFound = lazy(() => import('./routes/NotFound'));

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route
              path='/'
              element={<Root />}
            >
              <Route
                element={<Welcome />}
                index
              />
              <Route
                path='products'
                element={<Products />}
              />
              <Route
                path='products/:id/'
                element={<ProductDetail />}
              />
              <Route
                path='*'
                element={<NotFound productRequest={false} />}
              />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
