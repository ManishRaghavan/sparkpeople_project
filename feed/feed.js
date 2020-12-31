
  var modal = document.getElementById("myModal");
        
  var btn = document.getElementById("myBtn");
  
 
  var span = document.getElementsByClassName("close")[0];
  
  
  btn.onclick = function() {
    modal.style.display = "block";
  }
  
  
  span.onclick = function() {
    modal.style.display = "none";
  }
  

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

 

  
  localStorage.setItem("photo","")
  localStorage.setItem("name",JSON.stringify("manish13"))
  document.getElementById("post").addEventListener("click",post)
 
  
  function post()
  {
    modal.style.display = "none"
    let text = document.getElementById("posttext").value
    let photo = document.getElementById("photo").value
    localStorage.setItem("photo",JSON.stringify(photo))
    localStorage.setItem("text",JSON.stringify(text))
 
    let t =  localStorage.getItem("text")
    let posttext = JSON.parse(t)
  

    let n =  localStorage.getItem("name")
    let username = JSON.parse(n)
   

    let html = `<div style="margin-top:50px" class="feedbox">
    <h2 style="text-align: center;padding-top:20px">Trending</h2>
    <img src="https://sparkpeo.hs.llnwd.net/e1/assets/diet5/cgf_filter.svg" />
    <img src="https://sparkpeo.hs.llnwd.net/e1/assets/diet5/cgf_add_user.svg" />
    <img src="https://www.sparkpeople.com/assets/diet5/cgf_user_noprofile.png" />
    <p style="margin-top:20px;margin-left:100px">${username}<br>
        <h>30 minutes ago</h>
    </p>
    <p style="color: black;padding-left: 50px;padding-right: 50px;padding-top: 20px;">${posttext}</p>
    <img class="feedbox_postimg"
        src="/feed/1.jpg" />
    <div class="commentbox">
        <img src="https://sparkpeo.hs.llnwd.net/e1/assets/diet5/cgf_like_icon.svg" />
        <h>0</h>
        <img src="https://sparkpeo.hs.llnwd.net/e1/assets/diet5/cgf_comment_icon.svg" />
        <h>0</h>
        <div class="likebox">
            <img src="https://sparkpeo.hs.llnwd.net/e1/assets/diet5/cgf_like_btn_icon.svg" />
            <h id="like">Like.</h>
        </div>
        <div class="likebox2">
            <img src="https://sparkpeo.hs.llnwd.net/e1/assets/diet5/cgf_comment_btn_icon.svg" />
            <h id="comment" >Comment</h>
        </div>
    </div>
    <div class="commentsec_box">
        <img src="https://www.sparkpeople.com/assets/diet5/cgf_user_noprofile.png" />
        <p>
            <h style="color: #2B71BD;">REDROBIN47</h> Looking forward to it. <h style="color: #cccccc;">18
                seconds ago</h>
        </p>
    </div>
</div>`
    document.getElementById("mainbox").innerHTML = html 
  }
  let countlike = 0
  let countcomment = 0

    document.getElementById("like").addEventListener("click",like)
  function like()
  {
    countlike++
    document.getElementById("likecount").textContent = countlike 
  }

  document.getElementById("comment").addEventListener("click",comment)
  function comment()
  {
     countcomment++
     console.log("aaa")
    document.getElementById("commentcount").textContent =  countcomment 
    document.getElementById("commentinput").style.display="block"
    document.getElementById("feedbox").style.height="900px"
  }
  
  document.getElementById("commentthis").addEventListener("click",commentthis)

  function commentthis()
  {
    let commenttext = document.getElementById("commentInputText").value
    document.getElementById("commentinput").style.display="none"
    let html2 = `<img src="https://www.sparkpeople.com/assets/diet5/cgf_user_noprofile.png" />
    <p>
        <h style="color: #2B71BD;">manish13</h>${commenttext} <h style="color: #cccccc;margin-left:20px">1
            seconds ago</h>
    </p>`
    document.getElementById("commentsec_box").innerHTML += html2
    
  }