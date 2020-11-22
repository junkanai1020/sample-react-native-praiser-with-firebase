import auth from '@react-native-firebase/auth';

export default async function signOut() {
  await auth().signOut();
}
