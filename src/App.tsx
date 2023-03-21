import { react } from '@babel/types';
import './App.css';
import AppRoutes from './routes/AppRoutes';
import { Header } from './views/Header/Header';

function App() {
  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
