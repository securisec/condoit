import { ErrorCodes } from './iGlobal';

export interface ConperhenceCreatethread {
	title: string;
	topic?: string;
	message?: string;
	participantPHIDs: Array<string>;
}

export interface RetConperhenceCreatethread {
	conpherenceID: string;
	conpherencePHID: string;
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
	phids?: Array<string>;
	offset?: number;
	limit?: number;
}

export interface RetConpherenceQuerythread extends ErrorCodes {
	result: {
		[id: string]: {
			conpherenceID: string;
			conpherencePHID: string;
			conpherenceTitle: string;
			messageCount: string;
			conpherenceURI: string;
		};
	};
}

export interface ConpherenceQuerytransaction {
	roomID?: number;
	roomPHID?: string;
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
			authorPHID: string;
			dateCreated: string;
			roomID: string;
			roomPHID: string;
		};
	};
}

export interface ConperhenceUpdatethread {
	id: string;
	phid: string;
	title: string;
	message: string;
	addParticipantPHIDs: Array<string>;
	removeParticipantPHIDs: Array<string>;
}
