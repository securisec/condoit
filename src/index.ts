import Axios, { AxiosResponse, AxiosError } from 'axios';
import qs from 'qs';
import { resolve } from 'url';

class Condoit {
	private baseUrl: string;
	private apiToken: string;
	constructor(baseUrl: string, apiToken: string) {
		this.baseUrl = baseUrl;
		this.apiToken = apiToken;
	}

	private makeRequest(endpoint: string, params: object): Promise<object> {
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

	almanacBinding() {
		// TODO
	}

	almanacDevice() {
		// TODO
	}

	almanacInterface() {
		// TODO
	}

	almanacNamespace() {
		// TODO
	}

	almanacNetwork() {
		// TODO
	}

	almanacService() {
		// TODO
	}

	auditQuery() {
		// TODO
	}

	authLogout() {
		// TODO
	}

	authQuerypublickeys() {
		// TODO
	}

	badgeEdit() {
		// TODO
	}

	badgeSearch() {
		// TODO
	}

	conduitConnect() {
		// TODO
	}

	conduitGetcapabilities() {
		// TODO
	}

	conduitGetcertificate() {
		// TODO
	}

	conduitPing() {
		// TODO
	}

	conduitQuery() {
		// TODO
	}

	conpherenceCreatethread() {
		// TODO
	}

	conpherenceEdit() {
		// TODO
	}

	conpherenceQuerythread() {
		// TODO
	}

	conpherenceQuerytransaction() {
		// TODO
	}

	conpherenceUpdatethread() {
		// TODO
	}

	countdownEdit() {
		// TODO
	}

	countdownSearch() {
		// TODO
	}

	dashboardPanel() {
		// TODO
	}

	differentialClose() {
		// TODO
	}

	differentialCreatecomment() {
		// TODO
	}

	differentialCreatediff() {
		// TODO
	}

	differentialCreateinline() {
		// TODO
	}

	differentialCreaterawdiff() {
		// TODO
	}

	differentialCreaterevision() {
		// TODO
	}

	differentialDiff() {
		// TODO
	}

	differentialGetcommitmessage() {
		// TODO
	}

	differentialGetcommitpaths() {
		// TODO
	}

	differentialGetrawdiff() {
		// TODO
	}

	differentialParsecommitmessage() {
		// TODO
	}

	differentialQuery() {
		// TODO
	}

	differentialQuerydiffs() {
		// TODO
	}

	differentialRevision() {
		// TODO
	}

	differentialSetdiffproperty() {
		// TODO
	}

	differentialUpdaterevision() {
		// TODO
	}

	diffusionBlame() {
		// TODO
	}

	diffusionBranchquery() {
		// TODO
	}

	diffusionBrowsequery() {
		// TODO
	}

	diffusionCommit() {
		// TODO
	}

	diffusionCommitparentsquery() {
		// TODO
	}

	diffusionDiffquery() {
		// TODO
	}

	diffusionExistsquery() {
		// TODO
	}

	diffusionFilecontentquery() {
		// TODO
	}

	diffusionFindsymbols() {
		// TODO
	}

	diffusionHistoryquery() {
		// TODO
	}

	diffusionLastmodifiedquery() {
		// TODO
	}

	diffusionMergedcommitsquery() {
		// TODO
	}

	diffusionQuerycommits() {
		// TODO
	}

	diffusionQuerypaths() {
		// TODO
	}

	diffusionRawdiffquery() {
		// TODO
	}

	diffusionRefsquery() {
		// TODO
	}

	diffusionRepository() {
		// TODO
	}

	diffusionResolverefs() {
		// TODO
	}

	diffusionSearchquery() {
		// TODO
	}

	diffusionTagsquery() {
		// TODO
	}

	diffusionUri() {
		// TODO
	}

	diffusionGetlintmessages() {
		// TODO
	}

	diffusionLooksoon() {
		// TODO
	}

	diffusionUpdatecoverage() {
		// TODO
	}

	drydockAuthorization() {
		// TODO
	}

	drydockBlueprint() {
		// TODO
	}

	drydockLease() {
		// TODO
	}

	drydockResource() {
		// TODO
	}

	edgeSearch() {
		// TODO
	}

	feedPublish() {
		// TODO
	}

	feedQuery() {
		// TODO
	}

	fileAllocate() {
		// TODO
	}

	fileDownload() {
		// TODO
	}

	fileInfo() {
		// TODO
	}

	fileQuerychunks() {
		// TODO
	}

	fileSearch() {
		// TODO
	}

	fileUpload() {
		// TODO
	}

	fileUploadchunk() {
		// TODO
	}

	flagDelete() {
		// TODO
	}

	flagEdit() {
		// TODO
	}

	flagQuery() {
		// TODO
	}

	harbormasterArtifact() {
		// TODO
	}

	harbormasterBuild() {
		// TODO
	}

	harbormasterBuildable() {
		// TODO
	}

	harbormasterBuildplan() {
		// TODO
	}

	harbormasterLog() {
		// TODO
	}

	harbormasterTarget() {
		// TODO
	}

	harbormasterCreateartifact() {
		// TODO
	}

	harbormasterQueryautotargets() {
		// TODO
	}

	harbormasterQuerybuildables() {
		// TODO
	}

	harbormasterSendmessage() {
		// TODO
	}

	macroEdit() {
		// TODO
	}

	macroQuery() {
		// TODO
	}

	macroCreatememe() {
		// TODO
	}

	maniphestCreatetask() {
		// TODO
	}

	maniphestEdit() {
		// TODO
	}

	maniphestGettasktransactions() {
		// TODO
	}

	/**
   *Retrieve information about a Maniphest task, given its ID.
   [Docs]{@link https://secure.phabricator.com/conduit/method/maniphest.info}
   *
   * @param {number} taskId Task ID
   * @returns {Promise<object>}
   * @memberof Condoit
   */
	maniphestInfo(taskId: number): Promise<object> {
		return this.makeRequest('maniphest.info', { task_id: taskId });
	}

	maniphestPriority() {
		// TODO
	}

	maniphestQuery() {
		// TODO
	}

	maniphestQuerystatuses() {
		// TODO
	}

	maniphestSearch() {
		// TODO
	}

	maniphestStatus() {
		// TODO
	}

	maniphestUpdate() {
		// TODO
	}

	ownersEdit() {
		// TODO
	}

	ownersSearch() {
		// TODO
	}

	passphraseQuery() {
		// TODO
	}

	pasteCreate() {
		// TODO
	}

	pasteEdit() {
		// TODO
	}

	pasteQuery() {
		// TODO
	}

	pasteSearch() {
		// TODO
	}

	phameBlog() {
		// TODO
	}

	phamePost() {
		// TODO
	}

	phidLookup() {
		// TODO
	}

	phidQuery() {
		// TODO
	}

	phrictionContent() {
		// TODO
	}

	phrictionCreate() {
		// TODO
	}

	phrictionDocument() {
		// TODO
	}

	phrictionEdit() {
		// TODO
	}

	phrictionHistory() {
		// TODO
	}

	phrictionInfo() {
		// TODO
	}

	portalEdit() {
		// TODO
	}

	portalSearch() {
		// TODO
	}

	projectColumn() {
		// TODO
	}

	projectCreate() {
		// TODO
	}

	projectEdit() {
		// TODO
	}

	projectQuery() {
		// TODO
	}

	projectSearch() {
		// TODO
	}

	remarkupProcess() {
		// TODO
	}

	repositoryQuery() {
		// TODO
	}

	slowvotePoll() {
		// TODO
	}

	tokenGive() {
		// TODO
	}

	tokenGiven() {
		// TODO
	}

	tokenQuery() {
		// TODO
	}

	transactionSearch() {
		// TODO
	}

	/**
	 *Edit user information. 
	 [Docs]{@link https://secure.phabricator.com/conduit/method/user.edit/}
	 *
	 * @param {([
	 * 			{
	 * 				type:
	 * 					| 'disabled'
	 * 					| 'approved'
	 * 					| 'realName'
	 * 					| 'title'
	 * 					| 'icon'
	 * 					| 'blurb'
	 * 					| 'mfa';
	 * 				value: boolean | string;
	 * 			}
	 * 		])} transactions Array of objects that apply various changes to the users information
	 * @param {(number | string)} [objectIdentifier] ID, phid to identify unique user
	 * @returns {Promise<object>}
	 * @memberof Condoit
	 */
	userEdit(
		transactions: [
			{
				type:
					| 'disabled'
					| 'approved'
					| 'realName'
					| 'title'
					| 'icon'
					| 'blurb'
					| 'mfa';
				value: boolean | string;
			}
		],
		objectIdentifier?: number | string
	): Promise<object> {
		return this.makeRequest('user.edit', {
			transactions: transactions,
			objectIdentifier: objectIdentifier
		});
	}

	/**
	 *Query users
	 [Docs]{@link https://secure.phabricator.com/conduit/method/user.search/}
	 *
	 * @param {({
	 * 		queryKey: 'active' | 'all' | 'approval';
	 * 		constraints: {
	 * 			ids: Array<number>;
	 * 			phids: Array<string>;
	 * 			usernames: Array<string>;
	 * 			nameLike: string;
	 * 			isAdmin: boolean;
	 * 			isDisabled: boolean;
	 * 			isBot: boolean;
	 * 			isMailingList: boolean;
	 * 			needsApproval: boolean;
	 * 			mfa: boolean;
	 * 			createdStart: number;
	 * 			createdEnd: number;
	 * 			query: string;
	 * 		};
	 * 		attachments: { availability: boolean };
	 * 		order:
	 * 			| 'newest'
	 * 			| 'oldest'
	 * 			| 'relevance'
	 * 			| ['id' | 'username' | 'rank' | 'fulltext-created' | 'fulltext-modified'];
	 * 		before: string;
	 * 		after: string;
	 * 		limit: number;
	 * 	})} options All options are optional
	 * @returns {Promise<object>}
	 * @memberof Condoit
	 */
	userSearch(options: {
		queryKey: 'active' | 'all' | 'approval';
		constraints: {
			ids: Array<number>;
			phids: Array<string>;
			usernames: Array<string>;
			nameLike: string;
			isAdmin: boolean;
			isDisabled: boolean;
			isBot: boolean;
			isMailingList: boolean;
			needsApproval: boolean;
			mfa: boolean;
			createdStart: number;
			createdEnd: number;
			query: string;
		};
		attachments: { availability: boolean };
		order:
			| 'newest'
			| 'oldest'
			| 'relevance'
			| ['id' | 'username' | 'rank' | 'fulltext-created' | 'fulltext-modified'];
		before: string;
		after: string;
		limit: number;
	}): Promise<object> {
		return this.makeRequest('user.search', {
			queryKey: options?.queryKey,
			constraints: options?.constraints,
			attachments: options?.attachments,
			order: options?.order,
			before: options?.before,
			after: options?.after,
			limit: options?.limit
		});
	}

	/**
   *Retrieve information about the logged-in user.
   [Docs]{@link https://secure.phabricator.com/conduit/method/user.whoami/} 
   *
   * @returns {Promise<object>}
   * @memberof Condoit
   */
	userWhoami(): Promise<object> {
		return this.makeRequest('user.whoami', {});
	}
}

export { Condoit };
