console.log("hello");

window.addEventListener('load', ()=>{
    document.getElementById('send-it-in').addEventListener('click',()=>{
        let adjectiveSubmission = document.getElementById('adjectives').value;
        console.log(adjectiveSubmission);
        console.log("button was clicked");

        //creating the object
        let obj = {"adjs": adjectiveSubmission};

        //stringify object
        let jsonData = JSON.stringify(obj);
        console.log(jsonData);


        //fetch to route adjectives
        fetch('/adjectiveSubmission',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: jsonData
        })
        .then(response => response.json())
        .then(data=>{
            console.log("did this work?");
            console.log(data);
        })

        //make a fetch request of type POST so that we can send info (adjectives) to server



    })

    document.getElementById('get-tracker').addEventListener('click', ()=>{
        //get into of all adjectives!
        fetch('/getAdj')
        .then(resp => resp.json())
        .then(data => {
            document.getElementById('adj-submission').innerHTML = '';
            console.log(data.data);
            for(let i=0;i<data.data.length;i++){
                let string = data.data[i].adjs + " : " + data.data[i].time;
                let elt = document.createElement('p');
                elt.innerHTML = string;
                document.getElementById('adj-submission').appendChild(elt);
            }
        })
    })

    document.getElementById('show-template').addEventListener('click',()=>{
        document.getElementById('libs-template').textContent = 'Last summer, I discovered the most (1) guava of my life. It hung from a (2) tree behind my grandmother’s house, and the whole yard smelled (3). Absolutely decadent. When I picked it, the skin felt (4) and smooth, and the aroma was so (5) that every (6) bird in the neighborhood came to watch. Inside, the flesh was (7) pink and dotted with (8) little seeds. The first bite was (9), a perfect mix of sweet and tart. Guavas are so underrated — they are definitely the most (10) fruit on Earth.';
    })
})