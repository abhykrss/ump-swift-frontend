import { Text, View } from '@react-pdf/renderer';
import { styles } from './styles';

/**
 * Returns JSX for rows of table of PDF
 *
 * @param {usersType[]} users

 */

const PageRows = ({ users }: { users: userType[] }) => {
  const rows = users.map((item: userType, index: number) => {
    const dobFormatted = new Date(item.dob).toString().split(' ');
    return (
      <View style={styles.row} key={index} wrap={false}>
        <Text style={styles.name}>{item.user_name}</Text>
        <Text style={styles.dob}>{`${dobFormatted[2]} ${dobFormatted[1]} ${dobFormatted[3]}`}</Text>
        <Text style={styles.email}>{item.email}</Text>
        <Text style={styles.signature}>NA</Text>
        <Text style={styles.photoId}>{item.photo_id ? 'Yes' : 'No'}</Text>
        <Text style={styles.attendance}>{item.attendance === null ? 'NA' : item.attendance}</Text>
        <Text style={styles.expdt}>NA</Text>
      </View>
    );
  });

  return <>{rows}</>;
};

export default PageRows;
