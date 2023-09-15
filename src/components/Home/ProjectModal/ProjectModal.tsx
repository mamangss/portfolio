import { IProjectModalProps } from '.';
import styles from './ProjectModal.module.scss';
import classNames from '../../../utils/classNames';

const ProjectModal: React.FC<IProjectModalProps> = ({
	isOpen = false,
	onClose = () => {},
	data = {
		name: '-',
		description: '-',
		imageUrl: '',
		techStackList: [],
		linkList: [],
		mediaList: []
	}
}) => {

	return (
		<div className={classNames(
			styles.modalContainer,
			isOpen ? `hide-body-scrollbar` : styles.open
		)}>

			<div className={styles.modal}>
				<div className={styles.header}>
					<p className={styles.name}>
						{data.name}
					</p>

					<button
						className={styles.closeBtn}
						onClick={() => onClose()}
					>
						[x] close 
					</button>
				</div>

				<div className={styles.body}>
					<div className={styles.detailsSection}>
						<div className={styles.detailRow}>
							<p className={styles.label}>
								Description
							</p>

							<div className={styles.value}>
								{data.description}
							</div>
						</div>

						<div className={styles.detailRow}>
							<p className={styles.label}>
								Tech Stack
							</p>

							<div className={styles.value}>
								<ul className={styles.techStackList}>
									{data.techStackList.map((techStackItem, key) => (
										<li
											key={key}
											className={styles.techStackItem}
										>
											{techStackItem}
										</li>
									))}
								</ul>
							</div>
						</div>

					</div>

					<div className={styles.mediaList}>
						{data.mediaList.map((mediaItem, key) => (
							<div 
								key={key}
								className={styles.mediaItem}
							>
								<picture>
									<img
										alt={mediaItem.label}
										src={mediaItem.url}
										className={styles.image}
									/>
								</picture>
							</div>
						))}
					</div>
				</div>
			</div>

		</div>
	);
};

export default ProjectModal;