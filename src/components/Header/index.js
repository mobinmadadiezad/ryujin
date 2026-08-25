export async function renderHeader() {
  const response = await fetch("/src/components/Header/Header.html");

  if (!response.ok) {
    throw new Error(`Failed to fetch Header: ${response.status}`);
  }

  const html = await response.text();
  const rootHeader = document.querySelector("#root-header");

  if (!rootHeader) {
    throw new Error("Root header not found");
  }

  rootHeader.innerHTML = html;
}
