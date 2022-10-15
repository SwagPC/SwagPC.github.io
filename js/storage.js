function Storage(){}Storage.initialize=function(){window.nodewebkit&&(window.fs=require("fs"),this.initDirectory(),this.startLoggingChat=this.nwStartLoggingChat,this.stopLoggingChat=this.nwStopLoggingChat,this.logChat=this.nwLogChat),Storage.initPrefs()},Storage.safeJSON=function(t){return function(e){if(!(e.length<1))return"]"==e[0]&&(e=e.substr(1)),t(JSON.parse(e))}},Storage.bg={id:"",changeCount:0,set:function(e,t,a){if(this.load(e,t))if(t)try{localStorage.setItem("showdown_bg",e+"\n"+t)}catch(e){}else try{localStorage.removeItem("showdown_bg")}catch(e){}else this.extractMenuColors(e,t,a)},load:function(e,t,a){if(!(this.id=t)){if("smogtours.psim.us"===location.host)t="shaymin";else{if(location.host!==Config.routes.client)return $(document.body).css({background:"","background-size":""}),$("#mainmenubuttoncolors").remove(),!0;t=["horizon","ocean","waterfall","shaymin","charizards","psday"][Math.floor(6*Math.random())]}e=Dex.resourcePrefix+"fx/client-bg-"+t+".jpg"}var s,n,r="#"===e.charAt(0)?e:"custom"!==t?"#546bac url("+e+") no-repeat left center fixed":"#546bac url("+e+") no-repeat center center fixed",o=($(document.body).css({background:r,"background-size":"cover"}),"");if(this.changeCount++,!a)switch(t){case"horizon":a=["318.87640449438203,35.177865612648226%","216,46.2962962962963%","221.25,32.25806451612904%","197.8021978021978,52.60115606936417%","232.00000000000003,19.480519480519483%","228.38709677419354,60.7843137254902%"],o='<a href="https://vtas.deviantart.com/art/Pokemon-Horizon-312267168" target="_blank" class="subtle">"Horizon" <small>background by Vivian Zou</small></a>';break;case"ocean":a=["82.8169014084507,34.63414634146342%","216.16438356164383,29.55465587044534%","212.92682926829266,59.42028985507245%","209.18918918918916,57.51295336787566%","199.2857142857143,48.275862068965495%","213.11999999999998,55.06607929515419%"],o='<a href="https://quanyails.deviantart.com/art/Sunrise-Ocean-402667154" target="_blank" class="subtle">"Sunrise Ocean" <small>background by Yijing Chen</small></a>';break;case"waterfall":a=["119.31034482758622,37.66233766233767%","184.36363636363635,23.012552301255226%","108.92307692307692,37.14285714285714%","70.34482758620689,20.567375886524818%","98.39999999999998,36.76470588235296%","140,38.18181818181818%"],o='<a href="https://yilx.deviantart.com/art/Irie-372292729" target="_blank" class="subtle">"Irie" <small>background by Samuel Teo</small></a>';break;case"shaymin":a=["39.000000000000064,21.7391304347826%","170.00000000000003,2.380952380952378%","157.5,11.88118811881188%","174.78260869565216,12.041884816753928%","185.00000000000003,12.76595744680851%","20,5.660377358490567%"],o='<a href="http://cargocollective.com/bluep" target="_blank" class="subtle">"Shaymin" <small>background by Daniel Kong</small></a>';break;case"charizards":a=["37.159090909090914,74.57627118644066%","10.874999999999998,70.79646017699115%","179.51612903225808,52.10084033613446%","20.833333333333336,36.73469387755102%","192.3076923076923,80.41237113402063%","210,29.629629629629633%"],o='<a href="https://seiryuuden.deviantart.com/art/The-Ultimate-Mega-Showdown-Charizards-414587079" target="_blank" class="subtle">"Charizards" <small>background by Jessica Valencia</small></a>';break;case"psday":a=["24.705882352941174,25.37313432835821%","260.4651162790697,59.44700460829492%","165.3191489361702,46.07843137254901%","16.363636363636367,42.63565891472869%","259.04761904761904,34.05405405405405%","24.705882352941174,25.37313432835821%"],o="Pok&eacute;mon Showdown Day background <small>by LifeisDANK</small>";break;case"digimon":a=["170.45454545454544,27.500000000000004%","84.70588235294119,13.821138211382115%","112.50000000000001,7.8431372549019605%","217.82608695652175,54.761904761904766%","0,1.6949152542372816%",""]}return o=o&&'<small style="display:block;padding-bottom:4px">'+o+"</small>",$(".bgcredit").html(o),a||"#"!==e.charAt(0)||(r=parseInt(e.slice(1,3),16)/255,s=parseInt(e.slice(3,5),16)/255,n=parseInt(e.slice(5,7),16)/255,a=[r=this.getHueSat(r,s,n),r,r,r,r,r]),a&&this.loadHues(a),!!a},loadHues:function(e){$("#mainmenubuttoncolors").remove();for(var t="",a=0;a<5;a++)var s=a+1,n=e[a],t=(t+="body .button.mainmenu"+s+" { background: linear-gradient(to bottom,  hsl("+n+",72%),  hsl("+n+",52%)); border-color: hsl("+n+",40%); }\n")+("body .button.mainmenu"+s+":hover { background: linear-gradient(to bottom,  hsl("+n+",62%),  hsl("+n+",42%)); border-color: hsl("+n+",21%); }\n")+("body .button.mainmenu"+s+":active { background: linear-gradient(to bottom,  hsl("+n+",42%),  hsl("+n+",58%)); border-color: hsl("+n+",21%); }\n");$("head").append('<style id="mainmenubuttoncolors">'+t+"</style>")},extractMenuColors:function(r,e,o){var i=this.changeCount,l=new Image;l.onload=function(){try{var e=(new ColorThief).getPalette(l,5),t=[];if(e)for(var a=0;a<5;a++){var s=e[a],n=Storage.bg.getHueSat(s[0]/255,s[1]/255,s[2]/255);t.unshift(n)}else t=["0, 0%","0, 0%","0, 0%","0, 0%","0, 0%"];Storage.bg.loadHues(t),o||Storage.bg.changeCount!==i||localStorage.setItem("showdown_bg",r+"\n"+Storage.bg.id+"\n"+t.join("\n"))}catch(e){}},l.src=r},getHueSat:function(e,t,a){var s,n=Math.max(e,t,a),r=Math.min(e,t,a);if(n===r)return"0, 0%";var o=n-r,r=.5<(n+r)/2?o/(2-n-r):o/(n+r);switch(n){case e:s=(t-a)/o+(t<a?6:0);break;case t:s=(a-e)/o+2;break;case a:s=(e-t)/o+4}return 360*(s/=6)+","+100*r+"%"}};try{var bg=localStorage.getItem("showdown_bg").split("\n");2<=bg.length&&(Storage.bg.load(bg[0],bg[1]),7<=bg.length&&Storage.bg.loadHues(bg.slice(2)))}catch(e){}Storage.bg.id||Storage.bg.load(),Storage.origin="https://"+Config.routes.client,Storage.prefs=function(e,t,a){if(void 0===t)return this.prefs.data[e];if(null===t)delete this.prefs.data[e];else{if(this.prefs.data[e]===t&&"object"!=typeof t)return!1;this.prefs.data[e]=t}return!1!==a&&this.prefs.save(),!0},Storage.prefs.data={};try{window.localStorage&&(Storage.prefs.data=JSON.parse(localStorage.getItem("showdown_prefs"))||{})}catch(e){}Storage.prefs.save=function(){try{localStorage.setItem("showdown_prefs",JSON.stringify(this.data))}catch(e){}},Storage.makeLoadTracker=function(){function s(e,t){return s.isLoaded?e.call(t,s.value):s.callbacks.push([e,t]),s}return s.callbacks=[],s.value=void 0,s.isLoaded=!1,s.load=function(e){if(!s.isLoaded){s.isLoaded=!0,s.value=e;for(var t=0;t<s.callbacks.length;t++){var a=s.callbacks[t];a[0].call(a[1],e)}}},s.update=function(e){s.value=e;for(var t=0;t<s.callbacks.length;t++){var a=s.callbacks[t];a[0].call(a[1],e)}},s.unload=function(){s.isLoaded&&(s.isLoaded=!1)},s},Storage.whenPrefsLoaded=Storage.makeLoadTracker(),Storage.whenTeamsLoaded=Storage.makeLoadTracker(),Storage.whenAppLoaded=Storage.makeLoadTracker();var updatePrefs=function(){var e=Storage.prefs("showjoins");if(void 0!==e&&"object"!=typeof e){var t,a={},s={global:e?1:0},n=Storage.prefs("showroomjoins");for(t in n)s[t]=n[t]?1:0;Storage.prefs("showroomjoins",null),a[Config.server.id]=s,Storage.prefs("showjoins",a,!0)}e=navigator.userAgent.includes(" Chrome/64."),void 0!==Storage.prefs("nogif")?e||Storage.prefs("nogif",null):e&&(Storage.prefs("nogif",!0),Storage.whenAppLoaded(function(){app.addPopupMessage('Your version of Chrome has a bug that makes animated GIFs freeze games sometimes, so certain animations have been disabled. Only some people have the problem, so you can experiment and enable them in the Options menu setting "Disable GIFs for Chrome 64 bug".')})),a=window.matchMedia&&"not all"!==window.matchMedia("(prefers-color-scheme: dark)").media;"system"!==Storage.prefs("theme")||a||Storage.prefs("theme",null),void 0!==Storage.prefs("dark")&&(Storage.prefs("dark")&&Storage.prefs("theme","dark"),Storage.prefs("dark",null))};Storage.whenPrefsLoaded(updatePrefs),Storage.initPrefs=function(){if(Storage.loadTeams(),Config.testclient)return this.initTestClient();if(location.protocol+"//"+location.hostname===Storage.origin)Config.server=Config.server||Config.defaultserver,this.whenPrefsLoaded.load(),window.nodewebkit||this.whenTeamsLoaded.load();else{if(!("postMessage"in window))return Storage.whenAppLoaded(function(e){e.trigger("init:unsupported")});$(window).on("message",Storage.onMessage),document.location.hostname!==Config.routes.client?$('<iframe src="https://'+Config.routes.client+"/crossdomain.php?host="+encodeURIComponent(document.location.hostname)+"&path="+encodeURIComponent(document.location.pathname.substr(1))+"&protocol="+encodeURIComponent(document.location.protocol)+'" style="display: none;"></iframe>').appendTo("body"):(Config.server=Config.server||Config.defaultserver,$('<iframe src="https://'+Config.routes.client+'/crossprotocol.html?v1.2" style="display: none;"></iframe>').appendTo("body"),setTimeout(function(){Storage.whenPrefsLoaded.load(),Storage.whenTeamsLoaded.isLoaded||(Storage.whenTeamsLoaded.error="stalled",Storage.whenTeamsLoaded.update())},2e3))}},Storage.crossOriginFrame=null,Storage.crossOriginRequests={},Storage.crossOriginRequestCount=0,Storage.onMessage=function(e){var t=e.originalEvent;if(t.origin===Storage.origin){Storage.crossOriginFrame=t.source;var a=t.data;switch(a.charAt(0)){case"c":Config.server=JSON.parse(a.substr(1)),Config.server.registered&&"showdown"!==Config.server.id&&"smogtours"!==Config.server.id&&(s=$('<link rel="stylesheet" href="//'+Config.routes.client+"/customcss.php?server="+encodeURIComponent(Config.server.id)+'" />'),$("head").append(s));break;case"p":var s=JSON.parse(a.substr(1));s&&(Storage.prefs.data=s),Storage.prefs.save=function(){var e=JSON.stringify(this.data);Storage.postCrossOriginMessage("P"+e);try{localStorage.setItem("showdown_prefs",e)}catch(e){}},Storage.whenPrefsLoaded.load();break;case"t":window.nodewebkit||(Storage.teams&&Storage.teams.length&&(n=Storage.teams),Storage.loadPackedTeams(a.substr(1)),Storage.saveTeams=function(){var e=Storage.packAllTeams(Storage.teams);if(Storage.postCrossOriginMessage("T"+e),document.location.hostname===Config.routes.client)try{localStorage.setItem("showdown_teams_local",e)}catch(e){}},n&&(Storage.teams=Storage.teams.concat(n),Storage.saveTeams(),localStorage.removeItem("showdown_teams")),"tnull"!==a||Storage.teams.length||Storage.loadPackedTeams(localStorage.getItem("showdown_teams_local")),Storage.whenTeamsLoaded.load());break;case"a":if("a0"===a&&(Storage.noThirdParty=!0,Storage.whenTeamsLoaded.load(),Storage.whenPrefsLoaded.load()),!window.nodewebkit){try{Storage.crossOriginFrame.postMessage("",Storage.origin)}catch(t){return}$.get=function(e,t,a,s){var n=Storage.crossOriginRequestCount++;Storage.crossOriginRequests[n]=a,Storage.postCrossOriginMessage("R"+JSON.stringify([e,t,n,s]))},$.post=function(e,t,a,s){var n=Storage.crossOriginRequestCount++;Storage.crossOriginRequests[n]=a,Storage.postCrossOriginMessage("S"+JSON.stringify([e,t,n,s]))}}break;case"r":var s=JSON.parse(a.slice(1)),n=s[0];Storage.crossOriginRequests[n]&&(Storage.crossOriginRequests[n](s[1]),delete Storage.crossOriginRequests[n])}}},Storage.postCrossOriginMessage=function(e){try{return Storage.crossOriginFrame.postMessage(e,Storage.origin)}catch(e){Storage.whenPrefsLoaded.load(),Storage.whenTeamsLoaded.isLoaded||(Storage.whenTeamsLoaded.error=e,Storage.whenTeamsLoaded.update())}return!1},Storage.initTestClient=function(){Config.server=Config.server||Config.defaultserver,Storage.whenTeamsLoaded.load();var l=null;"string"==typeof POKEMON_SHOWDOWN_TESTCLIENT_KEY&&(l=POKEMON_SHOWDOWN_TESTCLIENT_KEY.replace(/\%2C/g,",")),Storage.whenAppLoaded(function(o){var r=$.get,i=($.get=function(e,t,a,s){if("html"===s&&(e+="&testclient"),t)for(var n in e+="?testclient",t)e+="&"+n+"="+encodeURIComponent(t[n]);"/"===e[0]&&(e=Dex.resourcePrefix+e.substr(1)),l?(t.sid=l,r(e,t,a,s)):o.addPopup(ProxyPopup,{uri:e,callback:a})},$.post);$.post=function(e,t,a,s){if("html"===s&&(e+="&testclient"),"/"===e[0]&&(e=Dex.resourcePrefix+e.substr(1)),l)t.sid=l,i(e,t,a,s);else{var n,r='<!DOCTYPE html><html><body><form action="'+BattleLog.escapeHTML(e)+'" method="POST">';for(n in r+='<input type="hidden" name="testclient">',t)r+='<input type=hidden name="'+n+'" value="'+BattleLog.escapeHTML(t[n])+'">';r+='<input type=submit value="Please click this button first."></form></body></html>',o.addPopup(ProxyPopup,{uri:"data:text/html;charset=UTF-8,"+encodeURIComponent(r),callback:a})}},Storage.whenPrefsLoaded.load()})},Storage.teams=null,Storage.loadTeams=function(){if(!window.nodewebkit){this.teams=[];try{window.localStorage&&Storage.loadPackedTeams(localStorage.getItem("showdown_teams"))}catch(e){}}},Storage.loadPackedTeams=function(t){try{this.teams=Storage.unpackAllTeams(t)}catch(e){Storage.whenAppLoaded(function(e){e.addPopup(Popup,{type:"modal",htmlMessage:'Your teams are corrupt and could not be loaded. :( We may be able to recover a team from this data:<br /><textarea rows="10" cols="60">'+BattleLog.escapeHTML(t)+"</textarea>"})})}},Storage.saveTeams=function(){try{window.localStorage&&(localStorage.setItem("showdown_teams",Storage.packAllTeams(this.teams)),Storage.cantSave=!1)}catch(e){if(e.code!==DOMException.QUOTA_EXCEEDED_ERR)throw e;Storage.cantSave=!0}},Storage.getPackedTeams=function(){var e="";try{e=localStorage.getItem("showdown_teams")}catch(e){}return e||Storage.packAllTeams(this.teams)},Storage.saveTeam=function(){this.saveTeams()},Storage.deleteTeam=function(){this.saveTeams()},Storage.saveAllTeams=function(){this.saveTeams()},Storage.deleteAllTeams=function(){},Storage.unpackAllTeams=function(e){return e?"["===e.charAt(0)&&$.trim(e).indexOf("\n")<0?JSON.parse(e).map(function(e){var t=e.format||"gen8",a=6;return(t=t&&"gen"!==t.slice(0,3)?"gen6"+t:t)&&(t.includes("bring9")||t.includes("b9c"))?a=9:t&&(t.includes("bring8")||t.includes("b8c"))&&(a=8),t&&t.endsWith("-box")&&(t=t.slice(0,-4),a=24),{name:e.name||"",format:t,team:Storage.packTeam(e.team),capacity:a,folder:"",iconCache:""}}):e.split("\n").map(Storage.unpackLine).filter(function(e){return e}):[]},Storage.unpackLine=function(e){var t,a,s,n,r=e.indexOf("|");return r<0?null:(t=e.indexOf("]"),s=e.slice(0,t=r<t?-1:t).endsWith("-box"),(a=e.lastIndexOf("/",r))<0&&(a=t),n=s?24:6,(s=(s=0<t?e.slice(0,s?t-4:t):"gen8")&&"gen"!==s.slice(0,3)?"gen6"+s:s)&&(s.includes("bring9")||s.includes("b9c"))?n=9:s&&(s.includes("bring8")||s.includes("b8c"))&&(n=8),{name:e.slice(a+1,r),format:s,team:e.slice(r+1),capacity:n,folder:e.slice(t+1,0<a?a:t+1),iconCache:""})},Storage.packAllTeams=function(e){return e.map(function(e){return(e.format?""+e.format+(24===e.capacity?"-box]":"]"):"")+(e.folder?e.folder+"/":"")+e.name+"|"+Storage.getPackedTeam(e)}).join("\n")},Storage.packTeam=function(e){var t,a="";if(!e)return"";for(var s=0;s<e.length;s++){var n=e[s],r=(a&&(a+="]"),a+=n.name||n.species,toID(n.species)),a=(a=(a+="|"+(toID(n.name||n.species)===r?"":r))+("|"+toID(n.item)))+("|"+toID(n.ability))+"|";if(n.moves)for(var o=0;o<n.moves.length;o++){var i=toID(n.moves[o]);o&&!i||(a+=(o?",":"")+i,"hiddenpower"===i.substr(0,11)&&11<i.length&&(t=!0))}a+="|"+(n.nature||"");r="|",r=("|,,,,,"===(r=n.evs?"|"+(n.evs.hp||"")+","+(n.evs.atk||"")+","+(n.evs.def||"")+","+(n.evs.spa||"")+","+(n.evs.spd||"")+","+(n.evs.spe||""):r)?(a+="|",0===n.evs.hp&&(a+="0")):a+=r,n.gender?a+="|"+n.gender:a+="|","|");a+="|,,,,,"===(r=n.ivs?"|"+(31===n.ivs.hp||void 0===n.ivs.hp?"":n.ivs.hp)+","+(31===n.ivs.atk||void 0===n.ivs.atk?"":n.ivs.atk)+","+(31===n.ivs.def||void 0===n.ivs.def?"":n.ivs.def)+","+(31===n.ivs.spa||void 0===n.ivs.spa?"":n.ivs.spa)+","+(31===n.ivs.spd||void 0===n.ivs.spd?"":n.ivs.spd)+","+(31===n.ivs.spe||void 0===n.ivs.spe?"":n.ivs.spe):r)?"|":r,n.shiny?a+="|S":a+="|",n.level&&100!=n.level?a+="|"+n.level:a+="|",void 0!==n.happiness&&255!==n.happiness?a+="|"+n.happiness:a+="|",(n.pokeball||n.hpType&&!t||n.gigantamax)&&(a=(a=(a+=","+(n.hpType||""))+","+toID(n.pokeball))+","+(n.gigantamax?"G":""),t=!1)}return a},Storage.fastUnpackTeam=function(e){if(!e)return[];for(var t=[],a=0,s=0;;){var n={},r=(t.push(n),s=e.indexOf("|",a),n.name=e.substring(a,s),s=e.indexOf("|",a=s+1),n.species=e.substring(a,s)||n.name,s=e.indexOf("|",a=s+1),n.item=e.substring(a,s),s=e.indexOf("|",a=s+1),e.substring(a,s)),o=Dex.species.get(n.species),o=("Zygarde"===o.baseSpecies&&"H"===r&&(r="Power Construct"),n.ability=o.abilities&&["","0","1","H","S"].includes(r)?o.abilities[r]||"!!!ERROR!!!":r,s=e.indexOf("|",a=s+1),n.moves=e.substring(a,s).split(","),s=e.indexOf("|",a=s+1),n.nature=e.substring(a,s),"undefined"===n.nature&&(n.nature=void 0),(s=e.indexOf("|",a=s+1))!==a&&(5<(o=e.substring(a,s)).length?(r=o.split(","),n.evs={hp:Number(r[0])||0,atk:Number(r[1])||0,def:Number(r[2])||0,spa:Number(r[3])||0,spd:Number(r[4])||0,spe:Number(r[5])||0}):"0"===o&&(n.evs={hp:0,atk:0,def:0,spa:0,spd:0,spe:0})),(a=s+1)!==(s=e.indexOf("|",a))&&(n.gender=e.substring(a,s)),(s=e.indexOf("|",a=s+1))!==a&&(r=e.substring(a,s).split(","),n.ivs={hp:""===r[0]?31:Number(r[0]),atk:""===r[1]?31:Number(r[1]),def:""===r[2]?31:Number(r[2]),spa:""===r[3]?31:Number(r[3]),spd:""===r[4]?31:Number(r[4]),spe:""===r[5]?31:Number(r[5])}),(a=s+1)!==(s=e.indexOf("|",a))&&(n.shiny=!0),(a=s+1)!==(s=e.indexOf("|",a))&&(n.level=parseInt(e.substring(a,s),10)),void 0);if((s=e.indexOf("]",a=s+1))<0?a<e.length&&(o=e.substring(a).split(",",4)):a!==s&&(o=e.substring(a,s).split(",",4)),o&&(n.happiness=o[0]?Number(o[0]):255,n.hpType=o[1],n.pokeball=o[2],n.gigantamax=!!o[3]),s<0)break;a=s+1}return t},Storage.unpackTeam=function(e){if(!e)return[];for(var t=[],a=0,s=0;;){var n={},r=(t.push(n),s=e.indexOf("|",a),n.name=e.substring(a,s),s=e.indexOf("|",a=s+1),n.species=Dex.species.get(e.substring(a,s)).name||n.name,s=e.indexOf("|",a=s+1),n.item=Dex.items.get(e.substring(a,s)).name,s=e.indexOf("|",a=s+1),Dex.abilities.get(e.substring(a,s)).name),o=Dex.species.get(n.species),o=(n.ability=o.abilities&&r in{"":1,0:1,1:1,H:1}?o.abilities[r||"0"]:r,s=e.indexOf("|",a=s+1),n.moves=e.substring(a,s).split(",").map(function(e){return Dex.moves.get(e).name}),s=e.indexOf("|",a=s+1),n.nature=e.substring(a,s),"undefined"===n.nature&&(n.nature=void 0),(s=e.indexOf("|",a=s+1))!==a&&(5<(o=e.substring(a,s)).length?(r=o.split(","),n.evs={hp:Number(r[0])||0,atk:Number(r[1])||0,def:Number(r[2])||0,spa:Number(r[3])||0,spd:Number(r[4])||0,spe:Number(r[5])||0}):"0"===o&&(n.evs={hp:0,atk:0,def:0,spa:0,spd:0,spe:0})),(a=s+1)!==(s=e.indexOf("|",a))&&(n.gender=e.substring(a,s)),(s=e.indexOf("|",a=s+1))!==a&&(r=e.substring(a,s).split(","),n.ivs={hp:""===r[0]?31:Number(r[0]),atk:""===r[1]?31:Number(r[1]),def:""===r[2]?31:Number(r[2]),spa:""===r[3]?31:Number(r[3]),spd:""===r[4]?31:Number(r[4]),spe:""===r[5]?31:Number(r[5])}),(a=s+1)!==(s=e.indexOf("|",a))&&(n.shiny=!0),(a=s+1)!==(s=e.indexOf("|",a))&&(n.level=parseInt(e.substring(a,s),10)),void 0);if((s=e.indexOf("]",a=s+1))<0?a<e.length&&(o=e.substring(a).split(",",4)):a!==s&&(o=e.substring(a,s).split(",",4)),o&&(n.happiness=o[0]?Number(o[0]):255,n.hpType=o[1],n.pokeball=o[2],n.gigantamax=!!o[3]),s<0)break;a=s+1}return t},Storage.packedTeamNames=function(e){if(!e)return[];for(var t=[],a=0;;){var s=e.substring(a,e.indexOf("|",a));if(!(a=e.indexOf("|",a)+1))return[];t.push(e.substring(a,e.indexOf("|",a))||s);for(var n=0;n<9;n++)if(!(a=e.indexOf("|",a)+1))return[];if((a=e.indexOf("]",a)+1)<1)break}return t},Storage.packedTeamIcons=function(e){return e?this.packedTeamNames(e).map(function(e){return'<span class="picon" style="'+Dex.getPokemonIcon(e)+';float:left;overflow:visible"><span style="font-size:0px">'+toID(e)+"</span></span>"}).join(""):"<em>(empty team)</em>"},Storage.getTeamIcons=function(e){if("!"===e.iconCache){if(e.team=Storage.packTeam(Storage.activeSetList),"teambuilder"in app.rooms)return Storage.packedTeamIcons(e.team);Storage.activeSetList=null,e.iconCache=Storage.packedTeamIcons(e.team)}else e.iconCache||(e.iconCache=Storage.packedTeamIcons(e.team));return e.iconCache},Storage.getPackedTeam=function(e){return e?("!"===e.iconCache&&(e.team=Storage.packTeam(Storage.activeSetList),"teambuilder"in app.rooms||(Storage.activeSetList=null,e.iconCache="")),"string"!=typeof e.team&&(e.team=Storage.packTeam(e.team)),e.team):null},Storage.importTeam=function(e,t){var a=e.split("\n"),s=t?null:[],n=null;if(!0===t)Storage.teams=[],t=Storage.teams;else if(1===a.length||2===a.length&&!a[1])return Storage.unpackTeam(a[0]);for(var r=0;r<a.length;r++)if(""===(o=$.trim(a[r]))||"---"===o)n=null;else if("==="===o.substr(0,3)&&t){var o,s=[],i="gen8",l=6,g=(o=$.trim(o.substr(3,o.length-6))).indexOf("]"),g=(0<=g&&((i=(i=o.substr(1,g-1))&&"gen"!==i.slice(0,3)?"gen6"+i:i)&&(i.includes("bring9")||i.includes("b9c"))?l=9:i&&(i.includes("bring8")||i.includes("b8c"))&&(l=8),i&&i.endsWith("-box")&&(i=i.slice(0,-4),l=24),o=$.trim(o.substr(g+1))),t.length&&"string"!=typeof t[t.length-1].team&&(t[t.length-1].team=Storage.packTeam(t[t.length-1].team)),o.lastIndexOf("/")),c="";0<g&&(c=o.slice(0,g),o=o.slice(g+1)),t.push({name:o,format:i,team:s,capacity:l,folder:c,iconCache:""})}else if(o.includes("|"))n=null,t.push(Storage.unpackLine(o));else if(n){if("Trait: "===o.substr(0,7))o=o.substr(7),n.ability=o;else if("Ability: "===o.substr(0,9))o=o.substr(9),n.ability=o;else if("Shiny: Yes"===o)n.shiny=!0;else if("Level: "===o.substr(0,7))o=o.substr(7),n.level=+o;else if("Happiness: "===o.substr(0,11))o=o.substr(11),n.happiness=+o;else if("Pokeball: "===o.substr(0,10))o=o.substr(10),n.pokeball=o;else if("Hidden Power: "===o.substr(0,14))o=o.substr(14),n.hpType=o;else if("Gigantamax: Yes"===o)n.gigantamax=!0;else if("EVs: "===o.substr(0,5)){var d=(o=o.substr(5)).split("/");n.evs={hp:0,atk:0,def:0,spa:0,spd:0,spe:0};for(var m=0;m<d.length;m++){var u=$.trim(d[m]);-1!==(h=u.indexOf(" "))&&(p=BattleStatIDs[u.substr(h+1)],S=parseInt(u.substr(0,h),10),p&&(n.evs[p]=S))}}else if("IVs: "===o.substr(0,5)){var f=(o=o.substr(5)).split(" / ");n.ivs={hp:31,atk:31,def:31,spa:31,spd:31,spe:31};for(m=0;m<f.length;m++){var h,p,S,b=f[m];-1!==(h=b.indexOf(" "))&&(p=BattleStatIDs[b.substr(h+1)],S=parseInt(b.substr(0,h),10),p&&(isNaN(S)&&(S=31),n.ivs[p]=S))}}else if(o.match(/^[A-Za-z]+ (N|n)ature/)){g=o.indexOf(" Nature");-1!==(g=-1===g?o.indexOf(" nature"):g)&&"undefined"!==(o=o.substr(0,g))&&(n.nature=o)}else if("-"===o.substr(0,1)||"~"===o.substr(0,1)){if(" "===(o=o.substr(1)).substr(0,1)&&(o=o.substr(1)),n.moves||(n.moves=[]),"Hidden Power ["===o.substr(0,14)){var i=o.substr(14,o.length-15),v=(o="Hidden Power "+i,Dex.types.get(i));if(!n.ivs&&v)for(var w in n.ivs={},v.HPivs)n.ivs[w]=v.HPivs[w]}"Frustration"===o&&void 0===n.happiness&&(n.happiness=0),n.moves.push(o)}}else{s.push(n={name:"",species:"",gender:""});l=o.lastIndexOf(" @ "),c=(-1!==l&&(n.item=o.substr(l+3),"noitem"===toID(n.item)&&(n.item=""),o=o.substr(0,l))," (M)"===o.substr(o.length-4)&&(n.gender="M",o=o.substr(0,o.length-4))," (F)"===o.substr(o.length-4)&&(n.gender="F",o=o.substr(0,o.length-4)),o.lastIndexOf(" ("));")"===o.substr(o.length-1)&&-1!==c?(o=o.substr(0,o.length-1),n.species=Dex.species.get(o.substr(c+2)).name,o=o.substr(0,c),n.name=o):(n.species=Dex.species.get(o).name,n.name="")}return t&&t.length&&"string"!=typeof t[t.length-1].team&&(t[t.length-1].team=Storage.packTeam(t[t.length-1].team)),s},Storage.exportAllTeams=function(){for(var e="",t=0,a=Storage.teams.length;t<a;t++)var s=Storage.teams[t],e=(e+="=== "+(s.format?"["+s.format+(24===s.capacity?"-box] ":"] "):"")+(s.folder?s.folder+"/":"")+s.name+" ===\n\n")+Storage.exportTeam(s.team)+"\n";return e},Storage.exportFolder=function(e){for(var t="",a=0,s=Storage.teams.length;a<s;a++){var n=Storage.teams[a];n.folder+"/"!==e&&n.format!==e||(t=(t+="=== "+(n.format?"["+n.format+(24===n.capacity?"-box] ":"] "):"")+(n.folder?n.folder+"/":"")+n.name+" ===\n\n")+Storage.exportTeam(n.team)+"\n")}return t},Storage.exportTeam=function(e){if(!e)return"";if("string"==typeof e){if(0<=e.indexOf("\n"))return e;e=Storage.unpackTeam(e)}for(var t="",a=0;a<e.length;a++){var s=e[a],n=(s.name&&s.name!==s.species?t+=s.name+" ("+s.species+")":t+=""+s.species,"M"===s.gender&&(t+=" (M)"),"F"===s.gender&&(t+=" (F)"),s.item&&(t+=" @ "+s.item),t+="  \n",s.ability&&(t+="Ability: "+s.ability+"  \n"),s.level&&100!=s.level&&(t+="Level: "+s.level+"  \n"),s.shiny&&(t+="Shiny: Yes  \n"),"number"!=typeof s.happiness||255===s.happiness||isNaN(s.happiness)||(t+="Happiness: "+s.happiness+"  \n"),s.pokeball&&(t+="Pokeball: "+s.pokeball+"  \n"),s.hpType&&(t+="Hidden Power: "+s.hpType+"  \n"),s.gigantamax&&(t+="Gigantamax: Yes  \n"),!0);if(s.evs)for(var r in BattleStatNames)s.evs[r]&&(n?(t+="EVs: ",n=!1):t+=" / ",t+=s.evs[r]+" "+BattleStatNames[r]);n||(t+="  \n"),s.nature&&(t+=s.nature+" Nature  \n");n=!0;if(s.ivs){for(var o,i=!0,l=!1,r=0;r<s.moves.length;r++)if("Hidden Power "===(o=s.moves[r]).substr(0,13)&&"Hidden Power ["!==o.substr(0,14))if(l=o.substr(13),Dex.types.isName(l)){for(var g in BattleStatNames)if((void 0===s.ivs[g]?31:s.ivs[g])!==(Dex.types.get(l).HPivs[g]||31)){i=!1;break}}else alert(o+" is not a valid Hidden Power type.");if(i&&!l)for(var g in BattleStatNames)if(31!==s.ivs[g]&&void 0!==s.ivs[g]){i=!1;break}if(!i)for(var g in BattleStatNames)void 0===s.ivs[g]||isNaN(s.ivs[g])||31==s.ivs[g]||(n?(t+="IVs: ",n=!1):t+=" / ",t+=s.ivs[g]+" "+BattleStatNames[g])}if(n||(t+="  \n"),s.moves)for(r=0;r<s.moves.length;r++)(o="Hidden Power "===(o=s.moves[r]).substr(0,13)?o.substr(0,13)+"["+o.substr(13)+"]":o)&&(t+="- "+o+"  \n");t+="\n"}return t},Storage.initDirectory=function(){var a=this,s=process.env.HOME||process.env.USERPROFILE||process.env.HOMEPATH;s.charAt(s.length-1)in{"/":1,"\\":1}||(s+="/"),fs.stat(s+"Documents",function(e,t){e||!t.isDirectory()?fs.stat(s+"My Documents",function(e,t){e||!t.isDirectory()?a.documentsDir=s:a.documentsDir=s+"My Documents/",a.initDirectory2()}):(a.documentsDir=s+"Documents/",a.initDirectory2())})},Storage.initDirectory2=function(){var a=this;fs.mkdir(a.documentsDir+"My Games",function(){fs.mkdir(a.documentsDir+"My Games/Pokemon Showdown",function(){fs.stat(a.documentsDir+"My Games/Pokemon Showdown",function(e,t){e||t.isDirectory()&&(a.dir=a.documentsDir+"My Games/Pokemon Showdown/",fs.mkdir(a.dir+"Logs",function(){}),fs.mkdir(a.dir+"Teams",function(){}),a.nwLoadTeams(),a.saveAllTeams=a.nwSaveAllTeams,a.deleteAllTeams=a.nwDeleteAllTeams,a.saveTeam=a.nwSaveTeam,a.saveTeams=a.nwSaveTeams,a.deleteTeam=a.nwDeleteTeam,Dex.prefs("logchat")&&a.startLoggingChat())})})})},Storage.revealFolder=function(){gui.Shell.openItem(this.dir)},Storage.nwFindTextFilesRecursive=function(n,r){var o=[];fs.readdir(n,function(e,t){var s;return e?r(e):(s=t.length)?void t.forEach(function(a){a=n+"/"+a,fs.stat(a,function(e,t){t&&t.isDirectory()?Storage.nwFindTextFilesRecursive(a,function(e,t){o=o.concat(t),--s||r(null,o)}):(".txt"===a.slice(-4).toLowerCase()&&o.push(a),--s||r(null,o))})}):r(null,o)})},Storage.nwLoadTeams=function(){var s=this,n=window.app,r=this.dir.length+6;Storage.nwFindTextFilesRecursive(this.dir+"Teams",function(e,t){if(e)Storage.whenTeamsLoaded.error=e,Storage.whenTeamsLoaded.update();else{s.teams=[],s.nwTeamsLeft=t.length,s.nwTeamsLeft||s.nwFinishedLoadingTeams(n);for(var a=0;a<t.length;a++){if(2e3<=a){setTimeout(function(){Storage.nwLoadNextBatch(t,2e3,r)},3e3);break}s.nwLoadTeamFile(t[a].slice(r),n)}}})},Storage.nwLoadNextBatch=function(e,t,a){var s;for(window.app&&window.app.addPopupMessage("Loading "+e.length+" teams (Teams load slowly if you have over 2000 teams)"),s=t;s<e.length;s++){if(t+2e3<=s){setTimeout(function(){Storage.nwLoadNextBatch(e,s)},3e3);break}this.nwLoadTeamFile(e[s].slice(a),window.app)}},Storage.nwLoadTeamFile=function(a,s){var n,r,o,e,i=this,l=a;".txt"!==l.slice(-4).toLowerCase()||(l=l.slice(0,-4),n="",0<=(e=l.indexOf("/"))&&(n=l.slice(0,e),l=$.trim(l.slice(e+1))),0<=(e=l.indexOf("/")))?--i.nwTeamsLeft||i.nwFinishedLoadingTeams(s):(r="gen8",o=6,0<=(e=l.indexOf("]"))&&((r=(r=(r=l.slice(1,e))&&!r.startsWith("gen")?"gen6"+r:r)&&/^gen6gen[0-9]/.test(r)?r.slice(4):r)&&(r.includes("bring9")||r.includes("b9c"))?o=9:r&&(r.includes("bring8")||r.includes("b8c"))&&(o=8),r&&r.endsWith("-box")&&(r=r.slice(0,-4),o=24),l=$.trim(l.slice(e+1))),fs.readFile(this.dir+"Teams/"+a,function(e,t){e?app.popup(e):i.teams.push({name:l,format:r,team:Storage.packTeam(Storage.importTeam(""+t)),capacity:o,folder:n,iconCache:"",filename:a}),--i.nwTeamsLeft||i.nwFinishedLoadingTeams(s)}))},Storage.nwFinishedLoadingTeams=function(e){this.teams.sort(this.teamCompare),Storage.whenTeamsLoaded.load()},Storage.teamCompare=function(e,t){return e.name>t.name?1:e.name<t.name?-1:0},Storage.fsReady=Storage.makeLoadTracker(),Storage.fsReady.load(),Storage.nwDeleteAllTeams=function(e){for(var t=[],a=0;a<this.teams.length;a++)this.teams[a].filename&&(t.push(this.teams[a].filename),delete this.teams[a].filename);if(t.length){Storage.fsReady.unload(),this.nwTeamsLeft=t.length;for(a=0;a<t.length;a++)this.nwDeleteTeamFile(t[a],e)}else e&&e()},Storage.nwDeleteTeamFile=function(a,s){var n;".txt"!==a.slice(-4).toLowerCase()?(this.nwTeamsLeft--,this.nwTeamsLeft||(s&&s(),Storage.fsReady.load())):(n=this,fs.unlink(this.dir+"Teams/"+a,function(e){var t=a.split("/").slice(0,-1).join("/");fs.rmdir(t,function(){}),n.nwTeamsLeft--,n.nwTeamsLeft||(s&&s(),Storage.fsReady.load())}))},Storage.nwSaveTeam=function(e){if(e){var t=e.name+".txt",a=(t=(t=e.format?"["+e.format+(24===e.capacity?"-box] ":"] ")+t:t).trim().replace(/[\\\/]+/g,""),(t=e.folder?e.folder.replace(/[\\\/]+/g,"")+"/"+t:t).split("/")),s=a.slice(0,-1).join(""),t=s+"/"+a[a.length-1];try{fs.mkdirSync(this.dir+"Teams/"+s)}catch(e){}e.filename&&t!==e.filename&&this.nwDeleteTeam(e),e.filename=t,fs.writeFile(this.dir+"Teams/"+t,Storage.exportTeam(e.team).replace(/\n/g,"\r\n"),function(){})}},Storage.nwSaveTeams=function(){try{console.log("nwSaveTeams called: "+(new Error).stack)}catch(e){}},Storage.nwDeleteTeam=function(e){var t,a;e.filename&&(t=e.filename,a=(a=t.split("/").slice(0,-1).join("/"))&&this.dir+"Teams/"+a,fs.unlink(this.dir+"Teams/"+t,function(){a&&fs.rmdir(a,function(){})}))},Storage.nwSaveAllTeams=function(){var e=this;Storage.fsReady(function(){e.nwDoSaveAllTeams()})},Storage.nwDoSaveAllTeams=function(){for(var e=0;e<this.teams.length;e++){var t=this.teams[e],a=t.name+".txt";t.format&&(a="["+t.format+(24===t.capacity?"-box] ":"] ")+a),a=$.trim(a).replace(/[\\\/]+/g,""),t.filename=a,fs.writeFile(this.dir+"Teams/"+a,Storage.exportTeam(t.team).replace(/\n/g,"\r\n"),function(){})}},Storage.getLogMonth=function(){var e=new Date,t=""+(e.getMonth()+1);return t.length<2&&(t="0"+t),e.getFullYear()+"-"+t},Storage.nwStartLoggingChat=function(){var a=this;a.documentsDir&&!a.loggingChat&&fs.mkdir(a.dir+"Logs",function(){a.chatLogFdMonth=a.getLogMonth(),fs.mkdir(a.dir+"Logs/"+a.chatLogFdMonth,function(){fs.stat(a.dir+"Logs/"+a.chatLogFdMonth,function(e,t){e||t.isDirectory()&&(a.loggingChat=!0,a.chatLogStreams={})})})})},Storage.nwStopLoggingChat=function(){if(this.loggingChat){this.loggingChat=!1;var e,t=this.chatLogStreams;for(e in this.chatLogStreams=null,t)t[e].end()}},Storage.nwLogChat=function(e,t){if(e=toRoomid(e),this.loggingChat){var a=this.getLogMonth();if(a!==this.chatLogFdMonth){this.chatLogFdMonth=a;var s,n=this.chatLogStreams;for(s in this.chatLogStreams={},n)n[s].end()}var r=new Date,o=""+r.getHours(),i=(o.length<2&&(o="0"+o),""+r.getMinutes()),o="["+o+":"+(i=i.length<2?"0"+i:i)+"] ";this.chatLogStreams[e]||(this.chatLogStreams[e]=fs.createWriteStream(this.dir+"Logs/"+a+"/"+e+".txt",{flags:"a"}),this.chatLogStreams[e].write("\n\n\nLog starting "+r+"\n\n")),this.chatLogStreams[e].write(o+t+"\n")}},Storage.startLoggingChat=function(){},Storage.stopLoggingChat=function(){},Storage.logChat=function(){},Storage.initialize();
