import { ILayoutProps, IMenuItem } from '.';
import classNames from '../../utils/classNames';
import styles from './Layout.module.scss';

const Layout: React.FC<ILayoutProps> = ({
	children = <></>
}) => {
	
	const menuList: IMenuItem[] = [
		{ name: 'About', url: '#about' },
		{ name: 'Projects', url: '#projects' },
		{ name: 'Experience', url: '#experience' },
		{ name: 'Contact', url: '#contact' },
	];

	return (
		<div className={styles.layoutContent}>
			<nav className={styles.topNav}>
				<ul className={styles.menuList}>
					{menuList.map((menuItem, key) => (
						<li 
							key={key}
							className={styles.menuItem}
						>
							<a 
								href={menuItem.url}
								className={styles.link}
							>
								{menuItem.name}
							</a>
						</li>
					))}
				</ul>
			</nav>

			<main className={styles.mainContent}>
				{children}
			</main>

			<footer className={classNames('section-containter', styles.footerSection)}>
				<div className={classNames('section-content', styles.footerContent)}>
					© 2023 Joshua Mamangun. All Rights Reserved.
				</div>
			</footer>
		</div>
	);
};

export default Layout;