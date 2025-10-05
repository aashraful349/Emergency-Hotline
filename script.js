let serviceInfo=[];

const heartIconPressed=document.getElementsByClassName('heart-icon');
for(const heartIcon of heartIconPressed){
    heartIcon.addEventListener('click',function(e){
        const heartCount=parseInt(document.getElementById('heart-count').innerText);
        newHeartCount=heartCount+1;
        document.getElementById('heart-count').innerText=newHeartCount;
    })}

const callButtonPressed=document.getElementsByClassName('call-button');
for(const callButton of callButtonPressed){
    const service=callButton.parentNode.parentNode.firstElementChild.innerText;
    callButton.addEventListener('click',function(e){
        const coins=parseInt(document.getElementById('coin-count').innerText);
        if(coins>=20){
            newCoinCount=coins-20;
            document.getElementById('coin-count').innerText=newCoinCount;
            const info={
                service:service,
                time:new Date().toLocaleTimeString()
            }
            serviceInfo.push(info);
        }
        else{
            alert('You have no coins left. Please recharge your coins.');
        }
        
    })
}
console.log(serviceInfo);
