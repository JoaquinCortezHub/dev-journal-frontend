/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	defineQuery,
	PortableText,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	type SanityDocument,
} from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { notFound } from "next/navigation";
import { SquareArrowLeft } from "lucide-react";
import components from "@/components/PortableTextComponents";

const options = { next: { revalidate: 60 } };

const POST_QUERY = defineQuery(`*[
		_type == "post" && 
		slug.current == $slug
	][0]{
	title,
	"coverImage": cover.asset->url,
	description,
	content,
	publishedAt,
	"authorName": author ->name,
	"authorImage": author->image.asset->url,
	categories[]->{
		title
	},
	sources[]->{
		title,
		url,
		usage
	}
}`);

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
	projectId && dataset
		? imageUrlBuilder({ projectId, dataset }).image(source)
		: null;

export default async function PostPage({
	params,
}: {
	params: { slug: string };
}) {
	const post = await client.fetch(POST_QUERY, { slug: params.slug }, options);
	if (!post) {
		return notFound();
	}
	const {
		title,
		coverImage,
		content,
		publishedAt,
		authorImage,
		authorName,
		description,
		categories,
		sources,
	} = post;
	const coverImageUrl = coverImage ? urlFor(coverImage)?.url() : null;

	return (
		<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl mb-16">
			<Link href="/" className={buttonVariants({ variant: "outline" })}>
				<SquareArrowLeft className="mr-2" />
				Back to home
			</Link>
			{coverImageUrl && (
				<div className="container mx-auto h-[450px] rounded-2xl mt-4">
					<Image
						src={coverImageUrl}
						alt={title}
						width={1200}
						height={1200}
						className="w-full h-full object-cover rounded-2xl"
					/>
				</div>
			)}
			<p className="text-sm text-gray-500 font-medium mt-6 mb-2">
				{new Date(publishedAt).toDateString()}
			</p>
			<h1 className="text-4xl font-bold">{title}</h1>
			<p className="mt-2 text-gray-400 font-semibold">{description}</p>
			<div className="flex flex-wrap items-center gap-2 mt-4">
				{categories?.map((category: { title: string }, index: number) => (
					<span
						key={index}
						className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full dark:bg-blue-600 dark:text-blue-100"
					>
						{category.title}
					</span>
				))}
			</div>
			<div className="flex items-center mt-8">
				{authorImage && (
					<Image
						src={authorImage}
						alt={authorName}
						width={32}
						height={32}
						className="rounded-md max-h-10 object-cover"
					/>
				)}
				<p className="ml-4 text-sm font-medium text-gray-400">{`posted by ${authorName}`}</p>
			</div>
			<hr className="mt-8" />
			<div className="prose mt-8">
				<PortableText value={content} components={components} />
			</div>
			<hr />
			<div className="mt-4 flex justify-between items-center">
				<Link href="/" className={buttonVariants({ variant: "outline" })}>
					<SquareArrowLeft className="mr-2" />
					Back to home
				</Link>
			</div>
			{sources && (
				<footer className="mt-8 text-center text-sm text-gray-600 dark:text-gray-500">
					<h2 className="text-xl font-semibold mb-4">Sources</h2>
					<ul className="list-none">
						{sources.map(
							(
								source: { title: string; url: string; usage: string },
								index: number
							) => (
								<li key={index} className="mb-2">
									<p>
										<strong>{source.usage}</strong>{" "}
										<a
											href={source.url}
											target="_blank"
											rel="noopener noreferrer"
											className="text-sm text-gray-800 dark:text-gray-300 underline"
										>
											{source.title}
										</a>
									</p>
								</li>
							)
						)}
					</ul>
				</footer>
			)}
		</div>
	);
}
