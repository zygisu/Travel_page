File structure is like this, becouse it was inherited from Hands on project. Redoing this web page, structure would be changed to this: EXAMPLE
CSS files should be splited into types, like fonts, headers and so, not by page. 

Changes from hands on offered screenshots were made to keep project part funcionalities and 

Differences in gallery, Amalfi is clickable and redirects to amalfi page. Other is not, so html diffres and there are additional css rules to make all lokk the same




<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Travel agency: Amalfi</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
      crossorigin="anonymous"
    >
    <link
      href="https://fonts.googleapis.com/css?family=Dancing+Script&family=Montserrat:400,700&&display=swap"
      rel="stylesheet"
    >
    <link href="../css/header.css" rel="stylesheet" type="text/css">
    <link href="../css/destinations.css" rel="stylesheet" type="text/css">
    <link href="../css/footer.css" rel="stylesheet" type="text/css">
</head>
<body>
    <header class="header-amalfi">
        <nav class="navbar">
            <div class="navbar-left" style="position:relative;z-index:1100;">
                <img src="../css/icons/search-white.svg" alt="Search" class="search-icon">
                <form class="search-box" autocomplete="off">
                    <input type="text" id="search-input" placeholder="Search our destinations..." autocomplete="off" style="color:white;">
                    <ul id="suggestions" class="suggestions-list"></ul>
                </form>
            </div>
            <div class="navbar-center">
                <img src="../css/icons/globe-white.svg" alt="Logo" class="globe-icon">
            </div>
            <div class="navbar-right">
                <a href="contact_us.html" class="btn btn-light text-nowrap">Contact Us</a>
                <img src="../css/icons/three-bars-white.svg" alt="Menu" class="menu-icon">
            </div>
        </nav>
        <div class="header-bottom">
            <div class="header_text">
                <div>Perfect mix of culture and nature</div>
                <h1>
                    Amalfi coast
                </h1>
                <div class="amalfi-text">
                    Book you holiday here:
                </div>
      <div class="booking-form">
        <div class="form-row">
          <div class="form-group">
            <label for="destination">Destination</label>
              <select name="Destination" id="destination">
                 <option value="" disabled selected>Select a destination</option>
                 <option value="paris">Paris</option>
                 <option value="berlin">Berlin</option>
                 <option value="rome">Rome</option>
              </select>
                </div>
                  <div class="form-group-row">
                    <div class="form-group">
                      <label for="fromdate">From</label>
                      <input type="date" name="fromdate" id="fromdate">
                    </div>
                    <div class="form-group">
                      <label for="todate">To</label>
                      <input type="date" name="todate" id="todate">
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="guests">Guests</label>
                    <input type="number" name="guests" id="guests" min="1" max="10" placeholder="2">
                  </div>
                  <div class="form-group">
                    <label style="opacity:0;">Submit</label>
                    <button type="submit" class="submit-btn">
                      <img src="./css/icons/arrow-right.svg" alt="Logo" class="arrow-icon">
                    </button>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </header>