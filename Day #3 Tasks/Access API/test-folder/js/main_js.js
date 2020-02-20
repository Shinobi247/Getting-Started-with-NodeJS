function loadJSON(){
    /* // $.getJSON("assign_data.json", function(data){
    //     console.log(data);

    // });
    $.get("assign_data.json", function(data){
        alert("Data: " + data);
    }); */        

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://myjson.com/cpkkw', true);
    xhr.onreadystatechange = function(){
        var data = JSON.stringify(xhr.responseText);
        console.log(data.grp[0].t);
    }
    xhr.send();
}
