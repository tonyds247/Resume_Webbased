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
						<h1 className="mb-2">Tony Nguyen</h1>
						<span>
							As humans, we possess an inherent drive to seek freedom and seek out novel experiences.
							For me, embarking on a 40-day cycling journey across my country was one of the most rewarding and fulfilling adventures of my life.
							This experience speaks to my character as someone who is always eager to learn new things and push past self-imposed limitations.
						</span>
					</div>
					<div className="w-6/12 flex justify-start sm:justify-center">
						<Image
							src="/me.jpg"
							className="rounded-xl shadow-2xl"
							height={200}
							width={200}
							alt="Profile picture"
						/>
					</div>
				</header>
				<Divider props="my-12" />
				<section>
					<div>
						<h1 className="mb-5">My career story</h1>
						<span>
							My career path initially had no connection to data.
							When I began my first college education at 18 years old, I did not fully appreciate the importance of data, as everything seemed relatively straightforward.
							I thought people were mostly drawn to careers in banking and business.
							After graduation, I became a business specialist and began working with many clients.
							My job involved gathering information from customers and sending it to our business partners, who manufactured sub-materials and other necessary products.
							Additionally, I was responsible for maintaining the supply chain.
							Over time, I gained extensive experience and developed relationships with numerous manufacturers and customers, primarily in the automotive and steel manufacturing sectors.
							During this period, I became increasingly adept at manipulating data, recognizing its value as a powerful tool for making vital decisions.
							The most common visualization tools available to me at that time were relatively basic, such as internal database management software or SAP when I worked for a German company.
						</span>
					</div>
					<div className="text-left mt-10">
						<span>
							Making the decision to put everything on hold and pursue further education in business was difficult, especially since I had recently been promoted to a higher position.
							However, I eventually obtained a higher degree in Business Consulting.
							Even now, I continue to work as a freelancer, offering ideas and connections for numerous businesses in Vietnam.
							For instance, I provide advice to those who seek out manufacturers of automotive spare parts that meet specific standards.
							Leveraging my extensive experience and strong relationships with many manufacturers, I offer confident and valuable suggestions.
						</span>
					</div>
					<div className="text-left mt-10">
						<span>
							While studying in Germany, I was exposed to not only advanced business subjects, but also to the concept of data-driven decision making through various projects.
							I gained hands-on experience by applying several data mining algorithms, including Association Rule mining and Logistic Regression.
						</span>
					</div>
					<div className="text-left mt-10">
						<span>
							My objective is to become a data analyst within the next few years.
							That&apos;s why I decided to pursue further education in Applied Data Science, which emphasizes practical application in solving business problems through real-world projects.
							In addition to being proficient in data programming languages, I am self-taught in other programming languages such as HTML, CSS, and frameworks like Nodejs.
							To prepare myself for the practical application of my knowledge, I practice every day with data, not just through homework assignments but also by working on real projects..
						</span>
					</div>
					<div className="text-left mt-10">
						<span>
							In my current role as a freelancer, I work as a data analyst for the food and beverage sector in Germany.
							I utilize customer data and deploy association rule mining techniques, specifically FPGrowth, along with cost analysis techniques to optimize costs and recommend item sets for new marketing campaigns.
						</span>
					</div>
				</section>
				<Divider />
				<Footer />
			</div>
		</div>
	);
}
