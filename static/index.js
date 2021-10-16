input = document.getElementById("input");
upload = document.getElementById("upload");
result = document.getElementById("result");
fileName = document.getElementById("chosen-file");
resCont = document.getElementById("res");
illus = document.getElementById("illustration")
loader = document.getElementById("loader");


function uploadFile() {
    input.click();
}


input.addEventListener("change", function() {
    file = this.files[0];
    upload.disabled = file === undefined;
    if (file) showFile(file); 
});
  

async function showFile(file) {
    if (!file || file.name.split('.').pop() !== "exe" || file.size > 10**7) {
        alert("Please select a .exe file of less than 10 MB");
        console.log(`${file} ${file.name.split('.').pop()} ${file.size}`);
        return;
    }

    illus.hidden = true;
    resCont.style.display = "flex";
    loader.hidden = false;

    fileName.innerHTML = file.name;



    try {
        // let res = await fetch('/predict', {
        //     method: 'POST',
        //     body: file
        // })

        // let data = await res.json();


        if (data.data < 0.4){
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
        loader.hidden = true;
        uploadButton.disabled = false;
    }

}
