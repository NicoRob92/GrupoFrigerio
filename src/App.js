import './App.css';
import img from './GrupoFrigerio.png';
import img2 from './GrupoFirgerioText.png.png';
import elbosque from './elBosque.png';
import { MapContainer, TileLayer , Marker, Popup} from 'react-leaflet';

function App() {
//   var myIcon = icon({
//     iconUrl: elbosque,
//     iconSize: [38, 95],
//     iconAnchor: [22, 94],
//     popupAnchor: [-3, -76],
//     shadowUrl: 'my-icon-shadow.png',
//     shadowSize: [68, 95],
//     shadowAnchor: [22, 94]
// });
  return (
    <div className='App'>
      <img className='logo' src={img} alt='Grupo' />
      <div className='imgContainer'>
        <div className='img'>
          <div className='filtro'>
            <h1 className='NamePlace'>GRUPO FRIGERIO</h1>
            <img className='title' src={img} alt='logo' />
            <div className='buttons'>
              <a href='http://'>Website</a>
              <a href='http://'>Reservas</a>
            </div>
          </div>
        </div>
        <div className='img2'>
          <div className='filtro'>
            <h1 className='NamePlace'>HOSTERIA EL BOSQUE</h1>
            <img className='title' src={elbosque} alt='logo' />
            <div className='buttons'>
              <a href='http://'>Website</a>
              <a href='http://'>Reservas</a>
            </div>
          </div>
        </div>
      </div>
      <div className='History'>
        <img className='logoText' src={img2} alt='gru' />
        <h1> Nuestra Historia </h1>
        <p>
          Durante más de 35 años, la empresa familiar Grupo Frigerio se ha
          integrado a los estándares de excelencia a medida que ha ampliado sus
          intereses en el negocio de la construcción, bienes raíces
          residenciales , proyección y diseño arquitectónico.
        </p>
        <p>
          {' '}
          Este compromiso duradero está dando a Frigerio la designación de ser
          un gran desarrollador prominente de bienes raíces para todos los
          estándares sociales de la región. Con visión a una expansión global.
        </p>
      </div>
      <div className='mapa'>
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={false}
          style={{width:'100%', height:'100%'}}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <Marker position={[51.505, -0.09]} iconUrl={elbosque}>
          <Popup>
          Hosteria El Bosque.
          </Popup> 
        </Marker> 
        </MapContainer>
      </div>
      <p className='ittechgroup'>© 2021 CRIPGO | Developed by <a href='https://it-techgroup.com/'>IT-TECHGROUP</a></p>
    </div>
  );
}

export default App;
