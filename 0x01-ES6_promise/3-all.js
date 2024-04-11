import { uploadPhoto, createUser } from './utils';

const handleProfileSignup = async () => {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
  } catch (error) {
    console.log('Signup system offline');
  }
};

export default handleProfileSignup;
