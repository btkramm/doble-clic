import client from '@/modules/api/utils';
import useCurrentUser from '@/modules/authentication/hooks/use-current-user';
import useSignIn from '@/modules/authentication/hooks/use-sign-in';
import useSignOut from '@/modules/authentication/hooks/use-sign-out';

const Index = () => {
  const currentUser = useCurrentUser();
  const signOut = useSignOut();
  const signIn = useSignIn();

  return (
    <div>
      <h1 className="text-lg">{currentUser?.id}</h1>

      <br />
      {currentUser != null ? (
        <button onClick={signOut}>Sign out</button>
      ) : (
        <button onClick={signIn}>Sign in</button>
      )}
      <br />
      <button onClick={() => client.get('/bad-request')}>Do a request</button>
    </div>
  );
};

export default Index;
