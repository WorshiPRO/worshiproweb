var link = "https://formspree.io/worshipro@gmail.com";
function submitform(){
    if(!/\S/.test(document.getElementById('name').value)){
        alert("請輸入名字"); 
    }else if(!/\S/.test(document.getElementById('e_replytol').value)){
        alert("請輸入電子信箱"); 
    }else if(!/\S/.test(document.getElementById('message').value)){
        alert("請輸入內容"); 
    }else if(!document.getElementById('demo-human').checked){
        alert("請勾選不是機器人");
    }else{
      //document.forms["my form"].submit();
      var form = document.getElementById("my form");
      form.setAttribute("method", "post");
      form.setAttribute("action", link);
      //document.body.appendChild(form);
      form.submit();
    }        
};