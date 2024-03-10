'use client';

import Content from '@/components/loggedIn/Content';
import Sidebar from '@/components/Sidebar';
import { CONSTANTS } from '@/constants/Constants';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Database } from '@/supabase';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function Dashboard() {
    const [selectedItem, setSelectedItem] = useState(0);

    const router = useRouter();
    const supabase = createClientComponentClient<Database>()

    useEffect(() => {
        const user = supabase.auth.getUser();

        if (!user) {
            router.push('/login');
        }
    }, []);

    return (
        <main className='flex justify-between w-full'>
            <div className='w-[20%]'>
                <Sidebar selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
            </div>
            <div className='w-[80%]'>
                {CONSTANTS.TOOLS
                    .filter(tool => tool.id === selectedItem)
                    ?.map((tool, index) => <Content key={index} component={tool.component} />)
                }
            </div>
        </main>


    )
}