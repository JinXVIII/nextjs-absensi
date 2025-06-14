import TextInput from '@/components/Input/TextInput'
import Image from 'next/image'
import React from 'react'

function Login() {
    return (
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

                <div className='flex flex-col gap-4'>
                    <TextInput
                        label='Email'
                        type='email'
                        name='email'
                        placeholder='Masukkan email'
                    />

                    <TextInput
                        label='Password'
                        type='password'
                        name='password'
                        placeholder='Masukkan password'
                    />
                </div>

                <div>
                    <button className='bg-absensi-primary text-white py-3 rounded-lg w-full'>
                        Masuk
                    </button>
                    <div>
                        <p className='text-primary text-center mt-4'>
                            Belum punya akun? <a href="/register" className='text-absensi-primary'>Daftar disini</a>
                        </p>
                    </div>
                </div>
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
    )
}

export default Login