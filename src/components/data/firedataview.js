import firebase from "firebase/app";
import "firebase/database";
import "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var ref = firebase.database().ref("uploads");

export function jsdata() {
  ref.on("value", getData);
  function refreshData() {
    var elements = document.getElementsByClassName("datacontainer");
    while (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0]);
    }
  }

  function getData(data) {
    if (window.location.pathname === "/data") {
      if (data.val() != null) {
        firebase.auth().onAuthStateChanged(function (user) {
          if (user) {
            refreshData();

            let keys = Object.keys(data.val());
            var i = -1;

            while (i < keys.length - 1) {
              i = i + 1;
              let keyVal = keys[i];

              var dataElement = document.getElementById("dataArea");
              var dataContainer = document.createElement("div");
              dataContainer.className = "datacontainer";

              var dataTitle = document.createElement("h1");
              var dataTitleText = document.createTextNode(
                data.val()[keyVal].title
              );
              dataTitle.appendChild(dataTitleText);
              dataTitle.className = "datatitle";
              dataContainer.appendChild(dataTitle);

              var dataBody = document.createElement("h3");
              var dataBodyText = document.createTextNode(
                data.val()[keyVal].body
              );
              dataBody.appendChild(dataBodyText);
              dataBody.className = "databody";
              dataContainer.appendChild(dataBody);

              let deleteDataButton = document.createElement("p");
              let deleteDataId = document.createTextNode("Delete");
              deleteDataButton.appendChild(deleteDataId);
              deleteDataButton.className = "noSelect";
              deleteDataButton.style.color = "red";
              deleteDataButton.style.padding = "10px";
              deleteDataButton.onmouseover = function () {
                deleteDataButton.style.cursor = "pointer";
                deleteDataButton.style.color = "black";
              };
              deleteDataButton.onmouseout = function () {
                deleteDataButton.style.color = "red";
              };
              deleteDataButton.onclick = function deleteNote() {
                firebase
                  .database()
                  .ref("uploads/" + keyVal)
                  .remove();

                refreshData();
              };

              dataContainer.appendChild(deleteDataButton);
              dataElement.appendChild(dataContainer);
            }
          } else {
            refreshData();

            let keys = Object.keys(data.val());
            i = -1;

            while (i < keys.length - 1) {
              i = i + 1;
              let keyVal = keys[i];

              dataElement = document.getElementById("dataArea");
              dataContainer = document.createElement("div");
              dataContainer.className = "datacontainer";

              dataTitle = document.createElement("h1");
              dataTitleText = document.createTextNode(data.val()[keyVal].title);
              dataTitle.appendChild(dataTitleText);
              dataTitle.className = "datatitle";
              dataContainer.appendChild(dataTitle);

              dataBody = document.createElement("h3");
              dataBodyText = document.createTextNode(data.val()[keyVal].body);
              dataBody.appendChild(dataBodyText);
              dataBody.className = "databody";
              dataContainer.appendChild(dataBody);

              dataElement.appendChild(dataContainer);
            }
          }
        });
      }
    }
  }
}
