/* This example requires Tailwind CSS v2.0+ */
import {
	CheckIcon,
	CalendarIcon,
	ClockIcon,
	QuestionMarkCircleIcon
} from '@heroicons/react/outline';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { useUpdateAtom } from 'jotai/utils';
import { useInView } from 'react-intersection-observer';
import { showMailingListModalAtom } from './MailingListModal';
import PrerequisitesModal from './PrerequisitesModal';

export interface ClassInfo {
	name: string;
	href: string;
	cost: number;
	description: string;
	classTime: string;
	ohTime: string;
	dates: string;
	includedFeatures: string[];
	prerequisites: React.ReactNode;
}

export const availableClasses: ClassInfo[] = [
	{
		name: 'Bronze Part I',
		href: '#',
		cost: 150,
		description:
			'For beginner programmers looking to get started with USACO and pass USACO Bronze.',
		classTime: 'Wednesday 4-5pm PST',
		ohTime: 'Wednesday 5-6pm PST',
		dates: '2/9/22 to 3/2/22 (4 classes)',
		// description: 'Basic programming experience in C++, Java, or Python required.',
		// Students should know arrays, basic string manipulation, functions, loops, etc.
		includedFeatures: [
			'Time Complexity & Rectangle Geometry',
			'Data Structures & Simulation',
			'Basic Complete Search',
			'Complete Search with Recursion'
		],
		prerequisites: (
			<div>
				<p>Basic programming experience in C++, Java, or Python required.</p>
				<p className="mt-4">Students should know:</p>
				<ul className="list-disc pl-6 mt-2 space-y-1">
					<li>Variables & Data Types</li>
					<li>Input Output</li>
					<li>Loops</li>
					<li>If / Else</li>
					<li>Logical Operators</li>
					<li>Arrays (Multidimensional Arrays)</li>
					<li>Basic String Manipulation</li>
					<li>Functions</li>
				</ul>
				<p className="mt-4">
					If you don't know these topics yet or if you need a refresher on these topics, view the
					USACO Guide module on{' '}
					<a
						href="https://usaco.guide/general/resources-learning-to-code"
						target="_blank"
						rel="noreferrer"
						className="underline"
					>
						Learning to Code
					</a>
					.
				</p>
			</div>
		)
	},
	{
		name: 'Bronze Part II',
		href: '#',
		cost: 150,
		description:
			'For beginner programmers looking to get started with USACO and pass USACO Bronze.',
		classTime: 'Wednesday 4-5pm PST',
		ohTime: 'Wednesday 5-6pm PST',
		dates: '3/9/22 to 4/30/22 (4 classes)',
		includedFeatures: [
			'Sorting, Sets, and Maps',
			'Ad Hoc Problems',
			'Greedy Algorithms',
			'Introduction to Graphs'
		],
		prerequisites: (
			<div>
				<p>Knowledge of topics covered in Bronze Part I.</p>
				<p className="mt-4">Students should know:</p>
				<ul className="list-disc pl-6 mt-2 space-y-1">
					<li>Time Complexity & Rectangle Geometry</li>
					<li>Data Structures & Simulation</li>
					<li>Basic Complete Search</li>
					<li>Complete Search with Recursion</li>
				</ul>
				<p className="mt-4">
					If you need a refresher on some of these topics, you can self study from the{' '}
					<a
						href="https://usaco.guide/bronze/"
						target="_blank"
						rel="noreferrer"
						className="underline"
					>
						USACO Guide
					</a>
					.
				</p>
			</div>
		)
	}
];

export default function ClassPricing({ className = '' }) {
	const setShowMailingListModal = useUpdateAtom(showMailingListModalAtom);
	const [activeClass, setActiveClass] = useState<ClassInfo | null>(null);
	const [showPrereqs, setShowPrereqs] = useState(false);

	const { inView: headerInView, ref: headerRef } = useInView({
		rootMargin: '0px 0px -5% 0px'
	});

	const { inView: tiersInView, ref: tiersRef } = useInView({
		rootMargin: '0px 0px -5% 0px'
	});

	const { inView: differentLevelsInView, ref: differentLevelsRef } = useInView({
		rootMargin: '0px 0px -5% 0px'
	});

	return (
		<div className={className}>
			<div className="max-w-7xl mx-auto px-6 lg:px-8">
				<motion.div
					initial="hidden"
					transition={{ duration: 0.3 }}
					variants={{
						visible: { opacity: 1, y: 0 },
						hidden: { opacity: 0, y: 20 }
					}}
					animate={headerInView ? 'visible' : 'hidden'}
					className="sm:flex sm:flex-col sm:align-center"
					ref={headerRef}
				>
					<h2 className="font-bold text-3xl md:text-4xl text-white sm:text-center">
						Course Registration
					</h2>
					<p className="mt-5 text-blueGray-300 sm:text-center leading-relaxed sm:text-lg sm:max-w-4xl sm:mx-auto">
						Each course consists of four classes and covers half of one division. Classes are taught
						in C++ and Java, but Python users will be able to follow along and receive office hours
						help as well.
					</p>
				</motion.div>

				<motion.div
					initial="hidden"
					transition={{ duration: 0.3 }}
					variants={{
						visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.05 } },
						hidden: { opacity: 0, y: 20, transition: { staggerChildren: 0.05 } }
					}}
					animate={tiersInView ? 'visible' : 'hidden'}
					ref={tiersRef}
					className="mt-12 space-y-8 sm:space-y-0 sm:grid md:grid-cols-2 sm:gap-6 sm:max-w-lg md:max-w-4xl sm:mx-auto"
				>
					{availableClasses.map((tier) => (
						<motion.div
							key={tier.name}
							className="-mx-6 sm:mx-0 sm:rounded-lg bg-blueGray-200 shadow-sm flex flex-col"
							variants={{
								visible: { opacity: 1, y: 0 },
								hidden: { opacity: 0, y: 20 }
							}}
						>
							<div className="p-6 bg-blueGray-100 rounded-t-lg">
								<h2 className="text-xl font-semibold text-gray-900">{tier.name}</h2>
								<p className="mt-4 text-gray-600">{tier.description}</p>
								<ul className="mt-8 font-medium text-gray-600 space-y-4">
									<li className="flex">
										<CalendarIcon className="h-6 w-6 text-blueGray-400 mr-3" />
										<p className="leading-6">Coming Soon!</p>
									</li>
									{/* <li className="flex">
										<ClockIcon className="h-6 w-6 text-blueGray-400 mr-3" />
										<p className="leading-6">
											{tier.classTime} (Class) <br />
											{tier.ohTime} (Office Hours)
										</p>
									</li> */}
								</ul>
								<button
									onClick={() => setShowMailingListModal(true)}
									className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-3 font-medium text-white text-center hover:bg-gray-900 transition"
								>
									Join Mailing List
								</button>
							</div>
							<div className="pt-6 pb-6 px-6 flex-1">
								<h3 className="text-sm font-medium text-blueGray-900 tracking-wide uppercase">
									Topics Covered
								</h3>
								<ul role="list" className="mt-6 space-y-4">
									{tier.includedFeatures.map((feature) => (
										<li key={feature} className="flex space-x-3">
											<CheckIcon
												className="flex-shrink-0 h-6 w-6 text-green-600"
												aria-hidden="true"
											/>
											<span className="font-medium text-blueGray-600">{feature}</span>
										</li>
									))}
								</ul>
							</div>
							<button
								className="py-6 bg-blueGray-200 w-full inline-flex items-center text-left font-medium rounded-b-lg px-6 border-t-2 border-blueGray-300 text-blueGray-600 group hover:text-black"
								onClick={() => {
									setActiveClass(tier);
									setShowPrereqs(true);
								}}
							>
								<QuestionMarkCircleIcon className="h-6 w-6 text-blueGray-400 group-hover:text-blueGray-500 mr-3" />
								View Prerequisites
							</button>
						</motion.div>
					))}
				</motion.div>
			</div>

			<div className="px-6 md:px-12 lg:px-24">
				<div
					className={`max-w-lg md:max-w-2xl lg:max-w-4xl w-full mx-auto pt-12 md:pt-20 text-blueGray-300 leading-relaxed`}
				>
					<motion.div
						initial="hidden"
						transition={{ duration: 0.3 }}
						variants={{
							visible: { opacity: 1, y: 0 },
							hidden: { opacity: 0, y: 20 }
						}}
						animate={differentLevelsInView ? 'visible' : 'hidden'}
						ref={differentLevelsRef}
					>
						<h2 className="font-bold text-2xl md:text-3xl text-white">
							Looking for a different course level?
						</h2>

						<p className="mt-4 sm:text-lg">
							Sign up for the mailing list! If there's sufficient interest, I may open up courses
							for different USACO levels.
						</p>
						<div className="rounded-md shadow mt-6">
							<button
								onClick={() => setShowMailingListModal(true)}
								className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blueGray-800 hover:bg-blueGray-700 md:py-4 md:text-lg md:px-8 transition"
							>
								Join Mailing List
							</button>
						</div>
					</motion.div>
				</div>
			</div>

			<PrerequisitesModal show={showPrereqs} setShow={setShowPrereqs} classInfo={activeClass} />
		</div>
	);
}
