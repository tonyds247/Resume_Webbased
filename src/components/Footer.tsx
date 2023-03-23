import Link from "next/link";

export default function Footer() {
	return (
		<footer className="flex justify-around items-start text-gray-900 dark:text-gray-400">
			<div className="flex flex-col">
				<Link href="/">Home</Link>
				<Link href="/about" className="mt-2">
					About
				</Link>
			</div>
			<div className="flex flex-col">
				<Link href="https://github.com/tonyds247">Github</Link>
				<Link href="https://twitter.com/ngtony247" className="mt-2">
					twitter
				</Link>
			</div>
		</footer>
	);
}
