var imgTags = [];
imgTags[0] = '<iframe src="https://www.youtube.com/embed/Ux8-EcjBPQQ" width="640" height="480" frameborder="0" allowfullscreen class="image"></iframe>';
imgTags[1] = '<iframe src="https://www.youtube.com/embed/tOPHS3Kn-dE" width="640" height="480" frameborder="0" allowfullscreen class="image"></iframe>';
imgTags[2] = '<iframe src="https://www.youtube.com/embed/iHTZMTZwH2o" width="640" height="480" frameborder="0" allowfullscreen class="image"></iframe>';
imgTags[3] = '<iframe src="https://www.youtube.com/embed/oEFBJWbGyRY" width="640" height="480" frameborder="0" allowfullscreen class="image"></iframe>';
imgTags[4] = '<iframe src="https://www.youtube.com/embed/dvFcw_eqMl0" width="640" height="480" frameborder="0" allowfullscreen class="image"></iframe>';

imgTags[5] = '<img src="images/IMG_1636.jpg" width=640 height=480 class="image">';
imgTags[6] = '<img src="images/IMG_1638.jpg" width=640 height=480 class="image">';
imgTags[7] = '<img src="images/IMG_1642.jpg" width=640 height=480 class="image">';
imgTags[8] = '<img src="images/IMG_1643.jpg" width=640 height=480 class="image">';
imgTags[9] = '<img src="images/IMG_1644.jpg" width=640 height=480 class="image">';
imgTags[10] = '<img src="images/IMG_1645.jpg" width=640 height=480 class="image">';
imgTags[11] = '<img src="images/IMG_1647.jpg" width=640 height=480 class="image">';
imgTags[12] = '<img src="images/IMG_1648.jpg" width=640 height=480 class="image">';
imgTags[13] = '<img src="images/IMG_1649.jpg" width=640 height=480 class="image">';
imgTags[14] = '<img src="images/IMG_1650.jpg" width=640 height=480 class="image">';
imgTags[15] = '<img src="images/IMG_1651.jpg" width=640 height=480 class="image">';
imgTags[16] = '<img src="images/IMG_1655.jpg" width=640 height=480 class="image">';
imgTags[17] = '<img src="images/IMG_1657.jpg" width=640 height=480 class="image">';

imgTags[18] = '<img src="images/IMG_1332.jpg" width=640 height=480 class="image">';
imgTags[19] = '<img src="images/IMG_1340.jpg" width=640 height=480 class="image">';
imgTags[20] = '<img src="images/IMG_1357.jpg" width=640 height=480 class="image">';
imgTags[21] = '<img src="images/IMG_1329.jpg" width=640 height=480 class="image">';
imgTags[22] = '<img src="images/IMG_1330.jpg" width=640 height=480 class="image">';
imgTags[23] = '<img src="images/IMG_1333.jpg" width=640 height=480 class="image">';
imgTags[24] = '<img src="images/IMG_1338.jpg" width=640 height=480 class="image">';
imgTags[25] = '<img src="images/IMG_1347.jpg" width=640 height=480 class="image">';
imgTags[26] = '<img src="images/IMG_1351.jpg" width=640 height=480 class="image">';
imgTags[27] = '<img src="images/IMG_1354.jpg" width=640 height=480 class="image">';
imgTags[28] = '<img src="images/IMG_1356.jpg" width=640 height=480 class="image">';
imgTags[29] = '<img src="images/IMG_1358.jpg" width=640 height=480 class="image">';
imgTags[30] = '<img src="images/IMG_1360.jpg" width=640 height=480 class="image">';
imgTags[31] = '<img src="images/IMG_1385.jpg" width=640 height=480 class="image">';

imgTags[32] = '<img src="images/IMG_0996.jpg" width=640 height=480 class="image">';
imgTags[33] = '<img src="images/IMG_0997.jpg" width=640 height=480 class="image">';
imgTags[34] = '<img src="images/IMG_0999.jpg" width=640 height=480 class="image">';
imgTags[35] = '<img src="images/IMG_1013.jpg" width=640 height=480 class="image">';
imgTags[36] = '<img src="images/IMG_1014.jpg" width=640 height=480 class="image">';

var nImg = imgTags.length;
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

      
