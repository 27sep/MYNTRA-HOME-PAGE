
  // <------- SLIDER IMAGES -------> //
  var slideImages = [
    //FOR TABLET & DEKSTOP VIEW
    [{img_url : "/Common Files/image/1.webp"},
    {img_url : "Common Files/image/2.webp"},
    {img_url : "/Common Files/image/3.webp"},
    {img_url : "Common Files/image/4.webp"},
    ],

    //FOR MOBILE VIEW
    [{img_url : "Common Files/image/5.jpeg"},
    {img_url: "Common Files/image/6.jpeg"},
    {img_url: "Common Files/image/7.avif"},
    {img_url: "Common Files/image/8.jpeg"},
    ]
  ]

  var z = null; 

    //script for media queries
    var value = window.matchMedia("(max-width: 550px)") //FOR TABLET VIEW
      mFunction(value) 
      value.addListener(mFunction) 
      function mFunction(value) {
        if (value.matches) { 
          z = slideImages[1];
        } 
        else {
          z = slideImages[0]
        }
    }

  z.map(function(ele, index){
    var slideDiv = document.createElement('div');
    switch(index){
      case 0 :
        slideDiv.setAttribute('class', 'slide first');
        break;
      default :
      slideDiv.setAttribute('class', 'slide')
    }
   
    var images = document.createElement('img');
    images.src = ele.img_url;
    
    slideDiv.append(images); 
    document.getElementById('slides').append(slideDiv)
  })




    // <!-- CATEGORIES DISPALY 1 -->
    var categoryBag = [
      {image_url :'Common Files/image/Shirts.webp'},
      {image_url :'Common Files/image/T-shirt.webp'},
      {image_url :'Common Files/image/Jeans.webp'},
      {image_url :'Common Files/image/Trousers.webp'},
      {image_url :'Common Files/image/shoes.webp'},
      {image_url :'Common Files/image/Essential.webp'},
  ]
  categoryBag.map(function(element){
      var box = document.createElement('div');
      var img =  document.createElement('img');
      img.setAttribute('src', element.image_url)
      box.append(img); 
      document.getElementById('categoryBag').append(box)
  })


  // <!-- BRAND DISPLAY 2 -->
  var brandsBag = [
      {image_url :'Common Files/image/Nike.webp'},
      {image_url :'Common Files/image/Levis.webp'},
      {image_url :'Common Files/image/Roadster---.webp'},
      {image_url :'Common Files/image/Jones.webp'},
      {image_url :'Common Files/image/hrx30.webp'},
  ]
  brandsBag.map(function(element){
      var box = document.createElement('div');
      var img =  document.createElement('img');
      img.setAttribute('src', element.image_url)
      box.append(img); 
      document.getElementById('explore_more').append(box)
  })




