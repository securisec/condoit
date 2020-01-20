import {
	ErrorCodes,
	RetSearchConstants,
	BeforeAfterLimit,
	phid
} from './iGlobal';

interface portalEditTransactionType {
	type:
		| 'name'
		| 'view'
		| 'edit'
		| 'projects.add'
		| 'projects.remove'
		| 'projects.set'
		| 'mfa';
	value: any;
}

export interface PortalEdit {
	transactions: Array<portalEditTransactionType>;
	objectIdentifier?: number | string;
}

export interface PortalSearch extends BeforeAfterLimit {
	queryKey?: 'all';
	constraints?: {
		ids: Array<number>;
		phids: Array<phid>;
		query: string;
		projects: Array<string>;
	};
	order?: 'newest' | 'oldest' | 'relevance';
	attachments?: { projects: boolean };
}

interface retPortalSearchData extends RetSearchConstants {
	fields: {
		dateCreated: number;
		dateModified: number;
		policy: { view: string; edit: string };
	};
	attachments: object;
}

export interface RetPortalSearch extends ErrorCodes {
	result: {
		data: Array<retPortalSearchData>;
		maps: object;
		query: { queryKey: string };
		cursor: { limit: number; after: string; before: string; order: string };
	};
}
