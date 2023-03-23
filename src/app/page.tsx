import Divider from "@/components/Divider";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavigationBar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main className="w-full">
			<NavBar />
			<div className="my-10 sm:mx-20 mx-0">
				<header className="flex justify-center items-start sm:items-center w-full flex-col-reverse sm:flex-row">
					<div className="sm:w-6/12 mt-6 sm:mt-0">
						<h1>Hi, this is Tony</h1>
						<h2 className="mt-2 font-normal">
							With data being ubiquitous in today's world, it's no surprise that many people are drawn to careers in data analysis, including myself. 
							Becoming a data analyst is a personal goal of mine, and I'm excited to continue learning and growing in this field.
						</h2>
						<Link href="/about">
							<button className="">Read more about me!</button>
						</Link>
					</div>
					<div className="w-6/12 flex justify-start sm:justify-center">
						<Image
							src="/me_2.jpg"
							className="rounded-xl shadow-2xl"
							height={200}
							width={200}
							alt="Profile picture"
						/>
					</div>
				</header>
				<Divider />
				<section>
					<div>
						<h1 className="mb-4">Knowledgebase</h1>
						<span>
							With several years of experience in both academic and practical aspects of business, I've developed a fast learning mind that allows me to quickly grasp complex business concepts. 
							I've taken both self-taught and formal classes in programming languages such as R and Python, which has allowed me to hone my skills and demonstrate my proficiency through multiple projects posted on Github. 
							I'm excited to continue building my expertise in data analytics and contribute to meaningful insights that can drive business success.
						</span>
						<Exprience />
					</div>
					<div className="mt-10">
						<h1>Contact</h1>
						<div className="my-2">
							<span>
								I look forward to hearing any questions or feedback from you. As a freelancer, I'm committed to responding to your emails and messages within 1-2 days.
								Please don't hesitate to reach out if you have any inquiries or if there's anything else I can assist you with.
							</span>
							<div>
								<Link href="mailto:tungnguyenec247@gmail.com">
									<button>tungnguyenec247@gmail.com</button>
								</Link>
							</div>
						</div>
					</div>
				</section>
				<Divider />
				<Footer />
			</div>
		</main>
	);
}

function Exprience() {
	return (
		<div className="mt-4">
			<ul className="mx-auto block sm:grid max-w-full w-full grid-cols-3 gap-x-5">
				<li>
					<input
						className="peer sr-only"
						type="radio"
						value="yes"
						name="answer"
						id="yes"
						defaultChecked
					/>
					<label
						className="flex justify-center cursor-pointer rounded-t-md text-white dark:text-gray-900 rowdies bg-gray-900 dark:bg-white px-1 transition-all duration-500 ease-in-out"
						htmlFor="yes"
					>
						Languages
					</label>
					<div className="w-full text-white dark:text-gray-900 rowdies bg-gray-900 rounded-b-md dark:bg-white transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-0">
						<Divider props="my-0" />
						<div className="flex flex-col justify-center p-1">
							<div className="mx-5 my-2 flex items-center">
								<Image
									src="/python.svg"
									height={25}
									width={25}
									alt="Javascript Logo"
								/>
								<span className="ml-1">python</span>
							</div>
							<div className="mx-2 my-2 flex items-center">
								<Image
									src="/ts.svg"
									height={32}
									width={32}
									alt="Typescript Logo"
								/>
								<span className="ml-1">R Language</span>
							</div>
							<div className="mx-2 my-2 flex items-center">
								<Image
									src="/go.svg"
									height={32}
									width={32}
									alt="GoLang Logo"
								/>
								<span className="ml-1">SQL</span>
							</div>
						</div>
					</div>
				</li>
				<li className="hidden sm:block">
					<input
						className="peer sr-only"
						type="radio"
						value="no"
						name="answer"
						id="no"
					/>
					<label
						className="flex justify-center cursor-pointer rounded-t-md text-white dark:text-gray-900 rowdies bg-gray-900 dark:bg-white px-1 transition-all duration-500 ease-in-out"
						htmlFor="no"
					>
						Tools/Platforms
					</label>
					<div className="w-full text-white dark:text-gray-900 rowdies bg-gray-900 dark:bg-white rounded-b-md transition-all duration-500 ease-in-out translate-y-10 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-y-0">
						<Divider props="my-0" />
						<div className="flex flex-col justify-center p-1">
							<div className="mx-2 my-2 items-center hidden dark:flex">
								<Image
									src="/next.svg"
									height={32}
									width={32}
									alt="Next Logo"
								/>
								<span className="ml-1">SAP ERP/BO</span>
							</div>
							<div className="mx-2 my-2 flex items-center dark:hidden">
								<Image
									src="/next_white.svg"
									height={32}
									width={32}
									alt="Next Logo"
								/>
								<span className="ml-1">Tableau/ MS PowerBI</span>
							</div>
							<div className="mx-2 my-2 flex items-center">
								<Image
									src="/nest.svg"
									height={32}
									width={32}
									alt="Javascript Logo"
								/>
								<span className="ml-1">Knime</span>
							</div>
							<div className="mx-2 my-2 flex items-center">
								<Image
									src="/go.svg"
									height={32}
									width={32}
									alt="Javascript Logo"
								/>
								<span className="ml-1">MS Office Suite</span>
							</div>
						</div>
					</div>
				</li>
				<li className="hidden sm:block">
					<input
						className="peer sr-only"
						type="radio"
						value="yesno"
						name="answer"
						id="yesno"
					/>
					<label
						className="flex justify-center cursor-pointer rounded-t-md text-white dark:text-gray-900 rowdies bg-gray-900 dark:bg-white px-1 transition-all duration-500 ease-in-out"
						htmlFor="yesno"
					>
						Skills
					</label>
					<div className="w-full text-white dark:text-gray-900 rowdies bg-gray-900 dark:bg-white rounded-b-md transition-all duration-500 ease-in-out -translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-0">
						<Divider props="my-0" />
						<div className="flex flex-col justify-center p-1">
							<div className="mx-2 my-2 flex items-center">
								<Image
									src="/linux.svg"
									height={32}
									width={32}
									alt="Linux Logo"
								/>
								<span className="ml-1">Data Mining/Analytics</span>
							</div>
							<div className="mx-2 my-2 flex items-center">
								<Image
									src="/api.svg"
									height={32}
									width={32}
									alt="Api Logo"
								/>
								<span className="ml-1">Business Acumen</span>
							</div>
							<div className="mx-2 my-2 flex items-center">
								<Image
									src="/container.svg"
									height={32}
									width={32}
									alt="Container Logo"
								/>
								<span className="ml-1">Visualization</span>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	);
}
