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

type retPollSearchData = {
	id: number;
	type: string;
	phid: string;
	fields: {
		name: string;
		authorPHID: string;
		spacePHID: string;
		dateCreated: number;
		dateModified: number;
		policy: { view: string };
	};
	attachments: object;
};

export interface RetPollSearch {
	result: {
		data: Array<retPollSearchData>;
		maps: object;
		query: { queryKey: string };
		cursor: { limit: number; after: string; before: string; order: string };
	};
	error_code: string;
	error_info: string;
}
