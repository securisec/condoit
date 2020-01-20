import { phid } from './iGlobal';

export interface WebhookParse {
	object: {
		type: string;
		phid: phid;
	};
	triggers: Array<phid>;
	action: {
		test: boolean;
		silent: boolean;
		secure: boolean;
		epoch: number;
	};
	transactions: Array<phid>;
}
