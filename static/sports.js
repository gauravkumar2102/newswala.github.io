console.log("This is Sports News")



function sports(){
    let newsAccordion = document.getElementById('newsaya');
    const APIKey='6213d677b5c6416b8e17ac1de13cb8e3';
    
    
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${APIKey}`,true);
    xhr.onload= function() {
        if (this.status === 200) {
               let json=JSON.parse(this.responseText);
               let articles = json.articles;
            console.log(articles);
            let newsHtml = "";
            articles.forEach(function(element) {
                console.log(element.title);
                let data = `<div class="card" style="width:90vw;  margin: 20px;">
                <div class="card-icon">
                <img src="${element.urlToImage}" class="card-img-top " style="width: 95%; height:400px;" alt="..."></div>
                <div class="card-body">
                  <h5 class="card-title">${element.title}</h5>
                  <p class="card-text">${element.description}</p>
                  <a href="${element.url}" class="btn btn-primary" target="blank">See News</a>
                </div>
              </div>`;
    
                newsHtml +=data;
                
            });
            newsAccordion.innerHTML=newsHtml;
            
        }
    
        else{
                 console.log("Error hai bhai");
        }
    }
    
    xhr.send()
    
     }
    