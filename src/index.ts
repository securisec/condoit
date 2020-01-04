import Axios, { AxiosResponse, AxiosError } from 'axios';
import qs from 'qs';
import { resolve } from 'url';

import * as iuser from './interfaces/iuser';
import * as imaniphest from './interfaces/imaniphest';

/**
 *The class to create an instance to use the Phabricator api
 *
 * @class Condoit
 */
export class Condoit {
	private baseUrl: string;
	private apiToken: string;
	/**
	 *Creates an instance of Condoit.
	 * @param {string} baseUrl The base url for a phabricator instance
	 * @param {string} apiToken A valid phabricator conduit api token
	 * @memberof Condoit
	 */
	constructor(baseUrl: string, apiToken: string) {
		this.baseUrl = baseUrl;
		this.apiToken = apiToken;
	}

	/**
	 *Make a base request to the phabricator api using Axios
	 *
	 * @private
	 * @param {string} endpoint The name of the phabricator api endpoint
	 * @param {object} params Options or info passed to the api
	 * @returns {Promise<object>}
	 * @memberof Condoit
	 */
	private makeRequest(endpoint: string, params: object): Promise<any> {
		let baseUrlAxios = resolve(this.baseUrl, '/api');
		return new Promise((resolve, reject) => {
			Axios({
				method: 'POST',
				baseURL: baseUrlAxios,
				url: endpoint,
				data: qs.stringify({ ...params, 'api.token': this.apiToken })
			})
				.then((res: AxiosResponse) => {
					resolve(res.data);
				})
				.catch((error: AxiosError) => reject(error));
		});
	}

	public almanac = {
		binding: () => {
			// TODO
		},

		device: () => {
			// TODO
		},

		interface: () => {
			// TODO
		},

		namespace: () => {
			// TODO
		},

		network: () => {
			// TODO
		},

		service: () => {
			// TODO
		}
	};

	public audit = {
		query: () => {
			// TODO
		}
	};

	public auth = {
		logout: () => {
			// TODO
		},

		querypublickeys: () => {
			// TODO
		}
	};

	public badge = {
		edit: () => {
			// TODO
		},

		search: () => {
			// TODO
		}
	};

	public conduit = {
		connect: () => {
			// TODO
		},

		getcapabilities: () => {
			// TODO
		},

		getcertificate: () => {
			// TODO
		},

		ping: () => {
			// TODO
		},

		query: () => {
			// TODO
		}
	};

	public conpherence = {
		createthread: () => {
			// TODO
		},

		edit: () => {
			// TODO
		},

		querythread: () => {
			// TODO
		},

		querytransaction: () => {
			// TODO
		},

		updatethread: () => {
			// TODO
		}
	};

	public countdown = {
		edit: () => {
			// TODO
		},

		search: () => {
			// TODO
		}
	};

	public dashboard = {
		panel: () => {
			// TODO
		}
	};

	public differential = {
		close: () => {
			// TODO
		},

		createcomment: () => {
			// TODO
		},

		creatediff: () => {
			// TODO
		},

		createinline: () => {
			// TODO
		},

		createrawdiff: () => {
			// TODO
		},

		createrevision: () => {
			// TODO
		},

		diff: () => {
			// TODO
		},

		getcommitmessage: () => {
			// TODO
		},

		getcommitpaths: () => {
			// TODO
		},

		getrawdiff: () => {
			// TODO
		},

		parsecommitmessage: () => {
			// TODO
		},

		query: () => {
			// TODO
		},

		querydiffs: () => {
			// TODO
		},

		revision: () => {
			// TODO
		},

		setdiffproperty: () => {
			// TODO
		},

		updaterevision: () => {
			// TODO
		}
	};

	public diffusion = {
		blame: () => {
			// TODO
		},

		branchquery: () => {
			// TODO
		},

		browsequery: () => {
			// TODO
		},

		commit: () => {
			// TODO
		},

		commitparentsquery: () => {
			// TODO
		},

		diffquery: () => {
			// TODO
		},

		existsquery: () => {
			// TODO
		},

		filecontentquery: () => {
			// TODO
		},

		findsymbols: () => {
			// TODO
		},

		historyquery: () => {
			// TODO
		},

		lastmodifiedquery: () => {
			// TODO
		},

		mergedcommitsquery: () => {
			// TODO
		},

		querycommits: () => {
			// TODO
		},

		querypaths: () => {
			// TODO
		},

		rawdiffquery: () => {
			// TODO
		},

		refsquery: () => {
			// TODO
		},

		repository: () => {
			// TODO
		},

		resolverefs: () => {
			// TODO
		},

		searchquery: () => {
			// TODO
		},

		tagsquery: () => {
			// TODO
		},

		uri: () => {
			// TODO
		},

		getlintmessages: () => {
			// TODO
		},

		looksoon: () => {
			// TODO
		},

		updatecoverage: () => {
			// TODO
		}
	};

	public drydock = {
		authorization: () => {
			// TODO
		},

		blueprint: () => {
			// TODO
		},

		lease: () => {
			// TODO
		},

		resource: () => {
			// TODO
		}
	};

	public edge = {
		search: () => {
			// TODO
		}
	};

	public feed = {
		publish: () => {
			// TODO
		},

		query: () => {
			// TODO
		}
	};

	public file = {
		allocate: () => {
			// TODO
		},

		download: () => {
			// TODO
		},

		/**
		 ***Marked for deprecation** Get information about a file. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/file.info/}
		 *
		 * @param {{ id?: number; phid?: string }} options
		 * @returns {Promise<object>}
		 */
		info: (options: { id?: number; phid?: string }): Promise<object> => {
			return this.makeRequest('file.info', {
				id: options?.id,
				phid: options?.phid
			});
		},

		querychunks: () => {
			// TODO
		},

		search: () => {
			// TODO
		},

		upload: () => {
			// TODO
		},

		uploadchunk: () => {
			// TODO
		}
	};

	public flag = {
		delete: () => {
			// TODO
		},

		edit: () => {
			// TODO
		},

		query: () => {
			// TODO
		}
	};

	public harbormaster = {
		artifact: () => {
			// TODO
		},

		build: () => {
			// TODO
		},

		buildable: () => {
			// TODO
		},

		buildplan: () => {
			// TODO
		},

		log: () => {
			// TODO
		},

		target: () => {
			// TODO
		},

		createartifact: () => {
			// TODO
		},

		queryautotargets: () => {
			// TODO
		},

		querybuildables: () => {
			// TODO
		},

		sendmessage: () => {
			// TODO
		}
	};

	public macro = {
		edit: () => {
			// TODO
		},

		query: () => {
			// TODO
		},

		creatememe: () => {
			// TODO
		}
	};

	public maniphest = {
		/**
		 ***Marked for deprecation. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/maniphest.createtask/}
		 *
		 * @param {imaniphest.Createtask} options
		 * @returns {Promise<imaniphest.RetCreatetask>}
		 */
		createtask: (
			options: imaniphest.Createtask
		): Promise<imaniphest.RetCreatetask> => {
			return this.makeRequest('maniphest.createtask', {
				title: options?.title,
				description: options?.description,
				ownerPHID: options?.ownerPHID,
				viewPolicy: options?.viewPolicy,
				ccPHIDs: options?.ccPHIDs,
				priority: options?.priority,
				projectPHIDs: options?.projectPHIDs,
				auxiliary: options?.auxiliary
			});
		},

		/**
		 *Edit a maniphest task. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/maniphest.edit/}
		 *
		 * @param {imaniphest.Edit} options
		 * @returns {Promise<imaniphest.RetEdit>}
		 */
		edit: (options: imaniphest.Edit): Promise<imaniphest.RetEdit> => {
			return this.makeRequest('maniphest.edit', {
				transactions: options.transactions,
				objectIdentifier: options.objectIdentifier
			});
		},

		/**
		 ***Marked for deprecation** Retrieve Maniphest task transactions. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/maniphest.gettasktransactions/}
		 *
		 * @param {Array<number>} ids
		 * @returns {Promise<imaniphest.RetGettasktransactions>}
		 */
		gettasktransactions: (
			ids: Array<number>
		): Promise<imaniphest.RetGettasktransactions> => {
			return this.makeRequest('maniphest.gettasktransactions', { ids: ids });
		},

		/**
		 ***Marked for deprecation** Retrieve information about a Maniphest task, given its ID.
     [Docs]{@link https://secure.phabricator.com/conduit/method/maniphest.info}
		 *
		 * @param {number} taskId
		 * @returns {Promise<imaniphest.RetInfo>}
		 */
		info: (taskId: number): Promise<imaniphest.RetInfo> => {
			return this.makeRequest('maniphest.info', { task_id: taskId });
		},

		/**
		 *Returns information about the possible priorities for Maniphest tasks. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/maniphest.priority.search/}
		 *
		 * @returns {Promise<imaniphest.RetPrioritySearch>}
		 */
		prioritySearch: (): Promise<imaniphest.RetPrioritySearch> => {
			return this.makeRequest('maniphest.priority.search', {});
		},

		/**
		 ***Marked for deprecation** Execute complex searches for Maniphest tasks. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/user.whoami/}
		 *
		 * @param {imaniphest.Query} options
		 * @returns {Promise<imaniphest.RetQuery>}
		 */
		query: (options: imaniphest.Query): Promise<imaniphest.RetQuery> => {
			return this.makeRequest('maniphest.query', {
				ids: options?.ids,
				phids: options?.phids,
				ownerPHIDs: options?.ownerPHIDs,
				authorPHIDs: options?.authorPHIDs,
				projectPHIDs: options?.projectPHIDs,
				ccPHIDs: options?.ccPHIDs,
				fulltext: options?.fullText,
				status: options?.status,
				order: options?.order,
				limit: options?.limit,
				offset: options?.offset
			});
		},

		/**
		 ***Marked for deprecation** Retrieve information about possible Maniphest task status values. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/maniphest.querystatuses/}
		 *
		 * @returns {Promise<imaniphest.RetQuerystatuses>}
		 */
		querystatuses: (): Promise<imaniphest.RetQuerystatuses> => {
			return this.makeRequest('maniphest.querystatuses', {});
		},

		/**
		 **Search Maniphest tasks
		 [Docs]{@link https://secure.phabricator.com/conduit/method/maniphest.search/}
		 *
		 * @param {imaniphest.Search} options
		 * @returns {Promise<imaniphest.RetSearch>}
		 */
		search: (options: imaniphest.Search): Promise<imaniphest.RetSearch> => {
			return this.makeRequest('maniphest.search', {
				queryKey: options?.queryKey,
				constraints: options?.constraints,
				attachments: options?.attachments,
				order: options?.order,
				before: options?.before,
				after: options?.after,
				limit: options?.limit
			});
		},

		/**
		 *Returns information about the possible statuses for Maniphest tasks. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/maniphest.status.search/}
		 *
		 * @returns {Promise<imaniphest.RetStatusSearch>}
		 */
		statusSearch: (): Promise<imaniphest.RetStatusSearch> => {
			return this.makeRequest('maniphest.status.search', {});
		},

		/**
		 ***Marked for deprecation** Update an existing Maniphest task. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/maniphest.update/}
		 *
		 * @param {imaniphest.Update} options
		 * @returns {Promise<imaniphest.RetUpdate>}
		 */
		update: (options: imaniphest.Update): Promise<imaniphest.RetUpdate> => {
			return this.makeRequest('maniphest.update', {
				id: options?.id,
				phid: options?.phid,
				title: options?.title,
				description: options?.description,
				ownerPHID: options?.ownerPHID,
				viewPolicy: options?.viewPolicy,
				editPolicy: options?.editPolicy,
				ccPHIDs: options?.ccPHIDs,
				priority: options?.priority,
				projectPHIDs: options?.projectPHIDs,
				auxiliary: options?.auxiliary,
				status: options?.status,
				comments: options?.comments
			});
		}
	};

	public owners = {
		edit: () => {
			// TODO
		},

		search: () => {
			// TODO
		}
	};

	public passphrase = {
		query: () => {
			// TODO
		}
	};

	public paste = {
		create: () => {
			// TODO
		},

		edit: () => {
			// TODO
		},

		query: () => {
			// TODO
		},

		search: () => {
			// TODO
		}
	};

	public phame = {
		blog: () => {
			// TODO
		},

		post: () => {
			// TODO
		}
	};

	public phid = {
		lookup: () => {
			// TODO
		},

		query: () => {
			// TODO
		}
	};

	public phriction = {
		content: () => {
			// TODO
		},

		create: () => {
			// TODO
		},

		document: () => {
			// TODO
		},

		edit: () => {
			// TODO
		},

		history: () => {
			// TODO
		},

		info: () => {
			// TODO
		}
	};

	public portal = {
		edit: () => {
			// TODO
		},

		search: () => {
			// TODO
		}
	};

	public project = {
		column: () => {
			// TODO
		},

		create: () => {
			// TODO
		},

		edit: () => {
			// TODO
		},

		query: () => {
			// TODO
		},

		search: () => {
			// TODO
		}
	};

	public remarkup = {
		process: () => {
			// TODO
		}
	};

	public repository = {
		query: () => {
			// TODO
		}
	};

	public slowvote = {
		pollSearch: () => {
			// TODO
		}
	};

	public token = {
		give: () => {
			// TODO give
		},

		given: () => {
			// TODO
		},

		query: () => {
			// TODO
		}
	};

	public transaction = {
		search: () => {
			// TODO search
		}
	};

	public user = {
		/**
		 *Edit user information. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/user.edit/}
		 *
		 * @param {iuser.Edit} options
		 * @returns {Promise<object>}
		 */
		edit: (options: iuser.Edit): Promise<iuser.RetEdit> => {
			return this.makeRequest('user.edit', {
				transactions: options.transactions,
				objectIdentifier: options.objectIdentifier
			});
		},

		/**
		 *Search users
		 [Docs]{@link https://secure.phabricator.com/conduit/method/user.search/}
		 *
		 * @returns {Promise<object>}
		 */
		search: (options: iuser.Search): Promise<iuser.RetSearch> => {
			return this.makeRequest('user.search', {
				queryKey: options?.queryKey,
				constraints: options?.constraints,
				attachments: options?.attachments,
				order: options?.order,
				before: options?.before,
				after: options?.after,
				limit: options?.limit
			});
		},

		/**
		 *Retrieve information about the logged-in user.
		 [Docs]{@link https://secure.phabricator.com/conduit/method/user.whoami/} 
		 *
		 * @returns {Promise<iuser.RetWhoami>}
		 */
		whoami: (): Promise<iuser.RetWhoami> => {
			return this.makeRequest('user.whoami', {});
		}
	};
}
