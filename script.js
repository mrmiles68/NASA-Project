const nasaKey= "?api_key=YdrLS7uxsJOt6KuDiJwWGgnDCQIRtRI4krAVulcd";
const nasaKey2= "YdrLS7uxsJOt6KuDiJwWGgnDCQIRtRI4krAVulcd";
const nasaPic= "https://api.nasa.gov/EPIC/api/natural/date/";
const neoList= "https://api.nasa.gov/neo/rest/v1/feed?start_date="
const picLink= "https://api.nasa.gov/EPIC/archive/natural/"
const picIOD = "https://api.nasa.gov/planetary/apod"
let nasaFix= ""
let picChoice=""
let endDate=""
let saveCount = 0;
let dayPick=[];
let chosenDate =""
let displayDate=[]




const saveLocal = function(datePick){
  saveCount=localStorage.getItem(11) || 0;

  if (saveCount > 9){
    saveCount = 0;
  }
  console.log("savecount is: " + saveCount)
  dayPick[saveCount] = datePick;
  localStorage.setItem(saveCount, datePick);
console.log("Saved is " + localStorage.getItem(saveCount));
  saveCount++;
  localStorage.setItem(11,saveCount);

  for (i=0; i<10; i++){

    displayDate[i] = localStorage.getItem(i);
    console.log("Displayed date is: " + displayDate[i])
    console.log("This date should be displayed: " + localStorage.getItem(i))
  }

 
  document.getElementById("dateZro").innerHTML = localStorage.getItem(0);
  document.getElementById("dateOne").innerHTML = localStorage.getItem(1);
  document.getElementById("dateTwo").innerHTML = localStorage.getItem(2);
  document.getElementById("dateTre").innerHTML = localStorage.getItem(3);
  document.getElementById("dateFor").innerHTML = localStorage.getItem(4);
  document.getElementById("dateFiv").innerHTML = localStorage.getItem(5);
  document.getElementById("dateSix").innerHTML = localStorage.getItem(6);
  document.getElementById("dateSev").innerHTML = localStorage.getItem(7);
  document.getElementById("dateEig").innerHTML = localStorage.getItem(8);
  document.getElementById("dateNin").innerHTML = localStorage.getItem(9);


}

$("#getPic").click(function(){
    let datePick = $("#dateEntered").val();
    console.log(datePick);
    saveLocal(datePick);
    nasaFix = nasaPic.concat(datePick);
    nasaLink = nasaFix.concat(nasaKey);
    console.log(nasaLink);

    fetch(nasaLink).then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        
        datePick = datePick.replace(/\-/g, '/');
        console.log(datePick);
        for (i=0; i<12; i++){
        epicPic = data[i].image;
        epicCap = data[0].caption
        console.log(epicPic)
        epicMid = picLink.concat(datePick + "/png/")
        epicFind = epicMid.concat(epicPic)
        epicLink = epicFind.concat(".png" + nasaKey)
        
        document.getElementById("picChosen").src = epicLink;
        document.getElementById("picCaption").innerHTML = epicCap;
        console.log(epicLink);
       
      }
          });
     });

// Second API Search

     $("#getVid").click(function(){
        let datePick = $("#dayEntered").val();
        console.log(datePick);
        saveLocal(datePick);
        neoLink = picIOD.concat(nasaKey + "&date=" + datePick)
       
        console.log(neoLink);
    
        fetch(neoLink).then(function (response) {
            return response.json();
          })
          .then(function (data) {
            console.log(data);
            
     
    
            neoPic = data.url;
            neoCap = data.explanation;
            console.log(neoPic)
         

            document.getElementById("vidChosen").src = neoPic;
            document.getElementById("vidCaption").innerHTML = neoCap;
       
              });
         });
