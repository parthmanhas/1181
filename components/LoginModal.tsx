'use client';

import Logo from '@/components/Logo';
import Modal from '@/components/Modal';
import { Database } from '@/supabase';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { Dispatch, MouseEventHandler, SetStateAction, useState } from 'react';
import Toast from './Toast';


const LoginModal = ({ isModalOpen, setIsModalOpen }: { isModalOpen: boolean, setIsModalOpen: Dispatch<SetStateAction<boolean>> }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [toastMsg, setToastMsg] = useState('');

    const router = useRouter()
    const supabase = createClientComponentClient<Database>()

    const handleLogin = async () => {
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })
        setEmail('');
        setPassword('');

        if (error) {
            setToastMsg(error.message);
            setShowToast(true);
        } else {
            router.push('/dashboard');
        }
    }

    const handleSignup = async () => {
        const { error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: `${location.origin}/auth/callback`,
            },
        })
        router.refresh();
        setEmail('');
        setPassword('');

        if (error) {
            setToastMsg(error.message);
            setShowToast(true);
        } else {
            setToastMsg("Signup successfull, check you email for further instructions !");
            setShowToast(true);
        }

    }

    return (
        <Modal isOpen={isModalOpen} onClose={() => { setIsModalOpen(false) }}>
            <div onClick={e => e.stopPropagation()} className="flex flex-col justify-center items-center w-full">
                <Logo />
                <div className="flex flex-col self-start w-full mt-5">
                    <label className="font-semibold mb-1">Email</label>
                    <input className="p-2 border-2 rounded-md border-gray-200" onChange={e => { setEmail(e.target.value) }} value={email} type="email" placeholder="Enter Email"></input>
                </div>
                <div className="flex flex-col self-start w-full mt-5">
                    <label className="font-semibold mb-1">Password</label>
                    <input className="p-2 border-2 rounded-md border-gray-200" onChange={e => setPassword(e.target.value)} value={password} type="password" placeholder="Enter Password"></input>
                </div>
                <button onClick={handleLogin} className="mt-8 text-white border-2 bg-gradient-to-t from-pink3 to-pink1 font-semibold border-pink-500 rounded-md px-5 py-1">Login</button>
                <p className='mt-5 text-gray-400 font-semibold'>or if you dont have an account, then</p>
                <button onClick={handleSignup} className="mt-2 text-white border-2 bg-gradient-to-t from-pink3 to-pink1 font-semibold border-pink-500 rounded-md px-5 py-1">Signup</button>
                { }
            </div>
            {showToast && <Toast message={toastMsg} duration={10000} />}
        </Modal>
    )
}

export default LoginModal;