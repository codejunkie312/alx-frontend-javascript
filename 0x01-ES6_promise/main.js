import handleProfileSignup from './6-final-user';

const test = async () => {
  console.log(await handleProfileSignup('Bob', 'Dylan', 'bob_dylan.jpg'));
};
test();
