$(document).ready(function(){
    $.getJSON('https://api.github.com/users/RebeccaVB/repos', function(response){
         for (var repoIdx = 0; repoIdx < response.length; repoIdx++) {
            var repo = response[repoIdx];
            var repoLink = repo.html_url;
             var repoName = repo.name;
            var repoUpdated = repo.updated_at;
            console.log(repo.name, repo.html_url, repo.updated_at, repo.subscriptions_url);
            $(".repo-list")
            .append("<li><a href=" + repo.html_url + ">" + repo.name + "<p>last update:" + repo.updated_at +"</p>" + "</a></li>");
           
                    };
    });
    });

$(function() {
        $('.material-card > .mc-btn-action').click(function () {
            var card = $(this).parent('.material-card');
            var icon = $(this).children('i');
            icon.addClass('fa-spin-fast');

            if (card.hasClass('mc-active')) {
                card.removeClass('mc-active');

                window.setTimeout(function() {
                    icon
                        .removeClass('fa-arrow-left')
                        .removeClass('fa-spin-fast')
                        .addClass('fa-bars');

                }, 800);
            } else {
                card.addClass('mc-active');

                window.setTimeout(function() {
                    icon
                        .removeClass('fa-bars')
                        .removeClass('fa-spin-fast')
                        .addClass('fa-arrow-left');

                }, 800);
            }
        });
    });        
    