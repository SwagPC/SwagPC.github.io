function _inheritsLoose(e,t){e.prototype=Object.create(t.prototype),_setPrototypeOf(e.prototype.constructor=e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var DexSearch=function(){function B(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",s=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"";this.query="",this.dex=Dex,this.typedSearch=null,this.results=null,this.exactMatch=!1,this.firstPokemonColumn="Number",this.sortCol=null,this.reverseSort=!1,this.filters=null,this.setType(e,t,s)}var e=B.prototype;return e.getTypedSearch=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",s=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"";if(e)switch(e){case"pokemon":return new BattlePokemonSearch("pokemon",t,s);case"item":return new BattleItemSearch("item",t,s);case"move":return new BattleMoveSearch("move",t,s);case"ability":return new BattleAbilitySearch("ability",t,s);case"type":return new BattleTypeSearch("type",t,s);case"category":return new BattleCategorySearch("category",t,s)}return null},e.find=function(e){return e=toID(e),(this.query!==e||!this.results)&&(this.query=e,this.results=e?this.textSearch(e):(null==(e=this.typedSearch)?void 0:e.getResults(this.filters,this.sortCol,this.reverseSort))||[],!0)},e.setType=function(e){var t,s=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"";e!==((this.results=null)==(t=this.typedSearch)?void 0:t.searchType)&&(this.filters=null,this.sortCol=null),this.typedSearch=this.getTypedSearch(e,s,r),this.typedSearch&&(this.dex=this.typedSearch.dex)},e.addFilter=function(e){if(!this.typedSearch)return!1;var t=e[0];if("pokemon"!==this.typedSearch.searchType)return"move"===this.typedSearch.searchType&&(t===this.sortCol&&(this.sortCol=null),!!["type","category","pokemon"].includes(t)&&("pokemon"===t&&(e[1]=toID(e[1])),this.filters||(this.filters=[]),this.filters.push(e),!(this.results=null)));if(t===this.sortCol&&(this.sortCol=null),!["type","move","ability","egggroup","tier"].includes(t))return!1;"move"===t&&(e[1]=toID(e[1])),this.filters||(this.filters=[]),this.results=null;for(var s=0,r=this.filters;s<r.length;s++){var i=r[s];if(i[0]===t&&i[1]===e[1])return!0}return this.filters.push(e),!0},e.removeFilter=function(e){if(!this.filters)return!1;if(e){for(var t=e.join(":"),s=null,r=0;r<this.filters.length;r++)if(t===this.filters[r].join(":")){s=this.filters[r],this.filters.splice(r,1);break}if(!s)return!1}else this.filters.pop();return this.filters.length||(this.filters=null),!(this.results=null)},e.toggleSort=function(e){this.sortCol===e?this.reverseSort?(this.sortCol=null,this.reverseSort=!1):this.reverseSort=!0:(this.sortCol=e,this.reverseSort=!1),this.results=null},e.filterLabel=function(e){return this.typedSearch&&this.typedSearch.searchType!==e?"Filter":null},e.illegalLabel=function(e){var t;return(null==(t=this.typedSearch)||null==(t=t.illegalReasons)?void 0:t[e])||null},e.getTier=function(e){var t;return(null==(t=this.typedSearch)?void 0:t.getTier(e))||""},e.textSearch=function(e){e=toID(e),this.exactMatch=!1;var t,s=(null==(S=this.typedSearch)?void 0:S.searchType)||"",r=s?B.typeTable[s]:-1,i="",a=("type"===e.slice(-4)&&e.slice(0,-4)in window.BattleTypeChart&&(e=e.slice(0,-4),i="type"),B.getClosest(e)),n=(this.exactMatch=BattleSearchIndex[a][0]===e,""),l=[["normal",a,e]];if(1<e.length&&l.push(["alias",a,e]),e in BattleAliases&&(!["sub","tr"].includes(e)&&toID(BattleAliases[e]).slice(0,e.length)===e||(t=toID(BattleAliases[e]),l.unshift(["hiddenpower"===t?"exact":"normal",B.getClosest(t),t])),this.exactMatch=!0),!this.exactMatch&&BattleSearchIndex[a][0].substr(0,e.length)!==e){var o=e.length-1;for(a||a++;o&&BattleSearchIndex[a][0].substr(0,o)!==e.substr(0,o)&&BattleSearchIndex[a-1][0].substr(0,o)!==e.substr(0,o);)o--;for(var u=e.substr(0,o);1<=a&&BattleSearchIndex[a-1][0].substr(0,o)===u;)a--;l.push(["fuzzy",a,""])}for(var c=[[],[],[],[],[],[],[],[],[],[]],h=-1,d=0,p=!1,g=null,f=[0,1,2,5,4,3,6,7,8],m=null==(S=this.typedSearch)?void 0:S.illegalReasons,a=0;a<BattleSearchIndex.length;a++){if(!n){var y=l.shift();if(!y)break;n=y[0],a=y[1],e=y[2]}var y=BattleSearchIndex[a],b=y[0],v=y[1];if(!b)break;if("fuzzy"===n){if(2<=d){n="";continue}p=!0}else if("exact"===n){if(1<=d){n="";continue}}else if(b.substr(0,e.length)!==e){n="";continue}if(2<y.length){if("alias"!==n)continue}else if("alias"===n)continue;var w,k,T,x=B.typeTable[v];1===e.length&&x!==(s?r:1)||"pokemon"===s&&(5===x||7<x)||"pokemon"===s&&3===x&&this.dex.gen<8||"move"===s&&(8!==x&&4<x||3===x)||"move"===s&&m&&1===x||("ability"===s||"item"===s)&&x!==r||"type"===i&&2!==x||("megax"===b||"megay"===b)&&"mega".startsWith(e)||(w=k=0,"alias"===n?(k=y[3],T=y[2],k&&(w=k+e.length,k+=(BattleSearchIndexOffset[T][k]||"0").charCodeAt(0)-48,w+=(BattleSearchIndexOffset[T][w-1]||"0").charCodeAt(0)-48),b=BattleSearchIndex[T][0]):(w=e.length)&&(w+=(BattleSearchIndexOffset[a][w-1]||"0").charCodeAt(0)-48),t===b&&e!==b||(s&&r!==x&&(!g||f[x]<f[g[2]])&&(g=[v,b,x]),h<0&&r<2&&"alias"===n&&!c[1].length&&c[2].length&&(h=2),m&&x===r?(c[x].length||c[0].length||(c[0]=[["header",B.typeName[v]]]),b in m||(x=0)):c[x].length||(c[x]=[["header",B.typeName[v]]]),(T="alias"===n&&c[x].length)&&c[x][T-1][1]===b||(c[x].push([v,b,k,w]),d++)))}var S=p?[["html","<em>No exact match found. The closest matches alphabetically are:</em>"]]:[];return 0<=h&&(S=S.concat(c[h]),c[h]=[]),0<=r&&(S=(S=S.concat(c[0])).concat(c[r]),c[r]=[],c[0]=[]),g&&d<20&&c.push(this.instafilter(s,g[0],g[1])),this.results=Array.prototype.concat.apply(S,c),this.results},e.instafilter=function(e,t,s){var r,i=[],a=[],n=null==(r=this.typedSearch)?void 0:r.illegalReasons;if("pokemon"===e)switch(t){case"type":var l,o=s.charAt(0).toUpperCase()+s.slice(1);for(l in i.push(["header",o+"-type Pok&eacute;mon"]),BattlePokedex)BattlePokedex[l].types&&this.dex.species.get(l).types.includes(o)&&(n&&l in n?a:i).push(["pokemon",l]);break;case"ability":var u,c=Dex.abilities.get(s).name;for(u in i.push(["header",c+" Pok&eacute;mon"]),BattlePokedex)BattlePokedex[u].abilities&&Dex.hasAbility(this.dex.species.get(u),c)&&(n&&u in n?a:i).push(["pokemon",u])}else if("move"===e)switch(t){case"type":var h,d=s.charAt(0).toUpperCase()+s.slice(1);for(h in i.push(["header",d+"-type moves"]),BattleMovedex)BattleMovedex[h].type===d&&(n&&h in n?a:i).push(["move",h]);break;case"category":var p,g=s.charAt(0).toUpperCase()+s.slice(1);for(p in i.push(["header",g+" moves"]),BattleMovedex)BattleMovedex[p].category===g&&(n&&p in n?a:i).push(["move",p])}return[].concat(i,a)},B.getClosest=function(e){for(var t=0,s=BattleSearchIndex.length-1;t<s;){var r=Math.floor((s-t)/2+t);if(BattleSearchIndex[r][0]===e&&(0===r||BattleSearchIndex[r-1][0]!==e))return r;BattleSearchIndex[r][0]<e?t=r+1:s=r-1}return t>=BattleSearchIndex.length-1?t=BattleSearchIndex.length-1:BattleSearchIndex[t+1][0]&&BattleSearchIndex[t][0]<e&&t++,t&&BattleSearchIndex[t-1][0]===e&&t--,t},B}(),BattleTypedSearch=(DexSearch.typeTable={pokemon:1,type:2,tier:3,move:4,item:5,ability:6,egggroup:7,category:8,article:9},DexSearch.typeName={pokemon:"Pok&eacute;mon",type:"Type",tier:"Tiers",move:"Moves",item:"Items",ability:"Abilities",egggroup:"Egg group",category:"Category",article:"Article"},function(){function e(e){var t,s=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"";this.searchType=void 0,this.dex=Dex,this.format="",this.species="",this.set=null,this.formatType=null,this.baseResults=null,this.baseIllegalResults=null,this.illegalReasons=null,this.results=null,this.sortRow=null,this.searchType=e,this.baseResults=null,this.baseIllegalResults=null,"gen"===s.slice(0,3)?(t=Number(s.charAt(3))||6,s=s.slice(4)||"customgame",this.dex=Dex.forGen(t)):s||(this.dex=Dex),s.startsWith("dlc1")&&(s.includes("doubles")?this.formatType="dlc1doubles":this.formatType="dlc1",s=s.slice(4)),s.startsWith("stadium")&&(this.formatType="stadium",s=(s=s.slice(7))||"ou"),s.startsWith("vgc")&&(this.formatType="doubles"),"vgc2020"===s&&(this.formatType="dlc1doubles"),s.includes("bdsp")&&(s.includes("doubles")?this.formatType="bdspdoubles":this.formatType="bdsp",s=s.slice(4),this.dex=Dex.mod("gen8bdsp")),s.includes("swagmons")&&(s.includes("doubles")?this.formatType="swagmondoubles":this.formatType="swagmons",s=s.slice(8),this.dex=Dex.mod("gen8swagmons")),(s.includes("nationaldex")||s.startsWith("nd")||s.includes("natdex"))&&(s.startsWith("supernatdex")?(s=s.slice(11),this.formatType="supernatdex"):(s.startsWith("supernationaldexdoubles")||s.startsWith('supernationaldexmultibattle'))?(s.includes("ag")?s="doublesubers":s="doublesou",this.formatType="supernatdexdoubles"):s.startsWith("supernationaldex")?(s=s.slice(16),this.formatType="supernatdex"):s.startsWith("nationaldexdoubles")?(s.includes("ag")?s="doublesubers":s="doublesou",this.formatType="natdexdoubles"):s.startsWith("nationaldexvgc")?(s="ndvgc",this.formatType="natdexdoubles"):(s=s.startsWith("nd")?s.slice(2):s.includes("natdex")?s.slice(6):s.slice(11),this.formatType="natdex"),s=s||"ou"),s.includes("doubles")&&4<this.dex.gen&&!this.formatType&&(this.formatType="doubles"),!s.startsWith("ffa")&&"freeforall"!==s||(this.formatType="doubles"),s.includes("letsgo")&&(this.formatType="letsgo",this.dex=Dex.mod("gen7letsgo")),(s="letsgo"===this.formatType?s.slice(6):s).includes("metronome")&&(this.formatType="metronome"),s.endsWith("nfe")&&(s=s.slice(3),this.formatType="nfe",s=s||"ou"),this.format=s,this.species="",this.set=null,"string"==typeof r?r&&(this.species=r):(this.set=r,this.species=toID(this.set.species)),e&&this.set}var t=e.prototype;return t.getResults=function(e,t,s){var r=this;if("type"===t)return[this.sortRow].concat(BattleTypeSearch.prototype.getDefaultResults.call(this));if("category"===t)return[this.sortRow].concat(BattleCategorySearch.prototype.getDefaultResults.call(this));if("ability"===t)return[this.sortRow].concat(BattleAbilitySearch.prototype.getDefaultResults.call(this));if(this.baseResults||(this.baseResults=this.getBaseResults()),!this.baseIllegalResults){for(var i,a={},n=0,l=this.baseResults;n<l.length;n++){var o=l[n],u=o[0],o=o[1];u===this.searchType&&(a[o]=1)}for(i in this.baseIllegalResults=[],this.illegalReasons={},this.getTable())i in a||(this.baseIllegalResults.push([this.searchType,i]),this.illegalReasons[i]="Illegal")}if(e){for(var c=[],h=[],d=0,p=this.baseResults;d<p.length;d++){var g=p[d];this.filter(g,e)&&(c.length&&"header"===g[0]&&"header"===c[c.length-1][0]?c[c.length-1]=g:c.push(g))}c.length&&"header"===c[c.length-1][0]&&c.pop();for(var f=0,m=this.baseIllegalResults;f<m.length;f++){var y=m[f];this.filter(y,e)&&h.push(y)}}else c=[].concat(this.baseResults),h=null;return t&&(c=c.filter(function(e){return e[0]===r.searchType}),c=this.sort(c,t,s),h&&(h=h.filter(function(e){return e[0]===r.searchType}),h=this.sort(h,t,s))),this.sortRow&&(c=[this.sortRow].concat(c)),c=h&&h.length?[].concat(c,[["header","Illegal results"]],h):c},t.firstLearnsetid=function(e){var t,s=BattleTeambuilderTable;return null!=(t=this.formatType)&&t.startsWith("bdsp")&&(s=s.gen8bdsp),null!=(t=this.formatType)&&t.startsWith("swagmons")&&(s=s.swagmons),null!=(t=this.formatType)&&t.startsWith("supernatdex")&&(s=s.snatdex),e in(s="letsgo"===this.formatType?s.gen7letsgo:s).learnsets||(t=this.dex.species.get(e)).exists&&(e=toID(t.baseSpecies),(e="string"==typeof t.battleOnly&&t.battleOnly!==t.baseSpecies?toID(t.battleOnly):e)in s.learnsets)?e:""},t.nextLearnsetid=function(e,t){return"lycanrocdusk"===e||"rockruff"===t&&"rockruff"===e?"rockruffdusk":(t=this.dex.species.get(e)).exists?"gastrodoneast"===t.id?"gastrodon":"pumpkaboosuper"===t.id?"pumpkaboo":(e=t.battleOnly||t.changesFrom||t.prevo)?toID(e):"":""},t.canLearn=function(e,t){var s,r=this.dex.moves.get(t);if(!(null!=(s=this.formatType)&&s.includes("natdex")||null!=(s=this.formatType)&&s.includes("nationaldex"))||!r.isNonstandard||"Past"===r.isNonstandard)for(var i=this.dex.gen,a=""+i,n=((this.format.startsWith("vgc")||this.format.startsWith("bss")||this.format.startsWith("battlespot")||this.format.startsWith("battlestadium")||this.format.startsWith("battlefestival"))&&(8===i?a="g":7===i?a="q":6===i&&(a="p")),this.firstLearnsetid(e));n;){var l=BattleTeambuilderTable,o=(null!=(o=this.formatType)&&o.startsWith("bdsp")&&(l=l.gen8bdsp),null!=(o=this.formatType)&&o.startsWith("swagmons")&&(l=l.swagmons),null!=(o=this.formatType)&&o.startsWith("supernatdex")&&(l=l.snatdex),(l="letsgo"===this.formatType?l.gen7letsgo:l).learnsets[n]);if(o&&t in o&&(this.format.startsWith("tradebacks")?o[t].includes(a)||o[t].includes(""+(i+1))&&r.gen===i:o[t].includes(a)))return!0;n=this.nextLearnsetid(n,e)}return!1},t.getTier=function(e){var t,s;return"metronome"===this.formatType||null!=(t=this.formatType)&&t.includes("natdex")||null!=(t=this.formatType)&&t.includes("swagmons")?0<=e.num?String(e.num):e.tier:(t=window.BattleTeambuilderTable,s=this.dex.gen,s="doubles"===this.formatType?"gen"+s+"doubles":"letsgo"===this.formatType?"gen7letsgo":"bdsp"===this.formatType?"gen8bdsp":"bdspdoubles"===this.formatType?"gen8bdspdoubles":"nfe"===this.formatType?"gen"+s+"nfe":"dlc1"===this.formatType?"gen8dlc1":"dlc1doubles"===this.formatType?"gen8dlc1doubles":"stadium"===this.formatType?"gen"+s+"stadium"+(1<s?s:""):"gen"+s,(t=t&&t[s]?t[s]:t)?(s=e.id)in t.overrideTier?t.overrideTier[s]:"totem"===s.slice(-5)&&s.slice(0,-5)in t.overrideTier?t.overrideTier[s.slice(0,-5)]:(s=toID(e.baseSpecies))in t.overrideTier?t.overrideTier[s]:e.tier:e.tier)},e}()),BattlePokemonSearch=function(i){function e(){for(var e,t=arguments.length,s=new Array(t),r=0;r<t;r++)s[r]=arguments[r];return(e=i.call.apply(i,[this].concat(s))||this).sortRow=["sortpokemon",""],e}_inheritsLoose(e,i);var t=e.prototype;return t.getTable=function(){return BattlePokedex},t.getDefaultResults=function(){var e,t=[];for(e in BattlePokedex){switch(e){case"bulbasaur":t.push(["header","Generation 1"]);break;case"chikorita":t.push(["header","Generation 2"]);break;case"treecko":t.push(["header","Generation 3"]);break;case"turtwig":t.push(["header","Generation 4"]);break;case"victini":t.push(["header","Generation 5"]);break;case"chespin":t.push(["header","Generation 6"]);break;case"rowlet":t.push(["header","Generation 7"]);break;case"grookey":t.push(["header","Generation 8"]);break;case"missingno":t.push(["header","Glitch"]);break;case"syclar":t.push(["header","CAP"]);break;case"pikachucosplay":continue}t.push(["pokemon",e])}return t},t.getBaseResults=function(){var e,t,s,r,i,a,n=this.format;return n?(t=(e=n.startsWith("battlespot")||n.startsWith("battlestadium")||n.startsWith("vgc")||n.startsWith("ndvgc")||n.startsWith("bss"))||(null==(t=this.formatType)?void 0:t.includes("doubles")),s=this.dex,r=BattleTeambuilderTable,(n.endsWith("cap")||n.endsWith("caplc"))&&s.gen<8?r=r["gen"+s.gen]:e?r="ndvgc"===n?r.natdexvgc:r["gen"+s.gen+"vgc"]:r["gen"+s.gen+"doubles"]&&4<s.gen&&!this.formatType?.includes("natdexdoubles")&&"letsgo"!==this.formatType&&"bdspdoubles"!==this.formatType&&"dlc1doubles"!==this.formatType&&(n.includes("doubles")||n.includes("triples")||"freeforall"===n||n.startsWith("ffa"))?(r=r["gen"+s.gen+"doubles"],t=!0):s.gen<8&&!this.formatType?r=r["gen"+s.gen]:null!=(a=this.formatType)&&a.startsWith("bdsp")?r=r["gen8"+this.formatType]:"letsgo"===this.formatType?r=r.gen7letsgo:null!=(a=this.formatType)&&a.startsWith("swagmons")?r=r[this.formatType]:null!=(a=this.formatType)&&a.startsWith("supernatdex")?r=r["snatdex"+this.formatType.slice(11)]:null!=(a=this.formatType)&&a.startsWith("natdex")?r=r[this.formatType]:"metronome"===this.formatType?r=r.metronome:"nfe"===this.formatType?r=r["gen"+s.gen+"nfe"]:null!=(a=this.formatType)&&a.startsWith("dlc1")?r=this.formatType.includes("doubles")?r.gen8dlc1doubles:r.gen8dlc1:"stadium"===this.formatType&&(r=r["gen"+s.gen+"stadium"+(1<s.gen?s.gen:"")]),r.tierSet||(r.tierSet=r.tiers.map(function(e){return"string"==typeof e?["pokemon",e]:[e[0],e[1]]}),r.tiers=null),a=r.tierSet,i=r.formatSlices,a="ubers"===n||"uber"===n?a.slice(i.Uber):e?"vgc2010"===n||"vgc2016"===n||n.startsWith("vgc2019")||"vgc2022"===n||n.endsWith("series10")||n.endsWith("series11")?a.slice(i["Restricted Legendary"]):a.slice(i.Regular):"ou"===n?a.slice(i.OU):"uu"===n?a.slice(i.UU):"ru"===n?a.slice(i.RU||i.UU):"nu"===n?a.slice(i.NU||i.RU||i.UU):"pu"===n?a.slice(i.PU||i.NU):"zu"===n?a.slice(i.ZU||i.PU||i.NU):"lc"===n||"lcuu"===n||n.startsWith("lc")||"caplc"!==n&&n.endsWith("lc")?a.slice(i.LC):"cap"===n?a.slice(0,i.AG||i.Uber).concat(a.slice(i.OU)):"caplc"===n?a.slice(i["CAP LC"],i.AG||i.Uber).concat(a.slice(i.LC)):n.includes("anythinggoes")||n.endsWith("ag")||n.endsWith("draft")||n.startsWith("ag")?a.slice(i.AG):n.includes("hackmons")||n.endsWith("bh")?a.slice(i.AG||i.Uber):"monotype"===n?a.slice(i.Uber):"doublesubers"===n?a.slice(i.DUber):"doublesou"===n&&4<s.gen?a.slice(i.DOU):"doublesuu"===n?a.slice(i.DUU):"doublesnu"===n?a.slice(i.DNU||i.DUU):null!=(e=this.formatType)&&e.startsWith("bdsp")||"letsgo"===this.formatType||"stadium"===this.formatType?a.slice(i.Uber):t?[].concat(a.slice(i.DOU,i.DUU),a.slice(i.DUber,i.DOU),a.slice(i.DUU)):[].concat(a.slice(i.OU,i.UU),a.slice(i.AG,i.Uber),a.slice(i.Uber,i.OU),a.slice(i.UU)),5<=s.gen&&("zu"===n&&r.zuBans&&(a=a.filter(function(e){e[0];return!(e[1]in r.zuBans)})),"monotype"===n&&r.monotypeBans&&(a=a.filter(function(e){e[0];return!(e[1]in r.monotypeBans)})),"anythinggoesuu"!==n&&"aguu"!==n||!r.aguuBans||(a=a.filter(function(e){e[0];return!(e[1]in r.aguuBans)}))),/^(battlestadium|vgc|doublesubers)/g.test(n)?a:a.filter(function(e){var t=e[0],e=e[1];return("header"!==t||"DUber by technicality"!==e)&&("pokemon"!==t||!e.endsWith("gmax"))})):this.getDefaultResults()},t.filter=function(e,t){if(t&&"pokemon"===e[0])for(var s=this.dex.species.get(e[1]),r=0;r<t.length;r++){var i=t[r],a=i[0],n=i[1];switch(a){case"type":if(s.types[0]!==n&&s.types[1]!==n)return!1;break;case"egggroup":if(s.eggGroups[0]!==n&&s.eggGroups[1]!==n)return!1;break;case"tier":if(this.getTier(s)!==n)return!1;break;case"ability":if(Dex.hasAbility(s,n))break;return!1;case"move":if(!this.canLearn(s.id,n))return!1}}return!0},t.sort=function(e,s,t){var r=this,i=t?-1:1;if(["hp","atk","def","spa","spd","spe"].includes(s))return e.sort(function(e,t){e[0];e=e[1],t[0],t=t[1],e=r.dex.species.get(e).baseStats[s];return(r.dex.species.get(t).baseStats[s]-e)*i});if("bst"===s)return e.sort(function(e,t){e[0];e=e[1],t[0],t=t[1],e=r.dex.species.get(e).baseStats,t=r.dex.species.get(t).baseStats,e=e.hp+e.atk+e.def+e.spa+e.spd+e.spe;return(t.hp+t.atk+t.def+t.spa+t.spd+t.spe-e)*i});if("name"===s)return e.sort(function(e,t){e[0];e=e[1],t[0],t=t[1];return(e<t?-1:t<e?1:0)*i});throw new Error("invalid sortcol")},e}(BattleTypedSearch),BattleAbilitySearch=function(e){function t(){return e.apply(this,arguments)||this}_inheritsLoose(t,e);var s=t.prototype;return s.getTable=function(){return BattleAbilities},s.getDefaultResults=function(){var e,t=[];for(e in BattleAbilities)t.push(["ability",e]);return t},s.getBaseResults=function(){if(!this.species)return this.getDefaultResults();var e=this.format,t=e.includes("hackmons")||e.endsWith("bh"),s="almostanyability"===e||e.includes("aaa"),r=this.dex,i=r.species.get(this.species),a=[["header","Abilities"]];if(i.isMega&&(a.unshift(["html","Will be <strong>"+i.abilities[0]+"</strong> after Mega Evolving."]),i=r.species.get(i.baseSpecies)),a.push(["ability",toID(i.abilities[0])]),i.abilities[1]&&a.push(["ability",toID(i.abilities[1])]),i.abilities.H&&(a.push(["header","Hidden Ability"]),a.push(["ability",toID(i.abilities.H)])),i.abilities.S&&(a.push(["header","Special Event Ability"]),a.push(["ability",toID(i.abilities.S)])),s||"metronomebattle"===e||t){var n,l=[];for(n in this.getTable()){var o=r.abilities.get(n);o.isNonstandard||o.gen>r.gen||l.push(o.id)}for(var u=[["header","Abilities"]],c=[["header","Situational Abilities"]],h=[["header","Unviable Abilities"]],d=0,p=l.sort().map(function(e){return r.abilities.get(e)});d<p.length;d++){var g=p[d],f=g.rating;(3<=(f="normalize"===g.id?3:f)?u:2<=f?c:h).push(["ability",g.id])}a=[].concat(u,c,h),i.isMega&&s&&a.unshift(["html","Will be <strong>"+i.abilities[0]+"</strong> after Mega Evolving."])}return a},s.filter=function(e,t){if(t&&"ability"===e[0])for(var s=this.dex.abilities.get(e[1]),r=0;r<t.length;r++){var i=t[r],a=i[0],n=i[1];switch(a){case"pokemon":if(Dex.hasAbility(this.dex.species.get(n),s.name))break;return!1}}return!0},s.sort=function(e,t,s){throw new Error("invalid sortcol")},t}(BattleTypedSearch),BattleItemSearch=function(e){function t(){return e.apply(this,arguments)||this}_inheritsLoose(t,e);var s=t.prototype;return s.getTable=function(){return BattleItems},s.getDefaultResults=function(){var e,t=BattleTeambuilderTable;return null!=(e=this.formatType)&&e.startsWith("bdsp")?t=t.gen8bdsp:null!=(e=this.formatType)&&e.startsWith("natdex")?t=t.natdex:null!=(e=this.formatType)&&e.startsWith("supernatdex")?t=t.snatdex:null!=(e=this.formatType)&&e.startsWith("swagmons")?t=t.swagmons:"metronome"===this.formatType?t=t.metronome:this.dex.gen<8&&(t=t["gen"+this.dex.gen]),t.itemSet||(t.itemSet=t.items.map(function(e){return"string"==typeof e?["item",e]:[e[0],e[1]]}),t.items=null),t.itemSet},s.getBaseResults=function(){if(!this.species)return this.getDefaultResults();for(var e=this.dex.species.get(this.species).name,t=this.getDefaultResults(),s=[],r=0;r<t.length;r++){var i,a=t[r];"item"===a[0]&&null!=(i=this.dex.items.get(a[1]).itemUser)&&i.includes(e)&&s.push(a)}return s.length?[["header","Specific to "+e]].concat(s,t):t},s.filter=function(e,t){if(t&&"ability"===e[0])for(var s=this.dex.abilities.get(e[1]),r=0;r<t.length;r++){var i=t[r],a=i[0],n=i[1];switch(a){case"pokemon":if(Dex.hasAbility(this.dex.species.get(n),s.name))break;return!1}}return!0},s.sort=function(e,t,s){throw new Error("invalid sortcol")},t}(BattleTypedSearch),BattleMoveSearch=function(i){function o(){for(var e,t=arguments.length,s=new Array(t),r=0;r<t;r++)s[r]=arguments[r];return(e=i.call.apply(i,[this].concat(s))||this).sortRow=["sortmove",""],e}_inheritsLoose(o,i);var e=o.prototype;return e.getTable=function(){return BattleMovedex},e.getDefaultResults=function(){var e,t=[];for(e in t.push(["header","Moves"]),BattleMovedex){switch(e){case"paleowave":t.push(["header","CAP moves"]);break;case"magikarpsrevenge":continue}t.push(["move",e])}return t},e.moveIsNotUseless=function(e,t,s,r,i){var a,n,l=this.dex;if(1===l.gen){if(["acidarmor","amnesia","barrier","bind","blizzard","clamp","confuseray","counter","firespin","hyperbeam","mirrormove","pinmissile","razorleaf","sing","slash","sludge","twineedle","wrap"].includes(e))return!0;if(["disable","firepunch","icepunch","leechseed","quickattack","roar","thunderpunch","toxic","triattack","whirlwind"].includes(e))return!1;switch(e){case"bubblebeam":return!i.includes("surf")&&!i.includes("blizzard");case"doubleedge":return!i.includes("bodyslam");case"doublekick":return!i.includes("submission");case"megadrain":return!i.includes("razorleaf")&&!i.includes("surf");case"megakick":return!i.includes("hyperbeam");case"reflect":return!i.includes("barrier")&&!i.includes("acidarmor");case"submission":return!i.includes("highjumpkick")}}if("letsgo"===this.formatType&&"megadrain"===e)return!0;if("metronome"===this.formatType&&"metronome"===e)return!0;switch("pidgeotite"===r&&(s="noguard"),"blastoisinite"===r&&(s="megalauncher"),"aerodactylite"===r&&(s="toughclaws"),"glalitite"===r&&(s="refrigerate"),e){case"fakeout":case"flamecharge":case"nuzzle":case"poweruppunch":return"sheerforce"!==s;case"solarbeam":case"solarblade":return["desolateland","drought","chlorophyll"].includes(s)||"powerherb"===r;case"dynamicpunch":case"grasswhistle":case"inferno":case"sing":case"zapcannon":return"noguard"===s;case"heatcrash":case"heavyslam":return t.weightkg>=(t.evos?75:130);case"aerialace":return["technician","toughclaws"].includes(s)&&!i.includes("bravebird");case"ancientpower":return["serenegrace","technician"].includes(s)||!i.includes("powergem");case"aurawheel":return"Morpeko"===t.baseSpecies;case"bellydrum":return i.includes("aquajet")||i.includes("extremespeed")||["iceface","unburden"].includes(s);case"bulletseed":return["skilllink","technician"].includes(s);case"counter":return 65<=t.baseStats.hp;case"darkvoid":return l.gen<7;case"drainingkiss":return"triage"===s;case"dualwingbeat":return"technician"===s||!i.includes("drillpeck");case"feint":return"refrigerate"===s;case"grassyglide":return"grassysurge"===s;case"gyroball":return t.baseStats.spe<=60;case"headbutt":return"serenegrace"===s;case"hiddenpowerelectric":return l.gen<4&&!i.includes("thunderpunch")&&!i.includes("thunderbolt");case"hiddenpowerfighting":return l.gen<4&&!i.includes("brickbreak")&&!i.includes("aurasphere")&&!i.includes("focusblast");case"hiddenpowerfire":return l.gen<4&&!i.includes("firepunch")&&!i.includes("flamethrower");case"hiddenpowergrass":return!i.includes("energyball")&&!i.includes("grassknot")&&!i.includes("gigadrain");case"hiddenpowerice":return!i.includes("icebeam")&&l.gen<4&&!i.includes("icepunch")||5<l.gen&&!i.includes("aurorabeam");case"hiddenpowerflying":return l.gen<4&&!i.includes("drillpeck");case"hiddenpowerbug":return l.gen<4&&!i.includes("megahorn");case"hiddenpowerpsychic":return"Unown"===t.baseSpecies;case"hyperspacefury":return"hoopaunbound"===t.id;case"hypnosis":return l.gen<4&&!i.includes("sleeppowder")||6<l.gen&&"baddreams"===s;case"icywind":return"Keldeo"===t.baseSpecies||"doubles"===this.formatType;case"infestation":return i.includes("stickyweb");case"irondefense":return!i.includes("acidarmor");case"irontail":return 5<l.gen&&!i.includes("ironhead")&&!i.includes("gunkshot")&&!i.includes("poisonjab");case"jumpkick":return!i.includes("highjumpkick");case"leechlife":return 6<l.gen;case"mysticalfire":return 6<l.gen&&!i.includes("flamethrower");case"naturepower":return 5===l.gen;case"nightslash":return!(i.includes("crunch")||i.includes("knockoff")&&6<=l.gen);case"petaldance":return"owntempo"===s;case"phantomforce":return!i.includes("poltergeist")&&!i.includes("shadowclaw")||"doubles"===this.formatType;case"poisonfang":return t.types.includes("Poison")&&!i.includes("gunkshot")&&!i.includes("poisonjab");case"relicsong":return"meloetta"===t.id;case"refresh":return!i.includes("aromatherapy")&&!i.includes("healbell");case"risingvoltage":return"electricsurge"===s;case"rocktomb":return"technician"===s;case"selfdestruct":return l.gen<5&&!i.includes("explosion");case"shadowpunch":return"ironfist"===s;case"smackdown":return t.types.includes("Ground");case"smartstrike":return t.types.includes("Steel")&&!i.includes("ironhead");case"soak":return"unaware"===s;case"steelwing":return!i.includes("ironhead");case"stompingtantrum":return!i.includes("earthquake")&&!i.includes("drillrun")||"doubles"===this.formatType;case"stunspore":return!i.includes("thunderwave");case"technoblast":return 5<l.gen&&r.endsWith("drive")||"dousedrive"===r;case"teleport":return 7<l.gen;case"terrainpulse":case"waterpulse":return["megalauncher","technician"].includes(s)&&!i.includes("originpulse");case"trickroom":return t.baseStats.spe<=100}return!("doubles"!==this.formatType||!o.GOOD_DOUBLES_MOVES.includes(e))||(!(n=BattleMovedex[e])||("Status"===n.category?o.GOOD_STATUS_MOVES.includes(e):n.basePower<75?o.GOOD_WEAK_MOVES.includes(e):"skydrop"===e||(null!=(a=n.flags)&&a.charge?"powerherb"===r:(null==(a=n.flags)||!a.recharge)&&!o.BAD_STRONG_MOVES.includes(e))))},e.getBaseResults=function(){var e;if(!this.species)return this.getDefaultResults();var t,s,r=this.dex,i=r.species.get(this.species),a=this.format,n=a.includes("hackmons")||a.endsWith("bh"),P=a.includes("stabmons")||"staaabmons"===a,G=a.includes("tradebacks"),_=(/^battle(stadium|festival)/.test(a)||a.startsWith("vgc"))&&8===this.dex.gen,l=this.set?toID(this.set.ability):"",o=this.set?toID(this.set.item):"",u=this.firstLearnsetid(i.id),c=[],h=[],d=!1,E=""+r.gen,p=BattleTeambuilderTable;for(null!=(e=this.formatType)&&e.startsWith("bdsp")&&(p=p.gen8bdsp),"letsgo"===this.formatType&&(p=p.gen7letsgo),null!=(e=this.formatType)&&e.startsWith("dlc1")&&(p=p.gen8dlc1),null!=(e=this.formatType)&&e.startsWith("supernatdex")&&(p=p.snatdex),null!=(e=this.formatType)&&e.startsWith("swagmons")&&(p=p.swagmons);u;){var g=p.learnsets[u];if(g)for(var f in g){var m=g[f],y=r.moves.get(f);_&&!m.includes("g")||!(m.includes(E)||G&&y.gen<=r.gen&&m.includes(""+(r.gen+1)))||!(null!=(m=this.formatType)&&m.includes("natdex")||"Past"!==y.isNonstandard)||null!=(m=this.formatType)&&m.startsWith("dlc1")&&null!=(y=BattleTeambuilderTable.gen8dlc1)&&y.nonstandardMoves.includes(f)||c.includes(f)||(c.push(f),"sketch"===f&&(d=!0),"hiddenpower"===f&&c.push("hiddenpowerbug","hiddenpowerdark","hiddenpowerdragon","hiddenpowerelectric","hiddenpowerfighting","hiddenpowerfire","hiddenpowerflying","hiddenpowerghost","hiddenpowergrass","hiddenpowerground","hiddenpowerice","hiddenpowerpoison","hiddenpowerpsychic","hiddenpowerrock","hiddenpowersteel","hiddenpowerwater"))}u=this.nextLearnsetid(u,i.id)}if(d||n)for(var b in n&&(c=[]),BattleMovedex)(a.startsWith("cap")||"paleowave"!==b&&"shadowstrike"!==b)&&((b=r.moves.get(b)).gen>r.gen||(d?b.noSketch||b.isMax||b.isZ||b.isNonstandard&&"Past"!==b.isNonstandard||("Past"!==b.isNonstandard||null!=(t=this.formatType)&&t.includes("natdex"))&&h.push(b.id):!(r.gen<8||null!=(t=this.formatType)&&t.includes("natdex"))&&b.isZ||"string"==typeof b.isMax||!("Past"!==b.isNonstandard||null!=(s=this.formatType)&&s.includes("natdex"))||"LGPE"===b.isNonstandard&&"letsgo"!==this.formatType||c.push(b.id)));if("metronome"===this.formatType&&(c=["metronome"]),P)for(var v in this.getTable()){var w=r.moves.get(v);if(!c.includes(w.id)&&!(w.gen>r.gen||w.isZ||w.isMax||w.isNonstandard)){for(var k=[],T=[],x=r.gen;x>=i.gen&&x>=w.gen;x--){for(var S=Dex.forGen(x),B=(T.push(S.moves.get(w.name).type),S.species.get(i.name)),D=S.species.get(B.changesFrom||B.name),W=(B.battleOnly||k.push.apply(k,B.types),B.prevo);W;){var U=S.species.get(W);k.push.apply(k,U.types),W=U.prevo}B.battleOnly&&"string"==typeof B.battleOnly&&(i=r.species.get(B.battleOnly));function L(e){return["Alola","Alola-Totem","Galar","Galar-Zen","Hisui"].includes(e.forme)}if(D.otherFormes&&!["Wormadam","Urshifu"].includes(D.baseSpecies)){L(i)||k.push.apply(k,D.types);for(var R=0,N=D.otherFormes;R<N.length;R++){var I=N[R],I=r.species.get(I);I.battleOnly||L(I)||k.push.apply(k,I.types)}}}for(var j=!1,O=0;O<T.length;O++){var q=T[O];if(k.includes(q)){j=!0;break}}j&&c.push(v)}}c.sort(),h.sort();for(var A=[],M=[],C=0,V=c;C<V.length;C++){var F=V[C];(this.moveIsNotUseless(F,i,l,o,c)?(A.length||A.push(["header","Moves"]),A):(M.length||M.push(["header","Usually useless moves"]),M)).push(["move",F])}h.length&&(A.push(["header","Sketched moves"]),M.push(["header","Useless sketched moves"]));for(var z=0;z<h.length;z++){var Z=h[z];(this.moveIsNotUseless(Z,i,l,o,h)?A:M).push(["move",Z])}return[].concat(A,M)},e.filter=function(e,t){if(t&&"move"===e[0])for(var s=this.dex.moves.get(e[1]),r=0;r<t.length;r++){var i=t[r],a=i[0],n=i[1];switch(a){case"type":if(s.type!==n)return!1;break;case"category":if(s.category!==n)return!1;break;case"pokemon":if(this.canLearn(n,s.id))break;return!1}}return!0},e.sort=function(e,t,s){var i=this,a=s?-1:1;switch(t){case"power":var n={return:102,frustration:102,spitup:300,trumpcard:200,naturalgift:80,grassknot:120,lowkick:120,gyroball:150,electroball:150,flail:200,reversal:200,present:120,wringout:120,crushgrip:120,heatcrash:120,heavyslam:120,fling:130,magnitude:150,beatup:24,punishment:1020,psywave:1250,nightshade:1200,seismictoss:1200,dragonrage:1140,sonicboom:1120,superfang:1350,endeavor:1399,sheercold:1501,fissure:1500,horndrill:1500,guillotine:1500};return e.sort(function(e,t){e[0];var e=e[1],t=(t[0],t[1]),s=i.dex.moves.get(e),r=i.dex.moves.get(t),e=s.basePower||n[e]||("Status"===s.category?-1:1400);return((r.basePower||n[t]||("Status"===r.category?-1:1400))-e)*a});case"accuracy":return e.sort(function(e,t){e[0];e=e[1],t[0],t=t[1],e=i.dex.moves.get(e).accuracy||0,t=i.dex.moves.get(t).accuracy||0;return((t=!0===t?101:t)-(e=!0===e?101:e))*a});case"pp":return e.sort(function(e,t){e[0];e=e[1],t[0],t=t[1],e=i.dex.moves.get(e).pp||0;return((i.dex.moves.get(t).pp||0)-e)*a});case"name":return e.sort(function(e,t){e[0];e=e[1],t[0],t=t[1];return(e<t?-1:t<e?1:0)*a})}throw new Error("invalid sortcol")},o}(BattleTypedSearch),BattleCategorySearch=(BattleMoveSearch.GOOD_STATUS_MOVES=["acidarmor","agility","aromatherapy","auroraveil","autotomize","banefulbunker","batonpass","bellydrum","bulkup","calmmind","clangoroussoul","coil","cottonguard","courtchange","curse","defog","destinybond","detect","disable","dragondance","drainingkiss","encore","extremeevoboost","geomancy","glare","haze","healbell","healingwish","healorder","heartswap","honeclaws","kingsshield","leechseed","lightscreen","lovelykiss","lunardance","magiccoat","maxguard","memento","milkdrink","moonlight","morningsun","nastyplot","naturesmadness","noretreat","obstruct","painsplit","partingshot","perishsong","protect","quiverdance","recover","reflect","reflecttype","rest","roar","rockpolish","roost","shellsmash","shiftgear","shoreup","slackoff","sleeppowder","sleeptalk","softboiled","spikes","spikyshield","spore","stealthrock","stickyweb","strengthsap","substitute","switcheroo","swordsdance","synthesis","tailglow","tailwind","taunt","thunderwave","toxic","toxicspikes","transform","trick","whirlwind","willowisp","wish","yawn"],BattleMoveSearch.GOOD_WEAK_MOVES=["accelerock","acrobatics","aquajet","avalanche","bonemerang","bouncybubble","bulletpunch","buzzybuzz","circlethrow","clearsmog","doubleironbash","dragondarts","dragontail","endeavor","facade","firefang","flipturn","freezedry","frustration","geargrind","grassknot","gyroball","hex","icefang","iceshard","iciclespear","knockoff","lowkick","machpunch","nightshade","nuzzle","pikapapow","psychocut","pursuit","quickattack","rapidspin","return","rockblast","scorchingsands","seismictoss","shadowclaw","shadowsneak","sizzlyslide","storedpower","stormthrow","suckerpunch","superfang","surgingstrikes","tailslap","tripleaxel","uturn","veeveevolley","voltswitch","watershuriken","weatherball"],BattleMoveSearch.BAD_STRONG_MOVES=["beakblast","belch","burnup","crushclaw","doomdesire","dragonrush","dreameater","eggbomb","firepledge","flyingpress","futuresight","grasspledge","hyperbeam","hyperfang","hyperspacehole","jawlock","landswrath","lastresort","megakick","megapunch","mistyexplosion","muddywater","nightdaze","pollenpuff","rockclimb","selfdestruct","shelltrap","skyuppercut","slam","strength","submission","synchronoise","takedown","thrash","uproar","waterpledge"],BattleMoveSearch.GOOD_DOUBLES_MOVES=["allyswitch","bulldoze","coaching","electroweb","faketears","fling","followme","healpulse","helpinghand","junglehealing","lifedew","muddywater","pollenpuff","psychup","ragepowder","safeguard","skillswap","snipeshot","wideguard"],function(e){function t(){return e.apply(this,arguments)||this}_inheritsLoose(t,e);var s=t.prototype;return s.getTable=function(){return{physical:1,special:1,status:1}},s.getDefaultResults=function(){return[["category","physical"],["category","special"],["category","status"]]},s.getBaseResults=function(){return this.getDefaultResults()},s.filter=function(e,t){throw new Error("invalid filter")},s.sort=function(e,t,s){throw new Error("invalid sortcol")},t}(BattleTypedSearch)),BattleTypeSearch=function(e){function t(){return e.apply(this,arguments)||this}_inheritsLoose(t,e);var s=t.prototype;return s.getTable=function(){return window.BattleTypeChart},s.getDefaultResults=function(){var e,t=[];for(e in window.BattleTypeChart)t.push(["type",e]);return t},s.getBaseResults=function(){return this.getDefaultResults()},s.filter=function(e,t){throw new Error("invalid filter")},s.sort=function(e,t,s){throw new Error("invalid sortcol")},t}(BattleTypedSearch);
