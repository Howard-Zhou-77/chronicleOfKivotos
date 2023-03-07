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
        }, help: {}, config: { 
            "baGroupChange": { 
                "name": "势力不变形为魏蜀吴群", 
                "intro": "开启后，本扩展内的“魏蜀吴”将变换回“三格千”。", 
                "init": lib.config.baGroupChange === undefined ? false:lib.config.baGroupChange ,
                onclick:function(item){
                    game.saveConfig('extension_乞国秘史_baGroupChange',item);
                    game.saveConfig('baGroupChange',item);
                }
            } }, package: {
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
                    "ba_AsunaIchinose": ["female", "wu", 4, ["ba_zhenren", "ba_pushu"]],
                    "ba_KoharuShitae": ["female", "wei", 3, ["ba_qingzheng", "ba_niwu"]],
                    "ba_MiyakoTsukiyuki": ["female", "qun", 4, ["ba_jujie", "ba_juyuan"]],
                    "ba_SerinaWashimi": ["female", "wei", 3, ["ba_renxian", "ba_lingyu"]],
                    "ba_AliceTendo": ["female", "wu", 4, ["ba_tianjian", "ba_jixue"]],
                    "ba_HimariAkiboshi": ["female", "wu", 3, ["ba_lunyi", "ba_heishu", "ba_chizhi"]],
                    "ba_AruRokuhachima": ["female", "shu", 4, ["ba_weiling", "ba_chonge"]],
                    "ba_MutsukiAsagi": ["female", "shu", 3, ["ba_fuji", "ba_liwu"]],
                    "ba_KannaOgata": ["female", "qun", 4, ["ba_kuanglie", "ba_xungong"]],
                    "ba_NeroMikan": ["female", "wu", 4, ["ba_poxi", "ba_jizhan"]],
                    "ba_KarinKakuTate": ["female", "wu", 4, ["ba_chuanyang", "ba_yuzu"]],
                    'ba_MeguShitakura': ['female', 'shu', 4, ['ba_kaiquan', 'ba_zaoshen', 'ba_cunzhi']],
                    'ba_AkoAmau': ['female', 'shu', 3, ['ba_siyi', 'ba_quanru']],
                    'ba_IoriShiromi': ['female', 'shu', 4, ['ba_zuru', 'ba_yinlang']],
                    'ba_IrohaNatsume': ['female', 'shu', '3/4/1', ['ba_qiuxia', 'ba_lipao']]
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
                },
            },
            card: {
                card: {
                    "ba_HikarinoKen": {
                        fullskin: true,
                        derivation: "ba_AliceTendo",
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
                },
                translate: {
                    "ba_HikarinoKen": "光之剑",
                    "ba_HikarinoKen_info": "每回合限一次，当你造成无属性伤害时，你可以将其改为火属性。锁定技，当你造成属性伤害时，若目标的装备区没有武器牌，此伤害+1。",
                    'ba_ruishijuan': "瑞士卷",
                    'ba_ruishijuan_info': "出牌阶段，对一名其他角色使用，你选择令其回复1点体力或令其下一回合前使用锦囊牌只能指定自己为目标。",
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
                        subSkill: {
                            call: {
                                enable: "phaseUse",
                                usable: 1,
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
                                player.chooseUseTarget('狙射：视为使用一张不计入次数的【杀】', { name: "sha" }, false, 'nodistance')/*.logSkill = "mouJushe"*/
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
                                audio: true,
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
                                        result.targets[0].addSkill('mouYizhong_2');
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
                                filter: (event, player) => event.card.name == 'juedou' && event.card.isCard && event.cards.length == 1,
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
                                        if (Math.abs(get.number(card) - player.storage.mouLeinie) > player.storage.mouLeinie_record % 4) return [1, -2]
                                        else return [1, 2];
                                    }
                                },
                                target: (card, player, target, num) => {
                                    if (get.number(card) && get.tag(card, 'damage') && target.storage.mouLeinie && target.storage.mouLeinie_record) {
                                        if (Math.abs(get.number(card) - target.storage.mouLeinie) > target.storage.mouLeinie_record % 4) return [1, 2]
                                        else return [1, -2];
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
                            player.addSkill('ba_quedi');
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
                                    if (get.color(card) == 'black' && get.type(card) == 'trick' && target.storage.ba_poce_roundcount < 2 && (get.tag(card, 'noh') || get.tag(card, 'damage'))) return [0, 0];
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
                                            if (get.name(card) == 'sha' && target.storage.ba_poce_1_roundcount < 2 && get.attitude(player, target) < 0 && target.countCards('h') > 1) return [0, -1];
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
                                    player.addSkill(lib.character[event.target.name][3])
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
                            return player.countCards('h')<3;
                        },
                        forced: true,
                        content: function () {
                            trigger.num++;
                        },
                        ai: {
                            effect: {
                                target: function (card, player, target, current) {
                                    if (get.tag(card,'damage') && target.countCards('h')<3) return [1, -2];
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
                            player.addSkill('ba_langxi');
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
                                    player.addSkill('ba_mieju');
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
                            player.addSkill('ba_pojun');
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
                    "ba_zhenren": {
                        intro: {
                            content: "已记录花色：$",
                            onunmark: true,
                        },
                        group: "ba_zhenren_count",
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
                                    if (player.storage.ba_zhenren && player.storage.ba_zhenren.contains(suit)) return false;
                                    return true;
                                },
                                content: function () {
                                    player.markAuto('ba_zhenren', [get.suit(trigger.card)]);
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
                            if (player.getStorage('ba_zhenren').length == 0) return false;
                            if (!game.hasPlayer(target => player != target && player.inRange(target) && target.countCards('h'))) return false;
                            var cards = player.getCards('h');
                            var num = 0;
                            for (var card of cards) {
                                if (get.type(card) != 'equip' && player.storage.ba_zhenren.contains(get.suit(card))) num++;
                            }
                            return num >= Math.ceil(player.getStorage('ba_zhenren').length / 2)
                        },
                        direct: true,
                        popup: false,
                        content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                            'step 0'
                            player.chooseCardTarget({
                                filterCard: (card, player) => { return get.type(card) != 'equip' && player.storage.ba_zhenren.contains(get.suit(card)) },
                                filterTarget: (card, player, target) => player != target && player.inRange(target) && target.countCards('h'),
                                selectCard: Math.ceil(player.getStorage('ba_zhenren').length / 2),
                                ai1: card => { var player = get.player(); if (player.storage.ba_zhenren.length < 3) return 0; else { return 7 - get.value(card); } },
                                ai2: target => Math.sign(get.attitude(_status.event.player, target)) * target.countCards('h'),
                                selectTarget: [1, Math.ceil(player.getStorage('ba_zhenren').length / 2)],
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
                            player.unmarkSkill('ba_zhenren');
                        },
                        prompt: "是否发动【震刃】？",
                        "prompt2": (event, player) => {
                            var len = player.storage.ba_zhenren.length;
                            var len1 = Math.ceil(len / 2) + 1;
                            var len2 = Math.ceil(len / 2);
                            return '弃置' + len1.toString() + '张花色为' + get.translation(player.storage.ba_zhenren) + '的牌并指定至多' + len2.toString() + '名角色，令其弃置所有花色为' + get.translation(player.storage.ba_zhenren) + '的手牌。'
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
                    "ba_jujie": {
                        trigger: {
                            player: "phaseDiscardBefore",
                        },
                        filter: (event, player) => !player.skipList.includes("phaseDiscard"),
                        content: () => {
                            player.addTempSkill('ba_jujie_1');
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
                    "ba_juyuan": {
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
                            var pl = player;
                            var tar = target;
                            player.choosePlayerCard(target, 1, 'h', 'visible').set('prompt', '选择一张牌使用之').set('filterButton', button => {
                                return game.hasPlayer(function (current) {
                                    return pl.canUse(button.link, current) && (get.type2(button.link) != 'equip');
                                });
                            }).set('ai', button => {
                                var eff = 0;
                                if (game.hasPlayer(current => {
                                    if (!pl.canUse(button.link, current)) return false;
                                    eff = get.effect(current, button.link, player, player);
                                    return eff > 0;
                                })) return eff;
                                return -1;
                            })
                            /* 'step 1'
                            if(result && result.links && result.links.length){
                                var _card = result.links[0];
                                event.card = _card;
                                var card1 = _card;
                                var prompt = '请选择使用'+get.translation(_card)+'的目标';
                                var tarr = target;
                                var pll = player;
                                player.chooseTarget((card,player,target)=>{
                                    return player.canUse(card1,target);
                                }).set('ai',function(target){
                                    return get.effect(target,card1,pll,pll);
                                }).set('prompt',prompt);
                            }else event.finish();
                            'step 2'
                            if(result && result.targets && result.targets.length){
                                player.useCard(event.card,result.targets,false,'ba_heishu').set('oncard',(card,player)=>{
                                    _status.event.directHit.addArray(game.filterPlayer());
                                });
                            } */
                            'step 1'
                            if (result && result.links && result.links.length) {
                                player.chooseUseTarget(result.links[0], true, false).set('oncard', (card, player) => {
                                    _status.event.directHit.addArray(game.filterPlayer());
                                });
                            }
                        },
                        ai: {
                            result: {
                                player: 1,
                                target: -1,
                            },
                            order: 3,
                        },
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
                            if (event.source == player) return false;
                            if (event.source.countCards('h') >= player.countCards('h')) return true;
                            var num1 = 0, num2 = 0, dm1 = player.getAllHistory('sourceDamage'), dm2 = event.source.getAllHistory('sourceDamage');
                            if (dm1.length) for (var evt of dm1) if (evt != event) num1 += evt.num;
                            if (dm2.length) for (var evt of dm2) if (evt != event) num2 += evt.num;
                            return num1 <= num2;
                        },
                        direct: true,
                        popup: false,
                        content: (event, step, source, player, target, targets, card, cards, skill, forced, num, trigger, result) => {
                            'step 0'
                            var _target = trigger.source;
                            var _player = player;
                            player.chooseControl(['摸两张牌再弃一张牌', '与其各摸两张牌', 'cancel2']).set('prompt', get.prompt(event.name, trigger.source)).set('ai', () => {
                                if (get.attitude(_player, _target) < 2) return '与其各摸两张牌';
                                else return '摸两张牌再弃一张牌';
                            })
                            'step 1'
                            if (result.control != 'cancel2') {
                                player.logSkill(event.name, trigger.source);
                                if (result.control == '摸两张牌再弃一张牌') {
                                    player.draw(2);
                                    player.chooseToDiscard(1, true, 'hes');
                                } else {
                                    player.draw(2);
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
                                player.storage.counttrigger.dbquedi--;
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
                                        else eff += (-get.effect(player, { name: "losehp" }, player, player) < get.effect(target,{name:"sha"},player, player))?1:-1;
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
                        mark: true,
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
                            if (game.filterPlayer().length>4)player.draw(event.num * Math.min(Math.max(Math.floor(game.filterPlayer(current => player.inRange(current) && current != player).length / 2), 1), 3))
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
                                    if (game.filterPlayer().length<=4) num = game.filterPlayer().length
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
                            player.chooseToDiscard('he', '###是否发动【' + get.translation(event.name) + '】？###你可以弃置一张牌，视为使用一张【增兵减灶】，然后再视为对' + get.translation(trigger.target) + '使用一张【杀】').set('ai', (card) => {
                                if (get.effect(trigger.target, "sha", player, player) < 0) return -1;
                                return 8 - get.value(card);
                            })
                            'step 1'
                            if (result.bool) {
                                player.logSkill(event.name, trigger.target)
                                player.useCard({ isCard: true, name: 'zengbin' }, 'nowuxie', player);
                                player.useCard({ isCard: true, name: "sha" }, trigger.target, false).set('skill', 'ba_zuru');
                            }
                        }
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
                    }
                },
                translate: {
                    ba_g_ruishijuan: "瑞士卷",
                    mouJushe: "狙射",
                    "mouJushe_info": "当你使用或打出一张基本牌的时候，你可以进行判定，若结果颜色与该基本牌相同，则你可以指定一名角色视为对其使用一张不计入次数的【杀】。锁定技，你使用【杀】无距离限制，你对攻击范围内的角色使用的【杀】不可被响应，当你使用黑色的【杀】造成伤害时，你摸一张牌。",
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
                    "ba_zhenren": "震刃",
                    "ba_pushu": "仆术",
                    "ba_zhenren_info": "当你使用牌或成为使用牌的目标时，记录牌的花色。记牌的花色数为X，准备阶段，你可以弃置X/2(向上取整)张花色被记录的非装备牌，指定攻击距离内至多X/2(向上取整)名其他角色，令其展示所有手牌并弃置所有被你记录的花色的牌。结算完毕后，清除你记录的所有花色。",
                    "ba_pushu_info": "当你使用或打出一张点数为字母的牌时，若为红色，你可以摸一张牌；否则你可以移动场上一张牌。",
                    "ba_niwu": "匿物",
                    "ba_qingzheng": "清正",
                    "ba_qingzheng_info": "锁定技，你的【乐不思蜀】判定反转；若你回合内出现了结果非黑桃的判定，你跳过本回合弃牌阶段；你攻击范围内的其他角色不得使用红【杀】和【乐不思蜀】。",
                    "ba_niwu_info": "每轮限一次，当你攻击范围内一名角色受到伤害时，你可以弃置至多该伤害的点数张红色牌，然后若你的判定区没有【乐不思蜀】，则将这些牌中随机一张当作【乐不思蜀】置入你的弃牌区，然后令此伤害减去你弃置牌的点数。",
                    "ba_jujie": "拒节",
                    "ba_juyuan": "据园",
                    "ba_jujie_info": "弃牌阶段开始时，你可以令你的手牌上限本回合视为2+X(X为你装备区的牌数)，然后此阶段结束时，若你的体力值小于2，你回复1点体力，否则，你摸1张牌。",
                    "ba_juyuan_info": "结束阶段，你可以弃置一张花色与其他角色装备区内一张装备牌相同的手牌，将该装备牌移动到你的装备区。",
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
                    "ba_heishu_info": "出牌阶段限两次，你可以观看一名攻击范围内的其他角色的手牌并对一名可用目标使用其中一张非装备牌。以此法使用的牌没有次数限制，且不可被响应。",
                    "ba_chizhi": "恃智",
                    "ba_chizhi_info": "出牌阶段限一次，你可以选择一名其他角色，令其猜测你摸的是否是锦囊牌。若猜错，则其下次对你造成伤害-1，否则其下次对你造成伤害+1。",
                    "ba_weiling": "威灵",
                    "ba_weiling_info": "出牌阶段限一次，你可以将一张黑色牌交给一名攻击范围内手牌数小于你的手牌数减2或为0的其他角色，然后选择对其造成1点伤害或令其对另一名你选定的其他角色造成1点伤害。",
                    "ba_chonge": "崇恶",
                    "ba_chonge_info": "一名角色造成伤害时，若其此前在本局游戏中造成的伤害总点数或手牌数大于等于你，你可以摸两张牌再弃置一张牌，或与其各摸两张牌。",
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
                    ba_zuru_info: "每回合限一次，当你的攻击范围内的一名其他角色成为不为此法使用的【杀】的目标时，你可以弃置一张牌，视为使用一张不可被【无懈可击】响应的【增兵减灶】，然后视为对其使用一张【杀】。若场上存活人数多于2，则使用者必须不为你。",
                    ba_yinlang: "引狼",
                    ba_yinlang_info: "锁定技，你对男性角色使用的【杀】或男性角色对你使用的【杀】均需两张【闪】才能响应。",
                    ba_lipao: "厉炮",
                    ba_qiuxia: "求暇",
                    ba_qiuxia_info: "你可以跳过你的出牌阶段并选择：弃置一张装备牌并视为使用一张【杀】，恢复1点体力或摸一张牌，然后获得2点护甲。你的手牌上限和摸牌阶段摸牌数+X(X为你的护甲值的一半向上取整)。",
                    ba_lipao_info: "当你使用【杀】指定目标时，你可以失去1点护甲，弃置其两张牌；你对体力值或手牌数不大于你的护甲值的角色造成的伤害+1。",
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