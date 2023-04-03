import React from 'react';
import { Badge, Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import { Header } from '../Header/Header';
import { EmailBusniess, OregenTraining, Traning, } from '../../common/assets/image';

export const LandingPage: React.FC = () => {
  return (
    <>
      <Header register={false} />
      <div className="flex jusify-between  landing-wrapper pr-8 pt-5 pb-8">
        <Row className='w-full' align="middle" justify="center" gutter={[0, 20]}>
          <Col className='swift-wrap'  xs={{ span: 10, offset: 2 }} sm={{ span: 7, offset: 1 }} lg={{ span: 5, offset: 1 }}>
            <Link to="/register">
              <Badge.Ribbon text="NEW" color="green">
                <Card
                  className='Swift-column'
                  title="Swift First Aid Training"
                  bordered={true}
                  headStyle={{ backgroundColor: 'rgba(103, 189, 84, 0.93)' }}
                  hoverable={true}
                >
                </Card>
              </Badge.Ribbon>
            </Link>
            <a className="card-title" href='https://www.swiftfirstaidtraining.co.uk/' target="_blank" rel="noopener noreferrer">Read More</a>
          </Col>
          <Col className='org-wrap'  xs={{ span: 10, offset: 2 }} sm={{ span: 7, offset: 1 }} lg={{ span: 5, offset: 1 }}>
            <Badge.Ribbon text="Coming Soon">
              <Card
                className='oregen-column'
                title="Oregen Computer Training"
                bordered={true}
                headStyle={{ backgroundColor: 'rgb(47, 210, 202)' }}
                hoverable={true}
              >
              </Card>
            </Badge.Ribbon>
            <a className="card-title" href='https://oregentraining.com/' target="_blank" rel="noopener noreferrer">Read More</a>
          </Col>
          <Col className="eml-wrap" xs={{ span: 10, offset: 2 }} sm={{ span: 7, offset: 1 }} lg={{ span: 5, offset: 1 }}>
            <Badge.Ribbon text="Coming Soon">
              <Card
                className='eml-column'
                title="EML Business"
                hoverable={true}
                headStyle={{ backgroundColor: '#002060' }}
              >
              </Card>
            </Badge.Ribbon>
            <a className="card-title" href='http://www.emlbusinessltd.com/' target="_blank" rel="noopener noreferrer">Read More</a>
          </Col>
        </Row>
      </div>
    </>
  );
};
