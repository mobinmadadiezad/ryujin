export async function renderAbout() {
  const response = await fetch("/src/components/About/About.html");

  if (!response.ok) {
    throw new Error(`Failed to fetch About: ${response.status}`);
  }

  const html = await response.text();
  const rootAbout = document.querySelector("#root-about");

  if (!rootAbout) {
    throw new Error("Root about not found");
  }

  rootAbout.innerHTML = html;
}
