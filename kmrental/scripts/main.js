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
        count.innerHTML = Math.ceil(max - now).toLocaleString();
        
        // 목표에 도달하면 정지
        if (now < 1) {
            clearInterval(handle);
        }
        
        // 적용될 수치, 점점 줄어듬
        const step = now / 10;
        
        now -= step;
    }, 30);
}

// Intersection Observer 설정
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            const maxValue = target.dataset.max; // 요소의 data-max 속성 가져오기
            counter(target, parseInt(maxValue)); 
            // observer.unobserve(target); // 한 번 실행 후 관찰 중지
        }
    });
}, { threshold: 0.5 }); // 요소가 50% 이상 보일 때 실행

// 각 숫자 요소에 data-max 속성 추가 후 관찰 시작
[$count1, $count2, $count3, $count4].forEach(($el, index) => {
    $el.dataset.max = [max1, max2, max3, max4][index]; // 요소별 max 값 설정
    observer.observe($el); // 요소 관찰 시작
});

// counter($count1, max1);
// counter($count2, max2);
// counter($count3, max3);
// counter($count4, max4);