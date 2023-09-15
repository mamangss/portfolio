export { default as ContactSection } from './ContactSection';

export interface IContactSectionProps {
	data: IContactSectionData;
};

export interface IContactSectionData {
	headingCaption: string;
	linkList: ILinkItem[];
};

export interface ILinkItem {
	type: DLinkType;
	label: string;
	url: string;
};

export type DLinkType = 'RESUME' | 'GITHUB' | 'GMAIL' | 'WEBSITE' | 'LINKEDIN';