export async function renderHero() {
  const response = await fetch("/src/components/Hero/Hero.html");

  if (!response.ok) {
    throw new Error(`Failed to fetch Hero: ${response.status}`);
  }

  const html = await response.text();
  const rootHero = document.querySelector("#root-hero");

  if (!rootHero) {
    throw new Error("Root hero not found");
  }

  rootHero.innerHTML = html;
}
