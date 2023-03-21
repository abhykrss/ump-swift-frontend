import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#90e5fc';
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    borderBottomColor: '#bff0fd',
    borderBottomWidth: 1,
    alignItems: 'center',
    height: 24,
    fontSize: 12,
    fontStyle: 'bold',
    justifyContent: 'space-between',
  },
  description: {
    width: '85%',
    textAlign: 'left',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: 8,
  },
});

const PageFooter = () => {
  return (
    <View style={styles.row} wrap={false}>
      <Text style={styles.description}>Total Learners: 5</Text>
      <Text style={styles.description}>Trainers Signature: xxxxx</Text>
      <Text style={styles.description}>Date: xx/xx/xxxx</Text>
    </View>
  );
};

export default PageFooter;
