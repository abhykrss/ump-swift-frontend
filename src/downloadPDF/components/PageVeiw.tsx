import React from 'react';
import { Page, Document, Image, View } from '@react-pdf/renderer';
import { swiftLogo } from '../../common/assets/image';
import PageTitleCentre from './PageTitleCentre';
import PageTitleEnd from './PageTitleEnd';
import PageTable from './PageTable';
import PageFooter from './PageFooter';
import { styles } from './styles';

/**
 * Returns JSX for pdf header which at end
 *
 * @param {userType[],trainingType[]} { users, trainingData }
 *
 */

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
