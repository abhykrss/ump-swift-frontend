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
          <Link to="register">
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
              <Badge.Ribbon text="NEW" color="red">
                <Card
                  title="Swift Training"
                  bordered={true}
                  hoverable={true}
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
            <Badge.Ribbon text="Coming Soon" color="red">
              <Card
                title="Oregen"
                bordered={true}
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
            <Badge.Ribbon text="Coming Soon" color="red">
              <Card
                title="EMLB"
                bordered={true}
                hoverable={true}
                bodyStyle={{ height: 100 }}
                cover={
                  <img
                    style={{ height: 250 }}
                    alt="example"
                    src="https://www.nbcsports.com/sites/rsnunited/files/archive/assets_media_gallery/philadelphia/2020/07/01/screen_shot_2020-06-03_at_2_12_0.jpg"
                  />
                }
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
