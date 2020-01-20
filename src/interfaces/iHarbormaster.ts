import {
	RetSearchConstants,
	ErrorCodes,
	BeforeAfterLimit,
	phid
} from './iGlobal';

export interface HarbormasterArtifactSearch extends BeforeAfterLimit {
	queryKey?: 'all';
	constraints?: {
		ids?: Array<number>;
		phids?: Array<phid>;
		buildTargetPHIDs?: Array<phid>;
	};
	order?: 'newest' | 'oldest';
}

interface retHMArtifaceSearchData extends RetSearchConstants {
	fields: {
		buildTargetPHID: phid;
		artifactType: string;
		artifactKey: string;
		isReleased: boolean;
		dateCreated: number;
		dateModified: number;
		policy: { view: string; edit: string };
	};
}

export interface RetHarbormasterArtifactSearch extends ErrorCodes {
	result: {
		data: Array<retHMArtifaceSearchData>;
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

export interface HarbormasterBuildSearch extends BeforeAfterLimit {
	queryKey?: 'all' | 'initiated' | 'waiting' | 'active' | 'completed';
	constraints?: {
		ids?: Array<number>;
		phids?: Array<phid>;
		plans?: Array<string>;
		buildables?: Array<string>;
		statuses?: Array<string>;
		initiators?: Array<string>;
	};
	order?: 'newest' | 'oldest';
}

interface retHMBuildSearchData extends RetSearchConstants {
	fields: {
		buildablePHID: phid;
		buildPlanPHID: phid;
		buildStatus: object;
		initiatorPHID: phid;
		name: string;
		dateCreated: number;
		dateModified: number;
		policy: { view: string; edit: string };
	};
}

export interface RetHarbormasterBuildSearch extends ErrorCodes {
	result: {
		data: Array<retHMBuildSearchData>;
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

export interface HarbormasterBuildableSearch extends BeforeAfterLimit {
	queryKey?: 'all';
	constraints?: {
		ids?: Array<number>;
		phids?: Array<phid>;
		objectPHIDs?: Array<phid>;
		containerPHIDs?: Array<phid>;
		statuses?: ['preparing' | 'building' | 'passed' | 'failed'];
		manual?: boolean;
	};
	order?: 'newest' | 'oldest';
}

interface retHMBuildableSearchData extends RetSearchConstants {
	fields: {
		objectPHID: phid;
		containerPHID: phid;
		buildableStatus: object;
		isManual: boolean;
		dateCreated: number;
		dateModified: number;
		policy: { view: string; edit: string };
	};
}

export interface RetHarbormasterBuildableSearch extends ErrorCodes {
	result: {
		data: Array<retHMBuildableSearchData>;
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

export interface HarbormasterBuildplanSearch extends BeforeAfterLimit {
	queryKey?: 'all';
	constraints?: {
		ids?: Array<number>;
		phids?: Array<phid>;
		match?: string;
		statuses?: ['active' | 'disabled'];
		subscribers?: Array<string>;
		projects?: Array<string>;
	};
	order?: 'newest' | 'oldest';
}

interface retHMBuildplanSearchData extends RetSearchConstants {
	fields: {
		name: string;
		status: object;
		behaviors: {
			'hold-drafts': { value: string };
			'arc-land': { value: string };
			buildable: { value: string };
			restartable: { value: string };
			runnable: { value: string };
		};
		dateCreated: number;
		dateModified: number;
		policy: { view: string; edit: string };
	};
}

export interface RetHarbormasterBuildplanSearch extends ErrorCodes {
	result: {
		data: Array<retHMBuildplanSearchData>;
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

interface hmBuildplanEditTransactions {
	type:
		| 'name'
		| 'behavior.hold-drafts'
		| 'behavior.arc-land'
		| 'behavior.buildable'
		| 'behavior.restartable'
		| 'behavior.runnable'
		| 'view'
		| 'edit'
		| 'projects.add'
		| 'projects.remove'
		| 'projects.set'
		| 'subscribers.add'
		| 'subscribers.remove'
		| 'subscribers.set'
		| 'mfa';
	value: any;
}

export interface HarbormasterBuildplanEdit {
	transactions: Array<hmBuildplanEditTransactions>;
	objectIdentifier: string | number;
}

export interface HarbormasterLogSearch extends BeforeAfterLimit {
	queryKey?: 'all';
	constraints?: {
		ids?: Array<number>;
		phids?: Array<phid>;
		buildTargetPHIDs?: Array<phid>;
	};
	order?: 'newest' | 'oldest';
}

interface retHMLogSearchData extends RetSearchConstants {
	fields: {
		buildTargetPHID: phid;
		byteLength: number;
		filePHID: phid;
		dateCreated: number;
		dateModified: number;
		policy: { view: string; edit: string };
	};
}

export interface RetHarbormasterLogSearch extends ErrorCodes {
	result: {
		data: Array<retHMLogSearchData>;
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

export interface HarbormasterTargetSearch extends BeforeAfterLimit {
	queryKey?: 'all';
	constraints?: {
		ids?: Array<number>;
		phids?: Array<phid>;
		buildPHIDs?: Array<phid>;
	};
	order?: 'newest' | 'oldest';
}

interface retHMTargetSearchData extends RetSearchConstants {
	fields: {
		name: string;
		buildPHID: phid;
		buildStepPHID: phid;
		status: object;
		epochStarted: number;
		epochCompleted: number;
		buildGeneration: number;
		dateCreated: number;
		dateModified: number;
		policy: { view: string; edit: string };
	};
}

export interface RetHarbormasterTargetSearch extends ErrorCodes {
	result: {
		data: Array<retHMTargetSearchData>;
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

export interface HarbormasterCreateartifact {
	buildTargetPHID: phid;
	artifactKey: string;
	artifactType: 'host' | 'working-copy' | 'file' | 'uri';
	artifactData: {
		drydockLeasePHID?: phid;
		filePHID?: phid;
		uri?: string;
		name?: string;
		'ui.external'?: boolean;
	};
}

export interface HarbormasterQuerybuildables extends BeforeAfterLimit {
	ids?: Array<string>;
	phids?: Array<phid>;
	buildablePHIDs?: Array<phid>;
	containerPHIDs?: Array<phid>;
	manualBuildables?: boolean;
}

interface hmSendMessageUnit {
	name: string;
	result: 'pass' | 'fail' | 'skip' | 'broken' | 'unsound';
	namespace?: string;
	engine?: string;
	duration?: number;
	path?: string;
	coverage?: object;
	details?: string;
	format?: string;
}

interface hmSendMessageLint {
	name: string;
	code: string;
	severity: 'advice' | 'autofix' | 'warning' | 'error' | 'disabled';
	path: string;
	line?: number;
	char?: number;
	description?: string;
}

export interface HarbormasterSendmessage {
	buildTargetPHID: phid;
	type: 'pass' | 'fail' | 'work';
	unit: Array<hmSendMessageUnit>;
	lint: Array<hmSendMessageLint>;
}
