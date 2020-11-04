import { MDBContainer } from 'mdbreact';
import React from 'react';
import { Media } from 'reactstrap';


const Theory=()=>{
    return(
        <React.Fragment>
            <img src="/img/plant1.jpg" className="img-fluid" alt="Responsive image"/>
            <br/><br/>
            <h1 className="head">PLANT CARE TIPS FOR BETTER NOURISHMENT OF YOUR PLANT</h1>
        </React.Fragment>
    );
}


const Care=(props)=>{
    
    const care=props.plant.map((plant)=>{
        return(
            <MDBContainer><br/><br/><br/><br/>
                <Media key={plant.id}>
                    <Media left href="#">
                    <Media object src={plant.image} className="image" /><br/>
                    </Media>
                    <Media body>
                        <Media heading>{plant.heading}</Media>
                        <p>{plant.description}</p>
                    </Media>
                </Media>
            </MDBContainer>  
        );
    });
        
    
    return(
        <div>
            <div>
                <Theory />
            </div>
            {care}
        </div>
        );
    }

export default Care;

/*
<div className="sec1">
<h1>Feel the Soil to Know How Often to Water Your Plants</h1>
<p>For potted plants at home, you may be unsure of how often to water them. For most plants, the golden rule is to see if the first inch or so of soil is dry. If dry, this is an indication that the plant needs water. If there are leaves that have shriveled or are dry/discolored, the plant might need a little extra water than a regular routine.</p>
</div><br/><br/>
<div className="sec1">
<h1>It’s Better to Underwater Your Plants Than Overwater Them</h1>
<p>A plant can recover faster from being deprived of water than one given excess water. To rescue an overwatered plant, you may need to repot the plant and remove any unhealthy roots and overwatered soil before moving the plant into a new pot.  </p>
</div><br/><br/>
<div>
<h1>Skip Fertilization for Houseplants if You’re Unsure</h1>
<p>Houseplants don’t require fertilization unless they are struggling to grow. If you’re unsure of how much or what type of fertilization to use when planting, it’s better to skip that step altogether. Too much fertilization may actually end up killing your plant rather than helping it.</p>
</div><br/><br/>
<div>
<h1>Houseplants Love Stability </h1>
<p>We recommend scoping out where you’ll put your plant in your house before picking one out. Plants thrive once they are used to their surroundings and finding a spot with the right amount of light is important. Temperature is also important. Fluctuating temperatures will shock your plant and therefore lead to the plant not being able to develop and maybe even die. Most plants prefer temperatures of 65º–75ºF.</p>
</div><br/><br/>
<div>
<h1>Smaller Plants Are the Fastest Growing Plants</h1>
<p>When buying your chosen plant, it’s always better to purchase a smaller plant over a larger one. This is because a smaller plant will be able to get more established in its home and have a larger ratio of roots to top growth. A larger plant will not continue to grow until its roots catch up with the top growth.</p>
</div><br/><br/>
<div>
<h1>Water Deeply, Rather Than Lightly and Frequently</h1>
<p>When you water lightly and frequently, only the top roots are able to drink the water, and your plant may not receive the fuel it needs to survive. Watering deeply, which entails watering your plants heavily with water, allows for all the roots to grab a drink. To avoid overwatering, slowly water your plant and watch for when the water is not draining through the soil anymore. Once you notice this, stop there.</p>
</div><br/><br/>
<div>
<h1>Prune Your Plants</h1>
<p>Getting rid of old-growth on your plants will help your plants grow again. This is kind of like how trimming the dead ends of your hair will help your hair grow again. After winter is when you’ll see some of the tips or leaves of your plant dying, so a simple plant haircut will do!</p>
</div><br/><br/>
<div>
<h1>Most Plants Flourish in High Humidity</h1>
<p>With most homes having dry air, especially in the winter, you may want to adjust the air. This could be as simple as purchasing a humidifier for the rooms of your home that contain your adored plants.</p>
</div><br/><br/>
<div>
<h1>Make Sure Pots Have Drainage Holes</h1>
<p>Having a way for pots to drain is vital for your plant and the soil. Proper drainage allows the roots to receive air, rather than sitting in water and suffocating the roots.</p>
</div><br/><br/>
<div>
<h1>Dust Your Plants!</h1>
<p>Plants that collect too much dust on their leaves can’t get the sunlight they may need to survive, especially green plants and plants with big leaves. A few times per year, use a wet cloth and lightly wipe down the leaves of your plants on both sides. </p>
</div>*/

/*<div className="media" key={plant.id}>
                    <img className="align-self-start mr-3" src={plant.image} alt="Generic placeholder image" />
                    <div className="media-body">
                        <h4 className="mt-0">{plant.heading}</h4>
                        <p>{plant.description}</p>
                    </div>
                </div>*/