import { ErrorCodes, RetSearchConstants } from './iGlobal';

interface editUsersTransactions {
	type:
		| 'disabled'
		| 'approved'
		| 'realName'
		| 'title'
		| 'icon'
		| 'blurb'
		| 'mfa';
	value: boolean | string;
}

export interface UsersEdit {
	transactions: Array<editUsersTransactions>;
	objectIdentifier?: number | string;
}

interface UsersSearchConstraints {
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
}

export interface UsersSearch {
	queryKey?: 'active' | 'all' | 'approval';
	constraints?: UsersSearchConstraints;
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

interface retUsersSearchData extends RetSearchConstants {
	fields: {
		username: string;
		realName: string;
		roles: Array<string>;
		dateCreated: number;
		dateModified: number;
		policy: { view: string; edit: string };
	};
	attachments: {
		availability: {
			value: string;
			until: any;
			name: string;
			color: string;
			eventPHID: string;
		};
	};
}

export interface RetUsersSearch extends ErrorCodes {
	result: {
		data: Array<retUsersSearchData>;
		maps: object;
		query: { queryKey: string };
		cursor: {
			limit: number;
			after: string;
			before: any;
			order: any;
		};
	};
}

export interface RetUsersWhoami extends ErrorCodes {
	result: {
		phid: string;
		userName: string;
		realName: string;
		image: string;
		uri: string;
		roles: Array<string>;
		primaryEmail: string;
	};
}
