import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import { styles } from './styles';

/**
 * Returns JSX for footer of PDF
 *
 * @param {userType[],trainingType[]} { users, trainingData }

 */

const PageFooter = ({ users, trainingData }: { users: userType[]; trainingData: trainingType[] }) => {
  const todayDate: Array<string> = new Date().toString().split(' ');
  return (
    <View style={styles.row2} wrap={false}>
      <Text style={styles.descriptionBold}>
        Total Learners: <Text style={styles.description2}>{users.length}</Text>
      </Text>

      <Text style={styles.descriptionBold}>
        Trainers Signature: <Text style={styles.description2}>{trainingData[0].user_name}</Text>
      </Text>

      <Text style={styles.descriptionBold}>
        Date: <Text style={styles.description2}>{`${todayDate[2]} ${todayDate[1]} ${todayDate[3]}`}</Text>
      </Text>
    </View>
  );
};

export default PageFooter;
