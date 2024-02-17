import React, { Component, useEffect, useState  } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';
import './corePage.css'
import Carousel from 'react-bootstrap/Carousel';

const BatchDisplayComponent = ({ data }) => {
  return (
    <div className="grid-container">
      {data.map((story) => (
        <div key={story.id} className="grid-item">
          <a key={story.id} href={story.url} target="_blank" rel="noopener noreferrer" className="grid-item">
          {story.thumbnail && <img src={story.thumbnail} alt={story.title} />}
          </a>
        </div>
      ))}
    </div>
  );
};

const GridComponent = ({start, end}) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    axios.get('http://ec2-16-171-173-230.eu-north-1.compute.amazonaws.com:8000/api/story/get_data/')
      .then(response => setData(JSON.parse(response.data)))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const batches = [];
  for (let i = 0; i < 5; i += 1) {
    batches.push(data[i]);
  }

  return (
    <BatchDisplayComponent data={data.slice(start,end)}/>
  );
};

const TopHome = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
              <div className="d-flex justify-content-center">
                <img
                    src="http://127.0.0.1:8000/static/Dans_LE_Temps_images/dans_le_temps.png"
                  />
              </div>              
        </Col>
      </Row>
    </Container>
  );
};

const Home = () => {

    return (
      <Container className="mt-5">
        <Row>
          <p/>
          <h4>
           À regarder
            </h4>
            <Carousel>
              <Carousel.Item>
                <GridComponent start={0} end={5} />
              </Carousel.Item>
              <Carousel.Item>
                <GridComponent start={5} end={10} />
              </Carousel.Item>
              <Carousel.Item>
                <GridComponent start={10} end={15} />
              </Carousel.Item>
              <Carousel.Item>
                <GridComponent start={15} end={20} />
              </Carousel.Item>
,           </Carousel>
        </Row>
  
        <hr className="my-5" />

      </Container>
    );
  };
  


export default class CorePage extends Component {
  render() {
    return (
        <div >
          <Home/>
      </div>
    )
  }
}
