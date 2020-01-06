export interface PhameBlogSearch {
	queryKey?: 'active' | 'archived' | 'all';
	constraints?: {
		ids: Array<number>;
		phids: Array<string>;
		query: string;
		subscribers: Array<string>;
		projects: Array<string>;
	};
	attachments: {
		subscribers: boolean;
		projects: boolean;
	};
	order?: 'newest' | 'oldest' | 'relevance';
	before?: string;
	after?: string;
	limit?: number;
}

type retPhameBlogSearchData = {
	id: number;
	type: string;
	phid: string;
	fields: {
		name: string;
		description: string;
		status: string;
		dateCreated: number;
		dateModified: number;
		policy: { view: string };
	};
	attachments: {
		projects: { projectPHIDs: Array<string> };
		subscribers: {
			subscriberPHIDs: Array<string>;
			subscriberCount: number;
			viewerIsSubscribed: boolean;
		};
	};
};

export interface RetPhameBlogSearch {
	result: {
		data: Array<retPhameBlogSearchData>;
		maps: object;
		query: { queryKey: string };
		cursor: { limit: number; after: string; before: string; order: string };
	};
	error_code: string;
	error_info: string;
}
