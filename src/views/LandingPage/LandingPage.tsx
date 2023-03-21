import React from 'react';
import { Badge, Card, Col, Row, Space } from 'antd';
import { Link } from 'react-router-dom';
import { Header } from '../Header/Header';

export const LandingPage: React.FC = () => {
  return (
    <>
      <Header />
      <Row gutter={16} style={{ margin: 40 }}>
        {}
        <Col className="gutter-row" span={6}>
          <Link to="register">
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
              <Badge.Ribbon text="Coming Soon" color="red">
                <Card
                  title="Swift Training"
                  size="small"
                  bordered={true}
                  hoverable={true}
                  bodyStyle={{ height: 100 }}
                  cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                >
                  <span>User Management</span>
                </Card>
              </Badge.Ribbon>
            </Space>
          </Link>
        </Col>
      </Row>
    </>
  );
};
