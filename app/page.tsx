import Image from "next/image";
import { defineQuery } from "next-sanity";
import { client } from "@/sanity/client";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Post } from "@/sanity/types";
import urlFor from '@/sanity/imageBuilder';
import { Badge } from "@/components/ui/badge";
import clsx from "clsx";
import Link from "next/link";

const options = { next: { revalidate: 60 } };

const POSTS_QUERY = defineQuery(
  `*[_type == "post" && defined(slug.current)] {_id, title, slug, publishedAt, author, cover, description, categories, Type}|order(date desc)`
);



export default async function HomePage() {
  const posts = await client.fetch(POSTS_QUERY, {}, options);
  return (
    <div className="px-4 sm:px-8 md:px-12">
      <div className="container mx-auto h-[250px] rounded-2xl ">
        <Image src='/cover.jpg' alt="blog banner" width={1200} height={1200} className="w-full h-full object-cover rounded-2xl" />
      </div>
      <div className="container mx-auto">
        <div className="flex justify-center w-auto h-[56] -mt-16">
          <Image src='/profile.jpg' alt="profile" width={100} height={100} className="rounded-full h-28 object-cover"/>
        </div>
      </div>
      <div className="text-center mt-2">
        <h1 className="text-5xl font-bold text-slate-800 dark:text-stone-200 leading-tight">Welcome to my dev Journal.<br />I&apos;m Joaquín👋</h1>
      </div>
      <div className="text-center mt-4 mb-8">
        <p className="text-lg font-medium text-slate-500 dark:text-stone-400 text-balance">
          This space serves as a digital journal for my coding journey.
          In here, you will find personal updates (related with my coding carreer) 
          such as the technologies I&apos;m learning, new techniques and different tips and tricks that helped me as a developer. 
          Also, you will find updates on the projects I&apos;m currently working on, with weekly updates on the state of the project, issues and upcoming features.
        </p>
      </div>
      <hr />
      <div className="mt-8 mb-12  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post: Post) => (
          <Link key={post._id} href={`/posts/${post.slug?.current}`} passHref legacyBehavior>
            <a className="block">
              <Card className="overflow-hidden">
                <div className="relative w-full h-48">
                  {post.cover && (
                    <Image
                      src={urlFor(post.cover.asset).url()}
                      alt={`Cover image for ${post.title}`}
                      layout="fill"
                      objectFit="cover"
                    />
                  )}
                </div>
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-500 dark:text-stone-400">
                    {post.description}
                  </p>
                </CardContent>
                <CardFooter className="text-sm text-gray-500">
                  <Badge variant={"outline"}
                    className={clsx({
                      "bg-blue-200 text-blue-800  dark:bg-blue-500 dark:text-blue-50" : post.Type === "project update",
                      "bg-purple-200 text-purple-800 dark:bg-purple-500 dark:text-purple-50" : post.Type === "personal learning"
                    })}
                  >
                    {post.Type}
                  </Badge>
                </CardFooter>
              </Card>
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
};

