interface Phid {
	phid: string;
}

export interface WebhookParse {
	object: {
		type: string;
		phid: string;
	};
	triggers: Array<Phid>;
	action: {
		test: boolean;
		silent: boolean;
		secure: boolean;
		epoch: number;
	};
	transactions: Array<Phid>;
}
