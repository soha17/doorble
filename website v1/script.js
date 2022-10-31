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

function privacy_education_loc() {
  var selectedobj = document.getElementById('location_education');

  if (selectedobj.className == 'hide') {  //check if classname is hide 
    selectedobj.style.display = "block";
    selectedobj.readOnly = true;
    selectedobj.className = 'show';
  } else {
    selectedobj.style.display = "none";
    selectedobj.className = 'hide';
  }
}

function privacy_education_ads() {

  var selectedobj = document.getElementById('ads_education');

  if (selectedobj.className == 'hide') {  //check if classname is hide 
    selectedobj.style.display = "block";
    selectedobj.readOnly = true;
    selectedobj.className = 'show';
  } else {
    selectedobj.style.display = "none";
    selectedobj.className = 'hide';
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
    case 2:
    //set location.href of registration page to completion.html
    case 3:
      //set location.href of "open up" on homepage to completion.html
      let openUpButton = document.getElementById("openUp");
      openUpButton.onclick = function () {
        location.href = './completion.html'
      }
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
    case 6:
      //settings
      let settingsAds = document.getElementById("adSlider")
      settingsAds.onclick = function () {
        let div = document.createElement("div")
        div.textContent = code
        document.getElementById("ads_education").appendChild(div)
      }
      let settingsLoc = document.getElementById("locSlider")
      settingsLoc.onclick = function () {
        let div = document.createElement("div")
        div.textContent = code
        document.getElementById("location_education").appendChild(div)
      }

    case 7:
    //in feed
    case 8:
    //in feed
    case 9:
    //in feed
  }
}
//TODO: check if the onload should be for a specific page e.g., helpcenter
window.onload = function () {
  // //Get url parameters to assign condition
  // const params = new Proxy(new URLSearchParams(window.location.search), {
  //   get: (searchParams, prop) => searchParams.get(prop),
  // });
  // // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
  // let value = params.rd; // "some_value"
  // randomization(value)
  // randomization(3)
  randomization(4)
  // randomization(5)
  // randomization(6)

}