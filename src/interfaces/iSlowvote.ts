import {
	ErrorCodes,
	RetSearchConstants,
	BeforeAfterLimit,
	phid
} from './iGlobal';

export interface PollSearch extends BeforeAfterLimit {
	queryKey: string;
	constraints: {
		ids: Array<number>;
		phids: Array<phid>;
		authorPHIDs: Array<phid>;
		statuses: ['open' | 'closed'];
		subscribers: Array<string>;
		projects: Array<string>;
	};
	attachments: {
		subscribers: boolean;
		projects: boolean;
	};
	order: any;
}

export interface retPollSearchData extends RetSearchConstants {
	fields: {
		name: string;
		authorPHID: phid;
		spacePHID: phid;
		dateCreated: number;
		dateModified: number;
		policy: { view: string };
	};
	attachments: object;
}

export interface RetPollSearch extends ErrorCodes {
	result: {
		data: Array<retPollSearchData>;
		maps: object;
		query: { queryKey: string };
		cursor: { limit: number; after: string; before: string; order: string };
	};
}
