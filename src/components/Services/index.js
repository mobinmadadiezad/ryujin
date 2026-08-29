export async function renderServices() {
  const response = await fetch("/src/components/Services/Services.html");

  if (!response.ok) {
    throw new Error(`Failed to fetch Services: ${response.status}`);
  }

  const html = await response.text();
  const rootServices = document.querySelector("#root-services");

  if (!rootServices) {
    throw new Error("Root services not found");
  }

  rootServices.innerHTML = html;
}
