'use client'
import React, { startTransition, useState, useTransition } from 'react';
import { login } from '@/actions/login';
import { FormError } from '../form-error';
import { FormSuccess } from '../form-success';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { signIn } from 'next-auth/react';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import Image from 'next/image';
import log from '../../public/home/log.svg'
import { ScaleLoader, RingLoader } from 'react-spinners';
interface LoginFormProps {

}

const LoginForm: React.FC<LoginFormProps> = () => {
    const [data, setData] = useState({ email: '', password: '' });
    const [isPending, startTransition] = useTransition();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");

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
            login(data)
                .then((data) => {
                    if (data?.error) {
                        setData({ email: '', password: '' })
                        setError(data.error);
                    }
                    if (data?.success) {
                        setData({ email: '', password: '' })
                        setSuccess(data.success);
                    }
                })
                .catch(() => alert("Something went wrong"))
                .finally(() => setLoading(false))
        });
    }

    return (
        <section className="
        bg-slate-100
         flex items-center  h-screen ">
            <div className="container ">
                <div className="columns-2">
                    <div className="mb-10 text-center md:mb-16 relative space-y-32">

                        <a href="/#" className="mx-auto inline-block max-w-[160px]">
                            <div className="flex justify-end my-4 absolute top-[-17.5px] left-[52.5%]
                                ">
                                <span className="relative flex h-3 w-3 ">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                                </span>
                            </div>
                            <h5 className="text-4xl font-bold text-blue-600 ">SkillLink</h5>
                        </a>
                        <div className='flex justify-center '>
                            <Image src={log} alt='image' />
                        </div>
                    </div>
                    <div className="mx-4  flex flex-wrap">
                        <div className="w-full">

                            <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-3xl bg-white  px-10 py-16 text-center dark:bg-dark-2 sm:px-12 md:px-[60px]">


                                <form onSubmit={handleClick}>
                                    <div className=" w-full space-y-6">
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
                                    <div className=" relative">
                                        <hr className=" h-px my-8 bg-gray-200 bord dark:bg-gray-700" />
                                        <div className="bg-red-600">
                                            <p className='absolute top-[-12px] right-0 left-0  '>
                                                or
                                            </p>
                                        </div>
                                    </div>
                                    <InputBox type="email" name="email" placeholder="Email" value={data.email} onChange={handleChange} />
                                    <InputBox type="password" name="password" placeholder="Password" value={data.password} onChange={handleChange} />

                                    <FormError message={error} />
                                    <FormSuccess message={success} />
                                    <div className="mb-5">
                                        <button
                                            type="submit"
                                            className="w-full rounded-xl border border-primary bg-primary px-5 py-3 text-base font-medium bg-blue-600 text-white hover:bg-blue-500 disabled:bg-blue-200"
                                            disabled={loading}

                                        >
                                            {loading ? <RingLoader color='green' size={25} /> : " Log in "}
                                        </button>
                                    </div>




                                    <a
                                        href="/#"
                                        className="mb-2 mt-3 inline-block text-base text-dark hover:text-primary hover:underline dark:text-dark"
                                    >
                                        Forget Password?
                                    </a>
                                    <p className="text-base text-body-color dark:text-dark-6">
                                        <span className="pr-0.5">Not a member yet?</span>
                                        <a
                                            href="/register"
                                            className="text-primary hover:underline"
                                        >
                                            Sign Up
                                        </a>
                                    </p>
                                </form>
                            </div>
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
}

const InputBox: React.FC<InputBoxProps> = ({ type, placeholder, name, value, onChange }) => {
    return (
        <div className="mb-4">
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                className="w-full rounded-xl border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-dark"
            />
        </div>
    );
};

export default LoginForm;
