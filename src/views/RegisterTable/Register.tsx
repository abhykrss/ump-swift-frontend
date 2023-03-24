/* eslint-disable @typescript-eslint/ban-types */
import { useEffect } from 'react';
import { Col, Row, Input, Table, Spin, Button, Switch, Form } from 'antd';
import { useAppDispatch, useAppSelector } from '../../store/constants';
import { getUsersData, updateAttendanceStore, updatePhotoIdStore } from '../../store/slices/usersDataSlice';
import { Header } from '../Header/Header';
import { col } from './TableHelper';
import { getTrainingData } from '../../store/slices/trainingDataSlice';
import axios from 'axios';
import { config } from '../../App';
import { errorToast, successToast, warningToast } from '../../common/Toast/toast';
import { UploadOutlined } from '@ant-design/icons';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PageVeiw from '../../downloadPDF/components/PageVeiw';

export const Register = () => {
  // Grabbing usersData from store.
  const userData: any = useAppSelector(state => state.usersData);
  const trainingData: any = useAppSelector(state => state.trainingData);

  // Configuring Date Format..
  let start_date: Array<string> = [];
  let end_date: Array<string> = [];
  let todayDate: Array<string> = [];
  if (userData.data && trainingData.data) {
    start_date = new Date(trainingData.data !== null && trainingData?.data[0]?.start_date).toString().split(' ');
    end_date = new Date(trainingData.data !== null && trainingData?.data[0]?.end_date).toString().split(' ');
    todayDate = new Date().toString().split(' ');
  }

  // Dispatch Actionn to get Users Data
  const dispatch = useAppDispatch();

  // ==============================================================================================

  const changePhotoId = (userId: string, change: boolean, name: string) => {
    dispatch(updatePhotoIdStore({ userId: userId, photoId: change }));
    const payload = { id: userId, change: change };
    axios
      .put(config.endpoint + '/photoIdChange', payload)
      .then(res => {
        if (res.data === 'changed Photo ID') successToast(`Photo ID updated for ${name.split(' ')[0]}`);
        else successToast(res.data);
      })
      .catch(err => {
        errorToast(err.data);
      });
  };
  const updateAttendance = (userId: string, training_id: string, attendance: string, name: string) => {
    if (Number(attendance) > 0 && Number(attendance) <= 100) {
      dispatch(updateAttendanceStore({ userId: userId, attendance: Number(attendance) }));
      const payload = { id: userId, training_id: training_id, attendance: attendance };
      axios
        .put(config.endpoint + '/updateAttendance', payload)
        .then(res => {
          if (res.data === 'changed Attendance') successToast(`Attendance updated for ${name.split(' ')[0]}`);
          else successToast(res.data);
        })
        .catch(err => {
          errorToast(err.data);
        });
    } else {
      warningToast('Enter a Valid Attendance.');
    }
  };

  const data: any = [];
  const dataSource = (userData: any) => {
    if (data.length > 0) return data;
    if (userData.data === null) {
      console.log('waiting for data');
    } else {
      userData?.data?.map((user: any) => {
        const dobFormatted: Array<string> = new Date(user.dob).toString().split(' ');
        data.push({
          name: user.user_name,
          dOb: `${dobFormatted[2]} ${dobFormatted[1]} ${dobFormatted[3]}`,
          emailAddress: user.email,
          key: user.id,
          photoId: (
            <Switch
              style={{ border: 'solid grey 1px' }}
              checkedChildren="Yes"
              unCheckedChildren="No"
              defaultChecked={user.photo_id === true ? true : false}
              onChange={e => {
                changePhotoId(user.id, e, user.user_name);
              }}
            ></Switch>
          ),
          fullAttendance: (
            <Form onFinish={values => updateAttendance(user.id, user.training_id, values.attendance, user.user_name)}>
              <Form.Item name="attendance">
                <Input
                  style={{ width: 70, marginTop: 20 }}
                  onBlur={values => updateAttendance(user.id, user.training_id, values.target.value, user.user_name)}
                  type="number"
                  defaultValue={user.attendance}
                />
              </Form.Item>
              <Button htmlType="submit" hidden>
                <UploadOutlined />
              </Button>
            </Form>
          ),
          signature: user.user_name,
          expiry: 'N/A',
        });
      });
    }
    return data;
  };

  // ==============================================================================================

  useEffect(() => {
    dispatch(getUsersData());
    dispatch(getTrainingData());
  }, []);

  return (
    <>
      <Header register={true} />
      {userData?.data && trainingData?.data ? (
        <div className="container mx-auto mb-12 px-4 sm:px-8">
          {/* <Row className="text-center" align="middle" justify="center">
            <Col className="justify-center items-center flex">
              <img className="w-2/5" src={softHeader} alt="Swift Logo" />
            </Col>
          </Row> */}
          <Row className="text-center" align="middle" justify="center">
            <Col span={10} className="title-col">
              <h3 className="font-semibold register-title font-mono py-2">Learner Register</h3>
            </Col>
          </Row>
          <Row className="row height" align="middle" justify="center">
            <Col span={24}>
              <div className="mt-3 mb-3">
                <div className=" gap-4 place-content-between grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1">
                  <div className="flex w-10/12 items-center">
                    <h5 className="px-2 w-40 relative">
                      Venue
                      <span className="px-2 absolute left-[85%]">:</span>
                    </h5>
                    <Input type="text" bordered={false} readOnly={true} value={trainingData.data !== null && trainingData?.data[0]?.venue} className="px-2" />
                  </div>
                  <div className="flex ml-auto w-10/12 items-center">
                    <h5 className="px-2 w-40 relative whitespace-pre">
                      Centre number
                      <span className="px-2 absolute left-[85%]">:</span>
                    </h5>
                    <Input type="number" bordered={false} readOnly={true} value={trainingData.data !== null && trainingData?.data[0]?.centre_number} className="px-2" />
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xm:grid-cols-1 gap-4 place-content-between">
                  <div className="flex w-10/12  items-center">
                    <h5 className="px-2 w-40 relative whitespace-pre">
                      Centre Name
                      <span className="px-2 absolute left-[85%]">:</span>
                    </h5>
                    <Input type="text" bordered={false} readOnly={true} value={trainingData.data !== null && trainingData?.data[0]?.centre_name} className="px-2" />
                  </div>
                  <div className="flex ml-auto w-10/12 items-center">
                    <h5 className="px-2 w-40 relative whitespace-pre">
                      Trainer Name
                      <span className="px-2 absolute left-[85%]">:</span>
                    </h5>
                    <Input type="text" bordered={false} readOnly={true} value={trainingData.data !== null && trainingData?.data[0]?.user_name} className="px-2" />
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 gap-4 place-content-between">
                  <div className="flex w-10/12 items-center">
                    <h5 className="px-2 w-40 relative whitespace-pre">
                      Course Start Date
                      <span className="px-2 absolute left-[85%]">:</span>
                    </h5>
                    <Input type="text" bordered={false} readOnly={true} value={`${start_date[2]} ${start_date[1]} ${start_date[3]}`} className="px-2" />
                  </div>
                  <div className="flex  ml-auto w-10/12 items-center">
                    <h5 className="px-2 w-40 relative whitespace-pre">
                      Course Finish Date
                      <span className="px-2 absolute left-[85%]">:</span>
                    </h5>
                    <Input type="text" bordered={false} readOnly={true} value={`${end_date[2]} ${end_date[1]} ${end_date[3]}`} className="px-2" />
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 gap-4 place-content-between">
                  <div className="flex w-10/12 items-center">
                    <h5 className="px-2 w-40 relative whitespace-pre">
                      Course Duration
                      <span className="px-2 absolute left-[85%]">:</span>
                    </h5>
                    <Input type="text" readOnly={true} bordered={false} value={`${trainingData.data !== null && trainingData?.data[0]?.duration} Hours`} className="px-2" />
                  </div>
                  <div className="flex  ml-auto w-10/12 items-end justify-end">
                    <Button type="primary" style={{ width: 130 }}>
                      <PDFDownloadLink document={<PageVeiw users={userData.data} trainingData={trainingData.data} />} fileName="Swift Training.pdf">
                        {({ blob, url, loading, error }) => (loading ? 'Export to PDF' : 'Export to PDF')}
                      </PDFDownloadLink>
                    </Button>
                  </div>
                </div>
              </div>
            </Col>

            <Col span={24}>
              {/* Table JSX */}

              <Table id="usersTable" columns={col} dataSource={dataSource(userData)} bordered={true} rowKey={(record: any) => record.id} pagination={false} />
              <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 gap-3">
                <div className="flex w-11/12 items-center">
                  <h5 className="foot-value relative">
                    Total Learners
                    <span className="px-2">:</span>
                  </h5>
                  <Input type="number" bordered={false} readOnly={true} placeholder="Total Learners" value={userData.data.length} className="px-2 foot-input" />
                </div>
                <div className="flex w-11/12 trainer-col items-center">
                  <h5 className="foot-value relative whitespace-pre">
                    Trainer Signauture
                    <span className="px-2">:</span>
                  </h5>
                  <Input type="text" bordered={false} readOnly={true} value={trainingData.data !== null && trainingData?.data[0]?.user_name} className="px-2 foot-input" />
                </div>
                <div className="flex ml-auto date-value items-center">
                  <h5 className="date-input foot-value relative whitespace-pre">
                    Date
                    <span className="px-2">:</span>
                  </h5>
                  <Input type="text" bordered={false} readOnly={true} value={`${todayDate[2]} ${todayDate[1]} ${todayDate[3]}`} className="px-2 foot-input" />
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
