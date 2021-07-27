Vue.config.devtools = true;
console.log("vue", Vue);
const renderIcons = (icons, targetElement) => {
    let iconsTemplate = "";
    icons.forEach((icon, index) => {
        iconsTemplate += `
        <div class="col-2 text-center bg-white rounded-3">
            <i class="${icon.family} ${icon.prefix}${icon.name} fa-2x ${icon.type}"></i>
            <h6>${icon.name.toUpperCase()}</h6>
        </div>        
        `;
    });
    targetElement.innerHTML = iconsTemplate;
    
};

const cardSection = document.querySelector("#icons .row");
renderIcons(icons, cardSection);

const selectField = document.getElementById("type-filter");

selectField.addEventListener("change", () => {
    const filterValue = selectField.value;
    if(filterValue === "all"){
        renderIcons(icons, cardSection);
        return;
    }
    const filteredIcons = icons.filter((icon) => filterValue === icon.type);
    renderIcons(filteredIcons, cardSection);
});