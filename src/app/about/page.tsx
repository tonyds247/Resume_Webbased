import Divider from "@/components/Divider";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavigationBar";
import Image from "next/image";

export default function About() {
	return (
		<div>
			<NavBar root={true} />
			<div className="my-10 md:mx-20 mx-0">
				<header className="flex justify-center items-start sm:items-center w-full flex-col-reverse sm:flex-row">
					<div className="sm:w-6/12 mt-6 sm:mt-0">
						<h1 className="mb-2">Data Blog</h1>
						<span>
							Coming soon...
						</span>
					</div>
				</header>
				<Divider props="my-12" />
				<section>
				</section>
				<Divider />
				<Footer />
			</div>
		</div>
	);
}
