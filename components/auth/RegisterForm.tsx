'use client'
import React, { useState, useTransition } from 'react';
import { FormError } from '../form-error';
import { FormSuccess } from '../form-success';
import { register } from '@/actions/register';
import { signIn } from 'next-auth/react';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

interface RegisterFormProps { }

const RegisterForm: React.FC<RegisterFormProps> = () => {
    const [data, setData] = useState({ email: '', password: '', name: '', occupation: '' });
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();

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
            register(data)
                .then((data) => {
                    setError(data.error);
                    setSuccess(data.success);
                });
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
                                <InputBox type="text" name="name" placeholder="User Name" value={data.name} onChange={handleChange} disabled={isPending} />
                                <InputBox type="email" name="email" placeholder="Email" value={data.email} onChange={handleChange} disabled={isPending} />
                                <InputBox type="password" name="password" placeholder="Password" value={data.password} onChange={handleChange} disabled={isPending} />
                                <SelectBox name="occupation" value={data.occupation} onChange={handleChange} disabled={isPending} />
                                <FormError message={error} />
                                <FormSuccess message={success} />
                                <div className="mb-5">
                                    <button type="submit" className="w-full cursor-pointer rounded-md border border-primary bg-primary px-5 py-3 text-base font-medium text-dark transition hover:bg-opacity-90 hover:bg-blue-700 hover:delay-50  hover:text-white hover:ease-in-out duration-300 disabled:bg-slate-500" disabled={isPending}>
                                        Create Account
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

interface SelectBoxProps {
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled: boolean;
}

const SelectBox: React.FC<SelectBoxProps> = ({ name, value, onChange, disabled }) => {
    return (
        <div className="mb-4">
            <select
                name={name}
                className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-dark text-slate-400"
                value={value}
                onChange={onChange}
                disabled={disabled}
            >
                <option value="" disabled>Who Are You</option>
                <option className='text-black' value="enterprises">Enterpries</option>
                <option className='text-black' value="user ">User</option>
            </select>
        </div>
    );
};

export default RegisterForm;
