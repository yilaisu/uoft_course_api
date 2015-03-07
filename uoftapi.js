const
    request          = require('request')
  , cheerio          = require('cheerio')
  , engRootURL       = 'http://www.apsc.utoronto.ca/Calendars/Current'
  , engListingURL    = '/Course_Descriptions.html';

  request(rootURL + winterCoursesURL + listingsURL, function(error, response, body) {
    if(!error && response.statusCode === 200) {
      /* Retrieve the course department */
	 
	  console.log(body);
	  
	  var service = new chrome.ServiceBuilder(path).build();
	  chrome.setDefaultService(service);

	  var driver = new webdriver.Builder()
     .withCapabilities(webdriver.Capabilities.chrome())
      .build();
	  
	  //
	  var $= cheerio.load(body);
	  $('tr td div a').each(function(){
	  
		  var name=$(this).text().toString();
		  console.log("print some cool shit!");
		  console.log(name);
			
			/*
		  var document = jsdom.jsdom("body");
		  console.log('made it here');
			document.getElementById("u273_line0").value='500';
			if (document.getElementById("u273_line0").fireEvent) {
				document.getElementById("u273_line0").fireEvent("onclick");
				console.log('clicked')
			} else if (document.getElementById("u273_line0").dispatchEvent) {
				var clickevent=document.createEvent("MouseEvents");
				clickevent.initEvent("click", true, true);
				document.getElementById("u273_line0").dispatchEvent(clickevent);
			}*/
		  
		jq('#finder_crumb').attr('style', 'display:block;'); 
		jq('#deptBrowseSection').attr('style', 'display:none;');
		back(); 
		sInput = ''; 
		searchForCourseByDept('courseSearchResults', 'courseSearchResultPanel','ASDN ', 'ASDN: Arts and Science, Office of the Dean ','ARTSC', 'Faculty of Arts and Science') 
		  
		  /*driver.get('http://coursefinder.utoronto.ca/course-search/search');
		  driver.findElement(By.id('u273_line0')).click();// function(){
			  
			  
			request(this, function(error, response, body) { 
			var $= cheerio.load(body);
			
			console.log('inside click');  
			$('tr td div a').each(function(){
				var name=$(this).text().toString();
				console.log("print some cool shit from the next page !");
				console.log(name);
			});
		  });*/
	  
	  
	  
	  });
      
	  
	  
    };
  });