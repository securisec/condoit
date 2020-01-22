import {
	ErrorCodes,
	RetSearchConstants,
	BeforeAfterLimit,
	phid
} from './iGlobal';

export interface ColumnSearch {
	queryKey?: string;
	constraints?: {
		ids?: Array<number>;
		phids?: Array<phid>;
		projects?: Array<string>;
	};
	order?: 'newest' | 'oldest';
}

export interface prjectRetColumnSearchData extends RetSearchConstants {
	fields: {
		name: string;
		proxyPHID: phid;
		project: {
			id: number;
			phid: phid;
			name: string;
		};
		dateCreated: number;
		dateModified: number;
		policy: { view: string };
	};
	attachments: object;
}

export interface RetColumnSearch extends ErrorCodes {
	result: {
		data: Array<prjectRetColumnSearchData>;
		maps: object;
		query: { queryKey: string };
		cursor: { limit: number; after: string; before: string; order: string };
	};
}

export interface projectEditTransactionsType {
	type:
		| 'parent'
		| 'milestone'
		| 'space'
		| 'name'
		| 'description'
		| 'icon'
		| 'color'
		| 'slugs'
		| 'members.add'
		| 'members.remove'
		| 'members.set'
		| 'view'
		| 'edit'
		| 'join'
		| 'subtype'
		| 'mfa';
	value: any;
}

export interface ProjectEdit {
	transactions: Array<projectEditTransactionsType>;
	objectIdentifier: number | string;
}

export interface ProjectQuery {
	ids: Array<number>;
	names: Array<string>;
	phids: Array<phid>;
	slugs: Array<string>;
	icons: Array<string>;
	colors: Array<string>;
	status:
		| 'status-any'
		| 'status-open'
		| 'status-closed'
		| 'status-active'
		| 'status-archived';
	members: Array<string>;
	limit: number;
	offset: number;
}

export interface RetProjectQuery extends ErrorCodes {
	result: {
		data: {
			[phid: string]: {
				id: string;
				phid: phid;
				name: string;
				profileImagePHID: phid;
				icon: string;
				color: string;
				members: Array<string>;
				slugs: Array<string>;
				dateCreated: string;
				dateModified: string;
			};
		};
		slugMap: Array<string>;
		cursor: { limit: number; after: string; before: string };
	};
}

export interface ProjectSearch extends BeforeAfterLimit {
	queryKey?: 'joined' | 'watching' | 'active' | 'all';
	constraints?: {
		ids?: Array<number>;
		phids?: Array<phid>;
		name?: string;
		slugs?: Array<string>;
		members?: Array<string>;
		watchers?: Array<string>;
		isMilestone?: boolean;
		isRoot?: boolean;
		minDepth?: number;
		maxDepth?: number;
		subtypes?: Array<string>;
		icons?: [
			| 'project'
			| 'tag'
			| 'policy'
			| 'group'
			| 'folder'
			| 'timeline'
			| 'goal'
			| 'release'
			| 'bugs'
			| 'cleanup'
			| 'umbrella'
			| 'communication'
			| 'organization'
			| 'infrastructure'
			| 'account'
			| 'experimental'
		];
		colors?: [
			| 'red'
			| 'orange'
			| 'yellow'
			| 'green'
			| 'blue'
			| 'indigo'
			| 'violet'
			| 'pink'
			| 'grey'
			| 'checkered'
		];
		parents?: Array<string>;
		ancestors?: Array<string>;
		query?: string;
	};
	attachments?: {
		members?: boolean;
		watchers?: boolean;
		ancestors?: boolean;
	};
	order?:
		| 'id'
		| 'rank'
		| 'fulltext-created'
		| 'fulltext-modified'
		| 'name'
		| 'milestoneNumber'
		| 'status';
}

export interface retProjectSearchData extends RetSearchConstants {
	fields: {
		name: string;
		slug: string;
		subtype: string;
		milestone: string;
		depth: number;
		parent: string;
		icon: { key: string };
		color: { key: string };
		spacePHID: phid;
		dateCreated: number;
		dateModified: number;
		policy: { view: string };
		description: string;
	};
	attachments: object;
}

export interface RetProjectSearch extends ErrorCodes {
	result: {
		data: Array<retProjectSearchData>;
		maps: { slugMap: object };
		query: { queryKey: string };
		cursor: { limit: number; after: string; before: string; order: string };
	};
}
