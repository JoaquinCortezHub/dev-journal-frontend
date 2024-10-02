import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Twitter from "@geist-ui/icons/twitter";
import Github from "@geist-ui/icons/github";
import Mail from "@geist-ui/icons/mail";

const AboutPage = () => {
	return (
		<div className="px-4 sm:px-8 md:px-12">
			<div className="container mx-auto h-[250px] rounded-2xl">
				<Image
					src="/cover-pic.jpg"
					alt="blog banner"
					width={2400}
					height={2400}
					className="w-full h-full object-cover rounded-2xl"
				/>
			</div>
			<div className="container mx-auto">
				<div className="flex justify-center w-[56] h-[56] -mt-16">
					<Image
						src="/profile.jpg"
						alt="profile"
						width={100}
						height={100}
						className="rounded-full h-28 object-cover"
					/>
				</div>
			</div>
			<div className="text-center mt-2">
				<h1 className="text-5xl font-bold text-slate-800 dark:text-stone-200 leading-tight">
					Joaquín Cortez
				</h1>
				<h3 className="text-lg text-slate-500 font-medium">
					Junior Fullstack Developer | UX Designer
				</h3>
				<div className="flex items-center justify-center mt-4 gap-4">
					<Link
						href={"https://x.com/JoacoLCortez"}
						className={buttonVariants({ variant: "outline", size: "icon" })}
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
							className={buttonVariants({ variant: 'outline', size: 'icon' })}
						>
							<Mail color="gray" />
						</a>
					</Link>
					<Link
						href={"https://github.com/JoaquinCortezHub"}
						className={buttonVariants({ variant: "outline", size: "icon" })}
					>
						<Github color="gray" />
					</Link>
				</div>
			</div>
			<footer>
				<a 
					href="https://unsplash.com/@ricvath"
				>
				</a>
			</footer>
		</div>
	);
};

export default AboutPage;
