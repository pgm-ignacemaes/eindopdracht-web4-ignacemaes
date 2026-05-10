import gsap from "gsap";

export const hamburgerIconTween = ($elements) => {
  $elements.forEach(($element, index) => {
    gsap.to($element, {
      rotateZ: index % 2 === 0 ? 45 : -45,
      y: index % 2 === 0 ? 3 : -3,
      duration: 0.5,
    });
  });
};
