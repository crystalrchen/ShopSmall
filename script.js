function openNav() {
  document.getElementById("mySidebar").style.width = "230px";

}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.getElementById("main").style.display = "inline-block";
  
}
var input = document.getElementById("searchInput");
  input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("search-button").click();
    }
  });

function searchDatabase() {
  filter = input.value.toLowerCase();
  var shops = ["79hour", "Amarilo", "Ashley Zhang Jewelry", "Aurate", "Aureum", "Bagatiba", "Bario Neal", "Blue Billie", "By Alona", "Catch Rhys", "Daphine", "JENNY BIRD", "Lizzie Mandler", "Louis Abel", "Lulu Frost", "Mayol", "Phine Jewelry", "Precious by Kate", "Soko", "The Last Line", "Tohum Design", "Apiece Apart", "BAACAL", "bassike", "BEVZA", "Bird Brooklyn", "Bon Vivant", "Ciao Lucia", "Collina Strada", "COTTON CITIZEN", "COURTYARD LA", "Cult Gaia", "DONNI", "Henri", "ILK + ERNIE", "LACAUSA", "Leon Nord", "Native Youth", "No. 14", "Nude Ethics", "Pangaia", "REFINE", "Retold Vintage", "RHODE", "Rika Studios", "Shaina Mote", "Shop Israella", "Shop Treen", "TROIS", "abbyrose", "ShopSunriseCases", "Pela Case", "Blingo", "GagbyDesign", "PetPixPrint", "Anti Kn Sylph", "TheUrbanFlair", "UrbanDayor", "Fantus Cases", "Acorn Toy Shop", "Cate and Levi", "Child Universe", "Manzanita Kids", "My Sweet Muffin", "MyKrissieDolls", "OhJustDandy", "Pink Olive Boutique", "Stubby Pencil Studio", "thousand skies", "Unepelotedelaine", "Bloomscape", "Favor", "Bole Road Textiles", "Morrow Soft Goods", "CULTIVER", "Far & Away", "SUNDAY SHOP", "LEIF", "Cold Picnic", "Rough Linen", "Revival Rugs", "Areaware", "Sumner", "Quiet Town", "Weezie", "Porch Light", "Jayson Home", "Society Social", "Swoon Home", "We Gather", "East Fork"];

  // id can't start with numbers or have spaces 
  var shops2 = ["a79hour", "Amarilo", "Ashley-Zhang-Jewelry", "Aurate", "Aureum", "Bagatiba", "Bario-Neal",  "Blue-Billie", "By-Alona", "Catch-Rhys", "Daphine", "JENNY-BIRD", "Lizzie-Mandler",  "Louis-Abel", "Lulu-Frost", "Mayol", "Phine-Jewelry", "Precious-by-Kate", "Soko", "The-Last-Line", "Tohum-Design", "Apiece-Apart", "BAACAL", "bassike", "BEVZA", "Bird-Brooklyn", "Bon-Vivant", "Ciao-Lucia", "Collina-Strada", "COTTON-CITIZEN", "COURTYARD-LA", "Cult-Gaia", "DONNI", "Henri", "ILKERNIE", "LACAUSA", "Leon-Nord", "Native-Youth", "No14", "Nude-Ethics", "Pangaia", "REFINE", "Retold-Vintage", "RHODE","Rika-Studios", "Shaina-Mote", "Shop-Israella", "Shop-Treen", "TROIS", "abbyrose", "ShopSunriseCases", "Pela-Case", "Blingo", "GagbyDesign", "PetPixPrint", "Anti-Kn-Sylph", "TheUrbanFlair", "UrbanDayor", "Fantus-Cases", "Acorn-Toy-Shop", "Cate-and-Levi", "Child-Universe", "Manzanita-Kids", "My-Sweet-Muffin", "MyKrissieDolls", "OhJustDandy", "Pink-Olive-Boutique", "Stubby-Pencil-Studio", "thousand-skies", "Unepelotedelaine", "Bloomscape", "Favor", "Bole-Road-Textiles", "Morrow-Soft-Goods", "CULTIVER", "Far-Away", "SUNDAY-SHOP", "LEIF", "Cold-Picnic", "Rough-Linen", "Revival-Rugs", "Areaware", "Sumner", "Quiet-Town", "Weezie", "Porch-Light", "Jayson-Home", "Society-Social", "Swoon-Home", "We-Gather", "East-Fork"];
  for (i = 0; i < shops.length; i++) {
    var current = shops[i];
    var current2 = shops2[i];
    if(current.toLowerCase().indexOf(filter) > -1) {
      document.getElementById(current2).style.display = "inline-block";
    }
    else {
      document.getElementById(current2).style.display = "none";
    }
  }
}


function searchClothingDatabase() {
  filter = input.value.toLowerCase();
  var shops = ["Apiece Apart", "BAACAL", "bassike", "BEVZA", "Bird Brooklyn", "Bon Vivant", "Ciao Lucia", "Collina Strada", "COTTON CITIZEN", "COURTYARD LA", "Cult Gaia", "DONNI", "Henri", "ILK + ERNIE", "LACAUSA", "Leon Nord", "Native Youth", "No. 14", "Nude Ethics", "Pangaia", "REFINE", "Retold Vintage", "RHODE", "Rika Studios", "Shaina Mote", "Shop Israella", "Shop Treen", "TROIS"];

  var shops2 = ["Apiece-Apart", "BAACAL", "bassike", "BEVZA", "Bird-Brooklyn", "Bon-Vivant", "Ciao-Lucia", "Collina-Strada", "COTTON-CITIZEN", "COURTYARD-LA", "Cult-Gaia", "DONNI", "Henri", "ILKERNIE", "LACAUSA", "Leon-Nord", "Native-Youth", "No14", "Nude-Ethics", "Pangaia", "REFINE", "Retold-Vintage", "RHODE", "Rika-Studios", "Shaina-Mote", "Shop-Israella", "Shop-Treen", "TROIS"];
  for (i = 0; i < shops.length; i++) {
    var current = shops[i];
    var current2 = shops2[i];
    if(current.toLowerCase().indexOf(filter) > -1) {
      document.getElementById(current2).style.display = "inline-block";
    }
    else {
      document.getElementById(current2).style.display = "none";
    }
  }
}
function searchElectronicsDatabase() {
  filter = input.value.toLowerCase();
  var shops = ["abbyrose", "ShopSunriseCases", "Pela Case", "Blingo", "GagbyDesign", "PetPixPrint", "Anti Kn Sylph", "TheUrbanFlair", "UrbanDayor", "Fantus Cases"];

  var shops2 = ["abbyrose", "ShopSunriseCases", "Pela-Case", "Blingo", "GagbyDesign", "PetPixPrint", "Anti-Kn-Sylph", "TheUrbanFlair", "UrbanDayor", "Fantus-Cases"];
  for (i = 0; i < shops.length; i++) {
    var current = shops[i];
    var current2 = shops2[i];
    if(current.toLowerCase().indexOf(filter) > -1) {
      document.getElementById(current2).style.display = "inline-block";
    }
    else {
      document.getElementById(current2).style.display = "none";
    }
  }
}

function searchHomeDecorDatabase() {
  filter = input.value.toLowerCase();
  var shops = ["Bloomscape", "Favor", "Bole Road Textiles", "Morrow Soft Goods", "CULTIVER", "Far & Away", "SUNDAY SHOP", "LEIF", "Cold Picnic", "Rough Linen", "Revival Rugs", "Areaware", "Sumner", "Quiet Town", "Weezie", "Porch Light", "Jayson Home", "Society Social", "Swoon Home", "We Gather", "East Fork"];

  var shops2 = ["Bloomscape", "Favor", "Bole-Road-Textiles", "Morrow-Soft-Goods", "CULTIVER", "Far-Away", "SUNDAY-SHOP", "LEIF", "Cold-Picnic", "Rough-Linen", "Revival-Rugs", "Areaware", "Sumner", "Quiet-Town", "Weezie", "Porch-Light", "Jayson-Home", "Society-Social", "Swoon-Home", "We-Gather", "East-Fork"];
  for (i = 0; i < shops.length; i++) {
    var current = shops[i];
    var current2 = shops2[i];
    if(current.toLowerCase().indexOf(filter) > -1) {
      document.getElementById(current2).style.display = "inline-block";
    }
    else {
      document.getElementById(current2).style.display = "none";
    }
  }
}
function searchJewelryDatabase() {
  filter = input.value.toLowerCase();
  var shops = ["79hour", "Amarilo", "Ashley Zhang Jewelry", "Aurate", "Aureum", "Bagatiba", "Bario Neal", "Blue Billie", "By Alona", "Catch Rhys", "Daphine", "JENNY BIRD", "Lizzie Mandler", "Louis Abel", "Lulu Frost", "Mayol", "Phine Jewelry", "Precious by Kate", "Soko", "The Last Line", "Tohum Design"];

  // id can't start with numbers or have spaces 
  var shops2 = ["a79hour", "Amarilo", "Ashley-Zhang-Jewelry", "Aurate", "Aureum", "Bagatiba", "Bario-Neal",  "Blue-Billie", "By-Alona", "Catch-Rhys", "Daphine", "JENNY-BIRD","Lizzie-Mandler",  "Louis-Abel", "Lulu-Frost", "Mayol", "Phine-Jewelry", "Precious-by-Kate", "Soko", "The-Last-Line", "Tohum-Design"];
  for (i = 0; i < shops.length; i++) {
    var current = shops[i];
    var current2 = shops2[i];
    if(current.toLowerCase().indexOf(filter) > -1) {
      document.getElementById(current2).style.display = "inline-block";
    }
    else {
      document.getElementById(current2).style.display = "none";
    }
  }
}

function searchToysDatabase() {
  filter = input.value.toLowerCase();
  var shops = ["Acorn Toy Shop", "Cate and Levi", "Child Universe", "Manzanita Kids", "My Sweet Muffin", "MyKrissieDolls", "OhJustDandy", "Pink Olive Boutique", "Stubby Pencil Studio", "thousand skies", "Unepelotedelaine"];

  var shops2 = ["Acorn-Toy-Shop", "Cate-and-Levi", "Child-Universe", "Manzanita-Kids", "My-Sweet-Muffin", "MyKrissieDolls", "OhJustDandy", "Pink-Olive-Boutique", "Stubby-Pencil-Studio", "thousand-skies", "Unepelotedelaine"];
  for (i = 0; i < shops.length; i++) {
    var current = shops[i];
    var current2 = shops2[i];
    if(current.toLowerCase().indexOf(filter) > -1) {
      document.getElementById(current2).style.display = "inline-block";
    }
    else {
      document.getElementById(current2).style.display = "none";
    }
  }
}
function printContactResult() {
  document.getElementById("after-submit").innerHTML = "Thank you for your comment/question! I will try my best to get back to you ASAP!"
}
function printApplyResult() {
  document.getElementById("after-submit").innerHTML = "Thank you! Your information has been received. You should receive an email with further details within the next 2 days!";
}

function printReferResult() {
  document.getElementById("after-submit").innerHTML = "Thank you! Your information has been received. You will be contacted if the shop you referred is added to our database!";
}

function printFeedbackResult() {
  document.getElementById("after-submit").innerHTML = "Thank you for the feedback! We will take your feedback into consideration and continue to make improvements to our site!";
}