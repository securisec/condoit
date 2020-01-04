type editTransactions = {
	type:
		| 'disabled'
		| 'approved'
		| 'realName'
		| 'title'
		| 'icon'
		| 'blurb'
		| 'mfa';
	value: boolean | string;
};

export interface Edit {
	transactions: Array<editTransactions>;
	objectIdentifier?: number | string;
}

type editRetTransactions = { phid: string };
export interface RetEdit {
	result: {
		object: { id: number; phid: string };
		transactions: Array<editRetTransactions>;
	};
	error_code: any;
	error_info: any;
}

type searchConstraints = {
	ids?: Array<number>;
	phids?: Array<string>;
	usernames?: Array<string>;
	nameLike?: string;
	isAdmin?: boolean;
	isDisabled?: boolean;
	isBot?: boolean;
	isMailingList?: boolean;
	needsApproval?: boolean;
	mfa?: boolean;
	createdStart?: number;
	createdEnd?: number;
	query?: string;
};

export interface Search {
	queryKey?: 'active' | 'all' | 'approval';
	constraints?: searchConstraints;
	attachments?: { availability: boolean };
	order?:
		| 'newest'
		| 'oldest'
		| 'relevance'
		| ['id' | 'username' | 'rank' | 'fulltext-created' | 'fulltext-modified'];
	before?: string;
	after?: string;
	limit?: number;
}

type retSearchData = {
	id: number;
	type: string;
	phid: string;
	fields: {
		username: string;
		realName: string;
		roles: Array<string>;
		dateCreated: number;
		dateModified: number;
		policy: { view: string; edit: string };
	};
	attachments: object;
};

export interface RetSearch {
	result: {
		data: Array<retSearchData>;
		maps: object;
		query: { queryKey: string };
		cursor: {
			limit: number;
			after: string;
			before: any;
			order: any;
		};
	};
	error_code: any;
	error_info: any;
}

export interface RetWhoami {
	result: {
		phid: string;
		userName: string;
		realName: string;
		image: string;
		uri: string;
		roles: Array<string>;
		primaryEmail: string;
	};
	error_code: string;
	error_info: string;
}
