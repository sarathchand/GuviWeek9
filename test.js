fetch('https://random-word-api.herokuapp.com/word?number=1')
.then(resp=>{
    console.log(resp);
    return resp.json();
})
.then(result=>{
    var url = 'https://api.giphy.com/v1/gifs/search?api_key=ipqllZYIy9cOxyiJlaOX87jlLr8QJoQ3&q=';
    url = url+result+'&limit=30&offset=0&rating=g&lang=en';
    console.log(url);
    return fetch(url);
})
.then(data=>{
    return data.json();
})
.then(image=>{
    for(var i =0 ; i < image.data.length;i++)
    {
     
        var image1= document.createElement('img');
        image1.setAttribute('src',image.data[i].images.downsized.url);
        document.body.append(image1);

    }
   
})