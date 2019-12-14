import LoginDialog from '../../components/LoginDialog';
import { useRouter } from 'next/dist/client/router';

const Main = () => {
    const router = useRouter();

    return (
      <>
        <LoginDialog />
      </>
    )
  }
  
  export default Main;