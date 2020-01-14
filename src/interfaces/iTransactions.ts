import { ErrorCodes, BeforeAfterLimit } from './iGlobal';

export interface TransactionsSearch extends BeforeAfterLimit {
	objectIdentifier: string;
	constraints: {
		phids: Array<string>;
		authorPHIDs: Array<string>;
	};
}

interface retTransactionsSearchData {
	id: number;
	phid: string;
	type: string;
	authorPHID: string;
	objectPHID: string;
	dateCreated: number;
	dateModified: number;
	groupID: string;
	comments: Array<string>;
	fields: {
		old?: string;
		new?: string;
		operations?: Array<{ operation: string; phid: string }>;
	};
}

export interface RetTransactionsSearch extends ErrorCodes {
	result: {
		data: Array<retTransactionsSearchData>;
		cursor: { limit: number; after: string; before: string };
	};
}
