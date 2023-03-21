import React from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';
import PageTableHeader from './PageTableHeader';
import PageRows from './PageRows';

const tableRowsCount = 11;

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 24,
    borderWidth: 1,
    borderColor: '#bff0fd',
  },
});

const PageTable = () => (
  <View style={styles.tableContainer}>
    <PageTableHeader />
    <PageRows />
  </View>
);

export default PageTable;
