import React from 'react';
import { Badge, Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import { Header } from '../Header/Header';
import { swiftTraining, orgon, CTM } from '../../common/assets/image';

export const LandingPage: React.FC = () => {
  return (
    <>
      <Header register={false} />
      <div className="flex jusify-between  landing-wrapper pr-8 pt-5 pb-8">
        <Row align="middle" justify="start" gutter={[0, 20]}>
          <Col xs={{ span: 10, offset: 2 }} sm={{ span: 7, offset: 1 }} lg={{ span: 7, offset: 1 }}>
            <Link to="/register">
              <Badge.Ribbon text="NEW" color="green">
                <Card
                  title="Swift Training"
                  bordered={true}
                  headStyle={{ backgroundColor: 'lightblue' }}
                  hoverable={true}
                  bodyStyle={{ height: 100 }}
                  cover={<img alt="example" style={{ height: 140 }} src={swiftTraining} />}
                >
                  <span className="card-title">Swift First Aid Training Ltd.</span>
                </Card>
              </Badge.Ribbon>
            </Link>
          </Col>
          <Col xs={{ span: 10, offset: 2 }} sm={{ span: 7, offset: 1 }} lg={{ span: 7, offset: 1 }}>
            <Badge.Ribbon text="Coming Soon">
              <Card
                title="Oregen"
                bordered={true}
                headStyle={{ backgroundColor: 'lightblue' }}
                hoverable={true}
                bodyStyle={{ height: 100 }}
                cover={<img alt="example" style={{ height: 140 }} src={orgon} />}
              >
                <span className="card-title">Oregen is established company.</span>
              </Card>
            </Badge.Ribbon>
          </Col>
          <Col xs={{ span: 10, offset: 2 }} sm={{ span: 7, offset: 1 }} lg={{ span: 7, offset: 1 }}>
            <Badge.Ribbon text="Coming Soon">
              <Card
                title="EMLB"
                hoverable={true}
                headStyle={{ backgroundColor: 'lightblue' }}
                bodyStyle={{ height: 100 }}
                cover={<img style={{ height: 140 }} alt="example" src={CTM} />}
              >
                <span className="card-title">EMLB is in cosmetic company.</span>
              </Card>
            </Badge.Ribbon>
          </Col>
        </Row>
      </div>
    </>
  );
};
