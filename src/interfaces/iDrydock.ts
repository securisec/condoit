import {
	BeforeAfterLimit,
	ErrorCodes,
	RetSearchConstants,
	phid
} from './iGlobal';

export interface DrydockAlmanacSearch extends BeforeAfterLimit {
	queryKey?: 'active' | 'all';
	constraints?: {
		ids?: Array<number>;
		phids?: Array<phid>;
		blueprintPHIDs?: Array<string>;
		objectPHIDs?: Array<phid>;
	};
	order?: 'newest' | 'oldest';
}

interface retDDAlmanacSearchData extends RetSearchConstants {
	fields: {
		blueprintPHID: phid;
		blueprintAuthorizationState: object;
		objectPHID: phid;
		objectAuthorizationState: object;
		dateCreated: number;
		dateModified: number;
		policy: { view: string; edit: string };
	};
}

export interface RetDDAlmanacSearch extends ErrorCodes {
	result: {
		data: Array<retDDAlmanacSearchData>;
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

export interface DrydockBlueprintSearch extends BeforeAfterLimit {
	queryKey?: 'active' | 'all';
	constraints?: {
		ids?: Array<number>;
		phids?: Array<phid>;
		match?: string;
		isDisabled?: boolean;
		projects?: Array<string>;
	};
	attachments: {
		projects: boolean;
	};
	order?: 'newest' | 'oldest';
}

interface retDDBlueprintSearchData extends RetSearchConstants {
	fields: {
		name: string;
		type: string;
		dateCreated: number;
		dateModified: number;
		policy: { view: string; edit: string };
	};
}

export interface RetDDBlueprintSearch extends ErrorCodes {
	result: {
		data: Array<retDDBlueprintSearchData>;
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

export interface DrydockLeaseSearch extends BeforeAfterLimit {
	queryKey?: 'active' | 'all';
	constraints?: {
		ids?: Array<number>;
		phids?: Array<phid>;
		statuses?: [
			'pending' | 'acquired' | 'active' | 'released' | 'broken' | 'destroyed'
		];
		ownerPHIDs?: Array<phid>;
		resourcePHIDs?: Array<phid>;
	};
	order?: 'newest' | 'oldest';
}

interface retDDLeaseSearchData extends RetSearchConstants {
	fields: {
		resourcePHID: phid;
		resourceType: string;
		until: number;
		ownerPHID: phid;
		authorizingPHID: phid;
		status: object;
		dateCreated: number;
		dateModified: number;
		policy: { view: string; edit: string };
	};
}

export interface RetDDLeaseSearch extends ErrorCodes {
	result: {
		data: Array<retDDLeaseSearchData>;
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

export interface DrydockResourceSearch extends BeforeAfterLimit {
	queryKey?: 'active' | 'all';
	constraints?: {
		ids?: Array<number>;
		phids?: Array<phid>;
		statuses?: [
			'pending' | 'acquired' | 'active' | 'released' | 'broken' | 'destroyed'
		];
		blueprintPHIDs?: Array<phid>;
	};
	order?: 'newest' | 'oldest';
}

interface retDDResourceSearchData extends RetSearchConstants {
	fields: {
		blueprintPHID: phid;
		status: object;
		dateCreated: number;
		dateModified: number;
		policy: { view: string; edit: string };
	};
}

export interface RetDDResourceSearch extends ErrorCodes {
	result: {
		data: Array<retDDResourceSearchData>;
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

interface blueprintEditTrans {
	type:
		| 'type'
		| 'name'
		| 'view'
		| 'edit'
		| 'projects.add'
		| 'projects.remove'
		| 'projects.set'
		| 'custom.blueprintPHIDs'
		| 'custom.allocator.limit'
		| 'mfa';
	value: any;
}

export interface DrydockBlueprintEdit {
	transactions: Array<blueprintEditTrans>;
	objectIdentifier?: string | number;
}
