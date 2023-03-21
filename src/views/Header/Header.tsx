import { Fragment } from 'react';
import { Col, Row } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import { LogoutOutlined } from '@ant-design/icons';
import { AdminLogo, meetriLogo } from '../../common/assets/image';

export const Header = () => {
  return (
    <Fragment>
      <Row className="px-2 header-wrapper  py-1" align="middle" justify="space-between">
        <Col>
          <Link replace={true} to={'/'}>
            <img alt="meetri_logo" data-testid="meetri-logo" className="max-h-[64px] meetri-logo" src={meetriLogo} height="40" />
          </Link>
        </Col>
        <Col>
          <Link replace={true} to={'/home'}>
            <img className="admin-logo max-h-[45px]" data-testid="admin-logo" src={AdminLogo} height="40" alt="meetri_admin" />
          </Link>
        </Col>
        <Col className="logout-wrapper">
          <LogoutOutlined />
        </Col>
      </Row>

      <Outlet />
    </Fragment>
  );
};
