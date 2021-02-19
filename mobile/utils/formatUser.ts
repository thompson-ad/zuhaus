export const formatUser = (user: {
  uid: string;
  email: string;
  displayName: string;
  providerData: [{providerId: string}];
  photoURL: string;
}) => {
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
  };
};
