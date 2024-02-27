import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import imge from  '../../../../assets/image/ime.png';
import imge1 from '../../../../assets/image/ime1.png';
import imge2 from '../../../../assets/image/ime2.png';
import imge3 from '../../../../assets/image/ime3.png';
import imge4 from '../../../../assets/image/ime4.png';
import imge5 from '../../../../assets/image/ime5.png';

const Banner = () => {
    return (
        <Carousel>
        <div>
            <img src={imge} />
            
        </div>
        <div>
            <img src={imge1} />
            
        </div>
        <div>
            <img src={imge2} />
            
        </div>
        <div>
            <img src={imge3} />
            
        </div>
        <div>
            <img src={imge4} />
            
        </div>
        <div>
            <img src={imge5} />
            
        </div>
       </Carousel>
    );
};

export default Banner;