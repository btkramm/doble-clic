import { Meta } from '@/layouts/Meta';
import useCurrentUser from '@/modules/authentication/hooks/use-current-user';
import useSignIn from '@/modules/authentication/hooks/use-sign-in';
import useSignOut from '@/modules/authentication/hooks/use-sign-out';
import { Main } from '@/templates/Main';

const Index = () => {
  const currentUser = useCurrentUser();
  const signOut = useSignOut();
  const signIn = useSignIn();

  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      Hello {currentUser?.id}
      <br />
      {currentUser != null ? (
        <button onClick={signOut}>Sign out</button>
      ) : (
        <button onClick={signIn}>Sign in</button>
      )}
    </Main>
  );
};

export default Index;
