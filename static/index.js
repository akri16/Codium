const input = document.getElementById("input");
const upload = document.getElementById("upload");
const result = document.getElementById("result");
const fileName = document.getElementById("chosen-file");
const resCont = document.getElementById("res");
const illus = document.getElementById("illustration")
const loader = document.getElementById("loader");
const audio = new Audio(document.getElementById("audio").innerHTML);


function uploadFile() {
    input.click();
}


input.addEventListener("change", function() {
    file = this.files[0];
    upload.disabled = file === undefined;
    if (file) showFile(file); 
    this.value = "";
});
  

async function showFile(file) {
    if (!file || file.name.split('.').pop() !== "exe" || file.size > 50**8) {
        alert("Please select a .exe file of less than 500 MB");
        console.log(`${file} ${file.name.split('.').pop()} ${file.size}`);
        return;
    }

    result.innerHTML = "";
    illus.hidden = true;
    resCont.style.display = "flex";
    loader.style.visibility = "visible";

    fileName.innerHTML = file.name;
    const sendData = new FormData();
    sendData.append("file", file);

    try {
        const res = await fetch('/predict', {
            method: 'POST',
            body: sendData
        })

        const data = await res.json();
        console.log(data);
        audio.play();

        if (data.result < 0.4){
            result.innerHTML = "Benign ✔️";
            result.style.color = "#1a7d1a";
        }
        else {
            result.innerHTML = "Malignant ❗";
            result.style.color = "#eb0000";
        }

    } catch (e) {
        console.error(e);
        alert("Error occured");
        input.value = "";
        illus.hidden = false;
        resCont.style.display = "none";
    } finally {
        loader.style.visibility = "hidden";
        upload.disabled = false;
    }

}
