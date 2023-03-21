import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    marginTop: 24,
    width: 'auto',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  reportTitle: {
    color: 'black',
    letterSpacing: 1,
    fontSize: 20,
    textAlign: 'left',
  },
  reportTitle1: {
    color: 'black',
    letterSpacing: 1,
    fontSize: 10,
    textAlign: 'left',
    flexDirection: 'row',
  },
});

const PageTitleEnd = () => (
  <View style={styles.titleContainer}>
    <View style={styles.reportTitle}>
      <Text style={styles.reportTitle1}>Course Start Date:xx/xx/xxxx</Text>
    </View>
    <View>
      <Text style={styles.reportTitle1}>Course End Date: xx/xx/xxxx</Text>
    </View>
    <View>
      <Text style={styles.reportTitle1}>Course Duration: 60 Hrs</Text>
    </View>
  </View>
);

export default PageTitleEnd;