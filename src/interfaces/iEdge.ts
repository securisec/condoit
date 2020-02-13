import { BeforeAfterLimit, phid, ErrorCodes } from './iGlobal';

export interface RetEdgeSearch extends ErrorCodes {
	result: {
		data: Array<{
			sourcePHID: string;
			edgeType: string;
			destinationPHID: string;
		}>;
		cursor: { limit: number; after: number; before: number };
	};
}

export interface EdgeSearch extends BeforeAfterLimit {
	sourcePHIDs: Array<phid>;
	types: [
		| 'commit.revision'
		| 'commit.task'
		| 'revision.child'
		| 'revision.commit'
		| 'revision.parent'
		| 'revision.task'
		| 'task.commit'
		| 'task.duplicate'
		| 'task.merged'
		| 'task.parent'
		| 'task.revision'
		| 'task.subtask'
	];
	destinationPHIDs?: Array<phid>;
}
