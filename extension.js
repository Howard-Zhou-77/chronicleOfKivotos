///<reference path = '../../typings/index.d.ts'/>
game.import("extension", function (lib, game, ui, get, ai, _status) {
    return {
        name: "乞国秘史", content: function (config, pack) {
            // lib.ba = {};
            // lib.ba.qunToTrue = {

            // };
            // game.isbaGroupChange = function () {
            //     return lib.config.baGroupChange;
            // }

            // game.baHasExtension = function (str) {
            //     return lib.config.extensions && lib.config.extensions.contains(str) && lib.config['extension_' + str + '_enable'];
            // }

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

                var chs = pack.character.character
                for (var i in chs) {
                    var chara = chs[i];
                    var originGroup = chara[1];
                    switch (originGroup) {
                        case 'wei':
                            if ((lib.character && lib.character[i]) || game.baHasExtension('手杀ui') || game.baHasExtension('十周年UI')) lib.character[i][1] = 'ba_trinity';
                            chara[1] = 'ba_trinity';
                            break;
                        case "shu":
                            if ((lib.character && lib.character[i]) || game.baHasExtension('手杀ui') || game.baHasExtension('十周年UI')) lib.character[i][1] = 'ba_gehenna';
                            chara[1] = 'ba_gehenna';
                            break;
                        case "wu":
                            if ((lib.character && lib.character[i]) || game.baHasExtension('手杀ui') || game.baHasExtension('十周年UI')) lib.character[i][1] = 'ba_millennium';
                            chara[1] = 'ba_millennium';
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
                }
            }
            lib.skill._ba_dieAudio = {
                trigger: { global: 'dieBegin', },
                filter: (event, player) => {
                    return ['mouMiyuKasumizawa', 'mouMikaMisono', 'mouAzusaShirasu', 'mouHoshinoTakanashi'].contains(event.player.name) || event.player.name.indexOf('ba_') == 0;
                },
                priority: 2,
                forced: true,
                unique: true,
                frequent: true,
                content: function () {
                    game.playAudio('..', 'extension', '乞国秘史', trigger.player.name);
                },
            }
            lib.rank.rarity.legend.addArray(["ba_HasumiHanekawa", "mouMikaMisono", "ba_HifumiAjitani", "ba_MakiKomami", "ba_HifumiAjitani", "ba_JuriUshimaki", "ba_KarinKakuTate"])
            lib.rank.rarity.epic.addArray(["mouHoshinoTakanashi", "ba_HinaSorazaki", "ba_AkariWanibuchi", "mouMiyuKasumizawa", "ba_HarunaKurodate", 'ba_IoriShiromi'])
            lib.rank.rarity.rare.addArray(["mouAzusaShirasu"])
        }, precontent: function () {
            if (!lib.skill.eJinzhi) {
                lib.skill.eJinzhi = {
                    mod: {
                        cardEnabled2: (card, player, now) => {
                            if (get.type(card, 'trick') == 'trick') return false;
                        },
                        cardChongzhuable: (card, player, result) => {
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
                return lib.config.extensions && lib.config.extensions.contains(str) && lib.config['extension_' + str + '_enable'];
            }
            window.qhfl_import = function (func) {
                func(lib, game, ui, get, ai, _status);
            };
            lib.init.js(lib.assetURL + 'extension/乞国秘史/skin.js', null);

        }, help: {}, config: {
            "baGroupChange": {
                "name": "势力不变形为魏蜀吴群",
                "intro": "开启后，本扩展内的“魏蜀吴”将变换回“三格千”。",
                "init": lib.config.baGroupChange === undefined ? false : lib.config.baGroupChange,
                onclick: function (item) {
                    game.saveConfig('extension_乞国秘史_baGroupChange', item);
                    game.saveConfig('baGroupChange', item);
                }
            }
        }, package: {
            character: {
                character: {
                    mouMiyuKasumizawa: ["female", "qun", 3, ["mouLaji", "mouJushe"]],
                    mouHoshinoTakanashi: ["female", "qun", 3, ["mouDashu", "mouYizhong", "mouBailan"]],
                    mouMikaMisono: ["female", "wei", 4, ["mouLiezhan", "mouLeinie", "mouJuedou"]],
                    mouAzusaShirasu: ["female", "wei", 3, ["mouGuizhen", "mouLielei"]],
                    "ba_SeiaYurisono": ["female", "wei", 3, ["ba_poce", "zhenlue", "ba_zhimeng"]],
                    "ba_HifumiAjitani": ["female", "wei", 3, ["ba_kangyan", "ba_jushi"]],
                    "ba_NagisaKirifuji": ["female", "wei", 4, ["ba_yingzhi", "ba_yangmou", "ba_chazhu"], ["zhu"]],
                    "ba_YuukaHayase": ["female", "wu", 4, ["ba_qiongxie", "ba_mingsuan"]],
                    "ba_ShirokoSunaookami": ["female", "qun", 4, ["ba_shoulve", "ba_langhun"]],
                    "ba_NoaUshio": ["female", "wu", 4, ["ba_xiangji", "ba_youqing"]],
                    "ba_HanakoUrawa": ["female", "wei", 4, ["ba_miyin", "ba_xuansuan"]],
                    "ba_MaryIochi": ["female", "wei", 3, ["ba_xinzhu", "ba_daohui"]],
                    "ba_HinaSorazaki": ["female", "shu", 4, ["ba_yizhen", "ba_jilao"]],
                    "ba_TsurugiKenzaki": ["female", "wei", 5, ["ba_shehun", "ba_xuexiao"]],
                    "ba_AsunaIchinose": ["female", "wu", 4, ["ba_qiangfeng", "ba_tumei"]],
                    "ba_KoharuShitae": ["female", "wei", 3, ["ba_qingzheng", "ba_niwu"]],
                    "ba_MiyakoTsukiyuki": ["female", "qun", 4, ["ba_jujie", "ba_juyuan"]],
                    "ba_SerinaWashimi": ["female", "wei", 3, ["ba_renxian", "ba_lingyu"]],
                    "ba_AliceTendo": ["female", "wu", 4, ["ba_tianjian", "ba_jixue"]],
                    "ba_HimariAkiboshi": ["female", "wu", 3, ["ba_lunyi", "ba_heishu", "ba_chizhi"]],
                    "ba_AruRokuhachima": ["female", "shu", 4, ["ba_baoshe", "ba_chonge"]],
                    "ba_MutsukiAsagi": ["female", "shu", 3, ["ba_fuji", "ba_liwu"]],
                    "ba_KannaOgata": ["female", "qun", 4, ["ba_kuanglie", "ba_xungong"]],
                    "ba_NeroMikan": ["female", "wu", 4, ["ba_poxi", "ba_jizhan"]],
                    "ba_KarinKakuTate": ["female", "wu", 4, ["ba_chuanyang", "ba_yuzu"]],
                    'ba_MeguShitakura': ['female', 'shu', 4, ['ba_kaiquan', 'ba_zaoshen', 'ba_cunzhi']],
                    'ba_AkoAmau': ['female', 'shu', 3, ['ba_siyi', 'ba_quanru']],
                    'ba_IoriShiromi': ['female', 'shu', 4, ['ba_zuru', 'ba_sanqiang']],
                    'ba_IrohaNatsume': ['female', 'shu', '3/4/1', ['ba_qiuxia', 'ba_lipao']],
                    'ba_KoyukiKurosaki': ['female', 'wu', 3, ['ba_jijie', 'ba_xianyu', 'ba_jieling']],
                    'ba_KokonaHaruhara': ['female', 'qun', 3, ['ba_dudang', 'ba_zhengchi', 'ba_shuyan']],
                    'ba_HasumiHanekawa': ['female', 'wei', 4, ['ba_yanxi', 'ba_pojia']],
                    'ba_JuriUshimaki': ['female', 'shu', 3, ['ba_gushen', 'ba_duyan']],
                    'ba_NonomiIzayoi': ['female', 'qun', 3, ['ba_jugu', 'ba_hengchong', 'ba_haozhi']],
                    'ba_AkariWanibuchi': ['female', 'shu', 4, ['ba_ekou', 'ba_liuzha']],
                    'ba_MoeKazekura': ['female', 'qun', 3, ['ba_lanzha', 'ba_shouxie']],
                    'ba_SakiSorai': ['female', 'qun', 4, ['ba_kuxun', 'ba_yanshe']],
                    'ba_AkaneShitsukasa': ['female', 'wu', 4, ['ba_zhajing', 'ba_pushu']],
                    'ba_MakiKomami': ['female', 'wu', 3, ['ba_tuya', 'ba_shedie']],
                    'ba_HarunaKurodate': ['female', 'shu', 4, ['ba_zhadian', 'ba_chuanju']],
                    'ba_ShunSunohara': ['female', 'qun', 4, ['ba_lijiao', 'ba_youbian', 'ba_jugao']],
                    'ba_JunkoAkashi': ['female', 'shu', 4, ['ba_jichang', 'ba_nushe']],
                    'ba_AyaneOkusora': ['female', 'qun', 3, ['ba_jixing', 'ba_zhixiang', 'ba_yuyun']]
                },
                characterIntro: {
                    "ba_NagisaKirifuji": "摘自《乞国秘史》第四十八章 坠金鹰星升骏影宫 妒香兰火起霜鸾阁：<br><br>……<br>势头发展到这里，从来就不占理还在上师面前被戳破了架子的金鹰仙子已没了半点身为茶帘洞主的威严，只剩一口讨饶的好话求骏影郡主在上师面前保自己一点面子。<br>那骏影郡主也不做怒，只是笑眯眯的说：“就是如此在下也不会怪罪仙子大人的。至于原因吗，啊哈哈……”<br><br>金鹰仙子回想起了昨夜玄铁阁主带去的那句话，“啊哈哈，和仙子大人演做朋友的戏实是有意思的很啊！”，顿时明白了带这话的人正是骏影郡主，又悔又恨，急气攻心，一口毒血瞬时喷了出来，趴在茶桌上再起不能。",
                },
                characterSort: {
                },
                characterTitle: {
                    mouMikaMisono: "琉璃仙子",
                    mouAzusaShirasu: "东林郡主",
                    mouMiyuKasumizawa: "北灵玉兔",
                    mouHoshinoTakanashi: "玉宫郡主",
                    "ba_SeiaYurisono": "盘龙仙子",
                    "ba_HifumiAjitani": "骏影郡主",
                    "ba_NagisaKirifuji": "金鹰仙子",
                    "ba_YuukaHayase": "霜鸾阁主",
                    "ba_ShirokoSunaookami": "苍狼郡主",
                    "ba_NoaUshio": "香兰阁主",
                    "ba_HanakoUrawa": "玄铁阁主",
                    "ba_MaryIochi": "翠屏星官",
                    "ba_HinaSorazaki": "紫薇郡主",
                    "ba_TsurugiKenzaki": "玄铁郡主",
                    "ba_AsunaIchinose": "银弦星官",
                    "ba_KoharuShitae": "清屏郡主",
                    "ba_MiyakoTsukiyuki": "霜寒玉兔",
                    "ba_SerinaWashimi": "灵愈仙子",
                    "ba_AliceTendo": "无名公主",
                    "ba_HimariAkiboshi": "晨星仙子",
                    "ba_AruRokuhachima": "六八社长",
                    "ba_MutsukiAsagi": "黄鳞阁主",
                    "ba_KannaOgata": "旷泉仙子",
                    "ba_NeroMikan": "角弓星官",
                    "ba_KarinKakuTate": "玄云星官",
                    ba_MeguShitakura: "音前仙子",
                    ba_AkoAmau: "秤台郡主",
                    ba_IoriShiromi: "玉素郡主",
                    ba_IrohaNatsume: "晴台阁主",
                    ba_HasumiHanekawa: "青蝎郡主",
                    ba_JuriUshimaki: "赤蛇星官",
                    ba_NonomiIzayoi: "天应星官",
                    ba_AkariWanibuchi: "青鳄星官",
                    ba_MoeKazekura: "烈炙炎兔",
                    ba_SakiSorai: "连海玉兔",
                    ba_MakiKomami: "猎蟒星官",
                    ba_HarunaKurodate: "玄舍郡主",
                    ba_JunkoAkashi: "绽火星官"
                },
                translate: {
                    mouMikaMisono: "圣园未花",
                    mouAzusaShirasu: "白州梓",
                    mouMiyuKasumizawa: "霞泽美游",
                    mouHoshinoTakanashi: "小鸟游星野",
                    "ba_SeiaYurisono": "百合园圣娅",
                    "ba_HifumiAjitani": "阿慈谷日富美",
                    "ba_NagisaKirifuji": "桐藤渚",
                    "ba_YuukaHayase": "早濑优香",
                    "ba_ShirokoSunaookami": "砂狼白子",
                    "ba_NoaUshio": "生盐乃爱",
                    "ba_HanakoUrawa": "浦和花子",
                    "ba_MaryIochi": "伊落玛丽",
                    "ba_HinaSorazaki": "空崎日奈",
                    "ba_TsurugiKenzaki": "剑先鹤城",
                    "ba_AsunaIchinose": "一之濑明日奈",
                    "ba_KoharuShitae": "下江小春",
                    "ba_MiyakoTsukiyuki": "月雪宫子",
                    "ba_SerinaWashimi": "鹫见芹奈",
                    "ba_AliceTendo": "天童爱丽丝",
                    "ba_HimariAkiboshi": "明星日鞠",
                    "ba_AruRokuhachima": "陆八魔阿露",
                    "ba_MutsukiAsagi": "浅黄睦月",
                    "ba_KannaOgata": "尾刃叶渚",
                    "ba_KarinKakuTate": "角楯花凛",
                    "ba_NeroMikan": "美甘宁瑠",
                    ba_MeguShitakura: "下仓惠",
                    ba_AkoAmau: "天雨亚子",
                    ba_IoriShiromi: "银镜伊织",
                    ba_IrohaNatsume: "枣伊吕波",
                    ba_KoyukiKurosaki: "黑崎小雪",
                    ba_KokonaHaruhara: "春原心奈",
                    ba_HasumiHanekawa: "羽川莲见",
                    ba_JuriUshimaki: "牛牧茱里",
                    ba_NonomiIzayoi: "十六夜野宫",
                    ba_AkariWanibuchi: "鳄渊明里",
                    ba_MoeKazekura: "风仓萌",
                    ba_SakiSorai: "空井咲",
                    ba_AkaneShitsukasa: "室笠茜",
                    ba_MakiKomami: "小涂真纪",
                    ba_HarunaKurodate: "黑馆晴奈",
                    ba_ShunSunohara: "春原瞬",
                    ba_JunkoAkashi: "赤司淳子",
                    ba_AyaneOkusora: "奥空绫音",
                },
            },
            card: {
                card: {
                    "ba_HikarinoKen": {
                        fullskin: true,
                        // derivation: "ba_AliceTendo",
                        type: "equip",
                        subtype: "equip1",
                        distance: {
                            attackFrom: -2,
                        },
                        ai: {
                            equipValue: (card, player) => {
                                return 2.5 + Math.max((player.hasSkillTag('natureDamage')) ? 4 : 0, player.countCards('h', card => get.tag(card, 'natureDamage')) * 3)
                            },
                        },
                        basic: {
                            equipValue: 3.5,
                            order: function (card, player) {
                                if (player && player.hasSkillTag('reverseEquip')) {
                                    return 8.5 - get.equipValue(card, player) / 20;
                                }
                                else {
                                    return 8 + get.equipValue(card, player) / 20;
                                }
                            },
                            useful: 2,
                            value: function (card, player, index, method) {
                                if (player.isDisabled(get.subtype(card))) return 0.01;
                                var value = 0;
                                var info = get.info(card);
                                var current = player.getEquip(info.subtype);
                                if (current && card != current) {
                                    value = get.value(current, player);
                                }
                                var equipValue = info.ai.equipValue;
                                if (equipValue == undefined) {
                                    equipValue = info.ai.basic.equipValue;
                                }
                                if (typeof equipValue == 'function') {
                                    if (method == 'raw') return equipValue(card, player);
                                    if (method == 'raw2') return equipValue(card, player) - value;
                                    return Math.max(0.1, equipValue(card, player) - value);
                                }
                                if (typeof equipValue != 'number') equipValue = 0;
                                if (method == 'raw') return equipValue;
                                if (method == 'raw2') return equipValue - value;
                                return Math.max(0.1, equipValue - value);
                            },
                        },
                        skills: ["ba_HikarinoKen_skill", "ba_HikarinoKen_skill_2"],
                        enable: true,
                        selectTarget: -1,
                        filterTarget: function (card, player, target) {
                            return target == player;
                        },
                        content: function () {
                            if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                        },
                        toself: true,
                    },
                    ba_ruishijuan: {
                        enable: true,
                        type: "basic",
                        usable: 1,
                        filterTarget: lib.filter.notMe,
                        // cardimage: "ext:乞国秘史:ba_ruishijuan.png",
                        fullskin: true,
                        selectTarget: 1,
                        content: () => {
                            'step 0'
                            if (target.hp == target.maxHp) event._result = { control: "下回合只能对自己用牌" };
                            else player.chooseControl('下回合只能对自己用牌', '回复1点体力').set('prompt', '【瑞士卷】：令' + get.translation(target) + '……').set('ai', () => {
                                var target = _status.event.target;
                                var player = _status.event.player;
                                return (get.recoverEffect(target, player, player) > 0) ? '回复1点体力' : '下回合只能对自己用牌'
                            }).set('target', target)
                            'step 1'
                            if (result.control == '下回合只能对自己用牌') {
                                target.addTempSkill('ba_g_ruishijuan', { player: 'phaseEnd' });
                            } else {
                                target.recover();
                            }
                        },
                        ai: {
                            tag: {
                                recover: 1,
                            },
                            order: 5,
                            result: {
                                // player:(player,target)=>{
                                //     if (get.recoverEffect(target,player,player)>0) return get.recoverEffect(target,player,player);
                                //     else return target.countCards('h')/2;
                                // },
                                target: (player, target, card) => {
                                    if (get.recoverEffect(target, player, player) > 0) return get.recoverEffect(target, player, target);
                                    else return -target.countCards('h') / 2;
                                }
                            },
                            usable: [8.5, 7, 5.5, 4],
                            value: [8.5, 7, 5.5, 4],
                        }
                    },
                    ba_yuyunhao: {
                        fullskin: true,
                        type: "equip",
                        subtype: "equip1",
                        distance: {
                            attackFrom: -8,
                        },
                        skills: ['ba_yuyunhao_skill'],
                        enable: true,
                        selectTarget: -1,
                        filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
                        modTarget: true,
                        allowMultiple: false,
                        content: function () {
                            if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                        },
                        toself: true,
                        ai: {
                            basic: {
                                order: (card, player) => {
                                    const equipValue = get.equipValue(card, player) / 20;
                                    return player && player.hasSkillTag('reverseEquip') ? 8.5 - equipValue : 8 + equipValue;
                                },
                                useful: 2,
                                equipValue: 4,
                                value: (card, player, index, method) => {
                                    if (!player.getCards('e').contains(card) && !player.canEquip(card, true)) return 0.01;
                                    const info = get.info(card), current = player.getEquip(info.subtype), value = current && card != current && get.value(current, player);
                                    let equipValue = info.ai.equipValue || info.ai.basic.equipValue;
                                    if (typeof equipValue == 'function') {
                                        if (method == 'raw') return equipValue(card, player);
                                        if (method == 'raw2') return equipValue(card, player) - value;
                                        return Math.max(0.1, equipValue(card, player) - value);
                                    }
                                    if (typeof equipValue != 'number') equipValue = 0;
                                    if (method == 'raw') return equipValue;
                                    if (method == 'raw2') return equipValue - value;
                                    return Math.max(0.1, equipValue - value);
                                },
                            },
                            result: {
                                target: (player, target, card) => get.equipResult(player, target, card.name),
                            },
                        },
                    },
                },
                translate: {
                    "ba_HikarinoKen": "光之剑",
                    "ba_HikarinoKen_info": "每回合限一次，当你造成无属性伤害时，你可以将其改为火属性。锁定技，当你造成属性伤害时，若目标的装备区没有武器牌，此伤害+1。",
                    'ba_ruishijuan': "瑞士卷",
                    'ba_ruishijuan_info': "出牌阶段，对一名其他角色使用，你选择令其回复1点体力或令其下一回合前使用锦囊牌只能指定自己为目标。",
                    'ba_yuyunhao': "雨云号",
                    'ba_yuyunhao_info': "锁定技，出牌阶段你使用的第一张【杀】目标数+1；你使用【杀】指定目标时可以令目标所有技能本回合内失效"
                },
                list: [
                    ['diamond', 5, 'ba_ruishijuan'],
                    ['club', 4, 'ba_ruishijuan'],
                    ['diamond', 7, 'ba_ruishijuan'],
                    ['club', 13, 'ba_ruishijuan'],
                    ['diamond', 11, 'ba_ruishijuan'],
                    ['club', 1, 'ba_ruishijuan'],
                    ['diamond', 6, 'ba_ruishijuan'],
                    ['club', 9, 'ba_ruishijuan'],
                    ['diamond', 10, 'ba_ruishijuan'],
                ],
            },
            skill: {
                skill: {
                    "ba_g_ruishijuan": {
                        mod: {
                            playerEnabled: function (card, player, target) {
                                if (player != target && get.type2(card) == 'trick' && player == _status.currentPhase) return false;
                            },
                        },
                        charlotte: true,
                        mark: true,
                        intro: {
                            content: "本轮不能使用锦囊牌指定其他角色为目标"
                        }
                    },
                    "ba_HikarinoKen_skill": {
                        equipSkill: true,
                        usable: 1,
                        trigger: {
                            source: "damageBegin1",
                        },
                        filter: (event, player) => !event.nature,
                        check: (event, player) => {
                            return get.damageEffect(event.player, player, player, 'fire') > get.damageEffect(event.player, player, player)
                        },
                        content: () => {
                            trigger.nature = 'fire';
                            game.log(player, '对', trigger.player, '造成的伤害被改为火属性')
                        },
                        "prompt2": (event, player) => '将对' + get.translation(event.player) + '造成的伤害被改为火属性',
                    },
                    "ba_HikarinoKen_skill_2": {
                        equipSkill: true,
                        forced: true,
                        locked: true,
                        trigger: {
                            source: "damageBegin2",
                        },
                        filter: (event, player) => event.nature && event.player.countCards('e', card => get.subtype(card) == 'equip1') == 0,
                        content: () => {
                            trigger.num++;
                        },
                        ai: {
                            effect: {
                                player: function (card, player, target) {
                                    if ((get.tag(card, 'natureDamage') || get.tag(card, 'fireDamage') || get.tag(card, 'thunderDamage') || (!player.storage.counttrigger || player.storage.counttrigger.ba_HikarinoKen == 0))
                                        && (target && target.countCards('e', card => get.subtype(card) == 'equip1') == 0)) {
                                        if (get.attitude(player, target) > 0) return [1, -0.5];
                                        return [1, 0.8];
                                    }
                                },
                            },
                        },
                    },
                    'ba_yuyunhao_skill': {
                        trigger: { player: "useCardToPlayered" },
                        mod: {
                            selectTarget: (card, player, num) => {
                                if (player.countUsed('sha', true) == 0 && card.name == 'sha' && num[1] != -1) num[1]++
                            }
                        },
                        check: function (event, player) {
                            return get.attitude(player, event.target) < 0;
                        },
                        filter: function (event, player) {
                            return event.card.name == 'sha';
                        },
                        logTarget: "target",
                        shaRelated: true,
                        content: () => { trigger.target.addTempSkill("fengyin") },
                        ai: {
                            ignoreSkill: true,
                            skillTagFilter: (player, tag, arg) => {
                                if (!arg || arg.isLink || !arg.card || arg.card.name != 'sha') return false;
                                if (!arg.target || get.attitude(player, arg.target) >= 0) return false;
                                if (!arg.skill || !lib.skill[arg.skill] || lib.skill[arg.skill].charlotte || get.is.locked(arg.skill) || !arg.target.getSkills(true, false).contains(arg.skill)) return false
                            }
                        }
                    },
                    mouLaji: {
                        trigger: {
                            player: "gainBegin",
                        },
                        filter: function (event, player) {
                            if (event.getParent().name != 'draw') return false;
                            // if (event.player == player) return false;
                            if (event.getParent(2).name == 'phaseDraw') return event.cards.length <= ui.discardPile.childNodes.length;
                        },
                        forced: true,
                        locked: true,
                        content: () => {
                            'step 0'
                            event.num = trigger.cards.length;
                            'step 1'
                            event.togain = [];
                            for (var i = 0; i < event.num; i++) {
                                var current = ui.discardPile.childNodes[i];
                                event.togain.push(current);
                            }
                            'step 2'
                            trigger.cards = event.togain
                        },
                        audio: 2,
                        subSkill: {
                            call: {
                                enable: "phaseUse",
                                usable: 1,
                                audio: "mouLaji",
                                filter: (event, player) => {
                                    for (card of ui.discardPile.childNodes) {
                                        if (card.name == 'sha' || card.name == 'shan' || get.type(card) == 'equip') return true;
                                    }
                                    return false;
                                },
                                content: () => {
                                    'step 0'
                                    event.cards = {
                                        sha: null,
                                        shan: null,
                                        equip: null,
                                    };
                                    for (card of ui.discardPile.childNodes) {
                                        if (card.name == 'sha' && event.cards.sha == null) event.cards.sha = card;
                                        if (card.name == 'shan' && event.cards.shan == null) event.cards.shan = card;
                                        if (get.type(card) == 'equip' && event.cards.equip == null) event.cards.equip = card;
                                        if (event.cards.sha && event.cards.shan && event.cards.equip) break;
                                    };
                                    event.opt = [];
                                    if (event.cards.sha) event.opt.push('杀');
                                    if (event.cards.shan) event.opt.push('闪');
                                    if (event.cards.equip) event.opt.push('装备');
                                    if (event.opt.length == 0) event.finish();
                                    else if (event.opt.length == 1) event._result = { control: event.opt[0] };
                                    else player.chooseControl(event.opt).set('prompt', '从牌堆中获得一张……').set('ai', () => {
                                        if (event.opt.contains('闪') && player.countCards('h', { name: 'shan' }) == 0) return '闪';
                                        if (event.opt.contains('杀') && player.countCards('h', { name: 'sha' }) == 0) return '杀';
                                        if (event.opt.contains('装备') && player.countCards('h', card => { return get.type(card) == 'equip' }) == 0) return '装备';
                                        return event.opt.randomGet();
                                    })
                                    'step 1'
                                    if (result.control && result.control != 'cancel2') {
                                        var map = {
                                            '杀': "sha",
                                            '闪': "shan",
                                            '装备': 'equip'
                                        };
                                        player.gain(event.cards[map[result.control]], 'gain2');
                                    }
                                },
                                ai: {
                                    order: 10,
                                    result: {
                                        player: 1,
                                    },
                                },
                                sub: true,
                            },
                        },
                        group: "mouLaji_call",
                        nobracket: true,
                    },
                    mouJushe: {
                        trigger: {
                            player: ["useCardEnd", "respondAfter"],
                        },
                        filter: (event, player) => {
                            return event.card && get.type(event.card) == 'basic' && get.color(event.card) != 'none';
                        },
                        content: () => {
                            'step 0'
                            player.judge(card => {
                                return get.color(card) == get.color(trigger.card) ? 1 : -1;
                            }).judge2 = result => { return result.bool };
                            'step 1'
                            if (result.bool) {
                                player.chooseUseTarget('狙射：视为使用一张不计入次数的火【杀】', { name: "sha", nature: "fire" }, false, 'nodistance')/*.logSkill = "mouJushe"*/
                            }
                        },
                        check: (event, player) => {
                            return true;
                        },
                        ai: {
                            threaten: 0.1,
                        },
                        mod: {
                            targetInRange: (card, player) => { if (card.name == 'sha') return true; },
                        },
                        audio: 2,
                        group: ["mouJushe_1", "mouJushe_2"],
                        subSkill: {
                            "1": {
                                trigger: {
                                    player: "useCardToPlayered",
                                },
                                filter: (event, player) => {
                                    return get.name(event.card) == 'sha' && get.distance(player, event.target) <= player.getAttackRange();
                                },
                                content: () => {
                                    trigger.getParent().directHit.push(trigger.target);
                                },
                                forced: true,
                                locked: true,
                                sub: true,
                                audio: "mouJushe",
                            },
                            "2": {
                                trigger: {
                                    source: "damageAfter",
                                },
                                filter: (event, player) => {
                                    return event.card && event.card.name == 'sha' && get.color(event.card) == 'black';
                                },
                                content: () => {
                                    player.draw()
                                },
                                forced: true,
                                locked: true,
                                sub: true,
                            },
                        },
                    },
                    mouBailan: {
                        trigger: {
                            player: "phaseDrawBegin1",
                        },
                        filter: (event, player) => { return !event.numFixed && player.countMark('mouBailan') == 0 },
                        content: () => {
                            trigger.changeToZero();
                            player.addTempSkill("mouBailan_2", { player: "phaseBegin" });
                            // player.markSkill('mouBailan')
                            player.addMark('mouBailan', 2);
                        },
                        "prompt2": "放弃此次摸牌阶段，然后到下一回合为止防止一切伤害",
                        check: (event, player) => { return player.hp <= 2 },
                        group: ["mouBailan_1"],
                        mark: false,
                        intro: {
                            content: (storage, player, skill) => { return "还有" + get.cnNumber(player.countMark('mouBailan')) + "个回合"; },
                        },
                        subSkill: {
                            "1": {
                                trigger: {
                                    player: "phaseEnd",
                                },
                                forced: true,
                                silent: true,
                                sub: true,
                                locked: true,
                                charlotte: true,
                                filter: (event, player) => player.countMark('mouBailan') > 0,
                                content: () => { player.removeMark('mouBailan'); if (player.countMark('mouBailan') == 0) player.unmarkSkill('mouBailan') },
                                popup: false,
                            },
                            "2": {
                                trigger: {
                                    player: "damageBegin",
                                },
                                filter: (event, player) => {
                                    return true
                                },
                                forced: true,
                                locked: true,
                                content: () => {
                                    trigger.cancel()
                                },
                                ai: {
                                    effect: {
                                        target: function (card, player, target, current) {
                                            if (get.tag(card, 'damage')) return 'zerotarget';
                                        },
                                    },
                                },
                                sub: true,
                            },
                        },
                    },
                    mouDashu: {
                        subSkill: {
                            record: {
                                trigger: {
                                    player: "damageAfter",
                                },
                                filter: (event, player) => { return true },
                                forced: true,
                                locked: true,
                                sub: true,
                                charlotte: true,
                                content: () => {
                                    player.storage.mouDashu += trigger.num;
                                    player.syncStorage('mouDashu');
                                },
                            },
                        },
                        init: (player, skill) => { player.storage[skill] = 0 },
                        mark: true,
                        intro: {
                            content: "本局游戏共受到#点伤害",
                        },
                        ai: {
                            maixue: true,
                        },
                        group: "mouDashu_record",
                        trigger: {
                            player: "phaseDrawBegin2",
                        },
                        filter: (event, player) => { return !event.numFixed; },
                        content: (event, player) => { trigger.num += (Math.floor(player.storage.mouDashu / 2) + 1) },
                        frequent: true,
                        mod: {
                            maxHandcard: (player, num) => { return num + 3; },
                        },
                    },
                    mouYizhong: {
                        trigger: {
                            player: "phaseBegin",
                        },
                        filter: (event, player) => { return !player.hasSkill('mouYizhong_2') },
                        content: () => {
                            var targets = game.filterPlayer(target => target.hasSkill('mouYizhong_2') && target != player);
                            if (targets.length)
                                for (var target of targets) target.removeSkill('mouYizhong_2');
                            player.addSkill('mouYizhong_2');
                        },
                        locked: true,
                        forced: true,
                        group: ["mouYizhong_give"],
                        subSkill: {
                            "2": {
                                trigger: {
                                    target: "shaBefore",
                                },
                                forced: true,
                                equipSkill: true,
                                noHidden: true,
                                inherit: "renwang_skill",
                                filter: function (event, player) {
                                    if (player.getEquip(2)) return false;
                                    return lib.skill.renwang_skill.filter(event, player)
                                },
                                content: function () {
                                    trigger.cancel();
                                },
                                ai: {
                                    effect: {
                                        target: function (card, player, target) {
                                            if (player == target && get.subtype(card) == 'equip2') {
                                                if (get.equipValue(card) <= 8) return 0;
                                            }
                                            if (target.getEquip(2)) return;
                                            // if (card.name == 'sha' && get.color(card) == 'black') return 'zerotarget';
                                            return lib.skill.renwang_skill.ai.effect.target.apply(this, arguments);
                                        },
                                    },
                                },
                                sub: true,
                                priority: 6,
                                audio: "renwang_skill",
                            },
                            give: {
                                trigger: {
                                    player: "phaseEnd",
                                },
                                filter: (event, player) => player.hasSkill('mouYizhong_2'),
                                direct: true,
                                popup: false,
                                prompt: "你可以将【毅重】交给一名角色令其恢复1点体力，然后摸两张牌",
                                content: () => {
                                    'step 0'
                                    player.chooseTarget(1, (card, player, target) => player != target, get.prompt('mouYizhong_give')).set('ai', target => {
                                        if (!((player.countCards('h', { name: "shan" }) > 0 && player.maxHp - player.hp <= 1) || player.countCards('h', { name: "shan" }) >= 3 || player.getEquip(2) || player.hasSkill('mouBailan_2'))) return false;
                                        if (get.attitude(player, target) < 0 || target.getEquip(2)) return false;
                                        return target.maxHp - target.hp + 1;
                                    })
                                    'step 1'
                                    if (result.bool) {
                                        player.logSkill('mouYizhong', result.targets[0]);
                                        result.targets[0].addSkillLog('mouYizhong_2');
                                        player.removeSkill('mouYizhong_2');
                                        player.draw(2);
                                        result.targets[0].recover();
                                    }
                                },
                                sub: true,
                            },
                        },
                    },
                    mouLiezhan: {
                        enable: "chooseToUse",
                        filter: (event, player) => player.hasCard(card => { return get.type(card, 'trick') != 'trick' }, 'h'),
                        filterCard: (card, player) => get.type(card, 'trick') != 'trick',
                        viewAs: {
                            name: "juedou",
                        },
                        position: "h",
                        group: ["mouLiezhan_rec", "mouLiezhan_add"],
                        subSkill: {
                            rec: {
                                filter: (event, player) => (event.card.name == 'juedou' || event.card.name == 'sha') && !(event.card.isCard && event.cards.length == 1) && player.isDamaged()
                                    && player.getHistory('sourceDamage', evt => evt.card && evt.card == event.card).length > 0,
                                trigger: {
                                    player: "useCardEnd",
                                },
                                forced: true,
                                content: () => {
                                    player.recover();
                                },
                                sub: true,
                            },
                            add: {
                                filter: (event, player) => event.card && event.card.name == 'juedou' && event.card.isCard && event.cards.length == 1,
                                trigger: {
                                    source: "damageBegin",
                                },
                                forced: true,
                                content: () => {
                                    trigger.num++;
                                },
                                sub: true,
                            },
                        },
                        usable: 2,
                        check: card => { if (get.name(card) != 'sha') return get.value(card) < 10; else return 1; },
                        ai: {
                            wuxie: function (target, card, player, viewer) {
                                if (player == game.me && get.attitude(viewer, player) > 0) {
                                    return 0;
                                }
                            },
                            basic: {
                                order: 5,
                                useful: 1,
                                value: 5.5,
                            },
                            result: {
                                target: -1.5,
                                player: function (player, target, card) {
                                    if (player.hasSkillTag('directHit_ai', true, {
                                        target: target,
                                        card: card,
                                    }, true)) {
                                        return 0;
                                    }
                                    if (get.damageEffect(target, player, target) > 0 && get.attitude(player, target) > 0 && get.attitude(target, player) > 0) {
                                        return 0;
                                    }
                                    var hs1 = target.getCards('h', 'sha');
                                    var hs2 = player.getCards('h', 'sha');
                                    if (hs1.length > hs2.length + 1) {
                                        return -2;
                                    }
                                    var hsx = target.getCards('h');
                                    if (hsx.length > 2 && hs2.length == 0 && hsx[0].number < 6) {
                                        return -2;
                                    }
                                    if (hsx.length > 3 && hs2.length == 0) {
                                        return -2;
                                    }
                                    if (hs1.length > hs2.length && (!hs2.length || hs1[0].number > hs2[0].number)) {
                                        return -2;
                                    }
                                    return -0.5;
                                },
                            },
                            tag: {
                                respond: 2,
                                respondSha: 2,
                                damage: 1,
                            },
                        },
                    },
                    mouLeinie: {
                        intro: {
                            content: (storage, player, dialog) => {
                                var str = '共触发' + player.storage.mouLeinie_record.toString() + '次'
                                if (typeof player.storage.mouLeinie != 'number') return str;
                                else return str + '<br>上一次造成或受到伤害时的牌点数为' + player.storage.mouLeinie.toString();
                            },
                        },
                        filter: (event, player) => {
                            return (typeof player.storage.mouLeinie == 'number') && event.card && get.number(event.card) && event.source;
                        },
                        trigger: {
                            player: "damageBegin",
                            source: "damageBegin",
                        },
                        popup: false,
                        content: () => {
                            var num = get.number(trigger.card);
                            var num2 = player.storage.mouLeinie_record % 4;
                            if (Math.abs(num - player.storage.mouLeinie) > num2) {
                                player.logSkill(event.name, trigger.source); trigger.source.loseHp(2);
                                player.storage.mouLeinie_record++;
                                player.syncStorage('mouLeinie');
                            } else {
                                player.logSkill(event.name);
                                player.draw(1 + num2);
                                player.storage.mouLeinie_record++;
                                player.syncStorage('mouLeinie');
                            }
                        },
                        forced: true,
                        locked: true,
                        group: ["mouLeinie_record"],
                        subSkill: {
                            record: {
                                init: (player, skill) => player.storage[skill] = 0,
                                trigger: {
                                    player: "damageAfter",
                                    source: "damageAfter",
                                },
                                filter: (event, player) => event.card && get.number(event.card) && event.source,
                                forced: true,
                                popup: false,
                                content: () => {
                                    if (!player.storage.mouLeinie) player.storage.mouLeinie = 0;
                                    player.storage.mouLeinie = get.number(trigger.card);
                                    player.markSkill('mouLeinie');
                                    player.syncStorage('mouLeinie');
                                },
                                sub: true,
                            },
                        },
                        ai: {
                            effect: {
                                player: (card, player, target, num) => {
                                    if (get.number(card) && get.tag(card, 'damage') && player.storage.mouLeinie && player.storage.mouLeinie_record) {
                                        if (Math.abs(get.number(card) - player.storage.mouLeinie) > player.storage.mouLeinie_record % 4) return [1, -1]
                                        else return [1, 2];
                                    }
                                },
                                target: (card, player, target, num) => {
                                    if (get.number(card) && get.tag(card, 'damage') && target.storage.mouLeinie && target.storage.mouLeinie_record) {
                                        if (Math.abs(get.number(card) - target.storage.mouLeinie) > target.storage.mouLeinie_record % 4) return [1, -1.4]
                                        else return [1, 2];
                                    }
                                },
                            },
                        },
                    },
                    mouJuedou: {
                        limited: true,
                        animationColor: "metal",
                        skillAnimation: true,
                        init: (player, skill) => {
                            player.storage[skill] = false;
                            player.storage['mouJuedou_1'] = 0;
                        },
                        unique: true,
                        trigger: {
                            player: "dying",
                        },
                        content: function (/*event,step,source,player,targets,card,cards,skill,forced,num,trigger,result*/) {
                            'step 0'
                            var next = player.chooseTarget(get.prompt('mouJuedou'))
                            next.set('filterTarget', function (card, player, target) {
                                return player.canUse({ name: "juedou" }, target)
                            })
                            next.set('ai', function (target) {
                                var player = get.player();
                                return get.attitude(player, target) < -2;
                            })
                            next.set('prompt2', get.prompt2("mouJuedou"));
                            'step 1'
                            if (result.bool) {
                                player.addTempSkill('mouJuedou_1');
                                player.logSkill('mouJuedou', result.targets[0]);
                                player.awakenSkill('mouJuedou');
                                player.useCard({ name: "juedou", isCard: true }, result.targets[0], 'nowuxie');
                            } else event.finish();
                            /* 'step 0'
                            player.addTempSkill('mouJuedou_1', 'useCardEnd');
                            player.chooseUseTarget({
                                name: 'juedou',
                                isCard: true,
                                storage: { nowuxie: true }
                            }).set('prompt', get.prompt(event.name)).set('prompt2', '视为使用一张【决斗】')
                            'step 1'
                            if (result.bool) {
                                player.logSkill(event.name);
                                player.awakenSkill('mouJuedou');
                                if (player.storage.mouJuedou_1 == 0) event.goto(4);
                                event.num = 0;
                            } else { event.finish(); player.removeSkill('mouJuedou_1') } */
                            'step 2'
                            if (event.num < player.storage.mouJuedou_1) {
                                player.chooseUseTarget({
                                    name: 'sha',
                                    // nature:'fire',
                                    isCard: true,
                                }, '请选择【杀】的目标（' + (event.num == 9 ? '⑨' : get.cnNumber(event.num)) + '/' + player.storage.mouJuedou_1.toString() + '）', false);
                                event.num++;
                            }
                            'step 3'
                            if (result.bool && event.num < player.storage.mouJuedou_1) event.goto(2);
                            'step 4'
                            player.removeSkill('mouLeinie');
                            player.addSkillLog('ba_quedi');
                            player.removeSkill('mouJuedou_1');
                        },
                        derivation: "ba_quedi",
                        direct: true,
                        subSkill: {
                            "1": {
                                trigger: {
                                    global: "respond",
                                },
                                filter: (event, player) => {
                                    if (!Array.isArray(event.respondTo) || event.respondTo[1].name != 'juedou') return false;
                                    return true;
                                },
                                forced: true,
                                content: () => {
                                    player.storage.mouJuedou_1++;
                                },
                                sub: true,
                            },
                        },
                        "prompt2": "视为使用一张【决斗】",
                        mark: true,
                        intro: {
                            content: "limited",
                        },
                        markimage: "extension/OLUI/image/player/marks/xiandingji.png",
                    },
                    mouGuizhen: {
                        trigger: {
                            player: ["phaseZhunbeiBegin", "phaseJieshuBegin"],
                        },
                        check: (event, player) => true,
                        content: () => {
                            'step 0'
                            player.draw();
                            'step 1'
                            if (player.countCards('h')) {
                                player.chooseCard('将一张手牌置于武将牌上作为【雷】', 'h', true).set('ai', card => 7 - get.value(card));
                            } else event.finish();
                            'step 2'
                            if (result.cards && result.cards.length) {
                                player.addToExpansion(result.cards, player, 'give').gaintag.add('mouGuizhen');
                            }
                        },
                        onremove: (player, skill) => {
                            var cards = player.getExpansions(skill);
                            if (cards.length) player.loseToDiscardpile(cards);
                        },
                        marktext: "雷",
                        notemp: true,
                        intro: {
                            content: "expansion",
                            markcount: "expansion",
                        },
                        group: ["mouGuizhen_1"],
                        subSkill: {
                            "1": {
                                trigger: {
                                    target: "useCardToTarget",
                                },
                                filter: (event, player) => {
                                    if (!(event.card.name == 'sha' || get.type(event.card) == 'trick')) return false;
                                    var cards = player.getExpansions('mouGuizhen');
                                    var boool = false;
                                    for (var card of cards) {
                                        if (get.suit(card) == get.suit(event.card)) boool = true;
                                    }
                                    return event.targets.length == 1 && boool
                                },
                                content: () => {
                                    'step 0'
                                    player.chooseCardButton('选择一张与' + get.translation(trigger.card) + '花色相同的【雷】', player.getExpansions('mouGuizhen')).set('filterButton', button => {
                                        return get.suit(button.link) == get.suit(trigger.card);
                                    }).set('ai', button => {
                                        if (get.effect(player, trigger.card, trigger.player, player) > 0) return -1;
                                        return 1;
                                    })
                                    'step 1'
                                    if (result.bool) {
                                        player.logSkill(event.name, trigger.player);
                                        player.loseToDiscardpile(result.links[0])
                                        game.log(player, '令', get.translation(trigger.card), '对', player, '无效');
                                        trigger.getParent().excluded.add(player);
                                        player.chooseControl(['造成伤害', '摸两张牌']).set('ai', () => {
                                            var player = get.player();
                                            if (get.damageEffect(trigger.player, player, player, 'fire') > 0 && player.countCards('h') > 2) return '造成伤害';
                                            return '摸两张牌';
                                        })
                                    } else event.finish();
                                    'step 2'
                                    if (result.control == '造成伤害') trigger.player.damage('fire');
                                    else player.draw(2);
                                },
                                direct: true,
                                popup: false,
                                "prompt2": "摸一张牌再将一张手牌放在武将牌上，称为【雷】",
                                sub: true,
                            },
                        },
                    },
                    mouLielei: {
                        trigger: {
                            player: "useCardAfter",
                        },
                        filter: (event, player) => event.card.name == 'sha' && player.isPhaseUsing() && player.getExpansions('mouGuizhen') && player.getExpansions('mouGuizhen').length >= player.maxHp - player.hp && player.isDamaged() && event.targets.length == 1,
                        usable: 1,
                        direct: true,
                        popup: false,
                        content: () => {
                            'step 0'
                            event.nums = player.maxHp - player.hp;
                            player.chooseCardButton('烈战：是否弃置' + get.cnNumber(event.nums) + '张【雷】以重复使用' + get.cnNumber(1 + event.nums) + '张' + get.translation(trigger.card), player.getExpansions('mouGuizhen'), event.nums).set('ai', button => {
                                var player = get.player();
                                var target = trigger.target;
                                if (get.effect(player, trigger.card, target, player) > 0 && get.attitude(player, target) <= -2) {
                                    var cards = player.getExpansions('mouGuizhen');
                                    var num = 0;
                                    for (var card of cards) {
                                        if (get.suit(card) == get.suit(button.link)) num++;
                                    }
                                    return num;
                                }
                                else return 0;
                            })
                            'step 1'
                            if (result.bool) {
                                player.logSkill(event.name, trigger.targets);
                                player.loseToDiscardpile(result.links);
                                event.num = 0;
                            } else event.finish();
                            'step 2'
                            if (event.nums + 1 > event.num) {
                                player.useCard(/*{name: "sha"},*/trigger.card, trigger.targets, false);
                            } else event.finish();
                            'step 3'
                            event.num++;
                            if (event.nums + 1 > event.num) event.goto(2);
                        },
                        ai: {
                            combo: "mouGuizhen",
                        },
                    },
                    "ba_poce": {
                        trigger: {
                            target: "useCardToTargeted",
                        },
                        filter: (event, player) => { return get.type(event.card) == 'trick' && get.color(event.card) == 'black' && player.storage.ba_poce_roundcount < 2 },
                        content: () => {
                            trigger.getParent().excluded.add(player);
                            player.draw();
                            player.storage.ba_poce_roundcount++;
                            player.syncStorage('ba_poce');
                        },
                        "prompt2": (event, player) => {
                            return '摸一张牌，令' + get.translation(event.card) + '对你无效';
                        },
                        check: (event, player) => {
                            return get.effect(player, event.card, event.player, player) <= 0
                        },
                        group: ["ba_poce_1", "ba_poce_1_roundcount", "ba_poce_roundcount"],
                        ai: {
                            effect: {
                                target: (card, player, target, num) => {
                                    // if (get.color(card) == 'black' && get.type(card) == 'trick' && target.storage.ba_poce_roundcount < 2 && (get.tag(card, 'noh') || get.tag(card, 'damage'))) return [0, 0];
                                    if (get.color(card) == 'black' && get.type(card) == 'trick' && target.storage.ba_poce_roundcount < 2 && num < 0) return [0, 1, 0, 0];
                                },
                            },
                        },
                        subSkill: {
                            "1": {
                                trigger: {
                                    target: "useCardToTargeted",
                                },
                                filter: (event, player) => { return get.name(event.card) == 'sha' && player.countCards('h', card => get.number(card) % 2 == get.number(event.card) % 2) > 0 && player.storage.ba_poce_1_roundcount < 2 },
                                content: () => {
                                    'step 0'
                                    player.chooseToDiscard(card => get.number(card) % 2 == get.number(trigger.card) % 2, 1, 'h').set('ai', card => 7 - get.value(card)).set('prompt', get.prompt('ba_poce')).set('prompt2', get.prompt2(event.name));
                                    'step 1'
                                    if (result.bool) {
                                        player.logSkill(event.name, trigger.player);
                                        trigger.getParent().excluded.add(player);
                                        // player.draw();
                                        player.storage.ba_poce_1_roundcount++;
                                        player.syncStorage('ba_poce');
                                    }
                                },
                                "prompt2": (event, player) => {
                                    return '弃一张点数为' + ((get.number(event.card) % 2 == 0) ? '偶' : '奇') + '数的手牌，令' + get.translation(event.card) + '对你无效';
                                },
                                check: (event, player) => {
                                    return get.effect(player, event.card, event.player, player) < 0
                                },
                                ai: {
                                    effect: {
                                        target: (card, player, target, num) => {
                                            if (get.name(card) == 'sha' && target.storage.ba_poce_1_roundcount < 2 && num < 0 && target.countCards('h') > 2) return [0, -1, 0, 0];
                                        },
                                    },
                                },
                                direct: true,
                                sub: true,
                            },
                            "1_roundcount": {
                                sub: true,
                                charlotte: true,
                                init: (player, skill) => { player.storage[skill] = 0 },
                            },
                            roundcount: {
                                trigger: {
                                    global: "roundStart",
                                },
                                filter: (event, player) => { return player.storage.ba_poce_roundcount > 0 || player.storage.ba_poce_1_roundcount > 0 },
                                firstDo: true,
                                mark: true,
                                forced: true,
                                locked: true,
                                charlotte: true,
                                init: (player, skill) => { player.storage[skill] = 0 },
                                content: () => { player.storage.ba_poce_roundcount = 0; player.storage.ba_poce_1_roundcount = 0; player.syncStorage('ba_poce'); },
                                sub: true,
                            },
                        },
                        mark: true,
                        intro: {
                            content: (storage, player, skill) => "无效黑色锦囊：已使用" + player.storage.ba_poce_roundcount.toString() + "次" + "<br>无效【杀】：已使用" + player.storage.ba_poce_1_roundcount.toString() + "次",
                        },
                    },
                    "ba_zhimeng": {
                        trigger: {
                            global: "damageAfter",
                        },
                        filter: (event, player) => {
                            if (!event.source) return false;
                            if (!event.source.isAlive() || !event.player.isAlive()) return false;
                            if (event.source == player || event.source.countCards('h') == 0) return false;
                            if (event.source == event.player || !event.player.isAlive()) return false;
                            return event.player == player || player.inRange(event.player);
                        },
                        content: (event, step, source, player, targets, card, cards, skill, forced, num, trigger, result) => {
                            'step 0'
                            event.num = 0
                            event.num2 = 0;
                            'step 1'
                            trigger.player.draw(2);
                            /* player.chooseCardButton('知梦：选择'+get.translation(trigger.source)+'的若干手牌以交换',
                            trigger.source.getCards('h'),
                            [1,Math.min(trigger.source.countCards('h'),trigger.player.countCards('h'))]).set('ai',button=>{
                                button
                            }) */
                            'step 2'
                            var next = player.chooseToMove('知梦：交换' + get.translation(trigger.player) + '和' + get.translation(trigger.source) + '的若干手牌')
                            next.set('list', [
                                [get.translation(trigger.player) + '的手牌', trigger.player.getCards('h')],
                                [get.translation(trigger.source) + '的手牌', trigger.source.getCards('h')]
                            ])
                            next.set('source', trigger.source);
                            next.set('target', trigger.player);
                            next.set('player', player);
                            next.set('filterMove', (from, to, moved) => {
                                if (typeof to == 'number') return false;
                                var target = _status.event.target;
                                var source = _status.event.source;
                                var hs = target.getCards('h');
                                var changed = hs.filter(function (card) {
                                    return !moved[1].contains(card);
                                });
                                var changed2 = moved[1].filter(function (card) {
                                    return !hs.contains(card);
                                });
                                var pos1 = (moved[0].contains(from.link) ? 0 : 1), pos2 = (moved[0].contains(to.link) ? 0 : 1);
                                if (pos1 == pos2) return true;
                                if (pos1 == 0) {
                                    if (changed.contains(from.link)) return true;
                                    return changed2.contains(to.link);
                                }
                                if (changed2.contains(from.link)) return true;
                                return changed.contains(to.link);
                            })
                            next.set('processAI', list => {
                                var cards1 = list[0][1].slice(0).sort(function (a, b) {
                                    return get.value(b, 'raw') - get.value(a, 'raw');
                                });
                                var cards2 = list[1][1].slice(0).sort(function (a, b) {
                                    return get.value(b, 'raw') - get.value(a, 'raw');
                                });
                                // var _cards1 = [];
                                // var _cards2 = [];
                                var player = _status.event.player;
                                var target = _status.event.target;
                                var source = _status.event.source;
                                var _tt = false;
                                var _st = false;
                                var temp = undefined;
                                if (get.attitude(player, target) > 0) {
                                    cards1.reverse();
                                    _tt = true;
                                }
                                if (get.attitude(player, source) > 0) {
                                    cards2.reverse();
                                    _st = true;
                                }
                                for (var i = 0; i < cards1.length && i < cards2.length; i++) {
                                    if ((_tt && get.value(cards1[i]) < 7) ||
                                        (!_tt && get.value(cards1[i]) >= 7) ||
                                        (_st && get.value(cards2[i]) < 7) ||
                                        (!_st && get.value(cards2[i]) >= 7)) {
                                        temp = cards1[i];
                                        cards1[i] = cards2[i];
                                        cards2[i] = temp;
                                    }
                                }
                                return [cards1, cards2];
                            })
                            'step 3'
                            var moved = result.moved;
                            var hs = trigger.player.getCards('h'), ts = trigger.source.getCards('h');
                            var cards1 = []; var cards2 = [];
                            for (var i of result.moved[0]) {
                                if (!hs.contains(i)) {
                                    cards1.push(i);
                                    event.num2++;
                                }
                            }
                            for (var i of result.moved[1]) {
                                if (!ts.contains(i)) cards2.push(i);
                            }
                            if (cards1.length) {
                                trigger.player.swapHandcards(trigger.source, cards2, cards1);
                            }
                            'step 4'
                            event.num++;
                            if (event.num < trigger.num) event.goto(1);
                            'step 5'
                            if (event.num2 > 3) player.turnOver();
                        },
                        check: (event, player) => {
                            if (event.player == player) return get.attitude(player, event.source) <= -2;
                            else {
                                if (get.attitude(player, event.player) >= 2) return event.player.countCards('h') < 2 || get.attitude(player, event.source) <= -2;
                                // else if (get.attitude(player,event.player)<=-2&&get.attitude(player,event.source)>=2){ return event.source.countCards('h')>=4}
                                else return false;
                            }
                        },
                    },
                    "ba_shefeng": {
                        filterCard: (card) => {
                            var num = get.number(card);
                            if (typeof num != 'number' || num == 1 || num == 0) return false;
                            for (var i = 2; i <= Math.sqrt(num); i++) if (num % i == 0) return false;
                            return true;
                        },
                        viewAs: {
                            name: "shezhanqunru",
                        },
                        ai: {
                            order: 8.5,
                            value: [6, 1],
                            useful: [3, 1],
                            tag: {
                                draw: 1,
                            },
                            result: {
                                target: function (player, target) {
                                    var hs = target.getCards('h');
                                    for (var i = 0; i < hs.length; i++) {
                                        var value = get.value(hs[i]);
                                        if (hs[i].number >= 7 && value <= 6) return 1;
                                        if (value <= 3) return 1;
                                    }
                                    return 0;
                                },
                            },
                        },
                        enable: "phaseUse",
                        usable: 1,
                        position: "h",
                        mod: {
                            cardnumber: (card) => {
                                if (get.suit(card) == 'diamond') return 13;
                            },
                        },
                    },
                    "ba_kangyan": {
                        usable: 1,
                        enable: "phaseUse",
                        filter: (event, player) => game.hasPlayer(target => player.canCompare(target)),
                        filterTarget: (card, player, target) => player.canCompare(target),
                        content: () => {
                            'step 0'
                            player.chooseToCompare(target);
                            'step 1'
                            if (!result.tie) {
                                ((result.bool) ? player : target)["useCard"]({ name: 'wuzhong' }, ((result.bool) ? player : target));
                            }
                        },
                        ai: {
                            order: 10,
                            player: (player, target) => {
                                var cards = player.getCards('h');
                                if (cards.length < 2) return 0;
                                var max = 0;
                                for (var card of cards) {
                                    if (max < get.number(card)) max = get.number(card);
                                }
                                if (max < 10) return 1;
                                if (max < 11) return 2;
                                if (max < 12) return 3;
                                return 4;
                            },
                            target: (player, target) => -1,
                        },
                        mod: {
                            cardnumber: (card) => {
                                if (get.suit(card) == 'diamond') return 13;
                            },
                        },
                        group: "ba_kangyan_1",
                        subSkill: {
                            "1": {
                                trigger: {
                                    player: ["chooseToCompareAfter", "compareMultipleAfter"],
                                    target: ["chooseToCompareAfter", "compareMultipleAfter"],
                                },
                                filter: (event, player) => {
                                    return !event.result.tie
                                },
                                content: () => {
                                    var target = (!trigger.result.bool) ? trigger.player : trigger.target;
                                    target.addTempSkill('eMabi', { player: "phaseBegin" });
                                },
                                forced: true,
                                locked: true,
                                sub: true,
                            },
                        },
                    },
                    "ba_jushi": {
                        trigger: {
                            player: "useCardToPlayered",
                        },
                        filter: (event, player) => get.color(event.card) == 'black' && get.number(event.card) && player.canCompare(event.target) && event.getParent().targets.length == 1,
                        content: (event, step, source, player, targets, card, cards, skill, forced, num, trigger, result) => {
                            'step 0'
                            event.target = trigger.target
                            player.chooseToCompare(event.target);
                            'step 1'
                            if (result.bool) {
                                event.num = 0;
                                var num_ = get.number(trigger.card);
                                for (var i = 1; i <= num_; i++) if (num_ % i == 0) event.num++;
                                if (event.num > 4) event.num = 4;
                                if (event.target.countCards('hej') > 0) player.discardPlayerCard(event.target, [0, event.num], 'hej');
                            } else {
                                if (player.countCards('hej') > 0) event.target.gainPlayerCard(player);
                            }
                        },
                        logTarget: (event, player) => event.target || event.targets[0],
                        "prompt2": (event, player) => {
                            var num = 0;
                            var num_ = get.number(event.card);
                            for (var i = 1; i <= num_; i++) if (num_ % i == 0) num++;
                            if (num > 4) num = 4;
                            return '与' + get.translation(event.target || event.targets[0]) + '拼点，若你赢，你弃置其' + get.cnNumber(num) + '张牌，若你输，其获取你一张牌。'
                        },
                        check: (event, player) => {
                            var target = event.target || event.targets[0];
                            if (get.attitude(player, target) > 0 || player.countCards('h') < 2 || (target.countCards('h') < 1 && target.countCards('e') < 3) || target.countCards('h') == 0) return false;
                            var cards = player.getCards('h');
                            var targets = 11;
                            if (target.countCards('h') < 4) targets = 8;
                            for (var card of cards) {
                                if (get.number(card) > targets) return true;
                            }
                            return false;
                        },
                        group: ["ba_jushi_3"],
                        subSkill: {
                            "3": {
                                trigger: {
                                    source: "damageBegin1",
                                },
                                forced: true,
                                locked: true,
                                logTarget: "player",
                                filter: function (event, player) {
                                    var target = event.player;
                                    return player.countCards('h') >= target.countCards('h') && player.countCards('e') >= target.countCards('e');
                                },
                                content: function () {
                                    trigger.num++;
                                },
                                sub: true,
                            },
                        },
                    },
                    "ba_yingzhi": {
                        filter: (event, player) => !event.nature && !event.player.isLinked(),
                        trigger: {
                            source: "damageAfter",
                        },
                        content: (event, step, source, player, targets, card, cards, skill, forced, num, trigger, result) => {
                            trigger.player.link();
                        },
                        check: (event, player) => get.attitude(player, event.player) <= -2,
                        group: ["ba_yingzhi_1", "ba_yingzhi_2"],
                        subSkill: {
                            "1": {
                                trigger: {
                                    player: "linkBefore",
                                },
                                forced: true,
                                filter: function (_event, player) {
                                    return !player.isLinked();
                                },
                                content: function () {
                                    trigger.cancel();
                                },
                                sub: true,
                            },
                            "2": {
                                trigger: {
                                    player: "useCard",
                                },
                                filter: (event, player) => game.hasPlayer(target => target.isLinked()),
                                content: () => {
                                    trigger.directHit.addArray(game.filterPlayer(current => current.isLinked()));
                                },
                                forced: true,
                                ai: {
                                    "directHit_ai": true,
                                    skillTagFilter: (player, tag, arg) => {
                                        if (!arg.target.isLinked()) return false;
                                    },
                                },
                                sub: true,
                            },
                        },
                    },
                    "ba_yangmou": {
                        dutySkill: true,
                        trigger: {
                            player: "phaseUseAfter",
                        },
                        filter: (event, player) => {
                            return game.hasPlayer(current => current.isLinked() && player.canCompare(current))
                        },
                        locked: true,
                        direct: true,
                        popup: false,
                        skillAnimation: true,
                        animationColor: "metal",
                        init: (player, skill) => {
                            player.storage[skill] = 0
                        },
                        content: (event, step, source, player, targets, card, cards, skill, forced, num, trigger, result) => {
                            'step 0'
                            var targets1 = game.filterPlayer(current => current.isLinked() && player.canCompare(current));
                            if (targets1.length > 1) player.chooseTarget(true, '选择一名角色进行拼点' + (player.storage.ba_yangmou + 1).toString() + '/3', '若你赢，则获得其一张牌' + ((player.storage.ba_yangmou < 2) ? '' : '且使命成功') + '；若你未赢且点数小于其手牌数与体力值之和同10的最小值，使命失败。', (card, player, target) => {
                                return targets1.contains(target);
                            }).set('ai', target => {
                                var player = get.player();
                                return -get.attitude(player, target)
                            }); else if (targets1.length == 1) event._result = { targets: targets1 };
                            else event.finish();
                            'step 1'
                            player.logSkill(event.name, result.targets[0]);
                            event.target = result.targets[0];
                            player.chooseToCompare(event.target);
                            'step 2'
                            if (result.bool) {
                                player.storage.ba_yangmou++;
                                if (event.target.countCards('hej') > 0) player.gainPlayerCard(event.target, 'hej', 1);
                                event.trigger('ba_yangmou_check')
                                if (player.storage.ba_yangmou >= 3) {
                                    // player.awakenSkill('ba_yangmou');
                                    // game.log(player, '成功完成使命');
                                    // player.flashAvatar('twhuashen', event.target.name);
                                    game.log(player, '获得了', '#y' + get.translation(event.target.name), '的所有技能');
                                    player.addSkillLog(lib.character[event.target.name][3])
                                    event.target.addTempSkill('baiban', { player: "phaseEnd" });
                                    event.target.damage(2, 'thunder');
                                }
                            }
                        },
                        derivation: "ba_chouhai",
                        subSkill: {
                            fail: {
                                trigger: {
                                    player: "chooseToCompareAfter",
                                },
                                forced: true,
                                filter: function (event, player) {
                                    return event.getParent().name == 'ba_yangmou' && (get.suit(event.card2) == 'diamond' || event.num1 < Math.min(event.target.countCards('h') + event.target.hp, 10)) && !event.result.bool;
                                },
                                content: function () {
                                    player.awakenSkill('ba_yangmou');
                                    game.log(player, '使命失败');
                                    player.addSkillLog('ba_chouhai');
                                },
                                sub: true,
                            },
                            achieve: {
                                trigger: {
                                    player: "ba_yangmou_check",
                                },
                                forced: true,
                                skillAnimation: true,
                                animationColor: "metal",
                                filter: (event, player) => {
                                    return player.storage.ba_yangmou >= 3;
                                },
                                content: () => {
                                    player.awakenSkill('ba_yangmou');
                                    game.log(player, '成功完成使命');
                                },
                                sub: true,
                            },
                        },
                        group: ["ba_yangmou_fail", "ba_yangmou_achieve"],
                    },
                    ba_chouhai: {
                        audio: "chouhai",
                        trigger: {
                            player: "damageBegin3",
                        },
                        filter: function (event, player) {
                            return player.countCards('h') < 3;
                        },
                        forced: true,
                        content: function () {
                            trigger.num++;
                        },
                        ai: {
                            effect: {
                                target: function (card, player, target, current) {
                                    if (get.tag(card, 'damage') && target.countCards('h') < 3) return [1, -2];
                                },
                            },
                        },
                    },
                    "ba_chazhu": {
                        zhuSkill: true,
                        trigger: {
                            player: ["recoverAfter", "damageAfter"],
                        },
                        filter: (event, player) => player.hasZhuSkill('ba_chazhu') && game.hasPlayer(current => current != player && current.group == player.group),
                        direct: true,
                        popup: false,
                        content: (event, step, source, player, targets, card, cards, skill, forced, num, trigger, result) => {
                            'step 0'
                            event.num = 0;
                            'step 1'
                            player.chooseTarget(get.prompt(event.name), 1, (card, player, target) => target != player && target.group == player.group).set('ai', target => {
                                var player = get.player();
                                if (trigger.name == 'recover') {
                                    return get.attitude(player, target)
                                } else {
                                    return get.damageEffect(target, trigger.source, player);
                                }
                            }).set('prompt2', "选择一名" + get.translation(player.group) + '势力角色，其' + ((trigger.name == 'recover') ? "恢复1点体力或摸两张牌" : "受到" + get.translation(trigger.source) + '造成的1点伤害'));
                            'step 2'
                            if (result.bool) {
                                player.logSkill(event.name, result.targets[0]);
                                if (trigger.name == 'recover') result.targets[0].chooseDrawRecover(2);
                                else result.targets[0].damage(trigger.source);
                            } else event.finish();
                            'step 3'
                            event.num++;
                            if (event.num < trigger.num) event.goto(1);
                        },
                    },
                    "ba_qiongxie": {
                        mod: {
                            cardname: (card, player) => {
                                if (get.type(card, null, false) == 'equip') {
                                    if (player == _status.currentPhase) return 'sha';
                                    else return 'shan';
                                }
                            },
                            cardnature: (card, player) => {
                                if (get.type(card, null, false) == 'equip' && player == _status.currentPhase) return 'fire';
                            },
                            targetInRange: (card, player) => {
                                if (card.cards && card.cards.length == 1 && get.type(card.cards[0], null, false) == 'equip') return true;
                            },
                        },
                        filter: (event, player) => event.card.name == 'sha' && event.card.cards && event.card.cards.length == 1 && get.type(event.card.cards[0], null, false) == 'equip',
                        trigger: {
                            player: "useCard",
                        },
                        locked: true,
                        forced: true,
                        content: () => { trigger.directHit.addArray(game.players); if (!trigger.baseDamage) trigger.baseDamage = 1; trigger.baseDamage++; },
                        group: ["ba_qiongxie_shan"],
                        subSkill: {
                            shan: {
                                trigger: {
                                    player: ["useCard", "respond"],
                                },
                                filter: (event, player) => {
                                    if (!(event.card.name == 'shan' && event.card.cards && event.card.cards.length == 1 && get.type(event.card.cards[0], null, false) == 'equip')) return false;
                                    var target = lib.skill.ba_qiongxie_shan.logTarget(event, player);
                                    return target && target.countGainableCards(player, 'h') > 0;
                                },
                                logTarget: (event, player) => {
                                    if (event.name == 'useCard') {
                                        if (!Array.isArray(event.respondTo)) return undefined;
                                        return event.respondTo[0];
                                    } else {
                                        return event.source;
                                    }
                                },
                                content: () => {
                                    var target_ = lib.skill.ba_qiongxie_shan.logTarget(trigger, player);
                                    player.gainPlayerCard(target_, 'h', true);
                                },
                                check: (event, player) => {
                                    var target = lib.skill.ba_qiongxie_shan.logTarget(event, player);
                                    return get.attitude(player, target) <= -2;
                                },
                                sub: true,
                            },
                        },
                    },
                    "ba_mingsuan": {
                        enable: "phaseUse",
                        usable: 1,
                        filter: (event, player) => player.countCards('e') < 5 && player.countCards('h', card => get.number(card) >= 2 && get.number(card) <= 10) > 1,
                        filterTarget: (card, player, target) => player != target,
                        filterCard: card => get.number(card) >= 2 && get.number(card) <= 10,
                        complexCard: true,
                        selectCard: 2,
                        selectTarget: 1,
                        content: (event, step, source, player, target, card, cards, skill, forced, num, trigger, result) => {
                            'step 0'
                            player.chooseButton(['选择' + get.translation(target) + '要进行的“整肃”类型',
                            [['zhengsu_leijin', 'zhengsu_bianzhen', 'zhengsu_mingzhi'],
                                'vcard']], true).set('ai', () => Math.random());
                            'step 1'
                            if (result.bool) {
                                var name = result.links[0][2];
                                target.addTempSkill(name, { player: ['phaseAfter', 'phaseDiscardAfter'] })
                                target.addTempSkill('zhengsu', { player: ['phaseAfter', 'phaseDiscardAfter'] });
                                player.addTempSkill('ba_mingsuan_process', (event, player, name) => {
                                    return name == 'phaseEnd' && event.player == player.storage.ba_mingsuan_process;
                                });
                                player.storage.ba_mingsuan_process = target;
                            }
                        },
                        group: ["ba_mingsuan_process", "ba_mingsuan_jump"],
                        subSkill: {
                            process: {
                                trigger: {
                                    global: "phaseDiscardEnd",
                                },
                                filter: (event, player) => event.player == player.storage.ba_mingsuan_process,
                                init: (player, skill) => { player.storage[skill] = undefined; },
                                onremove: (player, skill) => { delete player.storage[skill] },
                                forced: true,
                                charlotte: true,
                                content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                                    if (trigger.player.storage.zhengsu_leijin || trigger.player.storage.zhengsu_bianzhen || trigger.player.storage.zhengsu_mingzhi) {
                                        for (var i = 1; i < 6; i++) {
                                            if (player.isEmpty(i)) {
                                                var sub = 'equip' + i, _card = get.cardPile(function (card) {
                                                    return get.subtype(card, false) == sub && !get.cardtag(card, 'gifts');
                                                });
                                                if (_card) {
                                                    player.$gain2(_card);
                                                    game.delayx();
                                                    player.equip(_card);
                                                    break;
                                                }
                                            }
                                        }
                                        for (var i = 1; i < 6; i++) {
                                            if (trigger.player.isEmpty(i)) {
                                                var sub = 'equip' + i, _card = get.cardPile(function (card) {
                                                    return get.subtype(card, false) == sub && !get.cardtag(card, 'gifts');
                                                });
                                                if (_card) {
                                                    trigger.player.$gain2(_card);
                                                    game.delayx();
                                                    trigger.player.equip(_card);
                                                    break;
                                                }
                                            }
                                        }
                                        game.asyncDraw([player, trigger.player], 1);
                                    } else {
                                        trigger.player.addTempSkill('ba_mingsuan_jump');
                                        trigger.player.skip('phaseDraw', { player: "phaseDrawSkipped" });
                                        game.asyncDraw([player, trigger.player], 2);
                                    }
                                },
                                sub: true,
                            },
                            jump: {
                                mark: true,
                                intro: {
                                    content: "跳过下回合的摸牌阶段",
                                },
                                charlotte: true,
                                sub: true,
                            },
                        },
                        ai: {
                            order: 5,
                            result: {
                                player: 2,
                                target: (player, target) => {
                                    if (get.attitude(player, target) > 2) return 3;
                                    else return 1;
                                },
                            },
                        },
                    },
                    "ba_shoulve": {
                        trigger: {
                            player: "phaseUseBegin",
                        },
                        filter: (event, player) => { return game.hasPlayer(target => player.canUse({ name: "sha" }, target, false)) },
                        content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                            'step 0'
                            player.chooseTarget((card, player, target) => { return player.canUse({ name: "sha" }, target, false) }, get.prompt(event.name)).set('ai', (target) => {
                                var player = get.player();
                                if (get.attitude(player, target) > 2) return -1;
                                return get.effect(target, { name: "sha" }, player, player);
                            }).set('prompt2', get.prompt2(event.name))
                            'step 1'
                            if (result.bool) {
                                result.targets[0].addTempSkill('fengyin');
                                player.useCard({ name: "sha" }, result.targets[0], event.name, false);
                            }
                        },
                        direct: true,
                        popup: false,
                        "prompt2": "视为使用一张令目标非锁定技失效的【杀】",
                    },
                    "ba_langhun": {
                        juexingji: true,
                        skillAnimation: true,
                        animationColor: "metal",
                        forced: true,
                        unique: true,
                        trigger: {
                            player: "damageAfter",
                        },
                        filter: (event, player) => {
                            return (player.maxHp - player.hp >= 2 && player.countCards('h') <= event.source.countCards('h')) || player.hp == 1;
                        },
                        derivation: "ba_langxi",
                        content: () => {
                            player.awakenSkill('ba_langhun');
                            player.addSkillLog('ba_langxi');
                            player.recover(2);
                            player.draw();
                        },
                        markimage: "extension/OLUI/image/player/marks/juexingji.png",
                    },
                    "ba_langxi": {
                        trigger: {
                            player: "phaseZhunbeiBegin",
                        },
                        filter: (event, player) => { return game.hasPlayer(target => target != player && player.inRange(target)) },
                        content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                            'step 0'
                            player.chooseTarget((card, player, target) => player != target && player.inRange(target)).set('prompt2', get.prompt2(event.name)).set('prompt', get.prompt(event.name)).set('ai', target => {
                                if (get.attitude(player, target) > 0) return -1;
                                return get.damageEffect(target, player, player)
                            })
                            'step 1'
                            if (result.bool) {
                                event.target = result.targets[0];
                                player.logSkill(event.name, result.targets[0]);
                                player.chooseToPSS(event.target);
                            } else event.finish();
                            'step 2'
                            if (result.tie) {
                                event.target.damage();
                                event.target.addTempSkill('ba_langxi_2');
                            } else if (result.bool) {
                                event.target.damage(2);
                                event.target.addTempSkill('ba_langxi_2');
                            } else {
                                if (player.countCards('h') > 0) player.chooseToDiscard(1, 'h');
                                player.addTempSkill('zishou2');
                                player.addTempSkill('ba_langxi_1');
                            }
                        },
                        "prompt2": "与一名角色猜拳，若你赢则对其造成伤害",
                        direct: true,
                        popup: false,
                        subSkill: {
                            "1": {
                                mark: true,
                                sub: true,
                                intro: {
                                    content: "不能对其他角色使用牌",
                                },
                            },
                            "2": {
                                mark: true,
                                mod: {
                                    cardEnabled: function () {
                                        return false;
                                    },
                                    cardRespondable: function () {
                                        return false;
                                    },
                                    cardSavable: function () {
                                        return false;
                                    },
                                },
                                intro: {
                                    content: "不能使用或打出卡牌",
                                },
                                sub: true,
                            },
                        },
                    },
                    "ba_xiangji": {
                        trigger: {
                            global: "loseAfter",
                        },
                        filter: (event, player) => {
                            return event.player.hasSex('male') && event.type == 'discard' && event.player == _status.currentPhase && event.player != player &&
                                event.getParent(3).name == 'phaseDiscard' && event.cards2.filterInD('d').length > 0 && !player.hasSkill('ba_xiangji_set')
                        },
                        direct: true,
                        content: function (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) {
                            'step 0'
                            player.chooseButton(['详记：是否选择一张牌展示之？', trigger.cards2.filterInD('d')]).set('ai', button => {
                                var player = get.player()
                                var link = button.link;
                                if (get.type2(link) == 'equip') return 1;
                                else {
                                    return player.countCards('h', card => get.type2(card) == get.type2(link));
                                }
                            })
                            'step 1'
                            if (result.bool) {
                                event.card = result.links[0];
                                player.showCards(event.card, '详记：' + get.translation(player) + '展示的牌');
                                player.addTempSkill('ba_xiangji_set', { player: "phaseEnd" });
                                player.storage.ba_xiangji_set = get.type2(event.card);
                            }
                        },
                        popup: false,
                        subSkill: {
                            set: {
                                mark: true,
                                intro: {
                                    content: function (type) {
                                        return get.translation(type) + '牌';
                                    },
                                },
                                init: (player, skill) => { player.storage[skill] = '' },
                                onremove: (player, skill) => { delete player.storage[skill] },
                                trigger: {
                                    player: ["useCard", "respond"],
                                },
                                frequent: true,
                                popup: false,
                                charlotte: true,
                                prompt: "是否执行【详记】的效果摸一张牌？",
                                filter: function (event, player) {
                                    return get.type(event.card, 'trick') == player.storage.ba_xiangji_set;
                                },
                                content: function () {
                                    player.draw();
                                },
                                sub: true,
                            },
                        },
                    },
                    "ba_youqing": {
                        usable: 1,
                        enable: "phaseUse",
                        filterTarget: (card, player, target) => player != target && player.inRange(target),
                        filter: (event, player) => game.hasPlayer(target => player != target && player.inRange(target)),
                        content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                            'step 0'
                            if (target.isDamaged()) target.recover();
                            if (!game.hasPlayer(current => current != target && target.inRange(current) && current.countCards('hej'))) event._result = { control: "摸两张牌", bool: true };
                            target.chooseControl(['摸两张牌', '从攻击范围的所有角色处获得一张牌']).set('prompt', get.translation(player) + '发动了【诱情】指定你为目标，请选择一项：').set('ai', () => {
                                var count = game.countPlayer(current => current != target && target.inRange(current) && current.countCards('hej'));
                                if (count >= 2) return '从攻击范围的所有角色处获得一张牌';
                                else '摸两张牌'
                            })
                            'step 1'
                            if (result.control == '摸两张牌') {
                                target.draw(2);
                            } else {
                                var targets2 = game.filterPlayer(current => current != target && target.inRange(current) && current.countCards('hej'));
                                for (var target2 of targets2) {
                                    target.gainPlayerCard(target2, 'hej', 1, true);
                                }
                            }
                            target.skip('phaseUse');
                            target.skip('phaseDiscard');
                            target.addTempSkill('ba_youqing_1', { player: "phaseDiscardSkipped" })
                        },
                        ai: {
                            result: {
                                target: (player, target) => {
                                    var eff = -4;
                                    if (target.isDamaged()) eff += 2;
                                    if (target.hp == 1 || target.hp == 2) eff += 2;
                                    eff += Math.min(game.countPlayer(current => current != target && target.inRange(current) && current.countCards('hej')), 2);
                                },
                            },
                            order: 4,
                        },
                        subSkill: {
                            "1": {
                                mark: true,
                                intro: {
                                    content: "跳过下一出牌与弃牌阶段",
                                },
                                sub: true,
                            },
                        },
                    },
                    "ba_miyin": {
                        enable: "phaseUse",
                        usable: 1,
                        filterCard: {
                            color: "red",
                        },
                        filterTarget: (card, player, target) => player != target && target.countCards('h') > 0,
                        position: "h",
                        filter: (event, player) => player.countCards('h', { color: "red" }) > 0 && game.hasPlayer(target => player != target && target.countCards('h')),
                        content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                            'step 0'
                            event.card = target.getCards('h').randomGet();
                            player.showCards(event.card);
                            var list = ['令其摸一张牌', '令其弃两张牌'];
                            event.color = get.color(event.card)
                            if (event.color == 'red') {
                                list = [];
                                if (target.canUse(get.autoViewAs({ name: "wuzhong" }, event.card), target)) list.add('wuzhong');
                                if (player.canUse(get.autoViewAs({ name: "lebu" }, event.card), target)) list.add('lebu');
                                if (list.length == 0) event.finish();
                                if (list.length == 1) {
                                    event._result = { control: list[0] };
                                    event.goto(1);
                                }
                            }
                            player.chooseControl(list).set('prompt', (event.color == 'red') ? ('将' + get.translation(event.card) + '当作……对' + get.translation(target) + '使用') : '选择一项令' + get.translation(target) + "执行").set('ai', () => {
                                if (event.color == 'red') {
                                    return (get.effect(target, { name: "lebu" }, player, player) > get.effect(target, { name: "wuzhong" }, player, player)) ? "lebu" : "wuzhong";
                                } else {
                                    return (get.attitude(player, target) > 0) ? "令其摸一张牌" : "令其弃两张牌"
                                }
                            })
                            'step 1'
                            if (event.color == "red") {
                                game.log(player, '将', event.card, '当作了', get.translation(result.control), '对', target, '使用');
                                if (result.control == 'lebu') {
                                    target.addJudge({ name: "lebu" }, event.card);
                                } else {
                                    target.useCard(get.autoViewAs({ name: "wuzhong" }, [event.card]), [event.card], target);
                                }
                            } else {
                                if (result.control == '令其摸一张牌') {
                                    target.draw();
                                } else {
                                    if (target.countCards('he') == 1) target.chooseToDiscard(1, 'he', true);
                                    else target.chooseToDiscard(2, 'he', true);
                                }
                            }
                        },
                        ai: {
                            order: 7,
                            result: {
                                target: (player, target) => {
                                    return Math.sign(get.attitude(player, target)) * 2;
                                },
                            },
                        },
                    },
                    "ba_xuansuan": {
                        dutySkill: true,
                        locked: true,
                        trigger: {
                            global: "damageEnd",
                        },
                        filter: (event, player) => {
                            return event.source && event.source != player && (event.player == player || player.inRange(event.player)) && (get.itemtype(event.cards) == 'cards' && get.position(event.cards[0], true) == 'o' || event.card && get.position(event.card, true) == 'o')
                        },
                        "prompt2": (event, player) => "令" + (event.player == player ? "你" : get.translation(event.player)) + "摸一张牌，然后你将" + get.translation(event.cards) + '置于你的武将牌上',
                        content: () => {
                            'step 0'
                            trigger.player.draw();
                            player.addToExpansion(trigger.cards || trigger.card, 'gain2').gaintag.add('ba_xuansuan');
                            'step 1'
                            var num = 0;
                            for (var card of player.getExpansions('ba_xuansuan')) {
                                num += get.number(card);
                            }
                            if (num > 25) {
                                event.trigger('ba_xuansuan_achieved')
                            }
                        },
                        marktext: "析",
                        intro: {
                            content: "expansion",
                            markcount: "expansion",
                        },
                        check: (event, player) => {
                            var num = 0;
                            var num1 = 0;
                            for (var card of player.getExpansions('ba_xuansuan')) {
                                num += get.number(card);
                            }
                            for (var card of event.cards) {
                                num1 += get.number(card)
                            }
                            return (event.player == player || get.attitude(player, event.player) > 0) || num + num1 > 25;
                        },
                        group: ["ba_xuansuan_achieve", "ba_xuansuan_failed"],
                        subSkill: {
                            achieve: {
                                skillAnimation: true,
                                animationColor: "metal",
                                filter: (event, player) => true,
                                trigger: {
                                    player: "ba_xuansuan_achieved",
                                },
                                content: () => {
                                    "step 0"
                                    game.log(player, '成功完成使命')
                                    player.gain(player.getExpansions('ba_xuansuan'), 'gain');
                                    'step 1'
                                    player.awakenSkill('ba_xuansuan');
                                    player.addSkillLog('ba_mieju');
                                },
                                forced: true,
                                sub: true,
                                charlotte: true,
                            },
                            failed: {
                                trigger: {
                                    player: "die",
                                },
                                forced: true,
                                forceDie: true,
                                filter: function (event, player) {
                                    return event.source != undefined && player.getExpansions('ba_xuansuan').length > 0;
                                },
                                logTarget: "source",
                                skillAnimation: true,
                                animationColor: "thunder",
                                content: () => {
                                    trigger.source.gain(player.getExpansions('ba_xuansuan'), 'giveAuto');
                                    trigger.source.gainMaxHp();
                                    trigger.source.recover();
                                },
                                sub: true,
                            },
                        },
                        derivation: "ba_mieju",
                    },
                    "ba_mieju": {
                        trigger: {
                            player: "phaseJieshuBegin",
                        },
                        direct: true,
                        filter: function (event, player) {
                            return game.hasPlayer(function (current) {
                                return current != player && current.getHistory('lose', function (evt) {
                                    return evt.cards2 && evt.cards2.length > 0;
                                }).length > 0;
                            }) && player.getHistory('sourceDamage').length == 0;
                        },
                        content: function () {
                            'step 0'
                            player.chooseTarget(get.prompt('ba_mieju'), '对一名本回合失去过牌的其他角色造成1点伤害', function (card, player, target) {
                                return _status.event.targets.contains(target);
                            }).set('targets', game.filterPlayer(function (current) {
                                return current != player && current.getHistory('lose', function (evt) {
                                    return evt.cards2 && evt.cards2.length > 0;
                                }).length > 0;
                            })).set('ai', function (target) {
                                var player = _status.event.player;
                                return get.damageEffect(target, player, player);
                            });
                            'step 1'
                            if (result.bool) {
                                var target = result.targets[0];
                                player.logSkill('rejuece', target);
                                target.damage();
                            }
                        },
                        group: "ba_mieju_1",
                        subSkill: {
                            "1": {
                                forced: true,
                                locked: true,
                                sub: true,
                                trigger: {
                                    player: "useCard",
                                },
                                filter: function (event, player) {
                                    return event.card && (get.type(event.card) == 'trick' || get.type(event.card) == 'basic' && !['shan', 'tao', 'jiu', 'du'].contains(event.card.name)) && game.hasPlayer(function (current) {
                                        return current != player && get.distance(player, current) <= 1;
                                    });
                                },
                                content: function () {
                                    trigger.directHit.addArray(game.filterPlayer(function (current) {
                                        return current != player && get.distance(player, current) <= 1;
                                    }));
                                },
                                ai: {
                                    "directHit_ai": true,
                                    skillTagFilter: function (player, tag, arg) {
                                        return get.distance(player, arg.target) <= 1;
                                    },
                                },
                            },
                        },
                    },
                    "ba_xinzhu": {
                        enable: "phaseUse",
                        usable: 1,
                        filter: (event, player) => player.countCards('h', { suit: 'heart' }),
                        selectCard: -1,
                        filterCard: {
                            suit: "heart",
                        },
                        check: (card) => { if (get.name(card) == 'du') return 20; return (8 - get.value(card)) },
                        filterTarget: function (card, player, target) {
                            return player != target;
                        },
                        discard: false,
                        lose: false,
                        delay: false,
                        content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                            'step 0'
                            player.showHandcards();
                            'step 1'
                            target.gain(cards, player, 'giveAuto').gaintag.add('ba_xinzhu');
                            target.addTempSkill('ba_xinzhu_clear', { target: "phaseEnd" })
                            'step 2'
                            if (cards.length >= 3) player.recover(2);
                        },
                        ai: {
                            player: (player, target) => {
                                if (player.countCards('h', { suit: "heart" }) > 3 && player.maxHp - player.hp >= 2) return 2 + player.countCards('h', { suit: "heart" }) * 0.5;
                                return player.countCards('h', { suit: "heart" }) * 0.5;
                            },
                            target: (player, target) => {
                                return player.countCards('h', { suit: "heart" }) * 0.5;
                            },
                        },
                        group: "ba_xinzhu_draw",
                        subSkill: {
                            draw: {
                                trigger: {
                                    global: ["useCard", "respond"],
                                },
                                filter: (event, player) => {
                                    if (!event.player.hasSkill('ba_xinzhu_clear')) return false;
                                    return event.player.getHistory('lose', evt => {
                                        if (evt.getParent() != event) return false;
                                        for (var i in evt.gaintag_map) {
                                            if (evt.gaintag_map[i].contains('ba_xinzhu')) return true;
                                        }
                                        return false;
                                    }).length > 0
                                },
                                forced: true,
                                charlotte: true,
                                content: () => {
                                    var his = trigger.player.getHistory('lose', evt => {
                                        if (evt.getParent() != trigger) return false;
                                        for (var i in evt.gaintag_map) {
                                            if (evt.gaintag_map[i].contains('ba_xinzhu')) return true;
                                        }
                                        return false;
                                    });
                                    var num = 0;
                                    for (var evt of his) {
                                        for (var i in evt.gaintag_map) {
                                            if (evt.gaintag_map[i].contains('ba_xinzhu')) num++;
                                        }
                                    }
                                    game.asyncDraw([player, trigger.player], num);
                                },
                                sub: true,
                            },
                            clear: {
                                onremove: (player) => {
                                    player.removeGaintag('ba_xinzhu');
                                },
                                sub: true,
                                charlotte: true,
                            },
                        },
                    },
                    "ba_daohui": {
                        global: "ba_daohui_g",
                        subSkill: {
                            g: {
                                trigger: {
                                    player: "useCard1",
                                },
                                filter: (event, player) => {
                                    return player.isPhaseUsing() && get.suit(event.card) && ['spade', 'club'].contains(get.suit(event.card)) && game.hasPlayer(target => target != player && target.hasSkill('ba_daohui'));
                                },
                                direct: true,
                                content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                                    'step 0'
                                    var players = game.filterPlayer(target => target != player && target.hasSkill('ba_daohui'))
                                    if (players.length == 1) {
                                        player.chooseBool('是否将' + get.translation(trigger.card) + "交给" + get.translation(players[0]) + "?").set('ai', () => {
                                            if (get.type(trigger.card) == 'equip') return false;
                                            var player = get.player();
                                            var target = _status.event.target;
                                            return get.attitude(player, target) > 0;
                                        }).set('target', players[0])
                                        // event._result.targets = players;
                                    }
                                    else if (players.length == 0) event.finish();
                                    else player.chooseTarget('【祷悔】效果被触发，是否将' + get.translation(trigger.cards) + '交给一名有【祷悔】的角色？', 1, (card, player, target) => {
                                        return target != player && target.hasSkill('ba_daohui')
                                    }).set('ai', target => {
                                        if (get.type(trigger.card) == 'equip') return -1;
                                        var player = get.player();
                                        return get.attitude(player, target);
                                    }).set('prompt2', "若如此做你摸一张牌" + ((get.name(trigger.card) == 'sha') ? '，然后令此【杀】带有禁制效果' : "。"));
                                    'step 1'
                                    if (result.bool) {
                                        if (!result.targets || result.targets == 0) result.targets = game.filterPlayer(target => target != player && target.hasSkill('ba_daohui'))
                                        player.logSkill('ba_daohui', result.targets)
                                        result.targets[0].gain(trigger.cards, 'gain2');
                                        player.draw();
                                        if (get.name(trigger.card) == 'sha') trigger.card.eJinzhi = true;
                                    }
                                },
                                sub: true,
                                charlotte: true,
                                popup: false,
                                usable: 2,
                            },
                        },
                    },
                    "ba_yizhen": {
                        trigger: {
                            player: "useCard2",
                        },
                        filter: (event, player) => {
                            return event.card.name == 'sha' && game.hasPlayer(target => !event.targets.contains(target) && player.canUse(event.card, target));
                        },
                        direct: true,
                        content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                            'step 0'
                            player.chooseTarget(get.prompt(event.name), 1, '为' + get.translation(trigger.card) + '增加一个目标', (card, player, target) => !_status.event.sourcex.contains(target) && player.canUse(_status.event.card, target)).set('sourcex', trigger.targets).set('card', trigger.card).set('ai', target => {
                                var player = _status.event.player;
                                return get.effect(target, _status.event.card, player, player)
                            })
                            'step 1'
                            if (result.bool) {
                                if (!event.isMine() && !_status.connectMode) game.delayx();
                                event.targets = result.targets;
                            } else event.finish();
                            'step 2'
                            player.logSkill(event.name, event.targets);
                            trigger.targets.addArray(event.targets);
                        },
                        group: ["ba_yizhen_1"],
                        subSkill: {
                            "1": {
                                trigger: {
                                    player: "useCardToPlayered",
                                },
                                filter: (event, player) => get.name(event.card) == 'sha' && event.isFirstTarget,
                                content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                                    event.targets = trigger.getParent().targets;
                                    var num = 0;
                                    for (target of event.targets) {
                                        num += get.distance(player, target);
                                    }
                                    if (num > player.getAttackRange()) {
                                        for (target of event.targets) {
                                            if (target.countCards('hej') > 0) player.gainPlayerCard(target, 1, 'hej');
                                        }
                                    } else {
                                        if (player.stat[player.stat.length - 1].card.sha > 0) player.stat[player.stat.length - 1].card.sha--;
                                    }
                                    // trigger.ba_yizhen=true;
                                },
                                logTarget: (event, player) => {
                                    return event.getParent().targets;
                                },
                                sub: true,
                                check: (event, player) => {
                                    var targets = event.getParent().targets;
                                    var num = 0;
                                    var att = 0;
                                    for (var target of targets) {
                                        num += get.distance(player, target);
                                        att += get.attitude(player, target) <= -2 ? 1 : 0;
                                    }
                                    if (num <= player.getAttackRange()) return true;
                                    else return att > event.targets.length / 2;
                                },
                                "prompt2": (event, player) => {
                                    var targets = event.getParent().targets;
                                    var num = 0;
                                    for (target of targets) {
                                        num += get.distance(player, target);
                                    }
                                    if (num <= player.getAttackRange()) return '令此【杀】不计入次数';
                                    else {
                                        return '获得' + get.translation(targets) + '各一张牌';
                                    }
                                },
                            },
                        },
                    },
                    "ba_jilao": {
                        trigger: {
                            source: "damageEnd",
                        },
                        filter: (event, player) => event.card && get.name(event.card) == 'sha' && event.num > 0,
                        forced: true,
                        locked: true,
                        content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                            player.addMark(event.name, trigger.num);
                        },
                        intro: {
                            content: "mark",
                            "name2": "疲",
                        },
                        marktext: "疲",
                        group: "ba_jilao_2",
                        subSkill: {
                            "2": {
                                forced: true,
                                locked: true,
                                sub: true,
                                trigger: {
                                    player: "phaseZhunbeiBegin",
                                },
                                filter: (event, player) => {
                                    return player.countMark('ba_jilao') >= 2;
                                },
                                content: () => {
                                    player.removeMark('ba_jilao', 2);
                                    player.skip('phaseUse');
                                    player.skip('phaseDiscard');
                                    player.chooseDrawRecover(2, true);
                                },
                            },
                        },
                    },
                    "ba_shehun": {
                        trigger: {
                            player: "useCardToPlayer",
                        },
                        shaRelated: true,
                        filter: (event, player) => get.name(event.card) == 'sha',
                        content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                            'step 0'
                            if (trigger.target.countCards('h') <= player.countCards('h')) {
                                player.draw();
                                event.finish();
                            } else {
                                player.judge();
                            }
                            'step 1'
                            if (result.color == 'red') {
                                if (player.stat[player.stat.length - 1].card.sha > 0) player.stat[player.stat.length - 1].card.sha--;
                                if (player.storage.ba_xuexiao) {
                                    if (trigger.target.countCards('hej') > 0) {
                                        player.gainPlayerCard(trigger.target, 'hej', [1, 2]);
                                    }
                                }
                            }
                            else {
                                if (!trigger.target.hasSkill('fengyin')) trigger.target.addTempSkill('fengyin');
                                trigger.getParent().directHit.add(trigger.target);
                            }
                        },
                        check: (event, player) => {
                            if (event.target.countCards('h') <= player.countCards('h')) return true;
                            else return get.attitude(player, event.target) <= -2;
                        },
                        "prompt2": (event, player) => {
                            if (event.target.countCards('h') <= player.countCards('h')) return "你可以摸一张牌";
                            else return "进行判定，若为黑色，则" + get.translation(event.target) + '不可闪避此【杀】且其所有非锁定技失效；否则此【杀】不计入次数' + (player.storage['ba_xuexiao'] ? '并获得其至多两张牌。' : '。');
                        },
                    },
                    "ba_xuexiao": {
                        juexingji: true,
                        unique: true,
                        filter: (event, player) => {
                            var num = 0;
                            for (var evt of player.getAllHistory('sourceDamage')) {
                                num += evt.num;
                            }
                            return num >= player.hp
                        },
                        skillAnimation: true,
                        animationColor: "fire",
                        trigger: {
                            player: "phaseUseBegin",
                        },
                        content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                            player.awakenSkill(event.name);
                            player.loseMaxHp();
                            player.draw(3);
                            player.addSkillLog('ba_pojun');
                            player.storage["ba_xuexiao"] = true;
                        },
                        forced: true,
                        derivation: ["ba_pojun"],
                        markimage: "extension/OLUI/image/player/marks/juexingji.png",
                    },
                    "ba_pojun": {
                        inherit: "repojun",
                        audio: "ext:乞国秘史:2",
                        group: "ba_pojun3",
                        content: function () {
                            'step 0'
                            var next = player.choosePlayerCard(trigger.target, 'he', [1, Math.min(trigger.target.hp, trigger.target.countCards('he'))], get.prompt('ba_pojun', trigger.target));
                            next.set('ai', function (button) {
                                if (!_status.event.goon) return 0;
                                var val = get.value(button.link);
                                if (button.link == _status.event.target.getEquip(2)) return 2 * (val + 3);
                                return val;
                            });
                            next.set('goon', get.attitude(player, trigger.target) <= 0);
                            next.set('forceAuto', true);
                            'step 1'
                            if (result.bool) {
                                var target = trigger.target;
                                player.logSkill("ba_pojun", target);
                                target.addSkill('repojun2');
                                target.addToExpansion('giveAuto', result.cards, target).gaintag.add('repojun2');
                            }
                        },
                        shaRelated: true,
                        trigger: {
                            player: "useCardToPlayered",
                        },
                        direct: true,
                        filter: function (event, player) {
                            return event.card.name == 'sha' && event.target.hp > 0 && event.target.countCards('he') > 0;
                        },
                        ai: {
                            "unequip_ai": true,
                            "directHit_ai": true,
                            skillTagFilter: function (player, tag, arg) {
                                if (get.attitude(player, arg.target) > 0) return false;
                                if (tag == 'directHit_ai') return arg.target.hp >= Math.max(1, arg.target.countCards('h') - 1);
                                if (arg && arg.name == 'sha' && arg.target.getEquip(2)) return true;
                                return false;
                            },
                        },
                    },
                    "ba_pojun3": {
                        inherit: "repojun3",
                        audio: "ba_pojun",
                        trigger: {
                            source: "damageBegin1",
                        },
                        forced: true,
                        locked: false,
                        logTarget: "player",
                        filter: function (event, player) {
                            var target = event.player;
                            return event.getParent().name == 'sha' && player.countCards('h') >= target.countCards('h') && player.countCards('e') >= target.countCards('e');
                        },
                        content: function () {
                            trigger.num++;
                        },
                    },
                    "ba_qiangfeng": {
                        intro: {
                            content: "已记录花色：$",
                            onunmark: true,
                        },
                        group: "ba_qiangfeng_count",
                        subSkill: {
                            count: {
                                trigger: {
                                    player: "useCard",
                                    target: "useCardToTargeted",
                                },
                                forced: true,
                                filter: function (event, player, name) {
                                    if (name != 'useCard' && player == event.player) return false;
                                    var suit = get.suit(event.card);
                                    if (!lib.suit.contains(suit)) return false;
                                    if (player.storage.ba_qiangfeng && player.storage.ba_qiangfeng.contains(suit)) return false;
                                    return true;
                                },
                                content: function () {
                                    player.markAuto('ba_qiangfeng', [get.suit(trigger.card)]);
                                },
                                direct: true,
                                locked: false,
                                sub: true,
                            },
                        },
                        trigger: {
                            player: "phaseZhunbeiBegin",
                        },
                        filter: (event, player) => {
                            if (player.getStorage('ba_qiangfeng').length == 0) return false;
                            if (!game.hasPlayer(target => player != target && player.inRange(target) && target.countCards('h'))) return false;
                            var cards = player.getCards('h');
                            var num = 0;
                            for (var card of cards) {
                                if (get.type(card) != 'equip' && player.storage.ba_qiangfeng.contains(get.suit(card))) num++;
                            }
                            return num >= Math.ceil(player.getStorage('ba_qiangfeng').length / 2)
                        },
                        direct: true,
                        popup: false,
                        content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                            'step 0'
                            player.chooseCardTarget({
                                filterCard: (card, player) => { return get.type(card) != 'equip' && player.storage.ba_qiangfeng.contains(get.suit(card)) },
                                filterTarget: (card, player, target) => player != target && player.inRange(target) && target.countCards('h'),
                                selectCard: Math.ceil(player.getStorage('ba_qiangfeng').length / 2),
                                ai1: card => { var player = get.player(); if (player.storage.ba_qiangfeng.length < 3) return 0; else { return 7 - get.value(card); } },
                                ai2: target => Math.sign(get.attitude(_status.event.player, target)) * target.countCards('h'),
                                selectTarget: [1, Math.ceil(player.getStorage('ba_qiangfeng').length / 2)],
                                prompt: get.prompt(event.name),
                                prompt2: get.prompt2(event.name),
                            })
                            'step 1'
                            if (result.bool) {
                                player.discard(result.cards);
                                player.logSkill(event.name, result.targets);
                                for (var _target of result.targets) {
                                    _target.showHandcards();
                                    var _cards = _target.getCards('h', _card => player.getStorage(event.name).includes(get.suit(_card)));
                                    _target.discard(_cards, 'notBySelf');
                                }
                            } else event.finish();
                            'step 2'
                            player.unmarkSkill('ba_qiangfeng');
                        },
                        prompt: "是否发动【枪风】？",
                        "prompt2": (event, player) => {
                            var len = player.storage.ba_qiangfeng.length;
                            var len1 = Math.ceil(len / 2) + 1;
                            var len2 = Math.ceil(len / 2);
                            return '弃置' + len1.toString() + '张花色为' + get.translation(player.storage.ba_qiangfeng) + '的牌并指定至多' + len2.toString() + '名角色，令其弃置所有花色为' + get.translation(player.storage.ba_qiangfeng) + '的手牌。'
                        },
                    },
                    "ba_pushu": {
                        trigger: {
                            player: ["useCard", "respond"],
                        },
                        filter: (event, player) => get.number(event.card) && [1, 11, 12, 13].contains(get.number(event.card)) && get.color(event.card) && (get.color(event.card) == 'red' || (get.color(event.card) == 'black' && player.canMoveCard())),
                        frequent: true,
                        content: () => {
                            if (get.color(trigger.card) == 'red') player.draw();
                            else player.moveCard();
                        },
                        "prompt2": (event, player) => {
                            if (get.color(event.card) == 'red') return "摸一张牌";
                            else return "移动场上一张牌";
                        },
                    },
                    "ba_qingzheng": {
                        mod: {
                            judge: function (player, result) {
                                if (_status.event.cardname == 'lebu') {
                                    if (result.bool == false) {
                                        result.bool = true;
                                    }
                                    else {
                                        result.bool = false;
                                    }
                                }
                            },
                        },
                        global: "ba_qingzheng_g",
                        subSkill: {
                            "1": {
                                trigger: {
                                    player: "phaseDiscardBefore",
                                },
                                charlotte: true,
                                forced: true,
                                sub: true,
                                locked: true,
                                silent: true,
                                content: () => { trigger.cancel(); },
                                mark: true,
                                intro: {
                                    content: "跳过本回合的弃牌阶段",
                                },
                                popup: false,
                            },
                            g: {
                                mod: {
                                    cardEnabled: (card, player) => {
                                        if (!player.hasSkill('ba_qingzheng') && game.hasPlayer(target => target.hasSkill('ba_qingzheng') && player.inRange(target))) {
                                            if (get.name(card) == 'sha' && get.color(card) == 'red') return false;
                                            if (get.name(card) == 'lebu') return false;
                                        }
                                    },
                                },
                                sub: true,
                            },
                        },
                        trigger: {
                            player: "judgeEnd",
                        },
                        filter: (event, player) => event.result && event.result.suit != 'spade' && player == _status.currentPhase,
                        locked: true,
                        forced: true,
                        content: () => { player.addTempSkill('ba_qingzheng_1'); },
                    },
                    "ba_niwu": {
                        trigger: {
                            global: "damageBegin3",
                        },
                        filter: (event, player) => (player.inRange(event.player) || player == event.player) && player.countCards('h', { color: "red" }) > 0 && !player.hasSkill('ba_niwu_roundcount'),
                        content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                            'step 0'
                            player.chooseToDiscard({ color: "red" }, 'hej', [1, Math.min(player.countCards('h', { color: "red" }), trigger.num)]).set('prompt', get.prompt(event.name)).set('prompt2', lib.skill[event.name].prompt2(trigger, player)).set('ai', card => {
                                var player = get.player();
                                var target = _status.event.target;
                                if (player == target) return 9 - get.value(card);
                                else if (get.attitude(player, target) <= 2 || (player.hp == 1 && target.hp > 1)) return 0;
                                else return 5 - get.value(card);
                            }).set('target', trigger.player);
                            'step 1'
                            if (result.bool) {
                                player.logSkill(event.name, trigger.player);
                                trigger.num -= result.cards.length;
                                game.log(player, '令', trigger.source, '对', trigger.player, '的伤害减少了', result.cards.length, '点');
                                var card1 = result.cards.randomGet();
                                if (!player.hasJudge('lebu')) player.addJudge({ name: "lebu" }, [card1]);
                                player.addTempSkill('ba_niwu_roundcount', "roundStart");
                            }
                        },
                        direct: true,
                        prompt: "是否发动【匿物】？",
                        "prompt2": (event, player) => '弃置至多' + get.cnNumber(Math.min(player.countCards('h', { color: "red" }), event.num)) + '张红色牌，令此伤害减少相同数值。',
                        popup: false,
                        subSkill: {
                            roundcount: {
                                sub: true,
                                mark: true,
                                intro: {
                                    content: "本轮已发动",
                                },
                            },
                        },
                    },
                    "ba_jujieold": {
                        trigger: {
                            player: "phaseDiscardBefore",
                        },
                        filter: (event, player) => !player.skipList.includes("phaseDiscard"),
                        content: () => {
                            player.addTempSkill('ba_jujieold_1');
                        },
                        check: (event, player) => player.countCards('h') <= 2 + player.countCards('e') || player.hp == 1,
                        subSkill: {
                            "1": {
                                mod: {
                                    maxHandcard: (player, num) => { return 2 + player.countCards('e'); },
                                },
                                trigger: {
                                    player: ["phaseDiscardAfter"],
                                },
                                content: () => {
                                    if (player.hp < 2) player.recover();
                                    else player.draw();
                                },
                                sub: true,
                                locked: true,
                                forced: true,
                                charlotte: true,
                            },
                        },
                    },
                    "ba_juyuanold": {
                        trigger: {
                            player: "phaseJieshuBegin",
                        },
                        filter: (event, player) => player.countCards('h') > 0 && game.hasPlayer(target => target != player && target.hasCard(card => player.countCards('h', { suit: get.suit(card) }), 'e')),
                        direct: true,
                        popup: false,
                        content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                            'step 0'
                            // player.chooseCardTarget({
                            //     filterCard: (card,player)=>game.hasPlayer(target=>target!=player&&target.hasCard(_card=>get.suit(_card)==get.suit(card),'e')),
                            //     filterTarget: (card,player,target)=>player!=target&&target.hasCard(_card=>get.suit(_card)==get.suit(card),'e'),
                            //     position: "h",
                            //     ai1: (card)=>7-get.value(card),
                            //     ai2: (target)=>{
                            //         var player = get.player();

                            //     }
                            // });
                            player.chooseTarget((card, player, target) => player != target && player.countCards('h', __card => target.countCards('e', _card => get.suit(__card) == get.suit(_card))), 1).set('ai', target => {
                                var player = get.player();
                                var cards = target.getCards('e', card => player.countCards('h', _card => get.suit(card) == get.suit(_card)));
                                if (cards.length == 0) return -1;
                                var effs = [];
                                for (var _card of cards) {
                                    if (get.equipValue(_card, player) >= 0) effs.push(get.equipValue(_card, target) * Math.sign(get.attitude(player, target)) * -1)
                                }
                                if (effs.length == 0) return -1;
                                return Math.max(...effs);
                            }).set('prompt', get.prompt(event.name)).set('prompt2', '选择一名角色，弃一张与其装备区内的一张牌A颜色相同的牌，移动A到你的装备区里')
                            'step 1'
                            if (result.bool) {
                                event.target = result.targets[0];
                                player.chooseToDiscard(1, card => event.target.countCards('e', _card => get.suit(card) == get.suit(_card))).set('ai', card => {
                                    var player = _status.event.player;
                                    var target = _status.event.target;
                                    var cards = target.getCards('e', _card => get.suit(card) == get.suit(_card))
                                    var eff = [];
                                    for (var _card of cards) {
                                        eff.push(Math.sign(get.attitude(player, target)) * -1 * get.equipValue(_card, player));
                                    }
                                    return Math.max(...eff) / 2 - get.value(card);
                                }).set('target', event.target).set('player', player).set('prompt', '【据园】：请选择一张花色存在于' + get.translation(event.target) + '装备区内的牌的手牌')
                            }
                            else event.finish();
                            'step 2'
                            if (result.bool) {
                                player.logSkill(event.name, event.target);
                                event.card = result.cards[0];
                                player.choosePlayerCard(event.target, 'e', (button) => {
                                    var player = _status.event.player;
                                    var target = _status.event.target;
                                    return get.equipValue(button.link) * Math.sign(get.attitude(player, target)) * -1
                                }).set('target', event.target).set('filterButton', button => {
                                    var card = _status.event.card;
                                    return get.suit(card) == get.suit(button.link);
                                }).set('card', event.card)
                            } else event.finish();
                            'step 3'
                            if (result.bool && result.links.length) {
                                var link = result.links[0];
                                game.log(event.target, '的', link, '被移动给了', player);
                                event.target.$give(link, player, false);
                                player.equip(link);
                                game.delay();
                            }
                        },
                    },
                    'ba_juyuan': {
                        trigger: { player: "phaseJieshuBegin" },
                        filter: (event, player) => {
                            return player.isDamaged();
                        },
                        direct: true,
                        popup: false,
                        content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                            'step 0'
                            player.chooseControl(['draw_card', 'recover_hp', 'cancel2']).set('prompt', get.prompt(event.name)).set('prompt2', '恢复1点体力或摸两张牌，然后你的手牌上限-1').set('ai', () => {
                                var choice;
                                var player = _status.event.player;
                                if (player.isDamaged() && get.recoverEffect(player) > 0 && (
                                    player.hp == 1 || player.countCards('h') > player.getHandcardLimit() + 2
                                )) {
                                    choice = 'recover_hp';
                                }
                                else {
                                    choice = 'draw_card';
                                }
                                return choice;
                            })
                            'step 1'
                            if (result.control != 'cancel2') {
                                if (!player.storage[event.name + "_triggered"]) player.addMark('ba_juyuan');
                                player.logSkill('ba_juyuan');
                                if (result.control == 'draw_card') player.draw(2);
                                else player.recover();
                            } else event.finish()
                            'step 2'
                            if (player.countCards('h') > 0 && game.hasPlayer(target => target != player && target.hasCard(card => player.countCards('h', { suit: get.suit(card) }), 'e'))) {
                                player.chooseTarget((card, player, target) => player != target && player.countCards('h', __card => target.countCards('e', _card => get.suit(__card) == get.suit(_card))), 1).set('ai', target => {
                                    var player = get.player();
                                    var cards = target.getCards('e', card => player.countCards('h', _card => get.suit(card) == get.suit(_card)));
                                    if (cards.length == 0) return -1;
                                    var effs = [];
                                    for (var _card of cards) {
                                        if (get.equipValue(_card, player) >= 0) effs.push(get.equipValue(_card, target) * Math.sign(get.attitude(player, target)) * -1)
                                    }
                                    if (effs.length == 0) return -1;
                                    return Math.max(...effs);
                                }).set('prompt', '【据园】：选择移动').set('prompt2', '选择一名角色，弃一张与其装备区内的一张牌A颜色相同的牌，移动A到你的装备区里')
                            } else event.finish();
                            'step 3'
                            if (result.bool) {
                                event.target = result.targets[0];
                                player.chooseToDiscard(1, card => event.target.countCards('e', _card => get.suit(card) == get.suit(_card))).set('ai', card => {
                                    var player = _status.event.player;
                                    var target = _status.event.target;
                                    var cards = target.getCards('e', _card => get.suit(card) == get.suit(_card))
                                    var eff = [];
                                    for (var _card of cards) {
                                        eff.push(Math.sign(get.attitude(player, target)) * -1 * get.equipValue(_card, player));
                                    }
                                    return Math.max(...eff) / 2 - get.value(card);
                                }).set('target', event.target).set('player', player).set('prompt', '【据园】：请选择一张花色存在于' + get.translation(event.target) + '装备区内的牌的手牌')
                            }
                            else event.finish();
                            'step 4'
                            if (result.bool) {
                                event.card = result.cards[0];
                                player.choosePlayerCard(event.target, 'e', (button) => {
                                    var player = _status.event.player;
                                    var target = _status.event.target;
                                    return get.equipValue(button.link) * Math.sign(get.attitude(player, target)) * -1
                                }).set('target', event.target).set('filterButton', button => {
                                    var card = _status.event.card;
                                    return get.suit(card) == get.suit(button.link);
                                }).set('card', event.card)
                            } else event.finish();
                            'step 5'
                            if (result.bool && result.links.length) {
                                var link = result.links[0];
                                game.log(event.target, '的', link, '被移动给了', player);
                                event.target.$give(link, player, false);
                                player.equip(link);
                                game.delay();
                            }
                        },
                        mod: {
                            maxHandcard: (player, num) => {
                                if (player.countMark('ba_juyuan') > num) return 0;
                                return num - player.countMark('ba_juyuan');
                            }
                        },
                        intro: { content: "手牌上限-#" },
                        onremove: (player, skill) => {
                            player.removeMark(skill, player.countMark(skill));
                            delete player.storage[skill]
                        },
                        init: (player, skill) => {
                            player.storage[skill + "_triggered"] = false;
                        },
                        ai: {
                            maixie: true,
                            effect: {
                                target: function (card, player, target) {
                                    if (!target.hasFriend() || target.hp > 1) return;
                                    if (get.tag(card, 'damage') == 1 && (player.countCards('hs', 'tao') + target.countCards('hs', ['tao', 'jiu']) > 0) &&
                                        !target.isTurnedOver() && _status.currentPhase != target && get.distance(_status.currentPhase, target, 'absolute') <= 3) return [0.5, 1];
                                },
                            },
                        }
                    },
                    'ba_jujie': {
                        trigger: { player: "phaseEnd" },
                        filter: (event, player) => {
                            return player.getHandcardLimit() < 2 || game.roundNumber >= player.maxHp
                        },
                        forced: true,
                        juexingji: true,
                        unique: true,
                        skillAnimation: true,
                        animationColor: "metal",
                        content: () => {
                            player.awakenSkill('ba_jujie');
                            player.loseMaxHp();
                            player.draw(2);
                            player.removeSkill('ba_juyuan');
                            player.addSkillLog('ba_bingjie');
                            player.addSkillLog('ba_zhiyi');
                        },
                        derivation: ['ba_bingjie', 'ba_zhiyi', 'ba_tubian']
                    },
                    'ba_bingjie': {
                        trigger: { player: "changeHp" },
                        filter: (event, player) => player.hp <= 2,
                        forced: true,
                        juexingji: true,
                        unique: true,
                        skillAnimation: true,
                        animationColor: "fire",
                        content: () => {
                            'step 0'
                            player.awakenSkill('ba_bingjie');
                            player.draw(2);
                            player.gainMaxHp();
                            player.recover();
                            player.addSkillLog('ba_tubian');
                            player.addSkillLog('ba_juyuan');
                            'step 1'
                            player.storage.ba_juyuan_triggered = true;
                        },
                        derivation: "ba_tubian"
                    },
                    'ba_zhiyi': {
                        inherit: "rezhiyi"
                    },
                    'ba_tubian': {
                        enable: ["chooseToUse", "chooseToRespond"],
                        usable: 1,
                        filter: (event, player) => {
                            if (player.countCards('h', { type: "basic" }) == 0) return false;
                            for (var i of lib.inpile) {
                                if (i != 'du' && get.type(i, false) == 'basic') {
                                    if (event.filterCard({ name: i }, player, event)) return true;
                                    if (i == 'sha') {
                                        for (var j of lib.inpile_nature) {
                                            if (event.filterCard({ name: i, nature: j }, player, event)) return true;
                                        }
                                    }
                                }
                            }
                            return false;
                        },
                        chooseButton: {
                            dialog: function (event, player) {
                                var list = [];
                                var suit = event.xinjianying_suit || '', str = get.translation(suit);
                                for (var i of lib.inpile) {
                                    if (i != 'du' && get.type(i, false) == 'basic') {
                                        if (event.filterCard({ name: i }, player, event) && player.countCards('h', card => get.type(card) == 'basic' && get.name(card) != i)) list.push(['基本', str, i]);
                                        if (i == 'sha') {
                                            for (var j of lib.inpile_nature) {
                                                if (event.filterCard({ name: i, nature: j }, player, event) && player.countCards('h', card => get.type(card) == 'basic' && (get.name(card) != i || !get.nature(card) || get.nature(card) != j))) list.push(['基本', str, i, j]);
                                            }
                                        }
                                    }
                                }
                                return ui.create.dialog('兔变', [list, 'vcard']);
                            },
                            check: function (button) {
                                var player = _status.event.player;
                                if (button.link[2] == 'jiu' && !(player.countCards('h', { type: "basic" }) - player.countCards('h', 'jiu') >= 2 && player.countCards('h', "sha") > 0)) return 0;
                                return _status.event.player.getUseValue({ name: button.link[2], nature: button.link[3] });
                            },
                            backup: function (links, player) {
                                var next = {
                                    filterCard: card => {
                                        return get.type(card) == 'basic' && get.name(card) != links[0][2]
                                    },
                                    check: function (card) {
                                        return 7 - _status.event.player.getUseValue(card, null, true);
                                    },
                                    popname: true,
                                    position: 'h',
                                    viewAs: {
                                        name: links[0][2],
                                        nature: links[0][3],
                                    },
                                    /* precontent: function(event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result){
                                        'step 0'
                                        player.chooseBool().set('prompt', player == _status.currentPhase?'是否摸一张牌？':"是否")
                                    }, */
                                };
                                return next;
                            },
                            prompt: function (links) {
                                return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用或打出';
                            },
                        },
                        hiddenCard: (player, name) => {
                            if (get.type(name, 'trick', false) == 'basic') {
                                if (player.countCards('h', card => get.type(card) == 'basic' && get.name(card) != name)) return true;
                            }
                        },
                        ai: {
                            order: 2,
                            expose: 0.5,
                            result: {
                                player: (player) => {
                                    if (_status.event.dying) {
                                        return get.attitude(player, _status.event.dying);
                                    }
                                    if (_status.event.type == 'respondShan') return 1;
                                    var val = Infinity; var hs = player.countCards('h', { type: "basic" }); var max = 3;
                                    if (hs.length == 0) return 0;
                                    for (var card of hs) {
                                        var vl = get.value(card);
                                        if (vl < val) val = vl;
                                    }
                                    if (_status.currentPhase == player) max += (player.needsToDiscard() == 0 ? player.getHandcardLimit() - player.countCards('h') + 1 : 1);
                                    if (get.damageEffect(_status.currentPhase, player, player) > 0) max += 2;
                                    return val <= max ? 1 : 0;
                                }
                            }
                        },
                        group: ['ba_tubian_effect'],
                        subSkill: {
                            effect: {
                                trigger: {
                                    player: ["useCard", "respond"],
                                },
                                charlotte: true,
                                popup: false,
                                filter: (event, player) => {
                                    return event.skill == 'ba_tubian_backup'
                                },
                                check: (event, player) => {
                                    if (player == _status.currentPhase) return true;
                                    return get.damageEffect(_status.currentPhase, player, player) > 0
                                },
                                prompt: (event, player) => {
                                    if (player == _status.currentPhase) return "【兔变】：当前是你的回合，是否摸一张牌？";
                                    else return "【兔变】：当前是" + get.translation(_status.currentPhase) + "的回合，是否对其造成1点伤害？";
                                },
                                content: () => {
                                    if (player == _status.currentPhase) {
                                        player.draw();
                                    } else {
                                        _status.currentPhase.damage()
                                    }
                                }
                            }
                        },
                    },
                    "ba_renxian": {
                        usable: 1,
                        trigger: {
                            global: "damageEnd",
                        },
                        filter: (event, player) => player == event.player || player.inRange(event.player),
                        content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                            'step 0'
                            var cards1 = get.cards();
                            event.color = get.color(cards1);
                            player.showCards(cards1);
                            game.log(player, '将一张', event.color, '牌放入了仁库')
                            game.cardsGotoSpecial(cards1, 'toRenku');
                            'step 1'
                            var cards2 = get.cards();
                            trigger.player.gain(cards2, 'gain2');
                            trigger.player.showCards(cards2);
                            game.log(trigger.player, '摸到了一张', get.color(cards2), '牌')
                            if (get.color(cards2) == event.color) trigger.player.recover();
                        },
                        logTarget: (event, player) => event.player,
                        check: (event, player) => player == event.player || get.attitude(player, event.player) > 0,
                        "prompt2": (event, player) => '将牌堆顶一张牌展示后放入仁库，然后令' + get.translation(event.player) + '摸一张牌并展示之，若二者颜色相同，' + get.translation(event.player) + '恢复1点体力。',
                    },
                    "ba_lingyu": {
                        trigger: {
                            global: ["phaseJieshuBegin", "dying"],
                        },
                        filter: (event, player) => _status.renku.length > 0 && !player.hasSkill('ba_lingyu_roundcount') && event.player != player && event.player.isDamaged() && event.player.countCards('h') > 0,
                        check: (event, player) => {
                            if (get.attitude(player, event.player) <= 2) return false;
                            if (game.hasPlayer(target => get.attitude(player, target) > 2 && (target.hp <= 1 || (target.hp <= 2 && target.countCards('h') < 2))))
                                return event.player.hp <= 1 || (event.player.hp <= 2 && event.player.countCards('h') < 2);
                        },
                        content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                            'step 0'
                            player.showCards(_status.renku, '仁库中的牌');
                            var num1 = 1;
                            for (var _card of _status.renku) {
                                if (get.number(_card) > num1) num1 = get.number(_card);
                            }
                            game.log('仁库中的牌最大的点数为', num1);
                            trigger.player.showHandcards();
                            var num2 = 13;
                            var lestcard = undefined;
                            for (var _card of trigger.player.getCards('h')) {
                                if (get.number(_card) < num2) num2 = get.number(_card);
                                lestcard = _card;
                            }
                            game.log(trigger.player, '手牌最小的点数是', num2);
                            if (num1 % 2 == num2 % 2) {
                                event.equal = true;
                                trigger.player.chooseCard(true, 'h', 1, card => trigger.player.countCards('h', _card => get.number(_card) < get.number(card)) == 0).set('target', trigger.player).set('ai', card => {
                                    return 6 - get.value(card, _status.event.target);
                                }).set('prompt', '请将点数最小的一张牌放入仁库，然后恢复1点体力');
                            } else {
                                event.equal = false;
                                trigger.player.chooseButton(['选择获得一张牌', _status.renku], 1, true).set('ai', button => {
                                    var target = _status.event.target;
                                    if (get.tag(button.link, 'save') && target.isDying()) return 3 + get.value(button.link, target);
                                    return get.value(button.link, target)
                                }).set('target', trigger.player);
                            }
                            'step 1'
                            if (!event.equal) {
                                var cards = result.links;
                                _status.renku.removeArray(cards);
                                game.updateRenku();
                                trigger.player.gain(cards, 'gain2', 'fromRenku');
                                trigger.player.draw();
                            } else {
                                game.cardsGotoSpecial(result.cards, 'toRenku');
                                game.log(trigger.player, '将', result.cards, '放入了仁库')
                                trigger.player.recover();
                            }
                            'step 2'
                            player.addTempSkill('ba_lingyu_roundcount', 'roundStart');
                        },
                        logTarget: (event, player) => event.player,
                        "prompt2": (event, player) => '令' + get.translation(event.player) + '展示手牌，若其中最小的点数和仁库中最大的点数奇偶性相同，则其将一张最小点的牌放入仁库并恢复1点体力，否则其获得一张仁库的牌并摸一张牌。',
                        subSkill: {
                            roundcount: {
                                sub: true,
                                charlotte: true,
                                mark: true,
                                intro: {
                                    content: "本轮已发动过",
                                },
                            },
                        },
                    },
                    "ba_tianjian": {
                        trigger: {
                            global: "phaseBefore",
                            player: "enterGame",
                        },
                        forced: true,
                        filter: function (event, player) {
                            return (event.name != 'phase' || game.phaseNumber == 0) && !lib.inpile.contains('ba_HikarinoKen');
                        },
                        content: () => {
                            var card = game.createCard2('ba_HikarinoKen', 'diamond', 5);
                            ui.cardPile.insertBefore(card, ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
                            game.broadcastAll(function () { lib.inpile.add('ba_HikarinoKen') });
                            game.updateRoundNumber();
                        },
                        group: "ba_tianjian_get",
                        subSkill: {
                            get: {
                                trigger: {
                                    player: "phaseZhunbeiBegin",
                                },
                                filter: function (event, player) {
                                    return player.countCards('e', card => get.subtype(card) == 'equip1') == 0
                                },
                                content: function () {
                                    var card = get.cardPile('ba_HikarinoKen', 'field');
                                    if (card) player.equip(card);
                                },
                                "prompt2": "从场上/牌堆/弃牌堆中获得一张【光之剑】并装备之",
                                check: (event, player) => true,
                                sub: true,
                            },
                        },
                        derivation: ["ba_HikarinoKen_skill"],
                    },
                    "ba_jixue": {
                        enable: ["chooseToUse", "chooseToRespond"],
                        filter: (event, player) => {
                            if (player.getStorage('ba_jixue').length == 0 || player.countCards('h') == 0) return false;
                            for (var name of player.getStorage('ba_jixue')) {
                                if (event.filterCard({ name: name }, player, event)) return true;
                            }
                            return false;
                        },
                        init: (player, skill) => { player.storage[skill] = []; },
                        hiddenCard: (player, name) => player.countCards('h') > 0 && player.getStorage('ba_jixue').contains(name),
                        onremove: true,
                        chooseButton: {
                            dialog: (event, player) => {
                                var vcards = [];
                                var list2 = player.getStorage('ba_jixue');
                                for (var name of list2) {
                                    if (name == 'sha') {
                                        for (var j of lib.inpile_nature) {
                                            vcards.push(['基本', '', name, j]);
                                        }
                                        vcards.push(['基本', '', name])
                                    } else {
                                        if (get.type(name) == 'basic') vcards.push(['基本', '', name]);
                                        if (get.type(name) == 'trick') vcards.push(['锦囊', '', name]);
                                    }
                                }
                                if (vcards.length == 0) return ui.create.dialog('【机学】无可用牌');
                                else return ui.create.dialog('机学', [vcards, 'vcard']);
                            },
                            filter: function (button, player) {
                                if (button.link[2] != 'sha') return _status.event.getParent().filterCard({ name: button.link[2] }, player, _status.event.getParent());
                                return _status.event.getParent().filterCard({ name: button.link[2], nature: button.link[3] }, player, _status.event.getParent());
                            },
                            check: function (button) {
                                var player = _status.event.player;
                                if (player.countCards('hs', button.link[2]) > 0) return 0;
                                if (button.link[2] == 'wugu') return 0;
                                var effect = player.getUseValue(button.link[2]);
                                if (effect > 0) return effect;
                                return 0;
                            },
                            backup: function (links, player) {
                                return {
                                    filterCard: true,
                                    selectCard: 1,
                                    popname: true,
                                    check: function (card) {
                                        return 6 - get.value(card);
                                    },
                                    position: 'hes',
                                    viewAs: { name: links[0][2], nature: links[0][3] },
                                    onuse: function (result, player) {
                                        player.storage.ba_jixue.remove(result.card.name);
                                        player.draw();
                                    },
                                }
                            },
                            prompt: function (links, player) {
                                return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                            },
                        },
                        ai: {
                            result: {
                                player: 1,
                            },
                            order: 4,
                            threaten: 1.2,
                        },
                        mark: true,
                        intro: {
                            content: (storage, player, skill) => {
                                if (player.getStorage('ba_jixue').length == 0) return "无记录";
                                else return "记录牌名：" + get.translation(player.getStorage('ba_jixue'));
                            },
                        },
                        group: "ba_jixue_record",
                        subSkill: {
                            record: {
                                trigger: {
                                    global: "useCard",
                                },
                                filter: (event, player) => event.player != player && player.inRange(event.player) && !player.getStorage('ba_jixue').contains(get.name(event.card)) && player.getStorage('ba_jixue').length <= 2 && player.countCards('hes') > 0 && ['basic', 'trick'].contains(get.type(event.card)),
                                content: () => {
                                    'step 0'
                                    player.chooseToDiscard(get.prompt('ba_jixue'), 'hes', 1).set('prompt2', '弃一张牌，记录' + get.translation(trigger.card) + '的牌名').set('ai', (card) => {
                                        if (get.name(trigger.card) == 'du') return 0;
                                        else if (get.name(trigger.card) == 'shan' && player.countCards('h', "shan") == 0) return 6 - get.value(card);
                                        else {
                                            return 2.2 + get.value(trigger.card) - get.value(card);
                                        }
                                    })
                                    'step 1'
                                    if (result.bool) {
                                        player.logSkill('ba_jixue', trigger.player);
                                        game.log(player, '记录了', trigger.card, '的牌名');
                                        player.storage.ba_jixue.add(get.name(trigger.card));
                                    }
                                },
                                direct: true,
                                popup: false,
                                sub: true,
                            },
                        },
                    },
                    "ba_lunyi": {
                        trigger: {
                            global: "phaseBefore",
                            player: "enterGame",
                        },
                        forced: true,
                        locked: true,
                        content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                            if (!player.isDisabled(3)) {
                                player.disableEquip(3);
                            }
                            if (!player.isDisabled(4)) {
                                player.disableEquip(4);
                            }
                            game.updateRoundNumber();
                        },
                        filter: function (event, player) {
                            return (event.name != 'phase' || game.phaseNumber == 0);
                        },
                        mod: {
                            globalFrom: (from, to, now) => {
                                return now - 1;
                            },
                            globalTo: (from, to, now) => {
                                return now + 1;
                            },
                            cardname: (card, player) => {
                                if (get.subtype(card.name) == 'equip3' || get.subtype(card.name) == 'equip4') return 'wuzhong';
                            },
                        },
                    },
                    "ba_heishu": {
                        enable: "phaseUse",
                        usable: 2,
                        filter: (event, player) => { return game.hasPlayer(target => target != player && player.inRange(target) && target.countCards('h') > 0) },
                        filterTarget: (card, player, target) => target != player && player.inRange(target) && target.countCards('h') > 0,
                        content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                            'step 0'
                            var forced = target.hasCard(i => player.hasUseTarget(i) && (get.type2(i) != 'equip'), 'h');
                            player.choosePlayerCard(target, 'h', 'visible', forced, '获得并使用其中一张牌').set('filterButton', button => {
                                return _status.event.player.hasUseTarget(button.link) && (get.type2(button.link) != 'equip');
                            }).set('ai', button => {
                                return _status.event.player.getUseValue(button.link);
                            });
                            'step 1'
                            if (result.bool) {
                                var card = result.links[0];
                                event.card = card;
                                player.gain(card, 'giveAuto');
                            }
                            else event.finish();
                            'step 2'
                            if (get.position(card) == 'h' && get.owner(card) == player && player.hasUseTarget(card)) {
                                if (get.name(card, player) == 'sha') var next = player.chooseUseTarget(card, true, false, 'nodistance');
                                else var next = player.chooseUseTarget(card, true, false, 'nodistance');
                                // next.directHit.addArray(game.players)
                            }
                        },
                        ai: {
                            result: {
                                player: 1,
                                target: function (player, target) {
                                    return -Math.sqrt(target.countCards('h'));
                                },
                            },
                            order: 3,
                            expose: 0.2,
                        },
                        group: 'ba_heishu_1',
                        subSkill: {
                            1: {
                                trigger: { player: "useCard" },
                                filter: (event, player) => {
                                    return event.getParent(2).name == 'ba_heishu';
                                },
                                forced: true,
                                sub: true,
                                charlotte: true,
                                content: () => {
                                    trigger.directHit.addArray(game.players);
                                    game.log(trigger.card, '不可被响应');
                                }
                            }
                        }
                    },
                    "ba_chizhi": {
                        usable: 1,
                        enable: "phaseUse",
                        filterTarget: function (card, player, target) {
                            return player != target;
                        },
                        content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                            'step 0'
                            event.card = get.cards();
                            player.gain(event.card);
                            target.chooseBool('请猜测' + get.translation(player) + "摸到的牌是不是锦囊牌").set('ai', () => Math.random() > 0.5);
                            'step 1'
                            game.log(target, '猜测', player, (result.bool ? "摸到" : "没摸到"), '锦囊牌');
                            player.showCards(event.card)
                            event.isright = ((get.type2(event.card) == 'trick') == result.bool);
                            'step 2'
                            target.popup((event.isright ? '猜对' : '猜错'), 'fire');
                            if (!target.hasSkill('ba_chizhi_1')) { target.addSkill('ba_chizhi_1'); target.storage.ba_chizhi = player; }
                            if (event.isright) target.storage.ba_chizhi_1++;
                            else target.storage.ba_chizhi_1--;
                        },
                        subSkill: {
                            "1": {
                                trigger: {
                                    source: "damageAfter",
                                },
                                filter: (event, player) => player.storage.ba_chizhi == event.player,
                                init: (player, skill) => {
                                    player.storage[skill] = 0;
                                },
                                onremove: (player, skill) => {
                                    delete player.storage[skill];
                                    if (player.storage.ba_chizhi) delete player.storage.ba_chizhi;
                                },
                                locked: true,
                                charlotte: true,
                                forced: true,
                                mark: true,
                                intro: {
                                    content: (d, player, d2) => "下一次对" + get.translation(player.storage.ba_chizhi) + '的伤害' + (player.storage.ba_chizhi_1 < 0 ? '-' : '+') + Math.abs(player.storage.ba_chizhi_1).toString(),
                                },
                                content: () => {
                                    'step 0'
                                    trigger.num += player.storage.ba_chizhi_1;
                                    if (trigger.num < 0) trigger.num = 0;
                                    'step 1'
                                    player.removeSkill('ba_chizhi_1');
                                },
                                sub: true,
                            },
                        },
                    },
                    "ba_baoshe": {
                        trigger: { player: "phaseJieshuBegin" },
                        filter: (event, player) => {
                            if (player.countCards('he', card => get.number(card) % 2 == 1) < 2) return false;
                            var evts = player.getHistory("sourceDamage", evt => evt.player != player && evt.num > 0)
                            var num = 0
                            for (var evt of evts) {
                                num += evt.num
                            }
                            return num <= 2
                        },
                        content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                            'step 0'
                            player.chooseCardTarget({
                                prompt: get.prompt(event.name),
                                prompt2: "弃置两张奇数牌，对一名角色使用一张伤害基数为2的【杀】",
                                filterTarget: (card, player, target) => {
                                    return player.canUse("sha", target, true)
                                },
                                filterCard: (card) => { return get.number(card) % 2 == 1 },
                                selectCard: 2,
                                selectTarget: 1,
                                position: 'hes',
                                ai2: target => {
                                    var player = _status.event.player;
                                    if (get.attitude(player, target) > 0) return -1;
                                    var num = 1;
                                    if ((!target.mayHaveShan() || player.hasSkillTag('directHit_ai', true, {
                                        target: target,
                                        card: { name: 'sha' },
                                    }, true)) && !target.hasSkillTag('filterDamage', null, {
                                        player: player,
                                        card: { name: 'sha' },
                                    })) {
                                        num = 1.3;
                                    }
                                    return get.effect(target, { name: 'sha' }, player, player) * num;
                                },
                                ai1: (card) => {
                                    return 7 - get.value(card)
                                }
                            })
                            'step 1'
                            if (result.bool) {
                                player.logSkill(event.name, result.targets)
                                player.discard(result.cards)
                                player.useCard({ name: "sha", isCard: true }, result.targets, false).baseDamage = 2
                            }
                        },
                        direct: true,
                        popup: false,
                        group: ['ba_baoshe_2'],
                        subSkill: {
                            2: {
                                trigger: { source: "damageEnd" },
                                filter: (event, player) => { return event.getParent().name != 'ba_baoshe_2' && event.num > 1 && event.player != player },
                                direct: true,
                                popup: false,
                                sub: true,
                                content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                                    'step 0'
                                    event.num = Math.ceil(trigger.num / 3)
                                    event.num2 = Math.ceil(trigger.num / 2)
                                    player.chooseTarget((card, player, target) => {
                                        return player != target && target != trigger.player
                                    }, [1, 2], '###是否发动【爆射】②？###对' + get.translation(trigger.player) + '造成' + get.cnNumber(event.num2) + "点伤害，再选择至多两名角色，对其造成" + get.cnNumber(event.num) + "点伤害").set('ai', target => {
                                        var player = get.player()
                                        var target2 = _status.event.target2
                                        if (event.num > 1 && get.attitude(player, target2) <= 0) return -1;
                                        if (event.num > 1 && get.attitude(player, target) > 0) return -1;
                                        return get.damageEffect(target, player, player)
                                    }).set('target2', trigger.player)
                                    'step 1'
                                    if (result.bool) {
                                        var _tgts = result.targets.slice(0)
                                        _tgts.add(trigger.player)
                                        player.logSkill(event.name, _tgts)
                                        trigger.player.damage(event.num2)
                                        for (var _tg of result.targets) {
                                            _tg.damage(event.num)
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "ba_weiling": {
                        usable: 1,
                        enable: "phaseUse",
                        filter: (event, player) => player.countCards('h', { color: "black" }) > 0 && game.hasPlayer(target => target != player && player.inRange(target) && (target.countCards('h') < player.countCards('h') - 2 || target.countCards('h') == 0)),
                        filterCard: {
                            color: "black",
                        },
                        check: card => {
                            return 8 - get.value(card);
                        },
                        position: "hes",
                        filterTarget: (card, player, target) => target != player && player.inRange(target) && (target.countCards('h') < player.countCards('h') - 2 || target.countCards('h') == 0),
                        discard: false,
                        content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                            'step 0'
                            target.gain(cards, 'give');
                            player.chooseControl(['对其造成1点伤害', '令其对指定的一名其他角色造成伤害']).set('prompt', '选择一个将对' + get.translation(target) + '实施的选项：');
                            'step 1'
                            if (result.control == '对其造成1点伤害') {
                                target.damage();
                                event.finish();
                            } else {
                                if (!game.hasPlayer(_target => _target != target && _target != player)) event.finish();
                                else {
                                    var _target = target
                                    player.chooseTarget((card, player, target) => {
                                        return player != target && target != _target;
                                    }).set('prompt', '选择一名其他角色，令' + get.translation(_target) + '对其造成1点伤害。').set('ai', (target) => {
                                        return get.damageEffect(target, _target, player);
                                    })
                                }
                            }
                            'step 2'
                            if (result.bool) {
                                result.targets[0].damage(target);
                            }
                        },
                        ai: {
                            result: {
                                player: (player, target) => {
                                    if (get.damageEffect(target, player, player) > 0) return get.damageEffect(target, player, player) - 0.3;
                                    return 1;
                                },
                                target: (player, target) => {
                                    if (get.damageEffect(target, player, target) < 0) return get.damageEffect(target, player, target) + 0.3;
                                    return 0.3;
                                },
                            },
                            order: 3,
                        },
                    },
                    "ba_chonge": {
                        trigger: {
                            global: "damageAfter",
                        },
                        filter: (event, player) => {
                            if (!event.source) return false
                            if (event.source == player || event.player == player) return false;
                            if (event.source.countCards('h') >= player.countCards('h')) return true;
                            var num1 = 0, num2 = 0, dm1 = player.getAllHistory('sourceDamage'), dm2 = event.source.getAllHistory('sourceDamage');
                            if (dm1.length) for (var evt of dm1) if (evt != event) num1 += evt.num;
                            if (dm2.length) for (var evt of dm2) if (evt != event) num2 += evt.num;
                            return num1 <= num2;
                        },
                        direct: true,
                        popup: false,
                        usable: 2,
                        content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                            'step 0'
                            var _target = trigger.source;
                            var _player = player;
                            player.chooseControl(['摸两张牌再弃一张牌', '令其摸两张牌', 'cancel2']).set('prompt', get.prompt(event.name, trigger.source)).set('ai', () => {
                                if (get.attitude(_player, _target) >= 2) return '令其摸两张牌';
                                else return '摸两张牌再弃一张牌';
                            })
                            'step 1'
                            if (result.control != 'cancel2') {
                                player.logSkill(event.name, trigger.source);
                                if (result.control == '摸两张牌再弃一张牌') {
                                    player.draw(2);
                                    player.chooseToDiscard(1, true, 'hes');
                                } else {
                                    // player.draw(2);
                                    trigger.source.draw(2);
                                }
                            }
                        },
                    },
                    "ba_quedi": {
                        audio: "dbquedi",
                        trigger: {
                            player: "useCardToPlayered",
                        },
                        direct: true,
                        usable: 1,
                        filter: function (event, player) {
                            return (event.card.name == 'sha' || event.card.name == 'juedou') && event.targets.length == 1 &&
                                (event.target.countGainableCards(player, 'h') > 0 || player.hasCard(function (i) {
                                    return _status.connectMode || get.type(i, player) == 'basic' && lib.filter.cardDiscardable(i, player, 'ba_quedi');
                                }, 'h'));
                        },
                        content: function () {
                            'step 0'
                            var target = trigger.target;
                            event.target = target;
                            var list = [];
                            if (target.countGainableCards(player, 'h') > 0) list.push('选项一');
                            if (player.hasCard(function (i) {
                                return get.type(i, player) == 'basic' && lib.filter.cardDiscardable(i, player, 'ba_quedi');
                            }, 'h')) list.push('选项二');
                            list.push('背水！');
                            list.push('cancel2');
                            player.chooseControl(list).set('choiceList', [
                                '获得' + get.translation(target) + '的一张手牌',
                                '弃置一张基本牌并令' + get.translation(trigger.card) + '伤害+1',
                                '背水！失去1点体力并执行所有选项',
                            ]).set('prompt', get.prompt('dbquedi', target)).set('ai', function () {
                                var evt = _status.event.getTrigger(), player = evt.player, target = evt.target, card = evt.card;
                                if (get.attitude(player, target) > 0) return 'cancel2';
                                var bool1 = target.countGainableCards(player, 'h') > 0;
                                var bool2 = player.hasCard(function (i) {
                                    return get.type(i, player) == 'basic' && lib.filter.cardDiscardable(i, player, 'ba_quedi') && get.value(card, player) < 5;
                                }, 'h') && !target.hasSkillTag('filterDamage', null, {
                                    player: player,
                                    card: card,
                                });
                                if (bool1 && bool2 && (target.hp <= 2 || (player.isDamaged() && player.hp > 2))) return '背水！';
                                if (bool1) return '选项一';
                                if (bool2) return '选项二';
                                return 'cancel2';
                            });
                            'step 1'
                            if (result.control != 'cancel2') {
                                player.logSkill('ba_quedi', target);
                                event.control = result.control;
                                if (event.control == '背水！') player.loseHp();
                            }
                            else {
                                player.storage.counttrigger.ba_quedi--;
                                event.finish();
                            }
                            'step 2'
                            if ((event.control == '选项一' || event.control == '背水！') && target.countGainableCards(player, 'h') > 0) player.gainPlayerCard(target, true, 'h');
                            'step 3'
                            if ((event.control == '选项二' || event.control == '背水！') && player.hasCard(function (i) {
                                return get.type(i, player) == 'basic' && lib.filter.cardDiscardable(i, player, 'ba_quedi');
                            }, 'h')) {
                                player.chooseToDiscard('h', '弃置一张基本牌', { type: 'basic' }, true);
                            }
                            else event.finish();
                            'step 4'
                            if (result.bool) trigger.getParent().baseDamage++;
                        },
                        ai: {
                            "directHit_ai": true,
                            skillTagFilter: function (player, tag, arg) {
                                if (!arg || !arg.card || !arg.target || (arg.card.name != 'sha' && arg.card.name != 'juedou')) return false;
                                if (player.storage.counttrigger && player.storage.counttrigger.dbquedi && player.storage.counttrigger.dbquedi > 0) return false;
                                if (arg.target.countCards('h') == 1 && (arg.card.name != 'sha' || !arg.target.getEquip('bagua') || player.hasSkillTag('unequip', false, {
                                    name: arg.card ? arg.card.name : null,
                                    target: arg.target,
                                    card: arg.card
                                }) || player.hasSkillTag('unequip_ai', false, {
                                    name: arg.card ? arg.card.name : null,
                                    target: arg.target,
                                    card: arg.card
                                }))) return true;
                                return false;
                            },
                        },
                    },
                    "ba_fuji": {
                        enable: "phaseUse",
                        filter: (event, player) => {
                            return player.getExpansions('ba_fuji').length <= 2;
                        },
                        selectCard: 1,
                        position: 1,
                        filterCard: card => true,
                        discard: false,
                        check: card => {
                            var player = _status.event.player;
                            var colors = [];
                            if (player.getExpansions('ba_fuji').length) for (var _card of player.getExpansions('ba_fuji')) {
                                colors.add(get.color(_card));
                            }
                            if (colors.length && !colors.includes(get.color(card))) return 7 - get.value(card);
                            return 5 - get.value(card);
                        },
                        content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                            player.addToExpansion(cards, 'gain2').gaintag.add('ba_fuji');
                        },
                        group: ["ba_fuji_1"],
                        subSkill: {
                            "1": {
                                sub: true,
                                trigger: {
                                    target: "useCardToTargeted",
                                },
                                filter: (event, player) => {
                                    if (player.getExpansions('ba_fuji').length == 0 || get.color(event.card) == 'none' || !get.color(event.card)) return false;
                                    var colors = [];
                                    for (var _card of player.getExpansions('ba_fuji')) {
                                        colors.add(get.color(_card));
                                    }
                                    return colors.includes(get.color(event.card));
                                },
                                direct: true,
                                popup: false,
                                content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                                    'step 0'
                                    player.chooseButton(['选择将一张牌当作杀对' + get.translation(trigger.player) + '使用', player.getExpansions('ba_fuji')]).set('ai', button => {
                                        var player = _status.event.player;
                                        return get.effect(trigger.player, { name: "sha", nature: "thunder", card: button.link }, player, player);
                                    }).set('filterButton', button => {
                                        return get.color(button.link) == get.color(trigger.card)
                                    })
                                    'step 1'
                                    if (result.bool) {
                                        player.logSkill(event.name, trigger.player);
                                        player.useCard({ name: "sha", nature: "thunder" }, result.links, trigger.player, false);
                                    }
                                    'step 2'
                                    var num = 1;
                                    if (trigger.player.hasHistory('damage', evt => evt.getParent(4) == event)) num++;
                                    player.draw(num);
                                },
                            },
                        },
                        mark: true,
                        intro: {
                            content: "expansion",
                            markcount: "expansion",
                        },
                        ai: {
                            order: 3,
                            result: {
                                player: 1,
                            },
                        },
                    },
                    "ba_liwu": {
                        trigger: {
                            global: "phaseUseBegin",
                        },
                        filter: (event, player) => event.player != player && player.countCards('he') > 0 && event.player.inRange(player),
                        popup: false,
                        direct: true,
                        content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                            'step 0'
                            var goon = get.attitude(player, trigger.player);
                            player.chooseToDiscard(1, get.prompt2(event.name, trigger.player), 'he').set('ai', card => {
                                if (goon > 0) return -1;
                                return 6 - get.value(card);
                            });
                            'step 1'
                            if (result.bool) {
                                player.logSkill(event.name, trigger.player);
                                trigger.player.addTempSkill('ba_liwu_1');
                                trigger.player.addTempSkill('ba_liwu_2');
                                trigger.player.storage.ba_liwu_1 = player;
                            }
                        },
                        subSkill: {
                            "1": {
                                trigger: {
                                    player: "useCardToPlayer",
                                    target: "useCardToTarget",
                                },
                                filter: (event, player) => {
                                    if (event.player == player) return event.target == player.storage.ba_liwu_1;
                                    else return event.player == player.storage.ba_liwu_1;
                                },
                                content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                                    trigger.getParent().directHit.push(trigger.target);
                                },
                                logTarget: (event, player) => {
                                    if (event.player == player) return event.target;
                                    else return player;
                                },
                                forced: true,
                                sub: true,
                                init: (player, skill) => { player.storage[skill] = player; },
                                onremove: true,
                            },
                            "2": {
                                trigger: {
                                    player: "useCardToPlayer",
                                },
                                filter: (event, player) => {
                                    return event.target != player.storage.ba_liwu_1 && event.target != player && event.getParent().targets.length == 1 && player.countCards('he') > 0;
                                },
                                content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                                    player.chooseToDiscard('he', 1, true, get.translation(player.storage.ba_liwu_1) + '发动了技能【' + get.translation(event.name) + '】，你需弃置一张牌');
                                },
                                forced: true,
                                sub: true,
                                ai: {
                                    effect: {
                                        player: (card, player, target, result1) => {
                                            if (player.storage.ba_liwu_1 && target != player.storage.ba_liwu_1) return result1 - 2;
                                        },
                                    },
                                },
                            },
                        },
                    },
                    "ba_kuanglie": {
                        locked: false,
                        zhuanhuanji: true,
                        marktext: "☯",
                        mark: true,
                        intro: {
                            content: function (storage, player, skill) {
                                if (player.storage.ba_kuanglie == true) return '当你造成伤害后，若你已受伤，你摸' + get.cnNumber(player.maxHp - player.hp) + '张牌';
                                return '当你不因此技能造成伤害后，你恢复1点体力或选择指定一名其他角色，对其造成1点伤害，若该角色为受到伤害的角色，改为获取其' + get.cnNumber(player.maxHp - player.hp) + '张牌。';
                            },
                        },
                        trigger: {
                            source: "damageAfter",
                        },
                        filter: (event, player) => {
                            if (player.storage.ba_kuanglie) return player.maxHp - player.hp > 0
                            else return event.getParent().name != 'ba_kuanglie';
                        },
                        popup: false,
                        direct: true,
                        content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                            'step 0'
                            if (player.storage.ba_kuanglie == true) {
                                player.chooseBool('###' + get.prompt(event.name) + '###你可以摸' + get.cnNumber(player.maxHp - player.hp) + '张牌').set('ai', () => true)
                            }
                            else {
                                var _target = trigger.player;
                                player.chooseTarget((card, player, target) => {
                                    if (player.hp == player.maxHp && target == player) return false;
                                    return true;
                                }, '选择一名角色，若为自己，恢复1点体力；若为' + get.translation(_target) + '获取其' + get.cnNumber(player.maxHp - player.hp) + "张牌；" + '否则对其造成1点伤害。').set('ai', target => {
                                    var player = _status.event.player;
                                    if (player == target) return get.recoverEffect(player, player, player);
                                    else if (target == _target) {
                                        if (get.attitude(player, target) > 0) {
                                            if (target.countGainableCards(player, 'j') > 0) return 3;
                                            return -1;
                                        }
                                        if (_target.countGainableCards(player, 'he') == player.maxHp - player.hp + 1) return 3;
                                        if (_target.countGainableCards(player, 'he') == player.maxHp - player.hp) return 4.5;
                                        if (_target.countGainableCards('h') == 0 && _target.countGainableCards(player, 'he') > 0) return 1.5;
                                        if (_target.countGainableCards(player, 'he') == 1) return 1;
                                        if (_target.countGainableCards(player, 'he') == 0) return 0;
                                        return 1.5;
                                    } else return get.damageEffect(target, player, player);
                                })
                            }
                            'step 1'
                            if (player.storage.ba_kuanglie) {
                                if (result.bool) {
                                    player.logSkill(event.name);
                                    player.draw(player.maxHp - player.hp);
                                } else event.finish();
                            } else {
                                if (result.bool) {
                                    player.logSkill(event.name, result.targets)
                                    event.target = result.targets[0];
                                    if (event.target == trigger.player) player.gainPlayerCard([0, player.maxHp - player.hp], event.target, 'hej');
                                    else if (event.target == player) player.recover();
                                    else event.target.damage('nocard');
                                } else event.finish()
                            }
                            'step 2'
                            player.changeZhuanhuanji(event.name);
                        },
                        ai: {
                            maixie: true,
                        },
                    },
                    "ba_xungong": {
                        enable: "chooseToUse",
                        viewAsFilter: function (player) {
                            return player.countCards('hes') >= ((player.hp > 0) ? player.hp : 1);
                        },
                        viewAs: {
                            name: "sha",
                        },
                        filterCard: true,
                        position: "hes",
                        selectCard: () => {
                            var player = _status.event.player;
                            return player.hp;
                        },
                        check: function (card) {
                            return 7 - ui.selected.cards.length - get.value(card);
                        },
                        ai: {
                            order: 1,
                            respondSha: true,
                            skillTagFilter: function (player, tag) {
                                return player.countCards('hes') > player.hp;
                            },
                            yingbian: function (card, player, targets, viewer) {
                                if (get.attitude(viewer, player) <= 0) return 0;
                                var base = 0, hit = false;
                                if (get.cardtag(card, 'yingbian_hit')) {
                                    hit = true;
                                    if (targets.filter(function (target) {
                                        return target.hasShan() && get.attitude(viewer, target) < 0 && get.damageEffect(target, player, viewer, get.nature(card)) > 0;
                                    })) base += 5;
                                }
                                if (get.cardtag(card, 'yingbian_all')) {
                                    if (game.hasPlayer(function (current) {
                                        return !targets.contains(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
                                    })) base += 5;
                                }
                                if (get.cardtag(card, 'yingbian_damage')) {
                                    if (targets.filter(function (target) {
                                        return get.attitude(player, target) < 0 && (hit || !target.mayHaveShan() || player.hasSkillTag('directHit_ai', true, {
                                            target: target,
                                            card: card,
                                        }, true)) && !target.hasSkillTag('filterDamage', null, {
                                            player: player,
                                            card: card,
                                            jiu: true,
                                        })
                                    })) base += 5;
                                }
                                return base;
                            },
                            canLink: function (player, target, card) {
                                if (!target.isLinked() && !player.hasSkill('wutiesuolian_skill')) return false;
                                if (target.mayHaveShan() && !player.hasSkillTag('directHit_ai', true, {
                                    target: target,
                                    card: card,
                                }, true)) return false;
                                if (player.hasSkill('jueqing') || player.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
                                return true;
                            },
                            basic: {
                                useful: [5, 3, 1],
                                value: [5, 3, 1],
                            },
                            result: {
                                target: function (player, target, card, isLink) {
                                    var eff = function () {
                                        if (!isLink && player.hasSkill('jiu')) {
                                            if (!target.hasSkillTag('filterDamage', null, {
                                                player: player,
                                                card: card,
                                                jiu: true,
                                            })) {
                                                if (get.attitude(player, target) > 0) {
                                                    return -7;
                                                }
                                                else {
                                                    return -4;
                                                }
                                            }
                                            return -0.5;
                                        }
                                        return -1.5;
                                    }();
                                    if (!isLink && target.mayHaveShan() && !player.hasSkillTag('directHit_ai', true, {
                                        target: target,
                                        card: card,
                                    }, true)) return eff / 1.2;
                                    return eff;
                                },
                            },
                            tag: {
                                respond: 1,
                                respondShan: 1,
                                damage: function (card) {
                                    if (card.nature == 'poison') return;
                                    return 1;
                                },
                                natureDamage: function (card) {
                                    if (card.nature) return 1;
                                },
                                fireDamage: function (card, nature) {
                                    if (card.nature == 'fire') return 1;
                                },
                                thunderDamage: function (card, nature) {
                                    if (card.nature == 'thunder') return 1;
                                },
                                poisonDamage: function (card, nature) {
                                    if (card.nature == 'poison') return 1;
                                },
                            },
                        },
                        subSkill: {
                            "1": {
                                trigger: {
                                    player: "useCard1",
                                },
                                shaRelated: true,
                                content: () => {
                                    player.loseHp();
                                    trigger.directHit.addArray(game.players);
                                },
                                filter: (event, player) => {
                                    return event.card && get.name(event.card) == 'sha';
                                },
                                check: (event, player) => {
                                    if (player.hp == 1 && !player.hasCard('h', card => get.tag(card, 'save'))) return false;
                                    var eff = 0
                                    for (var target of event.targets) {
                                        if (target.countCards("h") == 0) eff -= 1
                                        else eff += (-get.effect(player, { name: "losehp" }, player, player) < get.effect(target, { name: "sha" }, player, player)) ? 1 : -1;
                                    }
                                    return eff >= 0
                                },
                                tag: {
                                    directHit: true,
                                    skillTagFilter: (player, tag, arg) => {
                                        return (player.hp > 1 || (player.hp == 1 && player.hasCard('h', card => get.tag(card, 'save')))) && arg.card.name == 'sha'
                                    },
                                },
                                sub: true,
                            },
                            "2": {
                                trigger: {
                                    player: "phaseUseBegin",
                                },
                                filter: (event, player) => { return true },
                                locked: true,
                                popup: false,
                                charlotte: true,
                                forced: true,
                                init: (player, skill) => { player.storage[skill] = 0; },
                                content: () => {
                                    player.storage[event.name] = player.hp;
                                    game.log(player, '本回合的出杀次数是：', player.hp)
                                },
                                mod: {
                                    cardUsable: (card, player, num) => {
                                        if (card.name == 'sha') return num += player.storage['ba_xungong_2'];
                                    },
                                },
                                onremove: true,
                                sub: true,
                            },
                        },
                        group: ["ba_xungong_1", "ba_xungong_2"],
                    },
                    "ba_poxi": {
                        audio: "drlt_poxi",
                        enable: "phaseUse",
                        usable: 1,
                        filterTarget: function (card, player, target) {
                            return target != player && target.countCards('h') > 0;
                            //return target!=player;
                        },
                        content: function () {
                            'step 0'
                            event.list1 = [];
                            event.list2 = [];
                            if (player.countCards('h') > 0) {
                                var chooseButton = player.chooseButton(3, ['你的手牌', player.getCards('h'), get.translation(target.name) + '的手牌', target.getCards('h')]);
                            }
                            else {
                                var chooseButton = player.chooseButton(3, [get.translation(target.name) + '的手牌', target.getCards('h')]);
                            }
                            chooseButton.set('target', target);
                            chooseButton.set('ai', function (button) {
                                var player = _status.event.player;
                                var target = _status.event.target;
                                var ps = [];
                                var ts = [];
                                for (var i = 0; i < ui.selected.buttons.length; i++) {
                                    var card = ui.selected.buttons[i].link;
                                    if (target.getCards('h').contains(card)) ts.push(card);
                                    else ps.push(card);
                                }
                                var card = button.link;
                                var owner = get.owner(card);
                                var val = get.value(card) || 1;
                                if (owner == target) {
                                    if (ts.length > 1) return 0;
                                    if (ts.length == 0 || player.hp > 3) return val;
                                    return 2 * val;
                                }
                                return 7 - val;
                            });
                            chooseButton.set('filterButton', function (button) {
                                for (var i = 0; i < ui.selected.buttons.length; i++) {
                                    if (get.suit(button.link) == get.suit(ui.selected.buttons[i].link)) return false;
                                };
                                return true;
                            });
                            'step 1'
                            if (result.bool) {
                                var list = result.links;
                                for (var i = 0; i < list.length; i++) {
                                    if (get.owner(list[i]) == player) {
                                        event.list1.push(list[i]);
                                    } else {
                                        event.list2.push(list[i]);
                                    };
                                };
                                if (event.list1.length && event.list2.length) {
                                    game.loseAsync({
                                        lose_list: [
                                            [player, event.list1],
                                            [target, event.list2]
                                        ],
                                        discarder: player,
                                    }).setContent('discardMultiple');
                                }
                                else if (event.list2.length) {
                                    target.discard(event.list2);
                                }
                                else player.discard(event.list1);
                            };
                            'step 2'
                            if (event.list1.length + event.list2.length == 3) {
                                if (event.list1.length == 0) player.loseMaxHp();
                                if (event.list1.length == 2) player.recover();
                                if (event.list1.length == 3) player.draw(3);
                            };
                        },
                        ai: {
                            order: 13,
                            result: {
                                target: function (target, player) {
                                    return -1;
                                },
                            },
                        },
                    },
                    "ba_jizhan": {
                        forced: true,
                        locked: true,
                        trigger: {
                            player: "useCard",
                        },
                        filter: function (event, player) {
                            return event.card && (get.type(event.card) == 'trick' || get.type(event.card) == 'basic' && !['shan', 'tao', 'jiu', 'du'].contains(event.card.name)) && game.hasPlayer(function (current) {
                                return current != player && get.distance(player, current) <= 1;
                            });
                        },
                        content: function () {
                            trigger.directHit.addArray(game.filterPlayer(function (current) {
                                return current != player && get.distance(player, current) <= 1;
                            }));
                            if (get.info(trigger.card).usable && trigger.addCount !== false) {
                                var bjr = true;
                                for (var target of trigger.targets) {
                                    if (get.distance(player, target) > 1 || player == target) bjr = false;
                                }
                                if (bjr) {
                                    trigger.addCount = false;
                                    player.getStat().card[get.name(trigger.card)]--;
                                }
                            }
                        },
                        ai: {
                            "directHit_ai": true,
                            skillTagFilter: function (player, tag, arg) {
                                return get.distance(player, arg.target) <= 1;
                            },
                        },
                        mod: {
                            globalFrom: function (from, to, distance) {
                                return distance - 1;
                            },
                            cardUsableTarget: (card, player, target) => {
                                if (get.distance(player, target) <= 1) return true;
                            },
                        },
                        group: ["ba_jizhan_1"],
                        subSkill: {
                            "1": {
                                frequent: true,
                                content: () => {
                                    players = game.filterPlayer(target => target != player && player.inRange(target) && target.hp < target.maxHp)
                                    trigger.num += players.length;
                                },
                                filter: (event, player) => { return game.hasPlayer(target => target != player && player.inRange(target) && target.hp < target.maxHp) && (!event.numFixed); },
                                trigger: {
                                    player: "phaseDrawBegin2",
                                },
                                charlotte: true,
                                sub: true,
                            },
                        },
                    },
                    "ba_chuanyang": {
                        shaRelated: true,
                        mod: {
                            targetInRange: function (card, player, target) {
                                if (card.name == 'sha' && typeof get.number(card) == 'number') {
                                    if (get.distance(player, target) <= get.number(card)) return true;
                                }
                            },
                        },
                        trigger: {
                            global: ["useCardAfter", "respondAfter"],
                        },
                        filter: (event, player) => {
                            return ['sha', 'shan'].includes(get.name(event.card)) && event.cards.filterInD().length > 0 && (player == event.player || player.inRange(event.player)) && player.getExpansions("ba_chuanyang").length <= 6;
                        },
                        forced: true,
                        content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                            player.addToExpansion(trigger.cards.filterInD(), 'gain').gaintag.add(event.name);
                        },
                        // mark: true,
                        marktext: "穿",
                        intro: {
                            markcount: "expansion",
                            content: "expansion",
                        },
                        group: ["ba_chuanyang_1"],
                        subSkill: {
                            "1": {
                                shaRelated: true,
                                sub: true,
                                popup: false,
                                direct: true,
                                trigger: {
                                    player: "useCardToTarget",
                                },
                                filter: (event, player) => {
                                    if (event.card.name != 'sha') return false;
                                    return player.getExpansions('ba_chuanyang').length > 0
                                },
                                content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                                    'step 0'
                                    var _target = trigger.target
                                    player.chooseButton(['是否发动【穿杨】弃置若干张“穿”？', player.getExpansions('ba_chuanyang')], [0, 3], button => {
                                        var player = _status.event.player;
                                        if (get.attitude(player, _target) > 0) return -1;
                                        return get.rand(2, 2.5);
                                    })
                                    'step 1'
                                    if (result.bool) {
                                        player.logSkill(event.name, trigger.target);
                                        player.loseToDiscardpile(result.links)
                                        if (result.links.length >= 1) trigger.getParent().directHit.push(trigger.target);
                                        if (result.links.length >= 2) {
                                            var id = trigger.target.playerid;
                                            var map = trigger.getParent().customArgs;
                                            if (!map[id]) map[id] = {};
                                            if (typeof map[id].extraDamage != 'number') {
                                                map[id].extraDamage = 0;
                                            }
                                            map[id].extraDamage++;
                                        }
                                        if (result.links.length == 3) {
                                            if (!trigger.target.hasSkill('fengyin')) trigger.target.addTempSkill('fengyin');
                                        }
                                    }
                                },
                            },
                        },
                    },
                    "ba_yuzu": {
                        trigger: {
                            player: "phaseJieshuBegin",
                        },
                        filter: (event, player) => { return player.countCards('he', { color: "black" }) },
                        direct: true,
                        popup: false,
                        content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                            'step 0'
                            player.chooseToDiscard({ color: 'black' }, 'he', get.prompt2(event.name)).set('ai', card => 7.5 - get.value(card))
                            'step 1'
                            if (result.bool) {
                                player.logSkill(event.name);
                                player.useCard({ isCard: true, name: "zengbin" }, player, 'nowuxie');
                                //player.chooseUseTarget('zengbing',true);
                            }
                        },
                    },
                    ba_kaiquan: {
                        enable: 'phaseUse',
                        usable: 1,
                        filterTarget: lib.filter.notMe,
                        ai: {
                            result: {
                                target: (player, target) => {
                                    var eff = 0.75;
                                    if (target.countCards('h') <= 3) eff = 0.5;
                                    return Math.max(-eff * target.countCards('h'), get.damageEffect(target, player, target, 'fire'))
                                }
                            }
                            , order: 4,
                        },
                        selectTarget: 1,
                        content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                            'step 0'
                            event.cards = get.cards(1);
                            event.suit = get.suit(event.cards);
                            player.showCards(event.cards, '【' + get.translation(event.name) + '】：牌堆顶一张牌');
                            target.showHandcards('【' + get.translation(event.name) + "】：" + get.translation(target) + '的所有手牌')
                            var list = ['将所有' + get.translation(event.suit) + '花色的手牌交给' + get.translation(player), '受到1点火焰伤害'];
                            if (target.countCards('h', { suit: event.suit }) == 0) event._result = { index: 1, control: '受到1点火焰伤害' };
                            else target.chooseControl().set('choiceList', list).set('ai', () => {
                                var _player = _status.event.player;
                                var _source = _status.event.source;
                                var val = 0;
                                for (var _card of _player.getCards('h', { suit: _status.event.suit })) {
                                    val += get.value(_card);
                                }
                                if (val < -get.damageEffect(_player, _source, _player, 'fire')) return 0;
                                else return 1;
                            }).set('player', target).set('source', player).set('suit', event.suit);
                            'step 1'
                            if (result.index) {
                                game.log(target, '选择受到伤害');
                                target.damage('fire');
                            } else {
                                game.log(target, '选择交牌')
                                player.gain(target.getCards('h', { suit: event.suit }), target, 'giveAuto');
                                target.gain(event.cards, 'gain2');
                            }
                        }
                    },
                    ba_zaoshen: {
                        trigger: { source: "damageBegin4" },
                        priority: -5,
                        forced: true,
                        locked: true,
                        filter: (event, player) => {
                            return event.nature
                        },
                        content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                            'step 0'
                            player.chooseDrawRecover();
                            'step 1'
                            if (trigger.nature != 'fire') event.finish();
                            else {
                                player.chooseCard('he', '###是否发动【躁身】②？###将一张牌置于牌堆顶上令此伤害+1', 1).set('ai', card => {
                                    var _player = _status.event.player;
                                    var _target = _status.event.target;
                                    if (get.attitude(_player, _target) <= -2) return 7 - get.value(card);
                                    else return -1;
                                }).set('target', trigger.player).set('player', player)
                            }
                            'step 2'
                            if (result.bool) {
                                while (result.cards.length) {
                                    var _card = result.cards.pop()
                                    _card.fix();
                                    ui.cardPile.insertBefore(_card, ui.cardPile.firstChild);
                                    game.log(player, '将', _card, '置于牌堆顶');
                                }
                                trigger.num++;
                            }
                        }
                    },
                    ba_cunzhi: {
                        inherit: "nzry_cunmu"
                    },
                    ba_siyi: {
                        trigger: { player: ['damageAfter', 'loseHpAfter', 'loseAfter'], global: 'gainAfter' },
                        filter: (event, player) => {
                            if (event.name == 'damage' || event.name == 'loseHp') return true;
                            if (event.name == 'lose') return event.type == 'discard' && _status.currentPhase != player && event.cards2.filterInD('d').length > 0;
                            else {
                                if (event['source'] != player) return false;
                                if (event['bySelf'] != true) return false;
                                return event.relatedLose && event.relatedLose.hs && (event.relatedLose.hs.length > 0 && _status.currentPhase != player) && event.relatedLose.player == player;
                            }
                        },
                        frequent: true,
                        content: () => {
                            event.num = 1;
                            if (trigger.name == 'damage' || trigger.name == 'loseHp') event.num = trigger.num;
                            if (game.filterPlayer().length > 4) player.draw(event.num * Math.min(Math.max(Math.floor(game.filterPlayer(current => player.inRange(current) && current != player).length / 2), 1), 3))
                            else player.draw(event.num * game.filterPlayer(current => player.inRange(current) && current != player).length)
                        },
                        ai: {
                            maihp: true,
                            maixie: true,
                            "maixie_hp": true,
                            effect: function (card, player, target) {
                                if (get.tag(card, 'damage')) {
                                    if (player.hasSkillTag('jueqing', false, target)) return [1, 1];
                                    if (!target.hasFriend()) return;
                                    var num = Math.min(Math.max(Math.floor(game.filterPlayer(current => player.inRange(current) && current != player).length / 2), 1), 3);
                                    if (game.filterPlayer().length <= 4) num = game.filterPlayer().length
                                    if (get.attitude(player, target) > 0) {
                                        if (player.needsToDiscard()) {
                                            num = 0.7;
                                        }
                                        else {
                                            num = 0.5;
                                        }
                                    }
                                    if (target.hp >= 4) return [1, num * 2];
                                    if (target.hp == 3) return [1, num * 1.5];
                                    if (target.hp == 2) return [1, num * 0.5];
                                    return 1.2;
                                }
                                if (get.tag(card, 'loseHp')) {
                                    if (target.hp <= 1) return;
                                    var using = target.isPhaseUsing();
                                    var num = Math.min(Math.max(Math.floor(game.filterPlayer(current => player.inRange(current) && current != player).length / 2), 1), 3);
                                    if (target.hp <= 2) return [1, player.countCards('h') <= 1 && using ? 3 + num / 2 : 0];
                                    // if (using && target.countCards('h', { name: 'sha', color: 'red' })) return [1, 3 + num /2];
                                    return [1, (target.countCards('h') <= target.hp || using && game.hasPlayer(function (current) {
                                        return current != player && get.attitude(player, current) < 0 && player.inRange(current);
                                    })) ? 3 + num / 2 : 2 + num / 2]
                                }
                            },
                        },
                    },
                    ba_quanru: {
                        trigger: { target: "useCardToTargeted" },
                        filter: (event, player) => event.player != player,
                        check: (event, player) => {
                            if (get.effect(player, event.card, event.player, player) > get.effect(player, { name: "losehp" }, player, player)) return false;
                            else {
                                if (get.attitude(player, event.player) < 0 && event.player.countCards('h') >= 3) return false;
                                return true;
                            }
                        },
                        content: () => {
                            player.loseHp();
                            trigger.player.draw();
                            trigger.targets.remove(player);
                            trigger.getParent().triggeredTargets2.remove(player);
                            trigger.untrigger();
                        },
                    },
                    ba_zuru: {
                        trigger: { global: "useCardToTarget" },
                        filter: (event, player) => {
                            if (event.card.name != 'sha' || (event.skill && event.skill == 'ba_zuru')) return false;
                            return player.countCards('h') > 0 && (game.filterPlayer().length == 2 || player != event.player)
                        },
                        direct: true,
                        popup: false,
                        usable: 1,
                        content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                            'step 0'
                            player.chooseToDiscard('he', '###是否发动【' + get.translation(event.name) + '】？###你可以弃置一张牌，视为使用一张【增兵减灶】，然后再视为对' + get.translation(trigger.target) + '使用一张火【杀】').set('ai', (card) => {
                                var player = _status.event.player;
                                var target = _status.event.target
                                if (get.effect(target, { name: "sha" }, player, player) < 0) return -1;
                                return 8 - get.value(card);
                            }).set('target', trigger.target)
                            'step 1'
                            if (result.bool) {
                                player.logSkill(event.name, trigger.target)
                                player.useCard({ isCard: true, name: 'zengbin' }, 'nowuxie', player);
                                player.useCard({ isCard: true, name: "sha", nature: "fire" }, trigger.target, false).set('skill', 'ba_zuru');
                            } else {
                                player.storage.counttrigger.ba_zuru--;
                                event.finish();
                            }
                        }
                    },
                    ba_sanqiang: {
                        enable: 'phaseUse',
                        usable: 1,
                        filter: (event, player) => player.countCards('he', { color: "red" }) > 2,
                        content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                            'step 0'
                            for (var i = 0; i < 3; i++) {
                                player.chooseUseTarget({ name: "sha", nature: "fire", storage: { ba_sanqiang: true }, isCard: true }, "nodistance", false, "【三枪】：第" + get.cnNumber(i + 1, true) + "枪，选定目标，视为使用火【杀】。")
                            }
                            'step 1'
                            var bool = game.hasPlayer2(function (current) {
                                return current.getHistory('damage', function (evt) {
                                    return evt.getParent(4) == event;
                                }).length > 0
                            });
                            if (!(bool || player.hp <= 1)) player.loseHp();
                        },
                        filterCard: { color: "red" },
                        position: "he",
                        ai: {
                            result: {
                                player: function (player) {
                                    if (player.hasValueTarget({
                                        name: 'sha',
                                        nature: 'fire',
                                        isCard: true,
                                    }, false)) return 1;
                                    return 0;
                                },
                            },
                            order: 3,
                        },
                        check: card => 7 - get.value(card),
                        selectCard: 3,
                        subSkill: {
                            effect: {
                                forced: true,
                                sub: true,
                                charlotte: true,
                                trigger: {
                                    source: "damageAfter"
                                },
                                filter: (event, player) => {
                                    return event.card && event.card.storage && event.card.storage.ba_sanqiang && event.getParent().type == 'card';
                                },
                                content: () => {
                                    player.draw()
                                }
                            },
                            effect2: {
                                trigger: { player: "useCardToPlayered" },
                                filter: (event, player) => event.card.name == 'sha' && get.natureList(event.card).length && event.target != player,
                                content: () => {
                                    if (trigger.target.hasSkill('fengyin') && !trigger.target.hasSkill('baiban')) {
                                        trigger.target.addTempSkill('baiban')
                                    } else if (trigger.target.hasSkill('baiban')) {
                                        var id = trigger.target.playerid;
                                        var map = trigger.getParent().customArgs;
                                        if (!map[id]) map[id] = {};
                                        if (typeof map[id].extraDamage != 'number') {
                                            map[id].extraDamage = 0;
                                        }
                                        map[id].extraDamage++;
                                    } else trigger.target.addTempSkill('fengyin')
                                },
                                forced: true,
                                sub: true,
                                charlotte: true,
                            },
                        },
                        group: ['ba_sanqiang_effect', 'ba_sanqiang_effect2']
                    },
                    ba_yinlang: {
                        trigger: {
                            player: "useCardToPlayered",
                            target: "useCardToTargeted",
                        },
                        forced: true,
                        filter: function (event, player) {
                            if (event.card.name != 'sha') return false;
                            if (player == event.player) {
                                return event.target.hasSex('male');
                            }
                            return event.player.hasSex('male');
                        },
                        check: function (event, player) {
                            return player == event.player;
                        },
                        content: function () {
                            var id = (player == trigger.player ? trigger.target : player).playerid;
                            var map = trigger.getParent().customArgs;
                            if (!map[id]) map[id] = {};
                            if (typeof map[id].shanRequired == 'number') {
                                map[id].shanRequired++;
                            }
                            else {
                                map[id].shanRequired = 2;
                            }
                        },
                        ai: {
                            "directHit_ai": true,
                            skillTagFilter: function (player, tag, arg) {
                                if (arg.card.name != 'sha' || !arg.target.hasSex('male') || arg.target.countCards('h', 'shan') > 1) return false;
                            },
                        },
                    },
                    ba_qiuxia: {
                        trigger: { player: "phaseUseBefore" },
                        filter: (event, player) => true,
                        content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                            'step 0'
                            trigger.cancel();
                            player.changeHujia(2);
                            player.chooseToDiscard('【' + get.translation(event.name) + '】：弃置一张装备牌并视为使用一张【杀】，否则你选择恢复1点体力或摸一张牌', { type: "equip" }, 'he', 1).set('ai', card => {
                                var player = _status.event.player;
                                if (player.hp == 1 || player.countCards('h') < 2) return -1;
                                if (!game.hasPlayer(_target => get.effect(_target, { name: "sha" }, player, player) > 0)) return -1;
                                return 8 - get.equipValue(card);
                            })
                            'step 1'
                            if (result.bool) {
                                player.chooseUseTarget({ name: "sha" }, 'nodistance', false);
                            } else player.chooseDrawRecover();
                        },
                        prompt: "是否发动【求暇】？",
                        prompt2: '跳过出牌阶段并获得两点护甲，然后可以弃置一张装备牌并使用一张无距离限制的【杀】，或选择摸一张牌或恢复1点体力',
                        // popup: false,
                        // direct: true,
                        check: (event, player) => {
                            return player.hujia <= 4 && (player.countCards('h') <= player.hp + Math.ceil(player.hujia / 2) || player.hujia <= 1 || player.hp == 1)
                        },
                        mod: {
                            maxHandcard: (player, num) => {
                                return num + Math.ceil(player.hujia / 2)
                            }
                        },
                        group: 'ba_qiuxia_1',
                        subSkill: {
                            1: {
                                trigger: { player: "phaseDrawBegin" },
                                filter: (event, player) => player.hujia > 0 && !event.numFixed,
                                content: () => { trigger.num += Math.ceil(player.hujia / 2) }, forced: true, sub: true, locked: true,
                            }
                        }
                    },
                    ba_lipao: {
                        trigger: { player: "useCardToPlayer" },
                        filter: (event, player) => get.name(event.card) == 'sha' && player.hujia > 0 && event.target.countCards('hej') > 0,
                        check: (event, player) => get.attitude(player, event.target) < 0 && player.hujia > 1,
                        prompt: "是否发动【厉炮】？",
                        prompt2: (event, player) => "失去1点护甲，然后弃置" + get.translation(event.target) + '的两张牌',
                        content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                            player.changeHujia(-1)
                            player.discardPlayerCard(trigger.target, [1, 2])
                        },
                        ai: {
                            unequip_ai: true,
                            directHit_ai: true,
                            skillTagFilter: function (player, tag, arg) {
                                if (get.attitude(player, arg.target) > 0 || player.hujia <= 1) return false;
                                if (tag == 'directHit_ai') return arg && arg.target && arg.target.countCards('he') <= 2;
                                if (arg && arg.name == 'sha' && arg.target.getEquip(2)) return true;
                                return false;
                            }
                        },
                        subSkill: {
                            1: {
                                trigger: { source: "damageBegin" },
                                filter: (event, player) => event.player.hp <= player.hujia || event.player.countCards('h') <= player.hujia,
                                forced: true,
                                sub: true,
                                locked: true,
                                content: () => { trigger.num++; }
                            }
                        },
                        group: "ba_lipao_1"
                    },
                    ba_jijie: {
                        trigger: { player: "phaseUseBegin" },
                        direct: true,
                        popup: false,
                        filter: (event, player) => player.countCards('he') && game.hasPlayer(target => player.inRange(target) && player != target),
                        content: () => {
                            'step 0'
                            player.chooseTarget((card, player, target) => player != target && target.countCards('h') > 0, 1, get.prompt2(event.name), target => {
                                var player = _status.event.player;
                                return get.attitude(player, target) < 0
                            });
                            'step 1'
                            if (result.bool) {
                                player.logSkill(event.name, result.targets)
                                event.target = result.targets[0];
                                player.choosePlayerCard(result.targets[0], 1, 'h', true);
                            } else event.finish()
                            'step 2'
                            if (result.bool) {
                                player.showCards(result.cards)
                                event.target.addTempSkill(event.name + "_1", { player: "phaseEnd" })
                                event.target.storage[event.name + '_1'] = get.color(result.cards);
                                event.target.syncStorage(event.name)
                                if (['trick', 'basic', 'delay'].contains(get.type(result.cards[0]))) {
                                    player.storage[event.name] = get.name(result.cards[0]);
                                    player.syncStorage(event.name)
                                } else {
                                    player.draw()
                                    player.storage[event.name] = 'shan'
                                    player.syncStorage(event.name)
                                }
                            }
                        },
                        mark: true,
                        ondelete: true,
                        init: (player, skill) => {
                            player.storage[skill] = ''
                        },
                        group: ["ba_jijie_2", "ba_jijie_3", 'ba_jijie_4'],
                        intro: {
                            content: (storage, player, skill) => {
                                if (!player.storage["ba_jijie"]) return "没有记录牌";
                                else return "记录牌名：" + get.translation(player.storage["ba_jijie"])
                            }
                        },
                        onremove: true,
                        subSkill: {
                            2: {
                                trigger: { player: "phaseBegin" },
                                firstDo: true,
                                priority: Infinity,
                                filter: (event, player) => player.storage['ba_jijie'] != '',
                                content: () => { player.storage['ba_jijie'] = '' },
                                forced: true,
                                sub: true,
                                locked: true
                            },
                            3: {
                                enable: ['chooseToUse', 'chooseToRespond'],
                                filter: (event, player) => player.countCards('h') > 0 && player.storage['ba_jijie'] != '' && event.filterCard({ name: player.storage['ba_jijie'] }, player, event),
                                viewAs: (cards, player) => {
                                    return { name: player.storage.ba_jijie };
                                },
                                filterCard: (card, player) => { return player.storage.ba_jijie != '' },
                                selectCard: 1,
                                hiddenCard: (player, card) => {
                                    if (player.storage.ba_jijie && card == player.storage.ba_jijie) return true;
                                },
                                check: card => 7 - get.value(card),
                                ai: {
                                    order: 1,
                                    result: {
                                        player: (player, target) => {
                                            if (!player.storage.ba_jijie || player.storage.ba_jijie == '') return 0;
                                            return get.effect(target, player.storage.ba_jijie, player, player);
                                        },
                                        target: (player, target) => {
                                            if (!player.storage.ba_jijie || player.storage.ba_jijie == '') return 0;
                                            return get.effect(target, player.storage.ba_jijie, player, target);
                                        },
                                    },
                                },
                                usable: 1,
                            },
                            4: {
                                trigger: { player: ["useCard", 'respond'] },
                                filter: (event, player) => event.skill == 'ba_jijie',
                                forced: true,
                                locked: true,
                                content: () => { player.draw() },
                            },
                            1: {
                                onremove: true,
                                init: (player, skill) => { player.storage[skill] = "black" },
                                mark: true,
                                intro: {
                                    content: (storage, player, skill) => { return "不能使用或打出" + get.translation(player.storage.ba_jijie_1) + '的牌' }
                                },
                                mod: {
                                    cardEnabled2: (card, player) => {
                                        if (get.color(card) == player.storage.ba_jijie_1) return false;
                                    }
                                }
                            },
                        },
                    },
                    ba_xianyu: {
                        mod: {
                            globalTo: function (from, to, distance) {
                                return distance + 1;
                            },
                            globalFrom: function (from, to, distance) {
                                return distance + 1;
                            },
                            cardname: function (card, player) {
                                if (card.type == 'equip' && card.subtype == 'equip4') return "zengbin"
                            },
                        },
                        trigger: { player: "useCard" },
                        filter: (event, player) => !event.skill && event.card.name == 'zengbin' && get.type(event.cards[0].name) == 'equip'
                            && get.subtype(event.cards[0].name) == 'equip4' && event.cards.length == 1,
                        content: () => { },
                        forced: true,
                        locked: true,
                        firstDo: true,
                    },
                    ba_xianyu_1: {
                        enable: 'phaseUse',
                        usable: 2,
                        viewAs: {
                            name: "zengbin",
                        },
                        filterCard: (card, player) => {
                            return get.number(card) % 2 == 1
                        },
                        check: card => 8 - get.value(card),
                        group: "ba_xianyu_1_1",
                        subSkill: {
                            1: {
                                trigger: { player: "useCard1" },
                                filter: (event, player) => event.skill == 'ba_xianyu_1',
                                forced: true,
                                sub: true,
                                content: () => {
                                    trigger.directHit.addArray(game.players);
                                }
                            },
                        },
                        ai: {
                            "directHit_ai": true,
                            skillTagFilter: function (player, tag, arg) {
                                return arg && arg.card && arg.card.name == 'zengbin' && _status.event.skill == 'ba_xianyu_1';
                            },
                            order: 7,
                            useful: 4,
                            value: 10,
                            tag: {
                                draw: 2,
                            },
                            result: {
                                target: function (player, target) {
                                    if (target.hasJudge('lebu')) return 0;
                                    return Math.max(1, 2 - target.countCards('h') / 10);
                                },
                            },
                        },
                    },
                    ba_jieling: {
                        subSkill: {
                            "ba_xianyu": {
                                charlotte: true,
                                onremove: function (player, skill) {
                                    player.enableSkill(skill);
                                },
                                sub: true,
                            },
                            1: {
                                trigger: { player: "phaseEnd" },
                                forced: true,
                                // priority: -1.4,
                                content: () => {
                                    if (player.hasSkill('ba_xianyu_1') && player.storage[event.name] <= 1) player.removeSkill('ba_xianyu_1');
                                    if (player.hasSkill('ba_jieling_ba_xianyu') && player.storage[event.name] <= 1) player.removeSkill('ba_jieling_ba_xianyu')
                                    player.storage[event.name]--;
                                    if (player.storage[event.name] == 0) player.removeSkill('ba_jieling_1')
                                },
                                charlotte: true,
                                mark: true,
                                intro: { content: "此技能暂时失效" },
                                init: (player, skill) => { player.storage[skill] = 1 },
                                onremove: true,
                                sub: true,
                            },
                            2: {
                                onremove: true,
                                trigger: { player: "phaseJieshuBegin" },
                                forced: true,
                                locked: true,
                                sub: true,
                                init: (player, skill) => {
                                    player.storage[skill] = 'heart'
                                },
                                content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                                    var bool1 = player.getHistory('sourceDamage').length > 0
                                    var bool2 = player.getHistory('useCard', evt => evt.card && get.color(evt.card) && get.color(evt.card) == player.storage[event.name]).length > 1
                                    if (!bool1 && !bool2) {
                                        game.log(player, '的【解囹】使命失败');
                                        player.loseHp()
                                        player.removeSkill('ba_jieling_ba_xianyu')
                                        player.storage.ba_jieling_1++;
                                        player.syncStorage('ba_jieling_1')
                                    } else if (bool1 && bool2) {
                                        game.log(player, '的【解囹】使命完全成功');
                                        player.storage.ba_jieling_1++;
                                        player.addSkill('ba_xianyu_1')
                                        player.syncStorage('ba_jieling_1');
                                    } else {
                                        game.log(player, '的【解囹】使命未完全成功')
                                    }
                                },
                                mark: true,
                                intro: {
                                    content: "目标花色：#"
                                }
                            },
                        },
                        direct: true,
                        popup: false,
                        derivation: ['ba_xianyu_1'],
                        trigger: { player: "phaseBegin" },
                        filter: (event, player) => { return !player.hasSkill('ba_jieling_1') && player.countCards('h') && !game.hasPlayer(current => get.distance(player, current) <= 1 && player != current) },
                        content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                            'step 0'
                            player.chooseToDiscard('h', 1, get.prompt2(event.name)).set('ai', card => {
                                var player = get.player()
                                if (player.hasJudge('lebu')) return -1;
                                var shaNum = player.getCardUsable('sha')
                                var fil1 = player.countCards('h', _card => {
                                    if (get.name(_card) == 'sha') return false;
                                    var inf = get.info(_card)
                                    return player.hasUseTarget(_card) && inf && inf.ai && inf.ai.tag && inf.ai.tag.damage
                                }) + Math.min(shaNum, player.countCards('h', { name: 'sha' }))
                                var hasEquip4 = player.countCards('h', _card => _card.type == 'equip' && _card.subtype == 'equip4')
                                var fil2 = player.countCards('h', _card => {
                                    return player.hasUseTarget(_card) && get.suit(_card) == get.suit(card) && card != _card
                                })
                                if (fil1 < 2 && fil2 < 2) return -1;
                                if (fil1 >= 2 && fil2 >= 2) return 12 - get.value(card)
                                if (hasEquip4 > 0) {
                                    if (player.countCards('e', _card => _card.type == 'equip' && _card.subtype == 'equip4')) return 6 - get.value(card)
                                    return 7.5 - get.value(card);
                                }
                                return 6 - get.value(card)
                            })
                            'step 1'
                            if (result.bool) {
                                player.logSkill(event.name)
                                player.disableSkill('ba_jieling_ba_xianyu', 'ba_xianyu')
                                player.addSkill('ba_jieling_ba_xianyu')
                                player.addSkill('ba_jieling_1')
                                player.addTempSkill('ba_jieling_2')
                                player.storage.ba_jieling_2 = get.color(result.cards)
                                player.syncStorage('ba_jieling_2')
                            }
                        }
                    },
                    ba_dudang: {
                        mod: {
                            targetEnabled: (card, player, target) => {
                                if ((card.name == 'sha' || card.name == 'juedou') && get.number(card) && get.number(card) >= 1) {
                                    var num = target.countCards('h')
                                    if (num <= 4 && get.number(card) < 2 * num) return false;
                                    if (num > 4 && get.number(card) > 2 * num) return false;
                                }
                            }
                        },
                        trigger: { player: ['loseEnd', 'gainEnd'] },
                        filter: (event, player) => {
                            if (event.name == 'gain') {
                                return player.countCards('h') > 4 && player.countCards('h') - event.num <= 4
                            } else {
                                var l = 0;
                                for (var i = 0; i < event.cards.length; i++) {
                                    if (event.cards[i].original == 'h') l++;
                                }
                                return player.countCards('h') <= 4 && player.countCards('h') + l > 4
                            }
                        },
                        content: () => { },
                        forced: true,
                        firstDo: true,
                    },
                    ba_zhengchi: {
                        usable: 1,
                        trigger: {
                            target: "useCardToTargeted",
                        },
                        filter: (event, player) => event.getParent().targets.length == 1 && event.player != player && !player.hasSkill('ba_shuyan_downed'),
                        content: () => {
                            'step 0'
                            var eff = get.effect(player, trigger.card, trigger.player, trigger.player)
                            trigger.player.chooseCard(1, 'he', { suit: "diamond" }, '交给' + get.translation(player) + "一张方块牌，否则" + get.translation(trigger.card) + '无效').set('ai', card => {
                                if (_status.event.eff < 0) return 0
                                return 10 - get.value(card)
                            }).set('eff', eff)
                            'step 1'
                            if (result.bool) {
                                player.gain(result.cards, trigger.player, 'give');
                            } else {
                                trigger.getParent().excluded.add(player);
                            }
                        },
                        check: (event, player) => {
                            return get.effect(player, event.card, event.player, player) < 0
                        },
                        ai: {
                            effect: {
                                target: function (card, player, target, current) {
                                    if (target.storage.counttrigger && target.storage.counttrigger['ba_zhengchi']) return;
                                    if (target.hasSkill('ba_shuyan_downed'))
                                        if (current < 0) {
                                            if (player.countCards('he', { suit: "diamond" }) == 0) return 0;
                                            else {
                                                var min = current;
                                                for (var _card in player.getCards('he', { suit: 'diamond' })) {
                                                    if (min > get.value(_card)) min = get.value(_card)
                                                }
                                                return [1, 0, 1, -min / 10]
                                            }
                                        }
                                }
                            }
                        },
                    },
                    ba_shuyan: {
                        derivation: ['ba_shuangbiao'],
                        trigger: { player: "phaseDiscardAfter" },
                        filter: (event, player) => player.countCards('h', { suit: "diamond" }),
                        content: () => {
                            var cards = player.getCards('h', { suit: "diamond" })
                            player.showCards(cards)
                            player.draw(cards.length)
                        },
                        forced: true,
                        dutySkill: true,
                        mod: {
                            ignoredHandcard: function (card, player) {
                                if (get.suit(card, player) == 'diamond') return true;
                            },
                            cardDiscardable: function (card, player, name) {
                                if (name == 'phaseDiscard' && get.suit(card, player) == 'diamond') return false;
                            },
                            cardEnabled: function (card, player) {
                                if (get.suit(card) == 'diamond') return false
                            },
                        },
                        group: ['ba_shuyan_achieved', 'ba_shuyan_fail'],
                        subSkill: {
                            fail: {
                                trigger: { player: "phaseJieshuBegin" },
                                forced: true,
                                filter: (event, player) => player.countCards('h', { suit: "diamond" }) == 0,
                                content: () => {
                                    game.log(player, '使命失败并重置使命技')
                                    player.loseHp()
                                    player.addTempSkill('ba_shuyan_downed');
                                }, sub: true,
                            },
                            achieved: {
                                skillAnimation: true,
                                animationColor: "wood",
                                trigger: { player: "phaseZhunbeiBegin" },
                                filter: (event, player) => {
                                    return player.countCards('h', { suit: 'diamond' }) >= 3
                                },
                                content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                                    player.awakenSkill('ba_shuyan')
                                    game.log(player, '成功完成使命')
                                    var _cards = player.getCards('h', { suit: "diamond" })
                                    if (player.hp > 1) player.loseHp()
                                    player.showCards(_cards)
                                    for (var _card of _cards) player.useCard({ name: "wuzhong" }, [_card], 'nowuxie', player)
                                    player.addSkillLog('ba_shuangbiao')
                                },
                                forced: true,
                            },
                            downed: {
                                sub: true,
                                mark: true,
                                intro: {
                                    content: "【正斥】暂时失效"
                                },
                            },
                        },
                    },
                    ba_shuangbiao: {
                        enable: "phaseUse",
                        usable: 3,
                        filter: (event, player) => player.countCards('h', { suit: "diamond" }) > 0 && (player.hasUseTarget('wuzhong') || player.hasUseTarget('sha')),
                        chooseButton: {
                            dialog: function (event, player) {
                                var list = [['基本', '', 'sha']]
                                for (var j of lib.inpile_nature) list.push(['基本', '', 'sha', j]);
                                if (player.getHistory('useCard', evt => evt.card && evt.card.name == 'wuzhong' && evt.skill && evt.skill.startsWith('ba_shuangbiao')).length == 0) list.push(['锦囊', '', 'wuzhong'])
                                return ui.create.dialog('双标', [list, 'vcard']);
                            },
                            filter: function (button, player) {
                                return _status.event.getParent().filterCard({ name: button.link[2] }, player, _status.event.getParent());
                            },
                            check: function (button) {
                                var player = _status.event.player;
                                if (player.countCards('hs', button.link[2]) > 0) return 0;
                                // if (button.link[2] == 'wugu') return 0;
                                var effect = player.getUseValue(button.link[2]);
                                if (effect > 0) return effect;
                                return 0;
                            },
                            backup: function (links, player) {
                                return {
                                    filterCard: { suit: "diamond" },
                                    // audio: 'taoluan',
                                    selectCard: 1,
                                    popname: true,
                                    check: function (card) {
                                        return 6 - get.value(card);
                                    },
                                    position: 'hes',
                                    viewAs: { name: links[0][2], nature: links[0][3] },
                                    // onuse: function (result, player) {
                                    //     player.storage.taoluan.add(result.card.name);
                                    // },
                                }
                            },
                            prompt: function (links, player) {
                                return '将一张方块牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                            },
                        },
                        ai: {
                            order: 8,
                            result: {
                                player: function (player) {
                                    var allshown = true, players = game.filterPlayer();
                                    for (var i = 0; i < players.length; i++) {
                                        if (players[i].ai.shown == 0) {
                                            allshown = false;
                                        }
                                        if (players[i] != player && players[i].countCards('h') && get.attitude(player, players[i]) > 0) {
                                            return 1;
                                        }
                                    }
                                    if (allshown) return 1;
                                    return 0;
                                },
                            },
                            threaten: 1.5,
                        },
                        subSkill: {
                            1: {
                                trigger: { player: "useCard" },
                                filter: (event, player) => event.skill && event.skill.startsWith('ba_shuangbiao'),
                                content: () => {
                                    if (get.name(trigger.card) == 'sha') {
                                        trigger.addCount = false;
                                        player.getStat().card.sha--;
                                    } else player.recover();
                                    trigger.directHit.addArray(game.players);
                                }, forced: true, sub: true,
                                charlotte: true,
                                ai: {
                                    directHit_ai: true,
                                    skillTagFilter: function (player, tag, arg) {
                                        return arg && arg.card && (arg.card.name == 'wuzhong' || arg.card.name == 'sha') && _status.event.skill && _status.event.skill.startsWith('ba_shuangbiao');
                                    },
                                }
                            }
                        },
                        group: ['ba_shuangbiao_1'],
                    },
                    'ba_yanxi': {
                        trigger: { player: "phaseZhunbeiBegin" },
                        popup: false,
                        direct: true,
                        filter: (event, player) => { return player.countCards('h', { type: "basic" }) > 0 },
                        content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                            'step 0'
                            player.chooseCardTarget({
                                selectCard: [1, Infinity],
                                selectTarget: () => { return ui.selected.cards.length },
                                complexCard: true,
                                complexTarget: true,
                                complexSelect: true,
                                position: 'h',
                                discard: true,
                                prompt: get.prompt('ba_yanxi'),
                                prompt2: "弃置若干基本牌并选择相同数量的其他角色",
                                filterTarget: lib.filter.notMe,
                                filterCard: card => get.type(card) == 'basic',
                                ai1: (card) => { return 7.5 - get.value(card) },
                                ai2: target => {
                                    var player = _status.event.player;
                                    if (get.attitude(player, target) < 0 && target.countCards('h') == 0 && get.damageEffect(target, player, player, 'fire') > 0) {
                                        return 4 + get.damageEffect(target, player, player, 'fire');
                                    }
                                    return get.damageEffect(target, player, player, 'fire')
                                },
                            })
                            'step 1'
                            if (result.bool) {
                                player.logSkill('ba_yanxi', result.targets)
                                player.discard(result.cards);
                                event.targets = result.targets;
                                event.index = 0
                            }
                            else event.finish();
                            'step 2'
                            event.target = event.targets[event.index]
                            if (event.target.countCards('he', { color: "red" }) == 0) event._result = { bool: false }
                            else event.target.chooseCard(1, { color: 'red' }, 'he', '交给' + get.translation(player) + '一张红色牌或受到其一点火焰伤害').set('ai', card => {
                                var source = _status.event.source
                                var player = _status.event.player
                                if (get.damageEffect(player, source, player, 'fire') >= 0) return -1;
                                return 7 - get.value(card);
                            }).set('player', event.target).set('source', player)
                            'step 3'
                            if (result.bool) {
                                player.gain(result.cards, event.target, 'give');
                            } else event.target.damage('fire');
                            'step 4'
                            event.index++;
                            'step 5'
                            if (event.index < event.targets.length) event.goto(2);
                            else game.delayx();
                        }
                    },
                    'ba_pojia': {
                        trigger: {
                            player: "useCardToPlayered",
                        },
                        filter: function (event) {
                            return event.card.name == 'sha' && event.player.countCards('e', { name: "tengjia" }) == 0;
                        },
                        forced: true,
                        logTarget: "target",
                        content: function () {
                            trigger.target.addTempSkill('ba_pojia_3');
                        },
                        ai: {
                            "unequip_ai": true,
                            skillTagFilter: function (player, tag, arg) {
                                if (arg && arg.name == 'sha' && arg.target && arg.target.countCards('e', { name: "tengjia" }) == 0) return true;
                                return false;
                            },
                        },
                        locked: true,
                        group: ['ba_pojia_1', 'ba_pojia_2'],
                        subSkill: {
                            1: {
                                trigger: { source: "damageBegin3" },
                                filter: (event, player) => {
                                    return (!player.isDamaged() || player.countCards('e') > 0 || player.countCards('h') > 2)
                                        && (event.player.countCards('e', { name: "tengjia" }) == 0 || (event.nature && event.nature == 'fire'))
                                },
                                forced: true,
                                sub: true,
                                locked: true,
                                content: () => {
                                    if (trigger.player.countCards('e', { name: "tengjia" }) == 0) trigger.player.addTempSkill('ba_pojia_3')
                                    if (trigger.nature && trigger.nature == 'fire') trigger.num++;
                                },
                                logTarget: "player"
                            },
                            2: {
                                trigger: { global: 'shaMiss' },
                                filter: (event, player) => { return event.target == player },
                                check: (event, player) => {
                                    return get.effect(event.player, { name: "sha", nature: "fire" }, player, player) > 0
                                },
                                prompt2: (event, player) => {
                                    return "视为对" + get.translation(event.player) + "使用一张【杀】";
                                },
                                content: () => {
                                    player.useCard({ name: "sha", nature: "fire" }, trigger.player, false);
                                },
                                logTarget: "player",
                                sub: true,
                            },
                            3: {
                                ai: {
                                    "unequip2": true,
                                },
                                sub: true,
                                mark: true,
                                intro: { content: "本回合防具无效" }
                            },
                        }
                    },
                    ba_gushen: {
                        trigger: { player: "loseHpBefore" },
                        filter: (event, player) => { return event.type == 'du'; },
                        forced: true,
                        locked: true,
                        content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                            for (var i = 0; i < trigger.num; i++)player.chooseDrawRecover(2);
                            trigger.cancel();
                        },
                        ai: {
                            usedu: true,
                            // nodu: true,
                        },
                        mod: {
                            cardname: (card, player) => {
                                if ((get.name(card, false) == 'jiu' || get.name(card, false) == 'tao') && !player.isDying()) return 'du';
                            }
                        },
                        group: ['ba_gushen_1'],
                        subSkill: {
                            1: {
                                mod: {
                                    aiValue: function (player, card, num) {
                                        if (get.name(card) != 'shan' && get.name(card) != 'du') return;
                                        var cards = player.getCards('hs', function (card) {
                                            return get.name(card) == 'shan' || get.name(card) == 'du';
                                        });
                                        cards.sort(function (a, b) {
                                            return (get.name(b) == 'shan' ? 1 : 2) - (get.name(a) == 'shan' ? 1 : 2);
                                        });
                                        var geti = function () {
                                            if (cards.contains(card)) {
                                                return cards.indexOf(card);
                                            }
                                            return cards.length;
                                        };
                                        if (get.name(card) == 'shan') return Math.min(num, [6, 4, 3][Math.min(geti(), 2)]) * 0.6;
                                        return Math.max(num, [6.5, 4, 3][Math.min(geti(), 2)]);
                                    },
                                    aiUseful: function () {
                                        return lib.skill.ba_gushen_1.mod.aiValue.apply(this, arguments);
                                    },
                                },
                                locked: false,
                                enable: ["chooseToRespond", "chooseToUse"],
                                filterCard: function (card) {
                                    return get.name(card) == 'du';
                                },
                                viewAs: {
                                    name: "shan",
                                },
                                viewAsFilter: function (player) {
                                    if (!player.countCards('hs', card => get.name(card) == 'du')) return false;
                                },
                                position: "hs",
                                prompt: "将一张【毒】当闪使用或打出",
                                check: function () { return 1 },
                                ai: {
                                    order: 3,
                                    respondShan: true,
                                    skillTagFilter: function (player) {
                                        if (!player.countCards('hs', card => get.name(card) == 'du')) return false;
                                    },
                                    effect: {
                                        target: function (card, player, target, current) {
                                            if (get.tag(card, 'respondShan') && current < 0) return 0.6
                                        },
                                    },
                                    basic: {
                                        useful: [7, 5.1, 2],
                                        value: [7, 5.1, 2],
                                    },
                                    result: {
                                        player: 1,
                                    },
                                },
                            }
                        }
                    },
                    ba_duyan: {
                        trigger: { player: "phaseDiscardBefore" },
                        direct: true,
                        popup: false,
                        content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                            'step 0'
                            player.chooseTarget(lib.filter.notMe, get.prompt(event.name)).set('prompt2', '选择一名角色，展示你与其所有手牌并确定其中最多的一种花色，直到你下一回合开始，你与其中这些花色的牌都视为【毒】').set('ai', target => {
                                var player = get.player();
                                if (get.attitude(player, target) >= 0 || player.countCards('h') < player.getHandcardLimit()) return -1;
                                return target.countCards('h');
                            })
                            'step 1'
                            if (result.bool) {
                                event.target = result.targets[0];
                                player.logSkill(event.name, event.target)
                                player.showHandcards();
                                event.target.showHandcards();
                                var _cards = player.getCards('h').addArray(event.target.getCards('h'));
                                var suits = {
                                    "heart": 0, "diamond": 0,
                                    "spade": 0, "club": 0,
                                }
                                for (var _card of _cards) {
                                    if (get.suit(_card) in suits) suits[get.suit(_card)]++;
                                }
                                var max = Math.max(suits['heart'], suits['diamond'], suits['spade'], suits['club'])
                                var ans = [];
                                for (var str of ["heart", "diamond", "spade", 'club']) {
                                    if (suits[str] == max) ans.add(str);
                                }
                                player.addTempSkill('ba_duyan_1', { player: 'phaseBegin' });
                                player.markAuto("ba_duyan_1", ans);
                                player.storage.ba_duyan = event.target
                                event.target.markSkillCharacter('ba_duyan_1', player, '毒宴', get.translation(ans) + '花色的手牌视为【毒】')
                            }
                        },
                        init: (player, skill) => {
                            player.storage[skill] = null; player.storage.ba_duyan_1 = [];
                            // if (!'du' in lib.inpile){
                            //     game.addGlobalSkill("g_du")
                            //     game.addGlobalSkill("g_du_give")
                            // }
                        },
                        subSkill: {
                            1: {
                                init: (player, skill) => { player.storage[skill] = []; },
                                onremove: (player, skill) => {
                                    player.unmarkAuto('ba_duyan_1');
                                    player.storage.ba_duyan.unmarkSkill('ba_duyan_1');
                                    player.storage[skill] = []; player.storage.ba_duyan = null;
                                },
                                intro: {
                                    onunmark: true,
                                    markcount: () => undefined,
                                    content: "$花色的手牌视为【毒】",
                                },
                                sub: true,
                            }
                        },
                        global: ["ba_dayun_g", "g_du", "g_du_give"]
                    },
                    ba_dayun_g: {
                        mod: {
                            cardname: (card, player) => {
                                if (get.position(card) != 'e' && get.position(card) != 'j') {
                                    var pl = game.filterPlayer(current => current.hasSkill('ba_duyan') && current.hasSkill('ba_duyan_1') &&
                                        current.storage.ba_duyan && current.storage.ba_duyan_1 && current.storage.ba_duyan_1.length > 0)
                                    if (pl.length > 0) {
                                        if (pl.contains(player)) {
                                            if (player.storage.ba_duyan_1.contains(get.suit(card))) return 'du';
                                        }
                                        for (var _pl of pl) {
                                            if (_pl.storage.ba_duyan == player) {
                                                if (_pl.storage.ba_duyan_1.contains(get.suit(card))) return 'du';
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    ba_jugu: {
                        inherit: "jugu",
                        audio: 2,
                    },
                    ba_hengchong: {
                        trigger: { player: "phaseZhunbeiBegin" },
                        filter: (event, player) => {
                            return player.countCards('h', card => get.number(card) % 2 == 1 && player.hasUseTarget({ name: "wanjian", cards: [card] }, false, true)) > 0;
                        },
                        direct: true,
                        popup: false,
                        content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                            'step 0'
                            player.chooseCard(card => { return get.number(card) % 2 == 1 && player.hasUseTarget({ name: "wanjian", cards: [card] }, false, true) }, 1, 'he', get.prompt('ba_hengchong'), '将一张点数为奇数的牌当作【万箭齐发】使用').set('ai', card => {
                                var player = _status.event.player
                                return player.getUseValue({ name: "wanjian", cards: [card] }, false, true)
                            })
                            'step 1'
                            if (result.cards) {
                                player.logSkill(event.name)
                                player.chooseUseTarget({ name: "wanjian" }, result.cards, true).set('oncard', card => {
                                    try {
                                        card.ba_hengchong = true;
                                    } catch (e) {
                                        alert('发生了一个导致【横铳】无法正常触发无视防具效果的错误。请关闭十周年UI/手杀UI等扩展以解决');
                                    }
                                });
                            }
                        },
                        audio: 4,
                        group: ['ba_hengchong_1', 'ba_hengchong_2'],
                        ai: {
                            unequip: true,
                            "unequip_ai": true,
                            skillTagFilter: function (player, tag, arg) {
                                if (tag == 'unequip_ai') {
                                    if (_status.event.getParent().name != 'ba_hengchong') return false;
                                }
                                else if (!arg || !arg.card || !arg.card.ba_hengchong) return false;
                            },
                        },
                        subSkill: {
                            1: {
                                trigger: { source: ["damageBefore", 'damageEnd'] },
                                filter: event => event.card && event.card.ba_hengchong,
                                forced: true,
                                charlotte: true,
                                sub: true,
                                content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                                    if (event.triggername == 'damageBefore') trigger.nature = 'fire';
                                    else {
                                        var num = 0;
                                        if (trigger.player.num('h')) num++;
                                        if (trigger.player.num('e')) num++;
                                        if (trigger.player.num('j')) num++;
                                        if (num) player.discardPlayerCard(trigger.player, 'hej', [1, num]).set('filterButton', button => {
                                            for (var i = 0; i < ui.selected.buttons.length; i++) {
                                                if (get.position(button.link) == get.position(ui.selected.buttons[i].link)) return false;
                                            }
                                            return true;
                                        })
                                    }
                                },
                                popup: false,
                            },
                            2: {
                                trigger: {
                                    player: "useCardToPlayered",
                                },
                                filter: function (event) {
                                    return event.card.ba_hengchong;
                                },
                                forced: true,
                                popup: false,
                                // logTarget:"target",
                                content: function () {
                                    trigger.target.addTempSkill('qinggang2');
                                    trigger.target.storage.qinggang2.add(trigger.card);
                                    trigger.target.markSkill('qinggang2');
                                },
                            }
                        }
                    },
                    ba_haozhi: {
                        enable: 'chooseToUse',
                        usable: 1,
                        filterCard: card => {
                            return get.number(card) % 2 == 0;
                        },
                        selectCard: 1,
                        viewAs: { name: "kaihua" },
                        prompt: "是否发动【豪掷】？",
                        prompt2: "将一张点数为偶数的牌当作【树上开花】使用",
                        check: function (card) {
                            return 7 - get.value(card);
                        },
                        audio: 2,
                        ai: {
                            wuxie: function () {
                                return 0;
                            },
                            basic: {
                                useful: 3,
                                value: 3,
                                order: 5,
                            },
                            result: {
                                target: function (player, target, card) {
                                    var cards = ui.selected.cards.concat(card.cards || []);
                                    var num = player.countCards('he', function (card) {
                                        if (cards.contains(card)) return false;
                                        if (get.type(card) == 'equip') return 8 > get.value(card);
                                        return 6 > get.value(card);
                                    });
                                    if (!num) return 0;
                                    if (player.countCards('he', function (card) {
                                        if (cards.contains(card)) return false;
                                        if (get.type(card) == 'equip') return 4 > get.value(card);
                                        return false;
                                    })) return 1.6;
                                    if (num < 2) return 0.5;
                                    return 1.2;
                                },
                            },
                            tag: {
                                loseCard: 1,
                                discard: 1,
                                norepeat: 1,
                            },
                        },
                        group: ['ba_haozhi_1'],
                        subSkill: {
                            1: {
                                trigger: { global: "useCardAfter" },
                                filter: (event, player) => {
                                    if (event.player == player) return false;
                                    if (!player.countCards('he', card => get.number(card) % 2 == 0)) return false;
                                    if (['taoyuan', 'wugu'].includes(get.name(event.card))) return true;
                                    if (['kaihua', 'zengbin'].includes(get.name(event.card))) return !event.targets.includes(event.player);
                                    return false;
                                },
                                direct: true,
                                popup: false,
                                content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                                    'step 0'
                                    player.chooseToDiscard(card => get.number(card) % 2 == 0, get.prompt('ba_haozhi'), 1, 'he').set('prompt2', '是否弃置一张偶数点数的牌视为令' + get.translation(trigger.player) + '使用一张【洞烛先机】').set('ai', card => {
                                        var target = _status.event.target;
                                        var player = _status.event.player;
                                        if (get.attitude(player, target) <= 2) return -1;
                                        return 7 - get.value(card);
                                    }).set('target', trigger.player)
                                    'step 1'
                                    if (result.bool) {
                                        player.logSkill('ba_haozhi', trigger.player);
                                        trigger.player.useCard({ name: "dongzhuxianji", isCard: true }, trigger.player)
                                    }
                                },
                                usable: 1,
                                audio: "ba_haozhi"
                            }
                        }
                    },
                    'ba_ekou': {
                        trigger: { player: "phaseUseEnd" },
                        filter: (event, player) => {
                            return player.getHistory("sourceDamage", evt => {
                                return evt.player != player && evt.num > 0 && evt.player.isAlive()
                            }).length > 0
                        },
                        forced: true,
                        locked: true,
                        audio: 2,
                        content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                            var damaged = player.getHistory("sourceDamage", evt => {
                                return evt.player != player && evt.num > 0 && evt.player.isAlive()
                            })
                            var damaged_players = [];
                            var damaged_numbers = [];
                            for (var _event of damaged) {
                                if (damaged_players.contains(_event.player)) {
                                    damaged_numbers[damaged_players.indexOf(_event.player)] += _event.num
                                } else {
                                    damaged_players.push(_event.player);
                                    damaged_numbers.push(_event.num);
                                }
                            }
                            for (var i = 0; i < damaged_players.length; i++) {
                                if (damaged_players[i].countCards('hej') > damaged_numbers[i]) player.gainPlayerCard(damaged_numbers[i], true, 'hej', damaged_players[i]);
                                else damaged_players[i].give(damaged_players[i].getCards('hej'), player, false);
                            }
                        },
                        group: ['ba_ekou_1', 'ba_ekou_reset', 'ba_ekou_count'],
                        subSkill: {
                            1: {
                                trigger: {
                                    player: "phaseDiscardBegin",
                                },
                                audio: 'ba_ekou',
                                forced: true,
                                content: function () {
                                    player.addTempSkill('ba_ekou_2', 'phaseDiscardAfter');
                                },
                                onremove: function (player) {
                                    player.removeGaintag('ba_ekou');
                                },
                            },
                            2: {
                                mod: {
                                    ignoredHandcard: function (card, player) {
                                        if (card.hasGaintag('ba_ekou')) {
                                            return true;
                                        }
                                    },
                                    cardDiscardable: function (card, player, name) {
                                        if (name == 'phaseDiscard' && card.hasGaintag('ba_ekou')) {
                                            return false;
                                        }
                                    },
                                },
                            },
                            reset: {
                                trigger: {
                                    player: ["phaseBefore", "phaseAfter"],
                                },
                                silent: true,
                                priority: 10,
                                content: function () {
                                    player.removeGaintag('ba_ekou');
                                },
                                sub: true,
                                forced: true,
                                popup: false,
                            },
                            count: {
                                trigger: {
                                    player: "gainBegin",
                                },
                                audio: "ba_ekou",
                                forced: true,
                                silent: true,
                                filter: function (event, player) {
                                    return _status.currentPhase == player;
                                },
                                content: function () {
                                    trigger.gaintag.add('ba_ekou');
                                },
                                sub: true,
                                popup: false,
                            },
                        }
                    },
                    'ba_liuzha': {
                        trigger: { player: "phaseUseBegin" },
                        filter: (event, player) => { return player.countCards('he', { color: "red" }) > 0 },
                        direct: true,
                        popup: false,
                        audio: 3,
                        content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                            'step 0'
                            player.chooseCardTarget({
                                filterCard: { color: 'red' },
                                selectCard: [1, 3],
                                filterTarget: lib.filter.notMe,
                                position: "he",
                                selectTarget: () => { return ui.selected.cards.length },
                                complexCard: true,
                                complexTarget: true,
                                complexSelect: true,
                                prompt: get.prompt('ba_liuzha'),
                                prompt2: "弃置若干红色牌并选择相同数量的其他角色，依次对其造成1点火焰伤害",
                                ai1: (card) => { return 7.5 - get.value(card) },
                                ai2: target => {
                                    var player = _status.event.player;
                                    if (get.attitude(player, target) < 0 && target.countCards('h') == 0 && get.damageEffect(target, player, player, 'fire') > 0) {
                                        return 4 + get.damageEffect(target, player, player, 'fire');
                                    }
                                    return get.damageEffect(target, player, player, 'fire')
                                },
                            })
                            'step 1'
                            if (result.bool) {
                                player.logSkill('ba_liuzha', result.targets);
                                player.discard(result.cards)
                                for (var _target of result.targets) {
                                    _target.damage('fire');
                                }
                                player.draw(result.cards.length);
                            }
                        }
                    },
                    'ba_lanzha': {
                        trigger: { player: "phaseUseBegin" },
                        filter: (event, player) => { return player.countCards('he') > 0 && player.getHandcardLimit() > 0 },
                        direct: true,
                        popup: false,
                        content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                            'step 0'
                            player.chooseCardTarget({
                                filterCard: (card, player) => true,
                                selectCard: card => {
                                    var player = _status.event.player;
                                    var num = player.getHandcardLimit()
                                    return [1, num];
                                },
                                filterTarget: lib.filter.notMe,
                                position: "he",
                                selectTarget: () => { return ui.selected.cards.length },
                                complexCard: true,
                                complexTarget: true,
                                complexSelect: true,
                                prompt: get.prompt('ba_lanzha'),
                                prompt2: "弃置若干牌并选择相同数量的其他角色，依次对其造成1点火焰伤害",
                                ai1: (card) => { return 7.5 - get.value(card) },
                                ai2: target => {
                                    var player = _status.event.player;
                                    if (get.attitude(player, target) < 0 && target.countCards('h') == 0 && get.damageEffect(target, player, player, 'fire') > 0) {
                                        return 4 + get.damageEffect(target, player, player, 'fire');
                                    }
                                    return get.damageEffect(target, player, player, 'fire')
                                },
                            })
                            'step 1'
                            if (result.bool) {
                                player.logSkill('ba_liuzha', result.targets);
                                player.discard(result.cards);
                                for (var _target of result.targets) {
                                    _target.damage('fire');
                                }
                                player.addMark('ba_lanzha', result.targets.length);
                            }
                        },
                        intro: {
                            content: "手牌上限-#"
                        },
                        mod: {
                            maxHandcard: (player, num) => {
                                if (player.countMark('ba_lanzha') > num) return 0;
                                return num - player.countMark('ba_lanzha')
                            }
                        },
                        group: ['ba_lanzha_1', 'ba_lanzha_2'],
                        subSkill: {
                            1: {
                                trigger: { player: ['phaseAfter', 'phaseBegin'] },
                                forced: true,
                                filter: (event, player) => player.countMark('ba_lanzha') > 0,
                                sub: true,
                                charlotte: true,
                                content: () => {
                                    player.removeMark('ba_lanzha', player.countMark('ba_lanzha'));
                                },
                                popup: false,
                            }, 2: {
                                trigger: { player: 'phaseJieshuBegin' },
                                forced: true,
                                filter: (event, player) => player.countCards('h') == 0,
                                sub: true,
                                charlotte: true,
                                locked: true,
                                content: () => { player.draw(2) },
                                audio: "ba_lanzha"
                            }
                        },
                        audio: 2,
                    },
                    'ba_shouxie': {
                        trigger: { global: "phaseZhunbeiBegin" },
                        filter: (event, player) => {
                            if (player == event.player) return false;
                            return player.countCards('h') == 0 || player.countCards('h') < player.countCards('e');
                        },
                        direct: true,
                        popup: false,
                        audio: 2,
                        content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                            'step 0'
                            if (player.countCards('h') == 0) {
                                player.chooseBool().set('prompt', get.prompt('ba_shouxie')).set('prompt2', '令' + get.translation(trigger.player)
                                    + '摸一张牌并展示，然后你摸一张牌；若为装备牌，你再多摸一张牌。').set('ai', () => {
                                        var player = _status.event.player;
                                        var target = _status.event.target;
                                        return get.attitude(player, target);
                                    }).set('target', trigger.player);
                            } else {
                                player.chooseCard('he', get.prompt('ba_shouxie')).set('prompt2', '交给' + get.translation(trigger.player)
                                    + '一张牌并展示，然后你摸一张牌；若为装备牌，你再多摸一张牌。').set('ai', card => {
                                        var player = _status.event.player;
                                        var target = _status.event.target;
                                        if (get.attitude(player, target) < 0) return -1;
                                        if (get.type(card) == 'equip') return 8 - get.value(card);
                                        return 6 - get.value(card)
                                    }).set('target', trigger.player)
                            }
                            'step 1'
                            if (!result.bool) event.finish();
                            else {
                                var cards = [];
                                trigger.player.addTempSkill('ba_shouxie_1');
                                trigger.player.ba_shouxie_1 = player;
                                if (player.countCards('h') == 0) {
                                    cards = get.cards(1);
                                    trigger.player.gain(cards).gaintag.add('ba_shouxie');
                                    trigger.player.showCards(cards);
                                }
                                else {
                                    cards = result.cards;
                                    player.give(cards, trigger.player).gaintag.add('ba_shouxie');
                                }
                                var num = 1;
                                if (get.type(cards[0]) == 'equip') num++;
                                player.draw(num);
                            }
                        },
                        subSkill: {
                            1: {
                                onremove: (player, skill) => {
                                    player.removeGaintag('ba_shouxie');
                                    delete player.storage.ba_shouxie_1;
                                },
                                init: (player, skill) => {
                                    player.storage[skill] = player;
                                },
                                charlotte: true,
                                sub: true,
                                forced: true,
                                locked: true,
                                popup: false,
                                direct: true,
                                trigger: { player: "phaseJieshuBegin" },
                                filter: (event, player) => {
                                    return player.countCards('h', card => card.hasGaintag('ba_shouxie')) > 0
                                },
                                content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                                    'step 0'
                                    player.chooseTarget(target => {
                                        if (target == player) return false;
                                        return target == player.storage.ba_shouxie_1 || player.storage.ba_shouxie_1.inRange(target);
                                    }).set('ai', target => {
                                        var player = get.player();
                                        return get.damageEffect(target, player, player);
                                    })
                                    'step 1'
                                    if (result.bool) {
                                        player.logSkill('ba_shouxie', result.targets);
                                        result.targets[0].damage();
                                    }
                                }
                            }
                        }
                    },
                    'ba_kuxun': {
                        dutySkill: true,
                        forced: true,
                        locked: true,
                        trigger: { player: ["phaseJieshuBegin", 'gainEnd'] },
                        filter: (event, player, filtername) => {
                            if (player.getExpansions('ba_kuxun') && player.getExpansions('ba_kuxun').length && player.getExpansions('ba_kuxun').length >= 6) return false;
                            if (filtername == 'gainEnd') return event.cards.length > 0x0 && !player.storage.ba_kuxun_achieve && event.parent.parent.name != 'phaseDraw';
                            return true;
                        },
                        content: () => {
                            'step 0'
                            if (player.countCards('he') == 0) event._result = { bool: false };
                            else player.chooseCard('【苦训】触发：将一张牌放在武将牌旁或失去一点体力', 'he').set('ai', card => {
                                return 7.5 - get.value(card);
                            });
                            'step 1'
                            if (!result.bool) player.loseHp();
                            else {
                                player.addToExpansion(result.cards, 'addToExpansion').gaintag.add('ba_kuxun');
                            }
                        },
                        audio: 2,
                        group: ['ba_kuxun_achieve', 'ba_kuxun_fail'],
                        subSkill: {
                            achieve: {
                                trigger: { player: "phaseEnd" },
                                forced: true,
                                skillAnimation: true,
                                animationColor: "metal",
                                sub: true,
                                filter: (event, player) => {
                                    return player.getExpansions('ba_kuxun').length >= 3
                                },
                                content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                                    'step 0'
                                    game.log(player, '成功完成使命');
                                    player.storage.ba_kuxun_achieve = true;
                                    'step 1'
                                    event.num = player.getExpansions('ba_kuxun').length
                                    player.gain(player.getExpansions('ba_kuxun'));
                                    'step 2'
                                    delete player.storage.ba_kuxun_achieve
                                    player.awakenSkill('ba_kuxun');
                                    player.addSkillLog('ba_chanzhan');
                                    player.draw(event.num);
                                    player.insertPhase();
                                }
                            }, fail: {
                                trigger: {
                                    player: "dying",
                                },
                                forced: true,
                                content: function (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) {
                                    game.log(player, '使命失败');
                                    player.discard(player.getExpansions('ba_kuxun'))
                                    player.awakenSkill('ba_kuxun');
                                    if (player.hp < 1) player.recover(1 - player.hp);
                                },
                                sub: true,
                            }
                        },
                        intro: {
                            markcount: "expansion",
                            mark: function (dialog, storage, player) {
                                var cards = player.getExpansions('ba_kuxun');
                                if (player.isUnderControl(true)) dialog.addAuto(cards);
                                else return '共有' + get.cnNumber(cards.length) + '张牌';
                            },
                        },
                        derivation: "ba_chanzhan"
                    },
                    ba_yanshe: {
                        trigger: { global: "damageEnd" },
                        filter: (event, player) => {
                            return player != event.player && player != event.source && player.inRange(event.player);
                        },
                        // logTarget: "player",
                        // check: (event,player)=>{
                        //     return get.effect(event.player,'cisha',player,player)>0||get.effect(event.player,'huosha',player,player)>0;
                        // },
                        direct: true,
                        popup: false,
                        audio: 2,
                        content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                            'step 0'
                            player.chooseButton(['【掩射】：是否要对' + get.translation(trigger.player) + '使用一张【杀】？请选择【杀】的类型：', [[['基本', '', 'sha', 'fire'], ['基本', '', 'sha', 'stab']], 'vcard']]).set('ai', button => {
                                var player = _status.event.player;
                                var target = _status.event.target;
                                var card = { name: button.link[2], nature: button.link[3], isCard: true };
                                return get.effect(target, card, player, player);
                            }).set('target', trigger.player).set('filterButton', button => {
                                var player = _status.event.player;
                                var target = _status.event.target;
                                var card = { name: button.link[2], nature: button.link[3], isCard: true };
                                return player.canUse(card, target, true);
                            })
                            'step 1'
                            if (result && result.bool && result.links[0]) {
                                player.logSkill(event.name, trigger.player);
                                var card = { name: result.links[0][2], nature: result.links[0][3] };
                                player.useCard(card, trigger.player, false);
                            } else event.finish();
                            'step 2'
                            var bool = game.hasPlayer2(function (current) {
                                return current.getHistory('damage', function (evt) {
                                    return evt.getParent('ba_yanshe') == event;
                                }).length > 0
                            });
                            if (bool) {
                                player.draw();
                            }
                        },
                        usable: 1,
                    },
                    ba_chanzhan: {
                        trigger: {
                            player: "useCardToPlayer",
                        },
                        audio: 3,
                        shaRelated: true,
                        filter: (event, player) => {
                            return event.card && get.name(event.card) == 'sha' && event.target.countCards('h') > 0
                        },
                        check: function (event, player) {
                            return get.attitude(player, event.target) <= 0;
                        },
                        logTarget: "target",
                        content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                            var _cards = trigger.target.getCards('h').randomGets(1);
                            var _cards1 = get.cards(1);
                            player.showCards(_cards, get.translation(trigger.target) + '的一张牌');
                            player.showCards(_cards1, '牌堆顶的一张牌')
                            if (get.color(_cards) == get.color(_cards1)) {
                                if (player.stat[player.stat.length - 1].card.sha > 0) player.stat[player.stat.length - 1].card.sha--;
                                player.draw()
                            } else trigger.getParent().directHit.add(trigger.target);
                        }
                    },
                    ba_tumei: {
                        enable: 'phaseUse',
                        usable: 1,
                        filterCard: () => false,
                        selectCard: -1,
                        viewAs: {
                            name: "sha",
                            nature: "thunder"
                        },
                        prompt: "视为使用一张雷【杀】",
                        ai: {
                            order: function () {
                                var player = _status.event.player;
                                if (!player.hasShan() && !game.hasPlayer(function (current) {
                                    return player.canUse('sha', current) && current.hp == 1 && get.effect(current, { name: 'sha' }, player, player) > 0;
                                })) {
                                    return 0;
                                }
                                return 2.95;
                            },
                            skillTagFilter: function (player, tag, arg) {
                                if (player.hasSkill('weijing_disable')) return false;
                                if (arg != 'use') return false;
                            },
                            respondSha: true,
                            yingbian: function (card, player, targets, viewer) {
                                if (get.attitude(viewer, player) <= 0) return 0;
                                var base = 0, hit = false;
                                if (get.cardtag(card, 'yingbian_hit')) {
                                    hit = true;
                                    if (targets.filter(function (target) {
                                        return target.hasShan() && get.attitude(viewer, target) < 0 && get.damageEffect(target, player, viewer, get.nature(card)) > 0;
                                    })) base += 5;
                                }
                                if (get.cardtag(card, 'yingbian_all')) {
                                    if (game.hasPlayer(function (current) {
                                        return !targets.contains(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
                                    })) base += 5;
                                }
                                if (get.cardtag(card, 'yingbian_damage')) {
                                    if (targets.filter(function (target) {
                                        return get.attitude(player, target) < 0 && (hit || !target.mayHaveShan() || player.hasSkillTag('directHit_ai', true, {
                                            target: target,
                                            card: card,
                                        }, true)) && !target.hasSkillTag('filterDamage', null, {
                                            player: player,
                                            card: card,
                                            jiu: true,
                                        })
                                    })) base += 5;
                                }
                                return base;
                            },
                            canLink: function (player, target, card) {
                                if (!target.isLinked() && !player.hasSkill('wutiesuolian_skill')) return false;
                                if (target.mayHaveShan() && !player.hasSkillTag('directHit_ai', true, {
                                    target: target,
                                    card: card,
                                }, true)) return false;
                                if (player.hasSkill('jueqing') || player.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
                                return true;
                            },
                            basic: {
                                useful: [5, 3, 1],
                                value: [5, 3, 1],
                            },
                            result: {
                                target: function (player, target, card, isLink) {
                                    var eff = function () {
                                        if (!isLink && player.hasSkill('jiu')) {
                                            if (!target.hasSkillTag('filterDamage', null, {
                                                player: player,
                                                card: card,
                                                jiu: true,
                                            })) {
                                                if (get.attitude(player, target) > 0) {
                                                    return -7;
                                                }
                                                else {
                                                    return -4;
                                                }
                                            }
                                            return -0.5;
                                        }
                                        return -1.5;
                                    }();
                                    if (!isLink && target.mayHaveShan() && !player.hasSkillTag('directHit_ai', true, {
                                        target: target,
                                        card: card,
                                    }, true)) return eff / 1.2;
                                    return eff;
                                },
                            },
                            tag: {
                                respond: 1,
                                respondShan: 1,
                                damage: function (card) {
                                    if (card.nature == 'poison') return;
                                    return 1;
                                },
                                natureDamage: function (card) {
                                    if (card.nature) return 1;
                                },
                                fireDamage: function (card, nature) {
                                    if (card.nature == 'fire') return 1;
                                },
                                thunderDamage: function (card, nature) {
                                    if (card.nature == 'thunder') return 1;
                                },
                                poisonDamage: function (card, nature) {
                                    if (card.nature == 'poison') return 1;
                                },
                            },
                        },
                        subSkill: {
                            1: {
                                trigger: { player: ["phaseEnd"] },
                                mark: true,
                                init: (player, skill) => { player.storage[skill] = false; },
                                intro: {
                                    content: (dialog, player, storage) => {
                                        if (player.storage.ba_tumei_1) {
                                            return "直至下一回合结束造成的属性伤害+1且视为有谋【英姿】"
                                        } else return "无长时效果";
                                    }
                                },
                                content: () => {
                                    'step 0'
                                    if (player.getHistory("sourceDamage", evt => {
                                        return evt.num > 0 && evt.nature && evt.nature == 'thunder'
                                    }).length) {
                                        player.storage.ba_tumei_1 = true;
                                        player.addSkill('ba_tumei_2');
                                        if (!player.hasSkill('ba_yingzi')) player.addSkillLog('ba_yingzi');
                                        else player.storage.ba_tumei_2 = true;
                                        event.finish();
                                    } else {
                                        player.storage.ba_tumei_1 = false;
                                        if (player.hasSkill('ba_tumei_2')) player.removeSkill('ba_tumei_2');
                                        if (!player.storage.ba_tumei_2 && player.hasSkill('ba_yingzi')) player.removeSkill('ba_yingzi');
                                        player.judge();
                                    }
                                    'step 1'
                                    if (result.suit == 'spade' && result.number >= 2 && result.number <= 9) {
                                        player.chooseTarget([1, 3], lib.filter.notMe, '【兔魅】：选择对三名其他角色造成1点雷电伤害').set('ai', target => {
                                            var player = get.player();
                                            return get.damageEffect(target, player, player, 'thunder');
                                        })
                                    } else {
                                        player.draw(2);
                                        event.finish();
                                    }
                                    'step 2'
                                    if (result.bool) {
                                        for (var _target of result.targets) {
                                            _target.damage('thunder');
                                        }
                                    }
                                },
                                forced: true,
                                locked: true,
                                sub: true,
                                onremove: (player) => {
                                    delete player.storage.ba_tumei_1;
                                    if (player.storage.ba_tumei_2 != null) delete player.storage.ba_tumei_2;
                                }
                            },
                            2: {
                                trigger: { source: 'damageBegin' },
                                filter: (event, player) => event.nature,
                                forced: true,
                                locked: true,
                                sub: true,
                                charlotte: true,
                                content: () => {
                                    trigger.num++;
                                }
                            },
                        },
                        group: ['ba_tumei_1'],
                        derivation: "ba_yingzi"
                    },
                    ba_yingzi: {
                        inherit: "sbyingzi"
                    },
                    ba_zhajing: {
                        trigger: { global: "phaseZhunbeiBegin" },
                        filter: (event, player) => event.player != player && !player.hasSkill('ba_zhajing_used0'),
                        subSkill: {
                            used0: { "sub": true, charlotte: true, intro: { content: "本回合已发动过" }, mark: true, },
                            1: {
                                mod: {
                                    maxHandcard: (player, now) => { return num + 2 }
                                },
                                sub: true,
                                charlotte: true,
                            }, 2: {
                                sub: true,
                                charlotte: true,
                                init: (player, skill) => {
                                    player.storage[skill] = player;
                                },
                                onremove: true,
                                mod: {
                                    cardUsableTarget: (card, player, target) => {
                                        if (target == player.storage.ba_zhajing_2) return true;
                                    },
                                    targetInRange: (card, player, target) => {
                                        if (target == player.storage.ba_zhajing_2) return true;
                                    }
                                }
                            }
                        },
                        content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                            'step 0'
                            // var dialog = ['【炸井】：观看'+get.translation(trigger.player)+'的手牌，并选择一项执行',trigger.player.getCards('h')];
                            if (trigger.player.countCards('h') > 0) player.viewCards('【炸井】：观看' + get.translation(trigger.player) + '的手牌', trigger.player.getCards('h'))
                            var choiceList = ['其摸两张牌，本回合手牌上限+2；', '对该角色造成2点火焰伤害，然后其对你本回合使用牌无距离和次数限制。', '交给其一张牌然后其恢复1点体力。', '展示牌堆顶三张牌并选择一张，你弃置其所有该花色的手牌。'];
                            var choice = ['选项一', '选项二'];
                            if (player.countCards('he') > 0) choice.push('选项三');
                            else choiceList[2] = '<span style="opacity:0.5">' + choiceList[2] + '</span>';
                            if (trigger.player.countCards('h') > 0) choice.push('选项四');
                            else choiceList[3] = '<span style="opacity:0.5">' + choiceList[3] + '</span>';
                            choice.push('cancel2');
                            player.chooseControl(choice).set('prompt', '【炸井】：' + ((trigger.player.countCards('h') > 0) ? (get.translation(trigger.player) + '的手牌是：' + get.translation(trigger.player.getCards('h')) + '；') : "") + '<br>请选择一项执行').set('choiceList', choiceList).set('ai', () => {
                                var player = get.player();
                                var target = _status.event.target;
                                if (get.attitude(player, target) > 2) {
                                    if ((target.hp < 2 && target.isDamaged() && player.countCards('h') > 0) || (target.hp == 2 && target.isDamaged() && target.countCards('h') >= 2)) return '选项三';
                                    return '选项一';
                                } else {
                                    if ((get.damageEffect(target, player, player, 'fire') > 0 && target.countCards('h') <= 1) || (get.damageEffect(target, player, player, 'fire') != 0 && target.hp <= 2)) return '选项二';
                                    return '选项四';
                                }
                            }).set('target', trigger.player)
                            'step 1'
                            if (result.control != 'cancel2') {
                                switch (result.control) {
                                    case "选项一":
                                        trigger.player.draw(2);
                                        trigger.player.addTempSkill('ba_zhajing_1');
                                        break;
                                    case "选项二":
                                        trigger.player.damage(2, 'fire');
                                        trigger.player.addTempSkill('ba_zhajing_2');
                                        trigger.player.storage.ba_zhajing_2 = player;
                                        break;
                                    case "选项三":
                                        player.chooseCard('交给' + get.translation(trigger.player) + "一张牌", 'he', 1, true).set('ai', card => { return 7 - get.value(card) });
                                        break;
                                    case '选项四':
                                        event.cards = get.cards(3)
                                        event._cards = trigger.player.getCards('h');
                                        player.showCards(event.cards)
                                        player.chooseButton(['炸井：选择一张牌，弃置' + get.translation(trigger.player) + '与其颜色相同的所有手牌', event.cards]).set('ai', button => {
                                            var player = get.player()
                                            var link = button.link;
                                            var _cards = _status.event._cards;
                                            var num = 0;
                                            for (var _card of _cards) {
                                                if (get.suit(_card) == get.suit(link)) {
                                                    num += get.value(_card);
                                                }
                                            }
                                            return num;
                                        }).set('_cards', event._cards);
                                }
                                if (!['选项三', '选项四'].contains(result.control)) event.finish();
                                else event.choice = result.control;
                                player.addTempSkill('ba_zhajing_used0', 'roundStart')
                            } else event.finish();
                            'step 2'
                            if (event.choice == '选项三' && result.bool) {
                                player.give(trigger.player, result.cards);
                                trigger.player.recover();
                            } else if (event.choice == '选项四' && result.links) {
                                var suit = get.suit(result.links[0]);
                                var __cards = trigger.player.getCards('h', { "suit": suit });
                                trigger.player.discard(__cards);
                            }
                        },
                        logTarget: "player",
                        check: (event, player) => {
                            var target = event.player;
                            if (get.attitude(player, target) > 2) {
                                return target.countCards('h') <= 2 || (target.hp <= 2 && target.isDamaged() && player.countCards('h') > 0);
                            } else if (get.attitude(player, target) < 2) {
                                return target.isMaxHandcard(true) || (get.damageEffect(target, player, player, 'fire') > 0 && target.countCards('h') <= 1) || (get.damageEffect(target, player, player, 'fire') != 0 && target.hp <= 2)
                            }
                        },
                        ai: {
                            expose: 0.4,
                            threaten: 1.1
                        }
                    },
                    ba_tuya: {
                        enable: ["chooseToUse", "chooseToRespond"],
                        filter: (event, player) => {
                            var allnone = true;
                            for (var cardname of lib.inpile) {
                                if (get.type(cardname) == 'basic') {
                                    if (cardname == 'sha') {
                                        var brk = false;
                                        for (var nature of lib.nature) {
                                            if (event.filterCard({ name: cardname, nature: 'fire' }, player, event)) {
                                                allnone = false;
                                                brk = true;
                                                break;
                                            }
                                        }
                                        if (brk) break;
                                    }
                                    if (event.filterCard({ name: cardname }, player, event)) {
                                        allnone = false;
                                        break;
                                    }
                                }
                            }
                            return !allnone && player.getExpansions('ba_tuya').length > 0
                        },
                        chooseButton: {
                            dialog: function (event, player) {
                                var dialog = ui.create.dialog('涂鸦', 'hidden');
                                var list = [];
                                for (var cardname of lib.inpile) {
                                    if (get.type(cardname) == 'basic' && event.filterCard({ name: cardname }, player, event)) {
                                        list.push(cardname);
                                        if (cardname == 'sha' && event.filterCard({ name: cardname, nature: 'fire' }, player, event)) list.push('huosha')
                                    }
                                }
                                if (list.length == 0) return ui.create.dialog("无可用牌")
                                if (list.length == 1) {
                                    dialog._cardName = list[0]
                                    player.storage.ba_tuya = list[0]
                                    /* console.log("1") */
                                } else {
                                    dialog._chooseButton = 2;
                                    /* var table = document.createElement('div');
                                    table.classList.add('add-setting');
                                    table.style.margin = '0';
                                    table.style.width = '100%';
                                    table.style.position = 'relative';
                                    for (var i of list) {
                                        var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                                        td.innerHTML = '<span>' + get.translation(i) + '</span>';
                                        td.link = i;
                                        td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
                                        for (var j in lib.element.button) {
                                            td[j] = lib.element.button[j];
                                        }
                                        table.appendChild(td);
                                        dialog.buttons.add(td);
                                    }
                                    dialog.content.appendChild(table); */
                                    /* console.log(list)
                                    console.log([list.map(i=>
                                        {
                                            return [i, get.translation(i)];
                                        }),'tdnodes']); */
                                    dialog.add([list.map(i => {
                                        return [i, get.translation(i)];
                                    }), 'tdnodes']);
                                }
                                dialog.add(player.getExpansions('ba_tuya'));
                                return dialog;
                            },
                            filter: function (button) {
                                var evt = _status.event, player = _status.event.player;
                                if (evt.dialog) {
                                    if (!evt.dialog._chooseButton) {
                                        var evt2 = _status.event.getParent();
                                        var __evt = { name: evt.dialog._cardName };
                                        if (evt.dialog._cardName == 'huosha') __evt = { name: 'sha', nature: 'fire' }
                                        return evt2.filterCard(get.autoViewAs(__evt, [button.link]), player, evt2);
                                    }
                                    if (ui.selected.buttons.length) {
                                        var str = ui.selected.buttons[0].link;
                                        if (typeof str != 'string' || typeof button.link == 'string') return false;
                                        var evt2 = _status.event.getParent();
                                        var _str = { name: str }
                                        if (str == 'huosha') _str = { name: "sha", nature: "fire" }
                                        return evt2.filterCard(get.autoViewAs(_str, [button.link]), player, evt2);
                                    }
                                    return typeof button.link == 'string';
                                }
                                return false;
                            },
                            select: function () {
                                return _status.event.dialog ? (_status.event.dialog._chooseButton || 1) : 1;
                            },
                            prompt: function (links, player) {
                                // console.log(links)
                                return '请选择该牌的目标';
                            },
                            backup: function (links, player) {
                                var card, name;
                                var nature = undefined;
                                if (links.length == 2) {
                                    name = links[0];
                                    card = links[1];
                                }
                                else {
                                    card = links[0];
                                    name = player.storage.ba_tuya;
                                }
                                if (name == 'huosha') {
                                    name = 'sha'
                                    nature = 'fire'
                                }
                                return {
                                    // audio:'jibing',
                                    filterCard: function (card) {
                                        return card == lib.skill.ba_tuya_backup.card;
                                    },
                                    selectCard: -1,
                                    position: 'x',
                                    viewAs: { name: name, nature: nature },
                                    card: card,
                                }
                            }
                        },
                        intro: {
                            content: "expansion",
                            markcount: "expansion",
                        },
                        onremove: function (player, skill) {
                            var cards = player.getExpansions(skill);
                            if (cards.length) player.loseToDiscardpile(cards);
                        },
                        usable: 1,
                        marktext: "颜料",
                        hiddenCard: (player, card) => {
                            if (get.type(card) == 'basic' && player.getExpansions('ba_tuya').length) {
                                if (!(player.storage.counttrigger && player.storage.counttrigger.ba_tuya)) return true;
                            }
                        },
                        subSkill: {
                            put: {
                                forced: true,
                                trigger: { player: ["useCardAfter", "respondAfter"] },
                                filter: (event, player) => {
                                    if (event.skill == 'ba_tuya_backup') return false;
                                    if (!event.cards || event.cards.length == 0) return false;
                                    if (event.cards.filterInD().length == 0) return false;
                                    return true;
                                },
                                content: () => {
                                    player.addToExpansion(trigger.cards.filterInD()).gaintag.add('ba_tuya')
                                },
                                sub: true,
                            },
                            backup: {
                                // audio:"jibing",
                                sub: true,
                            },
                            use: {
                                trigger: { player: "phaseZhunbeiBegin" },
                                filter: (event, player) => {
                                    return player.getExpansions('ba_tuya').length > 0;
                                },
                                sub: true,
                                content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                                    'step 0'
                                    event.cards = player.getExpansions('ba_tuya');
                                    var suit_dic = {}
                                    for (var str of lib.suit) suit_dic[str] = 0;
                                    for (var card of event.cards) {
                                        if (!get.suit(card) in suit_dic) suit_dic[get.suit(card)] = 1;
                                        else suit_dic[get.suit(card)]++;
                                    }
                                    var nums = [];
                                    for (var suit in suit_dic) {
                                        nums.push(suit_dic[suit]);
                                    }
                                    event.min = Math.min(...nums);
                                    event.max = Math.max(...nums);
                                    'step 1'
                                    if (event.min < 2) {
                                        event.les_2 = true;
                                        if (event.min < 1 && player.hp > 1) player.loseHp()
                                        player.chooseCardButton('【涂鸦】：选择至多两张“颜料”以获得', event.cards, [1, 2], true).set('ai', button => {
                                            return get.value(button.link);
                                        })
                                    } else {
                                        event.les_2 = false;
                                        player.chooseTarget('【涂鸦】：选择一名角色获得所有“颜料”', true).set('ai', target => {
                                            var player = _status.event.player;
                                            // if (player==target) return event.cards.length;
                                            if (get.attitude(player, target) <= 0) return -1;
                                            // return (target.hp<2?2:1)+(target.needsToDiscard()>0?-2:target.maxHandcard-target.countCards('h'))+Math.floor(get.attitude(player,target));
                                            var num = 0;
                                            for (var card of cards) {
                                                num += get.value(card, target)
                                            }
                                            var eff = 1;
                                            if (player == target) eff = 2;
                                            if (get.attitude(player, target) >= 5 || player == target) {
                                                if (target.countCards('h') < 2) eff++;
                                                if (target.hp < 2) eff++;
                                            }
                                            return eff * num;
                                        })
                                    }
                                    'step 2'
                                    if (!result.bool) event.finish();
                                    else {
                                        player.addTempSkill('ba_tuya_not')
                                        if (!event.les_2) {
                                            if (result.targets[0] != player) player.give(event.cards, result.targets[0]);
                                            else player.gain(event.cards, 'gain2', 'fromStorage').gaintag.add('ba_tuya');
                                        } else {
                                            player.gain(result.links, 'gain2', 'fromStorage').gaintag.add('ba_tuya');
                                        }
                                    }
                                    'step 3'
                                    if (event.max <= 1) event.finish();
                                    else {
                                        var prompt1 = '选择一名角色，'
                                        var prompt = '视为对其使用一张不记入次数的红桃花色的火【杀】';
                                        if (player.isDamaged()) prompt += '；若此【杀】命中，恢复1点体力';
                                        if (event.max > 2) prompt1 += '弃置其两张牌令其本回合内所有技能失效，再'
                                        if (event.max > 3) prompt1 += '令其本回合无法使用或打出手牌，然后'
                                        player.chooseTarget(prompt1 + prompt, (card, player, target) => {
                                            // var player = _status.event.player;
                                            return player.canUse({ name: "sha", nature: "fire", suit: "heart" }, target);
                                        })
                                    }
                                    'step 4'
                                    if (result.bool) {
                                        if (event.max > 2) {
                                            player.discardPlayerCard(result.targets[0], [0, 2], 'hej')
                                            result.targets[0].addTempSkill('ba_tuya_baiban');
                                        }
                                        if (event.max > 3) {
                                            result.targets[0].addTempSkill('ba_tuya_lock');
                                        }
                                        player.useCard({ name: "sha", nature: "fire", suit: "heart" }, result.targets, false)
                                    } else event.finish();
                                    'step 5'
                                    if (player.isDamaged() && player.hasHistory('sourceDamage', evt => {
                                        var evtx = evt.getParent('useCard');
                                        return evt.card && get.name(evt.card) == 'sha' && evtx.card == evt.card && evtx.getParent() == event;
                                    })) player.recover();
                                },
                                forced: true,
                            },
                            lock: {
                                mod: {
                                    cardEnabled: function () {
                                        return false;
                                    },
                                    cardUsable: function () {
                                        return false;
                                    },
                                    cardRespondable: function () {
                                        return false;
                                    },
                                    cardSavable: function () {
                                        return false;
                                    },
                                },
                                marktext: "涂鸦",
                                mark: true,
                                intro: { content: "已被大蛇的爹的油漆罐击中" },
                                charlotte: true
                            },
                            not: {
                                charlotte: true,
                                onremove: function (player) {
                                    player.removeGaintag('ba_tuya');
                                },
                                mod: {
                                    ignoredHandcard: function (card, player) {
                                        if (card.hasGaintag('ba_tuya')) return true;
                                    },
                                    cardDiscardable: function (card, player, name) {
                                        if (name == 'phaseDiscard' && card.hasGaintag('ba_tuya')) return false;
                                    },
                                    cardEnabled2: function (card, player) {
                                        if (get.itemtype(card) == 'card' && card.hasGaintag('ba_tuya')) return false;
                                    }
                                },
                                sub: true,
                            },
                            baiban: {
                                init: function (player, skill) {
                                    player.addSkillBlocker(skill);
                                },
                                onremove: function (player, skill) {
                                    player.removeSkillBlocker(skill);
                                },
                                charlotte: true,
                                skillBlocker: function (skill, player) {
                                    if (!(player.getEquip(2) && player.getEquip(2).name == 'tengjia') && lib.card.tengjia.skills.contains(skill)) return false;
                                    return !lib.skill[skill].charlotte;
                                },
                                mark: true,
                                intro: {
                                    content: function (storage, player, skill) {
                                        var list = player.getSkills(null, false, false).filter(function (i) {
                                            return lib.skill.baiban.skillBlocker(i, player);
                                        });
                                        if (list.length) return '失效技能：' + get.translation(list);
                                        return '无失效技能';
                                    },
                                },
                            }
                            // cure: {
                            //     trigger:{
                            //         global:"damageSource",
                            //     },
                            // }
                        },
                        group: ['ba_tuya_put', 'ba_tuya_use']
                    },
                    ba_shedie: {
                        mod: {
                            cardnature: (card, player) => {
                                if (!get.nature(card, false) && get.name(card) == 'sha') return 'fire'
                            },
                            suit: (card, suit) => {
                                if (!get.nature(card, false) && get.name(card) == 'sha') {
                                    if (suit == 'spade') return 'heart';
                                    if (suit == 'club') return 'diamond';
                                }
                            }
                        },
                        trigger: { player: "useCard" },
                        filter: (event, player) => {
                            return event.card && get.tag(event.card, "damage") && get.color(event.card) && get.color(event.card) != 'none' && event.targets.length && !(event.targets.length == 1 && event.targets[0] == player);
                        },
                        direct: true,
                        content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                            'step 0'
                            var prompt_1 = ''
                            if (get.color(trigger.card) == 'red') prompt_1 = '令其各自视为装备【藤甲】（原有装备无效）'
                            else prompt_1 = '获取其两张牌'
                            player.chooseTarget([1, 3], get.prompt(event.name), (card, player, target) => {
                                // var player = _status.event.player;
                                if (get.color(trigger.card) != 'red' && target.countCards('hej') == 0) return false;
                                return target != player && trigger.targets.contains(target)
                            }).set('prompt2', '指定任意角色，' + prompt_1).set('ai', target => {
                                var player = _status.event.player;
                                if (get.color(trigger.card) == 'red') {
                                    if (target.getEquip(2) && target.getEquip(2).name == 'tengjia') return false;
                                    if (['nanman', 'wanjian', 'cxy_shuiyanqijun'].contains(get.name(trigger.card)) || (get.name(trigger.card) == 'sha' && !get.nature(trigger.card))) {
                                        return -get.damageEffect(target, player, player)
                                    } else if (get.tag(trigger.card, 'fireDamage')) {
                                        return -get.attitude(player, target);
                                    } else return -1;
                                } else {
                                    if (get.attitude(player, target) > 0) {
                                        if (target.countCards('j') > 0) return (target.countCards('j') + 1) * (target.countCards('j') + 1)
                                        return -1;
                                    }
                                    if (target.countCards('he') <= 3) return 9 - target.countCards('he');
                                    return target.countCards('he');
                                }
                            })
                            'step 1'
                            if (result.bool) {
                                player.logSkill(event.name, result.targets);
                                for (var target of result.targets) {
                                    if (get.color(trigger.card) == 'red') {
                                        // 变换防具名代码来自扩展《金庸群侠传》
                                        var equip2 = target.getEquip(2);
                                        if (equip2) {
                                            target.removeEquipTrigger(equip2);
                                            var origin_name = equip2.name;
                                            equip2.name = 'tengjia';
                                            equip2.origin_name = origin_name;
                                            target.addEquipTrigger(equip2);
                                            var next = game.createEvent('ba_shedie_clear');
                                            next.card = equip2;
                                            next.player = target;
                                            next.forceDie = true;
                                            event.next.remove(next);
                                            trigger.getParent().after.push(next);

                                            next.setContent(function () {
                                                if (!card.origin_name) return;
                                                var bool = false;
                                                if (player.isAlive() && player.getCards('e').contains(card)) bool = true;
                                                if (bool) player.removeEquipTrigger(card);
                                                var origin_name = card.origin_name;
                                                delete card.origin_name;
                                                card.name = origin_name;
                                                if (bool) player.addEquipTrigger(card);
                                            })
                                        } else {
                                            if (lib.card.tengjia.skills) {
                                                target.addSkill(lib.card.tengjia.skills)
                                                var next = game.createEvent('ba_shedie_clease');
                                                next.player = target;
                                                next.forceDie = true;
                                                // next.skillname = lib.card.tengjia.skills;
                                                event.next.remove(next);
                                                trigger.getParent().after.push(next);
                                                next.setContent(function () {
                                                    for (var skillname of lib.card.tengjia.skills) if (player.isAlive() && player.hasSkill(skillname) && !(player.getEquip(2) && player.getEquip(2).name == ('tengjia'))) player.removeSkill(skillname);
                                                })
                                            }
                                        }
                                    } else {
                                        if (target.countCards('hej') <= 1) {
                                            player.gainPlayerCard(target, 1, 'hej')
                                        }
                                        else player.gainPlayerCard(target, 2, 'hej');
                                    }
                                }
                            }
                        },
                        popup: false,
                        ai: {
                            unequip_ai: true,
                            skillTagFilter: (player, tag, arg) => {
                                if (get.attitude(player, arg.target) > 0) return false;
                                var equip = arg.target.getEquip(2)
                                if (!equip || equip.name == 'tengjia') return false;
                                if (arg && arg.card && get.tag(arg.card, 'damage')) return true;
                                return false;
                            }
                        }
                    },
                    ba_zhadian: {
                        trigger: { global: "phaseDrawEnd" },
                        init: (player, skill) => { player.storage[skill] = 0 },
                        mark: true,
                        intro: {
                            content: "本轮已使用#次"
                        },
                        filter: (event, player) => {
                            return player.storage.ba_zhadian < 2 && player != event.player && event.player.countCards('he') > 0 && player.countCards('h') > 0;
                        },
                        // logTarget: "player",
                        content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                            'step 0'
                            player.chooseToDiscard([1, Math.min(3, player.countCards('h'), trigger.player.countCards('he'))], 'h', get.prompt2(event.name)).set('ai', card => {
                                var player = _status.event.player;
                                var target = _status.event.target;
                                if (get.attitude(player, target) >= 0) return -1;
                                else {
                                    if (target.hp == 1 && get.damageEffect(target, player, player, 'thunder') > 0) return 4 + get.number(card) / 2 - get.value(card);
                                    else if (target.countCards('h') >= 5 || game.countPlayer(current => current.countCards('h') > target.countCards('h')) <= 1) return 11 - get.number(card) / 2 - get.value(card);
                                }
                                return -1;
                            }).set('target', trigger.player)
                            'step 1'
                            if (result.bool) {
                                player.logSkill(event.name, trigger.player);
                                player.storage[event.name]++;
                                player.syncStorage('ba_zhadian')
                                event.cards = result.cards
                                player.chat("探店齁逼多，真假晴奈说！")
                                player.chat('老板，上几道菜让咱尝尝！')
                                player.choosePlayerCard(trigger.player, 'he', result.cards.length, true, "visible", '选择' + get.translation(trigger.player) + get.cnNumber(result.cards.length) + '张牌').set('ai', button => {
                                    var player = _status.event.player;
                                    var target = _status.event.target
                                    if (target.hp == 1 && get.damageEffect(target, player, player, 'thunder') > 0) return 10 - get.number(button.link);
                                    else {
                                        var val = get.buttonValue(button);
                                        if (get.attitude(player, target) > 0) return -val;
                                        return val;
                                    }
                                }).set('target', trigger.player);
                            } else event.finish();
                            'step 2'
                            if (result.bool) {
                                event.cards2 = [];
                                event.num2 = 0;
                                event.num1 = 0;
                                for (var link of result.links) {
                                    event.cards2.push(link);
                                    event.num2 += get.number(link);
                                }
                                for (var _card of event.cards) {
                                    event.num1 += get.number(_card)
                                }
                                trigger.player.discard(event.cards2, 'notBySelf');
                                game.log(trigger.player, '被选择的牌点数和为', event.num2);
                                game.log(player, '选择的牌点数和为', event.num1);
                                if (event.num1 <= event.num2) {
                                    player.chat('真是美味啊！谢谢老板款待。')
                                    player.gain(event.cards2, 'gain2')
                                } else {
                                    player.chat('什么破饭馆，一点也不好吃，炸了！')
                                    trigger.player.damage('thunder')
                                    player.draw(result.links.length);
                                    trigger.player.draw(result.links.length);
                                }
                            }
                        },
                        direct: true,
                        popup: false,
                        group: "ba_zhadian_1",
                        subSkill: {
                            1: {
                                trigger: { global: "roundStart" },
                                filter: (event, player) => player.storage['ba_zhadian'] > 0,
                                charlotte: true,
                                sub: true,
                                forced: true,
                                content: () => {
                                    player.storage['ba_zhadian'] = 0;
                                    player.syncStorage('ba_zhadian')
                                },
                                popup: false,
                            }
                        },
                        ai: {
                            expose: 0.8,
                            threaten: 1.4,
                        }
                    },
                    ba_chuanju: {
                        mod: {
                            cardnature: (card) => {
                                if (!get.nature(card, false) && get.name(card) == 'sha' && get.color(card) == 'black') return 'thunder';
                            }
                        },
                        locked: true,
                        forced: true,
                        filter: (event, player) => {
                            return event.card && get.name(event.card) == 'sha' && get.nature(event.card) && get.nature(event.card) == 'thunder'
                        },
                        trigger: { player: "useCardBefore" },
                        content: () => {
                            player.useCard({ name: "jiu", isCard: true }, false, player);
                        },
                        // logSkill: player,
                        subSkill: {
                            1: {
                                trigger: { source: "damageEnd" },
                                filter: (event, player) => {
                                    return event.num >= 2 && game.hasPlayer(current => current != player && current != event.player)
                                },
                                direct: true,
                                popup: false,
                                // logSkill: 'player',
                                content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                                    'step 0'
                                    player.chooseTarget(1, (card, player, target) => {
                                        return player != target && target != trigger.player;
                                    }, get.prompt('ba_chuanju')).set('prompt2', '对一名不为' + get.translation(trigger.player) + '的其他玩家造成' + get.cnNumber(Math.ceil(trigger.num / 2)) + '点同属性伤害').set('ai', target => {
                                        var player = _status.event.player;
                                        var num = _status.event.num;
                                        var nature = _status.event.nature;
                                        if (num == 1) {
                                            if (nature) return get.damageEffect(target, player, player, nature)
                                            else return get.damageEffect(target, player, player)
                                        } else return -get.attitude(player, target)
                                    }).set('damagenum', Math.ceil(trigger.num / 2)).set('nature', trigger.nature)
                                    'step 1'
                                    if (result.bool) {
                                        player.logSkill(result.targets)
                                        if (trigger.nature) result.targets[0].damage(trigger.nature, Math.ceil(trigger.num / 2))
                                        else result.targets[0].damage(Math.ceil(trigger.num / 2))
                                    }
                                },
                                sub: true,
                            }, 2: {
                                trigger: { source: "damageAfter" },
                                filter: (event, player) => {
                                    return event.nature && event.nature == 'thunder' && event.player.isAlive() && event.player.countCards('hej') > 0
                                },
                                sub: true,
                                logSkill: 'player',
                                check: (event, player) => {
                                    if (get.attitude(player, event.player) <= 0) return true;
                                    return event.player.countCards('j') > 0;
                                },
                                content: () => {
                                    player.discardPlayerCard(trigger.player, 'hej')
                                },
                                prompt2: (event, player) => "弃置" + get.translation(event.player) + "的一张牌",
                            }
                        },
                        group: ["ba_chuanju_1", "ba_chuanju_2"],
                    },
                    ba_lijiao: {
                        trigger: { player: "useCardToPlayered" },
                        filter: (event, player) => {
                            return event.targets.length == 1 && player.storage.ba_lijiao && event.card && get.suit(event.card)
                                && get.suit(event.card) != 'none' && event.target.countCards('e', _card => get.suit(event.card) == get.suit(_card)) && player != event.target;
                        },
                        init: (player, skill) => { player.storage[skill] = true; },
                        mark: true,
                        intro: {
                            content: (storage, player, dialog) => {
                                if (player.storage.ba_lijiao) return "【师】面向上";
                                else return "【幼】面向上";
                            },
                        },
                        content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                            player.gainPlayerCard('e', trigger.target, [1, trigger.target.countCards('e', { suit: get.suit(trigger.card) })], { suit: get.suit(trigger.card) },
                                '获得' + get.translation(trigger.target) + '任意花色为' + get.translation(get.suit(trigger.card)) + '的装备牌。')
                        },
                        prompt2: (event, player) => {
                            return '获得' + get.translation(event.target) + '任意张花色为' + get.translation(get.suit(event.card)) + '的装备牌。'
                        },
                        check: (event, player) => { return get.attitude(player, event.player) <= -1 && !event.player.hasSkillTag('reverseEquip') }
                    },
                    ba_youbian: {
                        sunbenSkill: true,
                        enable: "phaseUse",
                        filter: (event, player) => { return player.countCards('he', card => get.type(card) == 'equip') && !player.hasSkill('ba_youbian_sunben') },
                        selectCard: -1,
                        filterCard: card => get.type(card) == 'equip',
                        complexCard: true,
                        position: "he",
                        lose: false,
                        delay: false,
                        usable: 1,
                        content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                            'step 0'
                            event.cards = cards;
                            event.index = 0;
                            event.list = [];
                            'step 1'
                            player.chooseUseTarget({ name: 'tiesuo' }, [event.cards[0]]);
                            event.list.push('tiesuo');
                            'step 2'
                            event.index++;
                            if (event.index >= event.cards.length) {
                                player.addSkill('ba_youbian_sunben');
                                if (player.hasSkill('ba_lijiao') && player.storage.ba_lijiao) {
                                    player.storage.ba_lijiao = false;
                                    game.log(player, '将标记的【师】面翻到了【幼】面');
                                    player.syncStorage('ba_lijiao');
                                }
                                event.goto(6);
                            }
                            'step 3'
                            var list = [];
                            for (var name of lib.inpile) {
                                if (get.type(name) == 'trick' && !event.list.includes(name) && player.hasUseTarget(get.autoViewAs({ name: name }, event.cards[event.index]), false, true)) list.push(['锦囊', '', name]);
                            }
                            if (list.length == 0) event.goto(6);
                            player.chooseButton(['将' + get.translation(event.cards[event.index]) + '当作……使用', [list, 'vcard']]).set('ai', function (button) {
                                return _status.event.player.getUseValue({ name: button.link[2] });
                            });
                            'step 4'
                            if (result.bool) {
                                event.list.push(result.links[0][2]);
                                player.chooseUseTarget({ name: result.links[0][2], isCard: true }, [event.cards[event.index]], true, false, 'nodistance');
                            }
                            'step 5'
                            event.goto(2);
                            'step 6'
                            event.targets = game.filterPlayer(current => current != player && current.isLinked());
                            if (event.targets.length == 0) event.finish();
                            else player.chooseTarget((card, player, target) => event.targets.includes(target), 1, '选择一名横置状态的角色，对其造成1点伤害').set('ai', target => get.damageEffect(target, _status.event.player, _status.event.player))
                            'step 7'
                            if (result.bool) {
                                result.targets[0].damage()
                            }
                        },
                        ai: {
                            result: {
                                player: player => {
                                    var num = 0;
                                    for (var card of player.getCards('e')) {
                                        num += (7 - get.equipValue(card)) / 7;
                                    }
                                    return num - 1;
                                }
                            }
                            , order: 3,
                        },
                        subSkill: {
                            'sunben': {
                                forced: true,
                                trigger: { player: "drawAfter" },
                                init: function (player, skill) {
                                    player.storage[skill] = 0
                                },
                                onremove: true,
                                mark: true,
                                intro: {
                                    markcount: num => (num || 0).toString(),
                                    content: "摸牌进度：#/6"
                                },
                                filter: (event, player) => event.num > 0,
                                firstDo: true,
                                // popup: false,
                                content: () => {
                                    'step 0'
                                    player.addMark('ba_youbian_sunben', trigger.num)
                                    'step 1'
                                    if (player.countMark('ba_youbian_sunben') >= 6) {
                                        player.removeSkill('ba_youbian_sunben')
                                        player.popup("幼变");
                                        game.log(player, '恢复了技能', '【幼变】');
                                    }
                                }
                            }
                        }
                    },
                    ba_jugao: {
                        trigger: { player: "phaseZhunbeiBegin" },
                        filter: (event, player) => player.hasSkill('ba_lijiao') && !player.storage.ba_lijiao,
                        check: (event, player) => {
                            return (player.countCards('h', card => player.hasUseTarget(card, true, true) && get.number(card) >= 7) >= 1 ||
                                player.countCards('h', card => player.hasUseTarget(card, true, true)) >= 2) && !player.hasJudge('lebu')
                        },
                        content: () => {
                            'step 0'
                            player.judge();
                            'step 1'
                            var num = result.number;
                            player.addTempSkill('ba_jugao_1')
                            player.addTempSkill('ba_jugao_2');
                            player.storage.ba_jugao_1 = num;
                            player.syncStorage("ba_jugao_1")
                            if (player.hasSkill('ba_lijiao') && !player.storage.ba_lijiao) {
                                player.storage.ba_lijiao = true;
                                game.log(player, '将标记的【幼】面翻到了【师】面');
                                player.syncStorage('ba_lijiao');
                            }
                        },
                        subSkill: {
                            1: {
                                trigger: { player: "phaseJieshuBegin" },
                                filter: (event, player) => {
                                    var num = 0
                                    var evts = player.getHistory('useCard', evt => typeof get.number(evt.card) == 'number')
                                    for (var evt of evts) {
                                        num += get.number(evt.card)
                                    }
                                    return num >= player.storage.ba_jugao_1
                                },
                                mark: true,
                                intro: {
                                    markcount: num => (num || 0).toString(),
                                    content: (storage, player, skill) => {
                                        var num = 0
                                        var evts = player.getHistory('useCard', evt => typeof get.number(evt.card) == 'number')
                                        for (var evt of evts) {
                                            num += get.number(evt.card)
                                        }
                                        return "目标点数：" + player.storage.ba_jugao_1.toString() + "<br>用牌总数：" + num.toString()
                                    }
                                },
                                init: (player, skill) => { player.storage[skill] = 0 },
                                onremove: true,
                                content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                                    'step 0'
                                    player.draw(2)
                                    'step 1'
                                    player.chooseTarget((card, player, target) => player.canUse('sha', target, false), [1, 2], '选择两名角色对其使用【杀】', target => get.effect(target, 'sha', player, player))
                                    'step 2'
                                    if (result.bool) {
                                        player.useCard({ name: "sha", isCard: true, storage: { ba_jugao: true } }, result.targets, false)
                                    } else event.finish()
                                    'step 3'
                                    if (player.hasHistory('sourceDamage', function (evt) {
                                        var evtx = evt.getParent('useCard');
                                        return evtx && evtx.card == evt.card && evtx.getParent && evtx.getParent() == event;
                                    })) {
                                        var evts = player.getHistory('sourceDamage', function (evt) {
                                            var evtx = evt.getParent('useCard');
                                            return evtx && evtx.card == evt.card && evtx && evtx.getParent && evtx.getParent() == event;
                                        })
                                        var num = 0;
                                        for (var evt of evts) {
                                            num += evt.num
                                        }
                                        player.draw(num)
                                    }
                                },
                                sub: true,
                                forced: true,
                                charlotte: true,
                            },
                            2: {
                                trigger: { player: "useCardToPlayer" },
                                ai: {
                                    unequip: true,
                                    skillTagFilter: (player, tag, arg) => {
                                        return arg && arg.card && arg.card.storage && arg.card.storage.ba_jugao
                                    }
                                },
                                firstDo: true,
                                content: () => {
                                    trigger.target.addTempSkill('fengyin')
                                },
                                forced: true,
                                filter: (event, player) => event.card && get.name(event.card) == 'sha' && event.card.storage && event.card.storage.ba_jugao_1,
                                charlotte: true,
                                sub: true,
                            },
                        }
                    },
                    ba_jichang: {
                        trigger: { player: ['phaseJieshuBegin', 'phaseDrawBegin'] },
                        locked: true,
                        forced: true,
                        content: () => {
                            if (trigger.name == 'phaseDraw') {
                                trigger.cancel();
                            } else {
                                var num = player.maxHp - player.hp + player.getHistory('sourceDamage', evt => evt.source == player && evt.num > 0).length
                                player.draw(Math.min(num, 5))
                            }
                        }
                    },
                    ba_nushe: {
                        enable: "phaseUse",
                        usable: 1,
                        filter: (event, player) => player.countCards('h') > 0,
                        content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                            'step 0'
                            if (player.hp > 1) player.loseHp()
                            target.damage(2, 'fire')
                            if (game.hasPlayer(current => current != player && current != target)) player.chooseTarget(
                                1, (card, player, _target) => player != _target && target != _target && (target.previous == _target || target.next == _target),
                                '【怒射】：你可再选择一名角色，对其造成1点火焰伤害。'
                            ).set('ai', target => {
                                var player = get.player()
                                return get.damageEffect(target, player, player, 'fire')
                            })
                            else event.finish()
                            'step 1'
                            if (result.bool) {
                                result.targets[0].damage('fire')
                            }
                        },
                        position: "h",
                        selectCard: 1,
                        filterCard: card => true,
                        selectTarget: 1,
                        filterTarget: (card, player, target) => player != target && player.inRange(target),
                        ai: {
                            order: 3,
                            result: {
                                target: (player, target) => {
                                    if (target.hasCard("baiyin", 'e')) return get.damageEffect(target, player, target, 'fire')
                                    else {
                                        return -1 * Math.pow(get.damageEffect(target, player, target, 'fire'), 2);
                                    }
                                },
                                player: (player, target) => {
                                    var num = player.hp > 1 ? get.effect(player, { name: "losehp" }, player, player) : 0
                                    if (target.hasCard('baiyin', 'e')) return num + get.damageEffect(target, player, player, 'fire');
                                    else {
                                        num += -1 * Math.sign(get.attitude(player, target)) * Math.pow(get.damageEffect(target, player, player), 2)
                                        var num1 = 0;
                                        var pls = game.filterPlayer(current => current != player && current != target && (current == target.previous || current == target.next))
                                        if (pls.length) for (var pl of pls) {
                                            var num2 = get.damageEffect(pl, player, player, 'fire')
                                            if (num1 < num2) num1 = num2;
                                        }
                                        return num + num1;
                                    }
                                }
                            },
                        },
                        check: card => 6.5 - get.value(card)
                    },
                    ba_jixing: {
                        trigger: { player: "phaseUseBegin" },
                        direct: true,
                        popup: false,
                        content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                            'step 0'
                            player.chooseTarget(lib.filter.notMe, get.prompt2(event.name)).set('ai', target => {
                                var player = get.player()
                                if (get.attitude(player, target) > 0) return -1;
                                var res = 0;
                                if (player.hp <= 1) return -1;
                                var cardnum = target.countCards('h')
                                if (cardnum == 1) res += 2;
                                if (cardnum >= 4) res += 1;
                                if (!player.inRange(target)) res += 1;
                                return res - (player.maxHp - player.hp) / 2
                            })
                            'step 1'
                            if (result.bool) {
                                event.target = result.targets;
                                player.loseHp()
                                player.gainPlayerCard(target, 1)
                                player.draw()
                                target.player.addTempSkill('ba_jixing_1')
                                target.storage.ba_jixing_1 = player;
                            }
                        },
                        mod: {
                            globalFrom: (from, to, num) => {
                                if (to.hasSkill('ba_jixing_1') && to.storage.ba_jixing_1 && to.storage.ba_jixing_1 == from) return -Infinity
                            }
                        },
                        subSkill: {
                            1: {
                                mark: true,
                                init: (skill) => {
                                    player.storage[skill] = null
                                },
                                onremove: true,
                                intro: { content: (storage, player, contains) => "已被" + get.translation(player.storage.ba_jixing_1) + "标记" },
                                sub: true,
                                charlotte: true,
                            }
                        }
                    },
                    ba_zhixiang: {
                        usable: 1,
                        mod: {
                            aiValue: function (player, card, num) {
                                if ((get.name(card) != 'tao' && get.color(card) != 'black') || player.hasSkill('ba_yuyun_1')) return;
                                var cards = player.getCards('hs', function (card) {
                                    return get.name(card) == 'tao' || get.color(card) == 'black';
                                });
                                cards.sort(function (a, b) {
                                    return (get.name(a) == 'tao' ? 1 : 2) - (get.name(b) == 'tao' ? 1 : 2);
                                });
                                var geti = function () {
                                    if (cards.includes(card)) {
                                        return cards.indexOf(card);
                                    }
                                    return cards.length;
                                };
                                return Math.max(num, [6.5, 4, 3, 2][Math.min(geti(), 2)]);
                            },
                            aiUseful: function () {
                                return lib.skill.ba_zhixiang.mod.aiValue.apply(this, arguments);
                            },
                        },
                        locked: false,
                        enable: "chooseToUse",
                        viewAsFilter: function (player) {
                            return player.countCards('hes', { color: 'black' }) > 0 && !player.hasSkill('ba_yuyun_1');
                        },
                        filterCard: function (card) {
                            return get.color(card) == 'black';
                        },
                        position: "hes",
                        viewAs: {
                            name: "tao",
                            storage: {
                                ba_zhixiang: true,
                            }
                        },
                        prompt: "将一张黑色牌当作【桃】使用",
                        check: function (card) {
                            return 1 / (get.value(card) || 0.5);
                        },
                        group: ['ba_zhixiang_1'],
                        ai: {
                            basic: {
                                order: (card, player) => {
                                    if (player.hasSkillTag('pretao')) return 9;
                                    return 2;
                                },
                                useful: (card, i) => {
                                    let player = _status.event.player;
                                    if (!game.checkMod(card, player, 'unchanged', 'cardEnabled2', player)) return 2 / (1 + i);
                                    let fs = game.filterPlayer(current => {
                                        return get.attitude(player, current) > 0 && current.hp <= 2;
                                    }), damaged = 0, needs = 0;
                                    fs.forEach(f => {
                                        if (f.hp > 3 || !lib.filter.cardSavable(card, player, f)) return;
                                        if (f.hp > 1) damaged++;
                                        else needs++;
                                    });
                                    if (needs && damaged) return 5 * needs + 3 * damaged;
                                    if (needs + damaged > 1 || player.hasSkillTag('maixie')) return 8;
                                    if (player.hp / player.maxHp < 0.7) return 7 + Math.abs(player.hp / player.maxHp - 0.5);
                                    if (needs) return 7;
                                    if (damaged) return Math.max(3, 7.8 - i);
                                    return Math.max(1, 7.2 - i);
                                },
                                value: (card, player) => {
                                    let fs = game.filterPlayer(current => {
                                        return get.attitude(_status.event.player, current) > 0;
                                    }), damaged = 0, needs = 0;
                                    fs.forEach(f => {
                                        if (!player.canUse('tao', f)) return;
                                        if (f.hp <= 1) needs++;
                                        else if (f.hp == 2) damaged++;
                                    });
                                    if (needs && damaged || player.hasSkillTag('maixie')) return Math.max(9, 5 * needs + 3 * damaged);
                                    if (needs || damaged > 1) return 8;
                                    if (damaged) return 7.5;
                                    return Math.max(5, 9.2 - player.hp);
                                },
                            },
                            result: {
                                target: (player, target) => {
                                    if (target.hasSkillTag('maixie')) return 3;
                                    return 2;
                                },
                                "target_use": (player, target, card) => {
                                    if (player === _status.currentPhase && player.hasSkillTag('nokeep', true, {
                                        card: card,
                                        target: target
                                    }, true)) return 2;
                                    let mode = get.mode(),
                                        taos = player.getCards('hs', i => get.name(i) === 'tao' && lib.filter.cardEnabled(i, target, 'forceEnable'));
                                    if (target.hp > 0) {
                                        if (!player.isPhaseUsing()) return 0;
                                        let min = 7.2 - 4 * player.hp / player.maxHp,
                                            nd = player.needsToDiscard(-player.countCards('h', i => !taos.includes(i) && get.value(i) < min)),
                                            keep = nd ? 0 : 2;
                                        if (nd > 2 || taos.length > 1 && (nd > 1 || nd && player.hp < 1 + taos.length) || target.identity === 'zhu' && (nd || target.hp < 3) && (mode === 'identity' || mode === 'versus' || mode === 'chess') || !player.hasFriend()) return 2;
                                        if (game.hasPlayer(current => {
                                            return player !== current && current.identity === 'zhu' && current.hp < 3 && (mode === 'identity' || mode === 'versus' || mode === 'chess') && get.attitude(player, current) > 0;
                                        })) keep = 3;
                                        else if (nd === 2 || player.hp < 2) return 2;
                                        if (nd === 2 && player.hp <= 1) return 2;
                                        if (keep === 3) return 0;
                                        if (taos.length <= player.hp / 2) keep = 1;
                                        if (keep && game.countPlayer(current => {
                                            if (player !== current && current.hp < 3 && player.hp > current.hp && get.attitude(player, current) > 2) {
                                                keep += player.hp - current.hp;
                                                return true;
                                            }
                                            return false;
                                        })) {
                                            if (keep > 2) return 0;
                                        }
                                        return 2;
                                    }
                                    if (target.isZhu2() || target === game.boss) return 2;
                                    if (player !== target) {
                                        if (target.hp < 0 && taos.length + target.hp <= 0) return 0;
                                        if (Math.abs(get.attitude(player, target)) < 1) return 0;
                                    }
                                    if (!player.getFriends().length) return 2;
                                    let tri = _status.event.getTrigger(),
                                        num = game.countPlayer(current => {
                                            if (get.attitude(current, target) > 0) return current.countCards('hs', i => get.name(i) === 'tao' && lib.filter.cardEnabled(i, target, 'forceEnable'));
                                        }),
                                        dis = 1,
                                        t = _status.currentPhase || game.me;
                                    while (t !== target) {
                                        let att = get.attitude(player, t);
                                        if (att < -2) dis++;
                                        else if (att < 1) dis += 0.45;
                                        t = t.next;
                                    }
                                    if (mode === 'identity') {
                                        if (tri && tri.name === 'dying') {
                                            if (target.identity === 'fan') {
                                                if (!tri.source && player !== target || tri.source && tri.source !== target && player.getFriends().includes(tri.source.identity)) {
                                                    if (num > dis || player === target && player.countCards('hs', { type: 'basic' }) > 1.6 * dis) return 2;
                                                    return 0;
                                                }
                                            }
                                            else if (tri.source && tri.source.isZhu && (target.identity === 'zhong' || target.identity === 'mingzhong') &&
                                                (tri.source.countCards('he') > 2 || player === tri.source && player.hasCard((i) => i.name !== 'tao', 'he'))) return 2;
                                            //if(player!==target&&!target.isZhu&&target.countCards('hs')<dis) return 0;
                                        }
                                        if (player.identity === 'zhu') {
                                            if (player.hp <= 1 && player !== target && taos + player.countCards('hs', 'jiu') <= Math.min(dis, game.countPlayer(current => {
                                                return current.identity === 'fan';
                                            }))) return 0;
                                        }
                                    }
                                    else if (mode === 'stone' && target.isMin() && player !== target && tri && tri.name === 'dying' && player.side === target.side && tri.source !== target.getEnemy()) return 0;
                                    return 2;
                                },
                            },
                            tag: {
                                recover: 1,
                                save: 1,
                            },
                        },
                        subSkill: {
                            1: {
                                trigger: { global: 'recoverBegin' },
                                forced: true,
                                sub: true,
                                charlotte: true,
                                filter: (event, player) => {
                                    if (!event.player.isDying()) return false;
                                    return event.card && event.card.name == 'tao' && event.card.storage && event.card.storage['ba_zhixiang']
                                },
                                content: () => {
                                    trigger.num++;
                                },
                                logSkill: "player"
                            }
                        }
                    },
                    ba_yuyun: {
                        trigger: { player: "phaseZhunbeiBegin" },
                        filter: (event, player) => {
                            if (!lib.inpile.contains('ba_yuyunhao')) return true;
                            return !!get.cardPile(function (card) {
                                return card.name == 'ba_yuyunhao';
                            });
                        },
                        check: (event, player) => { return !player.getEquip(1) || get.equipValue(player.getEquip(1)) < get.equipValue({ name: "ba_yuyunhao" }) },
                        content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                            var card;
                            if (!lib.inpile.contains('ba_yuyunhao')) {
                                card = game.createCard2('ba_yuyunhao', 'club', 13);
                                lib.inpile.push('ba_yuyunhao');
                            }
                            else card = get.cardPile(function (card) {
                                return card.name == 'ba_yuyunhao';
                            });
                            player.chooseUseTarget(card,true,'nopopup');
                            // player.gain(card, 'draw')
                        },
                        subSkill: {1:{sub: true,charlotte: true}}
                    },
                },
                translate: {
                    ba_g_ruishijuan: "瑞士卷",
                    mouJushe: "狙射",
                    "mouJushe_info": "当你使用或打出一张基本牌的时候，你可以进行判定，若结果颜色与该基本牌相同，则你可以指定一名角色视为对其使用一张不计入次数的火【杀】。锁定技，你使用【杀】无距离限制，你对攻击范围内的角色使用的【杀】不可被响应，当你使用黑色的【杀】造成伤害时，你摸一张牌。",
                    "mouLaji_info": "锁定技，摸牌阶段，若弃牌堆有足够的牌，你改为从弃牌堆摸牌。出牌阶段限一次，若弃牌堆中有【杀】【闪】或装备牌，你可以获得一张。",
                    mouLaji: "垃姬桶",
                    mouYizhong: "毅重",
                    "mouYizhong_info": "锁定技，①当你的防具区没有牌时，你视为装备有【仁王盾】。②回合结束阶段，你可以视为失去①并令一名角色获得①直到你下一回合开始，其恢复1点体力，你摸两张牌。",
                    mouDashu: "大叔",
                    "mouDashu_info": "摸牌阶段，你额外摸1+X张牌(X为你本局游戏总共的受到伤害点数的一半，向下取整)。锁定技，你的手牌上限始终+3。",
                    mouBailan: "摆烂",
                    "mouBailan_info": "每两回合限一次，你可以跳过摸牌阶段。若如此做，直到下一个回合开始，防止你受到的一切伤害。",
                    mouLiezhan: "烈战",
                    mouLeinie: "累孽",
                    mouJuedou: "绝斗",
                    "mouLiezhan_info": "每回合限两次，你可以将一张非锦囊牌当作【决斗】使用。锁定技，你使用的非转化非虚拟【决斗】伤害+1，你使用转化或虚拟的【决斗】或【杀】造成伤害并结算完毕后，你恢复1点体力。",
                    "mouLeinie_info": "锁定技，当你造成或受到因牌造成有来源的伤害时，若此牌的点数与上一张满足此条件的点数相差大于X，则伤害来源失去2点体力，否则其摸X+1张牌（X为本技能的触发次数除以4的余数）。",
                    "mouJuedou_info": "限定技，当你进入濒死状态时，你可以视为使用一张不可被【无懈可击】响应的【决斗】，然后视为不计次数的使用与此【决斗】结算过程中打出的【杀】数目相同的【杀】，失去【累孽】，获得【却敌】。",
                    "ba_quedi": "却敌",
                    "ba_quedi_info": "每回合限一次。当你使用【杀】或【决斗】指定唯一目标后，你可选择：①获得目标角色的一张手牌。②弃置一张基本牌，并令此牌的伤害值基数+1。③背水：失去1点体力，然后依次执行上述所有选项。",
                    mouGuizhen: "诡阵",
                    mouLielei: "烈雷",
                    "mouGuizhen_info": "准备阶段和结束阶段，你可以摸一张牌，然后将一张手牌置于武将牌上，称为【雷】。当你成为一张【杀】或非延时锦囊牌的唯一目标时，你可以弃置一张花色与此牌相同的【雷】，令此牌无效，然后你选择摸两张牌或对其造成1点火焰伤害。",
                    "mouLielei_info": "出牌阶段限一次， 若你已受伤，你使用一张【杀】指定唯一角色结算完毕后，你可以弃置X张【雷】，视为不计入次数的对该目标重复使用X次这张【杀】。（X为你已损失的体力值）",
                    "ba_poce": "破策",
                    "ba_zhimeng": "知梦",
                    "ba_poce_info": "每轮各限两次，当你成为其他角色黑色锦囊牌的目标时，你可以摸一张牌令其对你无效；当你成为【杀】的目标后，你可以弃一张点数奇偶性与此【杀】相同的手牌，令其对你无效。",
                    "ba_zhimeng_info": "当你或你攻击范围内的一名角色受到一名有手牌的角色的1点伤害时，你可以令其摸两张牌，然后观看其与伤害来源的手牌，并交换双方等量的手牌。若你以此交换了超过三张牌，你翻面。",
                    "ba_shefeng": "舌锋",
                    "ba_jushi": "举誓",
                    "ba_kangyan": "亢言",
                    "ba_kangyan_info": "出牌阶段限一次，你可以与一名其他角色进行一次拼点，赢的一方视为使用一张【无中生有】。锁定技，当你拼点后，失败一方不能使用或打出【杀】直到其下一回合开始；你的方块牌点数视为13。",
                    "ba_shefeng_info": "出牌阶段限一次，你可以将一张点数为质数的手牌当作【舌战群儒】使用或打出。锁定技，你的方片牌点数视为13。",
                    "ba_jushi_info": "当你使用黑色牌指定唯一一名角色为目标后，你可以与其拼点，若你赢，你弃置其X张牌（X为此牌的点数的因数数量且至多为4），否则其获得你一张牌。锁定技，当你造成伤害时，若其手牌数和装备区牌数均不大于你，此伤害点数+1。",
                    "ba_chazhu": "茶主",
                    "ba_yangmou": "阳谋",
                    "ba_yingzhi": "鹰鸷",
                    "ba_yingzhi_info": "当你对其他非横置玩家造成非属性伤害时，你可以令其横置。锁定技，你不能被横置，处于横置状态的玩家不能响应你使用的牌。",
                    "ba_yangmou_info": "使命技，出牌阶段结束时，你需要与一名横置角色进行拼点，若你赢，你获得其一张牌。成功：你以此法拼点三次胜利，则你获得其武将牌上的所有技能，令其所有技能失效直至其下一回合结束，并对其造成两点雷电伤害。失败：你以此拼点失败且点数小于10与其手牌数、体力值之和的较小值,或其拼点牌为方块，你获得【仇海】。",
                    'ba_chouhai': "仇海",
                    ba_chouhai_info: "锁定技，当你受到伤害时，若你的手牌数小于3，此伤害+1。",
                    "ba_chazhu_info": "主公技，当你受到1点伤害时，你可以令一名与你势力相同的角色受到伤害来源的1点伤害；当你恢复1点体力时，你可以令一名与你势力相同的角色选择恢复1点体力或摸两张牌。",
                    "ba_mingsuan": "明算",
                    "ba_qiongxie": "穷械",
                    "ba_qiongxie_info": "锁定技，你手牌区内的装备牌在回合内视为火【杀】，在回合外视为【闪】。你使用一张装备牌转化而来的【杀】无距离限制，不可被闪避且伤害基数+1；你使用一张装备牌转化而来的【闪】响应对方时，获得对方一张牌。",
                    "ba_mingsuan_info": "出牌阶段限一次，若你有空闲的装备栏，你可以弃置两张点数不为字母的牌，令一名角色下回合进行整肃。若其整肃成功，你与其将一张装备牌置入对应装备栏中并各摸一张牌，否则其跳过下个摸牌阶段，你与其各摸两张牌。",
                    "ba_shoulve": "首掠",
                    "ba_langhun": "狼魂",
                    "ba_langxi": "狼袭",
                    "ba_shoulve_info": "出牌阶段开始前，你可以对一名角色使用一张无距离且不计入使用次数的【杀】，此【杀】的目标非锁定技于本回合内失效。",
                    "ba_langhun_info": "觉醒技，当你受到伤害时，若伤害来源的手牌数不小于你的手牌数，且你已损失的体力值不小于2，或你的体力值为1，你恢复2点体力并获得技能【狼袭】。",
                    "ba_langxi_info": "准备阶段，你可以与一名攻击距离内的其他角色猜拳。若你赢，你对其造成两点伤害，若平局，你对其造成一点伤害，若你输，你弃置一张牌且本回合不能对其他角色使用牌；若你以此技能造成了伤害，你令目标本回合内无法使用或打出手牌。",
                    "ba_youqing": "诱情",
                    "ba_xiangji": "详记",
                    "ba_xiangji_info": "一名男性角色的弃牌阶段，若你自你的上一回合以来没有发动此技能，你可以展示其弃置的一张牌，然后直至你下一回合结束，你使用或打出相同类别的牌时摸一张牌。",
                    "ba_youqing_info": "出牌阶段限一次，你可以指定一名攻击范围内的角色，令其恢复1点体力并选择摸两张牌或从所有其攻击范围内的角色各获得一张牌，然后跳过其下一出牌和弃牌阶段。",
                    "ba_miyin": "糜音",
                    "ba_xuansuan": "玄算",
                    "ba_mieju": "灭局",
                    "ba_miyin_info": "出牌阶段限一次，你可以弃置一张红色牌，然后展示一名角色的一张手牌，若其为黑色，你选择弃置其两张牌或令其摸两张牌；否则你选择将这张牌当作【乐不思蜀】或【无中生有】对其使用。",
                    "ba_xuansuan_info": "使命技。当你或你攻击距离内的玩家受到其他玩家使用牌造成的伤害时，你可以令受到伤害的玩家摸一张牌，然后将造成伤害的牌置于你的武将牌上，称为“析”。成功：在添加新的“析”后你的“析”点数总和大于25，你获得所有“析”和【灭局】。失败：你在达成使命成功前死亡，则击杀你的玩家获得所有【析】，增加1体力上限并恢复1点体力。",
                    "ba_mieju_info": "结束阶段，若你回合内没有造成伤害，你可以对一名本回合内失去过牌的角色造成1点伤害；锁定技，当你使用牌时，你令所有与你距离为1的其他角色不能使用或打出牌响应此牌。",
                    "ba_xinzhu": "心祝",
                    "ba_daohui": "祷悔",
                    "ba_daohui_info": "其他油桶而的出牌阶段限两次，若其声明使用黑桃或梅花牌，其可以将此牌交给你然后摸一张牌。若此牌为【杀】，其带有禁制属性。",
                    "ba_daohui_g_info": "其他油桶而的出牌阶段限两次，若其声明使用黑桃或梅花牌，其可以将此牌交给你然后摸一张牌。若此牌为【杀】，其带有禁制属性。",
                    "ba_xinzhu_info": "出牌阶段限一次，你可以展示所有手牌并将其中所有红桃牌交给一名其他角色，若你以此法给出超过三张牌，你恢复两点体力。然后直至其下一回合结束，其使用或打出这些牌时，你与其各摸一张牌。",
                    "ba_jilao": "积劳",
                    "ba_yizhen": "夷阵",
                    "ba_yizhen_info": "你使用【杀】时可以额外指定一名目标。当你使用【杀】指定目标后，若你到所有目标距离和大于你的攻击距离，你获得所有目标角色一张牌，否则你令此【杀】不计入你的使用次数。",
                    "ba_jilao_info": "锁定技，你使用【杀】造成1点伤害后，你获得一个”疲“标记。准备阶段，若你的”疲“数量大于1，你移去两个”疲“，跳过出牌阶段和弃牌阶段并选择回复1点体力或摸两张牌。",
                    "ba_shehun": "摄魂",
                    "ba_xuexiao": "血啸",
                    "ba_shehun_info": "当你使用【杀】指定目标时，若目标手牌数不大于你，你可以摸一张牌；否则你可以进行判定，若为黑色，你令其所有非锁定技失效直至回合结束且此【杀】不可闪避；若为红色，此【杀】不计入你的使用次数。",
                    "ba_xuexiao_info": "觉醒技，出牌阶段开始时，若你本局游戏总计造成了不小于你的体力值的伤害，你减1点体力上限，摸三张牌，获得技能【破军】，然后将【血啸】判定结果为红色的部分改为“你令此【杀】不计入你的使用次数并获得其至多两张牌”。",
                    "ba_qiangfeng": "枪风",
                    "ba_pushu": "仆术",
                    "ba_qiangfeng_info": "当你使用牌或成为使用牌的目标时，记录牌的花色。记牌的花色数为X，准备阶段，你可以弃置X/2(向上取整)张花色被记录的非装备牌，指定攻击距离内至多X/2(向上取整)名其他角色，令其展示所有手牌并弃置所有被你记录的花色的牌。结算完毕后，清除你记录的所有花色。",
                    "ba_pushu_info": "当你使用或打出一张点数为字母的牌时，若为红色，你可以摸一张牌；否则你可以移动场上一张牌。",
                    "ba_niwu": "匿物",
                    "ba_qingzheng": "清正",
                    "ba_qingzheng_info": "锁定技，你的【乐不思蜀】判定反转；若你回合内出现了结果非黑桃的判定，你跳过本回合弃牌阶段；你攻击范围内的其他角色不得使用红【杀】和【乐不思蜀】。",
                    "ba_niwu_info": "每轮限一次，当你攻击范围内一名角色受到伤害时，你可以弃置至多该伤害的点数张红色牌，然后若你的判定区没有【乐不思蜀】，则将这些牌中随机一张当作【乐不思蜀】置入你的弃牌区，然后令此伤害减去你弃置牌的点数。",
                    "ba_jujieold": "拒节",
                    "ba_juyuanold": "据园",
                    "ba_jujieold_info": "弃牌阶段开始时，你可以令你的手牌上限本回合视为2+X(X为你装备区的牌数)，然后此阶段结束时，若你的体力值小于2，你回复1点体力，否则，你摸1张牌。",
                    "ba_juyuanold_info": "结束阶段，你可以弃置一张花色与其他角色装备区内一张装备牌相同的手牌，将该装备牌移动到你的装备区。",
                    'ba_jujie': "拒节",
                    'ba_juyuan': "据园",
                    'ba_juyuan_info': "结束阶段，若你已受伤，你可以选择摸两张牌或恢复1点体力，然后你的手牌上限-1。之后，你可以弃置一张与其他角色装备区内的某张牌花色相同的手牌，将该装备移入你的装备区。",
                    'ba_jujie_info': "觉醒技，回合结束时，若你的手牌上限小于2，或游戏轮数大于等于你的体力上限，你失去1点体力上限并摸两张牌，失去【据园】并获得【执义】【秉节】。",
                    'ba_bingjie': "秉节",
                    'ba_tubian': "兔变",
                    'ba_bingjie_info': "觉醒技，当你体力发生变化时，若你的体力不大于2，你摸两张牌，增加1点体力上限并恢复1点体力，获得【兔变】【据园】并删去【据园】的减手牌上限效果。",
                    'ba_tubian_info': "每回合限一次，你可以将一张基本牌当作任意其他基本牌使用或打出。若此时是你的回合内，你可以摸一张牌；否则你可以对当前回合角色造成1点伤害。",
                    "ba_renxian": "仁仙",
                    "ba_renxian_info": "每回合限一次，当你或一名你攻击范围内的角色受到伤害后，你可以展示牌堆顶一张牌并将其置入仁库，然后其摸一张牌并展示之，若两者颜色相同，其恢复1点体力。",
                    "ba_lingyu": "灵愈",
                    "ba_lingyu_info": "每轮限一次，一名其他角色的结束阶段或其进入濒死状态时，若其有手牌，仁库中也有牌且其已受伤，你可以展示仁库中的所有牌，并令其展示所有手牌，若仁库中的牌最大的点数和其手牌最小的点数奇偶性相同，其将一张点数最小的手牌放入仁库并恢复1点体力，否则其从仁库中获得一张牌并摸一张牌。",
                    "ba_HikarinoKen_skill": "光之剑",
                    "ba_HikarinoKen_skill_info": "每回合限一次，当你造成无属性伤害时，你可以将其改为火属性。锁定技，当你造成属性伤害时，若目标的装备区没有武器牌，此伤害+1。",
                    "ba_HikarinoKen_skill_2": "光之剑",
                    "ba_HikarinoKen_skill_2_info": "每回合限一次，当你造成无属性伤害时，你可以将其改为火属性。锁定技，当你造成属性伤害时，若目标的装备区没有武器牌，此伤害+1。",
                    "ba_tianjian": "天剑",
                    "ba_tianjian_info": "游戏开始时，你将【光之剑】洗入牌堆。准备阶段，若你装备区没有武器牌，你可以从场上/弃牌堆/牌堆获得【光之剑】并装备之。",
                    "ba_jixue": "机学",
                    "ba_jixue_info": "一名你攻击范围内的其他角色使用一张牌时，若你未记录此牌牌名且你记录的牌名数量不大于2，你可以弃一张牌记录此牌牌名。你可以将一张牌当作你记录过的牌使用或打出，然后你摸一张牌并清除记录。",
                    "ba_lunyi": "轮椅",
                    "ba_lunyi_info": "锁定技，游戏开始时，废除你的坐骑栏；你计算与其他角色距离时始终-1，其他角色计算与你的距离时始终+1；你的坐骑牌视为【无中生有】。",
                    "ba_heishu": "黑术",
                    "ba_heishu_info": "出牌阶段限两次，你可以观看一名攻击范围内的其他角色的手牌，获得并使用其中一张非装备牌。以此法使用的牌没有次数限制，且不可被响应。",
                    "ba_chizhi": "恃智",
                    "ba_chizhi_info": "出牌阶段限一次，你可以选择一名其他角色，令其猜测你摸的是否是锦囊牌。若猜错，则其下次对你造成伤害-1，否则其下次对你造成伤害+1。",
                    'ba_baoshe': "爆射",
                    'ba_baoshe_info': "结束阶段，若你回合内对其他角色造成伤害总和小于3，你可以弃置两张点数为奇数的手牌，视为使用一张伤害基数为2的【杀】；若你对其他角色造成了大于1点的伤害，你可以令其受到X点伤害，并选择至多两名其他角色，令其受到Y点伤害。(X, Y分别为伤害点数除以2和除以3的值向上取整)",
                    "ba_weiling": "威灵",
                    "ba_weiling_info": "出牌阶段限一次，你可以将一张黑色牌交给一名攻击范围内手牌数小于你的手牌数减2或为0的其他角色，然后选择对其造成1点伤害或令其对另一名你选定的其他角色造成1点伤害。",
                    "ba_chonge": "崇恶",
                    "ba_chonge_info": "每回合限两次，一名其他角色对不为你的角色造成伤害时，若其此前在本局游戏中造成的伤害总点数或手牌数大于等于你，你可以摸两张牌再弃置一张牌，或令其摸两张牌。",
                    "ba_fuji": "伏计",
                    "ba_fuji_info": "出牌阶段，若你因【伏计】扣置的牌不大于2，你可以将一张牌背面向上扣置于武将牌旁。一名角色对你使用牌时，若你因【伏计】扣置的牌中有相同颜色的牌，你可以将此牌当作雷【杀】对其使用，然后摸一张牌。若此雷【杀】命中，改为摸两张牌。",
                    "ba_liwu": "丽舞",
                    "ba_liwu_info": "一名你在其攻击范围内的其他角色回合开始时，你可以弃一张牌，本回合内其使用牌指定除你及其自己的其他角色为目标时其需弃置一张牌，且你与其彼此不得响应对方使用的牌。",
                    "ba_kuanglie": "狂烈",
                    "ba_kuanglie_info": "转换技，当你不因此技能造成伤害时，若你已受伤，你可以摸X张牌；阴：你恢复1点体力或对一名其他角色造成1点伤害，若该角色为受到伤害的角色，改为获取其X张牌。(X为你已损失的体力值)",
                    "ba_xungong": "迅攻",
                    "ba_xungong_info": "当你使用一张【杀】时，你可以失去1点体力令其不可被闪避；你可以将Y张牌当作【杀】使用且你的出杀次数+Z。(Y为你的体力值，Z为出牌阶段开始时的Y)",
                    "ba_poxi": "魄袭",
                    "ba_poxi_info": "出牌阶段限一次，你可以观看一名其他角色的手牌，然后你可以弃置你与其手牌中的三张花色不同的牌。若如此做，根据此次弃置你的牌的数量执行以下效果：没有，你减1点体力上限；两张，你回复1点体力并摸一张牌；三张，你摸三张牌。",
                    "ba_jizhan": "急斩",
                    "ba_jizhan_info": "锁定技，你与其他角色计算距离时始终-1且你与之距离为1的其他角色不能响应你使用的牌，同时你对这些角色使用牌无次数限制且不计入次数。摸牌阶段，你攻击范围内每有一名受伤的其他角色，你就多摸一张牌。",
                    "ba_yuzu": "玉足",
                    "ba_yuzu_info": "结束阶段，你可以弃置一张黑色牌，视为使用一张不能被【无懈可击】响应的【增兵减灶】。",
                    "ba_chuanyang": "穿杨",
                    "ba_chuanyang_info": "你使用【杀】可以指定距离不大于点数的角色为目标。当场上有你攻击范围内角色使用的非虚拟【杀】【闪】因使用或打出进入弃牌堆时，你将其对应的实体牌置于你的武将牌旁，称为“穿”(“穿”大于6则不可发动)；当你使用【杀】指定目标时，你可以弃置至多三张“穿”，按照数量执行下列效果：不小于1：不可闪避；不小于2：伤害基数+1；等于3：所有非锁定技回合内失效。",
                    ba_kaiquan_info: "出牌阶段限一次，你可以选定一名角色，然后展示牌堆最顶部的牌A和其所有手牌，令其选择：将所有与A花色相同的手牌交给你，然后获得A，或受到1点火焰伤害。（若没有与A花色相同的手牌，直接受到伤害）",
                    ba_kaiquan: "开泉",
                    ba_zaoshen: "躁身",
                    ba_zaoshen_info: "锁定技，你每造成一次属性伤害，便可摸一张牌，或恢复1点体力；若为火焰伤害，则你可再将一张牌置于牌堆顶，令伤害+1。",
                    ba_cunzhi: "寸智",
                    ba_siyi: "肆疑",
                    ba_siyi_info: "当你失去1点体力，受到1点伤害，或在回合外因弃置或被人获得而失去牌时，你摸X张牌。(X为你攻击范围内所有角色的一半向下取整且至少为1，至多为3；若游戏人数不多于4，则X改为你攻击范围内所有角色总数。)",
                    ba_quanru: "犬辱",
                    ba_quanru_info: "当你成为其他玩家使用的一张牌的目标后，你可以失去1点体力，令其摸1张牌，然后此牌对你无效。",
                    ba_zuru: "足辱",
                    ba_zuru_info: "每回合限一次，当你的攻击范围内的一名其他角色成为不为此法使用的【杀】的目标时，你可以弃置一张牌，视为使用一张不可被【无懈可击】响应的【增兵减灶】，然后视为对其使用一张火【杀】。若场上存活人数多于2，则使用者必须不为你。",
                    ba_yinlang: "引狼",
                    ba_yinlang_info: "锁定技，你对男性角色使用的【杀】或男性角色对你使用的【杀】均需两张【闪】才能响应。",
                    ba_sanqiang: "三枪",
                    ba_sanqiang_info: "出牌阶段限一次，你可以弃置三张红色牌，视为使用三张无距离限制且不计入次数的火【杀】，这些火【杀】每造成一次伤害，你摸一张牌，而若这些杀未造成伤害，你失去1点体力。锁定技，你使用属性【杀】指定其他角色为目标时，其所有非锁定技本回合失效；若其所有非锁定技已失效，改为令其所有技能本回合失效；若其所有技能已失效，改为该牌伤害+1。",
                    ba_lipao: "厉炮",
                    ba_qiuxia: "求暇",
                    ba_qiuxia_info: "你可以跳过你的出牌阶段并选择：弃置一张装备牌并视为使用一张【杀】，恢复1点体力或摸一张牌，然后获得2点护甲。你的手牌上限和摸牌阶段摸牌数+X(X为你的护甲值的一半向上取整)。",
                    ba_lipao_info: "当你使用【杀】指定目标时，你可以失去1点护甲，弃置其两张牌；你对体力值或手牌数不大于你的护甲值的角色造成的伤害+1。",
                    ba_jijie: "即解",
                    ba_jijie_info: "出牌阶段开始时，你可以展示一名角色的一张手牌。若此牌不为基本或装备牌，你摸一张牌；然后，该角色不能使用或打出与此牌同花色的手牌，直至其下一回合结束；同时，直到你下一回合开始前每回合限一次，你可以将一张手牌当作①此牌名的牌（该牌为锦囊或基本牌时）②【闪】使用并摸一张牌。",
                    ba_xianyu: "陷圄",
                    ba_xianyu_info: "锁定技，你与其他角色，或其他角色与你计算距离时+1，你的-1马视为【增兵减灶】。",
                    ba_xianyu_1: "陷圄·改",
                    ba_xianyu_1_info: "出牌阶段限两次，你可以将一张点数为奇数的牌当作不可被【无懈可击】响应的【增兵减灶】使用。",
                    ba_jieling: "解囹",
                    ba_jieling_info: "回合开始时，若没有与你距离为1的角色，你可以弃置一张牌A，令本回合内【陷圄】失效。此回合的结束阶段，若下述两条件你均未满足：①你本回合使用了至少两张与A花色相同的牌②你本回合造成了至少1点伤害，你失去1点体力，下一回合你不得发动此技能；若此二项条件你全部满足，你恢复1点体力或摸两张牌，然后下一回合此技能失效且修改【陷圄】。",
                    ba_dudang: "独当",
                    ba_dudang_info: "锁定技，若你的手牌数X不大于4，则点数小于2X的【杀】或【决斗】不能指定你为目标；否则，点数大于2X的【杀】或【决斗】不能指定你为目标。",
                    ba_zhengchi: "正斥",
                    ba_zhengchi_info: "每回合限一次，当你成为其他玩家使用的一张牌的唯一目标时，你可以令其交给你一张方块牌，否则此牌无效。",
                    ba_shuyan: "蔬宴",
                    ba_shuyan_info: "使命技，你不能使用方块牌，且方块牌不计入你的手牌上限。弃牌阶段结束后，你展示手牌中所有的方块牌并摸等量的牌，成功：准备阶段，若你手牌中方块牌数量大于2，则若你体力值大于1，你失去1点体力，然后你将手牌中所有的方块牌依次当作不可被【无懈可击】响应的【无中生有】使用，然后获得【双标】。失败：结束阶段，若你手牌中没有方块牌，则你失去1点体力，【正斥】失效直到你下一回合开始，然后重置此技能。",
                    ba_shuangbiao: "双标",
                    ba_shuangbiao_info: "出牌阶段共限三次，你可以将方块牌当作不可被响应的【无中生有】（此项每回合只能选择一次）或【杀】使用。你以此法使用的【杀】不计入次数，使用【无中生有】时恢复1点体力。",
                    ba_yanxi: "炎袭",
                    ba_yanxi_info: "准备阶段，你可以弃置若干张基本牌并选择等量其他角色，令其依次选择：交给你一张红色牌，或受到1点火焰伤害。",
                    ba_pojia: "破甲",
                    ba_pojia_info: "当你使用【闪】抵消【杀】时，你可以视为对【杀】的使用者使用一张【杀】。锁定技，若你满足下列条件之一：未受伤，装备区有牌，手牌数大于2，则你造成的火焰伤害+1，且你使用【杀】指定目标后或造成伤害前，令目标除【藤甲】外的防具本回合无效。",
                    ba_gushen: "蛊身",
                    ba_gushen_info: "你可以将一张【毒】当作【闪】使用或打出。锁定技，你的【桃】【酒】视为【毒】，当你因受到【毒➁】的效果而失去1点体力时，你改为选择恢复1点体力或摸两张牌。",
                    ba_duyan: "毒宴",
                    ba_duyan_info: "弃牌阶段开始时，你可以选择一名其他玩家，你与其分别展示所有手牌，计算二者手牌中最多的花色X。直到下个回合开始，你与其的X花色的手牌视为【毒】。",
                    ba_hengchong: "横铳",
                    ba_hengchong_info: "准备阶段，你可以将一张奇数牌当作无视防具的【万箭齐发】使用。该【万箭齐发】造成伤害时视为火焰伤害，且你可弃置其每区域各一张牌。",
                    ba_haozhi: "豪掷",
                    ba_haozhi_info: "每回合各限一次，你可以将一张偶数牌当作【树上开花】使用；其他角色若使用了【桃园结义】【五谷丰登】，或对非自身角色使用了【树上开花】【增兵减灶】，你可以弃一张偶数牌令其视为对自己使用了一张【洞烛先机】。",
                    ba_ekou_info: "锁定技，出牌阶段结束时你从所有你本回合造成过伤害的角色处获得与伤害总数等量的牌；你在回合内获得的牌不计入你的手牌上限。",
                    ba_ekou: "鳄口",
                    ba_liuzha: "榴炸",
                    ba_liuzha_info: "出牌阶段开始时，你可以弃置至多三张牌，对等量角色依次造成1点火焰伤害，然后摸等量的牌。",
                    ba_lanzha: "滥炸",
                    ba_lanzha_info: "出牌阶段，你可以弃置至多X张牌(X为你的当前的手牌上限)，对等量其他角色各造成1点火焰伤害，然后你本回合的手牌上限-X；锁定技，结束阶段，若你没有手牌，你摸两张牌。",
                    ba_shouxie: "售械",
                    ba_shouxie_info: "其他角色的开始阶段，若你没有手牌/有手牌但手牌数小于装备数，你可以令当前回合角色摸一张牌并展示/将一张牌交给该角色，然后摸一张牌；若其获得的是装备牌，你摸牌数+1。该角色的结束阶段，若该获得的牌仍在其手牌区，其可以对你或你攻击距离内的一名角色造成1点伤害。",
                    ba_kuxun: "苦训",
                    ba_kuxun_info: "使命技，结束阶段或你在摸牌阶段外获得牌时，若你武将牌上因此获得的牌少于6，你需要将一张牌置于你的武将牌旁，否则失去1点体力。成功：回合结束时，你因此而置于武将牌旁的牌超过三张，你获得所有武将牌旁的牌，并摸等量的牌，获得【缠战】并进行一个额外的回合。失败：你进入濒死状态，弃置武将牌旁所有的牌并将体力恢复到1点。",
                    ba_chanzhan: "缠战",
                    ba_chanzhan_info: "当你使用【杀】指定一名角色为目标时，你可以亮出其一张手牌，然后亮出牌堆顶的一张牌，若两者花色相同，此【杀】不计入你的次数且你摸一张牌；否则其不可响应此【杀】。",
                    ba_yanshe: "掩射",
                    ba_yanshe_info: "每回合限一次，当你攻击范围内的一名其他角色受到伤害时，若伤害来源不为你，你可以视为对其使用一张火【杀】或刺【杀】。若此【杀】命中，你摸一张牌。",
                    ba_tumei: "兔魅",
                    ba_tumei_info: "出牌阶段限一次，你可以视为使用一张雷【杀】；若你本回合造成了雷电伤害，直至下一回合结束你造成的属性伤害+1且你视为有谋【英姿】；否则你进行判定，若为黑桃2-9，你对至多三名其他角色造成1点雷电伤害，否则你摸两张牌。",
                    ba_zhajing: "炸井",
                    ba_zhajing_info: "每轮限一次，一名其他角色的开始阶段，你可以观看其手牌并选择：➀其摸两张牌，本回合手牌上限+2；②对该角色造成2点火焰伤害，然后其对你本回合使用牌无距离和次数限制。③交给其一张牌然后其恢复1点体力。④展示牌堆顶三张牌并选择其中一张，你弃置其所有与此牌花色相同的手牌。",
                    ba_tuya: "涂鸦",
                    ba_shedie: "蛇爹",
                    ba_tuya_info: "当你不因此技能使用或打出而失去牌后，将这些牌置于你的武将牌上，每回合限一次，你可以将这些牌中的一张当作基本牌使用或打出，然后摸一张牌。你的出牌阶段开始时，若你的武将牌上有牌，则根据这些牌中各花色牌的数量的最小值和最大值执行对应效果："
                        + "<br>最小值为0，若你体力值大于1，你失去1点体力；"
                        + '<br>最小值小于2，你获得这些牌中的两张；'
                        + '<br>最小值不小于2，你获得这些所有的牌且可以将其送与一名其他角色；'
                        + '<br>最大值大于1，你选择一名角色，视为对其使用一张红桃火【杀】，若此【杀】命中，恢复1点体力；'
                        + '<br>最大值大于2，你先弃置上述角色两张牌，并令其本回合内所有技能失效；'
                        + '<br>最大值大于3，你令上述角色无法使用或打出手牌直到回合结束。'
                        + '<br>你因此技能从武将牌上获得的牌不得在该回合内使用，且在该回合内不计入你的手牌上限。',
                    ba_shedie_info: "锁定技，你的普通【杀】视为火【杀】，黑桃和梅花的普通【杀】的花色分别视为红桃和方块；当你使用伤害性即时牌时，若为红色，你可以令至多三名目标视为装备【藤甲】（其可能原有的防具牌无效），若为黑色，你获得至多三名目标的两张牌。",
                    ba_zhadian: "炸店",
                    ba_zhadian_info: "轮限两次，一名其他角色的摸牌结束阶段，你可以弃置至多三张牌，查看并弃置其等量手牌。若其展示的牌总和比你弃置的牌点数总和小，其受到你的1点雷电伤害，然后你与其各摸相同数量的牌；否则，你获得这些弃置的牌。",
                    ba_chuanju: "穿狙",
                    ba_chuanju_info: "锁定技，你黑色的普通【杀】视为雷【杀】；当你使用雷【杀】指定目标前，你先视为使用了一张【酒】；每当你对其他角色造成超过1点的伤害后，你可以选择一名除其以外的其他角色，对该角色造成数目为该伤害值的一半向上取整属性相同的伤害；当你造成雷电伤害结算完毕时，你可以弃置目标一张牌。",
                    ba_youbian: "幼变",
                    ba_youbian_info: "昂扬技，出牌阶段限一次，你可以将所有装备牌依次当作一张无距离限制的锦囊牌使用，其中第一张牌必须是【铁索连环】；然后你可以失去1点体力，选择一名横置状态的角色，获得其一种颜色的所有牌。若你的标记为【师】面向上，将其翻转到【幼】面向上。激昂：你摸6张牌。",
                    ba_lijiao: "厉教",
                    ba_lijiao_info: "锁定技，游戏开始时你获得一个一面为【幼】一面为【师】的标记，并将【师】面朝上放置；若你的标记【师】面向上，当你使用一张牌指定唯一一名角色为目标时，若其装备区有与该牌花色相同的牌，你可以获得该牌。",
                    ba_jugao: "举高",
                    ba_jugao_info: "准备阶段，若你的标记为【幼】面向上，你可以将其翻至【师】面向上，然后进行判定，并记录结果的点数。若如此做，回合结束时，若你回合内使用和打出牌的点数和大于结果点数，则你摸两张牌，然后可以视为使用一张无距离限制且可以额外指定一名角色的【杀】。该【杀】无视角色防具且令目标所有非锁定技失效，且每造成1点伤害，你额外摸一张牌。",
                    ba_jichang: "饥肠",
                    ba_jichang_info: "锁定技，跳过你的摸牌阶段；结束阶段，你摸1+X张牌。（X为你本回合造成伤害次数与已损失的体力值之和且最多为5）",
                    ba_nushe: "怒射",
                    ba_nushe_info: "出牌阶段限一次，你可以失去1点体力（若体力为1则跳过）并弃置一张手牌，对一名攻击范围内的角色造成2点火焰伤害，并可选择其不为你的上家或下家造成1点火焰伤害。",
                    ba_yuyunhao_skill: "雨云号",
                    ba_yuyunhao_skill_info: "锁定技，出牌阶段你使用的第一张【杀】目标数+1；你使用【杀】指定目标时可以令目标所有技能本回合内失效",
                    ba_yuyun: "雨云",
                    ba_yuyun_info: "准备阶段，若【雨云号直升机】不在你的装备区，你可以令【掷箱】本回合失效，并从场上/游戏外获得【雨云号直升机】。",
                    ba_zhixiang: "掷箱",
                    ba_zhixiang_info: "每回合限一次，你可以将一张黑色牌当作【桃】使用。在濒死阶段以此法使用的【桃】恢复基数+1。",
                    ba_jixing: "急行",
                    ba_jixing_info: "出牌阶段开始时，你可以获得一名角色的一张牌再摸一张牌，然后失去1点体力。本回合你到其的距离视为1。"
                },
                dynamicTranslate: {
                    "ba_kuanglie": function (player) {
                        if (player.storage.ba_kuanglie) return '转换技，当你不因此技能造成伤害时，阳：<span class="bluetext">若你已受伤，你可以摸X张牌</span>；阴：你恢复1点体力或对一名其他角色造成1点伤害，若该角色为受到伤害的角色，改为获取其X张牌。(X为你已损失的体力值)'
                        else return '转换技，当你不因此技能造成伤害时，若你已受伤，你可以摸X张牌；阴：<span class="bluetext">你恢复1点体力或对一名其他角色造成1点伤害，若该角色为受到伤害的角色，改为获取其X张牌。(X为你已损失的体力值)</span>'
                    },
                },
            },
            intro: "《碧蓝档案》同人武将扩展。<br><br>在笔者尚未完工的同人里将Kivotos按照明代译法译作「乞窝脱思」，这也是本扩展名的来源。",
            author: "山雀教主",
            diskURL: "",
            forumURL: "",
            version: "1.0",
        }, files: { "character": ["ba_NagisaKirifuji.jpg", "mouMiyuKasumizawa.jpg", "ba_MaryIochi.jpg", "mouHoshinoTakanashi.jpg", "ba_MiyakoTsukiyuki.jpg", "ba_AliceTendo.jpg", "ba_KannaOgata.jpg", "ba_AsunaIchinose.jpg", "ba_NoaUshio.jpg", "ba_MutsukiAsagi.jpg", "ba_TsurugiKenzaki.jpg", "mouMikaMisono.jpg", "ba_SerinaWashimi.jpg", "ba_NeroMikan.jpg", "ba_HifumiAjitani.jpg", "ba_HimariAkiboshi.jpg", "ba_AruRokuhachima.jpg", "ba_HanakoUrawa.jpg", "ba_KarinKakuTate.jpg", "ba_SeiaYurisono.jpg", "ba_YuukaHayase.jpg", "mouAzusaShirasu.jpg", "ba_HinaSorazaki.jpg", "ba_ShirokoSunaookami.jpg", "ba_KoharuShitae.jpg"], "card": ["ba_HikarinoKen.png"], "skill": [] }
    }
})
