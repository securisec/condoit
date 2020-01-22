import { ErrorCodes, phid } from './iGlobal';

export interface retAuditQueryData {
	id: string;
	commitPHID: phid;
	authorPHID: phid;
	reasons: Array<string>;
	status: string;
}

export interface RetAuditQuery extends ErrorCodes {
	result: Array<retAuditQueryData>;
}

export interface AuditQuery {
	authorPHIDs?: Array<phid>;
	commitPHIDs?: Array<phid>;
	status?:
		| 'audit-status-any'
		| 'audit-status-open'
		| 'audit-status-concern'
		| 'audit-status-accepted'
		| 'audit-status-partial';
	offset?: number;
	limit?: number;
}
