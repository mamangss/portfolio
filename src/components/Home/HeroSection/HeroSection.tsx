import { IHeroSectionProps } from '.';
import styles from './HeroSection.module.scss';

const HeroSection: React.FC<IHeroSectionProps> = ({
	data = {
		headingCaption: '-',
		subCaption: '-',
		stackList: []
	}
}) => {

	return (
		<section className={styles.heroSectionContainer} id='about'>
			<div className='section-container'>

				<div className={styles.heroSectionContent}>
					<h1 className={styles.headingCaption}>
						{data.headingCaption}
					</h1>

					<p className={styles.subCaption}>
						{data.subCaption}
					</p>

					<ul className={styles.stackList}>
						{data.stackList.map((stackItem, key) => (
							<li 
								key={key}
								className={styles.stackItem}
							>
								{stackItem}
							</li>
						))}
					</ul>
				</div>

			</div>
		</section>
	);
};

export default HeroSection;