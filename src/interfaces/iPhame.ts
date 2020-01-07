import { ErrorCodes, RetSearchConstants } from './iGlobal';

interface phameBlogEditTransactionsType {
	type:
		| 'name'
		| 'subtitle'
		| 'description'
		| 'domainFullURI'
		| 'parentSite'
		| 'parentDomain'
		| 'status'
		| 'view'
		| 'edit'
		| 'projects.add'
		| 'projects.remove'
		| 'projects.set'
		| 'subscribers.add'
		| 'subscribers.remove'
		| 'subscribers.set'
		| 'mfa';
	value: string | boolean;
};

export interface PhameBlogEdit {
	transactions: Array<phameBlogEditTransactionsType>;
	objectIdentifier?: string | number;
}

export interface PhameBlogSearch {
	queryKey?: 'active' | 'archived' | 'all';
	constraints?: {
		ids?: Array<number>;
		phids?: Array<string>;
		query?: string;
		subscribers?: Array<string>;
		projects?: Array<string>;
	};
	attachments?: {
		subscribers?: boolean;
		projects?: boolean;
	};
	order?: 'newest' | 'oldest' | 'relevance';
	before?: string;
	after?: string;
	limit?: number;
}

interface retPhameBlogSearchData extends RetSearchConstants {
	fields: {
		name: string;
		description: string;
		status: string;
		dateCreated: number;
		dateModified: number;
		policy: { view: string };
	};
	attachments: {
		projects: { projectPHIDs: Array<string> };
		subscribers: {
			subscriberPHIDs: Array<string>;
			subscriberCount: number;
			viewerIsSubscribed: boolean;
		};
	};
}

export interface RetPhameBlogSearch extends ErrorCodes {
	result: {
		data: Array<retPhameBlogSearchData>;
		maps: object;
		query: { queryKey: string };
		cursor: { limit: number; after: string; before: string; order: string };
	};
}

export interface PhamePostSearch {
	queryKey?: 'live' | 'draft' | 'archived' | 'all';
	constraints?: {
		ids?: Array<number>;
		phids?: Array<string>;
		visibility?: ['1', '0', '2'];
		query?: string;
		subscribers?: Array<string>;
		projects?: Array<string>;
	};
	attachments?: {
		subscribers?: boolean;
		projects?: boolean;
	};
	order?: 'newest' | 'oldest' | 'relevance' | 'datePublished';
	before?: string;
	after?: string;
	limit?: number;
}

interface retPhamePostSearchData extends RetSearchConstants {
	fields: {
		title: string;
		slug: string;
		blogPHID: string;
		authorPHID: string;
		body: string;
		datePublished: number;
		dateCreated: number;
		dateModified: number;
		policy: { view: string };
	};
	attachments: {
		subscribers: {
			subscriberPHIDs: Array<string>;
			subscriberCount: number;
			viewerIsSubscribed: boolean;
		};
		projects: { projectPHIDs: Array<string> };
	};
}

export interface RetPhamePostSearch extends ErrorCodes {
	result: {
		data: Array<retPhamePostSearchData>;
		maps: object;
		query: { queryKey: string };
		cursor: { limit: number; after: string; before: string; order: string };
	};
}

interface phamePostEditTransactionsType {
	type:
		| 'blog'
		| 'title'
		| 'subtitle'
		| 'visibility'
		| 'body'
		| 'projects.add'
		| 'projects.remove'
		| 'projects.set'
		| 'subscribers.add'
		| 'subscribers.remove'
		| 'subscribers.set'
		| 'comment'
		| 'mfa';
	value: string | boolean;
};

export interface PhamePostEdit {
	transactions: Array<phamePostEditTransactionsType>;
	objectIdentifier?: string | number;
}
