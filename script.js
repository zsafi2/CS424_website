const chartIds = [
  "single_view1",
  "single_view2",
  "single_view3",
  "single_view4",
  "multiple_view1",
  "multiple_view2",
  "multiple_view3",
  "multiple_view4",
  "multiple_view5",
  "multiple_view6",
];

chartIds.forEach((id) => {
  const url = `new_data/${id}.json`; // or new_data/, depending on your folder
  const selector = `#${id}`;

  fetch(url)
    .then((res) => res.json())
    .then((spec) => {
      return vegaEmbed(selector, spec, { actions: false });
    })
    .catch((err) => {
      console.error(`Error loading ${id}:`, err);
      document.querySelector(selector).innerText = "Chart failed to load.";
    });
});
