$(document).ready(funtion(){
    $.getJSON('https://api.github.com/users/RebeccaVB', function(result){
         $.each(repos, function( index, repo ) {
            console.log(repo.name, repo.html_url, repo.updated_at, repo.subscriptions_url);
            $(".repo-list")
            .append("<li><a href=" + repo.html_url + ">" + repo.name + "<p>last update:" + repo.updated_at +"</p>" + "</a></li>");
        });
    });
    };
        
     //   for(var repoIndx = 0; repoIndx < response.length; repoIndx++) {
     //       var repo = response[repoIndx];
      //      var name = repo.name;
     //       var update = repo.update_at;
     //       var link = repo.html_url
      //  }
  //  };