import { lib, get, _status, ui, game, ai } from './noname.js';

export let CONFIG = {
  /*
  一些设置

  非必要，可以不写

  一个名字:{
    name:'选项名',
    intro:'介绍',
    init :true, //默认是开启(true)还是关闭(false)
  },

  e.p
  isAchMode: {
    name: '开启成就模式（重启生效）',
    intro: '开启后可获得成就，开启本模式会修改game.over的代码，如果出现兼容性问题请关闭此模式！',
    init: true,
  },
  */
  "baGroupChange": {
    "name": "势力不变形为魏蜀吴群",
    "intro": "开启后，本扩展内的“魏蜀吴”将变换回“三格千”。",
    "init": lib.config.baGroupChange === undefined ? false : lib.config.baGroupChange,
    onclick: function (item) {
      game.saveConfig('extension_乞国秘史_baGroupChange', item);
      game.saveConfig('baGroupChange', item);
    }
  }
};