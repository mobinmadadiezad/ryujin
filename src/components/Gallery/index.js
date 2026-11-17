export async function renderGallery() {
  const response = await fetch("/src/components/Gallery/Gallery.html");

  if (!response.ok) {
    throw new Error(`Failed to fetch Gallery: ${response.status}`);
  }

  const html = await response.text();
  const rootGallery = document.querySelector("#root-gallery");

  if (!rootGallery) {
    throw new Error("Root gallery not found");
  }

  rootGallery.innerHTML = html;
}
