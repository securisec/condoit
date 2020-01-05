export const tokens = {
	'100': 'PHID-TOKN-emoji-1',
	Like: 'PHID-TOKN-like-1',
	Dislike: 'PHID-TOKN-like-2',
	Love: 'PHID-TOKN-heart-1',
	Heartbreak: 'PHID-TOKN-heart-2',
	'Orange Medal': 'PHID-TOKN-medal-1',
	'Grey Medal': 'PHID-TOKN-medal-2',
	'Yellow Medal': 'PHID-TOKN-medal-3',
	'Manufacturing Defect?': 'PHID-TOKN-medal-4',
	Haypence: 'PHID-TOKN-coin-1',
	'Piece of Eight': 'PHID-TOKN-coin-2',
	Doubloon: 'PHID-TOKN-coin-3',
	'Mountain of Wealth': 'PHID-TOKN-coin-4',
	Pterodactyl: 'PHID-TOKN-misc-1',
	'Evil Spooky Haunted Tree': 'PHID-TOKN-misc-2',
	'Baby Tequila': 'PHID-TOKN-misc-3',
	'The World Burns': 'PHID-TOKN-misc-4',
	'Party Time': 'PHID-TOKN-emoji-2',
	'Y So Serious': 'PHID-TOKN-emoji-3',
	'Dat Boi': 'PHID-TOKN-emoji-4',
	'Cup of Joe': 'PHID-TOKN-emoji-5',
	'Hungry Hippo': 'PHID-TOKN-emoji-6',
	Burninate: 'PHID-TOKN-emoji-7',
	'Pirate Logo': 'PHID-TOKN-emoji-8'
};

type validToken =
	| '100'
	| 'Like'
	| 'Dislike'
	| 'Love'
	| 'Heartbreak'
	| 'Orange Medal'
	| 'Grey Medal'
	| 'Yellow Medal'
	| 'Manufacturing Defect?'
	| 'Haypence'
	| 'Piece of Eight'
	| 'Doubloon'
	| 'Mountain of Wealth'
	| 'Pterodactyl'
	| 'Evil Spooky Haunted Tree'
	| 'Baby Tequila'
	| 'The World Burns'
	| 'Party Time'
	| 'Y So Serious'
	| 'Dat Boi'
	| 'Cup of Joe'
	| 'Hungry Hippo'
	| 'Burninate'
	| 'Pirate Logo';

export interface TokenGive {
	token: validToken;
	objectPHID: string;
}

export interface RetTokenGive {
	result: null;
	error_code: null;
	error_info: null;
}

export interface TokenGiven {
	authorPHIDs?: Array<string>;
	objectPHIDs?: Array<string>;
	tokenPHIDs?: Array<validToken>;
}

type retTokenGivenResult = {
	authorPHID: string;
	objectPHID: string;
	tokenPHID: string;
	dateCreated: string;
};

export interface RetTokenGiven {
	result: Array<retTokenGivenResult>;
	error_code: null;
	error_info: null;
}

type retTokenQueryResult = {
	id: number;
	name: string;
	phid: string;
};

export interface RetTokenQuery {
	result: Array<retTokenQueryResult>;
	error_code: string;
	error_info: string;
}
