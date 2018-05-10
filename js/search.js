$(function () {

    $('#search').click(function(){
        $('#searchresult').empty();
        var keyword = $('#keyword').val();
        var type = $('#type').val();
        var radius = $('#radius').val();
        PlaceSearch.Search(keyword, type, radius).then(function(data){
             
            for(var i=0;i<data.length;i++){
                var row = 
                '<a href="detail.html?placeid=' + data[i].id + '">' + 
                '<div class="row">' +
                '<div class="col-xs-6 col-sm-6 col-md-6 col-lg-2">'+'<br>'+'<center>'+'<img style="height:200px;width:250px;margin-left: 25px;" src=' + data[i].photo +' class="thumbnail" />'+'</center>'+ '</div>' +
                '<div class="col-xs-6 col-sm-6 col-md-6 col-lg-10 ">' +'<br>'+'<br>'+'<center>'+ data[i].name + 
                '<span class="rating-static rating-'+ (data[i].rating)*10+ '">'+'</span>'+data[i].rating+'</center>' +'</div>' +
               '</div>' +  
                '</a>';
                $('#searchresult').append(row);
            }
           
        });        
    });    
});