export { default as ExperienceSection } from './ExperienceSection';

export interface IExperienceSectionProps {
	data: IExperienceSectionData;
};

export interface IExperienceSectionData {
    experienceSection: {
        headingCaption: string;
        experienceList: IExperienceItem[];
    };
    skillsSection: {
        headingCaption: string;
        skillList: ISkillItem[];
    };
}

export interface IExperienceItem {
	companyName: string;
	positionList: IPositionItem[]
};

export interface IPositionItem {
	position: string;
	employmentType: string;
	date: {
		from: string;
		to: string;
	};
	descriptionList: string[];
	skillList: string[];
};

export interface ISkillItem {
	name: string;
	description: string;
};