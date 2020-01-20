import {
	ErrorCodes,
	RetSearchConstants,
	BeforeAfterLimit,
	phid
} from './iGlobal';

export interface ManiphestCreatetask {
	title: string;
	description?: string;
	ownerPHID?: phid;
	viewPolicy?: string;
	editPolicy?: string;
	ccPHIDs?: Array<phid>;
	priority?: number;
	projectPHIDs?: Array<phid>;
	auxiliary: object;
}

export interface RetManiphestCreatetask extends ErrorCodes {
	result: {
		id: string | number;
		phid: phid;
		authorPHID: phid;
		ownerPHID: phid;
		ccPHIDs: Array<phid>;
		status: string;
		statusName: string;
		isClosed: boolean;
		priority: string;
		priorityColor: string;
		title: string;
		description: string;
		projectPHIDs: Array<phid>;
		uri: string;
		auxiliary: object;
		objectName: string;
		dateCreated: string | number;
		dateModified: string | number;
		dependsOnTaskPHIDs: Array<phid>;
	};
}

interface ManiphestEditTransactions {
	type:
		| 'parent'
		| 'column'
		| 'space'
		| 'title'
		| 'owner'
		| 'status'
		| 'priority'
		| 'description'
		| 'parents.add'
		| 'parents.remove'
		| 'parents.set'
		| 'subtasks.add'
		| 'subtasks.remove'
		| 'subtasks.set'
		| 'commits.add'
		| 'commits.remove'
		| 'commits.set'
		| 'view'
		| 'edit'
		| 'projects.add'
		| 'projects.remove'
		| 'projects.set'
		| 'subscribers.add'
		| 'subscribers.remove'
		| 'subscribers.set'
		| 'subtype'
		| 'commnet'
		| 'mfa';
	value: any;
}

export interface ManiphestEdit {
	transactions: Array<ManiphestEditTransactions>;
	objectIdentifier: number | string;
}

interface maniphestGettasktransactions {
	taskID: string;
	transactionID: string;
	transactionPHID: phid;
	transactionType: string;
	oldValue: string;
	newValue: string;
	comments: string;
	authorPHID: phid;
	dateCreated: string;
}

export interface RetManiphestGettasktransactions extends ErrorCodes {
	result: {
		[id: string]: Array<maniphestGettasktransactions>;
	};
}

export interface RetManiphestInfo extends ErrorCodes {
	result: {
		id: string;
		phid: phid;
		authorPHID: phid;
		ownerPHID: phid;
		ccPHIDs: Array<phid>;
		status: string;
		statusName: string;
		test: Array<string>;
		isClosed: boolean;
		priority: string;
		priorityColor: string;
		title: string;
		description: string;
		projectPHIDs: Array<phid>;
		uri: string;
		auxiliary: object;
		objectName: string;
		dateCreated: string;
		dateModified: string;
		dependsOnTaskPHIDs: Array<phid>;
	};
}

interface maniphestPrioritysearchData {
	name: string;
	keywords: Array<string>;
	short: string;
	color: string;
	value: number;
}

export interface RetManiphestPrioritySearch extends ErrorCodes {
	result: {
		data: Array<maniphestPrioritysearchData>;
	};
}

export interface ManiphestQuery {
	ids?: Array<number>;
	phids?: Array<phid>;
	ownerPHIDs?: Array<phid>;
	authorPHIDs?: Array<phid>;
	projectPHIDs?: Array<phid>;
	ccPHIDs?: Array<phid>;
	fullText?: string;
	status?:
		| 'status-any'
		| 'status-open'
		| 'status-closed'
		| 'status-resolved'
		| 'status-wontfix'
		| 'status-invalid'
		| 'status-spite'
		| 'status-duplicate';
	order?: 'order-priority' | 'order-created' | 'order-modified';
	limit?: number;
	offset?: number;
}

export interface RetManiphestQuery extends ErrorCodes {
	result: {
		[phid: string]: {
			id: string;
			phid: phid;
			authorPHID: phid;
			ownerPHID: phid;
			ccPHIDs: Array<phid>;
			status: string;
			statusName: string;
			isClosed: false;
			priority: string;
			priorityColor: string;
			title: string;
			description: string;
			projectPHIDs: Array<phid>;
			uri: string;
			auxiliary: object;
			objectName: string;
			dateCreated: string;
			dateModified: string;
			dependsOnTaskPHIDs: Array<phid>;
		};
	};
}

export interface RetManiphestQuerystatuses extends ErrorCodes {
	result: {
		defaultStatus: string;
		defaultClosedStatus: string;
		duplicateStatus: string;
		openStatuses: Array<string>;
		closedStatuses: {
			[index: string]: string;
		};
		allStatuses: Array<string>;
		statusMap: {
			open: string;
			resolved: string;
			wontfix: string;
			invalid: string;
			duplicate: string;
			spite: string;
		};
	};
}

export interface ManiphestSearch extends BeforeAfterLimit {
	queryKey?: 'assigned' | 'authored' | 'subscribed' | 'open' | 'all';
	constraints?: {
		ids?: Array<number>;
		phids?: Array<phid>;
		assigned?: Array<string>;
		authorPHIDs?: Array<phid>;
		statuses?: [
			'open' | 'resolved' | 'wontfix' | 'invalid' | 'duplicate' | 'spite'
		];
		priorities?: Array<number>;
		subtypes?: Array<string>;
		columnPHIDs?: Array<phid>;
		hasParents?: boolean;
		hasSubtasks?: boolean;
		parentIDs?: Array<number>;
		subtaskIDs?: Array<number>;
		createdStart?: number;
		createdEnd?: number;
		modifiedStart?: number;
		modifiedEnd?: number;
		closedStart?: number;
		closedEnd?: number;
		closerPHIDs?: Array<phid>;
		query?: string;
		subscribers?: Array<string>;
		projects?: Array<string>;
	};
	attachments?: {
		columns?: boolean;
		subscribers?: boolean;
		projects?: boolean;
	};
	order?:
		| 'priority'
		| 'updated'
		| 'outdated'
		| 'newest'
		| 'oldest'
		| 'closed'
		| 'title'
		| 'relevance'
		| [string];
}

interface retManiphestSearchData extends RetSearchConstants {
	fields: {
		name: string;
		description: { raw: string };
		authorPHID: phid;
		ownerPHID: phid;
		status: { value: string; color: string };
		priority: { value: number; name: string };
		points: number;
		subtype: string;
		closerPHID: phid;
		dateClosed: number;
		spacePHID: phid;
		dateCreated: number;
		dateModified: number;
		policy: { view: string };
	};
	attachments: object;
}

export interface RetManiphestSearch extends ErrorCodes {
	result: {
		data: Array<retManiphestSearchData>;
		maps: object;
		query: { queryKey: string };
		cursor: { limit: number; after: string; before: string; order: string };
	};
}

interface retManiphestStatusSearchData {
	name: string;
	value: string;
	closed: boolean;
	special: string;
}

export interface RetManiphestStatusSearch extends ErrorCodes {
	result: {
		data: Array<retManiphestStatusSearchData>;
	};
}

export interface ManiphestUpdate {
	id?: number;
	phid?: phid;
	title?: string;
	description?: string;
	ownerPHID?: phid;
	viewPolicy?: string;
	editPolicy?: string;
	ccPHIDs?: Array<phid>;
	priority?: number;
	projectPHIDs?: Array<phid>;
	auxiliary?: object;
	status?: string;
	comments?: string;
}

export interface RetManiphestUpdate extends ErrorCodes {
	result: {
		id: string;
		phid: phid;
		authorPHID: phid;
		ownerPHID: phid;
		ccPHIDs: Array<phid>;
		status: string;
		statusName: string;
		isClosed: false;
		priority: string;
		priorityColor: string;
		title: string;
		description: string;
		projectPHIDs: Array<phid>;
		uri: string;
		auxiliary: Array<object>;
		objectName: string;
		dateCreated: string;
		dateModified: string;
		dependsOnTaskPHIDs: Array<phid>;
	};
}
