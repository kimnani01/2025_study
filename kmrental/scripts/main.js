//카운트를 표시할 요소
const $count1 = document.querySelector(".count1");
const $count2 = document.querySelector(".count2");
const $count3 = document.querySelector(".count3");
const $count4 = document.querySelector(".count4");

//목표수치
const max1 = 400;
const max2 = 797;
const max3 = 15925;
const max4 = 13089;

function counter(count, max) {
    let now = max;
    
    const handle = setInterval(() => {
        count.innerHTML = Math.ceil(max - now);
        
        // 목표에 도달하면 정지
        if (now < 1) {
            clearInterval(handle);
        }
        
        // 적용될 수치, 점점 줄어듬
        const step = now / 10;
        
        now -= step;
    }, 50);
}

counter($count1, max1);
counter($count2, max2);
counter($count3, max3);
counter($count4, max4);