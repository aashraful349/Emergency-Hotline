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
            const historySection=document.getElementById('history');
            historySection.appendChild(document.createElement('div')).classList.add('call-history-list','p-4','flex','justify-between','items-center');
            const callHistoryList=historySection.lastChild;
            callHistoryList.appendChild(document.createElement('div'));
            callHistoryList.lastChild.appendChild(document.createElement('h1')).classList.add('font-semibold','text-[18px]');
            callHistoryList.lastChild.firstChild.innerText=info.service;
            callHistoryList.lastChild.appendChild(document.createElement('p')).classList.add('text-gray-400','text-[18px]');
            callHistoryList.lastChild.lastChild.innerText='999';
            callHistoryList.appendChild(document.createElement('div'));
            callHistoryList.lastChild.appendChild(document.createElement('p')).classList.add('text-[18px]','text-gray-400');
            callHistoryList.lastChild.firstChild.innerText=info.time;
        }
        else{
            alert('You have no coins left. Please recharge your coins.');
        }
        
    })
}
