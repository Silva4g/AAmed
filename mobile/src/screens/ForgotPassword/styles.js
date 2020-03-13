import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  upperContainer: {
    flex: 2,
    justifyContent: 'center',
    backgroundColor: '#52c8fa',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    elevation: 5,
  },
  wrapper: {
    paddingHorizontal: 30,
    // backgroundColor: '#000000aa'
  },
  textOne: {
    fontSize: 32,
    color: '#fff',
    alignSelf: 'center',
    marginBottom: 32
  },
  textTwo: {
    fontSize: 16,
    color: '#fff',
    alignSelf: 'center',
    marginBottom: 42
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    position: 'absolute',
    top: 7,
    left: 7,
    zIndex: 5
  },
  input: {
    flex: 1,
    height: 44,
    borderWidth: 1,
    borderColor: 'transparent',
    backgroundColor: '#72d2fb',
    paddingHorizontal: 40,
    fontSize: 16,
    color: '#000',
    borderRadius: 2,
    marginBottom: 32,
  },
  button: {
    height: 42,
    width: 100,
    backgroundColor: '#fff',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    marginTop: 10
  },
  buttonText: {
    fontSize: 16,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  bottomText: {
    alignSelf: 'center',
    marginBottom: 16,
    color: '#939393'
  },
  others: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});

export default styles;