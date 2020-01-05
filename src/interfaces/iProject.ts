export interface ColumnSearch {
	queryKey?: string;
	constraints?: {
		ids?: Array<number>;
		phids?: Array<string>;
		projects?: Array<string>;
	};
	order?: 'newest' | 'oldest';
	before?: string;
	after?: string;
	limit?: number;
}

type prjectRetColumnSearchData = {
	id: number;
	type: string;
	phid: string;
	fields: {
		name: string;
		proxyPHID: string;
		project: {
			id: number;
			phid: string;
			name: string;
		};
		dateCreated: number;
		dateModified: number;
		policy: { view: string };
	};
	attachments: object;
};

export interface RetColumnSearch {
	result: {
		data: Array<prjectRetColumnSearchData>;
		maps: object;
		query: { queryKey: string };
		cursor: { limit: number; after: string; before: string; order: string };
	};
	error_code: string;
	error_info: string;
}

type projectEditTransactionsType = {
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
	value: string | boolean;
};

export interface ProjectEdit {
	transactions: Array<projectEditTransactionsType>;
	objectIdentifier: number | string;
}

type retEditTransactions = { phid: string };

export interface RetProjectEdit {
	result: {
		object: { id: number; phid: string };
		transactions: Array<retEditTransactions>;
	};
	error_code: string;
	error_info: string;
}

export interface ProjectQuery {
	ids: Array<number>;
	names: Array<string>;
	phids: Array<string>;
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

export interface RetProjectQuery {
	result: {
		data: {
			[phid: string]: {
				id: string;
				phid: string;
				name: string;
				profileImagePHID: string;
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
	error_code: string;
	error_info: string;
}

export interface ProjectSearch {
	queryKey?: 'joined' | 'watching' | 'active' | 'all';
	constraints?: {
		ids?: Array<number>;
		phids?: Array<string>;
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
	before?: string;
	after?: string;
	limit?: number;
}

type retProjectSearchData = {
	id: number;
	type: string;
	phid: string;
	fields: {
		name: string;
		slug: string;
		subtype: string;
		milestone: string;
		depth: number;
		parent: string;
		icon: { key: string };
		color: { key: string };
		spacePHID: string;
		dateCreated: number;
		dateModified: number;
		policy: { view: string };
		description: string;
	};
	attachments: object;
};

export interface RetProjectSearch {
	result: {
		data: Array<retProjectSearchData>;
		maps: { slugMap: object };
		query: { queryKey: string };
		cursor: { limit: number; after: string; before: string; order: string };
	};
	error_code: string;
	error_info: string;
}
