import { useEffect,useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';

function User() {
    const [user, setUser ] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchUser  = async () => {
        setLoading(true);
        try {
            const response = await axios.get('https://randomuser.me/api/');
            setUser (response.data.results[0]);
        } catch (error) {
            console.error("Error fetching user data:", error);
        } finally {
            setLoading(false);
        }
    };
 
    useEffect(() => {
        fetchUser ();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-500">
            <Header />
            <div className="flex flex-col items-center justify-center w-full max-w-md p-6 bg-white rounded-lg shadow-md mt-8">
                <h1 className="text-3xl font-bold mb-4">Profile</h1>
                {loading ? (
                    <p className="text-lg">Loading...</p>
                ) : (
                    user && (
                        <div className="text-center">
                            <img className="rounded-full ml- mb-4 w-32 h-32  ml-14" src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
                            <h2 className="text-xl font-semibold font-sans">{`${user.name.first} ${user.name.last}`}</h2>
                            <p className="text-gray-600 font-serif">Email: {user.email}</p>
                            <p className="text-gray-600 font-sans">Phone: {user.phone}</p>
                            
                        </div>
                    )
                )}
            </div>
            <Footer/>
        </div>
        );
}

export default User