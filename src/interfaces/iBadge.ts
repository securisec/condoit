import {
	BeforeAfterLimit,
	RetSearchConstants,
	ErrorCodes,
	phid
} from './iGlobal';

export interface BadgeSearch extends BeforeAfterLimit {
	queryKey?: 'open' | 'all';
	constraints?: {
		ids?: Array<number>;
		phids?: Array<phid>;
		name?: string;
		statuses?: ['closed' | 'open'];
		subscribers?: Array<string>;
	};
	attachments: {
		subscribers: boolean;
	};
	order?: 'newest' | 'oldest' | 'quality' | 'shoddiness';
}

export interface retBadgeSearchData extends RetSearchConstants {
	fields: {
		name: string;
		creatorPHID: phid;
		status: string;
		dateCreated: number;
		dateModified: number;
		policy: { view: string; edit: string };
	};
	attachments: {
		subscribers: {
			subscriberPHIDs: Array<phid>;
			subscriberCount: number;
			viewerIsSubscribed: boolean;
		};
	};
}

export interface RetBadgeSearch extends ErrorCodes {
	result: {
		data: Array<retBadgeSearchData>;
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

export interface badgeEditTransactions {
	type:
		| 'name'
		| 'flavor'
		| 'icon'
		| 'quality'
		| 'description'
		| 'award'
		| 'revoke'
		| 'edit'
		| 'subscribers.add'
		| 'subscribers.remove'
		| 'subscribers.set'
		| 'comment'
		| 'mfa';
	value: any;
}

export interface BadgeEdit {
	transactions: Array<badgeEditTransactions>;
	objectIdentifier: number | string;
}
