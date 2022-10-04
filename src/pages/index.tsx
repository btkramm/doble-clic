import CurrentUser from '@/modules/authentication/components/CurrentUser';
import useCurrentUser from '@/modules/authentication/hooks/use-current-user';

// const signOut = (): void => '';

const Index = () => {
  const [, setCurrentUser] = useCurrentUser();

  const signOut = () => setCurrentUser(undefined);

  return (
    <div>
      <CurrentUser></CurrentUser>
      <button onClick={signOut}>Sign out</button>
    </div>
  );
};

export default Index;
