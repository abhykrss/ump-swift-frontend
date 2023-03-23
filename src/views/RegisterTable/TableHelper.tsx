import { Button, Form, Input, Switch } from 'antd';
import axios from 'axios';
import { errorToast, successToast } from '../../common/Toast/toast';
import { UploadOutlined } from '@ant-design/icons';
import { config } from '../../App';

export const col = [
  {
    dataIndex: 'learner_completion',
    key: 'learner_completion',
    title: 'Learner Completion',
    children: [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Date of Birth',
        dataIndex: 'dOb',
        key: 'dOb',
      },
      {
        title: 'Email',
        dataIndex: 'emailAddress',
        key: 'emailAddress',
      },
      {
        title: 'Signature',
        dataIndex: 'signature',
        key: 'signature',
      },
    ],
  },
  {
    dataIndex: 'trainer_completion',
    key: 'trainer_completion',
    title: 'Trainer Completion',
    children: [
      {
        title: 'Photo ID',
        dataIndex: 'photoId',
        key: 'photoId',
      },
      {
        title: 'Attendance',
        dataIndex: 'fullAttendance',
        key: 'fullAttendance',
      },
      {
        title: 'Expiry date of last cert',
        dataIndex: 'expiry',
        key: 'expiry',
      },
    ],
  },
];

const changePhotoId = (userId: string, change: boolean) => {
  console.log(change);
  const payload = { id: userId, change: change };
  axios
    .put(config.endpoint + '/photoIdChange', payload)
    .then(res => {
      successToast(res.data);
    })
    .catch(err => {
      errorToast(err.data);
    });
};
const updateAttendance = (userId: string, training_id: string, attendance: string) => {
  const payload = { id: userId, training_id: training_id, attendance: attendance };
  axios
    .put(config.endpoint + '/updateAttendance', payload)
    .then(res => {
      successToast(res.data);
    })
    .catch(err => {
      errorToast(err.data);
    });
};

const data: any = [];
export const dataSource = (userData: any) => {
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
            onChange={e => changePhotoId(user.id, e)}
          ></Switch>
        ),
        fullAttendance: (
          <Form onFinish={values => updateAttendance(user.id, user.training_id, values.attendance)}>
            <Form.Item name="attendance">
              <Input
                style={{ width: 70}}
                onBlur={values => updateAttendance(user.id, user.training_id, values.target.value)}
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
