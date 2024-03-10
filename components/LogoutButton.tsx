import { Database } from '@/supabase';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import {useRouter} from 'next/navigation';

const LogoutButton = () => {
    const router = useRouter();
    const supabase = createClientComponentClient<Database>()

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push('/');
    }

    return (
        <button onClick={handleLogout} className='text-pink2 font-bold border-2 border-gray-200 hover:bg-gray-100 px-3 py-1 rounded-md'>Log out</button>
    )
}

export default LogoutButton;