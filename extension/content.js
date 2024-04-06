import { lib, get, _status, ui, game, ai } from './noname.js';

export let CONTENT = function (config, pack) {
  /*
  用于加载一些杂七杂八的东西

  非必要，可以不写
  */
  lib.init.css(lib.assetURL + "extension/乞国秘史/card")
  lib.nature.push('ba_sonic')
  lib.card.sha.nature.push('ba_sonic')
  lib.translate.ba_sonic = '振动'
  lib.translate.ba_sonictag = '振'
  lib.translate.ba_sonicsha = '振杀'
  var baOriginalCardInit = lib.element.card.init
  lib.element.card.init = function () {
    let ret = baOriginalCardInit.apply(this, arguments);
    if (ret.name == 'sha' && ret.nature == 'ba_sonic') {
      ret.setBackgroundImage('extension/乞国秘史/ba_sonicsha.png');
    }
    return ret;
  }
  var baOriginalTranslation = get.translation
  get.translation = function (str, arg) {
    if (str && str.name == 'sha' && str.nature == 'ba_sonic') {
      if (str && typeof str == 'object' && (str.name || str._tempTranslate)) {
        if (str._tempTranslate) return str._tempTranslate;
        let str2;
        if (arg == 'viewAs' && str.viewAs) {
          str2 = get.translation(str.viewAs);
        }
        else {
          str2 = get.translation(str.name);
        }
        if (str2 == '杀') {
          str2 = '振' + str2;
        }
        if (get.itemtype(str) == 'card' || str.isCard) {
          if (_status.cardtag && str.cardid) {
            let tagstr = '';
            for (let i in _status.cardtag) {
              if (_status.cardtag[i].contains(str.cardid)) {
                tagstr += lib.translate[i + '_tag'];
              }
            }
            if (tagstr) {
              str2 += '·' + tagstr;
            }
          }
          if (str.suit && str.number) {
            let cardnum = str.number || '';
            if ([1, 11, 12, 13].contains(cardnum)) {
              cardnum = { '1': 'A', '11': 'J', '12': 'Q', '13': 'K' }[cardnum]
            }
            if (arg == 'viewAs' && str.viewAs != str.name && str.viewAs) {
              str2 += '（' + get.translation(str) + '）';
            }
            else {
              str2 += '【' + get.translation(str.suit) + cardnum + '】';
              // var len=str2.length-1;
              // str2=str2.slice(0,len)+'<span style="letter-spacing: -2px">'+str2[len]+'·</span>'+get.translation(str.suit)+str.number;
            }
          }
        }
        return str2;
      }
      if (Array.isArray(str)) {
        let str2 = get.translation(str[0], arg);
        for (let i = 1; i < str.length; i++) {
          str2 += '、' + get.translation(str[i], arg);
        }
        return str2;
      }
      if (arg == 'skill') {
        if (lib.translate[str + '_ab']) return lib.translate[str + '_ab'];
        if (lib.translate[str]) return lib.translate[str].slice(0, 2);
        return str;
      }
      else if (arg == 'info') {
        if (lib.translate[str + '_info']) return lib.translate[str + '_info'];
        let str2 = str.slice(0, str.length - 1);
        if (lib.translate[str2 + '_info']) return lib.translate[str2 + '_info'];
        if (str.lastIndexOf('_') > 0) {
          str2 = str.slice(0, str.lastIndexOf('_'));
          if (lib.translate[str2 + '_info']) return lib.translate[str2 + '_info'];
        }
        str2 = str.slice(0, str.length - 2);
        if (lib.translate[str2 + '_info']) return lib.translate[str2 + '_info'];
        if (lib.skill[str] && lib.skill[str].prompt) return lib.skill[str].prompt;
      }
      if (lib.translate[str]) {
        return lib.translate[str];
      }
      if (typeof str == 'string') {
        return str;
      }
      if (typeof str == 'number' || typeof str == 'boolean') {
        return str.toString()
      }
      if (str && str.toString) {
        return str.toString();
      }
      return '';
    } else {
      return baOriginalTranslation.apply(this, arguments);
    }
  }
  lib.card.ba_sonicdamage = {
    ai: {
      result: {
        target: -1.5,
      },
      tag: {
        damage: 1,
        ba_sonicDamage: 1,
        natureDamage: 1,
      },
    },
  }
  var baOriginalShaPrompt = lib.card.sha.cardPrompt
  lib.card.sha.cardPrompt = function (card) {
    if (card.name == 'sha' && card.nature == 'ba_sonic') return '出牌阶段，对一名其他角色使用。其须使用一张【闪】。否则你对其造成1点振动属性伤害。';
    else return baOriginalShaPrompt.apply(this, arguments);
  }

  lib.skill._ba_sonic_skill = {
    trigger: { player: "damageBegin1" },
    filter(event, player) {
      return event.nature && event.nature == 'ba_sonic'
    },
    forced: true,
    firstDo: true,
    content(event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) {
      if (trigger.player.getEquip(2) || trigger.player.countCards('h') == 0) {
        // player.discard(trigger.player, trigger.player.getEquip(2));
        trigger.num++;
      } else {
        if (trigger.source) trigger.source.discardPlayerCard(trigger.player, 'hej')
      }
    },
    // silent: true,
    popup: false,
    logTarget: "player",
    ai: {
      ba_sonicAttack: true,
      effect: {
        target: function (card, player, target, current) {
          let num1 = 2; let num2 = 1.9;
          if (!target.getEquip(2) && target.countCards('h') > 0) {
            num1 = 1.5;
            num2 = 1.42;
          }
          if (card.name == 'sha') {
            if (game.hasNature(card, 'ba_sonic')) return num1;
            if (player.hasSkill('ba_feijian')) return num2;
          }
          if (get.tag(card, 'ba_sonicDamage') && current < 0) return num1;
        },
      },
    }
  }
  lib.linked.push('ba_sonic')
  lib.translate['_ba_sonic_skill'] = '振动'
  lib.translate['_ba_sonic_skill_info'] = '振动伤害：对装备区有防具牌或无手牌的玩家造成伤害+1；对装备区无防具牌且有手牌的玩家造成振动伤害时，伤害来源可弃置其一张牌。'

  if (game.isbaGroupChange()) {
    var style3 = document.createElement('style');
    style3.innerHTML = ".player .identity[data-color='ba_gehenna'],";
    style3.innerHTML += "div[data-nature='ba_gehenna'],";
    style3.innerHTML += "span[data-nature='ba_gehenna'] {text-shadow: black 0 0 1px,rgba(255, 60, 60,1) 0 0 2px,rgba(255, 60, 60,1) 0 0 5px,rgba(255, 60, 60,1) 0 0 10px,rgba(255, 60, 60,1) 0 0 10px}";
    style3.innerHTML += "div[data-nature='ba_gehennam'],";
    style3.innerHTML += "span[data-nature='ba_gehennam'] {text-shadow: black 0 0 1px,rgba(255, 60, 60,1) 0 0 2px,rgba(255, 60, 60,1) 0 0 5px,rgba(255, 60, 60,1) 0 0 5px,rgba(255, 60, 60,1) 0 0 5px,black 0 0 1px;}";
    style3.innerHTML += "div[data-nature='ba_gehennamm'],";
    style3.innerHTML += "span[data-nature='ba_gehennamm'] {text-shadow: black 0 0 1px,rgba(255, 60, 60,1) 0 0 2px,rgba(255, 60, 60,1) 0 0 2px,rgba(255, 60, 60,1) 0 0 2px,rgba(255, 60, 60,1) 0 0 2px,black 0 0 1px;}";
    document.head.appendChild(style3);
    lib.group.add('ba_gehenna');
    lib.translate.ba_gehenna = '格';
    lib.translate.ba_gehenna2 = '格黑那学园';
    lib.groupnature.ba_gehenna = 'ba_gehenna';

    var style4 = document.createElement('style');
    style4.innerHTML = ".player .identity[data-color='ba_trinity'],";
    style4.innerHTML += "div[data-nature='ba_trinity'],";
    style4.innerHTML += "span[data-nature='ba_trinity'] {text-shadow: black 0 0 1px,rgba(0, 255, 255,1) 0 0 2px,rgba(0, 255, 255,1) 0 0 5px,rgba(0, 255, 255,1) 0 0 10px,rgba(0, 255, 255,1) 0 0 10px}";
    style4.innerHTML += "div[data-nature='ba_trinitym'],";
    style4.innerHTML += "span[data-nature='ba_trinitym'] {text-shadow: black 0 0 1px,rgba(0, 255, 255,1) 0 0 2px,rgba(0, 255, 255,1) 0 0 5px,rgba(0, 255, 255,1) 0 0 5px,rgba(0, 255, 255,1) 0 0 5px,black 0 0 1px;}";
    style4.innerHTML += "div[data-nature='ba_trinitymm'],";
    style4.innerHTML += "span[data-nature='ba_trinitymm'] {text-shadow: black 0 0 1px,rgba(0, 255, 255,1) 0 0 2px,rgba(0, 255, 255,1) 0 0 2px,rgba(0, 255, 255,1) 0 0 2px,rgba(0, 255, 255,1) 0 0 2px,black 0 0 1px;}";
    document.head.appendChild(style4);

    lib.group.add('ba_trinity');
    lib.translate.ba_trinity = '三';
    lib.translate.ba_trinity2 = '圣三一综合学园';
    lib.groupnature.ba_trinity = 'ba_trinity';

    var style6 = document.createElement('style');
    style6.innerHTML = ".player .identity[data-color='ba_millennium'],";
    style6.innerHTML += "div[data-nature='ba_millennium'],";
    style6.innerHTML += "span[data-nature='ba_millennium'] {text-shadow: black 0 0 1px,rgba(0, 239, 0,1) 0 0 2px,rgba(0, 239, 0,1) 0 0 5px,rgba(0, 239, 0,1) 0 0 10px,rgba(0, 239, 0,1) 0 0 10px}";
    style6.innerHTML += "div[data-nature='ba_millenniumm'],";
    style6.innerHTML += "span[data-nature='ba_millenniumm'] {text-shadow: black 0 0 1px,rgba(0, 239, 0,1) 0 0 2px,rgba(0, 239, 0,1) 0 0 5px,rgba(0, 239, 0,1) 0 0 5px,rgba(0, 239, 0,1) 0 0 5px,black 0 0 1px;}";
    style6.innerHTML += "div[data-nature='ba_millenniummm'],";
    style6.innerHTML += "span[data-nature='ba_millenniummm'] {text-shadow: black 0 0 1px,rgba(0, 239, 0,1) 0 0 2px,rgba(0, 239, 0,1) 0 0 2px,rgba(0, 239, 0,1) 0 0 2px,rgba(0, 239, 0,1) 0 0 2px,black 0 0 1px;}";
    document.head.appendChild(style6);

    lib.group.add('ba_millennium');
    lib.translate.ba_millennium = '千';
    lib.translate.ba_millennium2 = '千年科技学院';
    lib.groupnature.ba_millennium = 'ba_millennium';

    let style7 = document.createElement('style');
    style7.innerHTML = ".player .identity[data-color='ba_hakkiyako'],";
    style7.innerHTML += "div[data-nature='ba_hakkiyako'],";
    style7.innerHTML += "span[data-nature='ba_hakkiyako'] {text-shadow: black 0 0 1px,rgba(160,25,160,1) 0 0 2px,rgba(160,25,160,1) 0 0 5px,rgba(160,25,160,1) 0 0 10px,rgba(160,25,160,1) 0 0 10px}";
    style7.innerHTML += "div[data-nature='ba_hakkiyakom'],";
    style7.innerHTML += "span[data-nature='ba_hakkiyakom'] {text-shadow: black 0 0 1px,rgba(160,25,160,1) 0 0 2px,rgba(160,25,160,1) 0 0 5px,rgba(160,25,160,1) 0 0 5px,rgba(160,25,160,1) 0 0 5px,black 0 0 1px;}";
    style7.innerHTML += "div[data-nature='ba_hakkiyakomm'],";
    style7.innerHTML += "span[data-nature='ba_hakkiyakomm'] {text-shadow: black 0 0 1px,rgba(160,25,160,1) 0 0 2px,rgba(160,25,160,1) 0 0 2px,rgba(160,25,160,1) 0 0 2px,rgba(160,25,160,1) 0 0 2px,black 0 0 1px;}";
    document.head.appendChild(style7);

    lib.group.add('ba_hakkiyako');
    lib.translate.ba_hakkiyako = '百';
    lib.translate.ba_hakkiyako2 = '百鬼夜行联合学园';
    lib.groupnature.ba_hakkiyako = 'ba_hakkiyako';

    var chs = pack.character.character
    for (var i in chs) {
      var chara = chs[i];
      var originGroup = chara[1];
      switch (originGroup) {
        case 'wei':
          // if ((lib.character && lib.character[i]) || game.baHasExtension('手杀ui') || game.baHasExtension('十周年UI')) lib.character[i][1] = 'ba_trinity';
          chara[1] = 'ba_trinity';
          break;
        case "shu":
          // if ((lib.character && lib.character[i]) || game.baHasExtension('手杀ui') || game.baHasExtension('十周年UI')) lib.character[i][1] = 'ba_gehenna';
          chara[1] = 'ba_gehenna';
          break;
        case "wu":
          // if ((lib.character && lib.character[i]) || game.baHasExtension('手杀ui') || game.baHasExtension('十周年UI')) lib.character[i][1] = 'ba_millennium';
          chara[1] = 'ba_millennium';
          break;
        case "jin":
          // if ((lib.character && lib.character[i]) || game.baHasExtension('手杀ui') || game.baHasExtension('十周年UI')) lib.character[i][1] = 'ba_hakkiyako';
          chara[1] = 'ba_hakkiyako';
          break;
        case "qun":
        default:
          break;
      }
    };
    var chs2 = lib.characterPack['mode_extension_乞国秘史']
    for (var i in chs2) {
      var chara = chs[i];
      var originGroup = chara[1];
      switch (originGroup) {
        case 'wei':
          chara[1] = 'ba_trinity';
          break;
        case "shu":
          chara[1] = 'ba_gehenna';
          break;
        case "wu":
          chara[1] = 'ba_millennium';
          break;
        case 'jin':
          chara[1] = 'ba_hakkiyako';
          break;
        case "qun":
        default:
          break;
      }
    }

    if (game.baHasExtension('千幻聆音')) {
      if (!lib.qhlypkg) {
        lib.qhlypkg = [];
      }
      if (!lib.qhly_groupcolor) {
        lib.qhly_groupcolor = {};
      }
      lib.qhly_groupcolor['ba_gehenna'] = '#FF3C3C';
      lib.qhly_groupcolor['ba_trinity'] = '#00FFFF';
      lib.qhly_groupcolor['ba_millennium'] = '#00D000';
      lib.qhly_groupcolor['ba_hakkiyako'] = '#A019A0';
    }
  }
  lib.skill._ba_dieAudio = {
    trigger: { global: 'dieBegin', },
    filter: (event, player) => {
      return ['mouMiyuKasumizawa', 'mouMikaMisono', 'mouAzusaShirasu', 'mouHoshinoTakanashi'].includes(event.player.name) || event.player.name.indexOf('ba_') == 0;
    },
    priority: 2,
    forced: true,
    unique: true,
    frequent: true,
    content: function () {
      game.playAudio('..', 'extension', '乞国秘史', trigger.player.name);
    },
  }
  lib.rank.rarity.legend.addArray(["ba_HasumiHanekawa", "mouMikaMisono", "ba_HifumiAjitani", "ba_MakiKomami", "ba_HifumiAjitani", "ba_JuriUshimaki", "ba_KarinKakuTate", "ba_KikyouKiryuu"])
  lib.rank.rarity.epic.addArray(["mouHoshinoTakanashi", "ba_HinaSorazaki", "ba_AkariWanibuchi", "mouMiyuKasumizawa", "ba_HarunaKurodate", 'ba_IoriShiromi'])
  lib.rank.rarity.rare.addArray(["mouAzusaShirasu"])

};