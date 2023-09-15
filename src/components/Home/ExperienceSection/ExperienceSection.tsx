import { IExperienceSectionProps } from '.';
import styles from './ExperienceSection.module.scss';
import { useState } from 'react';
import durationString from '../../../utils/durationString';
import classNames from '../../../utils/classNames';

const ExperienceSection: React.FC<IExperienceSectionProps> = ({
	data = {
		experienceSection: {
			headingCaption: 'Experience',
			experienceList: []
		},
		skillsSection: {
			headingCaption: 'Skills',
			skillList: []
		}
	}
}) => {

	const [selectedKey, setSelectedKey] = useState<number>(-1);

	return (
		<section className={styles.experienceSectionContainer} id='experience'>
			<div className='section-container'>

				<div className={styles.experienceAndSkillsSection}>

					<section className={styles.experienceSection}>
						<h2 className={styles.headingCaption}>
							{data.experienceSection.headingCaption}
						</h2>

						<ul className={styles.experienceList}>
							{data.experienceSection.experienceList.map((experienceItem, key) => (
								<li
									key={key}
									className={classNames(
										styles.experienceItem,
										selectedKey == key ? styles.selected : ''
									)}
									onClick={() => setSelectedKey(key == selectedKey ? -1 : key)}
								>
									{/* Experience with only one position in company */}
									{experienceItem.positionList.length == 1 && (<>
										<p className={styles.headingCaption}>
											{experienceItem.positionList[0].position}
										</p>
										
										<p className={styles.subCaption}>
											{experienceItem.companyName}
											{experienceItem.positionList[0].employmentType && (
												` · ${experienceItem.positionList[0].employmentType}`
											)}
										</p>

										<p className={styles.date}>
											{experienceItem.positionList[0].date.from}
											{' - '}
											{experienceItem.positionList[0].date.to}
											{' · '}
											{durationString(
												experienceItem.positionList[0].date.from,
												experienceItem.positionList[0].date.to,
											)}
										</p>

										<ul className={styles.descriptionList}>
											{experienceItem.positionList[0].descriptionList.map((descriptionItem, descKey) => (
												<li 
													key={descKey}
													className={styles.descriptionItem}
												>
													{descriptionItem}
												</li>
											))}
										</ul>
									</>)}
									
									{/* Experience with more than one position within the company */}
									{experienceItem.positionList.length > 1 && (<>
										<p className={styles.headingCaption}>
											{experienceItem.companyName}
										</p>
										
										<p className={styles.subCaption}>
											{experienceItem.positionList[experienceItem.positionList.length - 1].employmentType}
											{' · '}
											{durationString(
												experienceItem.positionList[experienceItem.positionList.length - 1].date.from,
												experienceItem.positionList[0].date.to,
											)}
										</p>
										
										<ul className={styles.positionList}>
											{experienceItem.positionList.map((positionItem, positionKey) => (
												<li 
													key={positionKey}
													className={styles.positionItem}
												>
													<p className={styles.position}>
														{positionItem.position}
													</p>

													<p className={styles.date}>
														{positionItem.date.from}
														{' - '}
														{positionItem.date.to}
														{' · '}
														{durationString(
															positionItem.date.from,
															positionItem.date.to,
														)}
													</p>

													<ul className={styles.descriptionList}>
														{positionItem.descriptionList.map((descriptionItem, descKey) => (
															<li 
																key={descKey}
																className={styles.descriptionItem}
															>
																{descriptionItem}
															</li>
														))}
													</ul>
												</li>

											))}
										</ul>
										
									</>)}
								</li>
							))}
						</ul>
					</section>

					<section className={styles.skillsSection}>
						<h2 className={styles.headingCaption}>
							{data.skillsSection.headingCaption}
						</h2>

						<ul className={styles.skillList}>
							{data.skillsSection.skillList.map((skillItem, key) => (
								<li
									key={key}
									className={classNames(
										styles.skillItem,
										selectedKey != -1 && 
										!data.experienceSection.experienceList[selectedKey].positionList.flatMap(positionItem => positionItem.skillList).includes(skillItem.name) ?
											styles.unselected 
											: ''
									)}
								>
									<p
										title={skillItem.name}
										className={styles.name}
									>
										{skillItem.name}
									</p>

									<p className={styles.description}>
										{skillItem.description}
									</p>
								</li>
							))}
						</ul>
					</section>

				</div>

			</div>
		</section>
	);
};

export default ExperienceSection;