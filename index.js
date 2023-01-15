const yesBtn = document.querySelector('#yesBtn');
yesBtn.style.setProperty('background','silver')


yesBtn.addEventListener('click', function () {
    alert('kimi da yo kimi nanda yo oshiete kureta kurayami mo hikaru nara hoshizora ni naru kanashimi wo egao ni mou kakusanai dekirameku donna hoshi mo kimi o terasu kara');
});
const noBtn = document.querySelector('#noBtn');
noBtn.style.setProperty('background','pink')
noBtn.addEventListener('mouseover',function() {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
noBtn.style.setProperty('top',randomY+'%');
noBtn.style.setProperty('left',randomX+'%');
noBtn.style.setProperty('transform','translate(-${randomX}%,-${randomY}%)');
})
