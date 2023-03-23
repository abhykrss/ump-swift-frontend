import './App.css';
import AppRoutes from './routes/AppRoutes';

export const config = {
  endpoint: process.env.REACT_APP_SERVER_URL,
};
function App() {
  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
