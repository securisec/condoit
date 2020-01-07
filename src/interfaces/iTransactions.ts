import { ErrorCodes } from './iGlobal';

export interface TransactionsSearch {
	objectIdentifier: string;
	constraints: {
		phids: Array<string>;
		authorPHIDs: Array<string>;
	};
	before: string;
	after: string;
	limit: number;
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
	fields: object;
};

export interface RetTransactionsSearch extends ErrorCodes {
	result: {
		data: Array<retTransactionsSearchData>;
		cursor: { limit: number; after: string; before: string };
	};
}
