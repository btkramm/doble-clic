import useCurrentUser from '../hooks/use-current-user';
import useSignOut from '../hooks/use-sign-out';

function CurrentUser() {
  const currentUser = useCurrentUser();
  const signOut = useSignOut();

  return (
    <>
      <div>{currentUser?.id}</div>
      <button onClick={signOut}>SignOut</button>
    </>
  );
}

export default CurrentUser;
