export async function renderCTA() {
  const response = await fetch("/src/components/CTA/Cta.html");

  if (!response.ok) {
    throw new Error(`Failed to fetch CTA: ${response.status}`);
  }

  const html = await response.text();
  const rootCTA = document.querySelector("#root-CTA");

  if (!rootCTA) {
    throw new Error("Root CTA not found");
  }

  rootCTA.innerHTML = html;
}
