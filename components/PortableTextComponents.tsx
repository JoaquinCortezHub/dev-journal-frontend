/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '@/sanity/client'
import { PortableTextComponents } from 'next-sanity'

const { projectId, dataset } = client.config()
const urlFor = (source: SanityImageSource) =>
    projectId && dataset
        ? imageUrlBuilder({ projectId, dataset }).image(source)
        : null

const components: PortableTextComponents = {
    types: {
        image: ({ value }: any) => {
            const imageUrl = urlFor(value.asset)?.url()
            return (
                <Image
                    src={imageUrl!}
                    alt="Blog Image"
                    className="my-4 h-auto w-full object-cover"
                    width={800}
                    height={450}
                />
            )
        },
        code: ({ value }: any) => {
            const { code, language } = value
            return (
                <SyntaxHighlighter
                    language={language || 'javascript'}
                    style={oneDark}
                >
                    {code}
                </SyntaxHighlighter>
            )
        },
    },
    marks: {
        link: ({ children, value }: any) => {
            const target = value?.href?.startsWith('http')
                ? '_blank'
                : undefined
            return (
                <a
                    href={value.href}
                    target={target}
                    rel={
                        target === '_blank' ? 'noopener noreferrer' : undefined
                    }
                    className="font-medium text-slate-800 dark:text-slate-300 underline"
                >
                    {children}
                </a>
            )
        },
    },
    list: {
        // Custom styles for unordered lists
        bullet: ({ children }: any) => (
            <ul className="ml-5 list-disc space-y-2">{children}</ul>
        ),
        // Custom styles for ordered lists
        number: ({ children }: any) => (
            <ol className="ml-5 list-decimal space-y-2">{children}</ol>
        ),
    },
    listItem: {
        // Custom styles for each list item
        bullet: ({ children }: any) => (
            <li className="text-slate-700 dark:text-stone-300">{children}</li>
        ),
        number: ({ children }: any) => (
            <li className="text-slate-700 dark:text-stone-300">{children}</li>
        ),
    },
    block: {
        blockquote: ({ children }: any) => (
            <blockquote className="my-4 border-l-4 border-gray-300 pl-4 italic text-gray-600">
                {children}
            </blockquote>
        ),
        h1: ({ children }: any) => (
            <h1 className="my-4 text-4xl font-semibold">{children}</h1>
        ),
        h2: ({ children }: any) => (
            <h2 className="my-4 text-3xl font-semibold">{children}</h2>
        ),
        normal: ({ children }: any) => (
            <p className="my-4 text-lg leading-relaxed">{children}</p>
        ),
        bullet: ({ children }: any) => (
            <ul className="my-4 list-inside list-disc">{children}</ul>
        ),
        number: ({ children }: any) => (
            <ol className="my-4 list-inside list-decimal">{children}</ol>
        ),
    },
}

export default components
