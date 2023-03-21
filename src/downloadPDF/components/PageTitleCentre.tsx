import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { useAppSelector } from '../../store/constants';

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    marginTop: 24,
    marginBottom: 0,
    width: 'auto',
    justifyContent: 'space-evenly',
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
  },
});

const PageTitleCentre = () => (
  <View style={styles.titleContainer}>
    <View>
      <Text style={styles.reportTitle}>Learner Register</Text>
      <Text style={styles.reportTitle1}>`Centre Name: Swift Training`</Text>
    </View>
    <View>
      <Text style={styles.reportTitle1}>`Venue: Swift Training`</Text>
      <Text style={styles.reportTitle1}>`Centre Number: 430921`</Text>
      <Text style={styles.reportTitle1}>Trainer Name: Eddie`</Text>
    </View>
  </View>
);

export default PageTitleCentre;
