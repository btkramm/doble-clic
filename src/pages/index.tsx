import AuthenticationProvider from '@/modules/authentication/components/AuthenticationProvider';
import CurrentUser from '@/modules/authentication/components/CurrentUser';

const Index = () => {
  return (
    <div>
      <CurrentUser></CurrentUser>

      <AuthenticationProvider>
        <CurrentUser></CurrentUser>

        <CurrentUser></CurrentUser>
      </AuthenticationProvider>
    </div>
  );
};

export default Index;
