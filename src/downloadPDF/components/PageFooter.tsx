import React from 'react';
import { Text, View, StyleSheet, Font } from '@react-pdf/renderer';
Font.register({
  family: 'Open Sans',
  fonts: [
    { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf' },
    { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf', fontWeight: 600 },
  ],
});
const borderColor = '#90e5fc';
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    borderBottomColor: '#bff0fd',
    borderBottomWidth: 1,
    alignItems: 'center',
    height: 24,
    justifyContent: 'space-between',
  },
  description: {
    fontFamily: 'Open Sans',
    width: '85%',
    textAlign: 'left',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: 8,
    fontWeight: 'bold',
    fontSize: 10,
  },
  description1: {
    fontFamily: 'Open Sans',
    fontWeight: 'normal',
    fontSize: 10,
    textAlign: 'left',
    paddingLeft: 8,
  },
  decorate: {
    flexDirection: 'row',
  },
});

const PageFooter = ({ users, trainingData }: { users: userType[]; trainingData: trainingType[] }) => {
  const todayDate: Array<string> = new Date().toString().split(' ');
  return (
    <View style={styles.row} wrap={false}>
      <Text style={styles.description}>
        Total Learners: <Text style={styles.description1}>{users.length}</Text>
      </Text>

      <Text style={styles.description}>
        Trainers Signature: <Text style={styles.description1}>{trainingData[0].user_name}</Text>
      </Text>

      <Text style={styles.description}>
        Date: <Text style={styles.description1}>{`${todayDate[2]} ${todayDate[1]} ${todayDate[3]}`}</Text>
      </Text>
    </View>
  );
};

export default PageFooter;
