import { HeroSection, IHeroSectionData } from '../../components/Home/HeroSection';
import { Layout } from '../../components/Layout';
import styles from './Home.module.scss';
import { IProjectsSectionData, ProjectsSection } from '../../components/Home/ProjectsSection';
import { ExperienceSection, IExperienceSectionData } from '../../components/Home/ExperienceSection';
import { ContactSection, IContactSectionData } from '../../components/Home/ContactSection';

const Home: React.FC = () => {
	
	const data: {
		heroSectionData: IHeroSectionData;
		projectsSectionData: IProjectsSectionData;
		experienceSectionData: IExperienceSectionData;
		contactSectionData: IContactSectionData;
	} = {
		
		heroSectionData: {
			headingCaption: 'Joshua Mamangun',
			subCaption: 'A Frontend Web Developer who thrives on bringing to life simple, exceptional, and extraordinary designs that captivate and engage users.',
			stackList: [
				'React',
				'Next.js',
				'TypeScript',
				'SCSS',
				'Zustand'
			]
		},

		projectsSectionData: {
			headingCaption: 'Projects',
			projectList: [
				// {
				// 	name: 'Name',
				// 	description: 'Description',
				// 	imageUrl: '',
				// 	mediaList: [
				// 		{ label: 'Media 1', url: '' }
				// 	],
				// 	techStackList: [
				// 	]
				// },
			]
		},

		experienceSectionData:  {
			experienceSection: {
				headingCaption: 'Experience',
				experienceList: [
					{
						companyName: 'TechEdge Solutions Inc.',
						positionList: [
							{
								position: 'Junior Application Developer',
								employmentType: 'Full-time',
								date: {
									from: 'Apr 2023',
									to: 'Present'
								},
								descriptionList: [
									'Develop web pages based from UI/UX designs and integrate backend APIs for functionality using NextJs, SCSS, and Tailwind.',
									'Create reusable components and customize pre-built elements like AntDesign.',
									'Collaborate and communicate with fellow frontend web developers and the project team.'
								],
								skillList: [
									'Next.js',
									'React',
									'TypeScript',
									'Tailwind CSS',
									'SCSS',
									'CSS',
									'GitHub',
									'Ant Design',
									'AngularJS',
									'Zustand',
									'Redux'
								]
							},
							{
								position: 'Junior Consultant',
								employmentType: 'Full-time',
								date: {
									from: 'Dec 2021',
									to: 'Apr 2023'
								},
								descriptionList: [
									'Create database design and restful APIs using Laravel and MySQL.',
									'Implement UI/UX design and integrate APIs using VueJS',
								],
								skillList: [
									'Next.js',
									'React',
									'TypeScript',
									'Tailwind CSS',
									'SCSS',
									'CSS',
									'GitHub',
									'Laravel',
									'MySQL',
									'Vue.js',
									'Vuetify',
									'Redux',
									'Vuex'
								]
							}
						]
					},
					{
						companyName: 'City of Malabon University',
						positionList: [
							{
								position: 'Back-end Programmer',
								employmentType: 'Contract',
								date: {
									from: 'Feb 2021',
									to: 'Dec 2021'
								},
								descriptionList: [
									'Create database design and APIs using Laravel and MySQL.',
									'Implement UI/UX design and integrate APIs using VueJS',
									'Present and talk with the respective users to identify needed process and improvement.',
									'Collaborate and communicate with the team.'
								],
								skillList: [
									'Vue.js',
									'Vuetify',
									'Laravel',
									'SCSS',
									'CSS',
									'MySQL',
									'GitHub',
									'AWS',
									'Vuex'
								]
							}
						]
					},
					{
						companyName: 'Universidad de Manila',
						positionList: [
							{
								position: 'Web Developer',
								employmentType: '',
								date: {
									from: 'Dec 2019',
									to: 'Jul 2020'
								},
								descriptionList: [
									'Develop School Management System from both frontend and backend with the team and helps other project module using CodeIgniter, JQuery, MySQL, CSS, and Github.',
									'Implement spot on discussed design for the module based on the requirements.',
									'Helps to facilitate system\'s demo and production.'
								],
								skillList: [
									'Vue.js',
									'Laravel',
									'SCSS',
									'CSS',
									'MySQL',
									'GitHub',
									'CodeIgniter'
								]
							}
						]
					},
				]
			},
			skillsSection: {
				headingCaption: 'Skills',
				skillList: [
					{ name: 'Next.js', description: 'Great' },
					{ name: 'React', description: 'Good' },
					{ name: 'Vue.js', description: 'Good' },
					{ name: 'TypeScript', description: 'Good' },
					{ name: 'Tailwind CSS', description: 'Great' },
					{ name: 'SCSS', description: 'Great' },
					{ name: 'CSS', description: 'Great' },
					{ name: 'jQuery', description: 'Good' },
					{ name: 'Laravel', description: 'Good' },
					{ name: 'MySQL', description: 'Great' },
					{ name: 'CodeIgniter', description: 'Good' },			
					{ name: 'AngularJS', description: 'Not Bad' },
					{ name: 'Zustand', description: 'Good' },
					{ name: 'Redux', description: 'Good' },
					// { name: 'Vuex', description: 'Good' },
					// { name: 'Ant Design', description: 'Good' },
					// { name: 'Vuetify', description: 'Good' },
					{ name: 'AWS', description: 'Not Bad' },
					{ name: 'GitHub', description: 'Good' },
				]
			}
		},

		contactSectionData: {
			headingCaption: 'Contact',
			linkList: [
				{
					type: 'GMAIL',
					label: 'mamangunjoshua@gmail.com',
					url: 'mailto:mamangunjoshua@gmail.com'
				},
				{
					type: 'GITHUB',
					label: 'mamangss',
					url: 'https://github.com/mamangss'
				},
				{
					type: 'LINKEDIN',
					label: 'Joshua Mamangun',
					url: 'https://www.linkedin.com/in/joshua-mamangun'
				},
				{
					type: 'WEBSITE',
					label: 'Portfolio',
					url: 'https://mamangss.github.io/portfolio/'
				},
			]
		}
	};

	return (
		<Layout>
			<div className={styles.homeContent}>

				<HeroSection data={data.heroSectionData} />
				<ProjectsSection data={data.projectsSectionData} />
				<ExperienceSection data={data.experienceSectionData} />
				<ContactSection data={data.contactSectionData} />

			</div>
		</Layout>
	);
};

export default Home;