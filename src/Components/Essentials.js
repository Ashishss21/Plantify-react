import { MDBContainer } from 'mdbreact';
import React, {Component} from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon } from 'mdbreact';


class Essentials extends Component{
    render(){

        const Matter=()=>{
            return(
                <MDBContainer>
                    <div className="theory">
                    <br/><br/><br/><br/>
                    <h1>Why are plants important? Reasons why we need them</h1>
                    <p>We tend to forget the importance of plants and often take them for granted. You may think there is nothing much to the plants and trees that are around us every day but they are vital for life and our long-term survival. Plants are an essential resource - we rely on them for food, water, medicine, the air we breathe, habitat, our climate and more.</p>
                    <br/><br/>
                    <h1>Habitat</h1>
                    <p>Plants are incredibly important for providing habitats for a huge number of different species. A good example of this is the English oak.<br/>
                        This species supports more life than any other native tree. It provides habitat for hundreds of insects and food for birds and mammals such as deer and badger. It supports fungi, lichens and even bats. Bat species will roost in old woodpecker holes or under loose bark and then feed on the insects in the tree canopy.<br/>
                        Native wildlife depends on native plant and tree species like the English oak - without them they wouldn't be able to sustain themselves.</p>
                    </div>
                </MDBContainer>
            );
        }

        const CardExample = () => {
            return (
                <MDBContainer>
              <MDBRow>
                <MDBCol md='4'>
                  <MDBCard wide cascade>
                    <MDBView cascade>
                      <MDBCardImage
                        hover
                        overlay='white-slight'
                        className='card-img-top'
                        src='/img/pic1.jpg'
                        alt='Card cap'
                      />
                    </MDBView>
          
                    <MDBCardBody cascade className='text-center'>
                      <MDBCardTitle className='card-title'>
                        <strong>PLANTS ADAPTATION</strong>
                      </MDBCardTitle>
          
                      <MDBCardText>
                      Plants have adaptations to help them survive (live and grow) in different areas. Adaptations are special features that allow a plant or animal to live in a particular place or habitat.{' '}
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
          
                <MDBCol md='4'>
                  <MDBCard narrow>
                    <MDBView cascade>
                      <MDBCardImage
                        hover
                        overlay='white-slight'
                        className='card-img-top'
                        src='/img/pic2.jpg'
                        alt='food'
                      />
                    </MDBView>
          
                    <MDBCardBody>
                      <h5 className='pink-text'>
                        <MDBIcon icon='utensils' /> HABITAT
                      </h5>
          
                      <MDBCardTitle className='font-weight-bold'>
                        LIFE OF PLANTS
                      </MDBCardTitle>
          
                      <MDBCardText>
                      In ecology, a habitat is the type of natural environment in which a particular species of organism lives. A species's habitat is those places where the species can find food, shelter, protection and mates for reproduction.
                      </MDBCardText>
          
                      <MDBBtn color='unique' href="https://en.wikipedia.org/wiki/Habitat">Button</MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
          
                <MDBCol md='4'>
                  <MDBCard>
                    <MDBCardImage
                      hover
                      overlay='white-light'
                      className='card-img-top'
                      src='/img/pic3.jpg'
                      alt='man'
                    />
          
                    <MDBCardBody cascade className='text-center'>
                      <MDBCardTitle className='card-title'>
                        <strong>ENVIRONMENT</strong>
                      </MDBCardTitle>
          
                      <p className='font-weight-bold blue-text'>Wev developer</p>
          
                      <MDBCardText>
                      Plants are considered a critical resource because of the many ways they support life on Earth. They release oxygen into the atmosphere, absorb carbon dioxide, provide habitat and food for wildlife and humans, and regulate the water cycle{' '}
                      </MDBCardText>
          
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
              </MDBContainer>
            );
          }

          const Theory=()=>{
              return(
                  <MDBContainer>
                      <h1>Air pollution</h1>
                      <p>A range of chemical pollutants can cause problems to health in industrial and urban environments. It has been increasingly shown that the presence of green spaces in these areas can be vital in acting as a sink for these pollutants, therefore improving air quality.<br/>
                      Any green space has the capability of reducing air pollution. Woodland planted in the right areas near urban and industrial environments would be particularly effective due to the increase in surface area able to absorb the pollutants.</p>

                      <br/><br/>

                      <h1>Soil quality</h1>
                      <p>Plants and trees are incredibly important for maintaining good soil condition. Their roots and the microorganisms that live around their roots hold the soil together, reducing the likelihood of soil erosion. When leaves fall from the trees and when plants die, they decompose, fertilising the soil and enabling other plants to grow and thrive.</p>

                      <br/><br/>

                      <h1>Climate</h1>
                      <p>Carbon dioxide (CO2) is one of the main greenhouse gases that contributes to climate change. Plants take in CO2 and release oxygen through the process of photosynthesis. This CO2 is used as building blocks for new tissue such as their trunk, branches, leaves, and roots acting as carbon stores.<br/>
                      When forests are cut or burnt, the huge amounts of carbon that has been stored in plant tissue and the soil is released into the atmosphere. This is why it is so important to protect these habitats, especially ancient primary forests containing native species that have had little human disturbance in that past.</p>
                  </MDBContainer>
              );
          }
          
          
        const CardEx = () => {
            return (
                <MDBContainer>
              <MDBRow>
                <MDBCol md='4'>
                  <MDBCard wide cascade>
                    <MDBView cascade>
                      <MDBCardImage
                        hover
                        overlay='white-slight'
                        className='card-img-top'
                        src='/care/file1.jpg'
                        alt='Card cap'
                      />
                    </MDBView>
          
                    <MDBCardBody cascade className='text-center'>
                      <MDBCardTitle className='card-title'>
                        <strong>AIR POLLUTION</strong>
                      </MDBCardTitle>          
                      <MDBCardText>
                      Air pollutants have a negative impact on plant growth, primarily through interfering with resource accumulation. ince leaves are in close contact with the atmosphere, many air pollutants, such as O3 and NOx,{' '}
                      </MDBCardText>
          
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
          
                <MDBCol md='4'>
                  <MDBCard narrow>
                    <MDBView cascade>
                      <MDBCardImage
                        hover
                        overlay='white-slight'
                        className='card-img-top'
                        src='/care/file2.jpg'
                        alt='food'
                      />
                    </MDBView>
          
                    <MDBCardBody>
                      <h5 className='pink-text'>
                        <MDBIcon icon='utensils' /> Plants Save you from pollution
                      </h5>
          
                      <MDBCardText>
                      Plants improve air quality through several mechanisms: they absorb carbon dioxide and release oxygen through photosynthesis, they increase humidity by transpiring water vapor
                      </MDBCardText>
          
                      <MDBBtn color='unique' href="https://en.wikipedia.org/wiki/Pollution">Button</MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
          
                <MDBCol md='4'>
                  <MDBCard>
                    <MDBCardImage
                      hover
                      overlay='white-light'
                      className='card-img-top'
                      src='/care/file3.jpg'
                      alt='man'
                    />
          
                    <MDBCardBody cascade className='text-center'>
                      <MDBCardTitle className='card-title'>
                        <strong>Air Pollution</strong>
                      </MDBCardTitle>
          
                      <MDBCardText>
                      Air pollutants have a negative impact on plant growth, primarily through interfering with resource accumulation. ince leaves are in close contact with the atmosphere, many air pollutants,{' '}
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
              </MDBContainer>
            );
        }

        const Fail=()=>
        {
            return(
                <MDBContainer>
                    <h1>Wellbeing</h1>
                    <p>Trees and plants are not only good for the environment, they can benefit our general wellbeing as well. Research has shown that having access to woodland can have several benefits, including increase in physical health, mental wellbeing and our quality of life. Studies also show that exercise in these green spaces can reduce stress and anxiety, improve self-esteem and mood.</p>

                    <br/><br/>

                    <h1>Medicine</h1>
                    <p>Plants play an important role in the discovery of new drugs and many blockbuster drugs are derived either directly or indirectly from plants. It's important that we protect biodiversity of plants so that new drug discoveries can be made in the future. This has a huge impact on health and is also an economic benefit.</p>
                
                    <br/><br/>

                    <h1>Food</h1>
                    <p>Without plants there would be no food. All carbon in proteins, fats and carbohydrates is derived from photosynthesis in plants. Everything we eat, including meat from animals (which feed on plants) is a result of plants using the energy in sunlight to take carbon dioxide and create complex carbon-containing molecules.</p>
                
                    <br/><br/>

                    <h1>We need to protect our native plants and trees</h1>
                    <p>Protecting our native plants and trees is vital. They are the ecological basis upon which wildlife depends. Native plants support significantly more wildlife than non-native species. They are adapted to the local climate, soil type and wildlife and without them, native wildlife would not be sustained.<br/>
                    Having a diverse and rich variety of plants is not only socially and environmentally important - they also have great economic benefits through farming and tourism. Plants are vital for life.</p>
                </MDBContainer>
            );
        }

        const Theory1=()=>{
          return(
              <React.Fragment>
                  <img src="/img/back.jpg" className="img-fluid" alt="Responsive image"/>
                  <br/><br/>
              </React.Fragment>
          );
      }

        return(
            <div>
                <Theory1 />
                <br/><br/>
                <Matter />
                <br/><br/>
                <CardExample />
                <br/><br/>
                <Theory />
                <br/><br/>
                <CardEx />
                <br/><br/>
                <Fail />
            </div>
        );
    }
}

export default Essentials;