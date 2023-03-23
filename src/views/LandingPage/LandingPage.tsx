import React from 'react';
import { Badge, Card, Col, Row, Space } from 'antd';
import { Link } from 'react-router-dom';
import { Header } from '../Header/Header';
import { swiftTraining, orgon, CTM } from '../../common/assets/image';

export const LandingPage: React.FC = () => {
  return (
    <>
      <Header register={false} />
      <Row className="flex jusify-between" gutter={16} style={{ margin: 40 }}>
        <Col className="gutter-row" xs={{ span: 10, offset: 2 }} sm={{ span: 7, offset: 1 }} lg={{ span: 5, offset: 1 }}>
          <Link to="/register">
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
              <Badge.Ribbon text="NEW" color="green">
                <Card
                  title="Swift Training"
                  bordered={true}
                  headStyle={{ backgroundColor: 'lightblue' }}
                  hoverable={true}
                  bodyStyle={{ height: 100 }}
                  cover={<img alt="example" style={{ height: 140 }} src={swiftTraining} />}
                >
                  <span className="card-title">Swift First Aid Training Ltd offers top notch First Aid training.</span>
                </Card>
              </Badge.Ribbon>
            </Space>
          </Link>
        </Col>
        <Col className="gutter-row" xs={{ span: 10, offset: 2 }} sm={{ span: 7, offset: 1 }} lg={{ span: 5, offset: 1 }}>
          <Space direction="vertical" size="middle" style={{ width: '100%' }}>
            <Badge.Ribbon text="Coming Soon">
              <Card
                title="Oregen"
                bordered={true}
                headStyle={{ backgroundColor: 'lightblue' }}
                hoverable={true}
                bodyStyle={{ height: 100 }}
                cover={<img alt="example" style={{ height: 140 }} src={orgon} />}
              >
                <span className="card-title">Oregen is well established company which provides a tech services since 2001.</span>
              </Card>
            </Badge.Ribbon>
          </Space>
        </Col>
        <Col className="gutter-row" xs={{ span: 10, offset: 2 }} sm={{ span: 7, offset: 1 }} lg={{ span: 5, offset: 1 }}>
          <Space direction="vertical" size="middle" style={{ width: '100%' }}>
            <Badge.Ribbon text="Coming Soon">
              <Card
                title="EMLB"
                hoverable={true}
                headStyle={{ backgroundColor: 'lightblue' }}
                bodyStyle={{ height: 100 }}
                cover={<img style={{ height: 140 }} alt="example" src={CTM} />}
              >
                <span className="card-title">EMLB is in cosmetic company providing customer centric products.</span>
              </Card>
            </Badge.Ribbon>
          </Space>
        </Col>
      </Row>
    </>
  );
};
