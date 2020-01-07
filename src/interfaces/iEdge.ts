import { BeforeAfterLimit } from './iGlobal';

export interface EdgeSearch extends BeforeAfterLimit {
	sourcePHIDs: Array<string>;
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
	destinationPHIDs?: Array<string>;
}
