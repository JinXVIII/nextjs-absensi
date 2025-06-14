"use client"

import ErrorAlert from '@/components/Alert/ErrorAlert'
import TextInput from '@/components/Input/TextInput'
import { auth } from '@/lib/firebaseClient'
import { setCookie } from 'cookies-next'
import { signInWithEmailAndPassword } from 'firebase/auth'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

function Login() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        console.log('Data dikirim:', { email, password });

        try {
            const userCredentials = await signInWithEmailAndPassword(auth, email, password);
            const token = await userCredentials.user.getIdToken();

            setCookie('token', token, {
                maxAge: 60 * 60 * 24 * 30
            });

            router.push('/dashboard');
        } catch (error: any) {
            setError(error.message);
            setShowAlert(true);
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
                        Masuk <br /> ke Sekolahku
                    </h1>

                    <form onSubmit={handleLogin} className='flex flex-col gap-8'>
                        <div className='flex flex-col gap-4'>
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
                                {loading ? 'Loading...' : 'Masuk'}
                            </button>
                            <div>
                                <p className='text-primary text-center mt-4'>
                                    Belum punya akun? <a href="/register" className='text-absensi-primary'>Daftar disini</a>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>

                {/* Right Column */}
                <div className='w-3/5 h-full'>
                    <Image
                        src="/assets/images/banner.png"
                        alt='banner'
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
            </div>
        </div >
    )
}

export default Login