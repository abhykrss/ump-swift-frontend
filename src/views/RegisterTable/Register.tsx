/* eslint-disable @typescript-eslint/ban-types */
import { useEffect } from 'react';
import { Col, Row, Input, DatePicker, Table, Spin, Button } from 'antd';
import { useAppDispatch, useAppSelector } from '../../store/constants';
import { getUsersData } from '../../store/slices/usersDataSlice';
import { Header } from '../Header/Header';
import { col, dataSource } from './TableHelper';
import { getTrainingData } from '../../store/slices/trainingDataSlice';
import { Link, useNavigate } from 'react-router-dom';
import { softHeader } from '../../common/assets/image';
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
  const userData: any = useAppSelector(state => state.usersData);
  const trainingData: any = useAppSelector(state => state.trainingData);
  const start_date = Date.parse(trainingData.data !== null && trainingData?.data[0]?.start_date);
  const end_date = Date.parse(trainingData.data !== null && trainingData?.data[0]?.end_date);
  const start_date_data = new Date(start_date);
  const end_date_data = new Date(end_date);
  return (
    <>
      <Header />
      {userData.data && trainingData.data ? (
        <div className="container mx-auto mb-12 px-4 sm:px-8">
          <Row className="text-center" align="middle" justify="center">
            <Col className="justify-center items-center flex">
              <img className="w-2/5" src={softHeader} alt="Swift Logo" />
            </Col>
          </Row>
          <Row className="text-center" align="middle" justify="center">
            <Col span={10}>
              <h3 className="text-2xl font-semibold register-title font-mono py-2">Learner Register</h3>
            </Col>
          </Row>
          <Row className="row height" align="middle" justify="center">
            <Col span={24}>
              <div className="mt-3 mb-3">
                <div className="grid grid-cols-2 py-2 gap-4 place-content-between">
                  <div className="flex w-10/12 items-center">
                    <h5 className="px-2 w-40 relative">
                      Venue
                      <span className="px-2 absolute left-[85%]">:</span>
                    </h5>
                    <Input type="text" bordered={false} readOnly={true} value={trainingData.data !== null && trainingData.data[0]?.venue} className="px-2" />
                  </div>
                  <div className="flex ml-auto w-10/12 items-center">
                    <h5 className="px-2 w-40 relative whitespace-pre">
                      Centre number
                      <span className="px-2 absolute left-[85%]">:</span>
                    </h5>
                    <Input type="number" bordered={false} readOnly={true} value={trainingData.data !== null && trainingData?.data[0]?.centre_number} className="px-2" />
                  </div>
                </div>
                <div className="grid grid-cols-2 py-2 gap-4 place-content-between">
                  <div className="flex w-10/12  items-center">
                    <h5 className="px-2 w-40 relative whitespace-pre">
                      Centre Name
                      <span className="px-2 absolute left-[85%]">:</span>
                    </h5>
                    <Input type="text" bordered={false} readOnly={true} value={trainingData.data !== null && trainingData.data[0]?.centre_name} className="px-2" />
                  </div>
                  <div className="flex ml-auto w-10/12 items-center">
                    <h5 className="px-2 w-40 relative whitespace-pre">
                      Trainer Name
                      <span className="px-2 absolute left-[85%]">:</span>
                    </h5>
                    <Input type="text" bordered={false} readOnly={true} value={trainingData.data !== null && trainingData.data[0]?.user_name} className="px-2" />
                  </div>
                </div>
                <div className="grid grid-cols-2 py-2 gap-4 place-content-between">
                  <div className="flex w-10/12 items-center">
                    <h5 className="px-2 w-40 relative whitespace-pre">
                      Course Start Date
                      <span className="px-2 absolute left-[85%]">:</span>
                    </h5>
                    <Input type="text" bordered={false} readOnly={true} value={start_date_data.toDateString().substring(4, 15)} className="px-2" />
                  </div>
                  <div className="flex  ml-auto w-10/12 items-center">
                    <h5 className="px-2 w-40 relative whitespace-pre">
                      Course Finish Date
                      <span className="px-2 absolute left-[85%]">:</span>
                    </h5>
                    <Input type="text" bordered={false} readOnly={true} value={end_date_data.toDateString().substring(4, 15)} className="px-2" />
                  </div>
                </div>
                <div className="grid grid-cols-2 py-2 gap-4 place-content-between">
                  <div className="flex w-10/12 items-center">
                    <h5 className="px-2 w-40 relative whitespace-pre">
                      Course Duration
                      <span className="px-2 absolute left-[85%]">:</span>
                    </h5>
                    <Input type="text" readOnly={true} bordered={false} value={`${trainingData.data !== null && trainingData?.data[0]?.duration} Hours`} className="px-2" />
                  </div>
                  <div className="flex  ml-auto w-10/12 items-end justify-end">
                    <Link to="/exportPdf" target="_blank">
                      <Button type="primary">Export To PDF</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>

            <Col span={24}>
              {/* Table JSX */}

              <Table id="usersTable" columns={col} dataSource={dataSource(userData)} bordered={true} rowKey={(record: any) => record.id} pagination={false} />
              <div className="grid grid-cols-3 py-3 gap-3">
                <div className="flex w-11/12 items-center">
                  <h5 className="px-2 w-40 relative">
                    Total Learners
                    <span className="px-2 absolute left-[85%]">:</span>
                  </h5>
                  <Input type="number" bordered={false} readOnly={true} placeholder="Total Learners" value={userData.data.length} className="px-2" />
                </div>
                <div className="flex w-11/12 items-center">
                  <h5 className="px-2 w-40 relative whitespace-pre">
                    Trainer Signauture
                    <span className="px-2 absolute left-[85%]">:</span>
                  </h5>
                  <Input type="text" bordered={false} readOnly={true} value={trainingData.data !== null && trainingData?.data[0]?.user_name} className="px-2" />
                </div>
                <div className="flex ml-auto w-11/12 items-center">
                  <h5 className="px-2  w-40 relative whitespace-pre">
                    Date
                    <span className="px-2 absolute left-[85%]">:</span>
                  </h5>
                  <Input type="text" bordered={false} readOnly={true} value={new Date().toDateString().substring(4, 15)} className="px-2" />
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
