export interface HarbormasterArtifactSearch {
	queryKey?: 'all';
	constraints?: {
		ids?: Array<number>;
		phids?: Array<string>;
		buildTargetPHIDs?: Array<string>;
	};
	order?: 'newest' | 'oldest';
	before?: string;
	after?: string;
	limit?: number;
}

type retHMArtifaceSearchData = {
	id: number;
	type: string;
	phid: string;
	fields: {
		buildTargetPHID: string;
		artifactType: string;
		artifactKey: string;
		isReleased: boolean;
		dateCreated: number;
		dateModified: number;
		policy: { view: string; edit: string };
	};
};

export interface RetHarbormasterArtifactSearch {
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
	error_code: any;
	error_info: any;
}

export interface HarbormasterBuildSearch {
	queryKey?: 'all' | 'initiated' | 'waiting' | 'active' | 'completed';
	constraints?: {
		ids?: Array<number>;
		phids?: Array<string>;
		plans?: Array<string>;
		buildables?: Array<string>;
		statuses?: Array<string>;
		initiators?: Array<string>;
	};
	order?: 'newest' | 'oldest';
	before?: string;
	after?: string;
	limit?: number;
}

type retHMBuildSearchData = {
	id: number;
	type: string;
	phid: string;
	fields: {
		buildablePHID: string;
		buildPlanPHID: string;
		buildStatus: object;
		initiatorPHID: string;
		name: string;
		dateCreated: number;
		dateModified: number;
		policy: { view: string; edit: string };
	};
};

export interface RetHarbormasterBuildSearch {
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
	error_code: any;
	error_info: any;
}

export interface HarbormasterBuildableSearch {
	queryKey?: 'all';
	constraints?: {
		ids?: Array<number>;
		phids?: Array<string>;
		objectPHIDs?: Array<string>;
		containerPHIDs?: Array<string>;
		statuses?: ['preparing' | 'building' | 'passed' | 'failed'];
		manual?: boolean;
	};
	order?: 'newest' | 'oldest';
	before?: string;
	after?: string;
	limit?: number;
}

type retHMBuildableSearchData = {
	id: number;
	type: string;
	phid: string;
	fields: {
		objectPHID: string;
		containerPHID: string;
		buildableStatus: object;
		isManual: boolean;
		dateCreated: number;
		dateModified: number;
		policy: { view: string; edit: string };
	};
};

export interface RetHarbormasterBuildableSearch {
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
	error_code: any;
	error_info: any;
}

export interface HarbormasterBuildplanSearch {
	queryKey?: 'all';
	constraints?: {
		ids?: Array<number>;
		phids?: Array<string>;
		match?: string;
		statuses?: ['active' | 'disabled'];
		subscribers?: Array<string>;
		projects?: Array<string>;
	};
	order?: 'newest' | 'oldest';
	before?: string;
	after?: string;
	limit?: number;
}

type retHMBuildplanSearchData = {
	id: number;
	type: string;
	phid: string;
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
};

export interface RetHarbormasterBuildplanSearch {
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
	error_code: any;
	error_info: any;
}

type hmBuildplanEditTransactions = {
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
	value: string | boolean;
};

export interface HarbormasterBuildplanEdit {
	transactions: Array<hmBuildplanEditTransactions>;
	objectIdentifier: string | number;
}

export interface HarbormasterLogSearch {
	queryKey?: 'all';
	constraints?: {
		ids?: Array<number>;
		phids?: Array<string>;
		buildTargetPHIDs?: Array<string>;
	};
	order?: 'newest' | 'oldest';
	before?: string;
	after?: string;
	limit?: number;
}

type retHMLogSearchData = {
	id: number;
	type: string;
	phid: string;
	fields: {
		buildTargetPHID: string;
		byteLength: number;
		filePHID: string;
		dateCreated: number;
		dateModified: number;
		policy: { view: string; edit: string };
	};
};

export interface RetHarbormasterLogSearch {
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
	error_code: any;
	error_info: any;
}

export interface HarbormasterTargetSearch {
	queryKey?: 'all';
	constraints?: {
		ids?: Array<number>;
		phids?: Array<string>;
		buildPHIDs?: Array<string>;
	};
	order?: 'newest' | 'oldest';
	before?: string;
	after?: string;
	limit?: number;
}

type retHMTargetSearchData = {
	id: number;
	type: string;
	phid: string;
	fields: {
		name: string;
		buildPHID: string;
		buildStepPHID: string;
		status: object;
		epochStarted: number;
		epochCompleted: number;
		buildGeneration: number;
		dateCreated: number;
		dateModified: number;
		policy: { view: string; edit: string };
	};
};

export interface RetHarbormasterTargetSearch {
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
	error_code: any;
	error_info: any;
}

export interface HarbormasterCreateartifact {
	buildTargetPHID: string;
	artifactKey: string;
	artifactType: 'host' | 'working-copy' | 'file' | 'uri';
	artifactData: {
		drydockLeasePHID?: string;
		filePHID?: string;
		uri?: string;
		name?: string;
		'ui.external'?: boolean;
	};
}

export interface HarbormasterQuerybuildables {
	ids?: Array<string>;
	phids?: Array<string>;
	buildablePHIDs?: Array<string>;
	containerPHIDs?: Array<string>;
	manualBuildables?: boolean;
	before?: string;
	after?: string;
	limit?: number;
}

type hmSendMessageUnit = {
	name: string;
	result: 'pass' | 'fail' | 'skip' | 'broken' | 'unsound';
	namespace?: string;
	engine?: string;
	duration?: number;
	path?: string;
	coverage?: object;
	details?: string;
	format?: string;
};

type hmSendMessageLint = {
	name: string;
	code: string;
	severity: 'advice' | 'autofix' | 'warning' | 'error' | 'disabled';
	path: string;
	line?: number;
	char?: number;
	description?: string;
};

export interface HarbormasterSendmessage {
	buildTargetPHID: string;
	type: 'pass' | 'fail' | 'work';
	unit: Array<hmSendMessageUnit>;
	lint: Array<hmSendMessageLint>;
}
