const lenis = new Lenis({
  duration: 1
})
// lenis.on('scroll', (e) => {
//   console.log(e)
// })
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

// lazyload
const $lazyImgs = document.querySelectorAll('img.js-lazy');
$lazyImgs.forEach(function(el) {
  el.setAttribute(
    'src',
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAEsCAQAAABHvi1JAAACNUlEQVR42u3TMQEAAAgDINc/mLE0gZ8ndCA9BRwiCAgCgoAgIAgIAoKAICAICAIIAoKAICAICAKCgCAgCAgCggCCgCAgCAgCgoAgIAgIAoIAgoAgIAgIAoKAICAICAKCgCCAICAICAKCgCAgCAgCgoAggCAgCAgCgoAgIAgIAoKAICAIIAgIAoKAICAICAKCgCAgCCAICAKCgCAgCAgCgoAgIAgIAggCgoAgIAgIAoKAICAICAKCCAKCgCAgCAgCgoAgIAgIAoIAgoAgIAgIAoKAICAICAKCgCCAICAICAKCgCAgCAgCgoAggCAgCAgCgoAgIAgIAoKAICAIIAgIAoKAICAICAKCgCAgCCAICAKCgCAgCAgCgoAgIAgIAggCgoAgIAgIAoKAICAICAIIAoKAICAICAKCgCAgCAgCggCCgCAgCAgCgoAgIAgIAoKAIIKAICAICAKCgCAgCAgCgoAggCAgCAgCgoAgIAgIAoKAICAIIAgIAoKAICAICAKCgCAgCCAICAKCgCAgCAgCgoAgIAgIAggCgoAgIAgIAoKAICAICAIIAoKAICAICAKCgCAgCAgCggCCgCAgCAgCgoAgIAgIAoIAgoAgIAgIAoKAICAICAKCgCCAICAICAKCgCAgCAgCgoAgIIggIAgIAoKAICAICAKCgCAgCCAICAKCgCAgCAgCgoAgIAgIAggCgoAgIAgIAoKAICAICAIIAoKAICAICAKCgCAgCAgCggCCgCDwZwF2ixVTTYF0mAAAAABJRU5ErkJggg=='
  )
});
// https://github.com/verlok/vanilla-lazyload
const lazyLazy = new LazyLoad({
  elements_selector: 'img.js-lazy',
  // 設定距離可視區(視窗)底部多遠觸發
  threshold: 500,
});

const $burger = document.querySelector('.o-burger');
const $navbarBody = document.querySelector('.l-navbar__body');
let isOpened = false;

function burgerCtrl(_this) {
  if (!isOpened) {
    _this.classList.add('is-opened');
    $navbarBody.classList.add('is-opened');
    setTimeout(function() {
      $navbarBody.style.overflow = 'auto';
    }, 700);
    isOpened = true;
  } else {
    _this.classList.remove('is-opened');
    $navbarBody.classList.remove('is-opened');
    $navbarBody.style.overflow = 'hidden';
    isOpened = false;
  };
}

// $burger.addEventListener('click', function() {
//   if (!isOpaned) {
//     this.classlist.add('is-opened');
//     $navbarBody.classList.add('is-opened');
//     isOpened = true;
//   } else {
//     this.classList.remove('is-opened');
//     $navbarBody.classList.romove('is-opened');
//     isOpened = false;
//   };
// });

const $productItems = document.querySelectorAll('.c-product-btn__item');
const $productImg = document.querySelector('.l-product__img');
$productItems.forEach(function(el) {
  el.addEventListener('mouseenter', function() {
    // this => el
    // 從 this 去抓 .c-product-btn__text
    const $productText = this.querySelector('.c-product-btn__text');
    // $productImg.src = this.dataset.img;
    $productImg.src = $productText.dataset.img;
    $productImg.alt = $productText.textContent;
  })
});

