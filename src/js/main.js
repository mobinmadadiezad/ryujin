import { renderHeader } from "../components/Header/index.js";
import { renderHero } from "../components/Hero/index.js";
import { renderBuilds } from "../components/Builds/index.js";
import { renderServices } from "../components/Services/index.js";
import { renderAbout } from "../components/About/index.js";
async function initApp() {
  await renderHeader();
  await renderHero();
  await renderBuilds();
  await renderServices();
  await renderAbout();
}

initApp();
