import { renderHeader } from "../components/Header/index.js";
import { renderHero } from "../components/Hero/index.js";

async function initApp() {
  await renderHeader();
  await renderHero();
}

initApp();
