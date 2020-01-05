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

type retTransactionsSearchData = {
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

export interface RetTransactionsSearch {
	result: {
		data: Array<retTransactionsSearchData>;
		cursor: { limit: number; after: string; before: string };
	};
	error_code: string;
	error_info: string;
}
