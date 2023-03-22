import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    marginTop: 24,
    width: 'auto',
    justifyContent: 'space-around',
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

const PageTitleEnd = ({ trainingData }: { trainingData: trainingType[] }) => {
  const start_date: Array<string> = new Date(trainingData[0]?.start_date).toString().split(' ');
  const end_date: Array<string> = new Date(trainingData[0]?.end_date).toString().split(' ');

  return (
    <View style={styles.titleContainer}>
      <View style={styles.reportTitle}>
        <Text style={styles.reportTitle1}>Course Start Date: {`${start_date[2]} ${start_date[1]} ${start_date[3]}`}</Text>
      </View>
      <View>
        <Text style={styles.reportTitle1}>Course End Date: {`${end_date[2]} ${end_date[1]} ${end_date[3]}`}</Text>
      </View>
      <View>
        <Text style={styles.reportTitle1}>Course Duration: {trainingData[0].duration} Hrs</Text>
      </View>
    </View>
  );
};

export default PageTitleEnd;
