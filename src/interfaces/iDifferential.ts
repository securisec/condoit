import {
	ErrorCodes,
	RetSearchConstants,
	BeforeAfterLimit,
	phid
} from './iGlobal';

export interface DiffComment {
	revision_id: number;
	message?: string;
	action?: string;
	silent?: boolean;
	attach_inlines?: boolean;
}

export interface DiffCreatediff {
	changes: Array<object>;
	sourceMachine: string;
	sourcePath: string;
	branch: string;
	bookmark?: string;
	sourceControlSystem: 'git' | 'svn' | 'hg';
	sourceControlPath: string;
	sourceControlBaseRevision: string;
	creationMethod: string;
	lintStatus: 'none' | 'skip' | 'okay' | 'warn' | 'fail';
	unitStatus: 'none' | 'skip' | 'okay' | 'warn' | 'fail';
	repositoryPHID?: phid;
}

export interface DiffCreateinline {
	revisionID?: string;
	diffID?: string;
	filePath: string;
	isNewFile: boolean;
	lineNumber: number;
	lineLength?: number;
	content: string;
}

export interface DiffCreaterawdiff {
	diff: string;
	repositoryPHID?: phid;
	viewPolicy: string;
}

export interface DiffDiffSearch extends BeforeAfterLimit {
	queryKey?: 'all';
	constraints?: {
		ids?: Array<number>;
		phids?: Array<phid>;
		revisionPHIDs?: Array<phid>;
	};
	attachments: { commits: boolean };
	order?: 'newest' | 'oldest';
}

export interface retDiffDiffSearchData extends RetSearchConstants {
	fields: {
		revisionPHID: phid;
		authorPHID: phid;
		repositoryPHID: phid;
		refs: object;
		dateCreated: number;
		dateModified: number;
		policy: { view: string; edit: string };
	};
	attachments: {
		commits: object;
	};
}

export interface RetDiffDiffSearch extends ErrorCodes {
	result: {
		data: Array<retDiffDiffSearchData>;
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

export interface DiffGetcommitmessage {
	revision_id?: string;
	fields?: object;
	edit: 'edit' | 'crate';
}

export interface DiffQuery {
	authors?: Array<string>;
	ccs?: Array<string>;
	reviewers?: Array<string>;
	paths?: Array<any>;
	commitHashes?: Array<any>;
	status?:
		| 'status-any'
		| 'status-open'
		| 'status-accepted'
		| 'status-needs-review'
		| 'status-needs-revision'
		| 'status-closed'
		| 'status-abandoned';
	order?: 'order-modified' | 'order-created';
	limit?: number;
	offset?: number;
	ids?: Array<number>;
	phids?: Array<phid>;
	subscribers?: Array<string>;
	responsibleUsers?: Array<string>;
	branches?: Array<string>;
}

export interface diffRevisionEditTransactions {
	type:
		| 'update'
		| 'title'
		| 'summary'
		| 'testPlan'
		| 'reviewers.add'
		| 'reviewers.remove'
		| 'reviewers.set'
		| 'repositoryPHID'
		| 'tasks.add'
		| 'tasks.remove'
		| 'tasks.set'
		| 'parents.add'
		| 'parents.remove'
		| 'parents.set'
		| 'children.add'
		| 'children.remove'
		| 'children.set'
		| 'plan-changes'
		| 'request-review'
		| 'close'
		| 'reopen'
		| 'abandon'
		| 'accept'
		| 'reclaim'
		| 'reject'
		| 'commandeer'
		| 'resign'
		| 'draft'
		| 'view'
		| 'edit'
		| 'projects.add'
		| 'projects.remove'
		| 'projects.set'
		| 'subscribers.add'
		| 'subscribers.remove'
		| 'subscribers.set'
		| 'phabricator:auditors'
		| 'comment'
		| 'mfa';
	value: any;
}

export interface DiffRevisionEdit {
	transactions: Array<diffRevisionEditTransactions>;
	objectIdentifier: string | number;
}

export interface DiffRevisionSearch extends BeforeAfterLimit {
	queryKey?: 'all' | 'active' | 'authored';
	constraints?: {
		ids?: Array<number>;
		phids?: Array<phid>;
		responsiblePHIDs?: Array<string>;
		authorPHIDs?: Array<phid>;
		reviewerPHIDs?: Array<phid>;
		repositoryPHIDs?: Array<phid>;
		statuses?: Array<string>;
		createdStart?: number;
		createdEnd?: number;
		modifiedStart?: number;
		modifiedEnd?: number;
		query?: string;
		subscribers?: Array<string>;
		projects?: Array<string>;
	};
	attachments: { reviewers: boolean; subscribers: boolean; projects: boolean };
	order?: 'newest' | 'oldest' | 'relevance' | 'updated' | 'outdated';
}

export interface retDiffRevisionSearchData extends RetSearchConstants {
	fields: {
		revisionPHID: phid;
		authorPHID: phid;
		repositoryPHID: phid;
		refs: object;
		dateCreated: number;
		dateModified: number;
		policy: { view: string; edit: string };
	};
	attachments: {
		reviewers: object;
		subscribers: object;
		projects: object;
	};
}

export interface RetDiffRevisionSearch extends ErrorCodes {
	result: {
		data: Array<retDiffRevisionSearchData>;
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

export interface DiffUpdateRevision {
	id: string;
	diffid: string;
	fields: object;
	message: string;
}
