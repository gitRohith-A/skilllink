'use client'
import React, { useState, useTransition } from 'react';
import { FormError } from '../form-error';
import { FormSuccess } from '../form-success';
import { register } from '@/actions/register';
import { signIn } from 'next-auth/react';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import reg from '../../public/home/reg.svg'
import { RingLoader } from 'react-spinners';
interface RegisterFormProps { }

const RegisterForm: React.FC<RegisterFormProps> = () => {
    const [data, setData] = useState({ email: '', password: '', name: '', occupation: '' });
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();
    const [loading, setLoading] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const SocialMedia = (provider: 'google' | 'github') => {
        signIn(provider, {
            callbackUrl: DEFAULT_LOGIN_REDIRECT
        })
    }

    const handleClick = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        setLoading(true)
        startTransition(() => {
            register(data)
                .then((data) => {
                    setError(data.error);
                    setSuccess(data.success);
                })
                .catch((e) => console.error(e))
                .finally(() => setLoading(false))
        });
    }

    return (
        <section className="bg-slate-100
         flex items-center  h-screen">
            <div className="container ">
                <div className="columns-2">
                    <div className="mx-4  flex flex-wrap">
                        <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white px-10 py-16 text-center dark:bg-dark-2 sm:px-12 md:px-[60px]">
                            <form onSubmit={handleClick}>
                                <div className=" w-full space-y-6 mb-4">
                                    <button
                                        className="w-full border-2 rounded-xl py-1"
                                        onClick={() => SocialMedia("google")}
                                        type='button'
                                    >
                                        <div className="flex items-center justify-center space-x-4 py-2">
                                            <FcGoogle className="h-8 w-8" />
                                            <p>Continue with Google</p>
                                        </div>
                                    </button>
                                    <button
                                        className="w-full border-2 rounded-xl py-1"
                                        onClick={() => SocialMedia("github")}
                                        type='button'
                                    >
                                        <div className="flex items-center justify-center space-x-4 py-2">
                                            <FaGithub className="h-8 w-8" />
                                            <p>Continue with GitHub</p>
                                        </div>
                                    </button>
                                </div>
                                <InputBox type="text" name="name" placeholder="User Name" value={data.name} onChange={handleChange} disabled={isPending} />
                                <InputBox type="email" name="email" placeholder="Email" value={data.email} onChange={handleChange} disabled={isPending} />
                                <InputBox type="password" name="password" placeholder="Password" value={data.password} onChange={handleChange} disabled={isPending} />
                                <FormError message={error} />
                                <FormSuccess message={success} />
                                <div className="mb-5">
                                    <button type="submit" className="w-full cursor-pointer rounded-md border border-primary bg-primary px-5 py-3 text-base font-medium bg-blue-600 text-white hover:bg-blue-500 disabled:bg-blue-200" disabled={loading}>

                                        {loading ? <RingLoader color='green' size={25} /> : " Create Account "}

                                    </button>
                                </div>

                                <p className="text-base text-body-color dark:text-dark-6 mt-5">
                                    <span className="pr-0.5">Already Have account?</span>
                                    <a
                                        href="/login"
                                        className="text-primary hover:underline"
                                    >
                                        Login In
                                    </a>
                                </p>
                            </form>
                        </div>
                    </div>
                    <div className="mb-10 text-center md:mb-16 relative space-y-32">

                        <a href="/#" className="mx-auto inline-block max-w-[160px]">
                            <div className="flex justify-end my-4 absolute top-[-16px] left-[52.5%]
                                ">
                                <span className="relative flex h-3 w-3 ">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                                </span>
                            </div>
                            <h5 className="text-4xl font-bold text-blue-600 ">SkillLink</h5>
                        </a>
                        <div className='flex justify-center '>
                            <Image src={reg} alt='image' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

interface InputBoxProps {
    type: string;
    placeholder: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled: boolean;
}

const InputBox: React.FC<InputBoxProps> = ({ type, placeholder, name, value, onChange, disabled }) => {
    return (
        <div className="mb-4">
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-dark"
                disabled={disabled}
            />
        </div>
    );
};

export default RegisterForm;
