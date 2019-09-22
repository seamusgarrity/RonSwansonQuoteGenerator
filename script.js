var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

$("#xhr").click(function(){
    
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            $("#quote").text(JSON.parse(xhr.responseText)[0])
        }
    }

    xhr.open("GET", url);
    xhr.send();
});

$("#fetch").click(function(){

    fetch(url)
    .then(function(res){
        if(!res.ok){
            throw Error(res.status);
        }
        return res
    })
    .then(function(res){
        return res.json().then(function(data){
            return data[0];
        })
    })
    .then(function(data){
        $("#quote").text(data);
    })
    .catch(function(err){
        console.log(err);
    })

});

$("#jquery").click(function(){

    $.getJSON(url)
    .done(function(data){
        $("#quote").text(data[0]);
    })
    .fail(function(){
        console.log("failed request");
    })

});

$("#axios").click(function(){

    axios.get(url)
    .then(function(res){
        // console.log(res.data[0]);
        $("#quote").text(res.data[0]);
    })
    .catch(function(){
        alert("Error!")
    })

});