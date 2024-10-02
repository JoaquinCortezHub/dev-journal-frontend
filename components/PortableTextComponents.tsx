/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";
import { PortableTextComponents } from "next-sanity";

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
	projectId && dataset
		? imageUrlBuilder({ projectId, dataset }).image(source)
		: null;

const components: PortableTextComponents = {
	types: {
		image: ({ value }: any) => {
			const imageUrl = urlFor(value.asset)?.url();
			return (
				<Image
					src={imageUrl!}
					alt="Blog Image"
					className="w-full h-auto object-cover my-4"
					width={800}
					height={450}
				/>
			);
		},
		code: ({ value }: any) => {
			const { code, language } = value;
			return (
				<SyntaxHighlighter language={language || "javascript"} style={oneDark}>
					{code}
				</SyntaxHighlighter>
			);
		},
	},
	list: {
		// Custom styles for unordered lists
		bullet: ({ children }: any) => (
			<ul className="list-disc ml-5 space-y-2">{children}</ul>
		),
		// Custom styles for ordered lists
		number: ({ children }: any) => (
			<ol className="list-decimal ml-5 space-y-2">{children}</ol>
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
			<blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-4">
				{children}
			</blockquote>
		),
		h1: ({ children }: any) => (
			<h1 className="text-4xl font-semibold my-4">{children}</h1>
		),
		h2: ({ children }: any) => (
			<h2 className="text-3xl font-semibold my-4">{children}</h2>
		),
		normal: ({ children }: any) => (
			<p className="text-lg leading-relaxed my-4">{children}</p>
		),
		bullet: ({ children }: any) => (
			<ul className="list-disc list-inside my-4">{children}</ul>
		),
		number: ({ children }: any) => (
			<ol className="list-decimal list-inside my-4">{children}</ol>
		),
	},
};

export default components;
