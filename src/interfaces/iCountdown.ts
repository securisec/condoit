import { BeforeAfterLimit, RetSearchConstants, ErrorCodes } from './iGlobal';

export interface CountdownServiceSearch extends BeforeAfterLimit {
	queryKey?: 'all' | 'authored' | 'upcoming';
	constraints?: {
		ids?: Array<number>;
		phids?: Array<string>;
		authorPHIDs?: Array<string>;
		upcoming?: Array<'upcoming'>;
		subscribers?: Array<string>;
		projects?: Array<string>;
	};
	attachments: { projects: boolean; subscribers: boolean };
	order?: 'ending' | 'unending' | 'newest' | 'oldest';
}

interface retCountdownServiceSearchData extends RetSearchConstants {
	fields: {
		title: string;
		description: string;
		epoch: number;
		spacePHID: string;
		dateCreated: number;
		dateModified: number;
		policy: { view: string; edit: string };
	};
	attachments: {
		subscribers: {
			subscriberPHIDs: Array<string>;
			subscriberCount: number;
			viewerIsSubscribed: boolean;
		};
		projects: { projectPHIDs: Array<string> };
		bindings: { bindings: Array<any> };
	};
}

export interface RetCountdownServiceSearch extends ErrorCodes {
	result: {
		data: Array<retCountdownServiceSearchData>;
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

interface countdownEditTransactions {
	type:
		| 'space'
		| 'name'
		| 'epoch'
		| 'description'
		| 'view'
		| 'edit'
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

export interface CountdownEdit {
	transactions: Array<countdownEditTransactions>;
	objectIdentifier: number | string;
}
