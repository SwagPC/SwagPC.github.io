var Config = Config || {};

/* version */ Config.version = "0";

Config.bannedHosts = ['cool.jit.su', 'pokeball-nixonserver.rhcloud.com'];

Config.whitelist = [
	// general sites
	'wikipedia.org',
	'wikimedia.org',
	'wiktionary.org',
	'github.com',
	'reddit.com',
	'gamefaqs.com',
	'facebook.com',
	'fbcdn.net',
	'twitter.com',
	'tumblr.com',
	'deviantart.com',
	'youtube.com',
	'youtu.be',
	'zombo.com',
	'strawpoll.me',
	'twitch.tv',
	'take-a-screenshot.org',
	'4chan.org',
	'tumblr.com',
	'git.io',
	'mibbit.com',
	'codecademy.com',
	'xkcd.com',
	'stackoverflow.com',
	'stackexchange.com',
	'malwarebytes.org',
	'zombo.com',
	'html5zombo.com',
	'whatismyipaddress.com',
	'iplocationtools.com',
	'iplocation.net',
	'ipqualityscore.com',

	// pokemon sites
	'pokemonshowdown.com',
	'psim.us',
	'smogon.com',
	'upokecenter.com',
	'veekun.com',
	'bulbagarden.net',
	'serebii.net',
	'nuggetbridge.com',
	'pokecommunity.com',
	'pokemon-online.eu',
	'pokemonlab.com',
	'shoddybattle.com',
	'pokemonxy.com',
	'pokemon.com',
	'pokemon-gl.com',
	'pokecheck.org',
	'projectpokemon.org',
	'pokemondb.net',
	'pokemoncentral.it',
	'poketrade.us',
	'neverused.net',
	'pokestrat.com',
	'pokestrat.io',
	'spo.ink',
	'jooas.com',
	'pokemongodb.net',
	'pokeassistant.com',
	'pokemon-sunmoon.com',
	'gamepress.gg',
	'trainertower.com',
	'pokepast.es',
	'pokepedia.fr',
	'randbatscalc.github.io',
	'ruins-of-alph.github.io',
	'gamespot.com',
	'victoryroadvgc.com',
	'pikalytics.com',
	'vgcstats.com',
	'worldcupvgc.com',

	// personal sites
	'breakdown.forumotion.com',
	'pokemonmillennium.net',
	'thebattletower.no-ip.org',
	'meltsner.com',
	'guangcongluo.com',
	'cathyjf.com',
	'xiaotai.org',
	'xfix.pw',
	'pkmn.cc',
	'bumba.me',
	'strategydatabase.jimdo.com',
	'hidden50.github.io',
	'krisxv.github.io',
	'psbot.xyz',
	// personal hosting sites
	'forumieren.com',
	'soforums.com',
	'proboards.com',
	'weebly.com',
	'freeforums.org',
	'forumactif.com',
	'forumotion.com',
	'bigbangpokemon.com',
	'sites.google.com',

	// rich text
	'docs.google.com',

	// text
	'pastebin.com',
	'hastebin.com',
	'pastie.io',
	'trello.com',
	'challonge.com',
	'piratepad.net',
	'pastebin.run',

	// anime
	'myanimelist.net',
	'animenewsnetwork.com',
	'animenewsnetwork.cc',
	'anilist.co',
	'mangaupdates.com',
	'anime-planet.com',

	// music
	'plug.dj',
	'openings.moe',
    'animethemes.moe',
	'catbox.moe',

	// images
	'prntscr.com',
	'prnt.sc',
	'puu.sh',
	'd.pr',
	'snag.gy',
	'gyazo.com',
	'imgur.com',
	'gfycat.com',
	'4cdn.org',
	'discordapp.com'
];

// `defaultserver` specifies the server to use when the domain name in the
// address bar is `Config.routes.client`.
Config.defaultserver = {
	id: 'showdown',
	host: 'swagsire.herokuapp.com',
	port: 443,
	httpport: 8000,
	altport: 80,
	registered: true
};

Config.roomsFirstOpenScript = function () {
};

Config.customcolors = {
};
/*** Begin automatically generated configuration ***/
Config.version = "0.11.7 (cee1097c/466ac435)";

Config.routes = {
	root: 'pokemonshowdown.com',
	client: 'swagpc.github.io',
	dex: 'dex.pokemonshowdown.com',
	replays: 'replay.pokemonshowdown.com',
	users: 'pokemonshowdown.com/users',
};
/*** End automatically generated configuration ***/
