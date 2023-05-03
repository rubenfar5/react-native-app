import { StyleSheet } from 'react-native';

const eventListItemStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ec3535',
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 100,
    marginBottom: 15,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    overflow: 'hidden',
  },
  imageContainer: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 50,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  date: {
    fontSize: 16,
    marginBottom: 5,
  },
  time: {
    fontSize: 16,
    marginBottom: 5,
  },
  location: {
    fontSize: 16,
    marginBottom: 5,
  },
  participants: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  availableSlots: {
    fontSize: 16,
    color: 'green',
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
});

export default eventListItemStyles;
