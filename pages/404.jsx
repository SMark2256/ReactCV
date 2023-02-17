import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000);
    }, []);

    return (
        <div>
            <h1 className="font-bold text-5xl pb-5">Oooops...</h1>
            <h2>That page cannot be found.</h2>
            <p>This is the home page, you can go back to this page.</p>
        </div>
    );
};

export default NotFound;
