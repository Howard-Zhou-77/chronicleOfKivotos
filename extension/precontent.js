import { lib, get, _status, ui, game, ai } from './noname.js';
import { importCharacterPackExt, importCardPackExt } from './load.js';

export let PRECONTENT = function (config) {

  /*
  用于预加载一些东西
  这个函数的执行时机在content之前
  非必要
  */
  if (!lib.skill.eJinzhi) {
    lib.skill.eJinzhi = {
      mod: {
        cardEnabled2: (card, player, now) => {
          if (get.type(card, 'trick') == 'trick') return false;
        },
        cardRecastable: (card, player, result) => {
          if (get.type(card, 'trick') == 'trick') return false;
        }
      },
      mark: true,
      charlotte: true,
      markText: "禁制",
      intro: { content: "不得使用、打出或重铸锦囊牌" },
    };
    lib.translate['eJinzhi'] = "禁制";
    lib.translate['eJinzhi_info'] = '有此效果者不得使用、打出或重铸锦囊牌。'
  }
  if (!lib.skill._eJinzhi) {
    lib.skill._eJinzhi = {
      trigger: { player: "shaHit" },
      filter: (event, player) => {
        return event.card && event.card.eJinzhi && !event.target.hasSkill('eJinzhi');
      },
      forced: true,
      locked: true,
      firstDo: true,
      content: () => { trigger.target.addTempSkill('eJinzhi', { player: "phaseEnd" }) }
    };
    lib.translate['_eJinzhi'] = "禁制";
  }
  if (!lib.skill.eMabi) {
    lib.skill.eMabi = {
      mod: {
        cardEnabled2: (card, player, now) => {
          if (get.name(card) == 'sha') return false;
        },
      },
      mark: true,
      charlotte: true,
      markText: "麻痹",
      intro: { content: "不得使用或打出杀" },
    };
    lib.translate['eMabi'] = "麻痹";
    lib.translate['eMabi_info'] = '有此效果者不得使用或打出【杀】。'
  }
  game.isbaGroupChange = function () {
    return lib.config.baGroupChange;
  }

  game.baHasExtension = function (str) {
    return lib.config.extensions && lib.config.extensions.includes(str) && lib.config['extension_' + str + '_enable'];
  }
  window.qhfl_import = function (func) {
    func(lib, game, ui, get, ai, _status);
  };
  lib.init.js(lib.assetURL + 'extension/乞国秘史/skin.js', null);
  //————导入————//
  //当你不知道这是做什么的时候请不要动下列的代码！！！
  var fileList = {
    character: ['character'],
    card: ['card'],
  };
  var toLoad = [];
  for (var char of fileList['character']) {
    toLoad.push(importCharacterPackExt(char));
  };
  for (var card of fileList['card']) {
    toLoad.push(importCardPackExt(card));
  };
  Promise.allSettled(toLoad);
};