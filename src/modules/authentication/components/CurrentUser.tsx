import useCurrentUser from '../hooks/use-current-user';

function CurrentUser() {
  const [currentUser] = useCurrentUser();

  return <div>{currentUser?.id}</div>;
}

export default CurrentUser;
