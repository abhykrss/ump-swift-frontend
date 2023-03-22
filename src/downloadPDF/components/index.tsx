import { Provider } from 'react-redux';
import PageVeiw from './PageVeiw';
import { PDFViewer } from '@react-pdf/renderer';
import { store } from '../../store';

export const SaveToPdf = () => {
  return (
    <div style={{ height: '100vh' }}>
      <PDFViewer width="100%" height="100%">
        <PageVeiw />
      </PDFViewer>
    </div>
  );
};
