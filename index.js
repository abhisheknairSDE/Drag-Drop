const dropContainer = document.getElementById("drop-container");
const fileInput = document.getElementById("file-input");
const thumbnailsContainer = document.getElementById("thumbnails");

dropContainer.addEventListener("dragover", (event) => {
    event.preventDefault();
    dropContainer.style.border = '2px dashed blue';
});

dropContainer.addEventListener("drop", (event) => {
    event.preventDefault();
    dropContainer.style.border = '2px dashed gray';

    const files = Array.from(event.dataTransfer.files);
    handleFiles(files);
})

dropContainer.addEventListener("dragleave", (event) => {
    event.preventDefault();
    dropContainer.style.border = "2px dashed gray";
});

fileInput.addEventListener("change", () => {
    const files = Array.from(fileInput.files);
    handleFiles(files);
});

const handleFiles = (files) => {
    files.forEach((file) => {
        if(file.type.startsWith("image/")){
            const reader = new FileReader();
            reader.onload = (event) => {
                const thumbnail = document.createElement("img");
                thumbnail.classList.add("thumbnail");
                thumbnail.src = event.target.result;
                thumbnailsContainer.appendChild(thumbnail);
            };
            reader.readAsDataURL(file);
        }
    });
};



console.log("test")