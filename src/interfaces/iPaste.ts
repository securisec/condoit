import {
	ErrorCodes,
	RetSearchConstants,
	BeforeAfterLimit,
	phid
} from './iGlobal';
import { lang } from '../extras/paste-lang';

export interface PasteCreate {
	content: string;
	title?: string;
	language?: lang;
}

export interface RetPasteCreate extends ErrorCodes {
	result: {
		id: number;
		objectName: string;
		phid: phid;
		authorPHID: phid;
		filePHID: phid;
		title: string;
		dateCreated: number;
		language: string;
		uri: string;
		parentPHID: phid;
		content: string;
	};
}

export interface pasteTransactions {
	type:
		| 'space'
		| 'title'
		| 'language'
		| 'text'
		| 'status'
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

export interface PasteEdit {
	transactions: Array<pasteTransactions>;
	objectIdentifier?: string | number;
}

export interface PasteQuery {
	ids?: Array<number>;
	phids?: Array<phid>;
	authorPHIDs?: Array<phid>;
	after?: number;
	limit?: number;
}

export interface RetPasteQuery {
	[phid: string]: {
		id: string;
		objectName: string;
		phid: phid;
		authorPHID: phid;
		filePHID: phid;
		title: string;
		dateCreated: string;
		language: string;
		uri: string;
		parentPHID: string;
		content: string;
	};
}

export interface PasteSearchConstraints {
	ids?: Array<number>;
	phids?: Array<phid>;
	authors?: Array<phid>;
	languages?: Array<lang>;
	createdStart?: number;
	createdEnd?: number;
	statuses?: 'active' | 'archived';
	subscribers?: Array<phid>;
	projects?: Array<phid>;
}

export interface PasteSearch extends BeforeAfterLimit {
	queryKey?: 'active' | 'all' | 'authored';
	constraints?: PasteSearchConstraints;
	attachments?: {
		content?: boolean;
		subscribers?: boolean;
		projects?: boolean;
	};
	order?: 'newest' | 'oldest';
}

export interface retPasteData extends RetSearchConstants {
	fields: {
		title: string;
		authorPHID: phid;
		language: string;
		status: string;
		spacePHID: phid;
		dateCreated: number;
		dateModified: number;
		policy: { view: string; edit: string };
	};
	attachments: {
		content: {
			content: string;
		};
		projects: { projectPHIDs: Array<phid> };
		subscribers: {
			subscriberPHIDs: Array<phid>;
			subscriberCount: number;
			viewerIsSubscribed: boolean;
		};
	};
}

export interface RetPasteSearch extends ErrorCodes {
	data: Array<retPasteData>;
	maps: object;
	query: { queryKey: string };
	cursor: { limit: number; after: string; before: string; order: string };
}
