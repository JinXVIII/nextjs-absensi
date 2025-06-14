"use client"

import ErrorAlert from '@/components/Alert/ErrorAlert';
import TextInput from '@/components/Input/TextInput'
import { auth, db } from '@/lib/firebaseClient';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

function Register() {
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        console.log('Data dikirim:', { name, email, password });

        try {
            const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
            const uid = userCredentials.user.uid;

            await updateProfile(userCredentials.user, {
                displayName: name,
            });

            await setDoc(doc(db, "users", uid), {
                name,
                email,
                role: "teacher"
            });

            setName('');
            setEmail('');
            setPassword('');
            setError('');
            setLoading(false);
            router.push('/login');
        } catch (error: any) {
            setError(error.message);
            setShowAlert(true);

            setTimeout(() => {
                setShowAlert(false);
            }, 3000);
            setLoading(false);
        }
    }

    return (
        <div className='relative'>
            <ErrorAlert message={error} visible={showAlert} />

            <div className='flex items-center w-screen h-screen justify-between font-poppins'>
                {/* Left Column */}
                <div className='w-2/5 h-full p-16 flex flex-col gap-16'>
                    <div className='flex flex-row items-center gap-4'>
                        <Image
                            src="/assets/icons/favicon.png"
                            width={120}
                            height={120}
                            alt="logo" />
                        <div className="flex flex-col">
                            <p className='text-2xl text-absensi-primary font-bold'>
                                Sekolahku
                            </p>
                            <p className='text-primary'>
                                Sekolahku, sekolahmu, sekolah kita semu
                            </p>
                        </div>
                    </div>

                    <h1 className='text-xl font-bold text-primary'>
                        Daftar <br /> ke Sekolahku
                    </h1>

                    <form onSubmit={handleRegister} className='flex flex-col gap-8'>
                        <div className='flex flex-col gap-4'>
                            <TextInput
                                label="Nama"
                                type="text"
                                name="name"
                                placeholder="Masukkan nama"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />

                            <TextInput
                                label="Email"
                                type="email"
                                name="email"
                                placeholder="Masukkan email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <TextInput
                                label="Password"
                                type="password"
                                name="password"
                                placeholder="Masukkan password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="bg-absensi-primary text-white py-3 rounded-lg w-full"
                                disabled={loading}
                            >
                                {loading ? 'Loading...' : 'Daftar'}
                            </button>
                            <div>
                                <p className='text-primary text-center mt-4'>
                                    Sudah punya akun? <a href="/login" className='text-absensi-primary'>Masuk disini</a>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>

                {/* Right Column */}
                <div className='w-3/5 h-full'>
                    <Image
                        src="/assets/images/banner2.png"
                        alt='banner'
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Register