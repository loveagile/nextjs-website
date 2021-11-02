import { CheckIcon, ChevronDownIcon } from '@heroicons/react/solid';
import { useState } from 'react';

export default function WhyUSACO() {
	const [show, setShow] = useState(false);

	return (
		<>
			<p>
				If you or your child is interested in studying computer science, USACO is the{' '}
				<b className="text-white font-medium">best extracurricular activity</b> to pursue.
			</p>

			{!show && (
				<button
					className="inline-flex items-center mt-4 sm:mt-6 text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-3 bg-blueGray-800 hover:bg-blueGray-700 hover:text-white rounded-md font-medium group transition"
					onClick={() => setShow(true)}
				>
					Learn Why
					<ChevronDownIcon className="ml-1 sm:ml-2 sm:-mr-0.5 h-5 w-5 text-blueGray-400 group-hover:text-blueGray-300 transition" />
				</button>
			)}

			{show && (
				<div className="expand-animation">
					<p className="mt-12 text-white font-medium">
						First, <span className="text-accent">college applications</span>. USACO provides a major
						boost in college admissions.
					</p>
					<ul className="mt-4 space-y-3">
						{[
							'Over 75% of USACO Finalists go to MIT, Stanford, or Harvard',
							'Platinum is the top ~300 in the nation',
							'Gold is the top ~750 in the nation'
						].map((text) => (
							<li key={text}>
								<CheckIcon className="absolute h-6 w-5 text-green-400" aria-hidden="true" />
								<p className="ml-7 leading-6 text-blueGray-300">{text}</p>
							</li>
						))}
					</ul>

					<p className="mt-4">
						Furthermore, <i>you only need to qualify once</i> for a certain division, and you'll
						never be demoted to a lower division. Once you make USACO Gold, for example, you're
						forever in USACO Gold, even if you stop competing in USACO. This is different from math
						olympiads, where you must constantly practice to make AIME every year.
					</p>

					<p className="mt-12 text-white font-medium">
						Second, <span className="text-accent">career growth</span>. USACO prepares you for
						challenging technical programming interviews you'll encounter later in life.
					</p>

					<p className="mt-4">
						The algorithms taught in USACO are the same ones that are tested in programming
						interviews. By doing USACO, you are preparing yourself to ace these interviews.
					</p>

					<p className="mt-4">
						Additionally, criticial thinking and code debugging skills from USACO are applicable in
						the programming workforce.
					</p>

					<p className="mt-12 text-white font-medium">
						In short, doing USACO will set you up to have a successful programming career!
					</p>
				</div>
			)}

			<style jsx>{`
				.expand-animation {
					/* From css-for-js.dev */
					will-change: transform;
					animation: 600ms cubic-bezier(0.215, 0.61, 0.355, 1) 0s 1 normal none running expand;
				}
				@keyframes expand {
					from {
						transform: translateY(-10px);
					}
					to {
						transform: translateY(0px);
					}
				}
			`}</style>
		</>
	);
}
