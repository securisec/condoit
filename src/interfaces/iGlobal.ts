interface transactionsObject {
	phid: string;
}

export interface Transactions extends ErrorCodes {
	result: {
		object: { id: number; phid: string };
		transactions: Array<transactionsObject>;
	};
}

interface ErrorCodes {
	error_code: string;
	error_info: string;
}

export interface RetSearchConstants {
	id: number;
	type: string;
	phid: string;
}

export interface BeforeAfterLimit {
	before?: string;
	after?: string;
	limit?: number;
}

export interface GenericReturn extends ErrorCodes {
	result: object;
}

export { ErrorCodes };
