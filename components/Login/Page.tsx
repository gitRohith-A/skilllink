'use client'

import React, { useState, FormEvent } from 'react';
import { signIn } from 'next-auth/react';

interface Data {
  email: string,
  password: string
}

function Login() {
  const [data, setData] = useState<Data>({ email: '', password: '' });

  async function submit(event: FormEvent) {
    event.preventDefault();
    try {
      const credentials = {
        email: data.email,
        password: data.password,
      };

      const response = await signIn('credentials', {
        redirect: false,
        ...credentials,
      });

      console.log(response)
      if (response?.error) {
        console.log('Sign-in failed:', response);
      } else {
        console.log('success');
        // window.location.href = '/dashboard'; 
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  return (
    <section className="bg-slate-700 flex items-center h-screen">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap ">
          <div className="w-full">
            <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white px-10 py-16 text-center dark:bg-dark-2 sm:px-12 md:px-[60px] ">
              <div className="mb-10 text-center md:mb-16">
                <a
                  href="/#"
                  className="mx-auto inline-block max-w-[160px]"
                >
                  <h5 className='text-4xl font-bold text-blue-700 '>SkillLink</h5>
                </a>
              </div>
              <form onSubmit={submit}>
                <div className="mb-4">
                  <input
                    type='text'
                    placeholder='Email'
                    name='email'
                    value={data.email}
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                    className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-dark"
                  />
                </div>

                <div className="mb-4">
                  <input
                    type='password'
                    placeholder='Password'
                    name='password'
                    value={data.password}
                    onChange={(e) => setData({ ...data, password: e.target.value })}
                    className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-dark"
                  />
                </div>
                <div className="mb-10">
                  <button
                    type="submit"
                    className="w-full cursor-pointer rounded-md border border-primary bg-primary px-5 py-3 text-base font-medium text-dark transition hover:bg-opacity-90 hover:bg-slate-200 hover:delay-150 hover:ease-in-out duration-300 "
                  >Sign In</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
