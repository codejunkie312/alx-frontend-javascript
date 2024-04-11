import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

const handleProfileSignup = async (firstName, lastName, fileName) => {
  const results = await Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]);
  return results.map((result) => {
    if (result.status === 'rejected') {
      const errorTitle = result.reason.message;
      return { status: 'rejected', value: `Error: ${errorTitle}` };
    }
    return { status: 'fulfilled', value: result.value };
  });
};

export default handleProfileSignup;
