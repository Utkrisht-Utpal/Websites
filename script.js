const content = document.querySelector('.contentBox');
const clbody = document.querySelector('.body');
const theme = document.querySelector('.notificationbtn');

const card = `
<div class="contentOne">
    <div class="thumbnail">
        <img src="https://i.ytimg.com/vi/1ztlY12YmwE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC_zxSddVfshDDN19j7ABJuNa08DA">
    </div>

    <div class="cardInfo">
        <div class="channelLogo">
            <img src="./assets/profile-round-1342-svgrepo-com.svg">
        </div>

        <div class="videoInfo">
            <h3 class="videoTitle">This Diet Plan Won me 6 Olympias</h3>
            <h5 class="channelName">Chris Bumstead</h5>
            <h5 class="views">1.1M Views • 6 days ago</h5>
        </div>

        <div class="threeDots">
            <img src="./assets/dots-3-vertical-svgrepo-com.svg">
        </div>
    </div>
</div>
`;

for (let i = 0; i < 23; i++) {
    content.insertAdjacentHTML("beforeend", card);
}


theme.addEventListener('click', ()=> {
    clbody.style.backgroundColor = "white"; 
})