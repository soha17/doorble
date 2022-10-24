function ddl_nav() {
    {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
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
  window.onclick = function(event) {
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
  window.onclick = function(event) {
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
    var selectedobj=document.getElementById('location_education');

    if(selectedobj.className=='hide'){  //check if classname is hide 
      selectedobj.style.display = "block";
      selectedobj.readOnly=true;
      selectedobj.className ='show';
    }else{
      selectedobj.style.display = "none";
      selectedobj.className ='hide';
   }
}

function privacy_education_ads() {

   var selectedobj=document.getElementById('ads_education');

    if(selectedobj.className=='hide'){  //check if classname is hide 
      selectedobj.style.display = "block";
      selectedobj.readOnly=true;
      selectedobj.className ='show';
    }else{
      selectedobj.style.display = "none";
      selectedobj.className ='hide';
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