import { BASE_DIR } from "../constants.yml";
import ShaderManager from "./lib/shaderManager";

const view = document.querySelector(".js-view");
const manager = new ShaderManager(view);

manager.init();

// check dark mode
const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
function checkColorMode(darkModeOn) {
    if (darkModeOn) {
        // Dark
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");
    } else {
        // Light
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
    }
}

darkModeMediaQuery.addListener(e => {
    const darkModeOn = e.matches;
    checkColorMode(darkModeOn);
});

const darkModeOn = darkModeMediaQuery.matches;
checkColorMode(darkModeOn);

const btn = document.querySelector("#btn-mode");

// クリックした時の挙動
btn.addEventListener("click", () => {
    if (document.body.classList.contains("light-theme")) {
        // ダークモード
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");
    } else {
        // ライトモード
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
    }
});
