import { ErrorCodes } from './iGlobal';

interface retAuditQueryData {
	id: string;
	commitPHID: string;
	authorPHID: string;
	reasons: Array<string>;
	status: string;
}

export interface RetAuditQuery extends ErrorCodes {
	result: Array<retAuditQueryData>;
}

export interface AuditQuery {
	authorPHIDs?: Array<string>;
	commitPHIDs?: Array<string>;
	status?:
		| 'audit-status-any'
		| 'audit-status-open'
		| 'audit-status-concern'
		| 'audit-status-accepted'
		| 'audit-status-partial';
	offset?: number;
	limit?: number;
}
