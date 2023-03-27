import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import { styles } from './styles';

/**
 * Returns JSX for pdf header which at end
 *
 * @param {trainingType[]} trainingData training data

 */

const PageTitleEnd = ({ trainingData }: { trainingData: trainingType[] }) => {
  // consverting to the format DD-MM-YYYY
  const start_date: Array<string> = new Date(trainingData[0]?.start_date).toString().split(' ');
  const end_date: Array<string> = new Date(trainingData[0]?.end_date).toString().split(' ');

  return (
    <View style={styles.titleContainer}>
      <View style={styles.decorate}>
        <Text style={styles.reportTitle1}>Course Start Date: </Text>
        <Text style={styles.reportTitle2}>{`${start_date[2]} ${start_date[1]} ${start_date[3]} `}</Text>
      </View>

      <View style={styles.decorate}>
        <Text style={styles.reportTitle1}>Course End Date: </Text>
        <Text style={styles.reportTitle2}>{`${end_date[2]} ${end_date[1]} ${end_date[3]} `}</Text>
      </View>
      <View style={styles.decorate}>
        <Text style={styles.reportTitle1}>Course Duration: </Text>
        <Text style={styles.reportTitle2}>{trainingData[0].duration} Hrs</Text>
      </View>
    </View>
  );
};

export default PageTitleEnd;
