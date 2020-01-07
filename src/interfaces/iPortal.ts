import { ErrorCodes, RetSearchConstants } from './iGlobal';

interface portalEditTransactionType {
	type:
		| 'name'
		| 'view'
		| 'edit'
		| 'projects.add'
		| 'projects.remove'
		| 'projects.set'
		| 'mfa';
	value: string | boolean;
};

export interface PortalEdit {
	transactions: Array<portalEditTransactionType>;
	objectIdentifier?: number | string;
}

export interface PortalSearch {
	queryKey?: 'all';
	constraints?: {
		ids: Array<number>;
		phids: Array<string>;
		query: string;
		projects: Array<string>;
	};
	order?: 'newest' | 'oldest' | 'relevance';
	attachments?: { projects: boolean };
	before?: string;
	after?: string;
	limit?: number;
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
