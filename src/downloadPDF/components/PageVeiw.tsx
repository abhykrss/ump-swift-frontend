import React from 'react';
import { Page, Document, Image, StyleSheet, View, Text } from '@react-pdf/renderer';
import { swiftLogo } from '../../common/assets/image';
import PageTitleCentre from './PageTitleCentre';
import PageTitleEnd from './PageTitleEnd';
import PageTable from './PageTable';
import PageFooter from './PageFooter';

const styles = StyleSheet.create({
  fixed: {
    fontStyle: 'italic',
  },
  page: {
    fontFamily: 'Helvetica',
    fontSize: 11,
    paddingTop: 30,
    paddingLeft: 60,
    paddingRight: 60,
    lineHeight: 1.5,
    flexDirection: 'column',
  },
  logo: {
    width: 'auto',
    height: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  image: {
    width: '40%',
    height: '90%',
  },
  pageTile: {
    width: '100%',
  },
});

const PageVeiw = ({ users, trainingData }: { users: userType[]; trainingData: trainingType[] }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page} orientation={'landscape'} wrap>
        {/* <View fixed>
        <Image style={styles.image} src={swiftLogo} />
      </View> */}

        <View style={styles.logo}>
          <Image style={styles.image} src={swiftLogo} />
          <View style={styles.pageTile}>
            <PageTitleCentre trainingData={trainingData} />
          </View>
        </View>
        <PageTitleEnd trainingData={trainingData} />
        <PageTable users={users} />
        <PageFooter trainingData={trainingData} users={users} />
      </Page>
    </Document>
  );
};

export default PageVeiw;
