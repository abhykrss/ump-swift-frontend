import { Fragment } from 'react';
import { Col, Row, Typography } from 'antd';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { LogoutOutlined } from '@ant-design/icons';
import { AdminLogo, SwiftFirstAid, meetriLogo } from '../../common/assets/image';
import { successLogoutToast } from '../../common/Toast/toast';

const { Text } = Typography;
export const Header = (register: { register: boolean }) => {
  const navigate = useNavigate();
  const isLogin = localStorage.getItem('token');
  const handleLogout = () => {
    localStorage.clear();
    successLogoutToast();
    navigate('/');
  };

  return (
    <Fragment>
      <Row className="px-2 header-wrapper  py-1" align="middle" justify="space-between">
        <Col>
          <Link replace={true} to={'/home'}>
            <img alt="meetri_logo" data-testid="meetri-logo" className="max-h-[64px] meetri-logo" src={meetriLogo} height="40" />
          </Link>
        </Col>
        <Col>
          <Link replace={true} to={''}>
            <img className="admin-logo max-h-[45px]" data-testid="admin-logo" src={register.register ? SwiftFirstAid : AdminLogo} height="40" alt="meetri_admin" />
          </Link>
        </Col>

        <Col className="logout-wrapper">
          {isLogin === 'true' && (
            <>
              <Text style={{ fontSize: 20, color: 'white', margin: 20 }}>Welcome Eddie</Text>
              <LogoutOutlined onClick={handleLogout} />
            </>
          )}
        </Col>
      </Row>

      <Outlet />
    </Fragment>
  );
};
