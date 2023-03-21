import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { wrap } from 'module';

const borderColor = '#90e5fc';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: '#bff0fd',
    backgroundColor: '#bff0fd',
    borderBottomWidth: 1,
    alignItems: 'center',
    height: 30,
    textAlign: 'center',
    fontStyle: 'bold',
    flexGrow: 1,
  },
  name: {
    width: '20%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  dob: {
    width: '15%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  email: {
    width: '25%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  signature: {
    width: '10%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  photoId: {
    width: '10%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  attendance: {
    width: '10%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  expdt: {
    width: '20%',
  },
});

const PageTableHeader = () => (
  <View style={styles.container}>
    <Text style={styles.name}>Name</Text>
    <Text style={styles.dob}>DOB</Text>
    <Text style={styles.email}>Email Address</Text>
    <Text style={styles.signature}>Signature</Text>
    <Text style={styles.photoId}>PhotoId</Text>
    <Text style={styles.attendance}>Attendance</Text>
    <Text style={styles.expdt}>Expiry Date of Last Cert</Text>
  </View>
);

export default PageTableHeader;
