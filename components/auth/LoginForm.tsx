'use client'
import React, { startTransition, useState, useTransition } from 'react';
import { login } from '@/actions/login';
import { FormError } from '../form-error';
import { FormSuccess } from '../form-success';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { signIn } from 'next-auth/react';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';

interface LoginFormProps {

}

const LoginForm: React.FC<LoginFormProps> = () => {
    const [data, setData] = useState({ email: '', password: '' });
    const [isPending, startTransition] = useTransition();
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
                .catch(() => alert("Something went wrong"));
        });
    }

    return (
        <section className="bg-slate-700 flex items-center h-screen">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full">
                        <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white px-10 py-16 text-center dark:bg-dark-2 sm:px-12 md:px-[60px]">
                            <div className="mb-10 text-center md:mb-16">
                                <a href="/#" className="mx-auto inline-block max-w-[160px]">
                                    <h5 className="text-4xl font-bold text-blue-700 ">SkillLink</h5>
                                </a>
                            </div>
                            <form onSubmit={handleClick}>
                                <InputBox type="email" name="email" placeholder="Email" value={data.email} onChange={handleChange} />
                                <InputBox type="password" name="password" placeholder="Password" value={data.password} onChange={handleChange} />

                                <FormError message={error} />
                                <FormSuccess message={success} />
                                <div className="mb-5">
                                    <button
                                        type="submit"
                                        className="w-full cursor-pointer rounded-md border border-primary bg-primary px-5 py-3 text-base font-medium text-dark transition hover:bg-opacity-90 hover:bg-blue-700 hover:delay-50  hover:text-white hover:ease-in-out duration-300 disabled:bg-slate-300 disabled:text-white"
                                        disabled={isPending}
                                    >
                                        Log In
                                    </button>
                                </div>

                                <div className="flex items-center w-full gap-x-2">
                                    <button
                                        className="w-full border-2 rounded-md py-1"
                                        onClick={() => SocialMedia("google")}
                                        type='button'
                                    >
                                        <div className="flex items-center justify-evenly">
                                            Continue with <FcGoogle className="h-10 w-10" />
                                        </div>
                                    </button>
                                    <button
                                        className="w-full border-2 rounded-md py-1"
                                        onClick={() => SocialMedia("github")}
                                        type='button'
                                    >
                                        <div className="flex items-center justify-evenly">
                                            Continue with <FaGithub className="h-10 w-10" />
                                        </div>
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
                className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-dark"
            />
        </div>
    );
};

export default LoginForm;
