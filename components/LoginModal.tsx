import Logo from '@/components/Logo';
import Modal from '@/components/Modal';
import { Dispatch, SetStateAction } from 'react';
const LoginModal = ({ isModalOpen, setIsModalOpen }: { isModalOpen: boolean, setIsModalOpen: Dispatch<SetStateAction<boolean>> }) => {
    return (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <div className="flex flex-col justify-center items-center w-full">
                <Logo />
                <div className="flex flex-col self-start w-full mt-5">
                    <label className="font-semibold mb-1">Email</label>
                    <input className="p-2 border-2 rounded-md border-gray-200" type="email" placeholder="Enter Email"></input>
                </div>
                <div className="flex flex-col self-start w-full mt-5">
                    <label className="font-semibold mb-1">Password</label>
                    <input className="p-2 border-2 rounded-md border-gray-200" type="password" placeholder="Enter Password"></input>
                </div>
                <button className="mt-8 text-white border-2 bg-gradient-to-t from-pink3 to-pink1 font-semibold border-pink-500 rounded-md px-5 py-1">Login</button>
            </div>
        </Modal>
    )
}

export default LoginModal;