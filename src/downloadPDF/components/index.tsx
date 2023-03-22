import { Provider, useSelector } from 'react-redux';
import PageVeiw from './PageVeiw';
import { PDFViewer } from '@react-pdf/renderer';
import { store } from '../../store';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/constants';
import usersDataSlice, { getUsersData } from '../../store/slices/usersDataSlice';
import { getTrainingData } from '../../store/slices/trainingDataSlice';
import { Spin } from 'antd';

export const SaveToPdf = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(state => state.usersData);
  const trainingData = useAppSelector(state => state.trainingData);
  useEffect(() => {
    dispatch(getUsersData());
    dispatch(getTrainingData());
  }, []);

  return (
    <Provider store={store}>
      {users.data !== null && trainingData.data !== null ? (
        <div style={{ height: '100vh' }}>
          <PDFViewer width="100%" height="100%">
            <PageVeiw users={users.data} trainingData={trainingData.data} />
          </PDFViewer>
        </div>
      ) : (
        <>
          <div className="mx-auto spinner">
            <Spin size="large" />
          </div>
        </>
      )}
    </Provider>
  );
};
