const workDesc = [{
        img: 'https://i.ytimg.com/vi/sdMsOMnWShI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCC9r2Ao9Xoq8hnuwumEREHbmzUcw',
        name: 'Recruiting Cadet',
        desc: 'This is me when recruiting new cadet to my team on survey corps.',
    },
    {
        img: 'https://i.ytimg.com/vi/hAsPBhAUXjw/maxresdefault.jpg',
        name: 'Rescuing Teammate',
        desc: 'This is me when rescuing our teammate who get kidnapped by enemy. In this job also i lose my right arm, because i will sacrifice anything to finish my job',
    },
    {
        img: 'https://static.wikia.nocookie.net/shingekinokyojin/images/9/97/The_Female_Titan_restricted.png/revision/latest?cb=20130818110449',
        name: 'Catch "BIG" Enemy',
        desc: 'This is when me and my team try to catch big enemy, that turn out it was our friend on millitary',
    },
    {
        img: 'https://animeuknews.net/app/uploads/2020/03/Attack-on-Titan-1-1024x577.jpg',
        name: 'Strategic Operation – Wall Maria',
        desc: 'Worked with a highly skilled team to reclaim lost territory. My part involved planning routes, assigning roles, and adapting on the fly when things didn’t go according to plan.'
    },

];


function createWork() {
    const myWorkContainer = document.querySelector('.my-work-container');
    return myWorkContainer.innerHTML = workDesc.map(w => `<div class="work">
        <img
                        src="${w.img}"
                        alt="">
                    <div class="work-description">
                        <h4 class="work-name">${w.name}</h4>
                        <p class="project-desc">
                            ${w.desc}
                        </p>
                    </div>
                </div>`).join('');
}
createWork();