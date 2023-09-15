export { default as HeroSection } from './HeroSection';

export interface IHeroSectionProps {
	data: IHeroSectionData;
};

export interface IHeroSectionData {
    headingCaption: string;
    subCaption: string;
    stackList: string[];
};