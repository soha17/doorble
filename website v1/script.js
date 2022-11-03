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
  switch (condition) {
    case 1:
      if (document.getElementById("registerbtn") != null) {
        let continueInRegistrationButton = document.getElementById("registerbtn")
        continueInRegistrationButton.onclick = function () {
          location.href = './ads_sft_img.html?rd=1'
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
        location.href = './loc_sft_img.html?rd=1'
      }

      let finishRegistrationButton = document.createElement("button")
      finishRegistrationButton.type = "submit"
      finishRegistrationButton.classList.add("registerbtn")
      finishRegistrationButton.textContent = "Finish Registration"

      let postBodyLoc = document.getElementById("post-body-loc")
      postBodyLoc.appendChild(finishRegistrationButton)

      finishRegistrationButton.onclick = function () {
        completionDiv.textContent = "Your completion code is 97754. You may now return to the survey."
        let postBody = document.getElementById("post-body-loc")
        postBody.appendChild(completionDiv)
      }
      break;
    case 2:
      if (document.getElementById("registerbtn") != null) {
        let registerButton = document.getElementById("registerbtn")
        registerButton.onclick = function () {
          location.href = './ads_lft_video.html?rd=2'
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
        location.href = './loc_lft_video.html?rd=2'
      }

      let finishRegistrationButtonLft = document.createElement("button")
      finishRegistrationButtonLft.type = "submit"
      finishRegistrationButtonLft.classList.add("registerbtn")
      finishRegistrationButtonLft.textContent = "Finish Registration"


      let postBodyLocLft = document.getElementById("lft-vid-post-body-loc")
      postBodyLocLft.appendChild(finishRegistrationButtonLft)

      finishRegistrationButtonLft.onclick = function () {
        completionDiv.textContent = "Your completion code is 28314. You may now return to the survey."
        let postBody = document.getElementById("lft-vid-post-body-loc")
        postBody.appendChild(completionDiv)
      }
      break;
    case 3:
      //set location.href of "open up" on homepage to completion.html
      let openUpButton = document.getElementById("openUp");
      openUpButton.onclick = function () {
        completionDiv.textContent = "Your completion code is 78782. You may now return to the survey."
        let doorblePost = document.getElementById("doorble-post")
        doorblePost.appendChild(completionDiv)
      }

      let hideAdElement = document.getElementById("hide_ad")
      hideAdElement.onclick = function () {
        hideAd()
        let abovePost = document.getElementById("doorble-post")
        completionDiv.textContent = "Your completion code is 78782. You may now return to the survey."
        abovePost.appendChild(completionDiv)
      }
      break;
    case 4:
      //help center
      if (document.getElementById("helpCenter") != null) {
        let helpCenter = document.getElementById("helpCenter")
        helpCenter.href = './helpcenter.html?rd=4'//TODO ensure participant id still captured
      }

      if (document.getElementById("hcAdvertisements") != null) {
        let hcAdvertisements = document.getElementById("hcAdvertisements")
        hcAdvertisements.onclick = function () {
          location.href = './ads_sft_img.html?rd=4'
        }
      }
      let finishTaskButton = document.createElement("button")
      finishTaskButton.type = "submit"
      finishTaskButton.classList.add("registerbtn")
      finishTaskButton.textContent = "I'm done!"
      finishTaskButton.onclick = function () {
        if (document.getElementById("post-body-ads") != null) {
          let postBodyAdsFinish = document.getElementById("post-body-ads")
          completionDiv.textContent = "Your completion code is 13408. You may now return to the survey."
          postBodyAdsFinish.appendChild(completionDiv)
        }
        else {
          let postBodyLocFinish = document.getElementById("post-body-loc")
          completionDiv.textContent = "Your completion code is 13408. You may now return to the survey."
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
          location.href = './loc_sft_img.html?rd=4'
        }
      }

      if (document.getElementById("post-body-loc") != null) {
        let postBodyLoc = document.getElementById("post-body-loc")
        postBodyLoc.appendChild(finishTaskButton)
      }

      break;
    case 5:
      //help center
      if (document.getElementById("helpCenter") != null) {
        let helpCenter = document.getElementById("helpCenter")
        helpCenter.href = './helpcenter.html?rd=5'//TODO ensure participant id still captured
      }

      if (document.getElementById("hcAdvertisements") != null) {
        let hcAdvertisements = document.getElementById("hcAdvertisements")
        hcAdvertisements.onclick = function () {
          location.href = './ads_lft_video.html?rd=5'
        }
      }
      let finishTaskButton5 = document.createElement("button")
      finishTaskButton5.type = "submit"
      finishTaskButton5.classList.add("registerbtn")
      finishTaskButton5.textContent = "I'm done!"
      finishTaskButton5.onclick = function () {
        if (document.getElementById("lft-vid-post-body-ads") != null) {
          let postBodyAds = document.getElementById("lft-vid-post-body-ads")
          completionDiv.textContent = "Your completion code is 37007. You may now return to the survey."
          postBodyAds.appendChild(completionDiv)
        }
        if (document.getElementById("lft-vid-post-body-loc") != null) {
          let postBodyLoc = document.getElementById("lft-vid-post-body-loc")
          completionDiv.textContent = "Your completion code is 37007. You may now return to the survey."
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
          location.href = './loc_lft_video.html?rd=5'
        }
      }

      if (document.getElementById("lft-vid-post-body-loc") != null) {
        let postBodyLoc = document.getElementById("lft-vid-post-body-loc")
        postBodyLoc.appendChild(finishTaskButton5)
      }
      break;
    case 6:
      //settings
      if (document.getElementById("settings") != null) {
        let settings = document.getElementById("settings")
        settings.href = './settings.html?rd=6'
      }

      let settingsAds = document.getElementById("adSlider")
      settingsAds.onclick = function () {
        let div = document.createElement("div")
        let button = document.createElement("button")
        button.textContent = "Finish review of this setting"
        button.onclick = function () {
          completionDiv.textContent = "Your completion code is 16717. You may now return to the survey."
          document.getElementById("ads_education").appendChild(completionDiv)
        }
        div.appendChild(button)
        document.getElementById("ads_education").appendChild(div)
      }
      let settingsLoc = document.getElementById("locSlider")
      settingsLoc.onclick = function () {
        let div = document.createElement("div")
        let button = document.createElement("button")
        button.textContent = "Finish review of this setting"
        button.onclick = function () {
          completionDiv.textContent = "Your completion code is 16717. You may now return to the survey."
          document.getElementById("location_education").appendChild(completionDiv)
        }
        div.appendChild(button)
        document.getElementById("location_education").appendChild(div)
      }
      break;
    case 7:
      //in feed -sft
      let natureDislike = document.getElementById("natureDislike")
      natureDislike.onclick = function () {
        completionDiv.textContent = "Your completion code is 91643. You may now return to the survey."
        document.getElementById("naturePostActions").appendChild(completionDiv)
      }
      break;
    case 8:
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
        completionDiv.textContent = "Your completion code is 69927. You may now return to the survey."
        document.getElementById("naturePostActions").appendChild(completionDiv)
      }
      break;
    case 9:
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
        completionDiv.textContent = "Your completion code is 68587. You may now return to the survey."
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
