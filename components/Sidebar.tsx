import SidebarComponent from '@/components/SidebarComponent';
import Logo from './Logo';
import { Dispatch, SetStateAction, useState } from 'react';
import { CONSTANTS } from './../constants/Constants';

export default function Sidebar({ width, selectedItem, setSelectedItem }: { width: number, selectedItem: number, setSelectedItem: Dispatch<SetStateAction<number>> }) {
    return (
        <div className={`p-5 border-r-2 border-gray-100 h-full ${width ? `w-[${width}%]` : ''}`}>
            <Logo />
            <div className='mt-5'>
                <p className='font-bold text-gray-500 mb-3 text-sm px-3'>ALL CREATOR TOOLS</p>
                {CONSTANTS.TOOLS.map((tool, index) => <SidebarComponent key={index} props={{...tool, selected: selectedItem == index, setSelectedItem}}/>)}
            </div>
        </div>
    )
}