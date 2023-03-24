import { StyleSheet, Font } from '@react-pdf/renderer';
Font.register({
  family: 'Open Sans',
  fonts: [
    { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf' },
    { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf', fontWeight: 600 },
  ],
});
const borderColor = '#90e5fc';
export const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    marginTop: 24,
    marginBottom: 0,
    width: 'auto',
    justifyContent: 'space-around',
  },
  reportTitle: {
    color: 'black',
    letterSpacing: 1,
    fontSize: 20,
    textAlign: 'left',
  },
  reportTitle1: {
    fontFamily: 'Open Sans',
    color: 'black',
    fontSize: 10,
    textAlign: 'left',
    fontWeight: 600,
  },
  reportTitle2: {
    fontFamily: 'Open Sans',
    color: 'black',
    letterSpacing: 1,
    fontSize: 10,
    textAlign: 'left',
  },
  decorate: {
    flexDirection: 'row',
  },
  descDecorate: {
    width: '85%',
    textAlign: 'left',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: 8,
  },
  description2: {
    fontFamily: 'Open Sans',
    width: '85%',
    textAlign: 'left',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: 8,
  },
  row: {
    flexDirection: 'row',
    borderBottomColor: '#bff0fd',
    borderBottomWidth: 1,
    alignItems: 'center',
    height: 24,
    fontSize: 12,
    fontStyle: 'bold',
    justifyContent: 'space-evenly',
  },
  titleContainer1: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 0,
    width: 'auto',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
