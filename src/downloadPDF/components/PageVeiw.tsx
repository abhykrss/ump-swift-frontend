import React from 'react';
import { Page, Document, Image, StyleSheet, View } from '@react-pdf/renderer';
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
    width: '100%',
    height: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  image: {
    width: '30%',
    height: 'auto',
  },
  pageTile: {
    width: '70%',
  },
});

const PageVeiw = () => (
  <Document>
    <Page size="A4" style={styles.page} orientation={'landscape'} wrap>
      {/* <View fixed>
        <Image style={styles.image} src={swiftLogo} />
      </View> */}
      <View style={styles.logo}>
        <Image style={styles.image} src={swiftLogo} />
        <View style={styles.pageTile}>
          <PageTitleCentre />
          <PageTitleEnd />
        </View>
      </View>
      <PageTable />
      <PageFooter />
    </Page>
  </Document>
);

export default PageVeiw;
