import React from 'react';
import { Badge, Card, Col, Row, Space } from 'antd';
import { Link } from 'react-router-dom';
import { Header } from '../Header/Header';

export const LandingPage: React.FC = () => {
  return (
    <>
      <Header />
      <Row gutter={16} style={{ margin: 40 }}>
        <Col className="gutter-row" span={6}>
          <Link to="/register">
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
              <Badge.Ribbon text="NEW" color="green">
                <Card
                  title="Swift Training"
                  bordered={true}
                  hoverable
                  className="cardStyle"
                  style={{ borderBlockColor: 'red', borderBlockWidth: 3, boxShadow: '5px 8px 24px 5px rgba(208, 216, 243, 1.5)' }}
                  bodyStyle={{ height: 100 }}
                  cover={<img alt="example" style={{ height: 250 }} src="https://hopetutors.com/wp-content/uploads/2018/02/ios-swift-training-in-chennai.png" />}
                >
                  <span>User Management</span>
                </Card>
              </Badge.Ribbon>
            </Space>
          </Link>
        </Col>
        <Col className="gutter-row" span={6}>
          <Space direction="vertical" size="middle" style={{ width: '100%' }}>
            <Badge.Ribbon text="Coming Soon" color="info">
              <Card
                title="Oregen"
                bordered={true}
                className="cardStyle"
                style={{ borderBlockColor: 'red', borderBlockWidth: 3, boxShadow: '5px 8px 24px 5px rgba(208, 216, 243, 1.5)' }}
                hoverable={true}
                bodyStyle={{ height: 100 }}
                cover={<img alt="example" style={{ height: 250 }} src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41CMjKQL-HL._SX425_.jpg" />}
              >
                <span>Oregen User Management</span>
              </Card>
            </Badge.Ribbon>
          </Space>
        </Col>
        <Col className="gutter-row" span={6}>
          <Space direction="vertical" size="middle" style={{ width: '100%' }}>
            <Badge.Ribbon text="Coming Soon" color="info">
              <Card
                title="EMLB"
                bordered={true}
                className="cardStyle"
                style={{ borderBlockColor: 'red', borderBlockWidth: 3, boxShadow: '5px 8px 24px 5px rgba(208, 216, 243, 1.5)' }}
                hoverable={true}
                bodyStyle={{ height: 100 }}
                cover={<img style={{ height: 250 }} alt="example" src="https://i.pinimg.com/originals/ef/3a/76/ef3a766176ca373cdf0f2555f0642c53.jpg" />}
              >
                <span>EMLB User Management</span>
              </Card>
            </Badge.Ribbon>
          </Space>
        </Col>
      </Row>
    </>
  );
};
