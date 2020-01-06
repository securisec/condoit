export interface PhrictionContentSearch {
	queryKey?: 'all';
	constraints?: {
		ids: Array<number>;
		phids: Array<string>;
		documentPHIDs: Array<string>;
		versions: Array<number>;
	};
	attachments: {
		content: boolean;
	};
	order?: 'newest' | 'oldest';
	before?: string;
	after?: string;
	limit?: number;
}

type retPhrictionContentSearchData = {
	id: number;
	type: string;
	phid: string;
	fields: {
		documentPHID: string;
		version: number;
		dateCreated: number;
		dateModified: number;
		policy: { view: string };
	};
	attachments: {
		content: {
			title: string;
			path: string;
			authorPHID: string;
			content: { raw: string };
		};
	};
};

export interface RetPhrictionContentSearch {
	result: {
		data: Array<retPhrictionContentSearchData>;
		maps: object;
		query: { queryKey: string };
		cursor: { limit: number; after: string; before: string; order: string };
	};
	error_code: string;
	error_info: string;
}

export interface RetPhrictionCreate {
	result: {
		phid: string;
		uri: string;
		slug: string;
		version: number;
		authorPHID: string;
		title: string;
		content: string;
		status: string;
		description: string;
		dateCreated: number;
	};
	error_code: string;
	error_info: string;
}

export interface PhrictionDocumentSearch {
	queryKey?: 'active' | 'all';
	constraints?: {
		ids?: Array<number>;
		phids?: Array<string>;
		statuses?: ['active' | 'deleted' | 'moved' | 'stub'];
		paths?: Array<string>;
		parentPaths?: Array<string>;
		ancestorPaths?: Array<string>;
		query?: string;
		subscribers?: Array<string>;
		projects?: Array<string>;
	};
	attachments: {
		content: boolean;
		subscribers: boolean;
		projects: boolean;
	};
	order?: 'newest' | 'oldest' | 'relevance' | 'hierarchy';
	before?: string;
	after?: string;
	limit?: number;
}

type retPhrictionDocumentSearchData = {
	id: number;
	type: string;
	phid: string;
	fields: {
		path: string;
		status: { value: string };
		spacePHID: string;
		policy: { view: string };
	};
	attachments: {
		content: {
			title: string;
			path: string;
			authorPHID: string;
			content: { raw: string };
		};
		projects: { projectPHIDs: Array<string> };
		subscribers: {
			subscriberPHIDs: Array<string>;
			subscriberCount: number;
			viewerIsSubscribed: false;
		};
	};
};

export interface RetPhrictionDocumentSearch {
	result: {
		data: Array<retPhrictionDocumentSearchData>;
		maps: object;
		query: { queryKey: string };
		cursor: { limit: number; after: string; before: string; order: string };
	};
	error_code: string;
	error_info: string;
}

export interface RetPhrictionEdit {
	result: {
		phid: string;
		uri: string;
		slug: string;
		version: number;
		authorPHID: string;
		title: string;
		content: string;
		status: string;
		description: string;
		dateCreated: number;
	};
	error_code: string;
	error_info: string;
}

export interface RetPhrictionInfo {
	result: {
		phid: string;
		uri: string;
		slug: string;
		version: string;
		authorPHID: string;
		title: string;
		content: string;
		status: string;
		description: string;
		dateCreated: string;
	};
	error_code: string;
	error_info: string;
}
