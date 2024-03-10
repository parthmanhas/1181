'use client';

import Image from 'next/image';
import { Dispatch, SetStateAction, useState } from 'react';

interface SidebarComponentProp {
    id: number,
    name: string,
    iconSrc: string,
    iconAlt: string
    selected?: boolean,
    setSelectedItem: Dispatch<SetStateAction<number>>
}

export default function SidebarComponent({ props }: { props: SidebarComponentProp }) {

    const handleClick = () => {
        props.setSelectedItem(props.id);
    }

    return (
        <div className={`flex items-center justify-start mb-2 
        ${props.selected ? 'bg-gray-100' : 'hover:bg-gray-100'} p-3 text-black hover:cursor-pointer rounded-md`
        } onClick={handleClick}>
            <Image width={20} height={20} src={props.iconSrc} alt={props.iconAlt}></Image>
            <p className='text-gray-500 ml-2 font-semibold'>{props.name}</p>
        </div>
    )
}