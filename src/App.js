import './App.scss';
import img from './img/hero-bcg.jpeg'
import {useState} from 'react'
function App() {
  const [pageNumber,setPageNumber] = useState(0)
  const data = [
    {
      id: 0,
      name: 'History',
      description: "I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up."
    },
    {
      id: 1,
      name: 'Vision',
      description: 'Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal deep v hella biodiesel. Church-key listicle polaroid put a bird on it chillwave palo santo enamel pin, tattooed meggings franzen la croix cray. Retro yr aesthetic four loko tbh helvetica air plant, neutra palo santo tofu mumblecore. Hoodie bushwick pour-over jean shorts chartreuse shabby chic. Roof party hammock master cleanse pop-up truffaut, bicycle rights skateboard affogato readymade sustainable deep v live-edge schlitz narwhal.'
    },
    {
      id: 2,
      name: 'Goals',
      description: 'Chambray authentic truffaut, kickstarter brunch taxidermy vape heirloom four dollar toast raclette shoreditch church-key. Poutine etsy tote bag, cred fingerstache leggings cornhole everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk swag, mixtape hashtag marfa readymade direct trade man braid cold-pressed roof party. Small batch adaptogen coloring book heirloom. Letterpress food truck hammock literally hell of wolf beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie, banh mi salvia venmo photo booth quinoa chicharrones.'
    },
    
  ]
  return (
    <div className="App">
      <div className='section'>
        <div className='header'>
          <h2>About</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,aperiam!</p>
        </div>

        <div className='content'>
          <div className='img'>
            <img src={img} alt='ptc' />
          </div>
          <div className='box'>
            <div className='btns'>
              {data.map(item => <div className={`btn ${pageNumber === item.id ? 'active' : ''}`} key={item.id} onClick={() => setPageNumber(item.id)}>{item.name}</div>)}
            </div>

            <div className='box__content'>
              <div className='content__box'>
                <h3>{data[pageNumber].name}</h3>
                <p>{data[pageNumber].description}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
