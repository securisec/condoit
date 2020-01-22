import {
	ErrorCodes,
	RetSearchConstants,
	BeforeAfterLimit,
	phid
} from './iGlobal';

export interface RetFileInfo extends ErrorCodes {
	result: {
		id: string;
		phid: phid;
		objectName: string;
		name: string;
		mimeType: string;
		byteSize: string;
		authorPHID: phid;
		dateCreated: string;
		dateModified: string;
		uri: string;
	};
}

export interface RetFileQuerychunks extends ErrorCodes {
	result: Array<{ byteStart: string; byteEnd: string; complete: boolean }>;
}

export interface FileSearch extends BeforeAfterLimit {
	queryKey?: 'authored' | 'all';
	constraints?: {
		ids: Array<number>;
		phids: Array<phid>;
		authorPHIDs: Array<phid>;
		explicit: boolean;
		createdStart: string;
		createdEnd: string;
		name: string;
		subscribers: Array<string>;
	};
	attachments?: { subscribers: boolean };
	order?:
		| 'newest'
		| 'oldest'
		| 'relevance'
		| ['id' | 'username' | 'rank' | 'fulltext-created' | 'fulltext-modified'];
}

export interface retFileSearchData extends RetSearchConstants {
	fields: {
		name: string;
		dataURI: string;
		size: number;
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

export interface RetFileSearch extends ErrorCodes {
	result: {
		data: Array<retFileSearchData>;
		maps: object;
		query: { queryKey: string };
		cursor: { limit: number; after: string; before: string; order: null };
	};
}

export interface FileAllocate {
	name: string;
	contentLength: number;
	contentHash?: string;
	viewPolicy?: string;
	deleteAfterEpoch?: number;
}

export interface RetFileAllocate extends ErrorCodes {
	result: { upload: boolean; filePHID: phid };
}

export interface FileUpload {
	filePath: string;
	name?: string;
	viewPolicy: string;
	canCDN: boolean;
}

export interface RetFileUpload extends ErrorCodes {
	result: string;
}

export interface FileUploadchunk {
	filePHID: phid;
	byteStart: number;
	data: string;
	dataEncoding: 'base64';
}
