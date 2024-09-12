// Header에 페이지 아래로 스크롤시 다크 스타일링 적용
const header = document.querySelector('.header');
console.dir(header);
console.log(header);
// getBoundingClientRect() 소수점까지 나타낼 수 있음
// const headerHeight = header.getBoundingClientRect().height;
//offsetHeight 소수점 반올림 한 높이를 나타내줌
const headerHeight = header.offsetHeight;
console.log(headerHeight);
document.addEventListener('scroll', () => {
  console.log(window.scrollY);
  if (window.scrollY > headerHeight) {
    header.classList.add('header--dark')
  } else {
    header.classList.remove('header--dark')
  }
})

// Home 섹션을 아래로 스크롤 시 투명하게 처리함
const home = document.querySelector('.home__container')
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', () => {
  console.log(1 - window.scrollY / homeHeight)
  home.style.opacity = 1 - window.scrollY / homeHeight
});
