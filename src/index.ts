import Axios, { AxiosResponse, AxiosError } from 'axios';
import qs from 'qs';
import { resolve } from 'url';
import { writeFile, readFileSync } from 'fs';

import * as iAlmanac from './interfaces/iAlmanac';
import * as iAudit from './interfaces/iAudit';
import * as iAuth from './interfaces/iAuth';
import * as iBadge from './interfaces/iBadge';
import * as iConduit from './interfaces/iConduit';
import * as iConpherence from './interfaces/iConpherence';
import * as iCountdown from './interfaces/iCountdown';
import * as iDifferential from './interfaces/iDifferential';
import * as iDiffusion from './interfaces/iDiffusion';
import * as iDrydock from './interfaces/iDrydock';
import * as iEdge from './interfaces/iEdge';
import * as iFeed from './interfaces/iFeed';
import * as iFile from './interfaces/iFile';
import * as iFlag from './interfaces/iFlag';
import * as iHarbormaster from './interfaces/iHarbormaster';
import * as iMacro from './interfaces/iMacro';
import * as iManiphest from './interfaces/iManiphest';
import * as iOwners from './interfaces/iOwners';
import * as iPassphrase from './interfaces/iPassphrase';
import * as iPhame from './interfaces/iPhame';
import * as iPhid from './interfaces/iPhid';
import * as iPhriction from './interfaces/iPhriction';
import * as iPortal from './interfaces/iPortal';
import * as iProject from './interfaces/iProject';
import * as iRemarkup from './interfaces/iRemarkup';
import * as iRepository from './interfaces/iRepository';
import * as iSlowvote from './interfaces/iSlowvote';
import * as iToken from './interfaces/iToken';
import * as iTransactions from './interfaces/iTransactions';
import * as iUser from './interfaces/iUser';
import { Transactions, GenericReturn } from './interfaces/iGlobal';

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
	 * @returns {Promise<GenericReturn>}
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

	private returnOptions(options: any) {
		return {
			queryKey: options?.queryKey,
			constraints: options?.constraints,
			order: options?.order,
			before: options?.before,
			after: options?.after,
			limit: options?.limit
		};
	}

	private returnOptionsAttachments(options: any) {
		return {
			queryKey: options?.queryKey,
			constraints: options?.constraints,
			attachments: options?.attachments,
			order: options?.order,
			before: options?.before,
			after: options?.after,
			limit: options?.limit
		};
	}

	private transactionOptions(options: any) {
		return {
			transactions: options.transactions,
			objectIdentifier: options?.objectIdentifier
		};
	}

	/**
	 *Service Directory
	 *
	 * @memberof Condoit
	 */
	public almanac = {
		/**
		 *Apply transactions to create a new binding or edit an existing one. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/almanac.binding.edit/}
		 *
		 * @param {iAlmanac.AlmanacBindingEdit} options
		 * @returns {Promise<Transactions>}
		 */
		bindingEdit: (
			options: iAlmanac.AlmanacBindingEdit
		): Promise<Transactions> => {
			return this.makeRequest(
				'almanac.binding.edit',
				this.transactionOptions(options)
			);
		},

		/**
		 *Read information about Almanac bindings. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/almanac.binding.search/}
		 *
		 * @param {iAlmanac.AlmanacBindingSearch} options
		 * @returns {Promise<iAlmanac.RetAlmanacBindingSearch>}
		 */
		bindingSearch: (
			options: iAlmanac.AlmanacBindingSearch
		): Promise<iAlmanac.RetAlmanacBindingSearch> => {
			return this.makeRequest(
				'almanac.binding.search',
				this.returnOptionsAttachments(options)
			);
		},

		/**
		 *Apply transactions to create a new device or edit an existing one. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/almanac.device.edit/}
		 *
		 * @param {iAlmanac.AlmanacDeviceEdit} options
		 * @returns {Promise<Transactions>}
		 */
		deviceEdit: (
			options: iAlmanac.AlmanacDeviceEdit
		): Promise<Transactions> => {
			return this.makeRequest(
				'almanac.device.edit',
				this.transactionOptions(options)
			);
		},

		/**
		 *Read information about Almanac devices. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/almanac.device.search/}
		 *
		 * @param {iAlmanac.AlmanacDeviceSearch} options
		 * @returns {Promise<iAlmanac.RetAlmanacDeviceSearch>}
		 */
		deviceSearch: (
			options: iAlmanac.AlmanacDeviceSearch
		): Promise<iAlmanac.RetAlmanacDeviceSearch> => {
			return this.makeRequest(
				'almanac.device.search',
				this.returnOptionsAttachments(options)
			);
		},

		/**
		 *Apply transactions to create a new interface or edit an existing one. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/almanac.interface.edit/}
		 *
		 * @param {iAlmanac.AlmanacInterfaceEdit} options
		 * @returns {Promise<Transactions>}
		 */
		interfaceEdit: (
			options: iAlmanac.AlmanacInterfaceEdit
		): Promise<Transactions> => {
			return this.makeRequest(
				'almanac.interface.edit',
				this.transactionOptions(options)
			);
		},

		/**
		 *Read information about Almanac interfaces. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/almanac.interface.search/}
		 *
		 * @param {iAlmanac.AlmanacInterfaceSearch} options
		 * @returns {Promise<iAlmanac.RetAlmanacInterfaceSearch>}
		 */
		interfaceSearch: (
			options: iAlmanac.AlmanacInterfaceSearch
		): Promise<iAlmanac.RetAlmanacInterfaceSearch> => {
			return this.makeRequest(
				'almanac.interface.search',
				this.returnOptions(options)
			);
		},

		namespaceEdit: () => {
			throw Error('Not implemented');
		},

		/**
		 *Read information about Almanac namespaces. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/almanac.namespace.search/}
		 *
		 * @param {iAlmanac.AlmanacNamespaceSearch} options
		 * @returns {Promise<iAlmanac.RetAlmanacNamespaceSearch>}
		 */
		namespaceSearch: (
			options: iAlmanac.AlmanacNamespaceSearch
		): Promise<iAlmanac.RetAlmanacNamespaceSearch> => {
			return this.makeRequest(
				'almanac.namespace.search',
				this.returnOptionsAttachments(options)
			);
		},

		/**
		 *Apply transactions to create a new network or edit an existing one. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/almanac.network.edit/}
		 *
		 * @param {iAlmanac.AlmanacNetworkEdit} options
		 * @returns {Promise<Transactions>}
		 */
		networkEdit: (
			options: iAlmanac.AlmanacNetworkEdit
		): Promise<Transactions> => {
			return this.makeRequest(
				'almanac.network.edit',
				this.transactionOptions(options)
			);
		},

		/**
		 *Read information about Almanac bindings. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/almanac.network.search/}
		 *
		 * @param {iAlmanac.AlmanacNetworkSearch} options
		 * @returns {Promise<iAlmanac.RetAlmanacNetworkSearch>}
		 */
		networkSearch: (
			options: iAlmanac.AlmanacNetworkSearch
		): Promise<iAlmanac.RetAlmanacNetworkSearch> => {
			return this.makeRequest(
				'almanac.network.search',
				this.returnOptions(options)
			);
		},

		/**
		 *Apply transactions to create a new service or edit an existing one. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/almanac.service.edit/}
		 *
		 * @param {iAlmanac.AlmanacServiceEdit} options
		 * @returns {Promise<Transactions>}
		 */
		serviceEdit: (
			options: iAlmanac.AlmanacServiceEdit
		): Promise<Transactions> => {
			return this.makeRequest(
				'almanac.service.edit',
				this.transactionOptions(options)
			);
		},

		/**
		 *Read information about Almanac services. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/almanac.service.search/}
		 *
		 * @param {iAlmanac.AlmanacServiceSearch} options
		 * @returns {Promise<iAlmanac.RetAlmanacServiceSearch>}
		 */
		serviceSearch: (
			options: iAlmanac.AlmanacServiceSearch
		): Promise<iAlmanac.RetAlmanacServiceSearch> => {
			return this.makeRequest(
				'almanac.service.search',
				this.returnOptionsAttachments(options)
			);
		}
	};

	/**
	 ***Marked for deprecation** Query audit requests. 
	 [Docs]{@link https://secure.phabricator.com/conduit/method/audit.query/}
	 *
	 * @memberof Condoit
	 */
	public audit = {
		query: (options: iAudit.AuditQuery): Promise<iAudit.RetAuditQuery> => {
			return this.makeRequest('audit.query', {
				authodPHIDs: options?.authorPHIDs,
				commitPHIDs: options?.commitPHIDs,
				status: options?.status,
				offset: options?.offset,
				limit: options?.limit
			});
		}
	};

	/**
	 *Login/Registration
	 *
	 * @memberof Condoit
	 */
	public auth = {
		/**
		 *Logout of all sessions. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/auth.logout/}
		 *
		 * @returns {Promise<void>}
		 */
		logout: (): Promise<void> => {
			return this.makeRequest('auth.logout', {});
		},

		/**
		 *Query public keys. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/auth.querypublickeys/}
		 *
		 * @param {iAuth.AuthQuerypublickeys} options
		 * @returns {Promise<iAuth.RetAuthQuerypublickeys>}
		 */
		querypublickeys: (
			options: iAuth.AuthQuerypublickeys
		): Promise<iAuth.RetAuthQuerypublickeys> => {
			return this.makeRequest('auth.querypublickeys', {
				ids: options?.ids,
				phids: options?.phids,
				objectPHIDs: options?.objectPHIDs,
				before: options?.before,
				after: options?.after,
				limit: options?.limit
			});
		}
	};

	/**
	 *Achievements and Notoriety
	 *
	 * @memberof Condoit
	 */
	public badge = {
		/**
		 *Create or edit a Badge. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/badge.edit/}
		 *
		 * @param {iBadge.BadgeEdit} options
		 * @returns {Promise<Transactions>}
		 */
		edit: (options: iBadge.BadgeEdit): Promise<Transactions> => {
			return this.makeRequest('badge.edit', this.transactionOptions(options));
		},

		/**
		 *Read information about badges. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/badge.search/}
		 *
		 * @param {iBadge.BadgeSearch} options
		 * @returns {Promise<iBadge.RetBadgeSearch>}
		 */
		search: (options: iBadge.BadgeSearch): Promise<iBadge.RetBadgeSearch> => {
			return this.makeRequest(
				'badge.search',
				this.returnOptionsAttachments(options)
			);
		}
	};

	/**
	 *Developer API
	 *
	 * @memberof Condoit
	 */
	public conduit = {
		/**
		 *Connect a session based client. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/conduit.connect/}
		 *
		 * @param {iConduit.ConduitConnect} options
		 * @returns {Promise<any>}
		 */
		connect: (options: iConduit.ConduitConnect): Promise<any> => {
			return this.makeRequest('conduit.connect', {
				client: options.client,
				clientVersion: options.clientVersion,
				user: options?.user,
				authToken: options?.authToken,
				authSignature: options?.authSignature
			});
		},

		/**
		 *List capabilities, wire formats, and authentication protocols available on this server. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/conduit.capabilities/}
		 *
		 * @returns {Promise<iConduit.RetConduitCapabilities>}
		 */
		getcapabilities: (): Promise<iConduit.RetConduitCapabilities> => {
			return this.makeRequest('conduit.getcapabilities', {});
		},

		/**
		 *Retreive certificate information for a user. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/conduit.getcertificate/}
		 *
		 * @param {{token: string, host: string}} options
		 * @returns {Promise<any>}
		 */
		getcertificate: (options: {
			token: string;
			host: string;
		}): Promise<any> => {
			return this.makeRequest('conduit.getcertificate', {
				token: options.token,
				host: options.host
			});
		},

		/**
		 *Basic ping for monitoring or a health-check. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/conduit.ping/}
		 *
		 * @returns {Promise<iConduit.RetConduitPing>}
		 */
		ping: (): Promise<iConduit.RetConduitPing> => {
			return this.makeRequest('conduit.ping', {});
		},

		/**
		 *Returns the parameters of the Conduit methods. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/conduit.query/}
		 *
		 * @returns {Promise<GenericReturn>}
		 */
		query: (): Promise<GenericReturn> => {
			return this.makeRequest('conduit.query', {});
		}
	};

	/**
	 *Chat with others.
	 *
	 * @memberof Condoit
	 */
	public conpherence = {
		/**
		 ***Marked for deprecation** Create a new conpherence thread. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/conpherence.createthread/}
		 *
		 * @param {iConpherence.ConperhenceCreatethread} options
		 * @returns {Promise<iConpherence.RetConperhenceCreatethread>}
		 */
		createthread: (
			options: iConpherence.ConperhenceCreatethread
		): Promise<iConpherence.RetConperhenceCreatethread> => {
			return this.makeRequest('conpherence.createthread', {
				title: options.title,
				topic: options?.topic,
				message: options?.message,
				participantPHIDs: options.participantPHIDs
			});
		},

		/**
		 *Apply transactions to create a new room or edit an existing one. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/conpherence.edit/}
		 *
		 * @param {iConpherence.ConperhenceEdit} options
		 * @returns {Promise<Transactions>}
		 */
		edit: (options: iConpherence.ConperhenceEdit): Promise<Transactions> => {
			return this.makeRequest(
				'conpherence.edit',
				this.transactionOptions(options)
			);
		},

		/**
		 *Query for Conpherence threads for the logged in user. You can query by 
		 IDs or PHIDs for specific Conpherence threads. Otherwise, specify limit 
		 and offset to query the most recently updated Conpherences for the logged in user. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/conpherence.querythread/}
		 *
		 * @param {iConpherence.ConpherenceQuerythread} options
		 * @returns {Promise<iConpherence.RetConpherenceQuerythread>}
		 */
		querythread: (
			options: iConpherence.ConpherenceQuerythread
		): Promise<iConpherence.RetConpherenceQuerythread> => {
			return this.makeRequest('conpherence.querythread', {
				ids: options?.ids,
				phids: options?.phids,
				offset: options?.offset,
				limit: options?.limit
			});
		},

		/**
		 *Query for transactions for the logged in user within a specific 
		 Conpherence room. You can specify the room by ID or PHID. Otherwise, 
		 specify limit and offset to query the most recent transactions within 
		 the Conpherence room for the logged in user. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/conpherence.querytransaction/}
		 *
		 * @param {iConpherence.ConpherenceQuerytransaction} options
		 * @returns {Promise<iConpherence.RetConpherenceQuerytransaction>}
		 */
		querytransaction: (
			options: iConpherence.ConpherenceQuerytransaction
		): Promise<iConpherence.RetConpherenceQuerytransaction> => {
			return this.makeRequest('conpherence.querytransaction', {
				roomID: options?.roomID,
				roomPHID: options?.roomPHID,
				offset: options?.offset,
				limit: options?.limit
			});
		},

		/**
		 ***Marked for deprecation** Update an existing conpherence room. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/conpherence.updatethread/}
		 *
		 * @param {iConpherence.ConperhenceUpdatethread} options
		 * @returns {Promise<GenericReturn>}
		 */
		updatethread: (
			options: iConpherence.ConperhenceUpdatethread
		): Promise<GenericReturn> => {
			return this.makeRequest('conpherence.updatethread', {
				id: options?.id,
				phid: options?.phid,
				title: options?.title,
				message: options?.message,
				addParticipantPHIDs: options?.addParticipantPHIDs,
				removeParticipantPHIDs: options?.removeParticipantPHIDs
			});
		}
	};

	/**
	 *Countdown to Events.
	 *
	 * @memberof Condoit
	 */
	public countdown = {
		/**
		 *Read information about countdowns. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/countdown.search/}
		 *
		 * @param {iCountdown.CountdownServiceSearch} options
		 * @returns {Promise<iCountdown.RetCountdownServiceSearch>}
		 */
		search: (
			options: iCountdown.CountdownServiceSearch
		): Promise<iCountdown.RetCountdownServiceSearch> => {
			return this.makeRequest(
				'countdown.search',
				this.returnOptionsAttachments(options)
			);
		},

		/**
		 *Apply transactions to create a new countdown or edit an existing one. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/countdown.edit/}
		 *
		 * @param {iCountdown.CountdownEdit} options
		 * @returns {Promise<Transactions>}
		 */
		edit: (options: iCountdown.CountdownEdit): Promise<Transactions> => {
			return this.makeRequest(
				'countdown.edit',
				this.transactionOptions(options)
			);
		}
	};

	public dashboard = {
		panelEdit: () => {
			throw Error('Not implemented');
		}
	};

	/**
	 *Pre-commit review
	 *
	 * @memberof Condoit
	 */
	public differential = {
		/**
		 ***Marked for deprecation** Close a differential revision. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/differential.close/}
		 *
		 * @param {{revisionID: number}} options
		 * @returns {Promise<GenericReturn>}
		 */
		close: (options: { revisionID: number }): Promise<GenericReturn> => {
			return this.makeRequest('differential.close', {
				revisionID: options.revisionID
			});
		},

		/**
		 ***Marked for deprecation** Add a comment to a differential revision. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/differential.createcomment/}
		 *
		 * @param {iDifferential.DiffComment} options
		 * @returns {Promise<GenericReturn>}
		 */
		createcomment: (
			options: iDifferential.DiffComment
		): Promise<GenericReturn> => {
			return this.makeRequest('differential.createcomment', {
				revision_id: options.revision_id,
				message: options?.message,
				action: options?.action,
				silent: options?.silent,
				attach_inlines: options?.attach_inlines
			});
		},

		/**
		 *Create a new Differential diff. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/differential.creatediff/}
		 *
		 * @param {iDifferential.DiffCreatediff} options
		 * @returns {Promise<GenericReturn>}
		 */
		creatediff: (
			options: iDifferential.DiffCreatediff
		): Promise<GenericReturn> => {
			return this.makeRequest('differential.creatediff', {
				changes: options.changes,
				sourceMachine: options.sourceMachine,
				sourcePath: options.sourcePath,
				branch: options.branch,
				bookmark: options?.bookmark,
				sourceControlSystem: options.sourceControlSystem,
				sourceControlBaseRevision: options.sourceControlBaseRevision,
				creationMethod: options.creationMethod,
				lintStatus: options.lintStatus,
				unitStatus: options.unitStatus,
				repositoryPHID: options?.repositoryPHID
			});
		},

		/**
		 *Add an inline comment to a Differential revision. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/differential.createinline/}
		 *
		 * @param {iDifferential.DiffCreateinline} options
		 * @returns {Promise<string>}
		 */
		createinline: (
			options: iDifferential.DiffCreateinline
		): Promise<string> => {
			return this.makeRequest('differential.createinline', {
				revisionID: options?.revisionID,
				diffID: options?.diffID,
				filePath: options.filePath,
				isNewFile: options?.isNewFile,
				lineNumber: options?.lineNumber,
				lineLength: options?.lineLength,
				content: options?.content
			});
		},

		/**
		 *Create a new Differential diff from a raw diff source. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/differential.createrawdiff/}
		 *
		 * @param {iDifferential.DiffCreaterawdiff} options
		 * @returns {Promise<GenericReturn>}
		 */
		createrawdiff: (
			options: iDifferential.DiffCreaterawdiff
		): Promise<GenericReturn> => {
			return this.makeRequest('differential.createrawdiff', {
				diff: options.diff,
				repositoryPHID: options?.repositoryPHID,
				viewPolicy: options?.viewPolicy
			});
		},

		/**
		 ***Marked for deprecation** Create a new differential revision. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/differential.createrevision/}
		 *
		 * @param {{
		 * 			diffid: string;
		 * 			fields: object;
		 * 		}} options
		 * @returns {Promise<GenericReturn>}
		 */
		createrevision: (options: {
			diffid: string;
			fields: object;
		}): Promise<GenericReturn> => {
			return this.makeRequest('differential.createrevision', {
				diffid: options.diffid,
				fields: options.fields
			});
		},

		/**
		 *Read information about diffs. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/differential.diff.search/}
		 *
		 * @param {iDifferential.DiffDiffSearch} options
		 * @returns {Promise<iDifferential.RetDiffDiffSearch>}
		 */
		diffSearch: (
			options: iDifferential.DiffDiffSearch
		): Promise<iDifferential.RetDiffDiffSearch> => {
			return this.makeRequest(
				'differential.diff.search',
				this.returnOptionsAttachments(options)
			);
		},

		/**
		 *Retrieve Differential commit messages or message templates. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/differential.getcommitmessage/}
		 *
		 * @param {iDifferential.DiffGetcommitmessage} options
		 * @returns {Promise<GenericReturn>}
		 */
		getcommitmessage: (
			options: iDifferential.DiffGetcommitmessage
		): Promise<GenericReturn> => {
			return this.makeRequest('differential.getcommitmessage', {
				revision_id: options?.revision_id,
				edit: options?.edit,
				fields: options?.fields
			});
		},

		/**
		 *Query which paths should be included when committing a Differential revision. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/differential.getcommitpaths/}
		 *
		 * @param {{revision_id: number}} options
		 * @returns {Promise<GenericReturn>}
		 */
		getcommitpaths: (options: {
			revision_id: number;
		}): Promise<GenericReturn> => {
			return this.makeRequest('differential.getcommitpaths', {
				revision_id: options.revision_id
			});
		},

		/**
		 *Retreive a raw diff. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/differential.getrawdiff/}
		 *
		 * @param {{diffID: string}} options
		 * @returns {Promise<GenericReturn>}
		 */
		getrawdiff: (options: { diffID: string }): Promise<GenericReturn> => {
			return this.makeRequest('differential.getrawdiff', {
				diffID: options.diffID
			});
		},

		/**
		 *Parse commit messages for Differential fields. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/differential.parsecommitmessage/}
		 *
		 * @param {{corpus: string, partial?: boolean}} options
		 * @returns {Promise<GenericReturn>}
		 */
		parsecommitmessage: (options: {
			corpus: string;
			partial?: boolean;
		}): Promise<GenericReturn> => {
			return this.makeRequest('differential.parsecommitmessage', {
				corpus: options.corpus,
				partial: options?.partial
			});
		},

		/**
		 ***Marked for deprecation** Query Differential revisions which match certain criteria. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/differential.query/}
		 *
		 * @param {iDifferential.DiffQuery} options
		 * @returns {Promise<GenericReturn>}
		 */
		query: (options: iDifferential.DiffQuery): Promise<GenericReturn> => {
			return this.makeRequest('differential.query', {
				authors: options?.authors,
				ccs: options?.ccs,
				reviewers: options?.reviewers,
				paths: options?.paths,
				commitHashes: options?.commitHashes,
				status: options?.status,
				order: options?.order,
				limit: options?.limit,
				offset: options?.offset,
				ids: options?.ids,
				phids: options?.phids,
				subscribers: options?.subscribers,
				responsibleUsers: options?.responsibleUsers,
				branches: options?.branches
			});
		},

		/**
		 ***Marked for deprecation** Query differential diffs which match certain criteria. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/differential.querydiffs/}
		 *
		 * @param {{ids?: Array<number>, revisionIDs?: Array<number>}} options
		 * @returns {Promise<GenericReturn>}
		 */
		querydiffs: (options: {
			ids?: Array<number>;
			revisionIDs?: Array<number>;
		}): Promise<GenericReturn> => {
			return this.makeRequest('differential.querydiffs', {
				ids: options?.ids,
				revisionIDs: options?.revisionIDs
			});
		},

		/**
		 *Apply transactions to create or update a revision. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/differential.revision.edit/}
		 *
		 * @param {iDifferential.DiffRevisionEdit} options
		 * @returns {Promise<Transactions>}
		 */
		revisionEdit: (
			options: iDifferential.DiffRevisionEdit
		): Promise<Transactions> => {
			return this.makeRequest(
				'differential.revision.edit',
				this.transactionOptions(options)
			);
		},

		/**
		 *Read information about revisions. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/differential.revision.search/}
		 *
		 * @param {iDifferential.DiffRevisionSearch} options
		 * @returns {Promise<iDifferential.RetDiffRevisionSearch>}
		 */
		revisionSearch: (
			options: iDifferential.DiffRevisionSearch
		): Promise<iDifferential.RetDiffRevisionSearch> => {
			return this.makeRequest(
				'differential.revision.search',
				this.returnOptionsAttachments(options)
			);
		},

		/**
		 *Attach properties to Differential diffs. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/differential.setdiffproperty/}
		 *
		 * @param {{
		 * 			diff_id: string;
		 * 			name: string;
		 * 			data: string;
		 * 		}} options
		 * @returns {Promise<GenericReturn>}
		 */
		setdiffproperty: (options: {
			diff_id: string;
			name: string;
			data: string;
		}): Promise<GenericReturn> => {
			return this.makeRequest('differential.setdiffproperty', {
				diff_id: options.diff_id,
				data: options.data,
				name: options.name
			});
		},

		/**
		 ***Marked for deprecation** Update a differential revision. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/differential.updaterevision/}
		 *
		 * @param {iDifferential.DiffUpdateRevision} options
		 * @returns {Promise<GenericReturn>}
		 */
		updaterevision: (
			options: iDifferential.DiffUpdateRevision
		): Promise<GenericReturn> => {
			return this.makeRequest('differential.updaterevision', {
				od: options.id,
				diffid: options.diffid,
				message: options.message,
				fields: options.fields
			});
		}
	};

	/**
	 *Host and Browse Repositories
	 *
	 * @memberof Condoit
	 */
	public diffusion = {
		/**
		 *Get blame information for a list of paths. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/diffusion.blame/}
		 *
		 * @param {iDiffusion.DiffusionBlame} options
		 * @returns {Promise<GenericReturn>}
		 */
		blame: (options: iDiffusion.DiffusionBlame): Promise<GenericReturn> => {
			return this.makeRequest('diffusion.blame', {
				paths: options.paths,
				commit: options.commit,
				timeout: options?.timeout,
				repository: options?.repository,
				branch: options?.branch
			});
		},

		/**
		 *Determine what branches exist for a repository. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/diffusion.branchquery/}
		 *
		 * @param {iDiffusion.DiffusionBranchQuery} options
		 * @returns {Promise<Array<iDiffusion.RetDiffusionBranchquery>>}
		 */
		branchquery: (
			options: iDiffusion.DiffusionBranchQuery
		): Promise<Array<iDiffusion.RetDiffusionBranchquery>> => {
			return this.makeRequest('diffusion.branchquery', {
				closed: options?.closed,
				limit: options?.limit,
				offset: options?.offset,
				contains: options?.contains,
				pattern: options?.pattern,
				repository: options?.repository,
				branch: options?.branch
			});
		},

		/**
		 *File(s) information for a repository at an (optional) path and (optional) commit. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/diffusion.browsequery/}
		 *
		 * @param {iDiffusion.DiffusionBrowsequery} options
		 * @returns {Promise<iDiffusion.RetDiffusionBrowsequery>}
		 */
		browsequery: (
			options: iDiffusion.DiffusionBrowsequery
		): Promise<iDiffusion.RetDiffusionBrowsequery> => {
			return this.makeRequest('diffusion.browsequery', {
				path: options?.path,
				commit: options?.commit,
				needValidityOnly: options?.needValidityOnly,
				limit: options?.limit,
				offset: options?.offset,
				repository: options?.repository,
				branch: options?.branch
			});
		},

		/**
		 *Apply transactions to edit an existing commit. This method can not create new commits. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/diffusion.commit.edit/}
		 *
		 * @param {iDiffusion.DiffusionCommitEdit} options
		 * @returns {Promise<Transactions>}
		 */
		commitEdit: (
			options: iDiffusion.DiffusionCommitEdit
		): Promise<Transactions> => {
			return this.makeRequest(
				'diffusion.commit.edit',
				this.transactionOptions(options)
			);
		},

		/**
		 *Read information about commits. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/diffusion.commit.search/}
		 *
		 * @param {iDiffusion.DiffusionCommitSearch} options
		 * @returns {Promise<iDiffusion.RetDiffusionCommitSearch>}
		 */
		commitSearch: (
			options: iDiffusion.DiffusionCommitSearch
		): Promise<iDiffusion.RetDiffusionCommitSearch> => {
			return this.makeRequest(
				'diffusion.commit.search',
				this.returnOptionsAttachments(options)
			);
		},

		/**
		 *Get the commit identifiers for a commit's parent or parents. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/diffusion.commitparentsquery/}
		 *
		 * @param {iDiffusion.DiffusionCommitparentsquery} options
		 * @returns {Promise<GenericReturn>}
		 */
		commitparentsquery: (
			options: iDiffusion.BranchCommitRepo
		): Promise<GenericReturn> => {
			return this.makeRequest('diffusion.commitparentsquery', {
				commit: options.commit,
				repository: options?.repository,
				branch: options?.branch
			});
		},

		/**
		 *Get diff information from a repository for a specific path at an (optional) commit. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/diffusion.diffquery/}
		 *
		 * @param {iDiffusion.DiffusionDiffQuery} options
		 * @returns {Promise<iDiffusion.RetDiffusionDiffquery>}
		 */
		diffquery: (
			options: iDiffusion.DiffusionDiffQuery
		): Promise<iDiffusion.RetDiffusionDiffquery> => {
			return this.makeRequest('diffusion.diffquery', {
				path: options?.path,
				commit: options?.commit,
				repository: options.repository,
				branch: options?.branch
			});
		},

		/**
		 *Determine if code exists in a version control system. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/diffusion.existsquery/}
		 *
		 * @param {iDiffusion.DiffusionExistsquery} options
		 * @returns {Promise<any>}
		 */
		existsquery: (options: iDiffusion.BranchCommitRepo): Promise<any> => {
			return this.makeRequest('diffusion.existsquery', {
				commit: options.commit,
				repository: options?.repository,
				branch: options?.branch
			});
		},

		/**
		 *Retreive file content from a repository. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/diffusion.filecontentquery/}
		 *
		 * @param {iDiffusion.DiffusionFilecontentquery} options
		 * @returns {Promise<iDiffusion.RetDiffusionFilecontentquery>}
		 */
		filecontentquery: (
			options: iDiffusion.DiffusionFilecontentquery
		): Promise<iDiffusion.RetDiffusionFilecontentquery> => {
			return this.makeRequest('diffusion.filecontentquery', {
				path: options.path,
				commit: options?.commit,
				timeout: options?.timeout,
				byteLimit: options?.byteLimit,
				repository: options.repository,
				branch: options?.branch
			});
		},

		/**
		 *Retrieve Diffusion symbol information. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/diffusion.findsymbols/}
		 *
		 * @param {iDiffusion.DiffusionFindsymbols} options
		 * @returns {Promise<GenericReturn>}
		 */
		findsymbols: (
			options: iDiffusion.DiffusionFindsymbols
		): Promise<GenericReturn> => {
			return this.makeRequest('diffusion.findsymbols', {
				name: options?.name,
				namePrefix: options?.namePrefix,
				context: options?.context,
				language: options?.language,
				type: options?.type,
				repositoryPHID: options?.repositoryPHID
			});
		},

		/**
		 *Returns history information for a repository at a specific commit and path. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/diffusion.historyquery/}
		 *
		 * @param {iDiffusion.DiffusionHistoryquery} options
		 * @returns {Promise<iDiffusion.RetDiffusionHistoryquery>}
		 */
		historyquery: (
			options: iDiffusion.DiffusionHistoryquery
		): Promise<iDiffusion.RetDiffusionHistoryquery> => {
			return this.makeRequest('diffusion.historyquery', {
				commit: options.commit,
				against: options?.against,
				path: options?.path,
				offset: options?.offset,
				limit: options?.limit,
				needDirectChanges: options?.needDirectChanges,
				needChildChanges: options?.needChildChanges,
				repository: options?.repository,
				branch: options?.branch
			});
		},

		/**
		 *Get the commits at which paths were last modified. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/diffusion.lastmodifiedquery/}
		 *
		 * @param {iDiffusion.DiffusionLastmodifiedQuery} options
		 * @returns {Promise<GenericReturn>}
		 */
		lastmodifiedquery: (
			options: iDiffusion.DiffusionLastmodifiedQuery
		): Promise<GenericReturn> => {
			return this.makeRequest('diffusion.lastmodifiedquery', {
				paths: options.paths,
				repository: options?.repository,
				branch: options?.branch
			});
		},

		/**
		 *Merged commit information for a specific commit in a repository. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/diffusion.mergedcommitsquery/}
		 *
		 * @param {iDiffusion.DiffusionMergedcommitsquery} options
		 * @returns {Promise<GenericReturn>}
		 */
		mergedcommitsquery: (
			options: iDiffusion.DiffusionMergedcommitsquery
		): Promise<GenericReturn> => {
			return this.makeRequest('diffusion.mergedcommitsquery', {
				commit: options.commit,
				branch: options?.branch,
				repository: options?.repository,
				limit: options?.limit
			});
		},

		/**
		 ***Marked for deprecation** Retreive information about commits. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/diffusion.querycommits/}
		 *
		 * @param {iDiffusion.DiffusionQuerycommits} options
		 * @returns {Promise<iDiffusion.RetDiffusionQuerycommits>}
		 */
		querycommits: (
			options: iDiffusion.DiffusionQuerycommits
		): Promise<iDiffusion.RetDiffusionQuerycommits> => {
			return this.makeRequest('diffusion.querycommits', {
				ids: options?.ids,
				phids: options?.phids,
				names: options?.names,
				repositoryPHID: options?.repositoryPHID,
				needMessages: options?.needMessages,
				bypassCache: options?.bypassCache,
				before: options?.before,
				after: options?.after,
				limit: options?.limit
			});
		},

		/**
		 *Filename search on a repository. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/diffusion.querypaths/}
		 *
		 * @param {iDiffusion.DiffusionQuerypaths} [options]
		 * @returns {Promise<GenericReturn>}
		 */
		querypaths: (
			options?: iDiffusion.DiffusionQuerypaths
		): Promise<GenericReturn> => {
			return this.makeRequest('diffusion.querypaths', {
				path: options?.path,
				commit: options?.commit,
				pattern: options?.pattern,
				limit: options?.limit,
				offset: options?.offset,
				repository: options?.repository,
				branch: options?.branch
			});
		},

		/**
		 *Get raw diff information from a repository for a specific commit at an (optional) path. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/diffusion.rawdiffquery/}
		 *
		 * @param {iDiffusion.DiffusionRawdiffquery} options
		 * @returns {Promise<GenericReturn>}
		 */
		rawdiffquery: (
			options: iDiffusion.DiffusionRawdiffquery
		): Promise<GenericReturn> => {
			return this.makeRequest('diffusion.rawdiffquery', {
				path: options?.path,
				commit: options?.commit,
				linesOfContext: options?.linesOfContext,
				timeout: options?.timeout,
				byteLimit: options?.byteLimit,
				repository: options?.repository,
				branch: options?.branch
			});
		},

		/**
		 *Query a git repository for ref information at a specific commit. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/diffusion.refsquery/}
		 *
		 * @param {iDiffusion.BranchCommitRepo} options
		 * @returns {Promise<iDiffusion.RetDiffusionRefsquery>}
		 */
		refsquery: (
			options: iDiffusion.BranchCommitRepo
		): Promise<iDiffusion.RetDiffusionRefsquery> => {
			return this.makeRequest('diffusion.refsquery', {
				branch: options?.branch,
				commit: options?.commit,
				repository: options?.repository
			});
		},

		/**
		 *Apply transactions to create a new repository or edit an existing one. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/diffusion.repository.edit/}
		 *
		 * @param {iDiffusion.DiffusionRepositoryEdit} options
		 * @returns {Promise<Transactions>}
		 */
		repositoryEdit: (
			options: iDiffusion.DiffusionRepositoryEdit
		): Promise<Transactions> => {
			return this.makeRequest(
				'diffusion.repository.edit',
				this.transactionOptions(options)
			);
		},

		/**
		 *Read information about repositories. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/diffusion.repository.search/} 
		 *
		 * @param {iDiffusion.DiffusionRepositorySearch} options
		 * @returns {Promise<iDiffusion.RetDiffusionRepositorySearch>}
		 */
		repositorySearch: (
			options: iDiffusion.DiffusionRepositorySearch
		): Promise<iDiffusion.RetDiffusionRepositorySearch> => {
			return this.makeRequest(
				'diffusion.repository.search',
				this.returnOptionsAttachments(options)
			);
		},

		/**
		 *Resolve references into stable, canonical identifiers. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/diffusion.resolverefs/}
		 *
		 * @param {iDiffusion.DiffusionResolverefs} options
		 * @returns {Promise<GenericReturn>}
		 */
		resolverefs: (
			options: iDiffusion.DiffusionResolverefs
		): Promise<GenericReturn> => {
			return this.makeRequest('diffusion.resolverefs', {
				refs: options?.refs,
				types: options?.types,
				repository: options?.repository,
				branch: options?.branch
			});
		},

		/**
		 *Search (grep) a repository at a specific path and commit. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/diffusion.searchquery/}
		 *
		 * @param {iDiffusion.DiffusionSearchquery} options
		 * @returns {Promise<GenericReturn>}
		 */
		searchquery: (
			options: iDiffusion.DiffusionSearchquery
		): Promise<GenericReturn> => {
			return this.makeRequest('diffusion.searchquery', {
				path: options?.path,
				commit: options?.commit,
				grep: options.grep,
				limit: options?.limit,
				offset: options?.offset,
				branch: options?.branch,
				repository: options?.repository
			});
		},

		/**
		 *Retrieve information about tags in a repository. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/diffusion.tagsquery/}
		 *
		 * @param {iDiffusion.DiffusionTagsquery} options
		 * @returns {Promise<GenericReturn>}
		 */
		tagsquery: (
			options: iDiffusion.DiffusionTagsquery
		): Promise<GenericReturn> => {
			return this.makeRequest('diffusion.tagsquery', {
				names: options?.names,
				needMessages: options?.needMessages,
				commit: options?.commit,
				limit: options?.limit,
				offset: options?.offset,
				branch: options?.branch,
				repository: options?.repository
			});
		},

		/**
		 *Apply transactions to create a new repository URI or edit an existing one. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/diffusion.uri.edit/}
		 *
		 * @param {iDiffusion.DiffusionUriedit} options
		 * @returns {Promise<Transactions>}
		 */
		uriEdit: (options: iDiffusion.DiffusionUriedit): Promise<Transactions> => {
			return this.makeRequest(
				'diffusion.uri.edit',
				this.transactionOptions(options)
			);
		},

		/**
		 *Get lint messages for existing code. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/diffusion.getlintmessages/}
		 *
		 * @param {iDiffusion.DiffusionGetlinemessages} options
		 * @returns {Promise<GenericReturn>}
		 */
		getlintmessages: (
			options: iDiffusion.DiffusionGetlinemessages
		): Promise<GenericReturn> => {
			return this.makeRequest('diffusion.getlintmessages', {
				repositoryPHID: options.repositoryPHID,
				branch: options.branch,
				commit: options?.commit,
				files: options.files
			});
		},

		/**
		 *Advises Phabricator to look for new commits in a repository as soon 
		 as possible. This advice is most useful if you have just pushed 
		 new commits to that repository. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/diffusion.looksoon/}
		 *
		 * @param {{repositories?: Array<string>, urgency?: string}} options
		 * @returns {Promise<GenericReturn>}
		 */
		looksoon: (options: {
			repositories?: Array<string>;
			urgency?: string;
		}): Promise<GenericReturn> => {
			return this.makeRequest('diffusion.looksoon', {
				repositories: options?.repositories,
				urgency: options?.urgency
			});
		},

		/**
		 *Publish coverage information for a repository. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/diffusion.updatecoverage/}
		 *
		 * @param {iDiffusion.DiffusionUpdatecoverage} options
		 * @returns {Promise<GenericReturn>}
		 */
		updatecoverage: (
			options: iDiffusion.DiffusionUpdatecoverage
		): Promise<GenericReturn> => {
			return this.makeRequest('diffusion.updatecoverage', {
				repositoryPHID: options.repositoryPHID,
				commit: options.commit,
				branch: options.branch,
				mode: options?.mode,
				coverage: options.coverage
			});
		}
	};

	/**
	 *Allocate software resources.
	 *
	 * @memberof Condoit
	 */
	public drydock = {
		/**
		 *Retrieve information about Drydock authorizations. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/drydock.authorization.search/}
		 *
		 * @param {iDrydock.DrydockAlmanacSearch} options
		 * @returns {Promise<iDrydock.RetHarbormasterArtifactSearch>}
		 */
		authorizationSearch: (
			options: iDrydock.DrydockAlmanacSearch
		): Promise<iDrydock.RetDDAlmanacSearch> => {
			return this.makeRequest(
				'drydock.authorization.search',
				this.returnOptions(options)
			);
		},

		/**
		 *Apply transactions to create or edit a blueprint. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/drydock.blueprint.edit/}
		 *
		 * @param {iDrydock.DrydockBlueprintEdit} options
		 * @returns {Promise<Transactions>}
		 */
		blueprintEdit: (
			options: iDrydock.DrydockBlueprintEdit
		): Promise<Transactions> => {
			return this.makeRequest(
				'drydock.blueprint.edit',
				this.transactionOptions(options)
			);
		},

		/**
		 *Retrieve information about Drydock blueprints. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/drydock.blueprint.search/}
		 *
		 * @param {iDrydock.DrydockBlueprintSearch} options
		 * @returns {Promise<iDrydock.RetDDBlueprintSearch>}
		 */
		blueprintSearch: (
			options: iDrydock.DrydockBlueprintSearch
		): Promise<iDrydock.RetDDBlueprintSearch> => {
			return this.makeRequest(
				'drydock.blueprint.search',
				this.returnOptionsAttachments(options)
			);
		},

		/**
		 *Retrieve information about Drydock leases. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/drydock.lease.search/}
		 *
		 * @param {iDrydock.DrydockLeaseSearch} options
		 * @returns {Promise<iDrydock.RetDDLeaseSearch>}
		 */
		leaseSearch: (
			options: iDrydock.DrydockLeaseSearch
		): Promise<iDrydock.RetDDLeaseSearch> => {
			return this.makeRequest(
				'drydock.lease.search',
				this.returnOptions(options)
			);
		},

		/**
		 *Retrieve information about Drydock resources. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/drydock.resource.search/}
		 *
		 * @param {iDrydock.DrydockResourceSearch} options
		 * @returns {Promise<iDrydock.RetDDResourceSearch>}
		 */
		resourceSearch: (
			options: iDrydock.DrydockResourceSearch
		): Promise<iDrydock.RetDDResourceSearch> => {
			return this.makeRequest(
				'drydock.resource.search',
				this.returnOptions(options)
			);
		}
	};

	/**
	 *Edge relationships between objects.
	 *
	 * @memberof Condoit
	 */
	public edge = {
		/**
		 *Read edge relationships between objects. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/edge.search/}
		 *
		 * @param {iEdge.EdgeSearch} options
		 * @returns {Promise<GenericReturn>}
		 */
		search: (options: iEdge.EdgeSearch): Promise<GenericReturn> => {
			return this.makeRequest('edge.search', {
				sourcePHIDs: options.sourcePHIDs,
				types: options.types,
				destinationPHIDs: options?.destinationPHIDs,
				before: options?.before,
				after: options?.after,
				limit: options?.limit
			});
		}
	};

	/**
	 *Review recent activity.
	 *
	 * @memberof Condoit
	 */
	public feed = {
		/**
		 *Publish a story to the feed. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/feed.publish/}
		 *
		 * @param {{
		 * 			type: string;
		 * 			data: object;
		 * 			time?: number;
		 * 		}} options
		 * @returns {Promise<GenericReturn>}
		 */
		publish: (options: {
			type: string;
			data: object;
			time?: number;
		}): Promise<GenericReturn> => {
			return this.makeRequest('feed.publish', {
				type: options.type,
				data: options.data,
				time: options?.time
			});
		},

		/**
		 *Query the feed for stories. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/feed.query/}
		 *
		 * @param {iFeed.FeedQuery} [options]
		 * @returns {Promise<iFeed.RetFeedQuery>}
		 */
		query: (options: iFeed.FeedQuery): Promise<iFeed.RetFeedQuery> => {
			return this.makeRequest('feed.query', {
				filterPHIDs: options?.filterPHIDs,
				limit: options?.limit,
				before: options?.before,
				after: options?.after,
				view: options?.view
			});
		}
	};

	/**
	 *Store and Share files.
	 *
	 * @memberof Condoit
	 */
	public file = {
		/**
		 *Allocate space to upload a file. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/file.allocate/}
		 *
		 * @param {iFile.FileAllocate} options
		 * @returns {Promise<iFile.RetFileAllocate>}
		 */
		allocate: (options: iFile.FileAllocate): Promise<iFile.RetFileAllocate> => {
			return this.makeRequest('file.allocate', {
				name: options.name,
				contentLength: options.contentLength,
				contentHash: options?.contentHash,
				viewPolicy: options?.viewPolicy,
				deleteAfterEpoch: options?.deleteAfterEpoch
			});
		},

		/**
		 *Down a stored file. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/file.download/}
		 *
		 * @param {{phid: string}} options
		 * @returns {Promise<string>} Base64 encoded file as string. 
		 */
		download: (options: {
			phid: string;
			path: string;
			encoding: string;
		}): Promise<string | object> => {
			return new Promise((resolve, reject) => {
				this.makeRequest('file.download', { phid: options.phid })
					.then((res) => {
						let data = res.result;
						if (data) {
							let saveData = new Buffer(data, 'base64');
							writeFile(
								options.path,
								saveData,
								options?.encoding ?? 'utf8',
								(err) => {
									if (err) reject(err);
									resolve({ downloadedFile: options.path });
								}
							);
						} else {
							reject(res);
						}
					})
					.catch((error) => reject(error));
			});
		},

		/**
		 ***Marked for deprecation** Get information about a file. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/file.info/}
		 *
		 * @param {{ id?: number; phid?: string }} options
		 * @returns {Promise<GenericReturn>}
		 */
		info: (options: {
			id?: number;
			phid?: string;
		}): Promise<iFile.RetFileInfo> => {
			return this.makeRequest('file.info', {
				id: options?.id,
				phid: options?.phid
			});
		},

		/**
		 *Get information about file chunks. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/file.querychunks/}
		 *
		 * @param {{
		 * 			filePHID: string;
		 * 		}} options
		 * @returns {Promise<iFile.RetFileQuerychunks>}
		 */
		querychunks: (options: {
			filePHID: string;
		}): Promise<iFile.RetFileQuerychunks> => {
			return this.makeRequest('file.querychunks', {
				filePHID: options.filePHID
			});
		},

		/**
		 *Search for files. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/file.search/}
		 *
		 * @param {iFile.FileSearch} options
		 * @returns {Promise<iFile.RetFileSearch>}
		 */
		search: (options: iFile.FileSearch): Promise<iFile.RetFileSearch> => {
			return this.makeRequest(
				'file.search',
				this.returnOptionsAttachments(options)
			);
		},

		/**
		 *Upload a file. The Phabricator API makes the name optional, but this 
		 method requires it. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/file.upload/}
		 *
		 * @param {iFile.FileUpload} options
		 * @returns {Promise<iFile.RetFileUpload>}
		 */
		upload: (options: iFile.FileUpload): Promise<iFile.RetFileUpload> => {
			return this.makeRequest('file.upload', {
				data_base64: new Buffer(readFileSync(options.filePath)).toString(
					'base64'
				),
				name: options.name,
				viewPolicy: options?.viewPolicy,
				canCDN: options?.canCDN
			});
		},

		/**
		 *Upload a chunk of file data to the server. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/file.uploadchunk/}
		 *
		 * @param {iFile.FileUploadchunk} options
		 * @returns {Promise<GenericReturn>}
		 */
		uploadchunk: (options: iFile.FileUploadchunk): Promise<null> => {
			return this.makeRequest('file.uploadchunk', {
				filePHID: options.filePHID,
				byteStart: options.byteStart,
				data: options.data,
				dataEncoding: options.dataEncoding
			});
		}
	};

	/**
	 *Personal bookmarks.
	 *
	 * @memberof Condoit
	 */
	public flag = {
		/**
		 *Clear or delete a flag or bookmark
		 [Docs]{@link https://secure.phabricator.com/conduit/method/flag.delete/}
		 *
		 * @param {{
		 * 			id: number;
		 * 			objectPHID: string;
		 * 		}} options
		 * @returns {Promise<iFlag.RetFlagDelete>}
		 */
		delete: (options: {
			id: number;
			objectPHID: string;
		}): Promise<iFlag.RetFlagDelete> => {
			return this.makeRequest('flag.delete', {
				id: options?.id,
				objectPHID: options?.objectPHID
			});
		},

		/**
		 *Create or modify a flag
		 [Docs]{@link https://secure.phabricator.com/conduit/method/flag.edit/}
		 *
		 * @param {{
		 * 			objectPHID: string;
		 * 			color: number;
		 * 			note: string;
		 * 		}} options
		 * @returns {Promise<iFlag.RetFlagEdit>}
		 */
		edit: (options: {
			objectPHID: string;
			color: number;
			note: string;
		}): Promise<iFlag.RetFlagEdit> => {
			return this.makeRequest('flag.edit', {
				objectPHID: options?.objectPHID,
				color: options?.color,
				note: options?.note
			});
		},

		/**
		 *Query flag markers. Flags can also be considered as bookmarks. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/flag.query/}
		 *
		 * @param {iFlag.FlagQuery} options
		 * @returns {Promise<iFlag.RetFlagQuery>}
		 */
		query: (options: iFlag.FlagQuery): Promise<iFlag.RetFlagQuery> => {
			return this.makeRequest('flag.query', {
				ownerPHIDs: options?.ownerPHIDs,
				types: options?.types,
				objectPHIDs: options?.objectPHIDs,
				offset: options?.offset,
				limit: options?.limit
			});
		}
	};

	/**
	 *Harbormaster is the application used to track and manage CI/CD within Phabricator
	 *
	 * @memberof Condoit
	 */
	public harbormaster = {
		/**
		 *Query Harbormaster for build artifacts. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/harbormaster.artifact.search/}
		 *
		 * @param {iHarbormaster.HarbormasterArtifactSearch} [options]
		 * @returns {Promise<iHarbormaster.RetHarbormasterArtifactSearch>}
		 */
		artifactSearch: (
			options: iHarbormaster.HarbormasterArtifactSearch
		): Promise<iHarbormaster.RetHarbormasterArtifactSearch> => {
			return this.makeRequest(
				'harbormaster.artifact.search',
				this.returnOptions(options)
			);
		},

		/**
		 *Search Harbormaster build information. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/harbormaster.build.search/}
		 *
		 * @param {iHarbormaster.HarbormasterBuildSearch} [options]
		 * @returns {Promise<iHarbormaster.RetHarbormasterBuildSearch>}
		 */
		buildSearch: (
			options: iHarbormaster.HarbormasterBuildSearch
		): Promise<iHarbormaster.RetHarbormasterBuildSearch> => {
			return this.makeRequest(
				'harbormaster.build.search',
				this.returnOptions(options)
			);
		},

		/**
		 *Endpoint for buildable artifacts and their statuses. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/harbormaster.buildable.search/}
		 *
		 * @param {iHarbormaster.HarbormasterBuildplanSearch} options
		 * @returns {Promise<iHarbormaster.RetHarbormasterBuildplanSearch>}
		 */
		buildableSearch: (
			options: iHarbormaster.HarbormasterBuildplanSearch
		): Promise<iHarbormaster.RetHarbormasterBuildplanSearch> => {
			return this.makeRequest(
				'harbormaster.buildable.search',
				this.returnOptions(options)
			);
		},

		/**
		 *Edit a Harbormaster buildplan. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/harbormaster.buildplan.edit/}
		 *
		 * @param {iHarbormaster.HarbormasterBuildplanEdit} options
		 * @returns {Promise<Transactions>}
		 */
		buildplanEdit: (
			options: iHarbormaster.HarbormasterBuildplanEdit
		): Promise<Transactions> => {
			return this.makeRequest(
				'harbormaster.buildplan.edit',
				this.transactionOptions(options)
			);
		},

		/**
		 *Query build plans in Harbormaster. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/harbormaster.buildplan.search/}
		 *
		 * @param {iHarbormaster.HarbormasterBuildableSearch} [options]
		 * @returns {Promise<iHarbormaster.RetHarbormasterBuildableSearch>}
		 */
		buildplanSearch: (
			options: iHarbormaster.HarbormasterBuildplanSearch
		): Promise<iHarbormaster.RetHarbormasterBuildplanSearch> => {
			return this.makeRequest(
				'harbormaster.buildplan.search',
				this.returnOptions(options)
			);
		},

		/**
		 *Search logs for builds. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/harbormaster.log.search/}
		 *
		 * @param {iHarbormaster.HarbormasterLogSearch} options
		 * @returns {Promise<iHarbormaster.RetHarbormasterLogSearch>}
		 */
		logSearch: (
			options: iHarbormaster.HarbormasterLogSearch
		): Promise<iHarbormaster.RetHarbormasterLogSearch> => {
			return this.makeRequest(
				'harbormaster.log.search',
				this.returnOptions(options)
			);
		},

		/**
		 *Search build targets. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/harbormaster.target.search/}
		 *
		 * @param {iHarbormaster.HarbormasterTargetSearch} options
		 * @returns {Promise<iHarbormaster.RetHarbormasterTargetSearch>}
		 */
		targetSearch: (
			options: iHarbormaster.HarbormasterTargetSearch
		): Promise<iHarbormaster.RetHarbormasterTargetSearch> => {
			return this.makeRequest(
				'harbormaster.target.search',
				this.returnOptions(options)
			);
		},

		/**
		 *Create a harbormaster build artifact. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/harbormaster.createartifact/}
		 *
		 * @param {iHarbormaster.HarbormasterCreateartifact} options
		 * @returns {Promise<GenericReturn>}
		 */
		createArtifact: (
			options: iHarbormaster.HarbormasterCreateartifact
		): Promise<GenericReturn> => {
			return this.makeRequest('harbormaster.create.artifact', {
				buildTargetPHID: options.buildTargetPHID,
				artifactKey: options.artifactKey,
				artifactType: options.artifactType,
				artifactData: options.artifactData
			});
		},

		/**
		 *Load or create build autotargets.
		 * [Docs]{@link https://secure.phabricator.com/conduit/method/harbormaster.queryautotargets/}
		 *
		 * @param {{
		 * 			objectPHID: string;
		 * 			targetKeys: Array<string>;
		 * 		}} options
		 * @returns {Promise<GenericReturn>}
		 */
		queryAutotargets: (options: {
			objectPHID: string;
			targetKeys: Array<string>;
		}): Promise<GenericReturn> => {
			return this.makeRequest('harbormaster.queryautotargets', {
				objectPHID: options.objectPHID,
				targetKeys: options.targetKeys
			});
		},

		/**
		 * Query Harbormaster buildables.
		 * [Docs]{@link https://secure.phabricator.com/conduit/method/harbormaster.querybuildables/}
		 *
		 * @param {iHarbormaster.HarbormasterQuerybuildables} [options]
		 * @returns {Promise<GenericReturn>}
		 */
		querybuildables: (
			options: iHarbormaster.HarbormasterQuerybuildables
		): Promise<GenericReturn> => {
			return this.makeRequest('harbormaster.querybuildables', {
				ids: options?.ids,
				phids: options?.phids,
				buildablePHIDs: options?.buildablePHIDs,
				containerPHIDs: options?.containerPHIDs,
				manualBuildables: options?.manualBuildables,
				before: options?.before,
				after: options?.after,
				limit: options?.limit
			});
		},

		/**
		 *Send a message about the status of a build target to Harbormaster, 
		 notifying the application of build results in an external system. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/harbormaster.sendmessage/}
		 *
		 * @param {iHarbormaster.HarbormasterSendmessage} options
		 * @returns {Promise<GenericReturn>}
		 */
		sendmessage: (
			options: iHarbormaster.HarbormasterSendmessage
		): Promise<GenericReturn> => {
			return this.makeRequest('harbormaster.sendmessage', {
				buildTargetPHID: options.buildTargetPHID,
				type: options.type,
				unit: options?.unit,
				lint: options?.lint
			});
		}
	};

	/**
	 *The Macro application is used for image hosting.
	 *
	 * @memberof Condoit
	 */
	public macro = {
		/**
		 *Edit or add a new image to Macro application. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/macro.edit/}
		 *
		 * @param {iMacro.MarcoEdit} options
		 * @returns {Promise<Transactions>}
		 */
		edit: (options: iMacro.MarcoEdit): Promise<Transactions> => {
			return this.makeRequest('macro.edit', this.transactionOptions(options));
		},

		/**
		 *Query Macro application for images. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/macro.query/}
		 *
		 * @param {iMacro.MacroQuery} [options]
		 * @returns {Promise<iMacro.RetMacroQuery>}
		 */
		query: (options: iMacro.MacroQuery): Promise<iMacro.RetMacroQuery> => {
			return this.makeRequest('macro.query', {
				authodPHIDs: options?.authorPHIDs,
				phids: options?.phids,
				ids: options?.ids,
				names: options?.names,
				nameLike: options?.nameLike
			});
		},

		/**
		 *Create a meme from an existing image. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/phriction.creatememe/}
		 *
		 * @param {{
		 * 			macroName: string;
		 * 			upperText?: string;
		 * 			lowerText?: string;
		 * 		}} options
		 * @returns {Promise<iMacro.RetMacroCreatememe>}
		 */
		creatememe: (options: {
			macroName: string;
			upperText?: string;
			lowerText?: string;
		}): Promise<iMacro.RetMacroCreatememe> => {
			return this.makeRequest('macro.creatememe', {
				macroName: options.macroName,
				upperText: options?.upperText,
				lowerText: options?.lowerText
			});
		}
	};

	/**
	 *API endpoints for Maniphest which is Phabricators task management 
	 system. 
	 *
	 * @memberof Condoit
	 */
	public maniphest = {
		/**
		 ***Marked for deprecation. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/maniphest.createtask/}
		 *
		 * @param {iManiphest.ManiphestCreatetask} options
		 * @returns {Promise<iManiphest.RetManiphestCreatetask>}
		 */
		createtask: (
			options: iManiphest.ManiphestCreatetask
		): Promise<iManiphest.RetManiphestCreatetask> => {
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
		 * @param {iManiphest.ManiphestEdit} options
		 * @returns {Promise<Transactions>}
		 */
		edit: (options: iManiphest.ManiphestEdit): Promise<Transactions> => {
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
		 * @returns {Promise<iManiphest.RetManiphestGettasktransactions>}
		 */
		gettasktransactions: (options: {
			ids: Array<number>;
		}): Promise<iManiphest.RetManiphestGettasktransactions> => {
			return this.makeRequest('maniphest.gettasktransactions', {
				ids: options.ids
			});
		},

		/**
		 ***Marked for deprecation** Retrieve information about a Maniphest task, given its ID.
     [Docs]{@link https://secure.phabricator.com/conduit/method/maniphest.info}
		 *
		 * @param {number} taskId
		 * @returns {Promise<iManiphest.RetManiphestInfo>}
		 */
		info: (options: {
			taskId: number;
		}): Promise<iManiphest.RetManiphestInfo> => {
			return this.makeRequest('maniphest.info', { task_id: options.taskId });
		},

		/**
		 *Returns information about the possible priorities for Maniphest tasks. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/maniphest.priority.search/}
		 *
		 * @returns {Promise<iManiphest.RetManiphestPrioritySearch>}
		 */
		prioritySearch: (): Promise<iManiphest.RetManiphestPrioritySearch> => {
			return this.makeRequest('maniphest.priority.search', {});
		},

		/**
		 ***Marked for deprecation** Execute complex searches for Maniphest tasks. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/user.whoami/}
		 *
		 * @param {iManiphest.ManiphestQuery} options
		 * @returns {Promise<iManiphest.RetManiphestQuery>}
		 */
		query: (
			options: iManiphest.ManiphestQuery
		): Promise<iManiphest.RetManiphestQuery> => {
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
		 * @returns {Promise<iManiphest.RetManiphestQuerystatuses>}
		 */
		querystatuses: (): Promise<iManiphest.RetManiphestQuerystatuses> => {
			return this.makeRequest('maniphest.querystatuses', {});
		},

		/**
		 **Search Maniphest tasks
		 [Docs]{@link https://secure.phabricator.com/conduit/method/maniphest.search/}
		 *
		 * @param {iManiphest.ManiphestSearch} options
		 * @returns {Promise<iManiphest.RetManiphestSearch>}
		 */
		search: (
			options: iManiphest.ManiphestSearch
		): Promise<iManiphest.RetManiphestSearch> => {
			return this.makeRequest(
				'maniphest.search',
				this.returnOptionsAttachments(options)
			);
		},

		/**
		 *Returns information about the possible statuses for Maniphest tasks. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/maniphest.status.search/}
		 *
		 * @returns {Promise<iManiphest.RetManiphestStatusSearch>}
		 */
		statusSearch: (): Promise<iManiphest.RetManiphestStatusSearch> => {
			return this.makeRequest('maniphest.status.search', {});
		},

		/**
		 ***Marked for deprecation** Update an existing Maniphest task. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/maniphest.update/}
		 *
		 * @param {iManiphest.ManiphestUpdate} options
		 * @returns {Promise<iManiphest.RetManiphestUpdate>}
		 */
		update: (
			options: iManiphest.ManiphestUpdate
		): Promise<iManiphest.RetManiphestUpdate> => {
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

	/**
	 *API endpoints for the Owners application.
	 *
	 * @memberof Condoit
	 */
	public owners = {
		/**
		 *Create or edit an object in the Owners application. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/owners.edit/}
		 *
		 * @param {iOwners.OwnersEdit} options
		 * @returns {Promise<Transactions>}
		 */
		edit: (options: iOwners.OwnersEdit): Promise<Transactions> => {
			return this.makeRequest('owners.edit', this.transactionOptions(options));
		},

		/**
		 *Search the Owners application. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/owners.search/}
		 *
		 * @param {iOwners.OwnersSearch} [options]
		 * @returns {Promise<iOwners.RetOwnersSearch>}
		 */
		search: (
			options: iOwners.OwnersSearch
		): Promise<iOwners.RetOwnersSearch> => {
			return this.makeRequest(
				'owners.search',
				this.returnOptionsAttachments(options)
			);
		}
	};

	/**
	 *API around Phabricators credential store.
	 *
	 * @memberof Condoit
	 */
	public passphrase = {
		/**
		 *Query credentials. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/passphrase.query/}
		 *
		 * @param {iPassphrase.PassphraseQuery} [options]
		 * @returns {Promise<iPassphrase.RetPassphraseQuery>}
		 */
		query: (
			options: iPassphrase.PassphraseQuery
		): Promise<iPassphrase.RetPassphraseQuery> => {
			return this.makeRequest('passphrase.query', {
				ids: options?.ids,
				phids: options?.phids,
				needSecrets: options?.needSecrets,
				needPublicKeys: options?.needPublicKeys,
				order: options?.order,
				before: options?.before,
				after: options?.after,
				limit: options?.limit
			});
		}
	};

	/**
	 *API around the Phame application which is the blogging 
	 service provided by Phabricator. 
	 *
	 * @memberof Condoit
	 */
	public phame = {
		/**
		 *Edit or create a new Phame blog. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/phame.blog.edit/}
		 *
		 * @param {iPhame.PhameBlogEdit} options
		 * @returns {Promise<Transactions>}
		 */
		blogEdit: (options: iPhame.PhameBlogEdit): Promise<Transactions> => {
			return this.makeRequest(
				'phame.blog.edit',
				this.transactionOptions(options)
			);
		},

		/**
		 *Search Phame blogs. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/phame.blog.search/}
		 *
		 * @param {iPhame.PhameBlogSearch} [options]
		 * @returns {Promise<iPhame.RetPhameBlogSearch>}
		 */
		blogSearch: (
			options: iPhame.PhameBlogSearch
		): Promise<iPhame.RetPhameBlogSearch> => {
			return this.makeRequest(
				'phame.blog.search',
				this.returnOptionsAttachments(options)
			);
		},

		/**
		 *Edit or create a new blog post. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/phame.post.edit/}
		 *
		 * @param {iPhame.PhamePostEdit} options
		 * @returns {Promise<Transactions>}
		 */
		postEdit: (options: iPhame.PhamePostEdit): Promise<Transactions> => {
			return this.makeRequest(
				'phame.post.edit',
				this.transactionOptions(options)
			);
		},

		/**
		 *Search for Phame blog posts. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/phame.post.search/}
		 *
		 * @param {iPhame.PhamePostSearch} [options]
		 * @returns {Promise<iPhame.RetPhamePostSearch>}
		 */
		postSearch: (
			options: iPhame.PhamePostSearch
		): Promise<iPhame.RetPhamePostSearch> => {
			return this.makeRequest(
				'phame.post.search',
				this.returnOptionsAttachments(options)
			);
		}
	};

	/**
	 *API around PHID which is the unique identifier used by Phabricator 
	 across all applications. 
	 *
	 * @memberof Condoit
	 */
	public phid = {
		/**
		 *Look up objects by name. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/phid.lookup/}
		 *
		 * @param {{
		 * 			names: Array<string>;
		 * 		}} options
		 * @returns {Promise<iPhid.RetPhidLookup>}
		 * 
		 * @example
		 * conduit.phid.lookup({names: ["T1", "T2"]})
		 */
		lookup: (options: {
			names: Array<string>;
		}): Promise<iPhid.RetPhidLookup> => {
			return this.makeRequest('phid.lookup', {
				names: options.names
			});
		},

		/**
		 *Retrieve information about arbitrary PHIDs. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/phid.query/}
		 *
		 * @param {{ phids: Array<string> }} options
		 * @returns {Promise<iPhid.RetPhidQuery>}
		 * 
		 * @example
		 * conduit.phid.query({phids: ['PHID-abcd']})
		 */
		query: (options: { phids: Array<string> }): Promise<iPhid.RetPhidQuery> => {
			return this.makeRequest('phid.query', {
				phids: options.phids
			});
		}
	};

	/**
	 *API around the Phriction application which is a wiki service.
	 *
	 * @memberof Condoit
	 */
	public phriction = {
		/**
		 *Search content in Phriction wiki. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/phriction.content.search/}
		 *
		 * @param {iPhriction.PhrictionContentSearch} options
		 * @returns {Promise<iPhriction.RetPhrictionContentSearch>}
		 * 
		 * @example
		 * condoit.phriction.contentSearch({attachments: {content: true}})
		 */
		contentSearch: (
			options: iPhriction.PhrictionContentSearch
		): Promise<iPhriction.RetPhrictionContentSearch> => {
			return this.makeRequest(
				'phriction.content.search',
				this.returnOptionsAttachments(options)
			);
		},

		/**
		 *Create a new Phriction wiki document. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/phriction.create/}
		 *
		 * @param {{
		 * 			slug: string;
		 * 			title: string;
		 * 			content: string;
		 * 			description?: string;
		 * 		}} options
		 * @returns {Promise<iPhriction.RetPhrictionCreate>}
		 * 
		 * @example
		 * condoit.phriction.create({slug: 'somepage', title: 'title', content: 'some content'})
		 */
		create: (options: {
			slug: string;
			title: string;
			content: string;
			description?: string;
		}): Promise<iPhriction.RetPhrictionCreate> => {
			return this.makeRequest('phriction.create', {
				slug: options.slug,
				title: options.title,
				content: options.content,
				description: options?.description
			});
		},

		/**
		 *Search Phriction wiki documents. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/phriction.document.search/}
		 *
		 * @param {iPhriction.PhrictionDocumentSearch} [options]
		 * @returns {Promise<iPhriction.RetPhrictionDocumentSearch>}
		 */
		documentSearch: (
			options: iPhriction.PhrictionDocumentSearch
		): Promise<iPhriction.RetPhrictionDocumentSearch> => {
			return this.makeRequest(
				'phriction.document.search',
				this.returnOptionsAttachments(options)
			);
		},

		/**
		 *Edit an existing Phriction wiki document. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/phriction.edit/}
		 *
		 * @param {{
		 * 			slug: string;
		 * 			title?: string;
		 * 			content?: string;
		 * 			description?: string;
		 * 		}} options
		 * @returns {Promise<iPhriction.RetPhrictionEdit>}
		 * 
		 * @example
		 * condoit.phriction.edit({slug: '/', content: 'some new content'})
		 */
		edit: (options: {
			slug: string;
			title?: string;
			content?: string;
			description?: string;
		}): Promise<iPhriction.RetPhrictionEdit> => {
			return this.makeRequest('phriction.edit', {
				slug: options.slug,
				title: options?.title,
				content: options?.content,
				description: options?.description
			});
		},

		/**
		 ***Marked for deprecation** Get info for an existing document
		 [Docs]{@link https://secure.phabricator.com/conduit/method/phriction.info/}
		 *
		 * @param {{ slug: string }} options
		 * @returns {Promise<iPhriction.RetPhrictionInfo>}
		 */
		info: (options: { slug: string }): Promise<iPhriction.RetPhrictionInfo> => {
			return this.makeRequest('phriction.info', { slug: options.slug });
		}
	};

	public portal = {
		/**
		 *Edit or create a new portal. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/portal.edit/}
		 *
		 * @param {iPortal.PortalEdit} options
		 * @returns {Promise<Transactions>}
		 */
		edit: (options: iPortal.PortalEdit): Promise<Transactions> => {
			return this.makeRequest('portal.edit', this.transactionOptions(options));
		},

		/**
		 *Search portals. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/portal.search/}
		 *
		 * @param {iPortal.PortalSearch} [options]
		 * @returns {Promise<iPortal.RetPortalSearch>}
		 */
		search: (
			options: iPortal.PortalSearch
		): Promise<iPortal.RetPortalSearch> => {
			return this.makeRequest(
				'portal.search',
				this.returnOptionsAttachments(options)
			);
		}
	};

	/**
	 *API around the Project application in Phabricator.
	 *
	 * @memberof Condoit
	 */
	public project = {
		/**
		 *Search projects.
		 [Docs]{@link https://secure.phabricator.com/conduit/method/project.column.search/}
		 *
		 * @param {iProject.ColumnSearch} options
		 * @returns {Promise<iProject.RetColumnSearch>}
		 */
		columnSearch: (
			options: iProject.ColumnSearch
		): Promise<iProject.RetColumnSearch> => {
			return this.makeRequest(
				'project.column.search',
				this.returnOptions(options)
			);
		},

		/**
		 *Edit or create a project. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/project.edit/}
		 *
		 * @param {iProject.ProjectEdit} options
		 * @returns {Promise<Transactions>}
		 */
		edit: (options: iProject.ProjectEdit): Promise<Transactions> => {
			return this.makeRequest('project.edit', this.transactionOptions(options));
		},

		/**
		 ***Marked for deprecation. Execute searches for projects. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/project.query/}
		 *
		 * @param {iProject.ProjectQuery} [options]
		 * @returns {Promise<iProject.RetProjectQuery>}
		 */
		query: (
			options: iProject.ProjectQuery
		): Promise<iProject.RetProjectQuery> => {
			return this.makeRequest('project.query', {
				ids: options?.ids,
				names: options?.names,
				phids: options?.phids,
				slugs: options?.slugs,
				icons: options?.icons,
				colors: options?.colors,
				status: options?.status,
				members: options?.members,
				limit: options?.limit,
				offset: options?.offset
			});
		},

		/**
		 *Search or query a project. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/project.search/}
		 *
		 * @param {iProject.ProjectSearch} [options]
		 * @returns {Promise<iProject.RetProjectSearch>}
		 */
		search: (
			options: iProject.ProjectSearch
		): Promise<iProject.RetProjectSearch> => {
			return this.makeRequest(
				'project.search',
				this.returnOptionsAttachments(options)
			);
		}
	};

	/**
	 *API around converting markdown to markup
	 *
	 * @memberof Condoit
	 */
	public remarkup = {
		/**
		 *Process text through remarkup in Phabricator context. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/repository.process/}
		 *
		 * @param {iRemarkup.RemarkupProcess} options
		 * @returns {Promise<iRemarkup.RetRemarkupProcess>}
		 */
		process: (
			options: iRemarkup.RemarkupProcess
		): Promise<iRemarkup.RetRemarkupProcess> => {
			return this.makeRequest('remarkup.process', {
				context: options.context,
				contents: options.contents
			});
		}
	};

	/**
	 *API around getting information about repositories.
	 *
	 * @memberof Condoit
	 */
	public repository = {
		/**
		 ***Marked for deprecation**. Query repositories. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/repository.query/}
		 *
		 * @memberof Condoit
		 */
		query: (
			options: iRepository.RepositoryQuery
		): Promise<iRepository.RetRepositoryQuery> => {
			return this.makeRequest('repository.query', {
				ids: options?.ids,
				phids: options?.phids,
				callsigns: options?.callsigns,
				vcsTypes: options?.vcsTypes,
				remoteURIs: options?.remoteURIs,
				uuids: options?.uuids,
				order: options?.order,
				before: options?.before,
				after: options?.after,
				limit: options?.limit
			});
		}
	};

	/**
	 *API endpoints around polls.
	 *
	 * @memberof Condoit
	 */
	public slowvote = {
		/**
		 *Read information about polls. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/slowvote.poll.search/}
		 *
		 * @param {iSlowvote.PollSearch} options
		 * @returns {Promise<iSlowvote.RetPollSearch>}
		 */
		pollSearch: (
			options: iSlowvote.PollSearch
		): Promise<iSlowvote.RetPollSearch> => {
			return this.makeRequest(
				'slowvote.poll.search',
				this.returnOptionsAttachments(options)
			);
		}
	};

	/**
	 *Tokens are badges/emojies that are applied to Phabricator applications.
	 *
	 * @memberof Condoit
	 */
	public token = {
		/**
		 *Give or change token
		 [Docs]{@link https://secure.phabricator.com/conduit/method/token.give/}
		 *
		 * @param {iToken.TokenGive} options
		 * @returns {Promise<iToken.RetTokenGive>}
		 */
		give: (options: iToken.TokenGive): Promise<iToken.RetTokenGive> => {
			let tokens = iToken.tokens;
			return this.makeRequest('token.give', {
				tokenPHID: tokens[options.token],
				objectPHID: options.objectPHID
			});
		},

		/**
		 *Query tokens given to objects. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/token.given/}
		 *
		 * @param {iToken.TokenGiven} options
		 * @returns
		 */
		given: (options: iToken.TokenGiven): Promise<iToken.RetTokenGiven> => {
			return this.makeRequest('token.given', {
				authorPHIDs: options?.authorPHIDs,
				objectPHIDs: options?.objectPHIDs,
				tokenPHIDs: options?.tokenPHIDs?.map((t) => iToken.tokens[t])
			});
		},

		query: (): Promise<iToken.RetTokenQuery> => {
			return this.makeRequest('token.query', {});
		}
	};

	/**
	 *API endpoints related to transaction management. Transactions are 
	 objects applied to any Phabricator applicaiton. 
	 *
	 * @memberof Condoit
	 */
	public transaction = {
		/**
		 *Read transactions and comments for an object. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/transaction.search/}
		 *
		 * @param {iTransactions.TransactionsSearch} options
		 * @returns {Promise<iTransactions.RetTransactionsSearch>}
		 */
		search: (
			options: iTransactions.TransactionsSearch
		): Promise<iTransactions.RetTransactionsSearch> => {
			return this.makeRequest('transaction.search', {
				objectIdentifier: options.objectIdentifier,
				constraints: options?.constraints,
				before: options?.before,
				after: options?.after,
				limit: options?.limit
			});
		}
	};

	/**
	 *API endpoints related to user management.
	 *
	 * @memberof Condoit
	 */
	public user = {
		/**
		 *Edit user information. 
		 [Docs]{@link https://secure.phabricator.com/conduit/method/user.edit/}
		 *
		 * @param {iUser.UsersEdit} options
		 * @returns {Promise<Transactions>}
		 */
		edit: (options: iUser.UsersEdit): Promise<Transactions> => {
			return this.makeRequest('user.edit', {
				transactions: options.transactions,
				objectIdentifier: options.objectIdentifier
			});
		},

		/**
		 *Search users
		 [Docs]{@link https://secure.phabricator.com/conduit/method/user.search/}
		 *
		 * @returns {Promise<GenericReturn>}
		 */
		search: (options: iUser.UsersSearch): Promise<iUser.RetUsersSearch> => {
			return this.makeRequest(
				'user.search',
				this.returnOptionsAttachments(options)
			);
		},

		/**
		 *Retrieve information about the logged-in user.
		 [Docs]{@link https://secure.phabricator.com/conduit/method/user.whoami/} 
		 *
		 * @returns {Promise<iUser.RetUsersWhoami>}
		 */
		whoami: (): Promise<iUser.RetUsersWhoami> => {
			return this.makeRequest('user.whoami', {});
		}
	};
}
