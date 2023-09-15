export { default as Layout } from './Layout';

export interface ILayoutProps {
	children: React.ReactNode;
};

export interface IMenuItem {
	name: string;
	url: string;
}