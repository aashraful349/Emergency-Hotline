const heartIconPressed=document.getElementsByClassName('heart-icon');
for(const heartIcon of heartIconPressed){
    heartIcon.addEventListener('click',function(e){
        const heartCount=parseInt(document.getElementById('heart-count').innerText);
        newHeartCount=heartCount+1;
        document.getElementById('heart-count').innerText=newHeartCount;
    })}

const copyButtonPressed=document.getElementsByClassName('copy-button');
for(const copyButton of copyButtonPressed){
    copyButton.addEventListener('click',function(e){
        const serviceNumber=copyButton.parentNode.parentNode.children[2].innerText;
        navigator.clipboard.writeText(serviceNumber);
        alert('Number copied to clipboard: '+serviceNumber);
        const copyCount=parseInt(document.getElementById('copy-count').innerText);
        newCopyCount=copyCount+1;
        document.getElementById('copy-count').innerText=newCopyCount;
    })
}

const callButtonPressed=document.getElementsByClassName('call-button');
for(const callButton of callButtonPressed){
    const service=callButton.parentNode.parentNode.children[1].innerText;
    callButton.addEventListener('click',function(e){
        const coins=parseInt(document.getElementById('coin-count').innerText);
        if(coins>=20){
            newCoinCount=coins-20;
            document.getElementById('coin-count').innerText=newCoinCount;
            const info={
                service:service,
                number:callButton.parentNode.parentNode.children[2].innerText,
                time:new Date().toLocaleTimeString()
            }
            const historySection=document.getElementById('history');
            const div=document.createElement('div');
            div.innerHTML=`
            <div class="call-history-list p-4 flex justify-between items-center">
                    <div>
                        <h1 id="service-name1" class="font-semibold text-[18px]">${info.service}</h1>
                        <p id="service-number2" class="text-gray-400 text-[18px]">${info.number}</p>
                    </div>
                    <div>
                        <p id="call-time" class="text-[18px] text-gray-400">${info.time}</p>
                    </div>
                </div>`
            historySection.appendChild(div);
            document.getElementById('clear-button').addEventListener('click',function(){
                historySection.innerHTML=`
                <div class="flex justify-between items-center p-4">
                    <p class="font-medium text-2xl"><i class="fa-solid fa-clock text-gray-400"></i> Call History</p>
                    <button id="clear-button" class="border-1 w-[114px] h-[52px]  rounded-4xl px-4 py-2 text-white bg-[#00A63E]">Clear</button>
                </div>`;
            });
        }
        else{
            alert('You have no coins left. Please recharge your coins.');
        }
        
    })
}
