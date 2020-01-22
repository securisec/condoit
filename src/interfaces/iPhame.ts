import {
	ErrorCodes,
	RetSearchConstants,
	BeforeAfterLimit,
	phid
} from './iGlobal';

export interface phameBlogEditTransactionsType {
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
	value: any;
}

export interface PhameBlogEdit {
	transactions: Array<phameBlogEditTransactionsType>;
	objectIdentifier?: string | number;
}

export interface PhameBlogSearch extends BeforeAfterLimit {
	queryKey?: 'active' | 'archived' | 'all';
	constraints?: {
		ids?: Array<number>;
		phids?: Array<phid>;
		query?: string;
		subscribers?: Array<string>;
		projects?: Array<string>;
	};
	attachments?: {
		subscribers?: boolean;
		projects?: boolean;
	};
	order?: 'newest' | 'oldest' | 'relevance';
}

export interface retPhameBlogSearchData extends RetSearchConstants {
	fields: {
		name: string;
		description: string;
		status: string;
		dateCreated: number;
		dateModified: number;
		policy: { view: string };
	};
	attachments: {
		projects: { projectPHIDs: Array<phid> };
		subscribers: {
			subscriberPHIDs: Array<phid>;
			subscriberCount: number;
			viewerIsSubscribed: boolean;
		};
	};
}

export interface RetPhameBlogSearch extends ErrorCodes, BeforeAfterLimit {
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
		phids?: Array<phid>;
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
}

export interface retPhamePostSearchData extends RetSearchConstants {
	fields: {
		title: string;
		slug: string;
		blogPHID: phid;
		authorPHID: phid;
		body: string;
		datePublished: number;
		dateCreated: number;
		dateModified: number;
		policy: { view: string };
	};
	attachments: {
		subscribers: {
			subscriberPHIDs: Array<phid>;
			subscriberCount: number;
			viewerIsSubscribed: boolean;
		};
		projects: { projectPHIDs: Array<phid> };
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

export interface phamePostEditTransactionsType {
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
	value: any;
}

export interface PhamePostEdit {
	transactions: Array<phamePostEditTransactionsType>;
	objectIdentifier?: string | number;
}
