import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import { styles } from './styles';

/**
 * Returns JSX for pdf header which in centre
 *
 * @param {trainingType[]} trainingData

 */

const PageTitleCentre = ({ trainingData }: { trainingData: trainingType[] }) => (
  <View style={styles.titleContainer}>
    <View>
      <Text style={styles.reportTitle}>Learner Register</Text>
      <View style={styles.decorate}>
        <Text style={styles.reportTitle1}>Centre Name: </Text>
        <Text style={styles.reportTitle2}>{trainingData[0].centre_name}</Text>
      </View>
    </View>
    <View>
      <View style={styles.decorate}>
        <Text style={styles.reportTitle1}>Venue: </Text>
        <Text style={styles.reportTitle2}>{trainingData[0].venue}</Text>
      </View>
      <View style={styles.decorate}>
        <Text style={styles.reportTitle1}>Centre Number: </Text>
        <Text style={styles.reportTitle2}>{trainingData[0].centre_number}</Text>
      </View>
      <View style={styles.decorate}>
        <Text style={styles.reportTitle1}>Trainer Name: </Text>
        <Text style={styles.reportTitle2}>{trainingData[0].user_name}</Text>
      </View>
    </View>
  </View>
);

export default PageTitleCentre;
