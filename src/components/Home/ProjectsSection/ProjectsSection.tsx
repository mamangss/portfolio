import { IProjectItem, IProjectsSectionProps } from '.';
import { ProjectModal } from '../ProjectModal';
import styles from './ProjectsSection.module.scss';
import { useState } from 'react';

const ProjectsSection: React.FC<IProjectsSectionProps> = ({
	data = {
		headingCaption: '-',
		projectList: []
	}
}) => {

	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [modalData, setModalData] = useState<IProjectItem>({
		name: '-',
		description: '-',
		imageUrl: '',
		techStackList: [],
		mediaList: [],
		linkList: []
	});

	return (
		<section className={styles.projectsSectionContainer} id='projects'>
			<div className='section-container'>

				<div className={styles.projectsSectionContent}>
					<h2 className={styles.headingCaption}>
						{data.headingCaption}
					</h2>

					<ul className={styles.projectList}>
						{data.projectList.map((projectItem, key) => (
							<li
								key={key}
								className={styles.projectItem}
							>

								<div 
									className={styles.projectCard}
									onClick={() => {
										setModalData(projectItem);
										setIsModalOpen(true);
									}}
								>
									<div className={styles.projectImage}>
										<img 
											src={projectItem.imageUrl} 
											alt={projectItem.name} 
											className={styles.image}
										/>
									
										<p className={styles.name}>
											{projectItem.name}
										</p>
									</div>

									<p className={styles.description}>
										{projectItem.description}
									</p>
								</div>

							</li>
						))}
					</ul>

				</div>
				
				<ProjectModal 
					isOpen={isModalOpen} 
					onClose={() => setIsModalOpen(false)}
					data={modalData}
				/>
			</div>
		</section>
	);
};

export default ProjectsSection;