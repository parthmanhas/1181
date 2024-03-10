'use client';

import Content from '@/components/Content';
import Sidebar from '@/components/Sidebar';
import { CONSTANTS } from '@/constants/Constants';
import { useState } from 'react';

export default function Dashboard() {
    const [selectedItem, setSelectedItem] = useState(0);
    return (
        <main className='flex justify-between'>
            <Sidebar width={25} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
            {CONSTANTS.TOOLS
                .filter(tool => tool.id === selectedItem)
                ?.map((tool, index) => <Content key={index} width={75} component={tool.component} />)
            }
        </main>


    )
}