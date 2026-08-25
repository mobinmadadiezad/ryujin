import { renderHeader } from "../components/Header/index.js";

async function initApp() {
    await renderHeader();
}

initApp();