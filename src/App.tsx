import './App.css';
import AppRoutes from './routes/AppRoutes';

export const config = {
  endpoint: 'https://ump-swift-backend-production-c0d4.up.railway.app',
};
function App() {
  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
