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

const PageTitleCentre = ({ trainingData }: { trainingData: trainingType[] }) => (
  <View style={styles.titleContainer}>
    <View>
      <Text style={styles.reportTitle}>Learner Register</Text>
      <Text style={styles.reportTitle1}>Centre Name:{trainingData[0].centre_name}</Text>
    </View>
    <View>
      <Text style={styles.reportTitle1}>Venue: {trainingData[0].venue}</Text>
      <Text style={styles.reportTitle1}>Centre Number: {trainingData[0].centre_number}</Text>
      <Text style={styles.reportTitle1}>Trainer Name: {trainingData[0].user_name}</Text>
    </View>
  </View>
);

export default PageTitleCentre;
