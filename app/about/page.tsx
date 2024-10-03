import { buttonVariants } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Twitter from '@geist-ui/icons/twitter'
import Github from '@geist-ui/icons/github'
import Mail from '@geist-ui/icons/mail'

const AboutPage = () => {
    return (
        <div className="px-4 sm:px-8 md:px-12 flex flex-col min-h-[100vh]">
            <div className="container mx-auto h-[250px] rounded-2xl">
                <Image
                    src="/cover.jpg"
                    alt="blog banner"
                    width={2400}
                    height={2400}
                    className="h-full w-full rounded-2xl object-cover"
                />
            </div>
            <div className="container mx-auto">
                <div className="-mt-16 flex h-[56] w-[56] justify-center">
                    <Image
                        src="/profile.jpg"
                        alt="profile"
                        width={100}
                        height={100}
                        className="h-28 rounded-full object-cover"
                    />
                </div>
            </div>
            <div className="mt-2 text-center">
                <h1 className="text-5xl font-bold leading-tight text-slate-800 dark:text-stone-200">
                    Joaquín Cortez
                </h1>
                <h3 className="text-lg font-medium text-slate-500">
                    Junior Fullstack Developer | UX Designer
                </h3>
                <div className="mt-4 flex items-center justify-center gap-4">
                    <Link
                        href={'https://x.com/JoacoLCortez'}
                        className={buttonVariants({
                            variant: 'outline',
                            size: 'icon',
                        })}
                    >
                        <Twitter color="gray" />
                    </Link>
                    <Link
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=joaquinlucascortez@gmail.com"
                        passHref
                        legacyBehavior
                    >
                        <a
                            target="_blank"
                            className={buttonVariants({
                                variant: 'outline',
                                size: 'icon',
                            })}
                        >
                            <Mail color="gray" />
                        </a>
                    </Link>
                    <Link
                        href={'https://github.com/JoaquinCortezHub'}
                        className={buttonVariants({
                            variant: 'outline',
                            size: 'icon',
                        })}
                    >
                        <Github color="gray" />
                    </Link>
                </div>
            </div>
            <div className="container mx-auto mb-16 max-w-4xl px-4 sm:px-6 lg:px-8 mt-6">
                <h2 className='text-2xl text-slate-800 dark:text-slate-200 text-center'>Coming soon...</h2>
            </div>
            <footer className='flex items-center justify-center mt-auto my-6'>
                <a
                    href="https://unsplash.com/@ricvath"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-800 underline dark:text-gray-300"
                >
                    Cover image by @ricvath | Unsplashed
                </a>
            </footer>
        </div>
    )
}

export default AboutPage
