/* eslint-disable @typescript-eslint/ban-types */
import { useEffect } from 'react';
import { Col, Row, Input, DatePicker, Table, Spin, Button } from 'antd';
import { useAppDispatch, useAppSelector } from '../../store/constants';
import { getUsersData } from '../../store/slices/usersDataSlice';
import { Header } from '../Header/Header';
import { col, dataSource } from './TableHelper';
import { getTrainingData } from '../../store/slices/trainingDataSlice';
import { Link, useNavigate } from 'react-router-dom';

export const Register = () => {
  // Using navigation
  const navigate = useNavigate();
  // Dispatch Actionn to get Users Data
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUsersData());
    dispatch(getTrainingData());
  }, []);

  // Grabbing usersData from store
  const userData: userDataType = useAppSelector(state => state.usersData);
  const trainingData: any = useAppSelector(state => state.trainingData);

  return (
    <>
      <Header />
      {userData.data && trainingData.data ? (
        <div className="container mx-auto px-4 sm:px-8">
          <Row className="row height" align="middle" justify="center">
            <Col span={24}>
              <div className="mt-3 mb-3">
                <div className="grid grid-cols-3 py-2 gap-3">
                  <div className="flex items-center">
                    <h5 className="px-2 w-40 relative">
                      Venue
                      <span className="px-2 absolute left-[85%]">:</span>
                    </h5>
                    <Input type="text" readOnly={true} placeholder="Venue" className="px-2" />
                  </div>

                  <div className="flex items-center">
                    <h5 className="px-2 w-40 relative whitespace-pre">
                      Centre number
                      <span className="px-2 absolute left-[85%]">:</span>
                    </h5>
                    <Input type="number" readOnly={true} value={trainingData.data !== null && trainingData?.data[0]?.centre_number} className="px-2" />
                  </div>
                  <div className="flex items-center">
                    <h5 className="px-2 w-40 relative whitespace-pre">
                      Centre Name
                      <span className="px-2 absolute left-[85%]">:</span>
                    </h5>
                    <Input type="text" readOnly={true} value={trainingData.data !== null && trainingData.data[0]?.centre_name} className="px-2" />
                  </div>
                </div>
                <div className="grid grid-cols-3 py-2 gap-3">
                  <div className="flex items-center">
                    <h5 className="px-2 w-40 relative whitespace-pre">
                      Trainer Name
                      <span className="px-2 absolute left-[85%]">:</span>
                    </h5>
                    <Input type="text" readOnly={true} placeholder="Trainer Name" className="px-2" />
                  </div>
                  <div className="flex items-center">
                    <h5 className="px-2 w-40 relative whitespace-pre">
                      Course Start Date
                      <span className="px-2 absolute left-[85%]">:</span>
                    </h5>
                    <Input type="text" readOnly={true} value={trainingData.data !== null && trainingData?.data[0]?.start_date} className="px-2" />
                  </div>
                  <div className="flex items-center">
                    <h5 className="px-2 w-40 relative whitespace-pre">
                      Course Finish Date
                      <span className="px-2 absolute left-[85%]">:</span>
                    </h5>
                    <Input type="text" readOnly={true} value={trainingData.data !== null && trainingData?.data[0]?.end_date} className="px-2" />
                  </div>
                </div>
                <div className="grid grid-cols-3 py-2 gap-3">
                  <div className="flex items-center">
                    <h5 className="px-2 w-40 relative whitespace-pre">
                      Course Duration
                      <span className="px-2 absolute left-[85%]">:</span>
                    </h5>
                    <Input type="text" readOnly={true} value={trainingData.data !== null && trainingData?.data[0]?.duration} className="px-2" />
                  </div>
                </div>
                <div className="flex items-end ">
                  <Link to="/exportPdf" target="_blank">
                    <Button>Export To PDF</Button>
                  </Link>
                </div>
              </div>
            </Col>

            <Col span={24}>
              <Table
                id="usersTable"
                columns={col}
                dataSource={dataSource(userData)}
                bordered={true}
                rowKey={(record: any) => record.id}
                pagination={{
                  pageSizeOptions: [10, 20, 50, 100],
                  responsive: true,
                  showSizeChanger: true,
                  onChange: () => {
                    window.scrollTo({
                      top: 0,
                      behavior: 'smooth',
                    });
                  },
                }}
              />
              <div className="grid grid-cols-3 py-3 gap-3">
                <div className="flex items-center">
                  <h5 className="px-2 w-40 relative">
                    Total Learners
                    <span className="px-2 absolute left-[85%]">:</span>
                  </h5>
                  <Input type="number" readOnly={true} placeholder="Total Learners" value={9} className="px-2" />
                </div>
                <div className="flex items-center">
                  <h5 className="px-2 w-40 relative whitespace-pre">
                    Trainer Signauture
                    <span className="px-2 absolute left-[85%]">:</span>
                  </h5>
                  <Input type="text" readOnly={true} placeholder="Trainer Signauture" className="px-2" />
                </div>
                <div className="flex items-center">
                  <h5 className="px-2 w-40 relative whitespace-pre">
                    Date
                    <span className="px-2 absolute left-[85%]">:</span>
                  </h5>
                  <Input type="number" readOnly={true} placeholder="Date" className="px-2" />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      ) : (
        <div className="mx-auto spinner">
          <Spin size="large" />
        </div>
      )}
    </>
  );
};
