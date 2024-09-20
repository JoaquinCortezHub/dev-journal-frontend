import { NotebookPen } from "lucide-react";
import { ToggleButton } from "./Theme-toggle-button";
import Link from "next/link";

const Header = () => {
	return (
		<div className="flex items-center justify-between py-6 px-4 sm:px-8 md:px-12 ">
			<div className="flex items-center gap-4">
				<NotebookPen />
				<Link href={'/'}>
					<h1 className="text-lg font-semibold">Joa&apos;s Dev Journal</h1>
				</Link>
			</div>
			<div className="flex items-center justify-evenly gap-10">
                <div className="flex items-center gap-6">
                    <Link href="/" className="hover:underline">Home</Link>
                    <Link href="/about" className="hover:underline">About</Link>
                </div>
				<ToggleButton />
			</div>
		</div>
	);
};

export default Header;
