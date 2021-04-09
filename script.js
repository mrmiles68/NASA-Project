const nasaKey= "?api_key=YdrLS7uxsJOt6KuDiJwWGgnDCQIRtRI4krAVulcd";
const nasaKey2= "YdrLS7uxsJOt6KuDiJwWGgnDCQIRtRI4krAVulcd";
const nasaPic= "https://api.nasa.gov/EPIC/api/natural/date/";
const neoList= "https://api.nasa.gov/neo/rest/v1/feed?start_date="
const picLink= "https://api.nasa.gov/EPIC/archive/natural/"
let nasaFix= ""
let picChoice=""
let endDate=""


$("#getPic").click(function(){
    datePick = $("#dateEntered").val();
    console.log(datePick);
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

        epicPic = data[0].image;
        console.log(epicPic)
        epicMid = picLink.concat(datePick + "/png/")
        epicFind = epicMid.concat(epicPic)
        epicLink = epicFind.concat(".png" + nasaKey)
        
        document.getElementById("picChosen").src = epicLink;
        console.log(epicLink);
          });
     });

// Second API Search

     $("#getVid").click(function(){
        dayPick = $("#dayEntered").val();
        console.log(dayPick);
        let endDate = moment(dayPick, "YYYY-MM-DD").add(7, "YYYY-MM-DD");
        console.log("end date is " + endDate);
        endDate2 = moment(endDate).format("YYYY-MM-DD");
        console.log("end date is " + endDate2);
        neoFix = neoList.concat(dayPick + "&end_date=" + endDate2 + "&api_key=" + nasaKey2);
        neoLink = neoFix.concat(nasaKey2);
        console.log(neoLink);
    
        fetch(neoLink).then(function (response) {
            return response.json();
          })
          .then(function (data) {
            console.log(data);
            
            // datePick = datePick.replace(/\-/g, '/');
            // console.log(datePick);
    
            epicPic = data[0].image;
            console.log(epicPic)
            epicMid = picLink.concat(datePick + "/png/")
            epicFind = epicMid.concat(epicPic)
            epicLink = epicFind.concat(".png" + nasaKey)

            document.getElementById("vidChosen").value
            document.getElementById("cityZro").innerHTML = cityPicked[0];
            console.log(epicLink);
              });
         });
