import { IProjectItem } from '../ProjectsSection';

export { default as ProjectModal } from './ProjectModal';

export interface IProjectModalProps {
	isOpen: boolean;
	onClose: () => void;
	data: IProjectItem;
};