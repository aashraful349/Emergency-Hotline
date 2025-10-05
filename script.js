const heartIconPressed=document.getElementsByClassName('heart-icon');
for(const heartIcon of heartIconPressed){
    heartIcon.addEventListener('click',function(e){
        const heartCount=parseInt(document.getElementById('heart-count').innerText);
        newHeartCount=heartCount+1;
        document.getElementById('heart-count').innerText=newHeartCount;
    })}