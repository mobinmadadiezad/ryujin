import { renderHeader } from "../components/Header/index.js";
import { renderHero } from "../components/Hero/index.js";
import { renderBuilds } from "../components/Builds/index.js";

async function initApp() {
  await renderHeader();
  await renderHero();
  await renderBuilds();
}

initApp();
