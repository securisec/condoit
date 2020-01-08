import { BeforeAfterLimit, RetSearchConstants, ErrorCodes } from './iGlobal';

export interface AlmanacBindingSearch extends BeforeAfterLimit {
	queryKey?: 'all';
	constraints?: {
		ids?: Array<number>;
		phids?: Array<string>;
		servicePHIDs?: string;
		devicePHIDs?: Array<string>;
	};
	attachments?: {
		properties: boolean;
	};
	order?: 'newest' | 'oldest';
}

interface retAlmanacBindingSearchData extends RetSearchConstants {
	fields: {
		servicePHID: string;
		devicePHID: string;
		interfacePHID: string;
		disabled: boolean;
		dateCreated: number;
		dateModified: number;
		policy: { view: string; edit: string };
	};
	attachments: object;
}

export interface RetAlmanacBindingSearch extends ErrorCodes {
	result: {
		data: Array<retAlmanacBindingSearchData>;
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

export interface AlmanacDeviceSearch extends BeforeAfterLimit {
	queryKey?: 'all';
	constraints?: {
		ids?: Array<number>;
		phids?: Array<string>;
		match?: string;
		names?: Array<string>;
		isClusterDevice: boolean;
		devicePHIDs?: Array<string>;
	};
	attachments?: {
		properties: boolean;
		projects: boolean;
	};
	order?: 'name' | 'newest' | 'oldest';
}

interface retAlmanacDeviceSearchData extends RetSearchConstants {
	fields: {
		name: string;
		dateCreated: number;
		dateModified: number;
		policy: { view: string; edit: string };
	};
	attachments: {
		properties: { properties: Array<string> };
		projects: {
			projects: Array<{ key: string; value: string; builtin: boolean }>;
		};
	};
}

export interface RetAlmanacDeviceSearch extends ErrorCodes {
	result: {
		data: Array<retAlmanacDeviceSearchData>;
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

export interface AlmanacInterfaceSearch extends BeforeAfterLimit {
	queryKey?: 'all';
	constraints?: {
		ids?: Array<number>;
		phids?: Array<string>;
		devicePHIDs?: Array<string>;
	};
	order?: 'name' | 'newest' | 'oldest';
}

interface retAlmanacInterfaceSearchData extends RetSearchConstants {
	fields: {
		name: string;
		dateCreated: number;
		dateModified: number;
		policy: { view: string; edit: string };
	};
}

export interface RetAlmanacInterfaceSearch extends ErrorCodes {
	result: {
		data: Array<retAlmanacInterfaceSearchData>;
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

export interface AlmanacNamespaceSearch extends BeforeAfterLimit {
	queryKey?: 'all';
	constraints?: {
		ids?: Array<number>;
		phids?: Array<string>;
		match?: string;
		projects?: Array<string>;
	};
	attachments: { projects: boolean };
	order?: 'newest' | 'oldest';
}

interface retAlmanacNamespaceSearchData extends RetSearchConstants {
	fields: {
		name: string;
		dateCreated: number;
		dateModified: number;
		policy: { view: string; edit: string };
	};
}

export interface RetAlmanacNamespaceSearch extends ErrorCodes {
	result: {
		data: Array<retAlmanacNamespaceSearchData>;
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

export interface AlmanacNetworkSearch extends BeforeAfterLimit {
	queryKey?: 'all';
	constraints?: {
		ids?: Array<number>;
		phids?: Array<string>;
		match?: string;
	};
	order?: 'newest' | 'oldest';
}

interface retAlmanacNetworkSearchData extends RetSearchConstants {
	fields: {
		name: string;
		dateCreated: number;
		dateModified: number;
		policy: { view: string; edit: string };
	};
}

export interface RetAlmanacNetworkSearch extends ErrorCodes {
	result: {
		data: Array<retAlmanacNetworkSearchData>;
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

export interface AlmanacServiceSearch extends BeforeAfterLimit {
	queryKey?: 'all';
	constraints?: {
		ids?: Array<number>;
		phids?: Array<string>;
		match?: string;
		names?: Array<string>;
		serviceTypes?: Array<string>;
		devicePHIDs?: Array<string>;
		projects?: Array<string>;
	};
	attachments: { projects: boolean; properties: boolean; bindings: boolean };
	order?: 'name' | 'newest' | 'oldest';
}

interface retAlmanacServiceSearchData extends RetSearchConstants {
	fields: {
		name: string;
		serviceType: string;
		dateCreated: number;
		dateModified: number;
		policy: { view: string; edit: string };
	};
	attachments: {
		properties: {
			properties: Array<{ key: string; value: string; builtin: boolean }>;
		};
		projects: { projectPHIDs: Array<string> };
		bindings: { bindings: Array<any> };
	};
}

export interface RetAlmanacServiceSearch extends ErrorCodes {
	result: {
		data: Array<retAlmanacServiceSearchData>;
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

interface almanacBindingEdit {
	type:
		| 'service'
		| 'interface'
		| 'disabled'
		| 'property.set'
		| 'property.delete'
		| 'mfa';
	value: any;
}

export interface AlmanacBindingEdit {
	transactions: Array<almanacBindingEdit>;
	objectIdentifier?: number | string;
}

interface almanacDeviceEdit {
	type:
		| 'name'
		| 'view'
		| 'edit'
		| 'projects.add'
		| 'projects.remove'
		| 'projects.set'
		| 'property.set'
		| 'property.delete'
		| 'mfa';
	value: any;
}

export interface AlmanacDeviceEdit {
	transactions: Array<almanacDeviceEdit>;
	objectIdentifier?: number | string;
}

interface almanacInterfaceEdit {
	type: 'device' | 'network' | 'address' | 'port' | 'mfa';
	value: any;
}

export interface AlmanacInterfaceEdit {
	transactions: Array<almanacInterfaceEdit>;
	objectIdentifier?: number | string;
}

interface almanacNetworkEdit {
	type: 'view' | 'edit' | 'mfa';
	value: any;
}

export interface AlmanacNetworkEdit {
	transactions: Array<almanacNetworkEdit>;
	objectIdentifier?: number | string;
}

interface almanacServiceEdit {
	type:
		| 'name'
		| 'type'
		| 'view'
		| 'edit'
		| 'projects.add'
		| 'projects.remove'
		| 'projects.set'
		| 'property.set'
		| 'property.delete'
		| 'mfa';
	value: any;
}

export interface AlmanacServiceEdit {
	transactions: Array<almanacServiceEdit>;
	objectIdentifier?: number | string;
}
