import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import { styles } from './styles';

/**
 * Returns JSX for table header in pdf
 *

 */

const PageTableHeader = () => (
  <View style={styles.container}>
    <Text style={styles.nameH}>Name</Text>
    <Text style={styles.dobH}>DOB</Text>
    <Text style={styles.emailH}>Email Address</Text>
    <Text style={styles.signatureH}>Signature</Text>
    <Text style={styles.photoIdH}>PhotoId</Text>
    <Text style={styles.attendanceH}>Attendance</Text>
    <Text style={styles.expdtH}>Expiry Date of Last Cert</Text>
  </View>
);

export default PageTableHeader;
