export async function renderBuilds() {
  const response = await fetch("/src/components/Builds/Builds.html");

  if (!response.ok) {
    throw new Error(`Failed to fetch Builds: ${response.status}`);
  }

  const html = await response.text();
  const rootBuilds = document.querySelector("#root-builds");

  if (!rootBuilds) {
    throw new Error("Root builds not found");
  }

  rootBuilds.innerHTML = html;
}
