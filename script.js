// script.js

// List of your spec filenames (without the .json extension)
const specs = [
  "single_view",
  "single_view2",
  "single_view3",
  "multiple_view",
  "multiple_view2",
  "multiple_view3",
  "multiple_view4",
  "multiple_view5",
];

// Iterate and embed each chart
specs.forEach((id) => {
  const url = `data/${id}.json`; // e.g. data/single_view.json
  const selector = `#${id}`; // e.g. #single_view

  vegaEmbed(selector, url, {
    actions: false, // disable the Vega-Lite action menu
    renderer: "canvas", // or "svg"
  })
    .then(() => console.log(`Loaded ${id}`))
    .catch((err) => {
      console.error(`Failed to load ${url}:`, err);
      document.querySelector(selector).innerText = "Error loading chart";
    });
});
