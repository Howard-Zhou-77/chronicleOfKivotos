import { lib, get, _status, ui, game, ai } from './extension/noname.js';
import { CONFIG } from './extension/config.js';
import { CONTENT } from './extension/content.js';
import { PRECONTENT } from './extension/precontent.js';
import { HELP } from './extension/help.js'

let mainPackage = {
    name: "乞国秘史", content: CONTENT, precontent: PRECONTENT, config: CONFIG, help: HELP, package: {
        character: {
            character: {
            },
            translate: {
            },
        },
        card: {
            card: {
            },
            translate: {
            },
            list: [],
        },
        skill: {
            skill: {
            },
            translate: {
            },
        },
        intro: "《碧蓝档案》同人武将扩展。",
        author: "山雀教主",
        diskURL: "",
        forumURL: "",
        version: "0.1.0",
    }, files: { "character": [], "card": [], "skill": [] }
};

export let type = 'extension';

window.乞国秘史_extension_package = mainPackage;

export default mainPackage;