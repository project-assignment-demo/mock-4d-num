import { useNavigate } from 'react-router';
import NotFoundImage from './notFound.svg';

const NotFound = () => {

    const navigate = useNavigate();

    const backToHome = () => {
        navigate('/');
    }

  return (
    <main className="w-full h-full bg-[rgb(243,243,243)]">
      <div className="min-h-dvh min-w-dvw flex justify-center items-center flex-col overflow-y-auto gap-[10px] px-[16px] py-[32px]">
        <div>
        <img className='w-full h-full' src={NotFoundImage} />
        </div>
        <p>Oh no, something went wrong!</p>
        <p>We provide professional service for private.</p>
        <button className='bg-blue-400 p-[10px]' onClick={backToHome}>Back To Home</button>
      </div>
    </main>
  );
};



export default NotFound;
