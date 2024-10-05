import reactImg from '../../assets/react-core-concepts.png';
import './Header.css';

export default function Header() {

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>Nano-Technology</h1>
      <p>
        Nanotechnology manipulates matter at the atomic level to innovate materials and devices.
      </p>
    </header>
  );
}