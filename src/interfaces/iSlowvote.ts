import { ErrorCodes, RetSearchConstants } from './iGlobal';

export interface PollSearch {
	queryKey: string;
	constraints: {
		ids: Array<number>;
		phids: Array<string>;
		authorPHIDs: Array<string>;
		statuses: ['open' | 'closed'];
		subscribers: Array<string>;
		projects: Array<string>;
	};
	attachments: {
		subscribers: boolean;
		projects: boolean;
	};
	order: any;
	before: string;
	after: string;
	limit: number;
}

interface retPollSearchData extends RetSearchConstants {
	fields: {
		name: string;
		authorPHID: string;
		spacePHID: string;
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
