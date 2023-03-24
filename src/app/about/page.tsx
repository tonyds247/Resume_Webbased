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
							height={280}
							width={280}
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
							It was tough to put everything on hold and go back to school for further business education, especially after being promoted to a higher position. 
							However, I persisted and obtained a higher degree in Business Consulting.
							Even now, I continue to work as a freelancer, offering ideas and connections for numerous businesses in Vietnam.
							For instance, I provide advice to those who seek out manufacturers of automotive spare parts that meet specific standards.
							Leveraging my extensive experience and strong relationships with many manufacturers, I offer confident and valuable suggestions.
						</span>
					</div>
					<div className="text-left mt-10">
						<span>
							While pursuing my studies in Germany, I had the opportunity to explore advanced business subjects and gain a comprehensive understanding of data-driven decision-making.
							I actively engaged in various projects that allowed me to apply several data mining algorithms, including Association Rule mining and Logistic Regression. 
							These experiences not only provided me with hands-on experience but also helped me to appreciate the significance of data analysis and interpretation.
						</span>
					</div>
					<div className="text-left mt-10">
						<span>
							Now, my ultimate goal is to establish a career as a successful data analyst, and to achieve this, I have enrolled in an Applied Data Science program that focuses on the practical application of data analytics to solve complex business problems.
							In addition to my proficiency in data programming languages, I have also self-taught myself HTML, CSS, and frameworks like Nodejs, which I believe will boost my skills in the field.
							To further refine my abilities, I regularly work with data, not just through coursework assignments but also by participating in real-world projects. 
							By doing so, I am confident that I am on the right track to attaining my professional goals in data analytics.
						</span>
					</div>
					<div className="text-left mt-10">
						<span>
							As a freelancer, my current role involves working as a data analyst for the food and beverage sector in Germany. 
							My primary responsibility is to utilize customer data to optimize costs and recommend item sets for new marketing campaigns. 
							To achieve this, I deploy association rule mining techniques, specifically FPGrowth, along with cost analysis techniques. 
							By analyzing the data, I can identify patterns in customer behavior that help me make data-driven recommendations to clients in the food and beverage industry. 
							This enables my clients to make more informed decisions that drive growth and profitability.
						</span>
					</div>
				</section>
				<Divider />
				<Footer />
			</div>
		</div>
	);
}
