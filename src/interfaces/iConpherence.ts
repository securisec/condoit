import { ErrorCodes, phid } from './iGlobal';

export interface ConperhenceCreatethread {
	title: string;
	topic?: string;
	message?: string;
	participantPHIDs: Array<phid>;
}

export interface RetConperhenceCreatethread {
	conpherenceID: string;
	conpherencePHID: phid;
	conpherenceURI: string;
}

interface conpherenceEditTransactions {
	type:
		| 'name'
		| 'topic'
		| 'participants.add'
		| 'participants.remove'
		| 'participants.set'
		| 'view'
		| 'edit'
		| 'comment'
		| 'mfa';
	value: any;
}

export interface ConperhenceEdit {
	transactions: Array<conpherenceEditTransactions>;
	objectIdentifier: number | string;
}

export interface ConpherenceQuerythread {
	ids?: Array<number>;
	phids?: Array<phid>;
	offset?: number;
	limit?: number;
}

export interface RetConpherenceQuerythread extends ErrorCodes {
	result: {
		[id: string]: {
			conpherenceID: string;
			conpherencePHID: phid;
			conpherenceTitle: string;
			messageCount: string;
			conpherenceURI: string;
		};
	};
}

export interface ConpherenceQuerytransaction {
	roomID?: number;
	roomPHID?: phid;
	offset?: number;
	limit?: number;
}

export interface RetConpherenceQuerytransaction extends ErrorCodes {
	result: {
		[index: string]: {
			transactionID: string;
			transactionType: string;
			transactionTitle: string;
			transactionComment: string;
			transactionOldValue: string;
			transactionNewValue: string;
			transactionMetadata: {
				'core.groupID': string;
			};
			authorPHID: phid;
			dateCreated: string;
			roomID: string;
			roomPHID: phid;
		};
	};
}

export interface ConperhenceUpdatethread {
	id: string;
	phid: phid;
	title: string;
	message: string;
	addParticipantPHIDs: Array<phid>;
	removeParticipantPHIDs: Array<phid>;
}
