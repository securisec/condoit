import { ErrorCodes, BeforeAfterLimit, phid } from './iGlobal';

export interface TransactionsSearch extends BeforeAfterLimit {
	objectIdentifier: string;
	constraints: {
		phids: Array<phid>;
		authorPHIDs: Array<phid>;
	};
}

interface retTransactionsSearchData {
	id: number;
	phid: phid;
	type: string;
	authorPHID: phid;
	objectPHID: phid;
	dateCreated: number;
	dateModified: number;
	groupID: string;
	comments: Array<string>;
	fields: {
		old?: string;
		new?: string;
		operations?: Array<{ operation: string; phid: phid }>;
	};
}

export interface RetTransactionsSearch extends ErrorCodes {
	result: {
		data: Array<retTransactionsSearchData>;
		cursor: { limit: number; after: string; before: string };
	};
}
