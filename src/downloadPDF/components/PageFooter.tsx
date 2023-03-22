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

const PageFooter = ({ users, trainingData }: { users: userType[]; trainingData: trainingType[] }) => {
  const todayDate: Array<string> = new Date().toString().split(' ');
  return (
    <View style={styles.row} wrap={false}>
      <Text style={styles.description}>Total Learners: {users.length}</Text>
      <Text style={styles.description}>Trainers Signature: {trainingData[0].user_name}</Text>
      <Text style={styles.description}>Date: {`${todayDate[2]} ${todayDate[1]} ${todayDate[3]}`}</Text>
    </View>
  );
};

export default PageFooter;
