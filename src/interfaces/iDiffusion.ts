import { BeforeAfterLimit, RetSearchConstants, ErrorCodes } from './iGlobal';

interface BranchCommitRepo {
	branch?: string;
	commit?: string;
	repository: string;
}

export interface DiffusionBlame extends BranchCommitRepo {
	paths: Array<string>;
	timeout?: number;
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

export interface DiffusionBrowsequery extends BranchCommitRepo {
	path?: string;
	needValidityOnly?: boolean;
	limit?: number;
	offset?: number;
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

export interface DiffusionDiffQuery extends BranchCommitRepo {
	path?: string;
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

export interface DiffusionFilecontentquery extends BranchCommitRepo {
	path: string;
	timeout?: number;
	byteLimit?: number;
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

export interface DiffusionHistoryquery extends BranchCommitRepo {
	against?: string;
	path: string;
	offset?: number;
	limit?: number;
	needDirectChanges?: boolean;
	needChildChanges?: boolean;
}

export interface RetDiffusionHistoryquery extends ErrorCodes {
	result: {
		pathChanges: Array<string>;
		parents: Array<string>;
	};
}

export interface DiffusionLastmodifiedQuery {
	paths: object;
	repository?: string;
	branch?: string;
}

export interface DiffusionMergedcommitsquery extends BranchCommitRepo {
	limit?: number;
}

export interface DiffusionQuerycommits extends BeforeAfterLimit {
	ids?: Array<number>;
	phids?: Array<string>;
	names?: Array<string>;
	repositoryPHID?: string;
	needMessages?: boolean;
	bypassCache?: boolean;
}

export interface RetDiffusionQuerycommits extends ErrorCodes {
	result: {
		data: {
			[phid: string]: {
				id: string;
				phid: string;
				repositoryPHID: string;
				identifier: string;
				epoch: string;
				authorEpoch: number;
				uri: string;
				isImporting: boolean;
				summary: string;
				authorPHID: string;
				committerPHID: string;
				author: string;
				authorName: string;
				authorEmail: string;
				committer: string;
				committerName: string;
				committerEmail: string;
				hashes: Array<string>;
			};
		};
		identifierMap: object;
		cursor: { limit: number; after: string; before: string };
	};
}

export interface DiffusionQuerypaths extends BranchCommitRepo {
	path: string;
	pattern: string;
	limit: number;
	offset: number;
}

export interface DiffusionRawdiffquery extends BranchCommitRepo {
	path?: string;
	linesOfContext?: number;
	againstCOmmit?: string;
	timeout?: number;
	byteLimit?: number;
}

export interface RetDiffusionRefsquery extends ErrorCodes {
	result: {
		[index: string]: {
			ref: string;
			href: object;
		};
	};
}

interface diffusionRepoEdit {
	type:
		| 'space'
		| 'vcs'
		| 'name'
		| 'callsign'
		| 'shortName'
		| 'description'
		| 'encoding'
		| 'allowDangerousChanges'
		| 'allowEnormousChanges'
		| 'status'
		| 'defaultBranch'
		| 'fetchRefs'
		| 'permanentRefs'
		| 'trackOnly'
		| 'importOnly'
		| 'stagingAreaURI'
		| 'automationBlueprintPHIDs'
		| 'symbolLanguages'
		| 'symbolRepositoryPHIDs'
		| 'publish'
		| 'filesizeLimit'
		| 'copyTimeLimit'
		| 'touchLimit'
		| 'view'
		| 'edit'
		| 'policy.push'
		| 'projects.add'
		| 'projects.remove'
		| 'projects.set'
		| 'mfa';
	value: any;
}

export interface DiffusionRepositoryEdit {
	transactions: Array<diffusionRepoEdit>;
	objectIdentifier: string | number;
}

export interface DiffusionRepositorySearch extends BeforeAfterLimit {
	queryKey?: 'all' | 'active';
	constraints?: {
		ids?: Array<number>;
		phids?: Array<string>;
		callsigns?: Array<string>;
		shortNames?: Array<string>;
		types?: ['git' | 'hg' | 'svn'];
		uris?: Array<string>;
		almanacServicePHIDs?: Array<string>;
		query?: string;
		projects?: Array<string>;
	};
	attachments: { projects: boolean; uris: boolean; metrics: boolean };
	order?:
		| 'committed'
		| 'name'
		| 'callsign'
		| 'size'
		| 'newest'
		| 'oldest'
		| 'relevance';
}

interface retDiffusionRepositorySearchData extends RetSearchConstants {
	fields: {
		name: string;
		vcs: string;
		callsign: string;
		shortName: string;
		status: string;
		isImporting: boolean;
		almanacServicePHID: string;
		refRules: object;
		defaultBranch: string;
		description: string;
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

interface retDiffuRepoSearchAttachmentUri {
	id: string;
	type: string;
	phid: string;
	fields: {
		repositoryPHID: string;
		uri: {
			raw: string;
			display: string;
			effective: string;
			normalized: string;
		};
		io: { raw: string; default: string; effective: string };
		display: {
			raw: string;
			default: string;
			effective: string;
		};
		credentialPHID: string;
		disabled: boolean;
		builtin: { protocol: string; identifier: string };
		dateCreated: string;
		dateModified: string;
	};
}

export interface RetDiffusionRepositorySearch extends ErrorCodes {
	result: {
		data: Array<retDiffusionRepositorySearchData>;
		maps: object;
		query: { queryKey: string };
		cursor: {
			limit: number;
			after: string;
			before: any;
			order: any;
		};
		attachments: {
			metrics: {
				commitCount: number;
				recentCommit: {
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
					committer: {
						name: string;
						email: string;
						raw: string;
						epoch: number;
						identityPHID: string;
						userPHID: string;
					};
					isUnreachable: boolean;
					isImported: boolean;
					auditStatus: {
						value: string;
						name: string;
						closed: false;
						'color.ansi': string;
					};
					message: string;
				};
			};
			projects: { projectPHIDs: Array<string> };
			uris: {
				uris: Array<retDiffuRepoSearchAttachmentUri>;
			};
		};
	};
}

export interface DiffusionResolverefs {
	refs?: Array<string>;
	types?: Array<string>;
	repository?: string;
	branch?: string;
}

export interface DiffusionSearchquery extends BranchCommitRepo {
	path: string;
	grep: string;
	limit?: number;
	offset?: string;
}

export interface DiffusionTagsquery extends BranchCommitRepo {
	names?: Array<string>;
	needMessages?: boolean;
	offset?: number;
	limit?: number;
	branch?: string;
}

interface diffuUriEditTransactions {
	type:
		| 'repository'
		| 'uri'
		| 'io'
		| 'display'
		| 'credential'
		| 'disable'
		| 'mfa';
	value: any;
}

export interface DiffusionUriedit {
	transactions: Array<diffuUriEditTransactions>;
	objectIdentifier?: string | number;
}

export interface DiffusionGetlinemessages {
	repositoryPHID: string;
	branch: string;
	commit?: string;
	files: Array<string>;
}

export interface DiffusionUpdatecoverage {
	repositoryPHID: string;
	branch: string;
	commit: string;
	coverage: object;
	mode?: 'overwrite' | 'update';
}

export { BranchCommitRepo };
