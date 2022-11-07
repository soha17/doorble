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
  console.log("test")
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
  if (image.src.indexOf("images/like_icon.png") > -1) {
    image.src = "images/like_icon_liked.png";
  } else {
    image.src = "images/like_icon.png";
  }
}

function changeColor_dislike(image) {
  if (image.src.indexOf("images/dislike_icon.png") > -1) {
    image.src = "images/dislike_icon_disliked.png";
  } else {
    image.src = "images/dislike_icon.png";
  }
}

function changeColor_loc(image) {

  if (image.src.indexOf("images/location-icon.png") > -1) {
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
  // condition 1-9 will dictate where completion code appears
  let completionDiv = document.createElement("div")
  completionDiv.classList.add("completion-message")
  completionDiv.id = "completionDiv"
  switch (condition) {
    case 1:
      //Get pid parameter
      const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      });

      let value = params.pid;
      value = String(value)

      //Ensure query parameters persist if participant clicks on other available links
      let doorbleLogo = document.getElementById("doorble-logo")
      doorbleLogo.href = './homepage.html?rd=1&pid=' + value
      if (document.getElementById("settings") != null) {
        let settings = document.getElementById("settings")
        settings.href = './settings.html?rd=1&pid=' + value
      }
      if (document.getElementById("helpCenter") != null) {
        let helpCenter = document.getElementById("helpCenter")
        helpCenter.href = './helpcenter.html?rd=1&pid=' + value
      }
      if (document.getElementById("post") != null) {
        let post = document.getElementById("post")
        post.href = './loc_lft.html?rd=1&pid=' + value
      }
      if (document.getElementById("adsDropdown") != null) {
        let adsDropdown = document.getElementById("adsDropdown")
        adsDropdown.href = './ads_lft.html?rd=1&pid=' + value
      }
      if (document.getElementById("inPostAdsLft") != null) {
        let inPostAdsLft = document.getElementById("inPostAdsLft")
        inPostAdsLft.href = './ads_lft.html?rd=1&pid=' + value
      }
      if (document.getElementById("inPostSettings") != null) {
        let inPostSettings = document.getElementById("inPostSettings")
        inPostSettings.href = './settings.html?rd=1&pid=' + value
      }
      //Having trouble with this -- will need to fix if we want people to be able to click on "doorble.com" in the post
      // if(document.getElementById("inPostLabelAdsLft")!=null){
      //   let inPostLabelAdsLft = document.getElementById("inPostLabelAdsLft")
      //   inPostLabelAdsLft.onlick = function (){
      //     inPostLabelAdsLft.href = './ads_lft.html?rd=1&pid=' + value
      //   }
      // }
      if (document.getElementById("inPostLocSettings") != null) {
        let inPostLocSettings = document.getElementById("inPostLocSettings")
        inPostLocSettings.href = './settings.html?rd=1&pid=' + value
      }
      if (document.getElementById("inPostLocLft") != null) {
        let inPostLocLft = document.getElementById("inPostLocLft")
        inPostLocLft.href = './loc_lft.html?rd=1&pid=' + value
      }
      if (document.getElementById("settingsAdsLft") != null) {
        let settingsAdsLft = document.getElementById("settingsAdsLft")
        settingsAdsLft.href = './ads_lft.html?rd=1&pid=' + value
      }

      if (document.getElementById("settingsLocLft") != null) {
        let settingsLocLft = document.getElementById("settingsLocLft")
        settingsLocLft.href = './loc_lft.html?rd=1&pid=' + value
      }

      if (document.getElementById("adsLftSettings") != null) {
        let adsLftSettings = document.getElementById("adsLftSettings")
        adsLftSettings.href = './settings.html?rd=1&pid=' + value
      }
      if (document.getElementById("locLftSettings") != null) {
        let locLftSettings = document.getElementById("locLftSettings")
        locLftSettings.href = './settings.html?rd=1&pid=' + value
      }
      if (document.getElementById("adsSftImgAdsLft") != null) {
        let adsSftImgAdsLft = document.getElementById("adsSftImgAdsLft")
        adsSftImgAdsLft.href = './ads_lft.html?rd=1&pid=' + value
      }
      if (document.getElementById("adsSftImgSettings") != null) {
        let adsSftImgSettings = document.getElementById("adsSftImgSettings")
        adsSftImgSettings.href = './settings.html?rd=1&pid=' + value
      }
      if (document.getElementById("locSftImgLocLft") != null) {
        let locSftImgLocLft = document.getElementById("locSftImgLocLft")
        locSftImgLocLft.href = './loc_lft.html?rd=1&pid=' + value
      }
      if (document.getElementById("locSftImgSettings") != null) {
        let locSftImgSettings = document.getElementById("locSftImgSettings")
        locSftImgSettings.href = './settings.html?rd=1&pid=' + value
      }
      if (document.getElementById("adsLftVideoSettings") != null) {
        let adsLftVideoSettings = document.getElementById("adsLftVideoSettings")
        adsLftVideoSettings.href = './settings.html?rd=1&pid=' + value
      }
      if (document.getElementById("locLftVideoSettings") != null) {
        let locLftVideoSettings = document.getElementById("locLftVideoSettings")
        locLftVideoSettings.href = './settings.html?rd=1&pid=' + value
      }

      if (document.getElementById("registerbtn") != null) {
        let continueInRegistrationButton = document.getElementById("registerbtn")
        continueInRegistrationButton.onclick = function () {
          location.href = './ads_sft_img.html?rd=1&pid=' + value
        }
      }

      let continueInRegistrationButton = document.createElement("button")
      continueInRegistrationButton.type = "submit"
      continueInRegistrationButton.classList.add("registerbtn")
      continueInRegistrationButton.textContent = "Continue"
      continueInRegistrationButton.id = "continueInRegistration1"

      if (document.getElementById("post-body-ads") != null) {
        let postBody = document.getElementById("post-body-ads")
        postBody.appendChild(continueInRegistrationButton)
      }

      continueInRegistrationButton.onclick = function () {
        location.href = './loc_sft_img.html?rd=1&pid=' + value
      }

      let finishRegistrationButton = document.createElement("button")
      finishRegistrationButton.type = "submit"
      finishRegistrationButton.classList.add("registerbtn")
      finishRegistrationButton.textContent = "Finish Registration"

      if (document.getElementById("post-body-loc") != null) {
        let postBodyLoc = document.getElementById("post-body-loc")
        postBodyLoc.appendChild(finishRegistrationButton)
      }


      finishRegistrationButton.onclick = function () {
        completionDiv.textContent = "Your completion code is 52531. You may now return to the survey."
        let postBody = document.getElementById("post-body-loc")
        postBody.appendChild(completionDiv)
      }
      break;
    case 2:
      //Get pid parameter
      const params2 = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      });

      let value2 = params2.pid;
      value2 = String(value2)

      //Ensure query parameters persist if participant clicks on other available links
      let doorbleLogo2 = document.getElementById("doorble-logo")
      doorbleLogo2.href = './homepage.html?rd=2&pid=' + value2
      if (document.getElementById("settings") != null) {
        let settings2 = document.getElementById("settings")
        settings2.href = './settings.html?rd=2&pid=' + value2
      }
      if (document.getElementById("helpCenter") != null) {
        let helpCenter2 = document.getElementById("helpCenter")
        helpCenter2.href = './helpcenter.html?rd=2&pid=' + value2
      }
      if (document.getElementById("post") != null) {
        let post2 = document.getElementById("post")
        post2.href = './loc_lft.html?rd=2&pid=' + value2
      }
      if (document.getElementById("adsDropdown") != null) {
        let adsDropdown2 = document.getElementById("adsDropdown")
        adsDropdown2.href = './ads_lft.html?rd=2&pid=' + value2
      }
      if (document.getElementById("inPostAdsLft") != null) {
        let inPostAdsLft2 = document.getElementById("inPostAdsLft")
        inPostAdsLft2.href = './ads_lft.html?rd=2&pid=' + value2
      }
      if (document.getElementById("inPostSettings") != null) {
        let inPostSettings2 = document.getElementById("inPostSettings")
        inPostSettings2.href = './settings.html?rd=2&pid=' + value2
      }
      //Having trouble with this -- will need to fix if we want people to be able to click on "doorble.com" in the post
      // if(document.getElementById("inPostLabelAdsLft")!=null){
      //   let inPostLabelAdsLft = document.getElementById("inPostLabelAdsLft")
      //   inPostLabelAdsLft.onlick = function (){
      //     inPostLabelAdsLft.href = './ads_lft.html?rd=1&pid=' + value
      //   }
      // }
      if (document.getElementById("inPostLocSettings") != null) {
        let inPostLocSettings2 = document.getElementById("inPostLocSettings")
        inPostLocSettings2.href = './settings.html?rd=2&pid=' + value2
      }
      if (document.getElementById("inPostLocLft") != null) {
        let inPostLocLft2 = document.getElementById("inPostLocLft")
        inPostLocLft2.href = './loc_lft.html?rd=2&pid=' + value2
      }

      if (document.getElementById("settingsAdsLft") != null) {
        let settingsAdsLft = document.getElementById("settingsAdsLft")
        settingsAdsLft.href = './ads_lft.html?rd=2&pid=' + value2
      }

      if (document.getElementById("settingsLocLft") != null) {
        let settingsLocLft = document.getElementById("settingsLocLft")
        settingsLocLft.href = './loc_lft.html?rd=2&pid=' + value2
      }
      if (document.getElementById("adsLftSettings") != null) {
        let adsLftSettings = document.getElementById("adsLftSettings")
        adsLftSettings.href = './settings.html?rd=2&pid=' + value2
      }
      if (document.getElementById("locLftSettings") != null) {
        let locLftSettings = document.getElementById("locLftSettings")
        locLftSettings.href = './settings.html?rd=2&pid=' + value2
      }
      if (document.getElementById("adsSftImgAdsLft") != null) {
        let adsSftImgAdsLft = document.getElementById("adsSftImgAdsLft")
        adsSftImgAdsLft.href = './ads_lft.html?rd=2&pid=' + value2
      }
      if (document.getElementById("adsSftImgSettings") != null) {
        let adsSftImgSettings = document.getElementById("adsSftImgSettings")
        adsSftImgSettings.href = './settings.html?rd=2&pid=' + value2
      }
      if (document.getElementById("locSftImgLocLft") != null) {
        let locSftImgLocLft = document.getElementById("locSftImgLocLft")
        locSftImgLocLft.href = './loc_lft.html?rd=2&pid=' + value2
      }
      if (document.getElementById("locSftImgSettings") != null) {
        let locSftImgSettings = document.getElementById("locSftImgSettings")
        locSftImgSettings.href = './settings.html?rd=2&pid=' + value2
      }
      if (document.getElementById("adsLftVideoSettings") != null) {
        let adsLftVideoSettings = document.getElementById("adsLftVideoSettings")
        adsLftVideoSettings.href = './settings.html?rd=2&pid=' + value2
      }
      if (document.getElementById("locLftVideoSettings") != null) {
        let locLftVideoSettings = document.getElementById("locLftVideoSettings")
        locLftVideoSettings.href = './settings.html?rd=2&pid=' + value2
      }

      if (document.getElementById("registerbtn") != null) {
        let registerButton = document.getElementById("registerbtn")
        registerButton.onclick = function () {
          location.href = './ads_lft_video.html?rd=2&pid=' + value2
        }
      }

      let continueInRegistrationButtonLft = document.createElement("button")
      continueInRegistrationButtonLft.type = "submit"
      continueInRegistrationButtonLft.classList.add("registerbtn")
      continueInRegistrationButtonLft.textContent = "Continue"
      continueInRegistrationButtonLft.id = "continueInRegistration1"


      if (document.getElementById("lft-vid-post-body-ads") != null) {
        let postBody = document.getElementById("lft-vid-post-body-ads")
        postBody.appendChild(continueInRegistrationButtonLft)
      }

      continueInRegistrationButtonLft.onclick = function () {
        location.href = './loc_lft_video.html?rd=2&pid=' + value2
      }

      let finishRegistrationButtonLft = document.createElement("button")
      finishRegistrationButtonLft.type = "submit"
      finishRegistrationButtonLft.classList.add("registerbtn")
      finishRegistrationButtonLft.textContent = "Finish Registration"

      let postBodyLocLft = document.getElementById("lft-vid-post-body-loc")
      postBodyLocLft.appendChild(finishRegistrationButtonLft)

      finishRegistrationButtonLft.onclick = function () {
        completionDiv.textContent = "Your completion code is 52537. You may now return to the survey."
        let postBody = document.getElementById("lft-vid-post-body-loc")
        postBody.appendChild(completionDiv)
      }
      break;
    case 3:

      //Get pid parameter
      const params3 = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      });

      let value3 = params3.pid;
      value3 = String(value3)

      //Ensure query parameters persist if participant clicks on other available links
      let doorbleLogo3 = document.getElementById("doorble-logo")
      doorbleLogo3.href = './homepage.html?rd=3&pid=' + value3
      if (document.getElementById("settings") != null) {
        let settings3 = document.getElementById("settings")
        settings3.href = './settings.html?rd=3&pid=' + value3
      }
      if (document.getElementById("helpCenter") != null) {
        let helpCenter3 = document.getElementById("helpCenter")
        helpCenter3.href = './helpcenter.html?rd=3&pid=' + value3
      }
      if (document.getElementById("post") != null) {
        let post3 = document.getElementById("post")
        post3.href = './loc_lft.html?rd=3&pid=' + value3
      }
      if (document.getElementById("adsDropdown") != null) {
        let adsDropdown3 = document.getElementById("adsDropdown")
        adsDropdown3.href = './ads_lft.html?rd=3&pid=' + value3
      }
      if (document.getElementById("inPostAdsLft") != null) {
        let inPostAdsLft3 = document.getElementById("inPostAdsLft")
        inPostAdsLft3.href = './ads_lft.html?rd=3&pid=' + value3
      }
      if (document.getElementById("inPostSettings") != null) {
        let inPostSettings3 = document.getElementById("inPostSettings")
        inPostSettings3.href = './settings.html?rd=3&pid=' + value3
      }
      //Having trouble with this -- will need to fix if we want people to be able to click on "doorble.com" in the post
      // if(document.getElementById("inPostLabelAdsLft")!=null){
      //   let inPostLabelAdsLft = document.getElementById("inPostLabelAdsLft")
      //   inPostLabelAdsLft.onlick = function (){
      //     inPostLabelAdsLft.href = './ads_lft.html?rd=1&pid=' + value
      //   }
      // }
      if (document.getElementById("inPostLocSettings") != null) {
        let inPostLocSettings3 = document.getElementById("inPostLocSettings")
        inPostLocSettings3.href = './settings.html?rd=3&pid=' + value3
      }
      if (document.getElementById("inPostLocLft") != null) {
        let inPostLocLft3 = document.getElementById("inPostLocLft")
        inPostLocLft3.href = './loc_lft.html?rd=3&pid=' + value3
      }

      if (document.getElementById("settingsAdsLft") != null) {
        let settingsAdsLft = document.getElementById("settingsAdsLft")
        settingsAdsLft.href = './ads_lft.html?rd=3&pid=' + value3
      }

      if (document.getElementById("settingsLocLft") != null) {
        let settingsLocLft = document.getElementById("settingsLocLft")
        settingsLocLft.href = './loc_lft.html?rd=3&pid=' + value3
      }
      if (document.getElementById("adsLftSettings") != null) {
        let adsLftSettings = document.getElementById("adsLftSettings")
        adsLftSettings.href = './settings.html?rd=3&pid=' + value3
      }
      if (document.getElementById("locLftSettings") != null) {
        let locLftSettings = document.getElementById("locLftSettings")
        locLftSettings.href = './settings.html?rd=3&pid=' + value3
      }
      if (document.getElementById("adsSftImgAdsLft") != null) {
        let adsSftImgAdsLft = document.getElementById("adsSftImgAdsLft")
        adsSftImgAdsLft.href = './ads_lft.html?rd=3&pid=' + value3
      }
      if (document.getElementById("adsSftImgSettings") != null) {
        let adsSftImgSettings = document.getElementById("adsSftImgSettings")
        adsSftImgSettings.href = './settings.html?rd=3&pid=' + value3
      }
      if (document.getElementById("locSftImgLocLft") != null) {
        let locSftImgLocLft = document.getElementById("locSftImgLocLft")
        locSftImgLocLft.href = './loc_lft.html?rd=3&pid=' + value3
      }
      if (document.getElementById("locSftImgSettings") != null) {
        let locSftImgSettings = document.getElementById("locSftImgSettings")
        locSftImgSettings.href = './settings.html?rd=3&pid=' + value3
      }
      if (document.getElementById("adsLftVideoSettings") != null) {
        let adsLftVideoSettings = document.getElementById("adsLftVideoSettings")
        adsLftVideoSettings.href = './settings.html?rd=3&pid=' + value3
      }
      if (document.getElementById("locLftVideoSettings") != null) {
        let locLftVideoSettings = document.getElementById("locLftVideoSettings")
        locLftVideoSettings.href = './settings.html?rd=3&pid=' + value3
      }

      let openUpButton = document.getElementById("openUp");
      openUpButton.onclick = function () {
        completionDiv.textContent = "Your completion code is 52532. You may now return to the survey."
        let doorblePost = document.getElementById("doorble-post")
        doorblePost.appendChild(completionDiv)
      }

      let hideAdElement = document.getElementById("hide_ad")
      hideAdElement.onclick = function () {
        hideAd()
        let abovePost = document.getElementById("doorble-post")
        completionDiv.textContent = "Your completion code is 52539. You may now return to the survey."
        abovePost.appendChild(completionDiv)
      }
      break;
    case 4:
      //Get pid parameter
      const params4 = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      });

      let value4 = params4.pid;
      value4 = String(value4)

      //Ensure query parameters persist if participant clicks on other available links
      let doorbleLogo4 = document.getElementById("doorble-logo")
      doorbleLogo4.href = './homepage.html?rd=4&pid=' + value4
      if (document.getElementById("settings") != null) {
        let settings4 = document.getElementById("settings")
        settings4.href = './settings.html?rd=4&pid=' + value4
      }
      if (document.getElementById("helpCenter") != null) {
        let helpCenter4 = document.getElementById("helpCenter")
        helpCenter4.href = './helpcenter.html?rd=4&pid=' + value4
      }
      if (document.getElementById("post") != null) {
        let post4 = document.getElementById("post")
        post4.href = './loc_lft.html?rd=4&pid=' + value4
      }
      if (document.getElementById("adsDropdown") != null) {
        let adsDropdown4 = document.getElementById("adsDropdown")
        adsDropdown4.href = './ads_lft.html?rd=4&pid=' + value4
      }
      if (document.getElementById("inPostAdsLft") != null) {
        let inPostAdsLft4 = document.getElementById("inPostAdsLft")
        inPostAdsLft4.href = './ads_lft.html?rd=4&pid=' + value4
      }
      if (document.getElementById("inPostSettings") != null) {
        let inPostSettings4 = document.getElementById("inPostSettings")
        inPostSettings4.href = './settings.html?rd=4&pid=' + value4
      }
      //Having trouble with this -- will need to fix if we want people to be able to click on "doorble.com" in the post
      // if(document.getElementById("inPostLabelAdsLft")!=null){
      //   let inPostLabelAdsLft = document.getElementById("inPostLabelAdsLft")
      //   inPostLabelAdsLft.onlick = function (){
      //     inPostLabelAdsLft.href = './ads_lft.html?rd=1&pid=' + value
      //   }
      // }
      if (document.getElementById("inPostLocSettings") != null) {
        let inPostLocSettings4 = document.getElementById("inPostLocSettings")
        inPostLocSettings4.href = './settings.html?rd=4&pid=' + value4
      }
      if (document.getElementById("inPostLocLft") != null) {
        let inPostLocLft4 = document.getElementById("inPostLocLft")
        inPostLocLft4.href = './loc_lft.html?rd=4&pid=' + value4
      }

      if (document.getElementById("settingsAdsLft") != null) {
        let settingsAdsLft = document.getElementById("settingsAdsLft")
        settingsAdsLft.href = './ads_lft.html?rd=4&pid=' + value4
      }

      if (document.getElementById("settingsLocLft") != null) {
        let settingsLocLft = document.getElementById("settingsLocLft")
        settingsLocLft.href = './loc_lft.html?rd=4&pid=' + value4
      }
      if (document.getElementById("adsLftSettings") != null) {
        let adsLftSettings = document.getElementById("adsLftSettings")
        adsLftSettings.href = './settings.html?rd=4&pid=' + value4
      }
      if (document.getElementById("locLftSettings") != null) {
        let locLftSettings = document.getElementById("locLftSettings")
        locLftSettings.href = './settings.html?rd=4&pid=' + value4
      }
      if (document.getElementById("adsSftImgAdsLft") != null) {
        let adsSftImgAdsLft = document.getElementById("adsSftImgAdsLft")
        adsSftImgAdsLft.href = './ads_lft.html?rd=4&pid=' + value4
      }
      if (document.getElementById("adsSftImgSettings") != null) {
        let adsSftImgSettings = document.getElementById("adsSftImgSettings")
        adsSftImgSettings.href = './settings.html?rd=4&pid=' + value4
      }
      if (document.getElementById("locSftImgLocLft") != null) {
        let locSftImgLocLft = document.getElementById("locSftImgLocLft")
        locSftImgLocLft.href = './loc_lft.html?rd=4&pid=' + value4
      }
      if (document.getElementById("locSftImgSettings") != null) {
        let locSftImgSettings = document.getElementById("locSftImgSettings")
        locSftImgSettings.href = './settings.html?rd=4&pid=' + value4
      }
      if (document.getElementById("adsLftVideoSettings") != null) {
        let adsLftVideoSettings = document.getElementById("adsLftVideoSettings")
        adsLftVideoSettings.href = './settings.html?rd=4&pid=' + value4
      }
      if (document.getElementById("locLftVideoSettings") != null) {
        let locLftVideoSettings = document.getElementById("locLftVideoSettings")
        locLftVideoSettings.href = './settings.html?rd=4&pid=' + value4
      }

      //help center
      if (document.getElementById("helpCenter") != null) {
        let helpCenter4 = document.getElementById("helpCenter")
        helpCenter4.href = './helpcenter.html?rd=4&pid=' + value4
      }

      if (document.getElementById("hcAdvertisements") != null) {
        let hcAdvertisements = document.getElementById("hcAdvertisements")
        hcAdvertisements.onclick = function () {
          location.href = './ads_sft_img.html?rd=4&pid=' + value4
        }
      }
      let finishTaskButton = document.createElement("button")
      finishTaskButton.type = "submit"
      finishTaskButton.classList.add("registerbtn")
      finishTaskButton.textContent = "I'm done!"
      finishTaskButton.onclick = function () {
        if (document.getElementById("post-body-ads") != null) {
          let postBodyAdsFinish = document.getElementById("post-body-ads")
          completionDiv.textContent = "Your completion code is 52538. You may now return to the survey."
          postBodyAdsFinish.appendChild(completionDiv)
        }
        else {
          let postBodyLocFinish = document.getElementById("post-body-loc")
          completionDiv.textContent = "Your completion code is 52531. You may now return to the survey."
          postBodyLocFinish.appendChild(completionDiv)
        }
      }

      if (document.getElementById("post-body-ads") != null) {
        let postBodyAds = document.getElementById("post-body-ads")
        postBodyAds.appendChild(finishTaskButton)
      }

      if (document.getElementById("hcLocation") != null) {
        let hcLocation = document.getElementById("hcLocation")
        hcLocation.onclick = function () {
          location.href = './loc_sft_img.html?rd=4&pid=' + value4
        }
      }

      if (document.getElementById("post-body-loc") != null) {
        let postBodyLoc = document.getElementById("post-body-loc")
        postBodyLoc.appendChild(finishTaskButton)
      }

      break;
    case 5:
      //Get pid parameter
      const params5 = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      });

      let value5 = params5.pid;
      value5 = String(value5)

      //Ensure query parameters persist if participant clicks on other available links
      let doorbleLogo5 = document.getElementById("doorble-logo")
      doorbleLogo5.href = './homepage.html?rd=5&pid=' + value5
      if (document.getElementById("settings") != null) {
        let settings5 = document.getElementById("settings")
        settings5.href = './settings.html?rd=5&pid=' + value5
      }
      if (document.getElementById("helpCenter") != null) {
        let helpCenter5 = document.getElementById("helpCenter")
        helpCenter5.href = './helpcenter.html?rd=5&pid=' + value5
      }
      if (document.getElementById("post") != null) {
        let post5 = document.getElementById("post")
        post5.href = './loc_lft.html?rd=5&pid=' + value5
      }
      if (document.getElementById("adsDropdown") != null) {
        let adsDropdown5 = document.getElementById("adsDropdown")
        adsDropdown5.href = './ads_lft.html?rd=5&pid=' + value5
      }
      if (document.getElementById("inPostAdsLft") != null) {
        let inPostAdsLft5 = document.getElementById("inPostAdsLft")
        inPostAdsLft5.href = './ads_lft.html?rd=5&pid=' + value5
      }
      if (document.getElementById("inPostSettings") != null) {
        let inPostSettings5 = document.getElementById("inPostSettings")
        inPostSettings5.href = './settings.html?rd=5&pid=' + value5
      }
      //Having trouble with this -- will need to fix if we want people to be able to click on "doorble.com" in the post
      // if(document.getElementById("inPostLabelAdsLft")!=null){
      //   let inPostLabelAdsLft = document.getElementById("inPostLabelAdsLft")
      //   inPostLabelAdsLft.onlick = function (){
      //     inPostLabelAdsLft.href = './ads_lft.html?rd=1&pid=' + value
      //   }
      // }
      if (document.getElementById("inPostLocSettings") != null) {
        let inPostLocSettings5 = document.getElementById("inPostLocSettings")
        inPostLocSettings5.href = './settings.html?rd=5&pid=' + value5
      }
      if (document.getElementById("inPostLocLft") != null) {
        let inPostLocLft5 = document.getElementById("inPostLocLft")
        inPostLocLft5.href = './loc_lft.html?rd=5&pid=' + value5
      }

      if (document.getElementById("settingsAdsLft") != null) {
        let settingsAdsLft = document.getElementById("settingsAdsLft")
        settingsAdsLft.href = './ads_lft.html?rd=5&pid=' + value5
      }

      if (document.getElementById("settingsLocLft") != null) {
        let settingsLocLft = document.getElementById("settingsLocLft")
        settingsLocLft.href = './loc_lft.html?rd=5&pid=' + value5
      }
      if (document.getElementById("adsLftSettings") != null) {
        let adsLftSettings = document.getElementById("adsLftSettings")
        adsLftSettings.href = './settings.html?rd=5&pid=' + value5
      }
      if (document.getElementById("locLftSettings") != null) {
        let locLftSettings = document.getElementById("locLftSettings")
        locLftSettings.href = './settings.html?rd=5&pid=' + value5
      }
      if (document.getElementById("adsSftImgAdsLft") != null) {
        let adsSftImgAdsLft = document.getElementById("adsSftImgAdsLft")
        adsSftImgAdsLft.href = './ads_lft.html?rd=5&pid=' + value5
      }
      if (document.getElementById("adsSftImgSettings") != null) {
        let adsSftImgSettings = document.getElementById("adsSftImgSettings")
        adsSftImgSettings.href = './settings.html?rd=5&pid=' + value5
      }
      if (document.getElementById("locSftImgLocLft") != null) {
        let locSftImgLocLft = document.getElementById("locSftImgLocLft")
        locSftImgLocLft.href = './loc_lft.html?rd=5&pid=' + value5
      }
      if (document.getElementById("locSftImgSettings") != null) {
        let locSftImgSettings = document.getElementById("locSftImgSettings")
        locSftImgSettings.href = './settings.html?rd=5&pid=' + value5
      }
      if (document.getElementById("adsLftVideoSettings") != null) {
        let adsLftVideoSettings = document.getElementById("adsLftVideoSettings")
        adsLftVideoSettings.href = './settings.html?rd=5&pid=' + value5
      }
      if (document.getElementById("locLftVideoSettings") != null) {
        let locLftVideoSettings = document.getElementById("locLftVideoSettings")
        locLftVideoSettings.href = './settings.html?rd=5&pid=' + value5
      }

      //help center
      if (document.getElementById("helpCenter") != null) {
        let helpCenter = document.getElementById("helpCenter")
        helpCenter.href = './helpcenter.html?rd=5&pid=' + value5
      }

      if (document.getElementById("hcAdvertisements") != null) {
        let hcAdvertisements = document.getElementById("hcAdvertisements")
        hcAdvertisements.onclick = function () {
          location.href = './ads_lft_video.html?rd=5&pid=' + value5
        }
      }
      let finishTaskButton5 = document.createElement("button")
      finishTaskButton5.type = "submit"
      finishTaskButton5.classList.add("registerbtn")
      finishTaskButton5.textContent = "I'm done!"
      finishTaskButton5.onclick = function () {
        if (document.getElementById("lft-vid-post-body-ads") != null) {
          let postBodyAds = document.getElementById("lft-vid-post-body-ads")
          completionDiv.textContent = "Your completion code is 52537. You may now return to the survey."
          postBodyAds.appendChild(completionDiv)
        }
        if (document.getElementById("lft-vid-post-body-loc") != null) {
          let postBodyLoc = document.getElementById("lft-vid-post-body-loc")
          completionDiv.textContent = "Your completion code is 52530. You may now return to the survey."
          postBodyLoc.appendChild(completionDiv)
        }

      }
      if (document.getElementById("lft-vid-post-body-ads") != null) {
        let postBodyAds = document.getElementById("lft-vid-post-body-ads")
        postBodyAds.appendChild(finishTaskButton5)
      }

      if (document.getElementById("hcLocation") != null) {
        let hcLocation = document.getElementById("hcLocation")
        hcLocation.onclick = function () {
          location.href = './loc_lft_video.html?rd=5&pid=' + value5
        }
      }

      if (document.getElementById("lft-vid-post-body-loc") != null) {
        let postBodyLoc = document.getElementById("lft-vid-post-body-loc")
        postBodyLoc.appendChild(finishTaskButton5)
      }
      break;
    case 6:
      //Get pid parameter
      const params6 = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      });

      let value6 = params6.pid;
      value6 = String(value6)

      //Ensure query parameters persist if participant clicks on other available links
      let doorbleLogo6 = document.getElementById("doorble-logo")
      doorbleLogo6.href = './homepage.html?rd=6&pid=' + value6
      if (document.getElementById("settings") != null) {
        let settings6 = document.getElementById("settings")
        settings6.href = './settings.html?rd=6&pid=' + value6
      }
      if (document.getElementById("helpCenter") != null) {
        let helpCenter6 = document.getElementById("helpCenter")
        helpCenter6.href = './helpcenter.html?rd=6&pid=' + value6
      }
      if (document.getElementById("post") != null) {
        let post6 = document.getElementById("post")
        post6.href = './loc_lft.html?rd=6&pid=' + value6
      }
      if (document.getElementById("adsDropdown") != null) {
        let adsDropdown6 = document.getElementById("adsDropdown")
        adsDropdown6.href = './ads_lft.html?rd=6&pid=' + value6
      }
      if (document.getElementById("inPostAdsLft") != null) {
        let inPostAdsLft6 = document.getElementById("inPostAdsLft")
        inPostAdsLft6.href = './ads_lft.html?rd=6&pid=' + value6
      }
      if (document.getElementById("inPostSettings") != null) {
        let inPostSettings6 = document.getElementById("inPostSettings")
        inPostSettings6.href = './settings.html?rd=6&pid=' + value6
      }
      //Having trouble with this -- will need to fix if we want people to be able to click on "doorble.com" in the post
      // if(document.getElementById("inPostLabelAdsLft")!=null){
      //   let inPostLabelAdsLft = document.getElementById("inPostLabelAdsLft")
      //   inPostLabelAdsLft.onlick = function (){
      //     inPostLabelAdsLft.href = './ads_lft.html?rd=1&pid=' + value
      //   }
      // }
      if (document.getElementById("inPostLocSettings") != null) {
        let inPostLocSettings6 = document.getElementById("inPostLocSettings")
        inPostLocSettings6.href = './settings.html?rd=6&pid=' + value6
      }
      if (document.getElementById("inPostLocLft") != null) {
        let inPostLocLft6 = document.getElementById("inPostLocLft")
        inPostLocLft6.href = './loc_lft.html?rd=6&pid=' + value6
      }
      if (document.getElementById("settingsAdsLft") != null) {
        let settingsAdsLft = document.getElementById("settingsAdsLft")
        settingsAdsLft.href = './ads_lft.html?rd=6&pid=' + value6
      }
      if (document.getElementById("settingsLocLft") != null) {
        let settingsLocLft = document.getElementById("settingsLocLft")
        settingsLocLft.href = './loc_lft.html?rd=6&pid=' + value6
      }
      if (document.getElementById("adsLftSettings") != null) {
        let adsLftSettings = document.getElementById("adsLftSettings")
        adsLftSettings.href = './settings.html?rd=6&pid=' + value6
      }
      if (document.getElementById("locLftSettings") != null) {
        let locLftSettings = document.getElementById("locLftSettings")
        locLftSettings.href = './settings.html?rd=6&pid=' + value6
      }
      if (document.getElementById("adsSftImgAdsLft") != null) {
        let adsSftImgAdsLft = document.getElementById("adsSftImgAdsLft")
        adsSftImgAdsLft.href = './ads_lft.html?rd=6&pid=' + value6
      }
      if (document.getElementById("adsSftImgSettings") != null) {
        let adsSftImgSettings = document.getElementById("adsSftImgSettings")
        adsSftImgSettings.href = './settings.html?rd=6&pid=' + value6
      }
      if (document.getElementById("locSftImgLocLft") != null) {
        let locSftImgLocLft = document.getElementById("locSftImgLocLft")
        locSftImgLocLft.href = './loc_lft.html?rd=6&pid=' + value6
      }
      if (document.getElementById("locSftImgSettings") != null) {
        let locSftImgSettings = document.getElementById("locSftImgSettings")
        locSftImgSettings.href = './settings.html?rd=6&pid=' + value6
      }
      if (document.getElementById("adsLftVideoSettings") != null) {
        let adsLftVideoSettings = document.getElementById("adsLftVideoSettings")
        adsLftVideoSettings.href = './settings.html?rd=6&pid=' + value6
      }
      if (document.getElementById("locLftVideoSettings") != null) {
        let locLftVideoSettings = document.getElementById("locLftVideoSettings")
        locLftVideoSettings.href = './settings.html?rd=6&pid=' + value6
      }


      //settings
      if (document.getElementById("settings") != null) {
        let settings = document.getElementById("settings")
        settings.href = './settings.html?rd=6&pid=' + value6
      }

      let settingsAds = document.getElementById("adSlider")
      settingsAds.onclick = function () {
        let div = document.createElement("div")
        let button = document.createElement("button")
        button.textContent = "Finish review of this setting"
        button.id = "finishReview"
        button.onclick = function () {
          completionDiv.textContent = "Your completion code is 52537. You may now return to the survey."
          document.getElementById("ads_education").appendChild(completionDiv)
        }
        if (document.getElementById("finishReview") == null) {
          div.appendChild(button)
          document.getElementById("ads_education").appendChild(div)
        }

      }
      let settingsLoc = document.getElementById("locSlider")
      settingsLoc.onclick = function () {
        let div = document.createElement("div")
        let button = document.createElement("button")
        button.textContent = "Finish review of this setting"
        button.id = "finishReview"
        button.onclick = function () {
          completionDiv.textContent = "Your completion code is 52532. You may now return to the survey."
          document.getElementById("location_education").appendChild(completionDiv)
        }
        if (document.getElementById("finishReview") == null) {
          div.appendChild(button)
          document.getElementById("location_education").appendChild(div)
        }

      }
      break;
    case 7:

      //Get pid parameter
      const params7 = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      });

      let value7 = params7.pid;
      value7 = String(value7)

      //Ensure query parameters persist if participant clicks on other available links
      let doorbleLogo7 = document.getElementById("doorble-logo")
      doorbleLogo7.href = './homepage.html?rd=7&pid=' + value7
      if (document.getElementById("settings") != null) {
        let settings7 = document.getElementById("settings")
        settings7.href = './settings.html?rd=7&pid=' + value7
      }
      if (document.getElementById("helpCenter") != null) {
        let helpCenter7 = document.getElementById("helpCenter")
        helpCenter7.href = './helpcenter.html?rd=7&pid=' + value7
      }
      if (document.getElementById("post") != null) {
        let post7 = document.getElementById("post")
        post7.href = './loc_lft.html?rd=7&pid=' + value7
      }
      if (document.getElementById("adsDropdown") != null) {
        let adsDropdown7 = document.getElementById("adsDropdown")
        adsDropdown7.href = './ads_lft.html?rd=7&pid=' + value7
      }
      if (document.getElementById("inPostAdsLft") != null) {
        let inPostAdsLft7 = document.getElementById("inPostAdsLft")
        inPostAdsLft7.href = './ads_lft.html?rd=7&pid=' + value7
      }
      if (document.getElementById("inPostSettings") != null) {
        let inPostSettings7 = document.getElementById("inPostSettings")
        inPostSettings7.href = './settings.html?rd=7&pid=' + value7
      }

      if (document.getElementById("inPostLabelAdsLft") != null) {
        let inPostLabelAdsLft = document.getElementById("inPostLabelAdsLft")
        inPostLabelAdsLft.onlick = function () {
          location.href = './ads_lft.html?rd=7&pid=' + value7
        }
      }

      if (document.getElementById("inPostLabelSftLoc") != null) {
        let inPostLabelSftLoc = document.getElementById("inPostLabelSftLoc")
        inPostLabelSftLoc.onlick = function () {
          location.href = './loc_lft.html?rd=7&pid=' + value7
        }

      }
      if (document.getElementById("inPostLocSettings") != null) {
        let inPostLocSettings7 = document.getElementById("inPostLocSettings")
        inPostLocSettings7.href = './settings.html?rd=7&pid=' + value7
      }
      if (document.getElementById("inPostLocLft") != null) {
        let inPostLocLft7 = document.getElementById("inPostLocLft")
        inPostLocLft7.href = './loc_lft.html?rd=7&pid=' + value7
      }
      if (document.getElementById("settingsAdsLft") != null) {
        let settingsAdsLft = document.getElementById("settingsAdsLft")
        settingsAdsLft.href = './ads_lft.html?rd=7&pid=' + value7
      }

      if (document.getElementById("settingsLocLft") != null) {
        let settingsLocLft = document.getElementById("settingsLocLft")
        settingsLocLft.href = './loc_lft.html?rd=7&pid=' + value7
      }
      if (document.getElementById("adsLftSettings") != null) {
        let adsLftSettings = document.getElementById("adsLftSettings")
        adsLftSettings.href = './settings.html?rd=7&pid=' + value7
      }
      if (document.getElementById("locLftSettings") != null) {
        let locLftSettings = document.getElementById("locLftSettings")
        locLftSettings.href = './settings.html?rd=7&pid=' + value7
      }
      if (document.getElementById("adsSftImgAdsLft") != null) {
        let adsSftImgAdsLft = document.getElementById("adsSftImgAdsLft")
        adsSftImgAdsLft.href = './ads_lft.html?rd=7&pid=' + value7
      }
      if (document.getElementById("adsSftImgSettings") != null) {
        let adsSftImgSettings = document.getElementById("adsSftImgSettings")
        adsSftImgSettings.href = './settings.html?rd=7&pid=' + value7
      }
      if (document.getElementById("locSftImgLocLft") != null) {
        let locSftImgLocLft = document.getElementById("locSftImgLocLft")
        locSftImgLocLft.href = './loc_lft.html?rd=7&pid=' + value7
      }
      if (document.getElementById("locSftImgSettings") != null) {
        let locSftImgSettings = document.getElementById("locSftImgSettings")
        locSftImgSettings.href = './settings.html?rd=7&pid=' + value7
      }
      if (document.getElementById("adsLftVideoSettings") != null) {
        let adsLftVideoSettings = document.getElementById("adsLftVideoSettings")
        adsLftVideoSettings.href = './settings.html?rd=7&pid=' + value7
      }
      if (document.getElementById("locLftVideoSettings") != null) {
        let locLftVideoSettings = document.getElementById("locLftVideoSettings")
        locLftVideoSettings.href = './settings.html?rd=7&pid=' + value7
      }

      //in feed -sft
      let natureDislike = document.getElementById("natureDislike")
      natureDislike.onclick = function () {
        completionDiv.textContent = "Your completion code is 52533. You may now return to the survey."
        document.getElementById("naturePostActions").appendChild(completionDiv)
      }
      break;
    case 8:

      //Get pid parameter
      const params8 = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      });

      let value8 = params8.pid;
      value8 = String(value8)

      //Ensure query parameters persist if participant clicks on other available links
      let doorbleLogo8 = document.getElementById("doorble-logo")
      doorbleLogo8.href = './homepage.html?rd=8&pid=' + value8
      if (document.getElementById("settings") != null) {
        let settings8 = document.getElementById("settings")
        settings8.href = './settings.html?rd=8&pid=' + value8
      }
      if (document.getElementById("helpCenter") != null) {
        let helpCenter8 = document.getElementById("helpCenter")
        helpCenter8.href = './helpcenter.html?rd=8&pid=' + value8
      }
      if (document.getElementById("post") != null) {
        let post8 = document.getElementById("post")
        post8.href = './loc_lft.html?rd=8&pid=' + value8
      }
      if (document.getElementById("adsDropdown") != null) {
        let adsDropdown8 = document.getElementById("adsDropdown")
        adsDropdown8.href = './ads_lft.html?rd=8&pid=' + value8
      }
      if (document.getElementById("inPostLabelAdsImage") != null) {
        let inPostLabelAdsImage = document.getElementById("inPostLabelAdsImage")
        inPostLabelAdsImage.onclick = function () {
          location.href = './ads_lft.html?rd=8&pid=' + value8
        }
      }
      if (document.getElementById("inPostLabelLocImage") != null) {
        let inPostLabelLocImage = document.getElementById("inPostLabelLocImage")
        inPostLabelLocImage.onclick = function () {
          location.href = './loc_lft.html?rd=8&pid=' + value8
        }
      }
      if (document.getElementById("settingsAdsLft") != null) {
        let settingsAdsLft = document.getElementById("settingsAdsLft")
        settingsAdsLft.href = './ads_lft.html?rd=8&pid=' + value8
      }
      if (document.getElementById("settingsLocLft") != null) {
        let settingsLocLft = document.getElementById("settingsLocLft")
        settingsLocLft.href = './loc_lft.html?rd=8&pid=' + value8
      }
      if (document.getElementById("adsLftSettings") != null) {
        let adsLftSettings = document.getElementById("adsLftSettings")
        adsLftSettings.href = './settings.html?rd=8&pid=' + value8
      }
      if (document.getElementById("locLftSettings") != null) {
        let locLftSettings = document.getElementById("locLftSettings")
        locLftSettings.href = './settings.html?rd=8&pid=' + value8
      }
      if (document.getElementById("adsSftImgAdsLft") != null) {
        let adsSftImgAdsLft = document.getElementById("adsSftImgAdsLft")
        adsSftImgAdsLft.href = './ads_lft.html?rd=8&pid=' + value8
      }
      if (document.getElementById("adsSftImgSettings") != null) {
        let adsSftImgSettings = document.getElementById("adsSftImgSettings")
        adsSftImgSettings.href = './settings.html?rd=8&pid=' + value8
      }
      if (document.getElementById("locSftImgLocLft") != null) {
        let locSftImgLocLft = document.getElementById("locSftImgLocLft")
        locSftImgLocLft.href = './loc_lft.html?rd=8&pid=' + value8
      }
      if (document.getElementById("locSftImgSettings") != null) {
        let locSftImgSettings = document.getElementById("locSftImgSettings")
        locSftImgSettings.href = './settings.html?rd=8&pid=' + value8
      }
      if (document.getElementById("adsLftVideoSettings") != null) {
        let adsLftVideoSettings = document.getElementById("adsLftVideoSettings")
        adsLftVideoSettings.href = './settings.html?rd=8&pid=' + value8
      }
      if (document.getElementById("locLftVideoSettings") != null) {
        let locLftVideoSettings = document.getElementById("locLftVideoSettings")
        locLftVideoSettings.href = './settings.html?rd=8&pid=' + value8
      }


      //in feed -sft-image
      let inFeedAdsSft = document.getElementById("in-feed-ads-sft")
      inFeedAdsSft.style.display = "none"
      let inFeedLocSft = document.getElementById("in-feed-location-sft")
      inFeedLocSft.style.display = "none"

      let inFeedAdsSftImage = document.getElementById("in-feed-ads-sft-image")
      inFeedAdsSftImage.style.display = "block"
      let inFeedLocSftImage = document.getElementById("in-feed-location-sft-image")
      inFeedLocSftImage.style.display = "block"

      let natureDislike2 = document.getElementById("natureDislike")
      natureDislike2.onclick = function () {
        completionDiv.textContent = "Your completion code is 52537. You may now return to the survey."
        document.getElementById("naturePostActions").appendChild(completionDiv)
      }
      break;
    case 9:
      //Get pid parameter
      const params9 = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      });

      let value9 = params9.pid;
      value9 = String(value9)

      //Ensure query parameters persist if participant clicks on other available links
      let doorbleLogo9 = document.getElementById("doorble-logo")
      doorbleLogo9.href = './homepage.html?rd=9&pid=' + value9
      if (document.getElementById("settings") != null) {
        let settings9 = document.getElementById("settings")
        settings9.href = './settings.html?rd=9&pid=' + value9
      }
      if (document.getElementById("helpCenter") != null) {
        let helpCenter9 = document.getElementById("helpCenter")
        helpCenter9.href = './helpcenter.html?rd=9&pid=' + value9
      }
      if (document.getElementById("post") != null) {
        let post9 = document.getElementById("post")
        post9.href = './loc_lft.html?rd=9&pid=' + value9
      }
      if (document.getElementById("adsDropdown") != null) {
        let adsDropdown9 = document.getElementById("adsDropdown")
        adsDropdown9.href = './ads_lft.html?rd=9&pid=' + value9
      }
      if (document.getElementById("inPostAdsVid") != null) {
        let inPostAdsVid = document.getElementById("inPostAdsVid")
        inPostAdsVid.onclick = function () {
          location.href = './ads_lft.html?rd=9&pid=' + value9
        }
      }
      if (document.getElementById("inPostSettingsVid") != null) {
        let inPostSettings9 = document.getElementById("inPostSettingsVid")
        inPostSettings9.href = './settings.html?rd=9&pid=' + value9
      }
      if (document.getElementById("inPostLocSettingsVid") != null) {
        let inPostLocSettingsVid = document.getElementById("inPostLocSettingsVid")
        inPostLocSettingsVid.href = './settings.html?rd=9&pid=' + value9
      }
      if (document.getElementById("inPostLocVidLabel") != null) {
        let inPostLocVidLabel = document.getElementById("inPostLocVidLabel")
        inPostLocVidLabel.onclick = function () {
          location.href = './loc_lft.html?rd=9&pid=' + value9
        }
      }
      if (document.getElementById("settingsAdsLft") != null) {
        let settingsAdsLft = document.getElementById("settingsAdsLft")
        settingsAdsLft.href = './ads_lft.html?rd=9&pid=' + value9
      }

      if (document.getElementById("settingsLocLft") != null) {
        let settingsLocLft = document.getElementById("settingsLocLft")
        settingsLocLft.href = './loc_lft.html?rd=9&pid=' + value9
      }
      if (document.getElementById("adsLftSettings") != null) {
        let adsLftSettings = document.getElementById("adsLftSettings")
        adsLftSettings.href = './settings.html?rd=9&pid=' + value9
      }
      if (document.getElementById("locLftSettings") != null) {
        let locLftSettings = document.getElementById("locLftSettings")
        locLftSettings.href = './settings.html?rd=9&pid=' + value9
      }
      if (document.getElementById("adsSftImgAdsLft") != null) {
        let adsSftImgAdsLft = document.getElementById("adsSftImgAdsLft")
        adsSftImgAdsLft.href = './ads_lft.html?rd=9&pid=' + value9
      }
      if (document.getElementById("adsSftImgSettings") != null) {
        let adsSftImgSettings = document.getElementById("adsSftImgSettings")
        adsSftImgSettings.href = './settings.html?rd=9&pid=' + value9
      }
      if (document.getElementById("locSftImgLocLft") != null) {
        let locSftImgLocLft = document.getElementById("locSftImgLocLft")
        locSftImgLocLft.href = './loc_lft.html?rd=9&pid=' + value9
      }
      if (document.getElementById("locSftImgSettings") != null) {
        let locSftImgSettings = document.getElementById("locSftImgSettings")
        locSftImgSettings.href = './settings.html?rd=9&pid=' + value9
      }
      if (document.getElementById("adsLftVideoSettings") != null) {
        let adsLftVideoSettings = document.getElementById("adsLftVideoSettings")
        adsLftVideoSettings.href = './settings.html?rd=9&pid=' + value9
      }
      if (document.getElementById("locLftVideoSettings") != null) {
        let locLftVideoSettings = document.getElementById("locLftVideoSettings")
        locLftVideoSettings.href = './settings.html?rd=9&pid=' + value9
      }

      //in feed -video
      let inFeedAdsSft2 = document.getElementById("in-feed-ads-sft")
      inFeedAdsSft2.style.display = "none"
      let inFeedLocSft2 = document.getElementById("in-feed-location-sft")
      inFeedLocSft2.style.display = "none"

      let inFeedAdsVideo = document.getElementById("in-feed-ads-video")
      inFeedAdsVideo.style.display = "block"
      let inFeedLocVideo = document.getElementById("in-feed-location-video")
      inFeedLocVideo.style.display = "block"

      let natureDislike3 = document.getElementById("natureDislike")
      natureDislike3.onclick = function () {
        completionDiv.textContent = "Your completion code is 52539. You may now return to the survey."
        document.getElementById("naturePostActions").appendChild(completionDiv)
      }

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
  value = Number(value)
  randomization(value)
}
