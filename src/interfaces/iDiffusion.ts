import { BeforeAfterLimit, RetSearchConstants, ErrorCodes } from './iGlobal';

export interface DiffusionBlame {
	paths: Array<string>;
	commit: string;
	timeout?: number;
	repository?: string;
	branch?: string;
}

export interface DiffusionBranchQuery {
	closed?: boolean;
	limit?: number;
	offset?: number;
	contains?: string;
	pattern?: Array<string>;
	repository?: string;
	branch?: string;
}

export interface RetDiffusionBranchquery {
	shortName: string;
	commitIdentifier: string;
	refType: string;
	rawFields: {
		objectname: string;
		objecttype: string;
		refname: string;
		'*objectname': string;
		'*objecttype': string;
		subject: string;
		creator: string;
		author: string;
		epoch: number;
	};
}

export interface DiffusionBrowsequery {
	path?: string;
	commit?: string;
	needValidityOnly?: boolean;
	limit?: number;
	offset?: number;
	repository?: string;
	branch?: string;
}

export interface RetDiffusionBrowsequery {
	paths: [
		{
			fullPath: string;
			path: string;
			hash: string;
			fileType: number;
			fileSize: string;
			externalURI: string;
			lastModifiedCommit: string;
			lastCommitData: string;
		}
	];
	isValidResults: true;
	reasonForEmptyResultSet: string;
	existedAtCommit: boolean;
	deletedAtCommit: boolean;
}

export interface DiffusionCommitSearch extends BeforeAfterLimit {
	queryKey?: 'all' | 'authored' | 'active' | 'authored';
	constraints?: {
		ids?: Array<string>;
		phids?: Array<string>;
		responsible?: Array<string>;
		authors?: Array<string>;
		auditors?: Array<string>;
		statuses?: [
			| 'none'
			| 'needs-audit'
			| 'concern-raised'
			| 'partially-audited'
			| 'audited'
			| 'needs-verification'
		];
		repositories?: Array<string>;
		packages?: Array<string>;
		unreachable?: boolean;
		unpublished?: boolean;
		ancestorsOf?: Array<string>;
		identifiers?: Array<string>;
		query?: string;
		subscribers?: Array<string>;
		projects?: Array<string>;
	};
	attachments: { projects: boolean; subscribers: boolean };
	order?: 'ending' | 'unending' | 'newest' | 'oldest';
}

interface retDiffusionCommitSearchData extends RetSearchConstants {
	fields: {
		identifier: string;
		repositoryPHID: string;
		author: {
			name: string;
			email: string;
			raw: string;
			epoch: number;
			identityPHID: string;
			userPHID: string;
		};
		commiter: {
			name: string;
			email: string;
			raw: string;
			epoch: number;
			identityPHID: string;
			userPHID: string;
		};
		isImported: boolean;
		isUnreachable: boolean;
		auditStatus: {
			value: string;
			name: string;
			closed: boolean;
			'color.ansi': string;
		};
		message: string;
		policy: { view: string; edit: string };
	};
	attachments: {
		subscribers: {
			subscriberPHIDs: Array<string>;
			subscriberCount: number;
			viewerIsSubscribed: boolean;
		};
		projects: { projectPHIDs: Array<string> };
	};
}

export interface RetDiffusionCommitSearch extends ErrorCodes {
	result: {
		data: Array<retDiffusionCommitSearchData>;
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

interface diffusionCommitEditTransactions {
	key:
		| 'auditors.add'
		| 'auditors.remove'
		| 'auditors.set'
		| 'accept'
		| 'concern'
		| 'verify'
		| 'resign'
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

export interface DiffusionCommitEdit {
	transactions: Array<diffusionCommitEditTransactions>;
	objectIdentifier: string | number;
}

export interface DiffusionCommitparentsquery {
	commit: string;
	repository?: string;
	branch?: string;
}

export interface DiffusionDiffQuery {
	path?: string;
	commit?: string;
	repository: string;
	branch: string;
}

export interface RetDiffusionDiffquery extends ErrorCodes {
	result: {
		changes: {
			[fileName: string]: {
				metadata: Array<string>;
				oldPath: string;
				currentPath: string;
				awayPaths: Array<string>;
				oldProperties: Array<string>;
				newProperties: { 'unix:filemode': string };
				type: number;
				fileType: number;
				commitHash: string;
				hunks: [
					{
						oldOffset: string;
						newOffset: string;
						oldLength: string;
						newLength: number;
						addLines: number;
						delLines: number;
						isMissingOldNewline: boolean;
						isMissingNewNewline: boolean;
						corpus: string;
					}
				];
			};
		};
		effectiveCommit: '96de62bf78c6c063165ceb19ef73dc71857741cd';
	};
}

export interface DiffusionExistsquery {
	commit: string;
	repository?: string;
	branch?: string;
}

export interface DiffusionFilecontentquery {
	path: string;
	commit?: string;
	timeout?: number;
	byteLimit?: number;
	repository: string;
	branch?: string;
}

export interface RetDiffusionFilecontentquery extends ErrorCodes {
	result: {
		tooSlow: boolean;
		tooHuge: boolean;
		filePHID: string;
	};
}

export interface DiffusionFindsymbols {
	name?: string;
	namePrefix?: string;
	context?: string;
	language?: string;
	type?: string;
	repositoryPHID?: string;
}

export interface DiffusionHistoryquery {
	commit: string;
	against?: string;
	path: string;
	offset?: number;
	limit?: number;
	needDirectChanges?: boolean;
	needChildChanges?: boolean;
	repository: string;
	branch?: string;
}

export interface RetDiffusionHistoryquery extends ErrorCodes {
	result: {
		pathChanges: Array<string>;
		parents: Array<string>;
	};
}
