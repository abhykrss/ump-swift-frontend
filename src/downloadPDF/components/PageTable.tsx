import React from 'react';
import { View } from '@react-pdf/renderer';
import PageTableHeader from './PageTableHeader';
import PageRows from './PageRows';
import { styles } from './styles';
const tableRowsCount = 11;

/**
 * Returns JSX for table layout in pdf
 *
 * @param {userType[]} users

 */

const PageTable = ({ users }: { users: userType[] }) => (
  <View style={styles.tableContainer}>
    <PageTableHeader />
    <PageRows users={users} />
  </View>
);

export default PageTable;
