import './marker.css';

export default function MarkerIcon(title: string) {
  return `<div class="marker-wrapper"><p class="marker-wrapper__title">${title}</p><img src="/images/Pin.png" /></div>`;
}
