import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import AppRoutes from './routes';
import { ErrorBoundary } from 'react-error-boundary';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <UserProvider>
        <ThemeProvider>
          <Router>
            <Layout>
              <AppRoutes />
            </Layout>
          </Router>
        </ThemeProvider>
      </UserProvider>
    </ErrorBoundary>
  );
}

export default App;
