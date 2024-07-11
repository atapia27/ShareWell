import { NextPage } from 'next';

const Home: NextPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">Welcome to my ShareWell Assessment!</h1>
            <p className="text-lg mb-2">Please check out our Red, Blue, and Green pages:</p>
            <ul className="list-disc">
                <li><a href="/red" className="text-red-500 hover:underline">Red Page</a></li>
                <li><a href="/blue" className="text-blue-500 hover:underline">Blue Page</a></li>
                <li><a href="/green" className="text-green-500 hover:underline">Green Page</a></li>
            </ul>
        </div>
    );
};

export default Home;