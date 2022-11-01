function ddl_nav() {
  {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
}

function ddl_ads() {
  {
    document.getElementById("myDropdown_ads").classList.toggle("show");
  }

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches('.post-menu-icon')) {
      var dropdowns = document.getElementsByClassName("dropdown-content-ads");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
}

function ddl_loc() {
  {
    document.getElementById("myDropdown_loc").classList.toggle("show");
  }

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches('.post-menu-icon')) {
      var dropdowns = document.getElementsByClassName("dropdown-content-loc");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
}
function hideAd() {
    // document.getElementById('furniture_ad').style.display = "block";
    const targetDiv = document.getElementById("furniture_ad");
    const btn = document.getElementById("hide_ad");
    btn.onclick = function () {
      if (targetDiv.style.display !== "none") {
        targetDiv.style.display = "none";
      } else {
        targetDiv.style.display = "block";
      }
    };
}

function changeColor(image) {
  if (image.src.indexOf("images/like_icon.png")>-1) {
      image.src = "images/like_icon_liked.png"; 
  } else {
      image.src = "images/like_icon.png";
  }
}

function changeColor_dislike(image) {
  if (image.src.indexOf("images/dislike_icon.png")>-1) {
      image.src = "images/dislike_icon_disliked.png"; 
  } else {
      image.src = "images/dislike_icon.png";
  }
}

function changeColor_loc(image) {

  if (image.src.indexOf("images/location-icon.png")>-1) {
      image.src = "images/location-icon-off.png";
      document.getElementById("loc_status").innerHTML = 'Location Sharing: OFF';

  } else {
      image.src = "images/location-icon.png";
      document.getElementById("loc_status").innerHTML = 'Location Sharing: ON ';
  }
}

function location_icon() {
  var x = document.getElementById('location-icon-text');
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function randomization(condition) {
  // condition 1-9 will dictate where completion page is placed
  let code = Math.floor(Math.random() * 90000) + 10000;

  // let clickHref = "location.href='./completion.html'" + '?code=' + code
  switch (condition) {
    case 1:
      //set location.href of registration page to completion.html
      let finishRegistrationButton = document.createElement("button")
      finishRegistrationButton.type = "submit"
      finishRegistrationButton.classList.add("registerbtn")
      finishRegistrationButton.textContent = "Finish Registration"
      finishRegistrationButton.onclick = function() {
        location.href = './completion.html'
      }
      let postBody = document.getElementById("post-body-ads")
      postBody.appendChild(finishRegistrationButton)
      break;
    case 2:
      //set location.href of registration page to completion.html
      if (document.getElementById("registerbtn") != null){
        let registerButton = document.getElementById("registerbtn")
      registerButton.onclick = function (){
        location.href = './loc_sft_img.html'
      }
      }
      let finishRegistrationButtonLoc = document.createElement("button")
      finishRegistrationButtonLoc.type = "submit"
      finishRegistrationButtonLoc.classList.add("registerbtn")
      finishRegistrationButtonLoc.textContent = "Finish Registration"
      finishRegistrationButtonLoc.onclick = function() {
        location.href = './completion.html'
      }
      let postBodyLoc = document.getElementById("post-body-loc")
      postBodyLoc.appendChild(finishRegistrationButtonLoc)
      break;
    case 3:
      //set location.href of "open up" on homepage to completion.html
      let openUpButton = document.getElementById("openUp");
      openUpButton.onclick = function () {
        location.href = './completion.html'
      }
      break;
    case 4:
      //help center
      let hcAdvertisements = document.getElementById("hcAdvertisements")
      hcAdvertisements.onclick = function () {
        location.href = './ads_sft_img.html'
      }

      let hcLocation = document.getElementById("hcLocation")
      hcLocation.onclick = function () {
        location.href = './loc_sft_img.html'
      }
      break;
    case 5:
      //help center
      let hcAdvertisements5 = document.getElementById("hcAdvertisements")

      hcAdvertisements5.onclick = function () {
        location.href = './ads_lft_video.html'
      }

      let hcLocation5 = document.getElementById("hcLocation")
      hcLocation5.onclick = function () {
        location.href = './loc_lft_video.html'
      }
      break;
    case 6:
      //settings
      let settingsAds = document.getElementById("adSlider")
      settingsAds.onclick = function () {
        let div = document.createElement("div")
        let button = document.createElement("button")
        button.textContent = "Complete Task"
        button.onclick = function () {
          location.href = './completion.html'
        }
        div.appendChild(button)
        document.getElementById("ads_education").appendChild(div)
      }
      let settingsLoc = document.getElementById("locSlider")
      settingsLoc.onclick = function () {
        let div = document.createElement("div")
        let button = document.createElement("button")
        button.textContent = "Complete Task"
        button.onclick = function () {
          location.href = './completion.html'
        }
        div.appendChild(button)
        document.getElementById("location_education").appendChild(div)
      }
      break;
    case 7:
      //in feed
      break;
    case 8:
      //in feed
      break;
    case 9:
      //in feed
      break;
  }
}
window.onload = function () {
  //Get url parameters to assign condition
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
  let value = params.rd; // "some_value"

  randomization(2)
}
