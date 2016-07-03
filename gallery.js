var imgTags = [];
var nImg = 0;
imgTags[nImg++] = '<img src="images/IMG_1703.jpg" width=640 height=480 class="image">';
imgTags[nImg++] = '<img src="images/IMG_1702.jpg" width=640 height=480 class="image">';
imgTags[nImg++] = '<img src="images/IMG_1701.jpg" width=640 height=480 class="image">';
imgTags[nImg++] = '<img src="images/IMG_1700.jpg" width=640 height=480 class="image">';

imgTags[nImg++] = '<iframe src="https://www.youtube.com/embed/WRieo65RsRs" width="640" height="480" frameborder="0" allowfullscreen class="image"></iframe>';
imgTags[nImg++] = '<iframe src="https://www.youtube.com/embed/MrR-Bc4cjeY" width="640" height="480" frameborder="0" allowfullscreen class="image"></iframe>';

imgTags[nImg++] = '<img src="images/IMG_1691.jpg" width=640 height=480 class="image">';
imgTags[nImg++] = '<img src="images/IMG_1690.jpg" width=640 height=480 class="image">';
imgTags[nImg++] = '<img src="images/IMG_1681.jpg" width=640 height=480 class="image">';
imgTags[nImg++] = '<img src="images/IMG_1679.jpg" width=640 height=480 class="image">';
imgTags[nImg++] = '<img src="images/IMG_1677.jpg" width=640 height=480 class="image">';
imgTags[nImg++] = '<img src="images/IMG_1676.jpg" width=640 height=480 class="image">';
imgTags[nImg++] = '<img src="images/IMG_1675.jpg" width=640 height=480 class="image">';

imgTags[nImg++] = '<iframe src="https://www.youtube.com/embed/Ux8-EcjBPQQ" width="640" height="480" frameborder="0" allowfullscreen class="image"></iframe>';
imgTags[nImg++] = '<iframe src="https://www.youtube.com/embed/tOPHS3Kn-dE" width="640" height="480" frameborder="0" allowfullscreen class="image"></iframe>';
imgTags[nImg++] = '<iframe src="https://www.youtube.com/embed/iHTZMTZwH2o" width="640" height="480" frameborder="0" allowfullscreen class="image"></iframe>';
imgTags[nImg++] = '<iframe src="https://www.youtube.com/embed/oEFBJWbGyRY" width="640" height="480" frameborder="0" allowfullscreen class="image"></iframe>';
imgTags[nImg++] = '<iframe src="https://www.youtube.com/embed/dvFcw_eqMl0" width="640" height="480" frameborder="0" allowfullscreen class="image"></iframe>';

imgTags[nImg++] = '<img src="images/IMG_1636.jpg" width=640 height=480 class="image">';
imgTags[nImg++] = '<img src="images/IMG_1638.jpg" width=640 height=480 class="image">';
imgTags[nImg++] = '<img src="images/IMG_1642.jpg" width=640 height=480 class="image">';
imgTags[nImg++] = '<img src="images/IMG_1643.jpg" width=640 height=480 class="image">';
imgTags[nImg++] = '<img src="images/IMG_1644.jpg" width=640 height=480 class="image">';
imgTags[nImg++] = '<img src="images/IMG_1645.jpg" width=640 height=480 class="image">';
imgTags[nImg++] = '<img src="images/IMG_1647.jpg" width=640 height=480 class="image">';
imgTags[nImg++] = '<img src="images/IMG_1648.jpg" width=640 height=480 class="image">';
imgTags[nImg++] = '<img src="images/IMG_1649.jpg" width=640 height=480 class="image">';
imgTags[nImg++] = '<img src="images/IMG_1650.jpg" width=640 height=480 class="image">';
imgTags[nImg++] = '<img src="images/IMG_1651.jpg" width=640 height=480 class="image">';
imgTags[nImg++] = '<img src="images/IMG_1655.jpg" width=640 height=480 class="image">';
imgTags[nImg++] = '<img src="images/IMG_1657.jpg" width=640 height=480 class="image">';

imgTags[nImg++] = '<img src="images/IMG_1332.jpg" width=640 height=480 class="image">';
imgTags[nImg++] = '<img src="images/IMG_1340.jpg" width=640 height=480 class="image">';
imgTags[nImg++] = '<img src="images/IMG_1357.jpg" width=640 height=480 class="image">';
imgTags[nImg++] = '<img src="images/IMG_1329.jpg" width=640 height=480 class="image">';
imgTags[nImg++] = '<img src="images/IMG_1330.jpg" width=640 height=480 class="image">';
imgTags[nImg++] = '<img src="images/IMG_1333.jpg" width=640 height=480 class="image">';
imgTags[nImg++] = '<img src="images/IMG_1338.jpg" width=640 height=480 class="image">';
imgTags[nImg++] = '<img src="images/IMG_1347.jpg" width=640 height=480 class="image">';
imgTags[nImg++] = '<img src="images/IMG_1351.jpg" width=640 height=480 class="image">';
imgTags[nImg++] = '<img src="images/IMG_1354.jpg" width=640 height=480 class="image">';
imgTags[nImg++] = '<img src="images/IMG_1356.jpg" width=640 height=480 class="image">';
imgTags[nImg++] = '<img src="images/IMG_1358.jpg" width=640 height=480 class="image">';
imgTags[nImg++] = '<img src="images/IMG_1360.jpg" width=640 height=480 class="image">';
imgTags[nImg++] = '<img src="images/IMG_1385.jpg" width=640 height=480 class="image">';

imgTags[nImg++] = '<img src="images/IMG_0996.jpg" width=640 height=480 class="image">';
imgTags[nImg++] = '<img src="images/IMG_0997.jpg" width=640 height=480 class="image">';
imgTags[nImg++] = '<img src="images/IMG_0999.jpg" width=640 height=480 class="image">';
imgTags[nImg++] = '<img src="images/IMG_1013.jpg" width=640 height=480 class="image">';
imgTags[nImg++] = '<img src="images/IMG_1014.jpg" width=640 height=480 class="image">';

nImg = imgTags.length;
var index = 0;

$(document).ready(function() {
  $('.thumbs').click(function () {
    index = $('.thumbs').index(this);

    var overlay = '<div class="dimmer"></div>';
    overlay += '<div class="overlay">';
    overlay += '<div style="text-align: right">';
    overlay += '<img align="right" alt="close" width=20 height=20 id="close" src="icons/cancel.png"></div>';
    overlay += '<br><table><tr>';
    overlay += '<td><img align="left" alt="back" width=40 height=40 id="back" src="icons/back.png"></td>';
    overlay += '<td id="image-box">' + imgTags[index] + '</td>';
    overlay += '<td><img style="text-align: right" align="right" alt="next" width=40 height=40 id="next" src="icons/next.png"></td>';
    overlay += '</tr></table></div>';
  
    $('body').append(overlay);  
  });	

  $(document).on('click','#close', function(){
    $('.overlay').remove();
    $('.dimmer').remove();
  });

  $(document).on('click','#next', function(){
    if(index+1 < nImg) {
      index++;
      $('.image').remove();
      $('#image-box').append(imgTags[index]);
    };
  });
 
  $(document).on('click','#back', function(){
    if(index > 0) {
      index -=1;
      $('.image').remove();
      $('#image-box').append(imgTags[index]);
    };
  });

  $(document).on('click','.dimmer', function(){
    $('.overlay').remove();
    $('.dimmer').remove();    
  });
  
  $(document).keydown(function(key) {
    switch(parseInt(key.which,10)) {
      case 37:
        if(index > 0) {
          index -=1;
          $('.image').remove();
          $('#image-box').append(imgTags[index]);
        };
        break;
      case 39:
        if(index+1 < nImg) {
          index++;
          $('.image').remove();
          $('#image-box').append(imgTags[index]);
        };
        break;
      case 27:
         $('.overlay').remove();
         $('.dimmer').remove();
       break;
       default: break;
    };
  });
});

      
