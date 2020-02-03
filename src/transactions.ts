import { faIcons } from './extras/icons';
import { lang } from './extras/paste-lang';

type phid = string;

/**
 *Change the title of the object
 *
 * @param {string} value
 * @returns {object}
 */
const title = (value: string): object => {
	return { type: 'title', value: value };
};

/**
 *Change the view policy of the object.
 *
 * @param {string} value
 * @returns {object}
 */
const view = (value: string): object => {
	return { type: 'view', value: value };
};
/**
 *Change the edit policy of the object.
 *
 * @param {string} value
 * @returns {object}
 */
const edit = (value: string): object => {
	return { type: 'edit', value: value };
};

/**
 *Sign this transaction group with MFA.
 *
 * @param {string} value
 * @returns {object}
 */
const mfa = (value: string): object => {
	return { type: 'mfa', value: value };
};

/**
 *Make comments
 *
 * @param {string} value
 * @returns {object}
 */
const comment = (value: string): object => {
	return { type: 'comment', value: value };
};

const subscribers = {
	/**
	 *Add subscribers.
	 *
	 * @param {Array<phid>} value
	 * @returns {object}
	 */
	add: (value: Array<phid>): object => {
		return { type: 'subscribers.add', value: value };
	},
	/**
	 *Remove subscribers.
	 *
	 * @param {Array<phid>} value
	 * @returns {object}
	 */
	remove: (value: Array<phid>): object => {
		return { type: 'subscribers.remove', value: value };
	},
	/**
	 *Set subscribers, overwriting current value
	 *
	 * @param {Array<phid>} value
	 * @returns {object}
	 */
	set: (value: Array<phid>): object => {
		return { type: 'subscribers.set', value: value };
	}
};

const projects = {
	/**
	 *Add project tags.
	 *
	 * @param {Array<phid>} value
	 * @returns {object}
	 */
	add: (value: Array<phid>): object => {
		return { type: 'projects.add', value: value };
	},
	/**
	 *Remove project tags
	 *
	 * @param {Array<phid>} value
	 * @returns {object}
	 */
	remove: (value: Array<phid>): object => {
		return { type: 'projects.remove', value: value };
	},
	/**
	 *Set project tags
	 *
	 * @param {Array<phid>} value
	 * @returns {object}
	 */
	set: (value: Array<phid>): object => {
		return { type: 'projects.set', value: value };
	}
};

export const transactions = {
	/**
	 * Badge edit transactions
	 */
	badge: {
		/**
		 *Badge name
		 *
		 * @param {string} value
		 * @returns {object}
		 */
		name: (value: string): object => {
			return { type: 'name', value: value };
		},
		/**
		 *Short description of the badge.
		 *
		 * @param {string} value
		 * @returns {object}
		 */
		flavor: (value: string): object => {
			return { type: 'flavor', value: value };
		},
		/**
		 *Change the badge icon.
		 *
		 * @param {faIcons} value
		 * @returns {object}
		 */
		icon: (value: faIcons): object => {
			return { type: 'icon', value: value };
		},
		/**
		 *Color and rarity of the badge.
		 *
		 * @param {('poor'|'common'|'uncommon'|'rare'|'epic'|'legendary'|'heirloom')} value
		 * @returns {object}
		 */
		quality: (
			value:
				| 'poor'
				| 'common'
				| 'uncommon'
				| 'rare'
				| 'epic'
				| 'legendary'
				| 'heirloom'
		): object => {
			let values = {
				poor: 140,
				common: 120,
				uncommon: 100,
				rare: 80,
				epic: 60,
				legendary: 40,
				heirloom: 20
			};
			return { type: 'quality', value: values[value] };
		},
		/**
		 *Badge long description
		 *
		 * @param {string} value
		 * @returns {object}
		 */
		description: (value: string): object => {
			return { type: 'description', value: value };
		},
		/**
		 *New badge award recipients.
		 *
		 * @param {Array<string>} value
		 * @returns {object}
		 */
		award: (value: Array<phid>): object => {
			return { type: 'award', value: value };
		},
		/**
		 *Revoke badge award recipients.
		 *
		 * @param {Array<phid>} value
		 * @returns {object}
		 */
		revoke: (value: Array<phid>): object => {
			return { type: 'revoke', value: value };
		},
		/**
		 *Change the edit policy of the object.
		 *
		 * @param {phid} value
		 * @returns {object}
		 */
		edit: (value: phid): object => {
			return { type: 'edit', value: value };
		},
		subscribers: subscribers,
		comment: comment,
		mfa: mfa
	},

	/**
	 * Conpherence edit transactions
	 */
	conpherence: {
		/**
		 *Room name
		 *
		 * @param {string} value
		 * @returns {object}
		 */
		name: (value: string): object => {
			return { type: 'name', value: value };
		},
		/**
		 *Room topic
		 *
		 * @param {string} value
		 * @returns {object}
		 */
		topic: (value: string): object => {
			return { type: 'topic', value: value };
		},
		participants: {
			/**
			 *Add room participants.
			 *
			 * @param {Array<phid>} value
			 * @returns {object}
			 */
			add: (value: Array<phid>): object => {
				return { type: 'participants.add', value: value };
			},
			/**
			 *Remove room participants.
			 *
			 * @param {Array<phid>} value
			 * @returns {object}
			 */
			remove: (value: Array<phid>): object => {
				return { type: 'participants.remove', value: value };
			},
			/**
			 *Set room participants.
			 *
			 * @param {Array<phid>} value
			 * @returns {object}
			 */
			set: (value: Array<phid>): object => {
				return { type: 'participants.set', value: value };
			}
		},
		view: view,
		edit: edit,
		comment: comment,
		mfa: mfa
	},

	/**
	 * Maniphest edit transactions
	 */
	maniphest: {
		/**
		 *Use this to set transactions with custom fields. The type
		 argument is the transaction type name, the value is value. 
		 An example transaction type name is `custom.myfield`
		 *
		 * @param {string} type
		 * @param {*} value
		 * @returns
		 */
		custom: (type: string, value: any) => {
			return { type: type, value: value };
		},
		/**
		 *Create as a subtask of another task
		 *
		 * @param {phid} value
		 * @returns {object}
		 */
		parent: (value: phid): object => {
			return { type: 'parent', value: value };
		},
		/**
     *Move a task to one or more workboard columns.

      You can use this transaction type to create a task into 
      a particular workboard column, or move an existing 
      task between columns.
     *
     * @param {Array<phid>} value
     * @returns {object}
     */
		column: (value: Array<phid>): object => {
			return { type: 'column', value: value };
		},
		/**
		 *Shift the object between spaces.
		 *
		 * @param {phid} value
		 * @returns {object}
		 */
		space: (value: phid): object => {
			return { type: 'space', value: value };
		},
		title: title,
		/**
		 *Reassign the task
		 *
		 * @param {phid} value
		 * @returns {object}
		 */
		owner: (value: phid): object => {
			return { type: 'owner', value: value };
		},
		/**
		 *Change the task status
		 *
		 * @param {('open'|'resolved'|'wontfix'|'invalid'|'duplicate'|'spite')} value
		 * @returns {object}
		 */
		status: (
			value:
				| 'open'
				| 'resolved'
				| 'wontfix'
				| 'invalid'
				| 'duplicate'
				| 'spite'
				| string
		): object => {
			return { type: 'status', value: value };
		},
		/**
		 *Change the priority of the task
		 *
		 * @param {('unbreak'|'triage'|'high'|'normal'|'low'|'wishlist')} value
		 * @returns {object}
		 */
		priority: (
			value: 'unbreak' | 'triage' | 'high' | 'normal' | 'low' | 'wishlist'
		): object => {
			return { type: 'priority', value: value };
		},
		/**
		 *Update the task description
		 *
		 * @param {string} value
		 * @returns {object}
		 */
		description: (value: string): object => {
			return { type: 'description', value: value };
		},
		parents: {
			/**
			 *Change the parents of this task
			 *
			 * @param {Array<phid>} value
			 * @returns {object}
			 */
			add: (value: Array<phid>): object => {
				return { type: 'parents.add', value: value };
			},
			/**
			 *Remove the parents of this task
			 *
			 * @param {Array<phid>} value
			 * @returns {object}
			 */
			remove: (value: Array<phid>): object => {
				return { type: 'parents.remove', value: value };
			},
			/**
			 *Set the parents of this task
			 *
			 * @param {Array<phid>} value
			 * @returns {object}
			 */
			set: (value: Array<phid>): object => {
				return { type: 'parents.set', value: value };
			}
		},
		subtasks: {
			/**
			 *Change the subtasks of this task
			 *
			 * @param {Array<phid>} value
			 * @returns {object}
			 */
			add: (value: Array<phid>): object => {
				return { type: 'subtasks.add', value: value };
			},
			/**
			 *Remove the subtasks of this task
			 *
			 * @param {Array<phid>} value
			 * @returns {object}
			 */
			remove: (value: Array<phid>): object => {
				return { type: 'subtasks.remove', value: value };
			},
			/**
			 *Set the subtasks of this task
			 *
			 * @param {Array<phid>} value
			 * @returns {object}
			 */
			set: (value: Array<phid>): object => {
				return { type: 'subtasks.set', value: value };
			}
		},
		commits: {
			/**
			 *Change the related commits for this task
			 *
			 * @param {Array<phid>} value
			 * @returns {object}
			 */
			add: (value: Array<phid>): object => {
				return { type: 'commits.add', value: value };
			},
			/**
			 *Remove the related commits for this task
			 *
			 * @param {Array<phid>} value
			 * @returns {object}
			 */
			remove: (value: Array<phid>): object => {
				return { type: 'commits.remove', value: value };
			},
			/**
			 *Set the related commits for this task
			 *
			 * @param {Array<phid>} value
			 * @returns {object}
			 */
			set: (value: Array<phid>): object => {
				return { type: 'commits.set', value: value };
			}
		},
		view: view,
		edit: edit,
		projects: projects,
		subscribers: subscribers,
		/**
		 *Change the object subtype
		 *
		 * @param {('default'|'bug'|'feature')} value
		 * @returns {object}
		 */
		subtype: (value: 'default' | 'bug' | 'feature' | string): object => {
			return { type: 'subtype', value: value };
		},
		comment: comment,
		mfa: mfa
	},

	/**
	 * Paste edit transactions
	 */
	paste: {
		/**
		 *Shift the object between spaces
		 *
		 * @param {string} value
		 * @returns {object}
		 */
		space: (value: string): object => {
			return { type: 'space', value: value };
		},
		title: title,
		/**
		 *Change language for syntax highlighting
		 *
		 * @param {lang} value
		 * @returns {object}
		 */
		language: (value: lang): object => {
			return { type: 'language', value: value };
		},
		/**
		 *The paste content
		 *
		 * @param {string} value
		 * @returns {object}
		 */
		text: (value: string): object => {
			return { type: 'text', value: value };
		},
		/**
		 *Active or archive the paste
		 *
		 * @param {('active'|'archived')} value
		 * @returns {object}
		 */
		status: (value: 'active' | 'archived'): object => {
			return { type: 'status', value: value };
		},
		view: view,
		edit: edit,
		projects: projects,
		subscribers: subscribers,
		comment: comment,
		mfa: mfa
	},

	/**
	 * Portal edit transactions
	 */
	portal: {
		/**
		 *Rename the portal
		 *
		 * @param {string} value
		 * @returns {object}
		 */
		name: (value: string): object => {
			return { type: 'name', value: value };
		},
		view: view,
		edit: edit,
		projects: projects,
		mfa: mfa
	},

	/**
	 * Project edit transactions
	 */
	project: {
		/**
		 *Choose a parent project to create a subproject beneath.
		 *
		 * @param {phid} value
		 * @returns {object}
		 */
		parent: (value: phid): object => {
			return { type: 'parent', value: value };
		},
		/**
		 *Choose a parent project to create a new milestone for.
		 *
		 * @param {phid} value
		 * @returns {object}
		 */
		milestone: (value: phid): object => {
			return { type: 'milestone', value: value };
		},
		/**
		 *Shift the object between spaces
		 *
		 * @param {phid} value
		 * @returns {object}
		 */
		space: (value: phid): object => {
			return { type: 'space', value: value };
		},
		/**
		 *New project name or rename
		 *
		 * @param {string} value
		 * @returns {object}
		 */
		name: (value: string): object => {
			return { type: 'name', value: value };
		},
		/**
		 *Short project description
		 *
		 * @param {string} value
		 * @returns {object}
		 */
		description: (value: string): object => {
			return { type: 'description', value: value };
		},
		/**
		 *Change the project icon
		 *
		 * @param {('project'|
		 *     'tag'|
		 *     'policy'|
		 *     'group'|
		 *     'folder'|
		 *     'timeline'|
		 *     'goal'|
		 *     'release'|
		 *     'bugs'|
		 *     'cleanup'|
		 *     'umbrella'|
		 *     'communication'|
		 *     'organization'|
		 *     'infrastructure'|
		 *     'account'|
		 *     'experimental')} value
		 * @returns {object}
		 */
		icon: (
			value:
				| 'project'
				| 'tag'
				| 'policy'
				| 'group'
				| 'folder'
				| 'timeline'
				| 'goal'
				| 'release'
				| 'bugs'
				| 'cleanup'
				| 'umbrella'
				| 'communication'
				| 'organization'
				| 'infrastructure'
				| 'account'
				| 'experimental'
		): object => {
			return { type: 'icon', value: value };
		},
		/**
		 *Change the project tag color
		 *
		 * @param {colors} value
		 * @returns {object}
		 */
		color: (
			value:
				| 'red'
				| 'orange'
				| 'yellow'
				| 'green'
				| 'blue'
				| 'indigo'
				| 'violet'
				| 'pink'
				| 'grey'
				| 'checkered'
		): object => {
			return { type: 'color', value: value };
		},
		/**
		 *Change project slugs
		 *
		 * @param {Array<string>} value
		 * @returns {object}
		 */
		slugs: (value: Array<string>): object => {
			return { type: 'slugs', value: value };
		},
		members: {
			/**
			 *Add project members
			 *
			 * @param {Array<phid>} value
			 * @returns {object}
			 */
			add: (value: Array<phid>): object => {
				return { type: 'members.add', value: value };
			},
			/**
			 *Remove project members
			 *
			 * @param {Array<phid>} value
			 * @returns {object}
			 */
			remove: (value: Array<phid>): object => {
				return { type: 'members.remove', value: value };
			},
			/**
			 *Set project members
			 *
			 * @param {Array<phid>} value
			 * @returns {object}
			 */
			set: (value: Array<phid>): object => {
				return { type: 'members.set', value: value };
			}
		},
		view: view,
		edit: edit,
		/**
		 *Change the join policy of the object.
		 *
		 * @param {string} value
		 * @returns {object}
		 */
		join: (value: string): object => {
			return { type: 'join', value: value };
		},
		subtype: (value: 'default' | string): object => {
			return { type: 'subtype', value: value };
		},
		mfa: mfa
	},

	/**
	 * User edit transactions
	 */
	user: {
		/**
		 *Disable or enable the user
		 *
		 * @param {boolean} value true to disable
		 * @returns {object}
		 */
		disabled: (value: boolean): object => {
			return { type: 'disabled', value: value };
		},
		/**
		 *Approve or reject the user
		 *
		 * @param {boolean} value true to approve the user
		 * @returns {object}
		 */
		approved: (value: boolean): object => {
			return { type: 'approved', value: value };
		},
		/**
		 *Stores the real name of the user, like "Abraham Lincoln".
		 *
		 * @param {string} value
		 * @returns {object}
		 */
		realName: (value: string): object => {
			return { type: 'realName', value: value };
		},
		/**
		 *User title, like "CEO" or "Assistant to the Manager".
		 *
		 * @param {string} value
		 * @returns {object}
		 */
		title: (value: string): object => {
			return { type: 'title', value: value };
		},
		/**
		 *User icon to accompany their title.
		 *
		 * @param {string} value
		 * @returns {object}
		 */
		icon: (
			value:
				| 'person'
				| 'engineering'
				| 'operations'
				| 'resources'
				| 'camera'
				| 'music'
				| 'spy'
				| 'android'
				| 'relationships'
				| 'administration'
				| 'security'
				| 'logistics'
				| 'research'
				| 'analysis'
				| 'executive'
				| 'animal'
		): object => {
			return { type: 'icon', value: value };
		},
		/**
		 *Short blurb about the user
		 *
		 * @param {string} value
		 * @returns {object}
		 */
		blurb: (value: string): object => {
			return { type: 'blurb', value: value };
		},
		/**
		 *Sign the transaction group with MFA
		 *
		 * @param {boolean} value
		 * @returns {object}
		 */
		mfa: (value: boolean): object => {
			return { type: 'mfa', value: value };
		}
	}
};
