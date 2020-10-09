import handleRouts from "./handleRouts";

let previousRoute = null;

export default function categoryClick(e) {
  if (!(e.target.closest('.nav__link') || e.target.closest('.category '))) {
    return false;
  }
  let targetContainer = e.target.closest('.nav__link') || e.target.closest('.category ');
  let route = targetContainer?.dataset?.section;
  if (previousRoute !== route) {
    previousRoute = route;
    handleRouts(route);
  }
}
