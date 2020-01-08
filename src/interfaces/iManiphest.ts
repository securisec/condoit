import { ErrorCodes, RetSearchConstants, BeforeAfterLimit } from './iGlobal';

export interface ManiphestCreatetask {
	title: string;
	description?: string;
	ownerPHID?: string;
	viewPolicy?: string;
	editPolicy?: string;
	ccPHIDs?: Array<string>;
	priority?: number;
	projectPHIDs?: Array<string>;
	auxiliary: object;
}

export interface RetManiphestCreatetask extends ErrorCodes {
	result: {
		id: string | number;
		phid: string;
		authorPHID: string;
		ownerPHID: string;
		ccPHIDs: Array<string>;
		status: string;
		statusName: string;
		isClosed: boolean;
		priority: string;
		priorityColor: string;
		title: string;
		description: string;
		projectPHIDs: Array<string>;
		uri: string;
		auxiliary: object;
		objectName: string;
		dateCreated: string | number;
		dateModified: string | number;
		dependsOnTaskPHIDs: Array<string>;
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
	transactionPHID: string;
	transactionType: string;
	oldValue: string;
	newValue: string;
	comments: string;
	authorPHID: string;
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
		phid: string;
		authorPHID: string;
		ownerPHID: string;
		ccPHIDs: Array<string>;
		status: string;
		statusName: string;
		test: Array<string>;
		isClosed: boolean;
		priority: string;
		priorityColor: string;
		title: string;
		description: string;
		projectPHIDs: Array<string>;
		uri: string;
		auxiliary: object;
		objectName: string;
		dateCreated: string;
		dateModified: string;
		dependsOnTaskPHIDs: Array<string>;
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
	phids?: Array<string>;
	ownerPHIDs?: Array<string>;
	authorPHIDs?: Array<string>;
	projectPHIDs?: Array<string>;
	ccPHIDs?: Array<string>;
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
			phid: string;
			authorPHID: string;
			ownerPHID: string;
			ccPHIDs: Array<string>;
			status: string;
			statusName: string;
			isClosed: false;
			priority: string;
			priorityColor: string;
			title: string;
			description: string;
			projectPHIDs: Array<string>;
			uri: string;
			auxiliary: object;
			objectName: string;
			dateCreated: string;
			dateModified: string;
			dependsOnTaskPHIDs: Array<string>;
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
		phids?: Array<string>;
		assigned?: Array<string>;
		authorPHIDs?: Array<string>;
		statuses?: [
			'open' | 'resolved' | 'wontfix' | 'invalid' | 'duplicate' | 'spite'
		];
		priorities?: Array<number>;
		subtypes?: Array<string>;
		columnPHIDs?: Array<string>;
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
		closerPHIDs?: Array<string>;
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
		authorPHID: string;
		ownerPHID: string;
		status: { value: string; color: string };
		priority: { value: number; name: string };
		points: number;
		subtype: string;
		closerPHID: string;
		dateClosed: number;
		spacePHID: number;
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
	phid?: string;
	title?: string;
	description?: string;
	ownerPHID?: string;
	viewPolicy?: string;
	editPolicy?: string;
	ccPHIDs?: Array<string>;
	priority?: number;
	projectPHIDs?: Array<string>;
	auxiliary?: object;
	status?: string;
	comments?: string;
}

export interface RetManiphestUpdate extends ErrorCodes {
	result: {
		id: string;
		phid: string;
		authorPHID: string;
		ownerPHID: string;
		ccPHIDs: Array<string>;
		status: string;
		statusName: string;
		isClosed: false;
		priority: string;
		priorityColor: string;
		title: string;
		description: string;
		projectPHIDs: Array<string>;
		uri: string;
		auxiliary: Array<object>;
		objectName: string;
		dateCreated: string;
		dateModified: string;
		dependsOnTaskPHIDs: Array<string>;
	};
}
