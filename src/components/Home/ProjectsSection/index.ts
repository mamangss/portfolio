export { default as ProjectsSection } from './ProjectsSection';

export interface IProjectsSectionProps {
	data: IProjectsSectionData;
};

export interface IProjectsSectionData {
    headingCaption: string;
    projectList: IProjectItem[];
};

export interface IProjectItem {
	name: string;
	description: string;
	imageUrl: string;
	mediaList: IMediaItem[];
	techStackList: string[];
	linkList?: string[];
};
export interface IMediaItem {
	label: string;
	url: string;
}